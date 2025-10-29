import { SWIPE_MIN_DIST, SWIPE_MAX_TIME } from '../config.js';

export default class InputManager {
  constructor(scene, { isTouchDevice, onDirection, onShoot }) {
    this.scene = scene;
    this.isTouch = !!isTouchDevice;
    this.onDirection = onDirection;
    this.onShoot = onShoot;

    if (this.isTouch) {
      this.setupSwipe();
      this.setupShootButton();
    } else {
      this.setupKeyboard();
      this.setupMouseShoot();
    }
  }

  /* ===== Desktop ===== */
  setupKeyboard() {
    const k = this.scene.input.keyboard;
    this.cursors = k.createCursorKeys();
    const keys = k.addKeys('W,A,S,D');
    this.keys = {
      up:    [this.cursors.up,    keys.W],
      down:  [this.cursors.down,  keys.S],
      left:  [this.cursors.left,  keys.A],
      right: [this.cursors.right, keys.D],
    };
    // Ctrl to shoot
    const ctrl = k.addKey(Phaser.Input.Keyboard.KeyCodes.CONTROL);
    ctrl.on('down', () => this.onShoot());

    // Prevent browser from stealing arrows/space
    this.scene.input.keyboard?.addCapture([
      Phaser.Input.Keyboard.KeyCodes.LEFT,
      Phaser.Input.Keyboard.KeyCodes.RIGHT,
      Phaser.Input.Keyboard.KeyCodes.UP,
      Phaser.Input.Keyboard.KeyCodes.DOWN,
      Phaser.Input.Keyboard.KeyCodes.SPACE,
    ]);
  }

  getKeyDirection() {
    if (this.isTouch) return null;
    const down = (arr) => arr && arr.some(k => k?.isDown);
    if (down(this.keys.left))  return 'left';
    if (down(this.keys.right)) return 'right';
    if (down(this.keys.up))    return 'up';
    if (down(this.keys.down))  return 'down';
    return null;
  }

  setupMouseShoot() {
    this.scene.input.on('pointerdown', (p) => {
      // ignore if it's a touch pointer on hybrid devices
      if (p.pointerType === 'mouse') this.onShoot();
    });
  }

  /* ===== Mobile (swipe + on-screen shoot) ===== */
  setupSwipe() {
    let startX=0, startY=0, startT=0, activeId=null;

    this.scene.input.on('pointerdown', (p) => {
      // Only treat a single active finger as swipe intent
      if (activeId !== null) return;
      startX = p.x; startY = p.y; startT = p.downTime; activeId = p.id;
    });

    this.scene.input.on('pointerup', (p) => {
      if (p.id !== activeId) return;

      const dx = p.x - startX;
      const dy = p.y - startY;
      const dt = p.upTime - startT;

      const dist = Math.hypot(dx, dy);
      if (dist < SWIPE_MIN_DIST || dt > SWIPE_MAX_TIME) { activeId = null; return; }

      if (Math.abs(dx) > Math.abs(dy)) {
        this.onDirection(dx < 0 ? 'left' : 'right');
      } else {
        this.onDirection(dy < 0 ? 'up' : 'down');
      }
      activeId = null;
    });
  }

  setupShootButton() {
    // Make a fixed-position shoot button (bottom-right)
    const pad = 12;
    const btn = this.scene.add.image(
      this.scene.scale.width - 76 - pad,
      this.scene.scale.height - 76 - pad,
      'shootBtn'
    ).setScrollFactor(0)
     .setDepth(10000)
     .setInteractive({ useHandCursor: true });

    btn.on('pointerdown', (p) => {
      p.event?.stopPropagation();
      this.onShoot();
    });

    // Keep it glued to the corner on rotation/resize
    this.scene.scale.on('resize', (sz) => {
      btn.setPosition(sz.width - 76 - pad, sz.height - 76 - pad);
    });
  }
}
