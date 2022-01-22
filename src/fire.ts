export class FireGroup extends Phaser.GameObjects.Container {
    sprites;

    constructor(scene: Phaser.Scene) {
        super(scene);
        this.sprites = this.scene.physics.add.staticGroup({
            key: 'fire',
            repeat: 11,
            setXY: {x: 12, y: 350, stepX: 70},
        });

    }


}


export class Fire extends Phaser.GameObjects.GameObject {
    sprite;

    constructor(scene: Phaser.Scene) {
        super(scene);
        this.sprite = this.scene.physics.add.staticGroup({
            key: 'fire',
            repeat: 11,
            setXY: {x: 12, y: 350, stepX: 70},
        });
    }
}