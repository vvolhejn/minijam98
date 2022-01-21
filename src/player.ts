
export const MAX_VELOCITY_X: integer = 160;

// horizontal speed is multiplied by (1 - FRICTION_COEF) each second
// so values between 0 and 1 are reasonable
const FRICTION_COEF: number = 0.85;

export abstract class Player extends Phaser.GameObjects.Container {
    sprite: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    spriteKey: string;

    LEFT_ANIM_KEY : string;
    RIGHT_ANIM_KEY : string;
    TURN_ANIM_KEY : string;

    constructor(scene: Phaser.Scene, x: integer, y: integer, spriteKey: string) {
        super(scene);
        this.spriteKey = spriteKey
        this.sprite = scene.physics.add.sprite(x, y, spriteKey);
        this.sprite.setCollideWorldBounds(true);

        this.LEFT_ANIM_KEY = `${spriteKey}_left`;
        this.RIGHT_ANIM_KEY = `${spriteKey}_right`;
        this.TURN_ANIM_KEY = `${spriteKey}_turn`;
    }

    public update(_time, delta): void {
        this.sprite.setVelocityX(
            this.sprite.body.velocity.x
            * Math.pow(1 - FRICTION_COEF, delta / 1000)
        );
    }
}