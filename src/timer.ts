import { LevelScene } from "./scenes/levelScene";

export class Timer {
    scene: LevelScene;
    sprite: Phaser.GameObjects.Sprite;
    total_ms: number;
    startTime_ms: number;

    x; y; width; height;

    constructor(scene: LevelScene, x, y, width, height, textureKey: string) {
        this.scene = scene;
        this.sprite = this.scene.add.sprite(x, y, textureKey);
        this.sprite.setOrigin(0, 0);
        this.sprite.setDisplaySize(width, height);
        this.width = width;
        this.height = height;
        this.sprite.visible = false;
    }

    public start(total_ms) {
        this.sprite.setDisplaySize(this.width, this.height);
        this.sprite.visible = true;
        this.total_ms = total_ms;
        this.startTime_ms = this.scene.time.now;
    }

    public update(time, _delta) {
        const elapsedFraction = Math.min(1, (time - this.startTime_ms) / this.total_ms);
        this.sprite.setDisplaySize(this.width - this.width * elapsedFraction, this.height);
    }
}