score=0;
cross=true;


gameaudio=new Audio('music/game.mp3');

gameoveraudio= new Audio('music/gameover.mp3');

setTimeout(() =>{
  	gameaudio.play();

},3000);


document.onkeydown = function(e){

	console.log("keycode is : ",e.keyCode)

	if(e.keyCode==38)
	{

		car=document.querySelector('.car');
		car.classList.add('animatecar');
		setTimeout(()=>{
			car.classList.remove('animatecar');

		},700);
	}
	if(e.keyCode==39)
	{
		cx=parseInt(window.getComputedStyle(car,null).getPropertyValue('left'));
		car.style.left= cx + 112+ "px";
	}
	if(e.keyCode==37)
	{
		cx=parseInt(window.getComputedStyle(car,null).getPropertyValue('left'));
		car.style.left= cx - 112+ "px";
	}
}

setInterval(() => {
 	car=document.querySelector('.car');
 	kid=document.querySelector('.kid');
 	gameover=document.querySelector('gameover');

 	cx=parseInt(window.getComputedStyle(car,null).getPropertyValue('left'));
 	cy=parseInt(window.getComputedStyle(car,null).getPropertyValue('top'));

 	kx=parseInt(window.getComputedStyle(kid,null).getPropertyValue('left'));
 	ky=parseInt(window.getComputedStyle(kid,null).getPropertyValue('top'));
 	
 	offsetx=Math.abs(cx-kx);
 	offsety=Math.abs(cy-ky);

 	//console.log("x : ",offsetx);
 	//console.log("y  : ",offsety);

 	if(offsetx<=90 && offsety<50)
 	{
 		kid.classList.remove('animatekid');
 		gover.innerHTML="GAME OVER";
 		gameoveraudio.play();
 		setTimeout(() =>{
 			gameoveraudio.pause();
 			gameaudio.pause();
 		},1000);
 	}
 	else 
 	if(offsetx<=145 && cross)
 	{
 		score += 1;
 		updateScore(score);
 		cross=false;
 		setTimeout(() =>{
 			cross=true;

 		},1000);
 		setTimeout(() =>{
 			anidur=parseFloat(window.getComputedStyle(kid,null).getPropertyValue('animation-duration'));
 		newdur= anidur - 0.1;
 		if (newdur<=4.0)
 		{
 			kid.style.animationDuration =4 + 's';
 			console.log(newdur)

 		
 		}
 		else
 		{ 	kid.style.animationDuration = newdur + 's';
 			console.log(newdur)

 		kid.style.animationDuration = newdur + 's';
 		}
 		},500);
 		
 	}


},100);

function updateScore(score)
{
scorebox.innerHTML = " Score : " + score;

}