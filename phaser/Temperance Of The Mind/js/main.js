// NAMES
// Temperance Of The Mind

// be STRICT
"use strict";

// Define globals

var game;
var player;
var platforms;
var playerHealth;
var healthText;
var enemy;
var enemyHealth;
var enemySpeed; 
window.onload = function() {

	// initialize game
	game = new Phaser.Game(1100,700,Phaser.AUTO);

	// define states
	game.state.add('Load',Load);
	game.state.add('Title',Title);
	game.state.add('Stage1',Stage1);
	game.state.add('GameOver',GameOver);
	game.state.start('Load');

}
