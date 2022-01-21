import * as Phaser from 'phaser'
import { HudScene } from './scenes/hudScene';

let hudScene = new HudScene();

let levels = [
  hudScene,
]

const gameConfig = {
  type: Phaser.AUTO,
  parent: 'content',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade'
  },
  scene: levels,
  seed: ["42"]
};

export const game = new Phaser.Game(gameConfig);