import { Fire } from "./fire";
import { LevelScene } from "./scenes/levelScene";

export const MAX_VELOCITY_X: integer = 250;

// horizontal speed is multiplied by (1 - FRICTION_COEF) each second
// so values between 0 and 1 are reasonable
const FRICTION_COEF: number = 0.85;
const FIRE_PLAYER_COLLISION_PENALTY_MS = 2000;

export abstract class Player extends Phaser.GameObjects.Container {
    sprite: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    spriteKey: string;

    LEFT_ANIM_KEY: string;
    RIGHT_ANIM_KEY: string;
    TURN_ANIM_KEY: string;

    ON_DAMAGE_VELOCITY_X = 300;
    ON_DAMAGE_VELOCITY_Y = 100;
    INVINCIBILITY_TIME_MS = 500;
    TELEPORT_COOLDOWN_MS = 3000;

    // CURRENTLY UNUSED!
    invincible = false;  // briefly true after damage

    canTeleport = true;

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

    public update(_time, delta): void {
        this.sprite.setVelocityX(
            this.sprite.body.velocity.x
            * Math.pow(1 - FRICTION_COEF, delta / 1000)
        );
    }

    public onFireCollision(fire: Fire, scene: LevelScene) {
        if (this.invincible) return;

        const positionDiff = this.sprite.getCenter().clone().subtract(fire.getCenter());
        this.sprite.setVelocityX(this.ON_DAMAGE_VELOCITY_X * (positionDiff.x > 0 ? 1 : (-1)));
        this.sprite.setVelocityY(-this.ON_DAMAGE_VELOCITY_Y);

        console.log(scene.timer.total_ms);
        scene.timer.total_ms = Math.max(scene.timer.total_ms - FIRE_PLAYER_COLLISION_PENALTY_MS, 0);
        this.sprite.setTint(0xFF0000);
        // this.invincible = true;
        // serol.alpha = 0.5;
        scene.time.addEvent({
            delay: this.INVINCIBILITY_TIME_MS,
            callback: () => {
                this.sprite.clearTint();
                this.invincible = false;
            },
            loop: false
        });
    }

    public onTeleport() {
        this.canTeleport = false;
        this.scene.time.delayedCall(
            this.TELEPORT_COOLDOWN_MS,
            () => { this.canTeleport = true; }, [], this
        );
    }
}