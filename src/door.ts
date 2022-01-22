import { Scene } from "phaser";
import { LevelScene } from "./scenes/levelScene";

export class Door {

    doorSprite: Phaser.Physics.Arcade.Sprite;
    keySprite: Phaser.Physics.Arcade.Sprite;
    locked: boolean = false;

    openLeft: boolean = true;
    openRight: boolean = true;
    openUp: boolean = true;
    openDown: boolean = true;

    constructor(scene: Phaser.Scene, x: integer, y: integer) {
        this.doorSprite = scene.physics.add.staticSprite(x, y, "fire");
        // this.sprite.refreshBody();
        this.setOpenSides(true, true, true, true);
    }

    public addKey(scene: LevelScene, x, y) {
        this.keySprite = scene.physics.add.staticSprite(x, y, "fire");
        this.keySprite.setTint(0xff00ff);
        this.locked = true;

        scene.physics.add.overlap(scene.players, this.keySprite, this.onKeyPickup, null, this);
        this.updateCollisionSettings()
    }

    public onKeyPickup(_a, _b) {
        this.setLocked(false);
        this.keySprite.setActive(false);
        this.keySprite.setVisible(false);
        this.keySprite.body.enable = false;
        this.doorSprite.setTint(0x00ffff);
    }

    public setOpenSides(openLeft: boolean, openRight: boolean, openUp = false, openDown = false) {
        // Which direction can the player walk from if the door is unlocked?
        this.openLeft = openLeft;
        this.openRight = openRight;
        this.openUp = openUp;
        this.openDown = openDown;
        this.updateCollisionSettings();
    }

    public setLocked(locked) {
        this.locked = locked;
        if (this.locked) {
            this.keySprite.setTint(0x00ffff);
        } else {
            this.keySprite.clearTint();
        }

        this.updateCollisionSettings();
    }

    private updateCollisionSettings() {
        this.doorSprite.body.checkCollision = {
            "left": !(this.openLeft && !this.locked),
            "right": !(this.openRight && !this.locked),
            "up": !(this.openUp && !this.locked),
            "down": !(this.openDown && !this.locked),
            "none": false,
        };
    }
}