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
	
	function collisionDetection() {
		if(wahlroosX + wahlroosWidth > coinX && wahlroosX < coinX + coinWidth &&
		wahlroosY + wahlroosHeight > coinY && wahlroosY < coinY + coinHeight) {
			
			score++;
			
			do {
				coinX = Math.floor((Math.random() * canvas.width - coinWidth) + coinWidth);
				coinY = Math.floor((Math.random() * canvas.height - coinHeight) + coinHeight);
			}
			while(wahlroosX + wahlroosWidth > coinX && wahlroosX < coinX + coinWidth &&
			wahlroosY + wahlroosHeight > coinY && wahlroosY < coinY + coinHeight);
		}
	}
	
	function drawWahlroos() {
		ctx.drawImage(my_image, wahlroosX, wahlroosY, wahlroosWidth, wahlroosHeight);
	}
	
	function drawGoldCoin() {
		ctx.beginPath();
		ctx.rect(coinX, coinY, coinWidth, coinHeight);
		ctx.fillStyle = "#FFFF00"
		ctx.fill();
		ctx.closePath();
	}
	
	function drawScore() {
		ctx.fillStyle = "#FF0000";
		ctx.fillText("Score: " + score, scoreX, scoreY);
	}
	
	function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		drawGoldCoin();
		drawWahlroos();
		drawScore();
		collisionDetection();
		
		if(rightPressed && wahlroosX <= canvas.width - wahlroosWidth) {
			wahlroosX += 7;
		}
		else if(leftPressed && wahlroosX >= 0) {
			wahlroosX -= 7;
		}
		if(downPressed && wahlroosY <= canvas.height - wahlroosHeight) {
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