import { LevelScene } from "./scenes/levelScene";

export class TeleportManager {
    entryTeleports = [];
    exitTeleports = [];
    teleports: Phaser.Physics.Arcade.StaticGroup;

    scene: LevelScene;

    constructor(scene: LevelScene) {
        this.scene = scene;
        this.teleports = scene.physics.add.staticGroup();
    }

    public addRoom(map: Phaser.Tilemaps.Tilemap, offsetX, offsetY) {
        let entries = map.getObjectLayer('entryteleport');
        let exits = map.getObjectLayer('exitteleport');

        let putSprite = (pos, key) => {
            let sprite = this.scene.physics.add.staticSprite(
                pos.x + offsetX,
                pos.y + offsetY,
                key,
            );
            sprite.setOrigin(0, 1);
            sprite.setDepth(1);
            sprite.refreshBody();
            return sprite;
        };

        if (entries !== null && entries.objects.length > 0) {
            let sprite = putSprite(entries.objects[0], "stairsdown");
            this.entryTeleports.push(sprite);
            this.teleports.add(sprite);
        } else {
            this.entryTeleports.push(null);
        }

        if (exits !== null && exits.objects.length > 0) {
            let sprite = putSprite(exits.objects[0], "stairsup");
            this.exitTeleports.push(sprite);
            this.teleports.add(sprite);
        } else {
            this.exitTeleports.push(null);
        }

        // console.log(entries, exits)
        // .objects.forEach((tile) => {
        //     console.log(tile)
        // });
    }

    public getCorrespondingTeleport(sprite: Phaser.Physics.Arcade.Sprite) {
        let n = this.entryTeleports.length;
        for (let i = 0; i < n; i++) {
            if (i < n - 1 && this.exitTeleports[i] === sprite) {
                // possibly null
                return this.entryTeleports[i + 1];
            }
            if (i > 0 && this.entryTeleports[i] === sprite) {
                return this.exitTeleports[i - 1];
            }
        }
        return null;
    }

    public clearOld() {
        let n = this.entryTeleports.length;
        for (let i = 0; i < n; i++) {
            this.entryTeleports[i] = null;
            this.exitTeleports[i] = null;
        }
    }
}