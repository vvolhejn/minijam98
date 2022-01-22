export class Fire extends Phaser.Physics.Arcade.Sprite {
    hp: number;
    baseHp: number;
    scene;

    constructor(scene: Phaser.Scene, x, y, textureKey, hp = 50) {
        super(scene, x, y, textureKey);
        this.hp = hp;
        this.baseHp = hp;

        // this.sprite = scene.physics.add.sprite(x, y, spriteKey);
        let i = 1 + Math.floor((Math.random() * 3) % 3);
        this.anims.play(`fire${i}anim`, true);

        this.scene = scene;
    }

    public updateScale() {
        const scale = 2 * ((this.hp + this.baseHp) / (2 * this.baseHp));
        this.setScale(scale);

        // TODO: center the scaling on the bottom edge
        // const offset = -(scale - 1) * this.height / 2
        // this.setOffset(0, offset)
        this.body.setOffset(10, 10);  // does not work
    }

    public lowerHp() {
        this.hp--;

        if (this.hp <= 0 && this.active) {
            this.setActive(false);
            // this.setVisible(false);
            this.body.enable = false;

            this.scene.tweens.add({
                targets: this,
                alpha: 0,
                scale: 0.5,
                duration: 200,
                ease: 'Power2'
                // ease: 'Linear'
            });
        }
        this.updateScale();
    }

    public resetHp() {
        this.hp = this.baseHp;
        this.setActive(true);
        this.setVisible(true);
        this.body.enable = true;
        this.updateScale();
        this.setAlpha(1);
    }
}

export function createFireGroup(scene: Phaser.Scene, coords: Array<Phaser.Math.Vector2>): Phaser.Physics.Arcade.StaticGroup {
    let group = scene.physics.add.staticGroup();
    for (let vec of coords) {
        let fire = new Fire(scene, vec.x, vec.y, 'fire');

        group.add(fire, true);

        // needs to be done after the fire is in the group
        fire.body.setSize(30, 60, true);
        fire.updateScale();
    }

    return group;
}