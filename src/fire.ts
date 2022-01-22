export class Fire extends Phaser.Physics.Arcade.Sprite {
    hp: number;
    baseHp: number;

    constructor(scene: Phaser.Scene, x, y, textureKey, hp = 5) {
        super(scene, x, y, textureKey);
        this.hp = hp;
        this.baseHp = hp;
    }

    public lowerHp() {
        this.hp--;
        console.log("HP lowered.");
        if (this.hp <= 0) {
            this.setActive(false);
            this.setVisible(false);
            this.body.enable = false;
        }
    }

    public resetHp() {
        this.hp = this.baseHp;
        this.setActive(true);
        this.setVisible(true);
        this.body.enable = true;
    }
}

export function createFireGroup(scene : Phaser.Scene, coords: Array<Phaser.Math.Vector2>): Phaser.Physics.Arcade.StaticGroup {
    let group = scene.physics.add.staticGroup();
    for (let vec of coords) {
        console.log(vec);
        group.add(new Fire(scene, vec.x, vec.y, 'fire'), true);
    }   

    return group;
}