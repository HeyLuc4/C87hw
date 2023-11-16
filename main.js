var canvas = new fabric.Canvas('meuCanvas');
blockY=1;
blockX=1;

blockWidth = 350;
blockHeight = 430;

var blockImageObject= "";

function newImage(getImage) {
		fabric.Image.fromURL(getImage, function (Img) {
			blockImageObject = Img;
			blockImageObject.scaleToWidth(blockWidth);
			blockImageObject.scaleToHeight(blockHeight);
			blockImageObject.set({
				top: blockY,
				left: blockX
			});
			canvas.add(blockImageObject);
		});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82')
	{
		newImage('rr1.png')
		console.log("red")
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		newImage('gr.png')
		console.log("green")
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		newImage('yr.png')
		console.log("yellow")
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		newImage('pr.png')
		console.log("pink")
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		newImage('br.png')
		console.log("blue")
	}
	
}

