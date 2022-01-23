import { Player, MAX_VELOCITY_X } from './player'
import { zeroAccelerationIfBlocked } from "./utils";

export class HosePlayer extends Player {
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    particles: Phaser.Physics.Arcade.Group;
    isAnchored: boolean;

    NUM_PARTICLES = 400;
    ACCELERATION_X = 500;
    SPRINKLER_ACC = 25;
    JUMP_VELOCITY_Y = -800;

    constructor(scene: Phaser.Scene, x: integer, y: integer, spriteKey: string) {
        super(scene, x, y, spriteKey);

        // this.sprite.setFrictionX(100000)
        this.sprite.refreshBody();
        this.sprite.setMaxVelocity(MAX_VELOCITY_X, 100000);
        this.isAnchored = false;

        scene.anims.create({
            key: 'left',
            frames: scene.anims.generateFrameNumbers(spriteKey, { start: 0, end: 5 }),
            frameRate: 10,
            repeat: -1
        });

        scene.anims.create({
            key: 'turn',
            frames: [{ key: spriteKey, frame: 6 }],
            frameRate: 20
        });

        scene.anims.create({
            key: 'right',
            frames: scene.anims.generateFrameNumbers(spriteKey, { start: 0, end: 5 }),
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
            this.particles.create(0, 0, 'droplet', 0, false, false).setScale(1, 1);
            // Otherwise they appear as invisible objects that players can collide with.
            this.particles.getLast().body.enable = false;
            this.particles.getLast().setDepth(10)
        }
    }

    public update(time, delta) {
        super.update(time, delta);

        let diff = new Phaser.Math.Vector2(0, 0);
        this.isAnchored = false;

        if (this.cursors.up.isDown) {
            diff.y += -50;
            this.sprite.anims.play('turn');
        }
        if (this.cursors.down.isDown) {
            diff.y += 50;
            this.sprite.anims.play('turn');
        }
        if (this.cursors.left.isDown) {
            diff.x += -50;
            this.sprite.flipX = true;
            this.sprite.anims.play('right', true);
        }
        if (this.cursors.right.isDown) {
            diff.x += 50;
            this.sprite.flipX = false;
            this.sprite.anims.play('left', true);
        }

        if (this.cursors.shift.isDown && this.sprite.body.blocked.down) {
            this.sprite.setVelocity(0, 0);
            this.isAnchored = true;
        }

        zeroAccelerationIfBlocked(this.sprite.body);

        // Mouse overrides the arrow controls.
        const pointer = this.scene.input.activePointer;
        if (pointer.leftButtonDown()) {
            diff = new Phaser.Math.Vector2(pointer.x - this.sprite.x, pointer.y - this.sprite.y);
        }

        if (diff.length() != 0) {

            const numToFire = 6;
            for (let i = 0; i < numToFire; i++) {
                let speed = Phaser.Math.Between(300, 400);
                let angle = diff.angle() + Phaser.Math.FloatBetween(-0.1, 0.1);
                let p = this.particles.getFirstDead(false, this.sprite.x, this.sprite.y);
                if (p != null) {
                    p.collided = false;
                    p.body.enable = true;
                    p.anims.play("droplet_alive", true);
                    p.setVelocity(speed * Math.cos(angle), speed * Math.sin(angle));
                    p.setVisible(true);
                    p.setActive(true);
                    this.scene.time.delayedCall(1000, hideParticle, [p, this.scene], this);
                }
            }

            if (!this.isAnchored) {
                this.sprite.setVelocity(
                    this.sprite.body.velocity.x - Math.cos(diff.angle()) * this.SPRINKLER_ACC,
                    this.sprite.body.velocity.y - Math.sin(diff.angle()) * this.SPRINKLER_ACC);
            }
        }
    }
}

export function hideParticle(particle, scene) {
    particle.anims.play("droplet_death", true);
    particle.on('animationcomplete', () => {
        scene.hosePlayer.particles.killAndHide(particle);
    }, this);
}