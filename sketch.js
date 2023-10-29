
var splashimg,play,next,bgimg,lemonimg,mangoimg,appleimg,orangeimg,boxesimg,box,watermelonimg,x,level1bg
var gameState="wait"
var ground

function preload(){
splashimg=loadImage("lemon.gif")
appleimg=loadImage("apple.gif")
orangeimg=loadImage("orange1.gif")
watermelonimg=loadImage("watermelon.gif")
level1bg=loadImage("background.png")



}

function setup(){
    createCanvas(windowWidth, windowHeight)
    play=createButton("PLAY")
    play.position(200,height-200)
    play.size(100,50)



    ground = createSprite(0,0);
    ground.addImage("ground",level1bg);
    ground.x = ground.width /2;
    ground.visible=false
    ground.scale=3.5


}

function  draw(){
    if(gameState=="wait"){
        background(splashimg)

    
}play.mousePressed(()=>{
    gameState="about"
})


if(gameState=="about"){
popabout()
play.hide()
}


if(gameState=="level1"){
    background(level1bg)
    ground.visible=true

}


drawSprites()
}

function popabout(){
    swal({
       title: "This is the Battle of Fruits!!",
       text:"To win!! Lemon has to save itself from attacks from different fruits!!",
       imageUrl:"orange1.gif",
       imageSize:"200x200",
       confirmButtonText:"START ", 
        confirmButtonColor:"green"
    
    },
    function(){
       gameState="level1"
    })
    
    
    }
