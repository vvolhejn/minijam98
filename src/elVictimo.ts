import { GroundPlayer } from "./groundPlayer";

export enum VictimDirection {
    LEFT, RIGHT
}

export class ElVictimo extends Phaser.Physics.Arcade.Sprite {
    savior: GroundPlayer;
    saved: boolean;
    invincible: boolean;
    
    FRICTION_COEF = 0.7;
    THROW_VELOCITY_X = 500;
    THROW_VELOCITY_Y = -300;

    constructor(scene: Phaser.Scene, x, y, textureKey: string) {
        super(scene, x, y, textureKey);
        scene.physics.add.existing(this, false);
        this.savior = null;
        this.saved = false;
        this.setDepth(5);
        this.setScale(2);
        this.anims.play('victimsad');
        this.anims.setProgress(Math.random());
    }

    public pickedUpBy(groundPlayer) {
        this.savior = groundPlayer;
        this.anims.play('victimcarried');
        this.onHitGround(this.scene);
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
        this.x = this.savior.sprite.x - this.savior.sprite.width / 2;

        // So that the gravity doesn't drag him down.
        this.setVelocity(0, 0);
    }

    public getThrown(direction: VictimDirection) {
        this.savior = null;
        switch (direction) {
            case VictimDirection.LEFT:
                this.setVelocity(-this.THROW_VELOCITY_X, this.THROW_VELOCITY_Y);
                this.setAngularVelocity(-100);
                break;
            case VictimDirection.RIGHT:
                this.setVelocity(this.THROW_VELOCITY_X, this.THROW_VELOCITY_Y);
                this.setAngularVelocity(100);
                break;
        }
        this.anims.play('victimsad');
    }

    public onHitGround(scene) {
        this.setAngularVelocity(0);
        if (this.saved) {
            this.setRotation(0);
        } else {
            scene.tweens.add({
                targets: this,
                rotation: 0,
                ease: 'Power2',
                duration: 200,
            });
        }
    }

    public getSaved() {
        this.anims.play('victimhappy');
    }
}