import { ElVictimo } from "./elVictimo";
import { Player } from "./player";
import { LevelScene } from "./scenes/levelScene";

export class Fire extends Phaser.Physics.Arcade.Sprite {
    hp: number;
    baseHp: number;
    fireNum: number;
    baseScale: number;
    scene;

    ON_DAMAGE_VELOCITY_X = 300;
    ON_DAMAGE_VELOCITY_Y = 100;
    INVINCIBILITY_TIME_MS = 500;
    FIRE_PLAYER_COLLISION_PENALTY_MS = 2000;

    constructor(scene: Phaser.Scene, x, y, textureKey, hp = 50) {
        super(scene, x, y, textureKey);
        this.hp = hp;
        this.baseHp = hp;

        // this.sprite = scene.physics.add.sprite(x, y, spriteKey);
        this.fireNum = 1 + Math.floor((Math.random() * 3) % 3);
        if (this.fireNum == 2)
            this.y = this.y - 10;
        if (this.fireNum == 3)
            this.y = this.y + 5;
        this.anims.play(`fire${this.fireNum}anim`, true);
        this.anims.setProgress(Math.random());
        if (Math.random() < 0.5) {
            this.setFlipX(true);
        }
        this.setRotation(Phaser.Math.RND.rotation() * 0.05)
        this.scene = scene;
        this.baseScale = Phaser.Math.RND.realInRange(0.9, 1.1)
    }

    public updateScale() {
        const scale = 2 * this.baseScale * ((this.hp + this.baseHp) / (2 * this.baseHp));
        this.setScale(scale);

        // TODO: center the scaling on the bottom edge
        // const offset = -(scale - 1) * this.height / 2
        // this.setOffset(0, offset)
        if (this.fireNum == 2)
            this.body.setOffset(10, 25);
        else if (this.fireNum == 3)
            this.body.setOffset(10, 10);
        else
            this.body.setOffset(10, 15);

    }

    public lowerHp() {
        this.hp--;

        if (this.hp <= 0 && this.active) {
            this.scene.tssSounds[Math.floor(Math.random() * this.scene.tssSounds.length)].play();

            this.setActive(false);
            // this.setVisible(false);
            this.body.enable = false;

            this.scene.tweens.add({
                targets: this,
                alpha: 0,
                scale: 0.5,
                duration: 200,
                ease: 'Power2'
                // ease: 'Linear'
            });
        }
        this.updateScale();
    }

    public resetHp() {
        this.hp = this.baseHp;
        this.setActive(true);
        this.setVisible(true);
        this.body.enable = true;
        this.updateScale();
        this.setAlpha(1);
    }

    public onFireCollision(damagedGuy: Player | ElVictimo, scene: LevelScene) {
        scene.auSounds[Math.floor(Math.random() * scene.auSounds.length)].play();

        if (damagedGuy.invincible) return;

        let damagedSprite: Phaser.GameObjects.Sprite | any;
        if (damagedGuy instanceof ElVictimo) {
            damagedSprite = damagedGuy
        } else {
            damagedSprite = damagedGuy.sprite;
        }
    
        const positionDiff = damagedSprite.getCenter().clone().subtract(this.getCenter());
        damagedSprite.setVelocityX(this.ON_DAMAGE_VELOCITY_X * (positionDiff.x > 0 ? 1 : (-1)));
        damagedSprite.setVelocityY(-this.ON_DAMAGE_VELOCITY_Y);

        scene.timer.total_ms = Math.max(scene.timer.total_ms - this.FIRE_PLAYER_COLLISION_PENALTY_MS, 0);
        damagedSprite.setTint(0xFF0000);
        // this.invincible = true;
        // serol.alpha = 0.5;
        scene.time.addEvent({
            delay: this.INVINCIBILITY_TIME_MS,
            callback: () => {
                damagedSprite.clearTint();
                damagedGuy.invincible = false;
            },
            loop: false
        });
    }
}