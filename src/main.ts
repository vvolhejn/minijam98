import * as Phaser from 'phaser'
import {LevelScene} from './scenes/levelScene';

let levelScene = new LevelScene();

let levels = [
    levelScene,
];

const gameConfig = {
    type: Phaser.AUTO,
    parent: 'content',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 800},
            debug: false
        }
    },
    scene: levels,
    seed: ["42"]
};

export const game = new Phaser.Game(gameConfig);