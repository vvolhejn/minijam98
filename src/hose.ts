import { Scene } from "phaser";
import { LevelScene } from "./scenes/levelScene";
import { clampIfBlocked, zeroAccelerationIfBlocked } from "./utils";

export class Hose extends Phaser.GameObjects.Container {

    parts: Array<Phaser.Physics.Arcade.Sprite> = new Array();

    DISTANCE_BETWEEN_PARTS: number = 10  // what *should* the distance be?
    SPRING_COEF: number = 100  // how strong the force is that is proportional to the distance
    DAMPING_COEF: number = 200  // how quickly velocity decays to 0
    ATTACHED_PULL_COEF = 0.003 // how strongly the attached object is pulled
    N_PHYSICS_ITERATIONS = 10 // more = less bouncy, but more CPU
    N_PARTS = 25  // how many parts of the rope
    MAX_ACCELERATION = 1000000000

    // temporary fix
    HOSE_START_POINT = new Phaser.Math.Vector2(100, 500)

    HOSE_DEBUG_VIEW = false  // Disable the line, switch to particles
    HOSE_COLOR_1 = 0x333333
    HOSE_COLOR_2 = 0x666666
    HOSE_THICKNESS = 15


    // horizontal speed is multiplied by (1 - FRICTION_COEF) each second
    // so values between 0 and 1 are reasonable
    // Note: this happens for the parts in the air as well
    FRICTION_COEF = 0.5;

    endAttachedTo: Phaser.Physics.Arcade.Body = null
    startPoint: Phaser.Math.Vector2
    curve: Phaser.Curves.Spline
    graphics;

    constructor(scene: LevelScene, x, y) {
        super(scene, 0, 0);

        for (let i = 0; i < this.N_PARTS; i++) {
            const part = scene.physics.add.sprite(x + i * 1, y - i * 1, "bomb");
            if (!this.HOSE_DEBUG_VIEW) {
                part.setVisible(false)
            }
            this.parts.push(part);
            part.setCollideWorldBounds(true);
            scene.physics.add.collider(part, scene.platforms)
            part.body.setSize(50, 50)
        }

        // this.startPoint = this.parts[this.parts.length - 1].body.position.clone()
        this.startPoint = this.HOSE_START_POINT.clone()

        this.curve = new Phaser.Curves.Spline(this.parts.map(p => p.getCenter()))
        this.graphics = scene.add.graphics();
    }

    attachEndTo(body: Phaser.Physics.Arcade.Body) {
        this.endAttachedTo = body
    }

    setStartTo(p: Phaser.Math.Vector2) {
        this.startPoint = p
    }

    getSpringForces(): Array<Phaser.Math.Vector2> {
        let forces: Array<Phaser.Math.Vector2> = []
        for (let i = 0; i < this.parts.length - 1; i++) {
            // this.parts[0].setAccelerationX(1)
            // this.parts[0].body.velocity
            const distance = Phaser.Math.Distance.BetweenPoints(this.parts[i], this.parts[i + 1]);
            const force = - this.SPRING_COEF * (
                distance - this.DISTANCE_BETWEEN_PARTS
            )
            const relativeVelocity = this.parts[i].body.velocity.clone().subtract(this.parts[i + 1].body.velocity)

            forces.push(
                this.parts[i].body.position
                    .clone()
                    .subtract(this.parts[i + 1].body.position)
                    .setLength(distance * force)
                    .subtract(relativeVelocity.scale(this.DAMPING_COEF))
            )

            // F = -k(|x|-d)(x/|x|) - bv
        }

        return forces
    }

    draw() {
        for (const part of this.parts) {
            part.setVisible(this.HOSE_DEBUG_VIEW);
        }

        if (!this.HOSE_DEBUG_VIEW) {
            this.curve = new Phaser.Curves.Spline(this.parts.map(p => p.getCenter()))
            this.graphics.clear();

            this.graphics.lineStyle(2, 0xffffff, 1);
            this.graphics.lineGradientStyle(
                this.HOSE_THICKNESS,
                this.HOSE_COLOR_1, this.HOSE_COLOR_1,
                this.HOSE_COLOR_2, this.HOSE_COLOR_2,
                1
            );

            this.curve.draw(this.graphics, 64);
        }
    }

    update(_, delta) {
        // F = -k(|x|-d)(x/|x|) - bv
        // https://gafferongames.com/post/spring_physics/

        let forces

        let newVelocities: Array<Phaser.Math.Vector2> = []
        for (let i = 0; i < this.parts.length; i++) {
            newVelocities.push(this.parts[i].body.velocity);
            zeroAccelerationIfBlocked(this.parts[i].body)
        }

        const nIterations = this.N_PHYSICS_ITERATIONS
        for (let it = 0; it < nIterations; it++) {
            forces = this.getSpringForces();

            for (let i = 0; i < this.parts.length; i++) {
                // this.parts[i].setMaxVelocity(100, 100)

                let accel = new Phaser.Math.Vector2(0, 0)
                if (i > 0) {
                    accel.subtract(forces[i - 1])
                }
                if (i > 0 && i < this.parts.length - 1) {
                    accel.add(forces[i])
                }
                // console.log(accelY)

                if (accel.length() > this.MAX_ACCELERATION) {
                    accel.setLength(this.MAX_ACCELERATION)
                }

                let coef = 0.0001 * delta / nIterations;
                let coef2 = delta / nIterations * 0.0001

                newVelocities[i].add(accel.scale(coef))

                // TODO: only do this when the rope is on the ground?
                newVelocities[i].x *= Math.pow(this.FRICTION_COEF, (delta / nIterations / 1000));

                newVelocities[i] = clampIfBlocked(this.parts[i].body, newVelocities[i])

                this.parts[i].setX(this.parts[i].x - coef2 * newVelocities[i].x)
                this.parts[i].setY(this.parts[i].y - coef2 * newVelocities[i].y)
            }
        }

        this.parts[0].setVelocity(0, 0)

        for (let i = 1; i < this.parts.length; i++) {
            this.parts[i].setVelocity(newVelocities[i].x, newVelocities[i].y);
        }

        if (this.endAttachedTo !== null) {
            this.parts[0].setPosition(
                this.endAttachedTo.position.x + this.endAttachedTo.width / 2,
                this.endAttachedTo.position.y + this.endAttachedTo.height / 2,
            )

            forces[0].scale(this.ATTACHED_PULL_COEF * delta / 1000)
            // this.endAttachedTo.setAcceleration(
            //     this.endAttachedTo.acceleration.x + forces[0].x,
            //     this.endAttachedTo.acceleration.y + forces[0].y,
            // )
            this.endAttachedTo.setVelocity(
                this.endAttachedTo.velocity.x + forces[0].x,
                this.endAttachedTo.velocity.y + forces[0].y,
            )
        }

        if (this.startPoint !== null) {
            this.parts[this.parts.length - 1].setPosition(
                this.startPoint.x,
                this.startPoint.y,
            )
            this.parts[this.parts.length - 1].setVelocity(0, 0)
        }

        this.draw()
    }
}
