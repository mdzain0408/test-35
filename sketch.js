var database,dog, happyDog, sprite,sprite2, foodS, foodStock;

function preload()
{
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
}


function draw() {  
  background("green");
  getFood();
  textSize(15);
  fill("white")
  text("Press up arrow to feed!!",312.5,25)
  textSize(30)
  text("remaining food: "+foodS ,290,100)

  
  
  sprite = createSprite(400,350);
  sprite.addImage(dog);
  
  sprite.scale = 0.25;


 
    drawSprites();
    
}



function getFood(){

var refer = database.ref('food')
refer.on("value",function(data){

foodS = data.val();

})


}


function writeCount(x){

if(x === 0){

x = 0

}else{

x = x-1;

}

database.ref('/').update({food:x

}



)

}

function keyPressed(){
  if(keyWentDown(DOWN_ARROW)){

    
    writeCount(foodS);
    
    sprite.addImage(happyDog);
    
    
    }

    if (keyCode === 32){

      writeCount(11);

    }


}



