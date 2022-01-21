import { Scene } from "phaser";
import { getDefaultLibFileName } from "typescript";
import { LevelScene } from "./scenes/levelScene";
import { clampIfBlocked, zeroAccelerationIfBlocked } from "./utils";

export class Hose extends Phaser.GameObjects.Container {

    parts: Array<Phaser.Physics.Arcade.Sprite> = new Array();
    lastPositions: Array<Phaser.Math.Vector2> = new Array();

    DISTANCE_BETWEEN_PARTS: number = 10  // what *should* the distance be?
    SPRING_COEF: number = 100  // how strong the force is that is proportional to the distance
    DAMPING_COEF: number = 200  // how quickly velocity decays to 0
    ATTACHED_PULL_COEF = 0.001 // how strongly the attached object is pulled
    N_PHYSICS_ITERATIONS = 10 // more = less bouncy, but more CPU
    N_PARTS = 50 // how many parts of the rope
    MAX_ACCELERATION = 1000000000

    // horizontal speed is multiplied by (1 - FRICTION_COEF) each second
    // so values between 0 and 1 are reasonable
    // Note: this happens for the parts in the air as well
    FRICTION_COEF = 0.5;

    endAttachedTo: Phaser.Physics.Arcade.Body = null
    startPoint: Phaser.Math.Vector2

    constructor(scene: LevelScene, x, y) {
        super(scene, 0, 0);

        for (let i = 0; i < this.N_PARTS; i++) {
            const part = scene.physics.add.sprite(x + i * 1, y - i * 1, "bomb");
            this.parts.push(part);
            this.lastPositions.push(part.getCenter().clone())
            part.setCollideWorldBounds(true);
            scene.physics.add.collider(part, scene.platforms);
        }

        // this.parts[0].setPosition

        // scene.input.on('pointermove', function (pointer) {
        //     this.parts[0].setPosition(pointer.x, pointer.y);
        //     this.parts[0].setVelocity(0, 0);
        //     this.parts[0].setAccelerationY(-300);
        // }, this);

        this.startPoint = this.parts[this.parts.length - 1].body.position
    }

    attachEndTo(body: Phaser.Physics.Arcade.Body) {
        this.endAttachedTo = body
    }

    setStartTo(p: Phaser.Math.Vector2) {
        this.startPoint = p
    }

    physicsUpdate(delta) {
        const tryToMovePart = (part: Phaser.Physics.Arcade.Sprite, by) => {
            by = clampIfBlocked(part.body, by)
            part.setX(part.getCenter().x + by.x)
            part.setY(part.getCenter().y + by.y)
        };

        for (let i = 0; i < this.parts.length - 1; i++) {
            let diff = (this.parts[i].getCenter()
                .clone()
                .subtract(this.parts[i + 1].getCenter()));

            const toMove = this.DISTANCE_BETWEEN_PARTS - diff.length();

            diff.setLength(toMove * 0.5);

            tryToMovePart(this.parts[i], diff)
            diff.negate()
            tryToMovePart(this.parts[i + 1], diff)
        }

        for (let i = 0; i < this.parts.length - 1; i++) {
            let movement = this.parts[i]
                .getCenter()
                .clone()
                .subtract(this.lastPositions[i])
                .scale(10 * delta / 1000);
            movement.add(new Phaser.Math.Vector2(0, 1000 * Math.pow(delta / 1000, 2)))
            tryToMovePart(
                this.parts[i],
                movement,
            );
            // Use or not?
            // this.lastPositions[i] = this.parts[i].getCenter().clone()
        }

        
    }

    update(_, delta) {
        // https://gamedevelopment.tutsplus.com/tutorials/simulate-tearable-cloth-and-ragdolls-with-simple-verlet-integration--gamedev-519

        for (let i = 0; i < this.parts.length; i++) {
            const coef = 0.1
            this.parts[i].setVelocity(
                (this.parts[i].getCenter().x - this.lastPositions[i].x) * coef,
                (this.parts[i].getCenter().y - this.lastPositions[i].y) * coef,
            )
            this.lastPositions[i] = this.parts[i].getCenter().clone()
        }

        const nIterations = this.N_PHYSICS_ITERATIONS
        for (let it = 0; it < nIterations; it++) {
            this.physicsUpdate(delta / nIterations)
        }

        if (this.endAttachedTo !== null) {
            this.parts[0].setPosition(this.endAttachedTo.position.x, this.endAttachedTo.position.y)
        }

        // Debugging purposes
        // for (let i = 0; i < this.parts.length; i++) {
        //     if (this.parts[i].body.blocked.right) {
        //         this.parts[i].setTint(0xff0000);
        //     } else {
        //         this.parts[i].clearTint();
        //     }
        // }
    }
}
