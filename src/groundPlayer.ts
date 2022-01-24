import { ElVictimo, VictimDirection } from './elVictimo';
import { Player, MAX_VELOCITY_X } from './player'
import { zeroAccelerationIfBlocked } from "./utils";

export class GroundPlayer extends Player {
    cursors: any; // see how it's assigned in constructor
    saving: ElVictimo;
    lastSavingTimestamp_MS: number;
    lastDirection: VictimDirection = VictimDirection.LEFT; // Just default.

    SAVING_COOLDOWN_MS = 500;

    ACCELERATION_X = 3000;
    JUMP_VELOCITY_Y = -430;

    GRAND_FRICTION_COEF = 0.999;

    LEFT_ANIM_KEY: string;
    RIGHT_ANIM_KEY: string;
    DOWN_ANIM_KEY: string;
    UP_ANIM_KEY: string;

    constructor(scene: Phaser.Scene, x: integer, y: integer, spriteKey: string) {
        super(scene, x, y, spriteKey);

        this.sprite.setMaxVelocity(MAX_VELOCITY_X, 100000);

        scene.anims.create({
            key: 'grandLeft',
            frames: scene.anims.generateFrameNumbers(spriteKey, { start: 0, end: 5 }),
            frameRate: 10,
            repeat: -1
        });

        scene.anims.create({
            key: 'grandTurn',
            frames: [{ key: spriteKey, frame: 6 }],
            frameRate: 20
        });

        scene.anims.create({
            key: 'grandLeftSaving',
            frames: scene.anims.generateFrameNumbers(spriteKey, { start: 7, end: 12 }),
            frameRate: 10,
            repeat: -1
        });

        //  Input Events
        this.cursors = scene.input.keyboard.addKeys(
            {
                up: Phaser.Input.Keyboard.KeyCodes.W,
                down: Phaser.Input.Keyboard.KeyCodes.S,
                left: Phaser.Input.Keyboard.KeyCodes.A,
                right: Phaser.Input.Keyboard.KeyCodes.D,
                throw: Phaser.Input.Keyboard.KeyCodes.SPACE
            });
    }

    public update(time, delta) {
        this.sprite.setVelocityX(
            this.sprite.body.velocity.x
            * Math.pow(1 - this.GRAND_FRICTION_COEF, delta / 1000)
        );

        this.sprite.flipX = false;

        if (this.cursors.left.isDown) {
            this.sprite.setAccelerationX(-this.ACCELERATION_X);
            this.lastDirection = VictimDirection.LEFT;

            if (this.saving) {
                this.sprite.anims.play('grandLeftSaving', true);
                this.saving.flipX = false;
            } else {
                this.sprite.anims.play('grandLeft', true);
            }
        } else if (this.cursors.right.isDown) {
            this.sprite.setAccelerationX(this.ACCELERATION_X);
            this.lastDirection = VictimDirection.RIGHT;

            if (this.saving) {
                this.sprite.anims.play('grandLeftSaving', true);
                this.saving.flipX = true;
            } else {
                this.sprite.anims.play('grandLeft', true);
            }
            this.sprite.flipX = true;
        } else {
            this.sprite.setAccelerationX(0);

            this.sprite.anims.play('grandTurn');
        }

        if (this.cursors.up.isDown && this.sprite.body.blocked.down) {
            this.sprite.setAccelerationY(0);
            this.sprite.setVelocityY(this.JUMP_VELOCITY_Y);
        }

        if (this.cursors.throw.isDown && this.saving != null) {
            this.saving.getThrown(this.lastDirection);
            this.saving = null;
            this.lastSavingTimestamp_MS = time;
        }

        zeroAccelerationIfBlocked(this.sprite.body);
    }

    public pickUp(time_ms: number, elVictimo): boolean {
        if (this.saving != null || elVictimo.saved || time_ms < this.lastSavingTimestamp_MS + this.SAVING_COOLDOWN_MS) {
            return false;
        }
        this.saving = elVictimo;
        return true;
    }
}