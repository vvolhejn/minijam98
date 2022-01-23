import { LevelScene } from "./scenes/levelScene";

export class Box extends Phaser.Physics.Arcade.Sprite {
    scene: LevelScene;

    constructor(scene: LevelScene, x, y, width, height, textureKey) {
        super(scene, x, y, textureKey);
        this.scene = scene;
        this.setDisplaySize(width, height);
    }
}