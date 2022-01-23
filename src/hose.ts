import { HosePlayer } from "./hosePlayer";
import { LevelScene } from "./scenes/levelScene";
import { clampIfBlocked, zeroAccelerationIfBlocked } from "./utils";

export class Hose extends Phaser.GameObjects.Container {

    parts: Array<Phaser.Physics.Arcade.Sprite> = new Array();

    DISTANCE_BETWEEN_PARTS: number = 1;  // what *should* the distance be?
    SPRING_COEF: number = 250;  // how strong the force is that is proportional to the distance
    DAMPING_COEF: number = 100;  // how quickly velocity decays to 0
    ATTACHED_PULL_COEF = 0.001; // how strongly the attached object is pulled
    N_PHYSICS_ITERATIONS = 1; // more = less bouncy, but more CPU - 1 should be ok
    N_PARTS = 50;  // how many parts of the rope
    MAX_ACCELERATION = 100000;

    // Smooths the force applied to the hose parts over time. In [0, 1].
    // Lower makes the rope more realistic, but tends to wobble
    VELOCITY_SMOOTHING_COEF = 0.5;

    // temporary fix
    HOSE_START_POINT = new Phaser.Math.Vector2(200, 500);

    HOSE_DEBUG_VIEW = false;  // Disable the line, switch to particles
    HOSE_COLOR_1 = 0x333333;
    HOSE_COLOR_2 = 0x666666;
    HOSE_THICKNESS = 15;
    PART_SCALE = 1; // How big are the balls?
    MAX_DISTANCE = 1000; // Limits the force applied when the balls are further than this (px)

    // horizontal speed is multiplied by (1 - FRICTION_COEF) each second
    // so values between 0 and 1 are reasonable
    // Note: this happens for the parts in the air as well
    FRICTION_COEF = 0.5;

    endAttachedTo: HosePlayer = null;
    startPoint: Phaser.Math.Vector2;
    curve: Phaser.Curves.Spline;
    graphics;
    debugText: Phaser.GameObjects.Text;
    smoothedVelocities: Array<Phaser.Math.Vector2>;

    constructor(scene: LevelScene, x, y) {
        super(scene, 0, 0);
        this.debugText = scene.add.text(700, 100, 'Debug text');
        if (!this.HOSE_DEBUG_VIEW) {
            this.debugText.setVisible(false);
        }

        this.smoothedVelocities = [];

        for (let i = 0; i < this.N_PARTS; i++) {
            const part = scene.physics.add.sprite(x + i * 1, y - i * 1, "debugball");

            if (!this.HOSE_DEBUG_VIEW) {
                part.setVisible(false);
            }
            this.parts.push(part);
            part.setCollideWorldBounds(true);
            scene.physics.add.collider(part, scene.platforms);
            scene.physics.add.collider(part, scene.walls);

            part.setScale(this.PART_SCALE);

            part.body.setCircle(part.width / 2);
            this.smoothedVelocities.push(new Phaser.Math.Vector2(0, 0));
        }

        // this.startPoint = this.parts[this.parts.length - 1].body.position.clone()
        this.startPoint = this.HOSE_START_POINT.clone();

        this.curve = new Phaser.Curves.Spline(this.parts.map(p => p.getCenter()));
        this.graphics = scene.add.graphics();
    }

    attachEndTo(hosePlayer: HosePlayer) {
        this.endAttachedTo = hosePlayer;
    }

    setStartTo(p: Phaser.Math.Vector2) {
        this.startPoint = p;
    }

    getSpringForces(velocities): Array<Phaser.Math.Vector2> {
        let forces: Array<Phaser.Math.Vector2> = [];
        for (let i = 0; i < this.parts.length - 1; i++) {
            let distance = Phaser.Math.Distance.BetweenPoints(this.parts[i].getCenter(), this.parts[i + 1].getCenter());
            if (distance > this.MAX_DISTANCE) {
                distance = this.MAX_DISTANCE;
            }
            const force = - this.SPRING_COEF * (
                distance - this.DISTANCE_BETWEEN_PARTS
            );

            forces.push(
                this.parts[i].getCenter()
                    .clone()
                    .subtract(this.parts[i + 1].getCenter())
                    .setLength(distance * force)
            );
        }

        return forces;
    }

    draw() {
        for (const part of this.parts) {
            part.setVisible(this.HOSE_DEBUG_VIEW);
        }

        if (!this.HOSE_DEBUG_VIEW) {
            this.curve = new Phaser.Curves.Spline(this.parts.map(p => p.getCenter()));
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

        let forces;

        let newVelocities: Array<Phaser.Math.Vector2> = [];
        for (let i = 0; i < this.parts.length; i++) {
            newVelocities.push(this.parts[i].body.velocity.clone());
            zeroAccelerationIfBlocked(this.parts[i].body);
        }

        const nIterations = this.N_PHYSICS_ITERATIONS;
        for (let it = 0; it < nIterations; it++) {
            forces = this.getSpringForces(newVelocities);

            for (let i = 0; i < this.parts.length; i++) {
                // this.parts[i].setMaxVelocity(100, 100)

                let accel = new Phaser.Math.Vector2(0, 0);
                if (i > 0) {
                    accel.subtract(forces[i - 1]);
                }
                if (i > 0 && i < this.parts.length - 1) {
                    accel.add(forces[i]);
                }
                // console.log(accelY)

                if (accel.length() > this.MAX_ACCELERATION) {
                    accel.setLength(this.MAX_ACCELERATION);
                }
                accel.subtract(newVelocities[i].clone().scale(this.DAMPING_COEF));

                const curDelta = delta / nIterations;
                let coef = 0.0001 * curDelta;
                let coef2 = 0.0001 * curDelta;

                newVelocities[i].add(accel.scale(coef));

                // TODO: only do this when the rope is on the ground?
                newVelocities[i].x *= Math.pow(this.FRICTION_COEF, (curDelta / 1000));
            }
        }

        this.parts[1].setTint(0xff0000);
        this.parts[0].setVelocity(0, 0);

        const vecToString = (v) => `(${v.x.toFixed(2)}, ${v.y.toFixed(2)})`;

        for (let i = 1; i < this.parts.length; i++) {
            // Apply temporal smoothing to the velocity
            const curCoef = Math.pow(this.VELOCITY_SMOOTHING_COEF, delta / 16);
            this.smoothedVelocities[i] = (
                this.smoothedVelocities[i]
                    .clone().scale(curCoef)
                    .add(newVelocities[i].clone().scale(1 - curCoef))
            );

            this.parts[i].setVelocity(this.smoothedVelocities[i].x, this.smoothedVelocities[i].y);
        }

        if (this.HOSE_DEBUG_VIEW) {
            this.debugText.setText(
                vecToString(this.smoothedVelocities[1]) + "\n" +
                vecToString(forces[0]) + "\n" +
                vecToString(forces[1]) + "\n"
            );
        }

        if (this.endAttachedTo !== null && !this.endAttachedTo.isAnchored) {
            // Apply force to the player
            let playerBody = this.endAttachedTo.sprite.body;
            this.parts[0].setPosition(
                playerBody.position.x + playerBody.width / 2,
                playerBody.position.y + playerBody.height / 2,
            );

            forces[0].scale(this.ATTACHED_PULL_COEF * delta / 1000);

            playerBody.setVelocity(
                playerBody.velocity.x + forces[0].x,
                playerBody.velocity.y + forces[0].y,
            );
        }

        if (this.startPoint !== null) {
            // Fix the starting point - the last part
            this.parts[this.parts.length - 1].setPosition(
                this.startPoint.x,
                this.startPoint.y,
            );
            this.parts[this.parts.length - 1].setVelocity(0, 0);
        }

        this.draw();
    }
}
