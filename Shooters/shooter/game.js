// Creating variables
var myX = 0, myY = 0, bulletX=0, bulletY=0, AlienX=[0,1,2],AlienY=[0,1,2],skorost=2,jivoti=27,tochki=0, winpointsLeft=19,vragjivot=3;

function update() {
     for(i=0;i<3;i++){
     AlienX[i]=AlienX[i]-skorost;
     if(AlienY[i]>500){
     AlienY[i]=450;
     }
     if(AlienY[i]<0){
     AlienY[i]=50;
     }
     }
    myX = myX+(mouseX-myX)/10;
    myY = myY+(mouseY-myY)/10;
    if(myX>1){
    myX=1;
    }
    if(myY>570){
    myY=570;
    }
    bulletX=bulletX+12;
    if(bulletX>800){
    bulletX=0;
    bulletY=myY;
    }
for(iV=0;iV<3;iV++){
if(AlienX[iV]<0){
AlienY[iV]=Math.random()*600;
AlienX[iV]=1000;
skorost=skorost+1;
jivoti=jivoti-1;
}
if(areColliding(bulletX,bulletY,18,13,AlienX[iV],AlienY[iV],30,30)){
vragjivot=vragjivot-1;
bulletX=0;
bulletY=myY;
}
if(vragjivot<=0){
AlienY[iV]=Math.random()*600;
AlienX[iV]=1000;
skorost=skorost-1;
tochki=tochki+1;
winpointsLeft=winpointsLeft-1;
vragjivot=3;
}
}

           
if(skorost>6){
skorost=6;
}
if(skorost<4){
skorost=4;
}
}


function draw() {
    // This is how you draw a rectangle
     context.fillStyle="#266268";
    context.fillRect(0,0,800,600);
    context.fillStyle="yellow";
    context.fillRect(myX,myY,30,30);
    context.fillStyle="black";
    context.fillRect(bulletX,bulletY,18,13);
    context.fillStyle="orange";
    context.fillRect(AlienX[0],AlienY[0],30,30);
    context.fillRect(AlienX[1],AlienY[1],30,30);
    context.fillRect(AlienX[2],AlienY[2],30,30);
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
context.font='100px Snap ITC';
context.fillText("YOU DIED!",130,300);
context.font='30px Snap ITC';
context.fillText("Try again(by clicking refresh)!",130,400);
bulletY=1000;
}
if(tochki>=19){
context.fillStyle="#266268";
context.fillRect(0,0,800,600);
context.fillStyle="yellow";
context.font='100px Ravie';
context.fillText("YOU WON!",130,300);
AlienX[0]=AlienX[0]+200;
AlienX[1]=AlienX[1]+200;
AlienX[2]=AlienX[2]+200;
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
