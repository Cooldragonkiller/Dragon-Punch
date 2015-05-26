var game = new Phaser.Game(800, 600, Phaser.AUTO, "dragon-punch", {
	preload: preload, create: create
});

function preload() {
	game.load.image("player","Images/small-fry.png");
}

function create() {
	game.add.sprite(400,300,"player");
}