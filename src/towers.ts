// import { GridPosition } from "./terrain";

import { DAMAGE_TO_TOWER_HEALTH_COEF, TOWER_HEALTH_REGEN } from "./config";
import { HealthBar } from "./healthBar";
import { TDScene } from "./scenes/tdScene";
import { Terrain, TILE_SIZE } from "./terrain";
import { TowerConfig, RANGE_INDICATOR_CONFIG } from "./config";
import { PlayerInfo } from "./playerInfo";
import { EnemyBase } from "./enemy";
import { HudScene } from "./scenes/hudScene";


// todo: move to scene?
function getEnemy(x, y, range, enemies, numToGet): EnemyBase[] {
    let outEnemies: EnemyBase[] = [];

    for (let enemyGroup in enemies) {
        let enemyUnits = enemies[enemyGroup].getChildren();
        for (let i = 0; i < enemyUnits.length; i++) {
            if (enemyUnits[i].active && Phaser.Math.Distance.Between(x, y, enemyUnits[i].x, enemyUnits[i].y) <= range) {
                outEnemies.push(enemyUnits[i]);
            }
        }
    }

    if (outEnemies.length > 0) {
        outEnemies.sort((a, b) => b.follower.t - a.follower.t)
        outEnemies.length = Math.min(numToGet, outEnemies.length)
        return outEnemies
    }
    return null
}


export class Tower extends Phaser.GameObjects.Container {
    config: TowerConfig
    stats: TowerConfig

    scene: TDScene

    towerTurret: _TowerTurret
    towerMid: Phaser.GameObjects.Sprite
    towerBase: Phaser.GameObjects.Sprite
    healthBar: HealthBar
    rangeIndicator: Phaser.GameObjects.Shape

    level: integer
    levelText: Phaser.GameObjects.Text

    xCoord: number
    yCoord: number

    particles: Phaser.GameObjects.Particles.ParticleEmitterManager
    emitter: Phaser.GameObjects.Particles.ParticleEmitter

    private innerTowerSceneKey: string

    constructor(towerScene: TDScene) {
        super(towerScene, 0, 0)
        this.healthBar = new HealthBar(towerScene)
        this.scene = towerScene;

        this.particles = this.scene.add.particles('particle_red');
        this.emitter = this.particles.createEmitter({
            lifespan: 200,
            blendMode: 'ADD',
            speed: 0,
            scale: {start: 0, end: 1},
            on: false
        });
    }

    public levelUp() {
        this.level++;
        if (this.scene == this.scene.metaScene.activeScene)
            this.scene.metaScene.levelupSound.play();
        this.emitter.explode(20, this.xCoord, this.yCoord);  // this.x doesn't work btw
    }


    public make(i: number, j: number, innerTowerSceneKey: string, config: TowerConfig, towerClassName) {
        this.config = config
        this.stats = this.config;

        this.towerTurret = new towerClassName(this.scene, this.config, this);

        this.towerTurret.setActive(true);
        this.towerTurret.setVisible(true);

        this.xCoord = i * TILE_SIZE + TILE_SIZE / 2
        this.yCoord = j * TILE_SIZE + TILE_SIZE / 2

        this.towerBase = this.scene.add.sprite(this.xCoord, this.yCoord, 'towerbases', this.config.spriteBase);
        this.towerBase.setTint(this.config.tintBase);
        this.add(this.towerBase);
        this.towerMid = this.scene.add.sprite(this.xCoord, this.yCoord, 'towermids', this.config.spriteMid);
        this.towerMid.setTint(this.config.tintMid);
        this.towerMid.anims.play({
            key: `towerMids_spin`
        })
        this.add(this.towerMid);

        this.rangeIndicator = this.scene.add.circle(
            this.xCoord, this.yCoord, config.range(1),
            RANGE_INDICATOR_CONFIG.colour,
            RANGE_INDICATOR_CONFIG.alpha
        );
        this.rangeIndicator.setStrokeStyle(RANGE_INDICATOR_CONFIG.edgeWidth, RANGE_INDICATOR_CONFIG.edgeColour);
        this.rangeIndicator.setVisible(false);
        this.add(this.rangeIndicator);

        this.towerBase.setInteractive();
        this.towerBase.on('pointerover', () => {
            this.scene.children.bringToTop(this);
            this.scene.children.list.forEach(child => {
                if (child.constructor.name.match(/^.+Enemy$/)) {
                    this.scene.children.bringToTop(child);
                }
            });
            this.rangeIndicator.setVisible(true);

            let hudScene = this.scene.scene.get("hudScene") as HudScene
            hudScene.setDescriptionTower(this.config, this)
        });
        this.towerBase.on('pointerout', () => { this.rangeIndicator.setVisible(false) });

        this.towerTurret.place(i, j, this.scene.terrain);
        this.scene.terrain.placeTower(i, j, this);

        this.add(this.towerTurret);

        this.healthBar.make(this.xCoord, this.yCoord + TILE_SIZE / 2 - 8, TILE_SIZE - 14)
        this.add(this.healthBar)

        this.level = 1

        const pad = 3
        this.levelText = this.scene.add.text(
            this.xCoord + 15, this.yCoord - 4, "" + this.level,
            {
                fontSize: "20px",
                color: "white",
                backgroundColor: "black",
                padding: { left: pad, right: pad, top: pad, bottom: pad }
            }
        )
        this.add(this.levelText)

        this.innerTowerSceneKey = innerTowerSceneKey

        let innerTowerScene = this.scene.scene.get(innerTowerSceneKey) as TDScene
        innerTowerScene.onEnemyReachedEnd((damage) => {
            this.healthBar.health -= damage * DAMAGE_TO_TOWER_HEALTH_COEF
        })
    }

    update(_, delta) {
        delta *= PlayerInfo.timeScale;

        this.towerTurret.update(delta)

        this.healthBar.health += TOWER_HEALTH_REGEN * delta

        if (this.healthBar.health >= 1.0) {
            this.healthBar.levelUp();
            this.levelUp()
            this.levelText.setText("" + this.level)

            if (this.stats.range(this.level - 1) < this.stats.range(this.level)) {
                let rangeScale = this.stats.range(this.level) / this.stats.range(1);
                this.rangeIndicator.setScale(rangeScale);
            }
        }

        this.healthBar.update(delta)
    }

    getInnerTowerSceneKey() {
        return this.innerTowerSceneKey
    }
}


abstract class _TowerTurret extends Phaser.GameObjects.Image {
    nextTic: number
    x: number
    y: number
    baseX: number
    baseY: number
    parent: Tower

    scene: TDScene

    constructor(scene: TDScene, sprite: string, tint: number, parent: Tower) {
        super(scene, 0, 0, 'towertops', sprite);
        this.parent = parent;
        this.setTint(tint);
        this.nextTic = 0;
    }

    // we will place the tower according to the grid
    place(i: integer, j: integer, terrain: Terrain) {
        [this.x, this.y] = terrain.fromGridPos(i, j)
        this.baseX = this.x
        this.baseY = this.y
    }

    fire() {
        let enemies = getEnemy(
            this.x, this.y, this.parent.stats.range(this.parent.level),
            this.scene.allEnemies, 1
        );
        if (enemies) {
            let enemy = enemies[0]

            let [xPred, yPred] = this.predictEnemyPositionForShot(enemy)
            let angle = Phaser.Math.Angle.Between(this.x, this.y, xPred, yPred);

            let damage = this.parent.stats.damage(this.parent.level)
            this.scene.addBullet(
                this.x, this.y, angle,
                damage,
                this.parent.stats.range(this.parent.level),
                this.parent.stats.bulletSpeedMod
            );
            this.fireAnimation(angle, damage);
            if (this.scene == this.scene.metaScene.activeScene)
                this.scene.metaScene.shootSound.play();
            return true;
        }
        return false
    }

    predictEnemyPositionForShot(enemy: EnemyBase) {
        // Approximate where the enemy is going to be when the bullet hits it.

        // Compute the time to hit enemy when aiming directly at it
        let distance = Phaser.Math.Distance.Between(this.x, this.y, enemy.x, enemy.y)
        let speed = this.parent.stats.bulletSpeedMod * this.parent.stats.range(this.parent.level)
        let msToHit = distance / speed * 1000

        // Shoot at the point where the enemy will be after msToHit milliseconds.
        let t2 = enemy.follower.t + enemy.speed * msToHit
        let res = this.scene.terrain.path.getPoint(Math.min(t2, 1))
        return [res.x + enemy.xOffset, res.y + enemy.yOffset]
    }

    fireAnimation(angle, damage) {
        this.angle = (angle + Math.PI / 2) * Phaser.Math.RAD_TO_DEG;
        let recoil = Math.min(damage * 0.5, 25)
        this.x = this.baseX
        this.y = this.baseY
        this.scene.tweens.add({
            targets: this,
            duration: Math.min(this.parent.config.firerate(this.parent.level) * 0.8, 100 + damage),
            x: this.x + Math.cos(angle + Math.PI) * recoil,
            y: this.y + Math.sin(angle + Math.PI) * recoil,
            ease: 'Quad',
            yoyo: true
        })
    }

    lastTime: number = 0
    update(delta) {
        this.lastTime += delta

        if (this.lastTime > this.nextTic) {
            if (this.fire())
                this.nextTic = this.lastTime + this.parent.stats.firerate(this.parent.level)
            else
                this.nextTic = this.lastTime + 50;
        }
    }
}

export class BasicTurret extends _TowerTurret {

    constructor(scene: TDScene, config, parent) {
        super(scene, config.spriteTop, config.tintTop, parent);
    }
}


export class MultishotTurret extends _TowerTurret {

    constructor(scene: TDScene, config, parent) {
        super(scene, config.spriteTop, config.tintTop, parent);
    }


    fire() {  // this behaviour should be in _TowerTurret.fire btw
        let numTargets = 3
        if (this.parent.stats.numTargets) {
            numTargets = this.parent.stats.numTargets(this.parent.level);
        }
        let enemies = getEnemy(this.x, this.y, this.parent.stats.range(this.parent.level), this.scene.allEnemies, numTargets);

        if (enemies && enemies.length > 0) {
            for (let enemy of enemies) {
                let angle = Phaser.Math.Angle.Between(this.x, this.y, enemy.x, enemy.y);
                let damage = this.parent.stats.damage(this.parent.level)
                this.scene.addBullet(
                    this.x, this.y, angle,
                    damage,
                    this.parent.stats.range(this.parent.level),
                    this.parent.stats.bulletSpeedMod
                );
                this.fireAnimation(angle, damage)
                if (this.scene == this.scene.metaScene.activeScene)
                    this.scene.metaScene.multishotSound.play();  // this should be in config if this were done properly
            }
            return true
        }
        return false
    }
}

export class SniperTurret extends _TowerTurret {

    constructor(scene: TDScene, config, parent) {
        super(scene, config.spriteTop, config.tintTop, parent);
    }
}
