import { ElVictimo } from './elVictimo';
import { Player, MAX_VELOCITY_X } from './player'
import { zeroAccelerationIfBlocked } from "./utils";

export class GroundPlayer extends Player {
    cursors: any; // see how it's assigned in constructor
    saving: ElVictimo;

    ACCELERATION_X = 3000;
    JUMP_VELOCITY_Y = -600;

    LEFT_ANIM_KEY : string;
    RIGHT_ANIM_KEY : string;
    DOWN_ANIM_KEY : string;
    UP_ANIM_KEY : string;

    constructor(scene: Phaser.Scene, x: integer, y: integer, spriteKey: string) {
        super(scene, x, y, spriteKey);

        this.sprite.setMaxVelocity(MAX_VELOCITY_X, 100000);

        scene.anims.create({
            key: this.LEFT_ANIM_KEY,
            frames: scene.anims.generateFrameNumbers(spriteKey, { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        scene.anims.create({
            key: this.TURN_ANIM_KEY,
            frames: [{ key: spriteKey, frame: 4 }],
            frameRate: 20
        });

        scene.anims.create({
            key: this.RIGHT_ANIM_KEY,
            frames: scene.anims.generateFrameNumbers(spriteKey, { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        //  Input Events
        this.cursors = scene.input.keyboard.addKeys(
            {
                up: Phaser.Input.Keyboard.KeyCodes.W,
                down: Phaser.Input.Keyboard.KeyCodes.S,
                left: Phaser.Input.Keyboard.KeyCodes.A,
                right: Phaser.Input.Keyboard.KeyCodes.D
            });
    }

    public update(time, delta) {
        super.update(time, delta);

        if (this.cursors.left.isDown) {
            this.sprite.setAccelerationX(-this.ACCELERATION_X);

            this.sprite.anims.play(this.LEFT_ANIM_KEY, true);
        } else if (this.cursors.right.isDown) {
            this.sprite.setAccelerationX(this.ACCELERATION_X);

            this.sprite.anims.play(this.RIGHT_ANIM_KEY, true);
        } else {
            this.sprite.setAccelerationX(0);

            this.sprite.anims.play(this.TURN_ANIM_KEY);
        }

        if (this.cursors.up.isDown && this.sprite.body.blocked.down) {
            this.sprite.setAccelerationY(0);
            this.sprite.setVelocityY(this.JUMP_VELOCITY_Y);
        }

        zeroAccelerationIfBlocked(this.sprite.body);
    }

    public pickUp(elVictimo) : boolean {
        if (this.saving != null) {
            return false;
        }
        this.saving = elVictimo;
        return true;
    }
}