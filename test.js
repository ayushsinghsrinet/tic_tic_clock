var h,m,s
var hran,minan,secan
function preload(){
//a=loadImage("b.jpeg")
}

function setup(){
createCanvas(1350,650)

angleMode(DEGREES)
}

function draw(){
    background(0);


    // text(welcom,100,100)
//text("Desingn And Devloped By Ayush Singh",600,500)
    
    textFont("Times New Roman");
    //textFont("Dico Mono")
    textSize(55);
    noStroke();
    fill("white");
    text("TICK-TIC CLOCK", 600,190);


textSize(25);
noStroke();
fill(0,0,255);
text("BLUE Stands For Hour Hand", 600,290);

    textSize(25);
    noStroke();
    fill(255,0,0);
    text("RED Stands for Seconds Hand", 600,370);

textSize(25);
noStroke();
fill(0,255,0);
text("GREEN Stands For Minute Hand", 600,330);

    textSize(18);
    noStroke();
    fill("white");
    text("12", 195,90);
    
noStroke();
fill("white")
text("1",250,105)
     
     noStroke()
     fill("white")
     text("2",295,145)

noStroke();
fill("white");
text("3", 310,205);

    noStroke();
    fill("white")
    text("4",290,260)
   
noStroke();
fill("white");
text("5",260,300);
    
    noStroke();
    fill("white");
    text("6", 200,310);

noStroke();
fill("white")
text("7",145,300)
    
    noStroke();
    fill("white")
    text("8",105,260)

noStroke();
fill("white");
text("9", 80,205);

noStroke();
fill("white");
text("10",100,145)

noStroke();
fill("white")
text("11",135,100)


//translate(200,200);
//rotate(-90);

h=hour();
m=minute();
s=second();


textSize(20)
text("Time:-"+h+":"+m+":"+s,40,500)
text("Desingn And Devloped By Ayush Singh",600,500)


var d=day();
var mo=month();
var ye=year();

text("Date:-"+d+"/"+mo+"/"+ye,40,550)
translate(200,200);
rotate(-90);

//var d=map(mouseX,0,width,0,175)
//var e=map(mouseX,0,width,40,300)
//fill(255,d,0)
//ellipse(width/2,height/2,e,e)

strokeWeight(8);
stroke(255, 150, 235);
noFill();
secan = map(s, 0, 60, 0, 360);
strokeWeight(8);
stroke(154, 234, 101);
minan = map(m,0,60,0,360);
strokeWeight(8);
stroke(137, 96, 253);
hran = map(h % 12,0,12,0,360);


push();
rotate(secan);
stroke(255,0,0);
strokeWeight(2);
line(0,0,100,0);
pop()


push();
rotate(minan);
stroke(0,255,0);
strokeWeight(5);
line(0,0,85,0);
pop()


push();
rotate(hran);
stroke(0,0,255);
strokeWeight(7);
line(0,0,45,0);
pop()

stroke(255,0,255);
point(0,0)


strokeWeight(2);
noFill();

stroke(255,0,0);
arc(0,0,300,300,0,secan);

strokeWeight(5);
stroke(0,255,0);
arc(0,0,280,280,0,minan);

strokeWeight(7);
stroke(0,0,255);
arc(0,0,260,260,0,hran);


}
