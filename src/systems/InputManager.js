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
      this.setupDesktopPointerShoot();
    }
  }

  /* ===================== DESKTOP ===================== */
  setupKeyboard() {
    const k = this.scene.input.keyboard;
    this.cursors = k.createCursorKeys();
    const keys = k.addKeys('W,A,S,D,SPACE,CTRL');

    this.keys = {
      up:    [this.cursors.up,    keys.W],
      down:  [this.cursors.down,  keys.S],
      left:  [this.cursors.left,  keys.A],
      right: [this.cursors.right, keys.D],
    };

    // Shoot with Space or Ctrl
    keys.SPACE.on('down', () => this.onShoot());
    keys.CTRL.on('down',  () => this.onShoot());

    // Prevent browser from stealing arrows/space
    this.scene.input.keyboard?.addCapture([
      Phaser.Input.Keyboard.KeyCodes.LEFT,
      Phaser.Input.Keyboard.KeyCodes.RIGHT,
      Phaser.Input.Keyboard.KeyCodes.UP,
      Phaser.Input.Keyboard.KeyCodes.DOWN,
      Phaser.Input.Keyboard.KeyCodes.SPACE,
      Phaser.Input.Keyboard.KeyCodes.CONTROL,
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

  // Left click anywhere = shoot (desktop only)
  setupDesktopPointerShoot() {
    this.scene.input.on('pointerdown', (p) => {
      // On some systems pointerType may be "", so just gate by !isTouch
      if (!this.isTouch) this.onShoot();
    });
  }

  /* ===================== MOBILE ===================== */
  setupSwipe() {
    let startX=0, startY=0, startT=0, activeId=null, fired=false;

    // When the user begins a swipe
    this.scene.input.on('pointerdown', (p) => {
      // only the first touch counts as a swipe
      if (activeId !== null) return;
      activeId = p.id;
      startX = p.x;
      startY = p.y;
      startT = p.downTime;
      fired = false;
    });

    // Track movement — trigger as soon as the threshold is passed (no need to wait for pointerup)
    this.scene.input.on('pointermove', (p) => {
      if (p.id !== activeId || fired) return;
      const dx = p.x - startX;
      const dy = p.y - startY;
      const dt = p.moveTime - startT;

      if (dt > SWIPE_MAX_TIME) return;                // too slow → ignore
      if (Math.hypot(dx, dy) < SWIPE_MIN_DIST) return;

      if (Math.abs(dx) > Math.abs(dy)) {
        this.onDirection(dx < 0 ? 'left' : 'right');
      } else {
        this.onDirection(dy < 0 ? 'up' : 'down');
      }
      fired = true;                                   // one direction per swipe
    });

    // Clean up the swipe state
    this.scene.input.on('pointerup', (p) => {
      if (p.id === activeId) { activeId = null; }
    });
    this.scene.input.on('pointerupoutside', (p) => {
      if (p.id === activeId) { activeId = null; }
    });
  }

  setupShootButton() {
    // Fixed-position shoot button (bottom-right)
    const pad = 12;
    const size = 76;
    const btn = this.scene.add.image(
      this.scene.scale.width - size - pad,
      this.scene.scale.height - size - pad,
      'shootBtn'
    ).setScrollFactor(0)
     .setDepth(10000)
     .setInteractive({ useHandCursor: true });

    // Tap = shoot. Stop propagation so it doesn't register as a swipe.
    btn.on('pointerdown', (p) => {
      p.event?.stopPropagation();
      this.onShoot();
    });

    // Keep glued to corner on rotation/resize
    this.scene.scale.on('resize', (sz) => {
      btn.setPosition(sz.width - size - pad, sz.height - size - pad);
    });
  }
}

