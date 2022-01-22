export class ElVictimo extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene, x, y, textureKey : string) {
        super(scene, x, y, textureKey);
    }
}

export function createElVictimoGroup(scene : Phaser.Scene, coords: Array<Phaser.Math.Vector2>, textureKey : string): Phaser.Physics.Arcade.StaticGroup {
    const group = scene.physics.add.staticGroup();
    for (const vec of coords) {
        group.add(new ElVictimo(scene, vec.x, vec.y, textureKey), true);
    }

    return group;
}