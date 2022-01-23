import { parseAllProperties, parseProperties } from "./utils";

export class LevelGenerator {
    scene;
    rooms;
    NUM_ROOMS = 5;

    constructor(scene) {
        this.scene = scene;
        for (let i = 1; i <= this.NUM_ROOMS; i++) {
            const key = `room${i}`;
            scene.load.tilemapTiledJSON(key, `assets/room${i}.json`);
        }
    }

    public create() {
        this.rooms = Array();
        for (let i = 1; i <= this.NUM_ROOMS; i++) {
            const key = `room${i}`;
            let map = this.scene.make.tilemap({ key: key });
            map['properties'] = parseProperties(map['properties']);
            console.log("map after is", map);
            this.rooms.push([key, map]);
        }
    }

    public generateLevel() {
        // let level = [this.randomChoice(this.rooms)];
        // let totalHeight = 0;
        // while (totalHeight < 3) {
        //
        // }
        return [this.rooms[0][0], this.rooms[1][0], this.rooms[1][0]];
    }

    private randomChoice(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

}