import { Hose } from "../hose";
import {Player} from "../player";

export class LevelScene extends Phaser.Scene {
    player;
    stars;
    bombs;
    platforms;
    cursors;
    score = 0;
    gameOver = false;
    scoreText;
    hose: Hose;

    constructor() {
        super({
            key: 'level',
        })
    }

    public preload() {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.spritesheet('dude', 'assets/dude.png', {frameWidth: 32, frameHeight: 48});
        this.load.atlas('flares', 'assets/flares.png', 'assets/flares.json');
    }

    public create() {
        //  A simple background for our game
        this.add.image(400, 300, 'sky');

        //  The platforms group contains the ground and the 2 ledges we can jump on
        this.platforms = this.physics.add.staticGroup();

        //  Here we create the ground.
        //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        //  Now let's create some ledges
        this.platforms.create(600, 400, 'ground');
        this.platforms.create(50, 250, 'ground');
        this.platforms.create(750, 220, 'ground');

        // Create player
        this.player = new Player(this);

        //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
        this.stars = this.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: {x: 12, y: 0, stepX: 70}
        });

        this.stars.children.iterate(function (child) {

            //  Give each star a slightly different bounce
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

        });

        this.bombs = this.physics.add.group();

        //  The score
        this.scoreText = this.add.text(16, 16, 'score: 0', {fontSize: '32px'});

        //  Collide the this.player and the this.stars with the this.platforms
        this.physics.add.collider(this.player.sprite, this.platforms);
        this.physics.add.collider(this.player.particles, this.platforms);
        this.physics.add.collider(this.stars, this.platforms);
        this.physics.add.collider(this.bombs, this.platforms);

        //  Checks to see if the this.player overlaps with any of the this.stars, if he does call the collectStar function
        this.physics.add.overlap(this.player.sprite, this.stars, this.collectStar, null, this);

        this.physics.add.collider(this.player.sprite, this.bombs, this.hitBomb, null, this);

        this.hose = new Hose(this, this.player.sprite.x, this.player.sprite.y);
        this.hose.attachTo(this.player.sprite.body);
    }

    public update(time, delta) {
        if (this.gameOver) {
            return;
        }

        this.player.update();
        this.hose.update(time, delta);
    }

    public collectStar(player, star) {
        star.disableBody(true, true);

        //  Add and update the score
        this.score += 10;
        this.scoreText.setText('Score: ' + this.score);

        if (this.stars.countActive(true) === 0) {
            //  A new batch of this.stars to collect
            this.stars.children.iterate(function (child) {

                child.enableBody(true, child.x, 0, true, true);

            });

            const x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

            let bomb = this.bombs.create(x, 16, 'bomb');
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            bomb.allowGravity = false;

        }
    }

    public hitBomb(player, bomb) {
        this.physics.pause();

        player.setTint(0xff0000);

        player.anims.play('turn');

        this.gameOver = true;
    }

}