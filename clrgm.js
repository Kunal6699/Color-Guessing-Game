var nos;
nos=6;
var colors=generateRandomColors(nos);

var squares = document.querySelectorAll(".square");
var pickedColor = colors[Math.floor(Math.random()*colors.length)];
var bra = document.querySelector("#bra");
var msg= document.querySelector("#babu");
/*var nu=document.getElementByClassName("lol")
nu.backgroundColor = pickedColor;*/
var h1=document.querySelector("h1");
var resetbt=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
easy.addEventListener("click",function(){
 
  hard.classList.remove("selected");
   easy.classList.add("selected");
   nos=3;
   colors=generateRandomColors(nos);
    pickedColor = colors[Math.floor(Math.random()*colors.length)];
    bra.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
    	if(colors[i])
    		squares[i].style.backgroundColor=colors[i];
    	else 
    		squares[i].style.display="none";
    }     

});
hard.addEventListener("click",function()
{
		hard.classList.add("selected");
	easy.classList.remove("selected");

	nos=6;
	colors=generateRandomColors(nos);
    pickedColor = colors[Math.floor(Math.random()*colors.length)];
    bra.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
    	if(colors[i])
    		squares[i].style.backgroundColor=colors[i];
    		squares[i].style.display="block";
    }     

	
}
  
	);


    resetbt.addEventListener("click",function()
    {
    	colors=generateRandomColors(nos);
    	// squares = document.querySelectorAll(".square");
    	 pickedColor = colors[Math.floor(Math.random()*nos)];
        bra.textContent = pickedColor;  
        for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];   
	 } 
	 h1.style.backgroundColor="cyan";
	   
	
	});
         
         bra.textContent = pickedColor;  

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clicked = this.style.backgroundColor;
		//compare color to pickedColor
		if(clicked === pickedColor) {
			//alert("Correct!");
			for(i=0;i<squares.length;i++)
				squares[i].style.backgroundColor = pickedColor;
                   msg.textContent="Correct";
                    h1.style.backgroundColor=pickedColor;
		} else {
			this.style.backgroundColor="cyan";
             msg.textContent="Try Again";
		}
	});
}
  function generateRandomColors(num)
  {
  	var arr=[];
  	for(var i=0;i<num;i++)
  	{
  		var r=Math.floor(Math.random()*256);
  		var g=Math.floor(Math.random()*256);
  		var b=Math.floor(Math.random()*256);
  		arr.push("rgb(" + r + ", " + g + ", " + b + ")");
  	}
  	return arr;
  }
