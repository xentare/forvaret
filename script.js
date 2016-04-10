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

	function drawWahlroos() {
	  ctx.drawImage(my_image, wahlroosX, wahlroosY, wahlroosWidth, wahlroosHeight);
	}

	function draw() {
	  ctx.clearRect(0, 0, canvas.width, canvas.height);

	  drawWahlroos();

	  if(rightPressed && wahlroosX <= levelWidth - wahlroosWidth) {
	    wahlroosX += 7;
	  }
	  else if(leftPressed && wahlroosX >= 0) {
	    wahlroosX -= 7;
	  }
	  if(downPressed && wahlroosY <= levelHeight - wahlroosHeight) {
	    wahlroosY += 7;
	  }
	  else if(upPressed && wahlroosY >= 0) {
	    wahlroosY -= 7;
	  }

	  requestAnimationFrame(draw);
	  //setInterval(draw(), 10);
	}

	function keyDownHandler(e) {
	  // right arrow
	  if(e.keyCode == 39) {
	    rightPressed = true;
	  }
	  // left arrow
	  if(e.keyCode == 37) {
	    leftPressed = true;
	  }
	  // down arrow
	  if(e.keyCode == 40) {
	    downPressed = true;
	  }
	  // up arrow
	  if(e.keyCode == 38) {
	    upPressed = true;
	  }
	}

	function keyUpHandler(e) {
	  // right arrow
	  if(e.keyCode == 39) {
	    rightPressed = false;
	  }
	  // up arrow
	  if(e.keyCode == 37) {
	    leftPressed = false;
	  }
	  // down arrow
	  if(e.keyCode == 40) {
	    downPressed = false;
	  }
	  // up arrow
	  if(e.keyCode == 38) {
	    upPressed = false;
	  }
	}
	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);

	start();
	draw();
	}
