
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class LevelOne extends Phaser.Scene {

	constructor() {
		super("LevelOne");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background1
		const background1 = this.add.image(0, 0, "castlebg2");
		background1.scaleX = 2.22;
		background1.scaleY = 2.24;
		background1.setOrigin(0, 0);

		// tile_9
		const tile_9 = this.physics.add.image(31, 695, "tile_0000");
		tile_9.scaleX = 3;
		tile_9.scaleY = 3;
		tile_9.body.moves = false;
		tile_9.body.allowGravity = false;
		tile_9.body.collideWorldBounds = true;
		tile_9.body.pushable = false;
		tile_9.body.immovable = true;
		tile_9.body.setSize(48, 48, false);

		// tile_10
		const tile_10 = this.physics.add.image(84, 695, "tile_0000");
		tile_10.scaleX = 3;
		tile_10.scaleY = 3;
		tile_10.body.moves = false;
		tile_10.body.allowGravity = false;
		tile_10.body.collideWorldBounds = true;
		tile_10.body.pushable = false;
		tile_10.body.immovable = true;
		tile_10.body.setSize(48, 48, false);

		// tile_11
		const tile_11 = this.physics.add.image(137, 695, "tile_0000");
		tile_11.scaleX = 3;
		tile_11.scaleY = 3;
		tile_11.body.moves = false;
		tile_11.body.allowGravity = false;
		tile_11.body.collideWorldBounds = true;
		tile_11.body.pushable = false;
		tile_11.body.immovable = true;
		tile_11.body.setSize(48, 48, false);

		// tile_12
		const tile_12 = this.physics.add.image(190, 695, "tile_0000");
		tile_12.scaleX = 3;
		tile_12.scaleY = 3;
		tile_12.body.moves = false;
		tile_12.body.allowGravity = false;
		tile_12.body.collideWorldBounds = true;
		tile_12.body.pushable = false;
		tile_12.body.immovable = true;
		tile_12.body.setSize(48, 48, false);

		// tile_13
		const tile_13 = this.physics.add.image(243, 695, "tile_0000");
		tile_13.scaleX = 3;
		tile_13.scaleY = 3;
		tile_13.body.moves = false;
		tile_13.body.allowGravity = false;
		tile_13.body.collideWorldBounds = true;
		tile_13.body.pushable = false;
		tile_13.body.immovable = true;
		tile_13.body.setSize(48, 48, false);

		// tile_14
		const tile_14 = this.physics.add.image(296, 695, "tile_0000");
		tile_14.scaleX = 3;
		tile_14.scaleY = 3;
		tile_14.body.moves = false;
		tile_14.body.allowGravity = false;
		tile_14.body.collideWorldBounds = true;
		tile_14.body.pushable = false;
		tile_14.body.immovable = true;
		tile_14.body.setSize(48, 48, false);

		// tile_15
		const tile_15 = this.physics.add.image(349, 695, "tile_0000");
		tile_15.scaleX = 3;
		tile_15.scaleY = 3;
		tile_15.body.moves = false;
		tile_15.body.allowGravity = false;
		tile_15.body.collideWorldBounds = true;
		tile_15.body.pushable = false;
		tile_15.body.immovable = true;
		tile_15.body.setSize(48, 48, false);

		// tile_16
		const tile_16 = this.physics.add.image(402, 695, "tile_0000");
		tile_16.scaleX = 3;
		tile_16.scaleY = 3;
		tile_16.body.moves = false;
		tile_16.body.allowGravity = false;
		tile_16.body.collideWorldBounds = true;
		tile_16.body.pushable = false;
		tile_16.body.immovable = true;
		tile_16.body.setSize(48, 48, false);

		// tile_17
		const tile_17 = this.physics.add.image(455, 695, "tile_0000");
		tile_17.scaleX = 3;
		tile_17.scaleY = 3;
		tile_17.body.moves = false;
		tile_17.body.allowGravity = false;
		tile_17.body.collideWorldBounds = true;
		tile_17.body.pushable = false;
		tile_17.body.immovable = true;
		tile_17.body.setSize(48, 48, false);

		// tile_18
		const tile_18 = this.physics.add.image(508, 695, "tile_0000");
		tile_18.scaleX = 3;
		tile_18.scaleY = 3;
		tile_18.body.moves = false;
		tile_18.body.allowGravity = false;
		tile_18.body.collideWorldBounds = true;
		tile_18.body.pushable = false;
		tile_18.body.immovable = true;
		tile_18.body.setSize(48, 48, false);

		// tile_19
		const tile_19 = this.physics.add.image(561, 695, "tile_0000");
		tile_19.scaleX = 3;
		tile_19.scaleY = 3;
		tile_19.body.moves = false;
		tile_19.body.allowGravity = false;
		tile_19.body.collideWorldBounds = true;
		tile_19.body.pushable = false;
		tile_19.body.immovable = true;
		tile_19.body.setSize(48, 48, false);

		// tile_20
		const tile_20 = this.physics.add.image(614, 695, "tile_0000");
		tile_20.scaleX = 3;
		tile_20.scaleY = 3;
		tile_20.body.moves = false;
		tile_20.body.allowGravity = false;
		tile_20.body.collideWorldBounds = true;
		tile_20.body.pushable = false;
		tile_20.body.immovable = true;
		tile_20.body.setSize(48, 48, false);

		// tile_21
		const tile_21 = this.physics.add.image(667, 695, "tile_0000");
		tile_21.scaleX = 3;
		tile_21.scaleY = 3;
		tile_21.body.moves = false;
		tile_21.body.allowGravity = false;
		tile_21.body.collideWorldBounds = true;
		tile_21.body.pushable = false;
		tile_21.body.immovable = true;
		tile_21.body.setSize(48, 48, false);

		// tile_22
		const tile_22 = this.physics.add.image(720, 695, "tile_0000");
		tile_22.scaleX = 3;
		tile_22.scaleY = 3;
		tile_22.body.moves = false;
		tile_22.body.allowGravity = false;
		tile_22.body.collideWorldBounds = true;
		tile_22.body.pushable = false;
		tile_22.body.immovable = true;
		tile_22.body.setSize(48, 48, false);

		// tile_23
		const tile_23 = this.physics.add.image(773, 695, "tile_0000");
		tile_23.scaleX = 3;
		tile_23.scaleY = 3;
		tile_23.body.moves = false;
		tile_23.body.allowGravity = false;
		tile_23.body.collideWorldBounds = true;
		tile_23.body.pushable = false;
		tile_23.body.immovable = true;
		tile_23.body.setSize(48, 48, false);

		// tile_24
		const tile_24 = this.physics.add.image(826, 695, "tile_0000");
		tile_24.scaleX = 3;
		tile_24.scaleY = 3;
		tile_24.body.moves = false;
		tile_24.body.allowGravity = false;
		tile_24.body.collideWorldBounds = true;
		tile_24.body.pushable = false;
		tile_24.body.immovable = true;
		tile_24.body.setSize(48, 48, false);

		// tile_25
		const tile_25 = this.physics.add.image(879, 695, "tile_0000");
		tile_25.scaleX = 3;
		tile_25.scaleY = 3;
		tile_25.body.moves = false;
		tile_25.body.allowGravity = false;
		tile_25.body.collideWorldBounds = true;
		tile_25.body.pushable = false;
		tile_25.body.immovable = true;
		tile_25.body.setSize(48, 48, false);

		// tile_26
		const tile_26 = this.physics.add.image(932, 695, "tile_0000");
		tile_26.scaleX = 3;
		tile_26.scaleY = 3;
		tile_26.body.moves = false;
		tile_26.body.allowGravity = false;
		tile_26.body.collideWorldBounds = true;
		tile_26.body.pushable = false;
		tile_26.body.immovable = true;
		tile_26.body.setSize(48, 48, false);

		// tile_27
		const tile_27 = this.physics.add.image(985, 695, "tile_0000");
		tile_27.scaleX = 3;
		tile_27.scaleY = 3;
		tile_27.body.moves = false;
		tile_27.body.allowGravity = false;
		tile_27.body.collideWorldBounds = true;
		tile_27.body.pushable = false;
		tile_27.body.immovable = true;
		tile_27.body.setSize(48, 48, false);

		// tile_28
		const tile_28 = this.physics.add.image(1038, 695, "tile_0000");
		tile_28.scaleX = 3;
		tile_28.scaleY = 3;
		tile_28.body.moves = false;
		tile_28.body.allowGravity = false;
		tile_28.body.collideWorldBounds = true;
		tile_28.body.pushable = false;
		tile_28.body.immovable = true;
		tile_28.body.setSize(48, 48, false);

		// tile_29
		const tile_29 = this.physics.add.image(1091, 695, "tile_0000");
		tile_29.scaleX = 3;
		tile_29.scaleY = 3;
		tile_29.body.moves = false;
		tile_29.body.allowGravity = false;
		tile_29.body.collideWorldBounds = true;
		tile_29.body.pushable = false;
		tile_29.body.immovable = true;
		tile_29.body.setSize(48, 48, false);

		// tile_30
		const tile_30 = this.physics.add.image(1144, 695, "tile_0000");
		tile_30.scaleX = 3;
		tile_30.scaleY = 3;
		tile_30.body.moves = false;
		tile_30.body.allowGravity = false;
		tile_30.body.collideWorldBounds = true;
		tile_30.body.pushable = false;
		tile_30.body.immovable = true;
		tile_30.body.setSize(48, 48, false);

		// tile_31
		const tile_31 = this.physics.add.image(1197, 695, "tile_0000");
		tile_31.scaleX = 3;
		tile_31.scaleY = 3;
		tile_31.body.moves = false;
		tile_31.body.allowGravity = false;
		tile_31.body.collideWorldBounds = true;
		tile_31.body.pushable = false;
		tile_31.body.immovable = true;
		tile_31.body.setSize(48, 48, false);

		// tile_32
		const tile_32 = this.physics.add.image(1250, 695, "tile_0000");
		tile_32.scaleX = 3;
		tile_32.scaleY = 3;
		tile_32.body.moves = false;
		tile_32.body.allowGravity = false;
		tile_32.body.collideWorldBounds = true;
		tile_32.body.pushable = false;
		tile_32.body.immovable = true;
		tile_32.body.setSize(48, 48, false);

		// player
		const player = this.physics.add.sprite(582, 672, "idlefront1");
		player.scaleX = 2;
		player.scaleY = 2;
		player.setOrigin(0.5, 1);
		player.body.collideWorldBounds = true;
		player.body.setOffset(10, 0);
		player.body.setSize(28, 40, false);

		// key
		const key = this.add.polygon(73, 647, "35 100 0 50 70 0 140 50 105 100");
		key.scaleX = 0.4;
		key.scaleY = 0.4;
		key.isFilled = true;
		key.fillColor = 14400768;

		// door
		const door = this.add.rectangle(1206, 599, 128, 128);
		door.scaleX = 0.5;
		door.isFilled = true;
		door.fillColor = 6564352;

		// lists
		const ground = [tile_32, tile_31, tile_30, tile_29, tile_28, tile_27, tile_26, tile_25, tile_24, tile_23, tile_22, tile_21, tile_20, tile_19, tile_18, tile_17, tile_16, tile_15, tile_14, tile_13, tile_12, tile_11, tile_10, tile_9];

		// collider
		this.physics.add.collider(player, ground);

		this.player = player;
		this.key = key;
		this.door = door;
		this.ground = ground;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	player;
	/** @type {Phaser.GameObjects.Polygon} */
	key;
	/** @type {Phaser.GameObjects.Rectangle} */
	door;
	/** @type {Phaser.Physics.Arcade.Image[]} */
	ground;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		const player = this.player;

		//-- Game State --
		this.gameOver = false;
		this.levelComplete = false;
		this.hasKey = false;

		//-- Makes all ground tiles static platforms
		this.platforms = this.physics.add.staticGroup();

		if (this.ground && Array.isArray(this.ground)) {
			this.ground.forEach(tile => {
				if (!tile) return;
				this.platforms.add(tile);
			});
		}

		//-- Physics for the key and door ---
		const key = this.key;
		const door = this.door;

		if (key) {
			this.physics.add.existing(key);
			key.body.setAllowGravity(false);
			key.body.setImmovable(true);
		}

		if (door) {
			this.physics.add.existing(door, true);
		}

		//--- Score HUD ---
		this.score = 0;
		this.scoreText = this.add.text(16, 16, "Score: 0", {
			fontSize: "24px",
			color: "#ffffff"
		});
		this.scoreText.setScrollFactor(0);

		//--- Bullet Texture ---
		if (!this.textures.exists("bulletTex")) {
			const g = this.add.graphics();
			g.fillStyle(0xffff00, 1); //Yellow bullets
			g.fillRect(0, 0, 10, 4);
			g.generateTexture("bulletTex", 10, 4);
			g.destroy();
		}

		//--- Bullet Group ---
		this.bullets = this.physics.add.group({
			defaultKey: "bulletTex",
			maxSize: 50,
			allowGravity: false
		});

		//--- World and Player Physics ---
		this.physics.world.gravity.y = 600;
		player.body.setCollideWorldBounds(true);
		player.body.setBounce(0.1, 0.1);

		//--- Player vs Ground Collider ---
		this.physics.add.collider(this.player, this.platforms);

		//--- Bullet vs ground ---
		this.physics.add.collider(
			this.platforms,
			this.bullets,
			this.onBulletHitPlatform,
			null,
			this
		);

		//--- Player picks up key ---
		this.physics.add.overlap(
			this.player,
			this.key,
			this.onPlayerPickupKey,
			null,
			this
		);

		//--- Player reaches door ----
		this.physics.add.overlap(
			this.player,
			this.door,
			this.onPlayerReachDoor,
			null,
			this
		);

		//--- Input for player movement ---
		this.cursor = this.input.keyboard.createCursorKeys();
		this.wasd = this.input.keyboard.addKeys({
			up: Phaser.Input.Keyboard.KeyCodes.W,
			left: Phaser.Input.Keyboard.KeyCodes.A,
			down: Phaser.Input.Keyboard.KeyCodes.S,
			right: Phaser.Input.Keyboard.KeyCodes.D
		});

		this.shootKey = this.input.keyboard.addKey(
			Phaser.Input.Keyboard.KeyCodes.SPACE
		);

		//--- Player Animations ---
		this.anims.create({
			key: "player_idle_front",
			frames: [
				{ key: "idlefront1" },
				{ key: "idlefront2" },
				{ key: "idlefront3" },
				{ key: "idlefront4" }
			],
			frameRate: 1,
			repeat: -1
		});

		this.anims.create({
			key: "player_walk_right",
			frames: [
				{ key: "walkingright1" },
				{ key: "walkingright2" },
				{ key: "walkingright3" },
				{ key: "walkingright4" }
			],
			frameRate: 8,
			repeat: -1
		});

		player.play("player_idle_front");
	}

	update() {
		// if player is dead or level is completed stop.
		if (this.gameOver || this.levelComplete) {
			return;
		}

		const player = this.player;
		const speed = 200;
		const jumpSpeed = -450

		//--- This will combine the use of arrow keys + WASD
		const leftPressed = this.cursor.left.isDown || this.wasd.left.isDown;
		const rightPressed = this.cursor.right.isDown || this.wasd.right.isDown;
		const upPressed = this.cursor.up.isDown || this.wasd.up.isDown;

		//--- Shoot ---
		if (Phaser.Input.Keyboard.JustDown(this.shootKey)) {
			this.shootBullet();
		}

		//--- Animation + Horizontal movement ---
		if (leftPressed) {
			player.body.setVelocityX(-speed);
			player.setFlipX(true);
			player.play("player_walk_right", true);
		} else if (rightPressed) {
			player.body.setVelocityX(speed);
			player.setFlipX(false);
			player.play("player_walk_right", true);
		} else {
			player.body.setVelocityX(0);
			player.play("player_idle_front", true);
		}

		//--- Jump ---
		if (upPressed && player.body.blocked.down) {
			player.body.setVelocityY(jumpSpeed);
		}
	}

	//--- Shooting Logic ---
	shootBullet() {
		const player = this.player;
		const BULLET_SPEED = 400;

		const dir = player.flipX ? -1 : 1;
		const offsetX = 20 * dir;
		const bulletY = player.y - player.displayHeight * 0.5;

		const bullet = this.bullets.get(player.x + offsetX, bulletY);
		if (!bullet) return;

		bullet.setActive(true);
		bullet.setVisible(true);

		bullet.body.enable = true;
		bullet.body.allowGravity = false;
		bullet.body.setVelocityX(BULLET_SPEED * dir);
	}

	//--- Bullets hit ground logic ----
	onBulletHitPlatform(platform, bullet) {
		if (bullet && bullet.destroy) {
			bullet.destroy();
		}
	}

	//--- Player Picks Up Key Logic ----
	onPlayerPickupKey(player, key) {
		if (this.hasKey) return;

		this.hasKey = true;

		if (key && key.destroy) {
			key.destroy();
		}

		const { width, height } = this.scale;

		const text = this.add.text(
			width / 2,
			height * 0.15,
			"Key + 1",
			{
				fontSize: "28px",
				color: "#ffff00"
			}
		)
		.setOrigin(0.5)
		.setDepth(999);

		this.time.delayedCall(1000, () => {
			if (text && text.destroy) {
				text.destroy();
			}
		});
	}

	//--- Player reaches door logic ---
	onPlayerReachDoor(player, door) {
		//this is only triggered if the player has the key and the level is not already done.
		if (!this.hasKey || this.levelComplete || this.gameOver) {
			return;
		}

		this.levelComplete = true;

		//freezes gameplay
		this.physics.pause();
		if (player.anims) {
			player.anims.stop();
		}

		//shows Level Complete text
		const { width, height } = this.scale;
		this.add.text(width / 2, height / 2, "LEVEL 1 COMPLETE", {
			fontSize: "48px",
			color: "#00ff00"
		}).setOrigin(0.5);

		//after a short delay this starts the second level 
		this.time.delayedCall(1500, () => {
			this.scene.start("Level");
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
