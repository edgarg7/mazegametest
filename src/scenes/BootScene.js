import { CELL_SIZE, PLAYER_MARGIN } from '../config.js';

export default class BootScene extends Phaser.Scene {
  constructor() { super('Boot'); }

  preload() {
    // No external assets yet
  }

  create() {
    const g = this.add.graphics();

    // ---- Player box (final size, no scaling later) ----
    const PLAYER_SIZE = Math.max(8, CELL_SIZE - PLAYER_MARGIN);
    g.clear().fillStyle(0xffffff, 1).fillRect(0, 0, PLAYER_SIZE, PLAYER_SIZE);
    g.generateTexture('playerBox', PLAYER_SIZE, PLAYER_SIZE);

    // ---- Wall tile (cell size) ----
    g.clear().fillStyle(0x1b1f3b, 1).fillRect(0, 0, CELL_SIZE, CELL_SIZE);
    g.generateTexture('wallTile', CELL_SIZE, CELL_SIZE);

    // ---- Enemy box (slightly smaller than a cell) ----
    const ENEMY_SIZE = CELL_SIZE - 2;
    g.clear().fillStyle(0xff3b3b, 1).fillRect(0, 0, ENEMY_SIZE, ENEMY_SIZE);
    g.generateTexture('enemyBox', ENEMY_SIZE, ENEMY_SIZE);

    // ---- Bullet ----
    g.clear().fillStyle(0xffff66, 1).fillRect(0, 0, 6, 6);
    g.generateTexture('bullet', 6, 6);

    // ---- Shoot button (circle) ----
    const r = 44;
    g.clear().fillStyle(0x0a84ff, 0.7).fillCircle(r, r, r);
    g.lineStyle(4, 0xffffff, 1).strokeCircle(r, r, r);
    g.generateTexture('shootBtn', r * 2, r * 2);

    g.destroy();

    this.scene.start('Menu');
  }
}
