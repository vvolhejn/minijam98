import { LevelScene } from "./scenes/levelScene";

export class Box extends Phaser.Physics.Arcade.Sprite {
    scene: LevelScene;
    FRICTION_COEF = 0.9;

    constructor(scene: LevelScene, x, y, width, height, textureKey) {
        super(scene, x, y, textureKey);
        this.scene = scene;
        this.setOrigin(0, 1);
        this.setDisplaySize(width, height);
        this.setDepth(5);
    }

    public update(_time, delta): void {
        this.setVelocityX(
            this.body.velocity.x * Math.pow(1 - this.FRICTION_COEF, delta / 1000)
        );
    }
}