import { GroundPlayer } from "../groundPlayer";
import { Hose } from "../hose";
import { hideParticle, HosePlayer } from "../hosePlayer";
import { Fire } from "../fire";
import { ElVictimo } from "../elVictimo";
import { Player } from "../player";
import { Door } from "../door";
import { parseAllProperties } from "../utils";
import { ThanksWall } from "../thanksWall";
import { LevelGenerator } from "../levelGeneration";
import assert = require("assert");
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../main";
import { Box } from "../box";
import { Timer } from "../timer";
import Vector2 = Phaser.Math.Vector2;

const HOSE_PLAYER_SPRITE_KEY = 'hosePlayer';
const GROUND_PLAYER_SPRITE_KEY = 'groundPlayer';
const EL_VICTIMO_SPRITE_KEY = 'elVictimo';
const THANKS_COUNT = 10;


const TILE_SIZE = 32;
const FLOOR_WIDTH = 32 * TILE_SIZE;
const FLOOR_HEIGHT = 7 * TILE_SIZE;

export class LevelScene extends Phaser.Scene {
    levelGenerator: LevelGenerator;
    buildingHeight: number;
    cameraOffsetY: number = 0;
    sky;

    hosePlayer: HosePlayer;
    groundPlayer: GroundPlayer;
    walls: Array<Phaser.Tilemaps.TilemapLayer>;
    fires: Phaser.Physics.Arcade.StaticGroup;
    doors: Phaser.Physics.Arcade.StaticGroup;
    thanksWalls: Phaser.Physics.Arcade.StaticGroup;
    hydrants: Phaser.Physics.Arcade.StaticGroup;
    boxes: Phaser.Physics.Arcade.Group;

    timer: Timer;
    elVictimos: Phaser.Physics.Arcade.Group;
    platforms;
    players: Phaser.Physics.Arcade.Group;
    score = 0;
    isGameOver = false;
    scoreText: Phaser.GameObjects.Text;
    gameOverText: Phaser.GameObjects.Text;
    gameOverBackground: Phaser.GameObjects.Rectangle;

    hose: Hose;

    constructor() {
        super({
            key: 'level',
        });
    }

    public preload() {
        this.levelGenerator = new LevelGenerator(this);

        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('tiles', 'assets/TilesetMap.png');
        this.load.image('debugball', 'assets/debugball.png');
        this.load.image('debugstar', 'assets/debugstar.png');
        this.load.image('door', 'assets/door.png');
        this.load.image('box', 'assets/box.png');
        this.load.image('timeBar', 'assets/timeBar.png');
        this.load.image('key', 'assets/key.png');
        this.load.image(EL_VICTIMO_SPRITE_KEY, 'assets/elVictimo.png');

        this.load.spritesheet(HOSE_PLAYER_SPRITE_KEY, 'assets/jose_sprites.png', { frameWidth: 38, frameHeight: 39 });
        this.load.spritesheet(GROUND_PLAYER_SPRITE_KEY, 'assets/hosePlayer.png', { frameWidth: 32, frameHeight: 48 });

        this.load.atlas('flares', 'assets/flares.png', 'assets/flares.json');
        this.load.spritesheet("droplet", 'assets/droplets.png', { frameWidth: 10, frameHeight: 10 });

        for (let i = 1; i <= 3; i++) {
            this.load.spritesheet(`fire${i}`, `assets/fire${i}.png`, { frameWidth: 50, frameHeight: 70 });
        }

        for (let i = 0; i < THANKS_COUNT; i++) {
            this.load.audio(`thanks${i}`, `assets/sounds/thanks${i}.mp3`);
        }
    }

    public create() {
        this.levelGenerator.create();

        for (let i = 1; i <= 3; i++) {
            this.anims.create({
                key: `fire${i}anim`,
                frames: this.anims.generateFrameNumbers(`fire${i}`, { start: 0, end: 60 }),
                frameRate: 60,
                repeat: -1,
            });
        }

        this.anims.create({
            key: "droplet_death",
            frames: this.anims.generateFrameNumbers("droplet", { start: 0, end: 5 }),
            frameRate: 20,
        });
        this.anims.create({
            key: "droplet_alive",
            frames: this.anims.generateFrameNumbers("droplet", { start: 0, end: 1 }),
            frameRate: 10,
            repeat: -1,
        });

        //  A simple background for our game
        this.sky = this.add.image(SCREEN_WIDTH / 2, 0, 'sky').setScale(6).setTint(0x666666);

        //  The platforms group contains the ground
        this.platforms = this.physics.add.staticGroup();

        //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
        this.platforms.create(SCREEN_WIDTH / 2, SCREEN_HEIGHT + 16, 'ground').setScale(3).refreshBody(); // 3 * 32 / 2 = 48

        // Create players.
        this.hosePlayer = new HosePlayer(this, 30, SCREEN_HEIGHT - 32 - 40, HOSE_PLAYER_SPRITE_KEY);
        this.groundPlayer = new GroundPlayer(this, 60, SCREEN_HEIGHT - 32 - 20, GROUND_PLAYER_SPRITE_KEY);
        this.players = this.physics.add.group([this.hosePlayer.sprite, this.groundPlayer.sprite]);
        this.hosePlayer.setPhysicsProperties();
        this.groundPlayer.setPhysicsProperties();
        this.hosePlayer.sprite.setDepth(1);
        this.groundPlayer.sprite.setDepth(1);


        // Load rooms.
        this.hydrants = this.physics.add.staticGroup();
        this.fires = this.physics.add.staticGroup();
        this.thanksWalls = this.physics.add.staticGroup();
        this.doors = this.physics.add.staticGroup();
        this.boxes = this.physics.add.group({ collideWorldBounds: true, runChildUpdate: true });
        this.walls = [];
        this.elVictimos = this.physics.add.group({ collideWorldBounds: true, runChildUpdate: true });


        let rooms = this.levelGenerator.generateLevel(true);
        this.buildingHeight = 0;
        for (let room of rooms) {
            this.loadRoom(room);
        }

        // Sounds
        const thanksSounds = [];
        for (let i = 0; i < THANKS_COUNT; ++i) {
            thanksSounds.push(this.sound.add(`thanks${i}`, { loop: false }));
        }

        // Walls of Thanks.
        [
            [0, -1000 * SCREEN_HEIGHT, 2 * TILE_SIZE, 1001 * SCREEN_HEIGHT], // Left long
            [0, SCREEN_HEIGHT - 2 * TILE_SIZE, 3 * TILE_SIZE, 2 * TILE_SIZE], // Left bottom
            [SCREEN_WIDTH - 2 * TILE_SIZE, -1000 * SCREEN_HEIGHT, 2 * TILE_SIZE, 1001 * SCREEN_HEIGHT],    // Right long
            [SCREEN_WIDTH - 3 * TILE_SIZE, SCREEN_HEIGHT - 2 * TILE_SIZE, 3 * TILE_SIZE, 2 * TILE_SIZE] // Right bottom
        ].forEach((rect) => {
            const wall = new ThanksWall(this, rect[0], rect[1], rect[2], rect[3], 'ground', thanksSounds);
            this.thanksWalls.add(wall, true);
        });

        //  The score
        this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px' });
        this.gameOverBackground = this.add.rectangle(600, 250, 800, 200, 0x320032);
        this.gameOverText = this.add.text(300, 200, 'Game over!', { fontSize: '100px', color: '#f00' });
        [this.scoreText, this.gameOverBackground, this.gameOverText].forEach( (obj)=> {
            obj.setDepth(1000);
            obj.setScrollFactor(0, 0);
        })

        this.gameOverBackground.setVisible(false);
        this.gameOverText.setVisible(false);

        this.setCollisions();

        // Create hose.
        this.hose = new Hose(this, this.hosePlayer.sprite.x, this.hosePlayer.sprite.y);
        this.hose.attachEndTo(this.hosePlayer);

        this.timer = new Timer(this, SCREEN_WIDTH - TILE_SIZE, SCREEN_HEIGHT - TILE_SIZE, TILE_SIZE / 2, SCREEN_HEIGHT - 2 * TILE_SIZE, 'timeBar');
        this.timer.start(5 * 1000);

        this.physics.disableUpdate();
    }

    private setCollisions() {

        // Collisions.
        this.physics.add.collider(this.players, this.platforms);
        this.physics.add.collider(this.players, this.doors);
        this.physics.add.collider(this.hosePlayer.particles, this.platforms);
        this.physics.add.collider(this.elVictimos, this.platforms);
        this.physics.add.overlap(this.elVictimos, this.thanksWalls, this.onVictimInThanksWall, null, this);
        this.physics.add.overlap(this.hydrants, this.hosePlayer.sprite, this.onTouchHydrant, null, this);

        // Boxes collisions
        this.physics.add.collider(this.boxes, this.boxes);
        this.physics.add.collider(this.boxes, this.elVictimos);
        this.physics.add.collider(this.boxes, this.platforms);
        this.physics.add.collider(this.boxes, this.hydrants);
        this.physics.add.collider(this.boxes, this.fires);
        this.physics.add.collider(this.boxes, this.doors);
        this.physics.add.collider(this.boxes, this.walls);
        this.physics.add.collider(this.boxes, this.players);

        // Collide with floor map.
        for (let wall of this.walls) {
            this.physics.add.collider(this.players, wall);
            this.physics.add.collider(this.elVictimos, wall);
            this.physics.add.collider(this.hosePlayer.particles, wall);
        }

        this.physics.add.overlap(this.groundPlayer.sprite, this.elVictimos, this.pickUpElVictimo, null, this);
        this.physics.add.collider(this.hosePlayer.particles, this.fires, this.extinguishFire, null, this);
        this.physics.add.overlap(this.players, this.fires, this.onPlayerFireCollision, null, this);
    }

    public update(time, delta) {  // delta is in ms
        this.timer.update(time, delta);

        if (this.isGameOver) {
            return;
        }

        this.hosePlayer.update(time, delta);
        this.groundPlayer.update(time, delta);

        // if (Math.random() < 0.01){
        this.hose.update(time, delta);
        // }

        this.elVictimos.preUpdate(time, delta);

        this.physics.world.update(time, delta);
        this.boxes.preUpdate(time, delta);
    }

    public extinguishFire(particle, fire) {
        hideParticle(particle, this);
        fire.lowerHp();

        //  Add and update the score
        if (fire.hp <= 0) {
            this.score += 1;
            this.redrawScore();
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

    private onVictimInThanksWall(victim: ElVictimo, thanksWall: ThanksWall) {
        thanksWall.handleVictim(victim);
        this.checkVictory();
    }

    private onTouchHydrant(_player, hydrant: Phaser.Physics.Arcade.Sprite) {
        if (hydrant.state === 1) return;  // Already attached
        this.hydrants.children.iterate((otherHydrant: Phaser.Physics.Arcade.Sprite) => {
            otherHydrant.setState(0);
            otherHydrant.clearTint();
        });
        hydrant.setState(1);
        this.hose.setStartTo(hydrant.getCenter());
        hydrant.setTint(0xff0000);
    }

    private loadRoom(room) {
        let map = this.make.tilemap({ key: room.mapKey });

        const tileset = map.addTilesetImage('TilesetMap', 'tiles');
        const offsetX = (SCREEN_WIDTH - FLOOR_WIDTH) / 2;
        const offsetY = SCREEN_HEIGHT - 32 - (TILE_SIZE * (this.buildingHeight + 7 * room.properties.height));

        for (let i = 0; i < room.properties.height; i++) {
            let bgMap = this.make.tilemap({ key: "background1" });
            bgMap.createLayer('background', tileset, offsetX, offsetY + FLOOR_HEIGHT * i).setDepth(0);
        }

        let layer = map.createLayer('walls', tileset, offsetX, offsetY);
        map.createLayer('windows', tileset, offsetX, offsetY);
        layer.setCollisionByExclusion([-1], true);
        this.walls.push(layer);
        this.buildingHeight += 7 * room.properties.height;

        // Fires.
        map.getObjectLayer('fires')?.objects.sort((a, b) => a.y - b.y).forEach((fireTile) => {
            let fire = new Fire(this, offsetX + fireTile.x + 15, offsetY + fireTile.y - 38, 'fire');
            this.fires.add(fire, true);
            fire.body.setSize(30, 60, true);
            fire.updateScale();
        });

        // Victims.
        map.getObjectLayer('victims')?.objects.forEach((victimTile) => {
            let victim = new ElVictimo(
                this,
                offsetX + victimTile.x - 8,
                offsetY + victimTile.y - 48,
                EL_VICTIMO_SPRITE_KEY,
            );
            this.elVictimos.add(victim, true);
        }, this);

        // Doors.
        const keys = map.getObjectLayer('keys')?.objects;
        if (keys) {
            for (let k of keys)
                assert(k.hasOwnProperty('properties'), room.mapKey + " Keys don't have colors specified!");
            parseAllProperties(keys);
        }
        const doors = map.getObjectLayer('doors')?.objects;
        if (doors) {
            for (let d of doors)
                assert(d.hasOwnProperty('properties'), room.mapKey + " Doors don't have colors specified!");
            parseAllProperties(doors);
        }
        doors?.forEach((doorTile) => {
            let door = new Door(this, offsetX + doorTile.x, offsetY + doorTile.y, doorTile.properties.color);
            door.doorSprite.setOrigin(0, 1);
            door.doorSprite.setDisplaySize(doorTile.width, doorTile.height);
            door.doorSprite.refreshBody();
            this.doors.add(door.doorSprite, true);
            const fittingKeys = keys.filter((key) => {
                return key.properties.color == doorTile.properties.color;
            });
            for (let key of fittingKeys) {
                door.addKey(this, offsetX + key.x, offsetY + key.y);
            }
        });

        // Boxes
        map.getObjectLayer('boxes')?.objects.forEach((boxTile) => {
            if (boxTile.polygon) {
                console.log("Polygon boxes are not supported..");
                return;
            }

            const box = new Box(
                this,
                boxTile.x + offsetX,
                boxTile.y + offsetY,
                boxTile.width,
                boxTile.height,
                'box'
            );
            this.boxes.add(box, true);
        }, this);

        // Hydrants
        map.getObjectLayer('hydrants')?.objects.forEach((hydrantTile) => {
            let hydrant = this.physics.add.staticSprite(
                offsetX + hydrantTile.x,
                offsetY + hydrantTile.y,
                'debugstar',
            );
            hydrant.setOrigin(0, 1);
            hydrant.setDisplaySize(hydrantTile.width, hydrantTile.height);
            hydrant.refreshBody();

            hydrant.setState(0);
            this.hydrants.add(hydrant);
        });
    }

    public redrawScore() {
        this.scoreText.setText('Score: ' + this.score);
    }

    private checkVictory() {
        const allSaved = this.elVictimos.getChildren().every((victim) => { return (victim as ElVictimo).saved; })
        if (!allSaved)
            return;

        this.hydrants = this.physics.add.staticGroup();
        this.fires = this.physics.add.staticGroup();
        this.thanksWalls = this.physics.add.staticGroup();
        this.doors = this.physics.add.staticGroup();
        this.boxes = this.physics.add.group({ collideWorldBounds: true, runChildUpdate: true });
        this.walls = [];
        this.elVictimos = this.physics.add.group({ collideWorldBounds: true, runChildUpdate: true });


        let rooms = this.levelGenerator.generateLevel(false);
        for (let room of rooms) {
            this.loadRoom(room);
        }

        this.setCollisions();

        this.sky.y = this.sky.y - SCREEN_HEIGHT;
        let x = this.cameras.main.centerX;
        let y = this.cameras.main.centerY;
        this.cameraOffsetY -= 21 * TILE_SIZE;
        this.cameras.main.pan(x, y - 21 * TILE_SIZE, 3 * 1000);

        let entrance = rooms[0].getObjectLayer('entryteleport').objects[0];
        const offsetX = (SCREEN_WIDTH - FLOOR_WIDTH) / 2;
        // console.log()
        entrance.y += (this.cameraOffsetY - 48);
        entrance.x += offsetX;
        console.log(entrance, this.cameraOffsetY);

        this.hose.setCollideWorldBounds(false);
        this.hosePlayer.sprite.setCollideWorldBounds(false);
        this.groundPlayer.sprite.setCollideWorldBounds(false);

        this.hosePlayer.sprite.x = entrance.x - 10;
        this.hosePlayer.sprite.y = entrance.y;
        this.groundPlayer.sprite.x = entrance.x + 10;

        this.groundPlayer.sprite.y = entrance.y;
        this.hosePlayer.sprite.body.setVelocity(0, 0);
        this.groundPlayer.sprite.body.setVelocity(0, 0);

        this.hose.setStartTo(new Vector2(entrance.x - 10, entrance.y - 32));

        // TODO: this needs to be set back after an update
        // this.hose.setCollideWorldBounds(true);
        // this.hosePlayer.sprite.setCollideWorldBounds(true);
        // this.groundPlayer.sprite.setCollideWorldBounds(true);
    }

    public setGameOver(enable: boolean) {
        this.isGameOver = enable;
        this.gameOverText.setVisible(enable);
        this.gameOverBackground.setVisible(enable);
        if (enable) {
            setTimeout(() => this.setGameOver(false), 500); // debug stuff
        }
    }
}