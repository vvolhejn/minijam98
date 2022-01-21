export class Player extends Phaser.GameObjects.Container {
    sprite: Phaser.Physics.Arcade.Sprite;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    particles;

    NUM_PARTICLES = 200;
    ACCELERATION_X = 3000;
    MAX_VELOCITY_X = 160;
    JUMP_VELOCITY_Y = -500;

    constructor(scene: Phaser.Scene) {
        super(scene);
        this.sprite = scene.physics.add.sprite(100, 450, 'dude');
        // this.sprite.setFrictionX(100000)
        this.sprite.setCollideWorldBounds(true);

        scene.anims.create({
            key: 'left',
            frames: scene.anims.generateFrameNumbers('dude', {start: 0, end: 3}),
            frameRate: 10,
            repeat: -1
        });

        scene.anims.create({
            key: 'turn',
            frames: [{key: 'dude', frame: 4}],
            frameRate: 20
        });

        scene.anims.create({
            key: 'right',
            frames: scene.anims.generateFrameNumbers('dude', {start: 5, end: 8}),
            frameRate: 10,
            repeat: -1
        });

        //  Input Events
        this.cursors = scene.input.keyboard.createCursorKeys();

        // Water sprinkler

        this.particles = scene.physics.add.group({
            bounceX: 0,
            bounceY: 0,
            collideWorldBounds: true,
        });

        for (let i = 0; i < this.NUM_PARTICLES; i++) {
            this.particles.create(0, 0, 'flares', 0, false, false).setScale(0.1, 0.1);
        }
    }

    public update() {
        this.sprite.setMaxVelocity(this.MAX_VELOCITY_X, 100000)

        if (this.cursors.left.isDown) {
            this.sprite.setAccelerationX(-this.ACCELERATION_X);

            this.sprite.anims.play('left', true);
        } else if (this.cursors.right.isDown) {
            this.sprite.setAccelerationX(this.ACCELERATION_X);

            this.sprite.anims.play('right', true);
        } else {
            // this.sprite.setVelocityX(0);

            this.sprite.anims.play('turn');
        }

        if (this.cursors.up.isDown && this.sprite.body.touching.down) {
            this.sprite.setAccelerationY(0);
            this.sprite.setVelocityY(this.JUMP_VELOCITY_Y);
        }

        let pointer = this.scene.input.activePointer;
        if (pointer.leftButtonDown()) {
            let diff = new Phaser.Math.Vector2(pointer.x - this.sprite.x, pointer.y - this.sprite.y);

            const numToFire = 3;
            for (let i = 0; i < numToFire; i++) {
                let speed = Phaser.Math.Between(300, 400);
                let angle = diff.angle() + Phaser.Math.FloatBetween(-0.1, 0.1);
                let p = this.particles.getFirstDead(false, this.sprite.x, this.sprite.y);
                if (p != null) {
                    p?.setVelocity(speed * Math.cos(angle), speed * Math.sin(angle));
                    p?.setVisible(true);
                    p?.setActive(true);
                }

                this.scene.time.delayedCall(1000, this.hideParticle, [p]);
            }
        }
    }

    public hideParticle(particle) {
        particle.setVisible(false);
        particle.setActive(false);
    }
}