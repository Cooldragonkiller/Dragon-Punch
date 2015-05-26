var game = new Phaser.Game(800, 600, Phaser.AUTO, "dragon-punch", {
	preload: preload, create: create, update: update
});

var player;

function preload() {
	game.load.image("player","Images/small-fry.png");
}

function create() {
	player = game.add.sprite(400,300,"player");
}

function update() {
	if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
		player.x = player.x + 1;
	}
	
	if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
		player.x = player.x - 1;
	}
	
	if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
		player.y = player.y + 1;
	}
	
	if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
		player.y = player.y - 1;
	}
		
		
}