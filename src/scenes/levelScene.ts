import { GroundPlayer } from "../groundPlayer";
import { Hose } from "../hose";
import { HosePlayer } from "../hosePlayer";
import { Fire, createFireGroup } from "../fire";
import { createElVictimoGroup, ElVictimo } from "../elVictimo";
import { Player } from "../player";

const HOSE_PLAYER_SPRITE_KEY = 'hosePlayer';
const GROUND_PLAYER_SPRITE_KEY = 'groundPlayer';
const EL_VICTIMO_SPRITE_KEY = 'elVictimo';

export class LevelScene extends Phaser.Scene {
    hosePlayer: HosePlayer;
    groundPlayer: GroundPlayer;
    floor;
    walls;
    fires: Phaser.Physics.Arcade.StaticGroup;
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
        this.load.tilemapTiledJSON('testfloor', 'assets/room1.json');

        this.load.image('fire', 'assets/star.png');
        this.load.image(EL_VICTIMO_SPRITE_KEY, 'assets/elVictimo.png');
        this.load.spritesheet(HOSE_PLAYER_SPRITE_KEY, 'assets/hosePlayer.png', { frameWidth: 32, frameHeight: 48 });
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
        this.add.image(400, 300, 'sky').setScale(3);

        //  The platforms group contains the ground and the 2 ledges we can jump on
        this.platforms = this.physics.add.staticGroup();

        //  Here we create the ground.
        //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
        this.platforms.create(600, 716, 'ground').setScale(3).refreshBody(); // 3 * 32 / 2 = 48

        //  Now let's create some ledges
        // this.platforms.create(600, 400, 'ground');
        // this.platforms.create(50, 250, 'ground');
        // this.platforms.create(750, 220, 'ground');
        this.floor = this.make.tilemap({ key: 'testfloor' });

        const tileset = this.floor.addTilesetImage('TilesetMapFinal2', 'tiles');
        const FLOOR_WIDTH = 32 * 32;
        const FLOOR_HEIGHT = 32 * 8;

        this.walls = this.floor.createStaticLayer('walls', tileset, (1200 - FLOOR_WIDTH) / 2, 700 - FLOOR_HEIGHT);
        this.floor.createStaticLayer('window', tileset, (1200 - FLOOR_WIDTH) / 2, 700 - FLOOR_HEIGHT);
        this.walls.setCollisionByExclusion(-1, true);
        // Create player
        this.hosePlayer = new HosePlayer(this, 100, 400, HOSE_PLAYER_SPRITE_KEY);
        this.groundPlayer = new GroundPlayer(this, 200, 400, HOSE_PLAYER_SPRITE_KEY);
        
        this.players = this.physics.add.group([this.hosePlayer.sprite, this.groundPlayer.sprite]);
        this.hosePlayer.setPhysicsProperties()
        this.groundPlayer.setPhysicsProperties()

        this.fires = createFireGroup(this, [
            new Phaser.Math.Vector2(100, 350),
            new Phaser.Math.Vector2(200, 350),
            new Phaser.Math.Vector2(400, 250),
            new Phaser.Math.Vector2(500, 150),
        ]);

        this.elVictimos = createElVictimoGroup(this, [
            new Phaser.Math.Vector2(200, 150),
            new Phaser.Math.Vector2(300, 350),
            new Phaser.Math.Vector2(400, 450),
            new Phaser.Math.Vector2(500, 50),
        ], EL_VICTIMO_SPRITE_KEY);
        this.elVictimos.runChildUpdate = true;

        //  The score
        this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px' });

        //  Collide the this.hosePlayer and the this.stars with the this.platforms
        this.physics.add.collider(this.players, this.platforms);
        this.physics.add.collider(this.hosePlayer.particles, this.platforms);
        this.physics.add.collider(this.hosePlayer.particles, this.groundPlayer.sprite);
        this.physics.add.collider(this.fires, this.platforms);
        this.physics.add.collider(this.elVictimos, this.platforms);

        // Collide with floor map.
        this.physics.add.collider(this.players, this.walls);
        this.physics.add.collider(this.elVictimos, this.walls);
        this.physics.add.collider(this.hosePlayer.particles, this.walls);

        //  Checks to see if the this.player overlaps with any of the this.stars, if he does call the collectStar function
        // this.physics.add.overlap(this.hosePlayer.sprite, this.fires, this.collectStar, null, this);
        this.physics.add.overlap(this.groundPlayer.sprite, this.elVictimos, this.pickUpElVictimo, null, this);
        this.physics.add.collider(this.hosePlayer.particles, this.fires, this.extinguishFire, null, this);
        this.physics.add.overlap(this.players, this.fires, this.onPlayerFireCollision, null, this);

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

        this.hose.update(time, delta);
        this.elVictimos.preUpdate(time, delta);

        this.physics.world.update(time, delta);
    }

    public extinguishFire(particle, fire) {
        particle.setActive(false);
        particle.setVisible(false);
        console.log(fire);
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

    public pickUpElVictimo(_groundPlayer, elVictimo) {
        // Note: The first argument is unused because I couldn't get the GroundPlayer object out of it, just ArcadeSprite. 
        if (this.groundPlayer.pickUp(elVictimo)) {
            elVictimo.pickedUpBy(this.groundPlayer);
        }
    }

    public onPlayerFireCollision(
        playerSprite: Phaser.Physics.Arcade.Sprite,
        fire: Fire,
    ) {
        let player: Player = (playerSprite === this.hosePlayer.sprite) ? this.hosePlayer : this.groundPlayer;
        player.onFireCollision(fire, this)
    }

    public hitBomb(player, bomb) {
        this.physics.pause();

        player.setTint(0xff0000);

        player.anims.play('turn');

        this.gameOver = true;
    }

}