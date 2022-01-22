import { GroundPlayer } from "./groundPlayer";

export enum VictimDirection {
    LEFT, RIGHT
}

export class ElVictimo extends Phaser.Physics.Arcade.Sprite {
    savior: GroundPlayer;

    FRICTION_COEF = 0.7;
    THROW_VELOCITY_X = 500;
    THROW_VELOCITY_Y = -300;

    constructor(scene: Phaser.Scene, x, y, textureKey: string) {
        super(scene, x, y, textureKey);
        scene.physics.add.existing(this, false);
        this.savior = null;
    }

    public pickedUpBy(groundPlayer) {
        this.savior = groundPlayer;
    }

    public update(_time, delta): void {
        this.setOrigin(0);
        this.setVelocityX(
            this.body.velocity.x
            * Math.pow(1 - this.FRICTION_COEF, delta / 1000)
        );

        if (this.savior == null) {
            return;
        }

        // Whenever the savior turns, clip the bounding box to the savior from each side.
        this.y = this.savior.sprite.y - this.savior.sprite.height / 2;
        if (this.savior.lastDirection == VictimDirection.LEFT) {
            this.x = this.savior.sprite.x - this.savior.sprite.width / 2;
        } else {
            this.x = this.savior.sprite.x - (this.width - this.savior.sprite.width / 2);
        }

        // So that the gravity doesn't drag him down.
        this.setVelocity(0, 0);
    }

    public getThrown(direction: VictimDirection) {
        this.savior = null;
        if (direction == VictimDirection.LEFT) {
            this.setVelocityX(-this.THROW_VELOCITY_X);
        } else {
            this.setVelocityX(this.THROW_VELOCITY_X);
        }
        this.setVelocityY(this.THROW_VELOCITY_Y);
    }
}