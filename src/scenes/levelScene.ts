import { GroundPlayer } from "../groundPlayer";
import { Hose } from "../hose";
import { HosePlayer } from "../hosePlayer";
import { Fire } from "../fire";
import { createElVictimoGroup, ElVictimo } from "../elVictimo";
import { Player } from "../player";

const HOSE_PLAYER_SPRITE_KEY = 'hosePlayer';
const GROUND_PLAYER_SPRITE_KEY = 'groundPlayer';
const EL_VICTIMO_SPRITE_KEY = 'elVictimo';

const FLOOR_WIDTH = 32 * 32;
const FLOOR_HEIGHT = 32 * 7;

export class LevelScene extends Phaser.Scene {
    hosePlayer: HosePlayer;
    groundPlayer: GroundPlayer;
    floor;
    walls;
    fires: Phaser.Physics.Arcade.StaticGroup;
    doors: Phaser.Physics.Arcade.StaticGroup;
    elVictimos: Phaser.Physics.Arcade.Group;
    platforms;
    players: Phaser.Physics.Arcade.Group;
    score = 0;
    gameOver = false;
    scoreText;
    hose: Hose;

    constructor() {
        super({
            key: 'level',
        });
    }

    public preload() {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');

        this.load.image('tiles', 'assets/TilesetMap.png');
        for (let i = 1; i <= 1; i++) {
            this.load.tilemapTiledJSON(`room${i}`, `assets/room${i}.json`);
        }

        this.load.image('fire', 'assets/star.png');
        this.load.image(EL_VICTIMO_SPRITE_KEY, 'assets/elVictimo.png');

        this.load.spritesheet(HOSE_PLAYER_SPRITE_KEY, 'assets/jose_sprites.png', { frameWidth: 65, frameHeight: 120 });
        this.load.spritesheet(GROUND_PLAYER_SPRITE_KEY, 'assets/hosePlayer.png', { frameWidth: 32, frameHeight: 48 });

        this.load.atlas('flares', 'assets/flares.png', 'assets/flares.json');

        for (let i = 1; i <= 3; i++) {
            this.load.spritesheet(`fire${i}`, `assets/fire${i}.png`, { frameWidth: 50, frameHeight: 60 });
        }
    }

    public create() {
        for (let i = 1; i <= 3; i++) {
            this.anims.create({
                key: `fire${i}anim`,
                frames: this.anims.generateFrameNumbers(`fire${i}`, { start: 0, end: 60 }),
                frameRate: 60,
                repeat: -1
            });
        }

        //  A simple background for our game
        this.add.image(600, 350, 'sky').setScale(2);

        //  The platforms group contains the ground
        this.platforms = this.physics.add.staticGroup();

        //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
        this.platforms.create(600, 716, 'ground').setScale(3).refreshBody(); // 3 * 32 / 2 = 48


        this.fires = this.physics.add.staticGroup();
        this.loadRoom('room1', 0);
        // this.loadRoom('room1', 1);

        // Create players.
        this.hosePlayer = new HosePlayer(this, 400, 400, HOSE_PLAYER_SPRITE_KEY);
        this.groundPlayer = new GroundPlayer(this, 200, 400, GROUND_PLAYER_SPRITE_KEY);
        this.players = this.physics.add.group([this.hosePlayer.sprite, this.groundPlayer.sprite]);
        this.hosePlayer.setPhysicsProperties();
        this.groundPlayer.setPhysicsProperties();
        this.hosePlayer.sprite.setDepth(1);


        let door = new Door(this, 600, 400);
        this.doors = this.physics.add.staticGroup([door.doorSprite]);
        door.addKey(this, 800, 400);

        // Victims.
        this.elVictimos = createElVictimoGroup(this, [
            new Phaser.Math.Vector2(200, 150),
            new Phaser.Math.Vector2(300, 350),
            new Phaser.Math.Vector2(400, 450),
            new Phaser.Math.Vector2(500, 50),
        ], EL_VICTIMO_SPRITE_KEY);
        this.elVictimos.runChildUpdate = true;

        //  The score
        this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px' });

        // Collisions.
        this.physics.add.collider(this.players, this.platforms);
        this.physics.add.collider(this.players, this.doors);
        this.physics.add.collider(this.hosePlayer.particles, this.platforms);
        this.physics.add.overlap(this.hosePlayer.particles, this.groundPlayer.sprite, this.onGrandWaterCollision, null, this);
        this.physics.add.collider(this.elVictimos, this.platforms);

        // Collide with floor map.
        this.physics.add.collider(this.players, this.walls);
        this.physics.add.collider(this.elVictimos, this.walls);
        this.physics.add.collider(this.hosePlayer.particles, this.walls);

        this.physics.add.overlap(this.groundPlayer.sprite, this.elVictimos, this.pickUpElVictimo, null, this);
        this.physics.add.collider(this.hosePlayer.particles, this.fires, this.extinguishFire, null, this);
        this.physics.add.overlap(this.players, this.fires, this.onPlayerFireCollision, null, this);


        // Create hose.
        this.hose = new Hose(this, this.hosePlayer.sprite.x, this.hosePlayer.sprite.y);
        this.hose.attachEndTo(this.hosePlayer.sprite.body);

        this.physics.disableUpdate();
    }

    public update(time, delta) {  // delta is in ms
        if (this.gameOver) {
            return;
        }

        this.hosePlayer.update(time, delta);
        this.groundPlayer.update(time, delta);

        // if (Math.random() < 0.01){
        this.hose.update(time, delta);
        // }

        this.elVictimos.preUpdate(time, delta);

        this.physics.world.update(time, delta);
    }

    public extinguishFire(particle, fire) {
        particle.setActive(false);
        particle.setVisible(false);
        fire.lowerHp();

        //  Add and update the score
        if (fire.hp <= 0) {
            this.score += 1;
            this.scoreText.setText('Score: ' + this.score);
        }

        if (this.fires.countActive(true) === 0) {
            //  A new batch of fires to collect
            this.fires.children.iterate(function (child: Fire) {
                child.resetHp();
            });
        }
    }

    private pickUpElVictimo(_groundPlayer, elVictimo) {
        // Note: The first argument is unused because I couldn't get the GroundPlayer object out of it, just ArcadeSprite. 
        if (this.groundPlayer.pickUp(this.time.now, elVictimo)) {
            elVictimo.pickedUpBy(this.groundPlayer);
        }
    }

    private onPlayerFireCollision(
        playerSprite: Phaser.Physics.Arcade.Sprite,
        fire: Fire,
    ) {
        let player: Player = (playerSprite === this.hosePlayer.sprite) ? this.hosePlayer : this.groundPlayer;
        player.onFireCollision(fire, this);
    }

    private onGrandWaterCollision(groundPlayerSprite, water) {
        // water.collided is a semihack
        if (water.collided) return;
        groundPlayerSprite.body.setVelocity(
            water.body.velocity.x / this.groundPlayer.WATER_STRENGTH_FACTOR,
            water.body.velocity.y / this.groundPlayer.WATER_STRENGTH_FACTOR);

        const f = this.groundPlayer.PLAYER_STRENGTH_ON_WATER_FACTOR;
        water.body.setVelocity(-water.body.velocity.x / Phaser.Math.Between(f - 2, f + 2), -water.body.velocity.y / Phaser.Math.Between(f - 2, f + 2));
        water.collided = true;
    }

    private loadRoom(roomId: string, floorNum: number) {
        this.floor = this.make.tilemap({ key: roomId });

        const tileset = this.floor.addTilesetImage('TilesetMap', 'tiles');
        const offsetX = (1200 - FLOOR_WIDTH) / 2;
        const offsetY = 700 - 32 - (FLOOR_HEIGHT * (floorNum + 1));
        this.walls = this.floor.createStaticLayer('walls', tileset, offsetX, offsetY);
        this.floor.createStaticLayer('window', tileset, offsetX, offsetY);
        this.walls.setCollisionByExclusion(-1, true);

        // Fires.
        this.floor.getObjectLayer('fires')?.objects.forEach((fireTile) => {
            let fire = new Fire(this, offsetX + fireTile.x + 15, offsetY + fireTile.y - 40, 'fire');
            this.fires.add(fire, true);
            fire.body.setSize(30, 60, true);
            fire.updateScale();
        });
    }
}