import { GroundPlayer } from "./groundPlayer";

export class ElVictimo extends Phaser.Physics.Arcade.Sprite {
    savior: GroundPlayer;

    constructor(scene: Phaser.Scene, x, y, textureKey: string) {
        super(scene, x, y, textureKey);
        scene.physics.add.existing(this, false);
        this.savior = null;
    }

    public pickedUpBy(groundPlayer) {
        this.savior = groundPlayer;
    }

    public update(_time, _delta): void {
        if (this.savior == null) {
            return;
        }
        this.x = this.savior.sprite.body.x;
        this.y = this.savior.sprite.body.y;
        // So that the gravity doesn't drag him down.
        this.setVelocity(0, 0);
    }
}

export function createElVictimoGroup(scene: Phaser.Scene, coords: Array<Phaser.Math.Vector2>, textureKey: string): Phaser.Physics.Arcade.Group {
    const group = scene.physics.add.group();
    for (const vec of coords) {
        group.add(new ElVictimo(scene, vec.x, vec.y, textureKey), true);
    }

    return group;
}