import {Player, MAX_VELOCITY_X} from './player'
import {zeroAccelerationIfBlocked} from "./utils";

export class HosePlayer extends Player {
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    particles: Phaser.Physics.Arcade.Group;

    NUM_PARTICLES = 5;
    ACCELERATION_X = 3000;
    SPRINKLER_ACC = 25;
    JUMP_VELOCITY_Y = -600;

    constructor(scene: Phaser.Scene, x : integer, y: integer, spriteKey: string) {
        super(scene, x, y, spriteKey);

        // this.sprite.setFrictionX(100000)
        this.sprite.setMaxVelocity(MAX_VELOCITY_X, 100000);

        scene.anims.create({
            key: 'left',
            frames: scene.anims.generateFrameNumbers(spriteKey, { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        scene.anims.create({
            key: 'turn',
            frames: [{ key: spriteKey, frame: 4 }],
            frameRate: 20
        });

        scene.anims.create({
            key: 'right',
            frames: scene.anims.generateFrameNumbers(spriteKey, { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        //  Input Events
        this.cursors = scene.input.keyboard.createCursorKeys();

        // Water sprinkler

        this.particles = scene.physics.add.group({
            bounceX: 0.4,
            bounceY: 0.4,
            collideWorldBounds: true,
        });

        for (let i = 0; i < this.NUM_PARTICLES; i++) {
            this.particles.create(0, 0, 'flares', 0, false, false).setScale(0.1, 0.1);
        }
    }

    public update(time, delta) {
        super.update(time, delta);

        if (this.cursors.left.isDown) {
            this.sprite.setAccelerationX(-this.ACCELERATION_X);

            this.sprite.anims.play('left', true);
        } else if (this.cursors.right.isDown) {
            this.sprite.setAccelerationX(this.ACCELERATION_X);

            this.sprite.anims.play('right', true);
        } else {
            this.sprite.setAccelerationX(0);

            this.sprite.anims.play('turn');
        }

        if (this.cursors.up.isDown && this.sprite.body.touching.down) {
            this.sprite.setAccelerationY(0);
            this.sprite.setVelocityY(this.JUMP_VELOCITY_Y);
        }

        zeroAccelerationIfBlocked(this.sprite.body);

        let pointer = this.scene.input.activePointer;
        if (pointer.leftButtonDown()) {
            let diff = new Phaser.Math.Vector2(pointer.x - this.sprite.x, pointer.y - this.sprite.y);

            const numToFire = 3;
            for (let i = 0; i < numToFire; i++) {
                let speed = Phaser.Math.Between(300, 400);
                let angle = diff.angle() + Phaser.Math.FloatBetween(-0.1, 0.1);
                let p = this.particles.getFirstDead(false, this.sprite.x, this.sprite.y);
                if (p != null) {
                    p.body.enable = true;
                    p.setVelocity(speed * Math.cos(angle), speed * Math.sin(angle));
                    p.setVisible(true);
                    p.setActive(true);
                    this.scene.time.delayedCall(1000, this.hideParticle, [p], this);
                }

            }

            this.sprite.setVelocity(
                this.sprite.body.velocity.x - Math.cos(diff.angle()) * this.SPRINKLER_ACC,
                this.sprite.body.velocity.y - Math.sin(diff.angle()) * this.SPRINKLER_ACC);
        }
    }

    public hideParticle(particle) {
        particle.body.enable = false;
        this.particles.killAndHide(particle);
    }
}