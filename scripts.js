var game = new Phaser.Game(800, 600, Phaser.AUTO, "dragon-punch", {
	preload: preload, create: create, update: update
});

var movespeed = 5;

var player;

function preload() {
	game.load.image("player","Images/player-robot.png");
	
	game.load.image("background", "Images/background.png");
	
}

function create() {
	game.add.sprite(0, 0, "background" );
	
	player = game.add.sprite(400, 450, "player");
		
}

function update() {
	if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
		player.x = player.x + movespeed;
	}
	
	if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
		player.x = player.x - movespeed;
	}
	
	if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
		player.y = player.y + movespeed;
	}
	
	if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
		player.y = player.y - movespeed;
	}
		
	if (player.y < 450){
		player.y = 450;
	}	
	
	if (player.x < 0){
		player.x = 0;
	}
	
	if (player.x > 780){
		player.x = 780;
	}
	
	if (player.y > 580){
		player.y = 580;
	}
	
}