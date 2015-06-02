var SCREEN_WIDTH = 800;
var SCREEN_HEIGHT = 600;

var PLAYER_SPRITE_WIDTH = 20;
var PLAYER_SPRITE_HEIGHT = 20;

var PLAYER_SCALE = 3;
var PLAYER_WIDTH = (PLAYER_SPRITE_WIDTH - 6) * PLAYER_SCALE;
var PLAYER_HEIGHT = PLAYER_SPRITE_HEIGHT * PLAYER_SCALE; 

var GROUND_POSITION = 470;

var game = new Phaser.Game(SCREEN_WIDTH, SCREEN_HEIGHT, Phaser.AUTO, "dragon-punch", {
	preload: preload, create: create, update: update
});

var movespeed = 2;
var fallspeed = 0;

var walkanim;

var player;

function preload() {
	game.load.spritesheet("player","Images/player-robot.png", PLAYER_SPRITE_WIDTH, PLAYER_SPRITE_HEIGHT, 5);
	
	game.load.image("background", "Images/background.png");
	
}

function create() {
	game.add.sprite(0, 0, "background" );
	
	player = game.add.sprite(SCREEN_WIDTH / 2, GROUND_POSITION, "player");
	
	turnRight();
	
	player.anchor.x = 1 / 2;
	player.anchor.y = 1;
	
	player.animations.add("stand", [0]);
	
	walkanim = player.animations.add("walk", [1, 2, 3, 4]);
	
	walkanim.onComplete.add(stopWalking, this);
	
	player.smoothed = false;
		
}

function turnRight() {
	player.scale.set(PLAYER_SCALE, PLAYER_SCALE);
}

function turnLeft() {
	player.scale.set(-PLAYER_SCALE, PLAYER_SCALE);
}

function stopWalking(sprite, anim) {
	
	player.animations.play("stand", 20, false);
}

function update() {
	if (game.input.keyboard.isDown(Phaser.Keyboard.D)) {
		player.x = player.x + movespeed;
		
		player.animations.play("walk", 20, false);
		
		turnRight();
	}
	
	if (game.input.keyboard.isDown(Phaser.Keyboard.A)) {
		player.x = player.x - movespeed;
		
		player.animations.play("walk", 20, false);
		
		turnLeft();
	}
	
	player.y = player.y + fallspeed;
	
	fallspeed = fallspeed + 16 / 60;
	
	if (player.x < PLAYER_WIDTH / 2) {
		player.x = PLAYER_WIDTH / 2;
	}
	
	if (player.x > SCREEN_WIDTH - PLAYER_WIDTH / 2) {
		player.x = SCREEN_WIDTH - PLAYER_WIDTH / 2;
	}
	
	if (player.y >= GROUND_POSITION) {
		player.y = GROUND_POSITION;
		
		fallspeed = 0;
		
		if (game.input.keyboard.isDown(Phaser.Keyboard.W)) {
			fallspeed = -8;
		}
		
	}
	
}