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
        this.setVelocityX(
            this.body.velocity.x
            * Math.pow(1 - this.FRICTION_COEF, delta / 1000)
        );

        if (this.savior == null) {
            return;
        }
        this.x = this.savior.sprite.body.x;
        this.y = this.savior.sprite.body.y;
        // So that the gravity doesn't drag him down.
        this.setVelocity(0, 0);
    }

    public getThrown(direction : VictimDirection) {
        this.savior = null;
        if (direction == VictimDirection.LEFT) {
            this.setVelocityX(-this.THROW_VELOCITY_X);
        } else {
            this.setVelocityX(this.THROW_VELOCITY_X);
        }
        this.setVelocityY(this.THROW_VELOCITY_Y);
    }
}

export function createElVictimoGroup(scene: Phaser.Scene, coords: Array<Phaser.Math.Vector2>, textureKey: string): Phaser.Physics.Arcade.Group {
    const group = scene.physics.add.group();
    for (const vec of coords) {
        group.add(new ElVictimo(scene, vec.x, vec.y, textureKey), true);
    }

    return group;
}