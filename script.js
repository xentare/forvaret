window.addEventListener('load', game, false);

function game() {
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
		
	var my_image = new Image();
	my_image.src = "wahlroos.png";

	var x = 0;
	var y = 0;
	var width = 250;
	var height = 175;
	
	var rightPressed = false;
	var leftPressed = false;
	var downPressed = false;
	var upPressed = false;

	function drawWahlroos() {
		ctx.drawImage(my_image, x, y, width, height);
	}
	
	function drawGold() {
		ctx.beginPath();
		ctx.rect(500, 100, 30, 30);
		ctx.fillStyle = "#FFFF00"
		ctx.fill();
		ctx.closePath();
	}
	
	function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		drawWahlroos();
		drawGold();
		
		if(rightPressed && x <= canvas.width - width) {
			x += 7;
		}
		else if(leftPressed && x >= 0) {
			x -= 7;
		}
		if(downPressed && y <= canvas.height - height) {
			y += 7;
		}
		else if(upPressed && y >= 0) {
			y -= 7;
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