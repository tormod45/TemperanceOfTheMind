// Load state

// Assets 

var Load = function(game) {};
Load.prototype = {
	preload: function() {
		// preload assets
		game.load.image('meandog', 'assets/img/meandog.png');
		game.load.spritesheet('player','assets/img/player.png',44,64);
		game.load.image('ground01', 'assets/img/ground01.png');
		game.load.image('bound', 'assets/img/bones.png');
		game.load.image('platform01', 'assets/img/platform01.png');
		game.load.image('background01', 'assets/img/background01.png');
		game.load.audio('menusound', 'assets/audio/menusound.mp3');
		game.load.audio('stage1', 'assets/audio/bgmmain.mp3');
	},
	create: function() {
		game.state.start('Title');
	},
};
