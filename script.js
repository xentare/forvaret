window.addEventListener('load', game, false);

function game() {
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
		
	var my_image = new Image();
	my_image.src = "wahlroos.png";

	var wahloosX = 0;
	var wahloosY = 0;
	var width = 150;
	var height = 175;
	
	var rightPressed = false;
	var leftPressed = false;
	var downPressed = false;
	var upPressed = false;

	function drawWahlroos() {
		ctx.drawImage(my_image, wahloosX, wahloosY, width, height);
	}
	
	function drawGoldCoin() {
		ctx.beginPath();
		ctx.rect(500, 100, 30, 30);
		ctx.fillStyle = "#FFFF00"
		ctx.fill();
		ctx.closePath();
	}
	
	function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		drawWahlroos();
		drawGoldCoin();
		
		if(rightPressed && wahloosX <= canvas.width - width) {
			wahloosX += 7;
		}
		else if(leftPressed && wahloosX >= 0) {
			wahloosX -= 7;
		}
		if(downPressed && wahloosY <= canvas.height - height) {
			wahloosY += 7;
		}
		else if(upPressed && wahloosY >= 0) {
			wahloosY -= 7;
		}
		
		requestAnimationFrame(draw);
		//setInterval(draw(), 10);
	}

	function keyDownHandler(e) {
		if(e.keyCode == 39) {
			rightPressed = true;
		}
		if(e.keyCode == 37) {
			leftPressed = true;
		}
		if(e.keyCode == 40) {
			downPressed = true;
		}
		if(e.keyCode == 38) {
			upPressed = true;
		}
	}
	
	function keyUpHandler(e) {
		if(e.keyCode == 39) {
			rightPressed = false;
		}
		if(e.keyCode == 37) {
			leftPressed = false;
		}
		if(e.keyCode == 40) {
			downPressed = false;
		}
		if(e.keyCode == 38) {
			upPressed = false;
		}
	}
	
	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);
	
	draw();
}