export abstract class Player extends Phaser.GameObjects.Container {
    sprite: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    spriteKey : string;

    constructor(scene: Phaser.Scene, x : integer, y : integer, spriteKey: string) {
        super(scene);
        this.spriteKey = spriteKey
        this.sprite = scene.physics.add.sprite(x, y, spriteKey);
        this.sprite.setCollideWorldBounds(true);
    }

    public abstract update(time, delta) : void
}