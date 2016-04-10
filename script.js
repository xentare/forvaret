window.addEventListener('load', game, false);

function game() {
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.font = "30px Arial";

	var my_image = new Image();
	my_image.src = "wahlroos.png";

	var wahlroosX = 0;
	var wahlroosY = 0;
	var wahlroosWidth = 150;
	var wahlroosHeight = 175;
	var score = 0;
	var scoreX = 10;
	var scoreY = canvas.height - 20;

	var hudWidth = canvas.width;
	var hudHeight = 60;
	var hudX = 0;
	var hudY = canvas.height - hudHeight;

	var levelWidth = canvas.width;
	var levelHeight = canvas.height - hudHeight;

	var coinX = 500;
	var coinY = 200;
	var coinWidth = 30;
	var coinHeight = 50;

	var rightPressed = false;
	var leftPressed = false;
	var downPressed = false;
	var upPressed = false;

	function start() {

	}

	
}
