import * as Phaser from 'phaser'
import {LevelScene} from './scenes/levelScene';

let levelScene = new LevelScene();

let levels = [
    levelScene,
];

const gameConfig = {
    type: Phaser.AUTO,
    parent: 'content',
    width: 1200,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 800},
            debug: false,
            fps: 60, // FPS of the physics simulation - maybe higher could increase stability
            timeScale: 1, // higher to slow down - for debugging
        }
    },
    scene: levels,
    seed: ["42"]
};

export const game = new Phaser.Game(gameConfig);