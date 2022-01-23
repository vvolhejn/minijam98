import { parseAllProperties, parseProperties } from "./utils";

export class LevelGenerator {
    scene;
    rooms;
    NUM_ROOMS = 9;

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
            map.mapKey = key;
            map.properties.height = map.properties.height || 1;
            this.rooms.push(map);
        }
    }

    public generateLevel() {
        let levelFromUrl = this.levelFromUrl();
        let level;
        if (levelFromUrl != null) {
            level = levelFromUrl;
        } else {
            let heightLeft = 3;
            while (heightLeft > 0) {
                level = [];
                let entryConstraints = [];
                heightLeft = 3;
                while (heightLeft > 0) {
                    // console.log(heightLeft);

                    let availableRooms = this.rooms.filter((map) => {
                        let h = map.properties.height;
                        let ok = h <= heightLeft;
                        if (entryConstraints.length > 0) {
                            let options = entryConstraints.map((entryOption) => {
                                return map.properties.entry.includes(entryOption);
                            });
                            // console.log(map.mapKey, map);
                            // console.log("enrtryu Constraing", entryConstraints);
                            // console.log(options);
                            ok = ok && options.includes(true);
                        }
                        return ok;
                    });
                    // console.log("Available rooms", availableRooms);
                    if (availableRooms.length == 0)
                        break;
                    let room = this.randomChoice(availableRooms);
                    level.push(room);
                    entryConstraints = room.properties.exit;
                    let h = room.properties.height;
                    heightLeft -= h;
                }
            }
        }
        console.log("Level: ", level.map((room) => room.mapKey));
        return level;
    }

    private levelFromUrl() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        if (!urlParams.has('rooms')) {
            return null;
        }
        let wantedRooms = urlParams.get('rooms')?.split(',').map((x) => +x);
        console.log("Wanted rooms: ", wantedRooms);
        wantedRooms = wantedRooms?.map((x) => this.rooms[x]);
        return wantedRooms;
    }

    private randomChoice(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

}