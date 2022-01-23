import { ElVictimo } from "./elVictimo";
import { LevelScene } from "./scenes/levelScene";

export class ThanksWall extends Phaser.Physics.Arcade.Sprite {
    scene: LevelScene;
    thanksSounds: Phaser.Sound.BaseSound[];

    constructor(scene: LevelScene, x, y, width, height, textureKey, thanksSounds: Phaser.Sound.BaseSound[]) {
        super(scene, x, y, textureKey);
        this.scene = scene;
        this.setOrigin(0, 0);
        this.setDisplaySize(width, height);
        this.setVisible(false);
        this.thanksSounds = thanksSounds;
    }

    public handleVictim(victim: ElVictimo) {
        if (victim.saved || victim.savior != null) { return; }

        this.thanksSounds[Math.floor(Math.random() * this.thanksSounds.length)].play();
        victim.saved = true;
        this.scene.score += 1;
        this.scene.redrawScore();
    }
}