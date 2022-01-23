import { Fire } from "./fire";
import { LevelScene } from "./scenes/levelScene";

export const MAX_VELOCITY_X: integer = 250;

const FIRE_PLAYER_COLLISION_PENALTY_MS = 2000;

export abstract class Player extends Phaser.GameObjects.Container {
    sprite: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    spriteKey: string;

    LEFT_ANIM_KEY: string;
    RIGHT_ANIM_KEY: string;
    TURN_ANIM_KEY: string;

    // CURRENTLY UNUSED!
    invincible = false;  // briefly true after damage

    constructor(scene: Phaser.Scene, x: integer, y: integer, spriteKey: string) {
        super(scene);
        this.spriteKey = spriteKey;
        this.sprite = scene.physics.add.sprite(x, y, spriteKey);

        this.LEFT_ANIM_KEY = `${spriteKey}_left`;
        this.RIGHT_ANIM_KEY = `${spriteKey}_right`;
        this.TURN_ANIM_KEY = `${spriteKey}_turn`;
    }

    public setPhysicsProperties() {
        // needs to be called after the sprite is added to the physics group
        this.sprite.setCollideWorldBounds(true);
        this.sprite.setMaxVelocity(MAX_VELOCITY_X, 100000);
    }

    public update(_time, _delta): void {
    }
}