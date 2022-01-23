import { ElVictimo } from "./elVictimo";
import { LevelScene } from "./scenes/levelScene";

export class ThanksWall extends Phaser.Physics.Arcade.Sprite {
    scene : LevelScene;

    constructor(scene: LevelScene, x, y, width, height, textureKey) {
        super(scene, x, y, textureKey);
        this.scene = scene;
        this.setOrigin(0, 0);
        this.setDisplaySize(width, height);
        this.setVisible(false);
    }

    public handleVictim(victim: ElVictimo) {
        if (victim.saved || victim.savior != null) { return; }

        victim.saved = true;
        this.scene.score += 1;
        this.scene.redrawScore();
    }
}