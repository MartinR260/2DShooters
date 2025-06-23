// Creating variables
var myX = 0, myY = 0, bulletX=0, bulletY=0, AlienX=1000,AlienY=Math.random()*600,Alien2X=1200,Alien3X=1300,Alien3Y=Math.random()*300,Alien4X=1400,Alien4Y=Math.random()*200;
var Alien2Y=Math.random()*400,skorost=4,jivoti=8,tochki=0, winpointsLeft=30;

function update() {
     Alien4X=Alien4X-skorost;
     Alien3X=Alien3X-skorost;
     Alien2X=Alien2X-skorost;
     AlienX=AlienX-skorost;
    myX = myX+(mouseX-myX)/10;
    myY = myY+(mouseY-myY)/10;
    if(myX>1){
    myX=1;
    }
    if(myY>570){
    myY=570;
    }
    bulletX=bulletX+14;
    if(bulletX>800){
    bulletX=0;
    bulletY=myY;
    }
if(AlienX<0){
AlienY=Math.random()*600;
AlienX=1000;
skorost=skorost+1;
jivoti=jivoti-1;
}
if(areColliding(bulletX,bulletY,18,13,AlienX,AlienY,30,30)){
AlienY=Math.random()*600;
AlienX=1000;
skorost=skorost-1;
tochki=tochki+1;
winpointsLeft=winpointsLeft-1;
}
           if(Alien2X<0){
           Alien2Y=Math.random()*400;
           Alien2X=1200;
           skorost=skorost+1;
           jivoti=jivoti-1;
           }
           if(areColliding(bulletX,bulletY,18,13,Alien2X,Alien2Y,30,30)){
           Alien2Y=Math.random()*400;
           Alien2X=1200;
           skorost=skorost-1; 
           tochki=tochki+1;
           winpointsLeft=winpointsLeft-1; 
           }
if(Alien3X<0){
Alien3Y=Math.random()*300;
Alien3X=1200;
skorost=skorost+1;
jivoti=jivoti-1;
}
if(areColliding(bulletX,bulletY,18,13,Alien3X,Alien3Y,30,30)){
Alien3Y=Math.random()*300;
Alien3X=1200;
skorost=skorost-1; 
tochki=tochki+1;
winpointsLeft=winpointsLeft-1;
}
     if(Alien4X<0){
    Alien4Y=Math.random()*200;
   Alien4X=1200;
  skorost=skorost+1;
 jivoti=jivoti-1;
}
if(areColliding(bulletX,bulletY,18,13,Alien4X,Alien4Y,30,30)){
Alien4Y=Math.random()*200;
Alien4X=1200;
skorost=skorost-1; 
tochki=tochki+1;
winpointsLeft=winpointsLeft-1;
}
if(skorost>5){
skorost=5;
}
if(skorost<3){
skorost=3;
}
}


function draw() {
    // This is how you draw a rectangle
     context.fillStyle="black";
    context.fillRect(0,0,800,600);
    context.fillStyle="yellow";
    context.fillRect(myX,myY,30,30);
    context.fillStyle="grey";
    context.fillRect(bulletX,bulletY,18,13);
    context.fillStyle="red";
    context.fillRect(AlienX,AlienY,30,30);
    context.fillRect(Alien2X,Alien2Y,30,30);
    context.fillRect(Alien3X,Alien3Y,30,30);
    context.fillRect(Alien4X,Alien4Y,30,30);
    context.fillStyle="brown";
    context.font='20px Title';
    context.fillText("Lives:",86,540);
    context.fillText(jivoti,136,540);
    context.fillText("Points:",626,540);
    context.fillText(tochki,686,540);
context.fillStyle="yellow";
context.font='40px Title';
context.fillText("points to win:",100,200);
context.fillText(winpointsLeft,320,200);
    if(jivoti<1){
context.fillStyle="black";
context.fillRect(0,0,800,600);
context.fillStyle="red";
context.font='100px Title';
context.fillText("YOU DIED!",130,300);
context.font='30px Title';
context.fillText("Try again(by clicking refresh)!",130,400);
bulletY=1000;
}
if(tochki==30){
context.fillStyle="#266268";
context.fillRect(0,0,800,600);
context.fillStyle="yellow";
context.font='100px Title';
context.fillText("YOU WON!",130,300);
bulletY=1000;
}
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
