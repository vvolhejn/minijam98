import * as Phaser from 'phaser'
import {LevelScene} from './scenes/levelScene';

let levelScene = new LevelScene('JoseHose');

let levels = [
    levelScene,
];

export const SCREEN_HEIGHT = 704;
export const SCREEN_WIDTH = 1200;

const gameConfig = {
    type: Phaser.AUTO,
    parent: 'content',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
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
    seed: ["42"],
    pixelArt: true,
};

export const game = new Phaser.Game(gameConfig);