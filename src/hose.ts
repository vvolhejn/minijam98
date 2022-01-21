import { Scene } from "phaser";
import { LevelScene } from "./scenes/levelScene";

export class Hose extends Phaser.GameObjects.Container {

    parts: Array<Phaser.Physics.Arcade.Sprite> = new Array();

    distanceBetweenParts: number = 5
    springCoef: number = 3
    dampingCoef: number = 10
    maxAcceleration: number = 10

    constructor(scene: LevelScene) {
        super(scene, 0, 0);


        for (let i = 0; i < 50; i++) {
            const part = scene.physics.add.sprite(400 + i * 10, 100 + i * 10, "bomb");
            this.parts.push(part);
            part.setCollideWorldBounds(true);
            scene.physics.add.collider(part, scene.platforms)
        }

        // this.parts[0].setPosition

        scene.input.on('pointermove', function (pointer) {
            this.parts[0].setPosition(pointer.x, pointer.y).
                this.parts[0].setVelocity(0, 0);
            this.parts[0].setAccelerationY(-300);
        }, this);

    }

    getSpringForces(): Array<Phaser.Math.Vector2> {
        let forces: Array<Phaser.Math.Vector2> = []
        for (let i = 0; i < this.parts.length - 1; i++) {
            // this.parts[0].setAccelerationX(1)
            // this.parts[0].body.velocity
            const distance = Phaser.Math.Distance.BetweenPoints(this.parts[i], this.parts[i + 1]);
            const force = - this.springCoef * (
                distance - this.distanceBetweenParts
            )
            const relativeVelocity = this.parts[i].body.velocity.clone().subtract(this.parts[i + 1].body.velocity)

            forces.push(
                this.parts[i].body.position
                    .clone()
                    .subtract(this.parts[i + 1].body.position)
                    .setLength(distance * force)
                    .subtract(relativeVelocity.scale(this.dampingCoef))
            )

            // F = -k(|x|-d)(x/|x|) - bv
        }

        return forces
    }

    update(_, delta) {
        // F = -k(|x|-d)(x/|x|) - bv
        // https://gafferongames.com/post/spring_physics/


        // console.log(forces)
        const nIterations = 1000
        for (let it = 0; it < nIterations; it++) {
            let forces = this.getSpringForces();

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

                // if (accel.length() > this.maxAcceleration) {
                //     accel.setLength(this.maxAcceleration)
                // }

                let coef = 0.00001 * delta;
                let coef2 = delta / nIterations * 0.0001

                this.parts[i].body.velocity.add(accel.scale(coef))

                this.parts[i].setX(this.parts[i].x - coef2 * this.parts[i].body.velocity.x)
                this.parts[i].setY(this.parts[i].y - coef2 * this.parts[i].body.velocity.y)

                // this.parts[i].gra
            }
        }

        // this.parts[0].setAcceleration(0, 0)
        this.parts[0].setVelocity(0, 0)
    }
}

export class HosePart extends Phaser.GameObjects.Container {
    update(_, delta) {
        console.log("upd")
    }
}