function setup() {
  createCanvas(900, 900);
  frameRate(1)
}

function draw() {
  
  
  
  background(0);
  fill(random(0,255),random(0,255),random(0,255))
  triangle(750,300,730,300,740,280);
  fill(random(0,255),random(0,255),random(0,255))
  quad(740,280,730,300,700,290,690,260);
  fill(random(0,255),random(0,255),random(0,255))
  quad(730,300,700,310,670,300,700,290)
  fill(random(0,255),random(0,255),random(0,255))
  triangle(700,290,680,230,630,220)
  fill(random(0,255),random(0,255),random(0,255))
  quad(700,290,670,300,600,290,630,220)
  fill(random(0,255),random(0,255),random(0,255))
  quad(630,220,600,290,550,250,540,210)
  fill(random(0,255),random(0,255),random(0,255))
  quad(550,250,540,210,430,220,450,290)
  fill(random(0,255),random(0,255),random(0,255))
  triangle(550,250,450,290,450,340)
  fill(random(0,255),random(0,255),random(0,255))
  quad(450,340,450,290,370,380,410,380)
  fill(random(0,255),random(0,255),random(0,255))
  quad(450,290,370,380,300,350,430,220)
  fill(random(0,255),random(0,255),random(0,255))
  quad(370,380,410,380,440,460,400,440)
  fill(random(0,255),random(0,255),random(0,255))
  quad(370,380,300,350,350,480,400,440)
  fill(random(0,255),random(0,255),random(0,255))
  quad(400,440,440,460,470,550,430,530)
  fill(random(0,255),random(0,255),random(0,255))
  quad(350,480,400,440,430,530,420,600)
  fill(random(0,255),random(0,255),random(0,255))
 quad(430,530,420,600,420,690,440,670)
  fill(random(0,255),random(0,255),random(0,255))
  quad(470,550,430,530,440,670,490,690)
  fill(random(0,255),random(0,255),random(0,255))
  quad(440,670,490,690,460,810)
  fill(random(0,255),random(0,255),random(0,255))
  quad(440,670,460,810,430,800,420,690)
  fill(random(0,255),random(0,255),random(0,255))
 quad(460,810,430,840,290,770,300,750)
  fill(random(0,255),random(0,255),random(0,255))
  quad(430,840,290,770,390,840);
  fill(random(0,255),random(0,255),random(0,255))
  quad(290,770,300,750,200,550,190,550)
  fill(random(0,255),random(0,255),random(0,255))
  quad(200,550,190,550,160,585)
  fill(random(0,255),random(0,255),random(0,255))
  triangle(630,220,580,215,570,150)
  fill(random(0,255),random(0,255),random(0,255))
  triangle(630,220,610,218,550,100)
  fill(random(0,255),random(0,255),random(0,255))
 
  triangle(630,220,610,218,520,100)
  fill(random(0,255),random(0,255),random(0,255))
  triangle(630,220,580,215,550,150)
  fill(random(0,255),random(0,255),random(0,255))
  triangle(350,480,400,600,420,600)
  fill(random(0,255),random(0,255),random(0,255))
  triangle(400,600,420,600,420,690)
  fill(random(0,255),random(0,255),random(0,255))
  
  quad(430,220,300,220,260,300,350,300)
  fill(random(0,255),random(0,255),random(0,255))
  quad(260,300,300,300,200,400)
  fill(random(0,255),random(0,255),random(0,255))
  quad(300,220,260,300,240,120,280,100)
  fill(random(0,255),random(0,255),random(0,255))
  quad(280,100,240,120,150,110)
  fill(random(0,255),random(0,255),random(0,255))
  quad(240,120,247,180,90,280)
  fill(random(0,255),random(0,255),random(0,255))
  quad(200,400,247,180,260,300)
}
function mousePressed() {
 let fs = fullscreen();
 fullscreen(!fs);
}