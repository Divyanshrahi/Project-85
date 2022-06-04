canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');

greencar_width = 75;
greencar_heigth = 100;

greencar_x = 5;
greencar_y = 225;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";


function add() {
	background_imageTag = new Image();
	background_image.onload = uploadBackground;
	background_image.src = background_image;

	greencar_imageTag = new Image();
	greencar_image.onload = uploadgreencar;
	greencar_image.src = greencar_image;
}


function uploadBackground() {
	ctx.drawImage(background_imageTag,0,0,canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imageTag , greencar_x , greencar_y , canvas.width , canvas.height);


	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y <= 0){
	   greencar_y -=10;
	   console.log("when up arraw is presed" + greencar_x + "-" + greencar_y);
	   unloadbackground();
	   unloadgreencar();
	}

}

function down()
{
	if(greencar_y <= 500){
		greencar_y +=10;
		console.log("when down arraw is presed" + greencar_x + "-" + greencar_y);
		unloadbackground();
		unloadgreencar();
	 }
}

function left()
{
	if(greencar_y >= 0){
		greencar_y -=10;
		console.log("when left arraw is presed" + greencar_x + "-" + greencar_y);
		unloadbackground();
		unloadgreencar();
	 }
}
	

function right()
{
	if(greencar_y <= 700){
		greencar_y +=10;
		console.log("when right arraw is presed" + greencar_x + "-" + greencar_y);
		unloadbackground();
		unloadgreencar();
	 }
}

	
