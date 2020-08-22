//Create variables here
var dog, happyDog;
var database;
var foodS;
var foodStock;

function preload()
{ 
  dog1= loadImage("images/Dog.png")
  dogHappy= loadImage("images/happydog.png")
  //load images here
  
}

function setup() {
	createCanvas(500, 500);
  dog= createSprite(250,250,5,5)
  dog.scale= 0.2
  dog.addImage("dog",dog1)

  database= firebase.database();
  foodStock= database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(46,139,87)

  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage("happydog",dogHappy);
    console.log("happydog")
    //foodS= foodS - 1
  }

  drawSprites();

  textSize(20)
  fill("white")
  stroke(4)
  text("Food eaten by dog- " + foodS, 50, 50)
  //add styles here

}

function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {
  if (x<=0) {
    x = 0;
  }
  else {
    x= x-1
  }

database.ref('/').update({
  Food:x
})

}



