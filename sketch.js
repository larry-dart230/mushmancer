let eyeHeight = 200;

let counter = 0;

let eyesClosed = false;

function setup() {
  createCanvas(400, 460);
  noStroke();
}

function draw() {
  clear();
  background(220, 10);
    
  counter = counter + deltaTime;

  if (eyesClosed && counter > 200) {
    eyeHeight = 200;
    eyesClosed = false;
    counter = 0;
  } else if (counter > 4000) {
    eyeHeight = .5;
    eyesClosed = true;
    counter = 0;
  }
  noStroke();
  
  //body
  fill(78, 133, 163)
  rect(0, 250, 400, 400,90);
  fill(95, 164, 201)
  ellipse(200, 170, 300);
  rect(50, 150, 300, 200, 100);
  
  //eye
  fill(78, 133, 163)
  ellipse(200, 150, 200,eyeHeight);
  fill(255, 255, 255)
  ellipse(200, 150, 170, eyeHeight / 1.4);
  fill(250, 221, 20)
  ellipse(200, 150, 80, eyeHeight / 2 );
  fill(0,0,0);
  ellipse(200, 150, 60, eyeHeight / 2);
  fill(255, 255, 255);
  ellipse(220, 125, 20, eyeHeight / 10);
  

  //mouth
  fill(126, 224, 96);
  arc(200, 260, 100, 100, 0, PI / 1.0);
  fill(230, 69, 88);
  arc(200, 260, 100, 10, 0, PI / 1.0);
    fill(220, 163, 242);
  arc(200, 293, 75, 36, 0, PI / 1.0);
  rect(227, 293, 10, 23, 9);
  rect(160, 293, 10, 15, 9);
  rect(210, 293, 10, 40, 9);
  rect(170, 293, 10, 57, );
  
  
  //teeth
  fill(237, 235, 235);
  rect(179, 260, 20, 21, 9.);
  rect(213, 260, 20, 21, 9.);
  rect(173, 288, 20, 18, 9);
  fill(220, 163, 242);
  arc(200, 298, 75, 20, 0, PI / 1.0);

  
  //eyeholes
  fill(0,0,0)
  ellipse(330, 170, 20, 70);
  ellipse(70, 170, 20, 70);
  
  //monsterears
  fill(78, 133, 163)
  rect(20, 150, 60, 40, 10);
  fill(78, 133, 163)
  rect(320, 150, 60, 40, 10);
  rect(345, 110, 40, 80, 10);
  rect(15, 60, 40, 130, 10);
    rect(345, 60, 40, 130, 10);
  
  //eyes2
  fill(140, 203, 237)
  ellipse(40, 60, 120);
  ellipse(360, 60, 120);
  
  //eye1
  fill(78, 133, 163)
  ellipse(40, 60, 90, eyeHeight / 2.2);
  fill(255,255,255)
  ellipse(40, 60, 73, eyeHeight / 3.5);
  fill(250, 221, 20)
  ellipse(40, 60, 45, eyeHeight / 4.5);
  fill(0,0,0);
  ellipse(40, 60, 35, eyeHeight / 4.5);
  fill(78, 133, 163, );
  arc (40, 60, 120, 120, PI, radians(360));
  
  fill(78, 133, 163)
  ellipse(360, 60, 90, eyeHeight / 2.2);
  fill(255,255,255)
  ellipse(360, 60, 73, eyeHeight / 3.5);
  fill(250, 221, 20)
  ellipse(360, 60, 45, eyeHeight / 4.5);
  fill(0,0,0);
  ellipse(360, 60, 35, eyeHeight / 4.5);
  fill(255,255,255);
  ellipse(370, 50, 12, eyeHeight / 15.5);
  
  //freakles
  fill(78, 133, 163)
  ellipse(320, 240, 20);
  ellipse(300, 260, 15);
  ellipse(325, 260, 10);
  ellipse(80, 240, 10);
  ellipse(70, 260, 20);
  ellipse(100, 260, 10);
  ellipse(140, 50, 20);
  ellipse(120, 65, 10);
  
  //hair
  stroke(199, 95, 10);
  strokeWeight(14);
  line(245, 20, 235, 35);
  line(225, 20, 235, 35);
  line(225, 20, 215, 35);
  line(205, 20, 195, 35);
  line(185, 20, 195, 35);
  line(185, 20, 175, 35);
  line(165, 20, 175, 35);
  line(205, 20, 215, 35);
  
  //hands
  strokeWeight(0)
  fill(61, 108, 133)
  rect(50, 390, 100, 75, 90);
  rect(260, 390, 100, 75, 90);
  
  //hands
  strokeWeight(0);
  fill(95, 164, 201)
  rect(330, 370, 60, 75, 90);
  rect(280, 370, 60, 75, 90);
  rect(230, 370, 60, 75, 90);
  rect(20, 370, 60, 75, 90);
  rect(20, 370, 60, 75, 90);
  rect(70, 370, 60, 75, 90);
  rect(120, 370, 60, 75, 90);
    
  //nails
  strokeWeight(0);
  fill(237, 235, 235)
  rect(350, 420, 20, 30, 90);
  rect(300, 420, 20, 30, 90);
  rect(250, 420, 20, 30, 90);
  rect(140, 420, 20, 30, 90);
  rect(90, 420, 20, 30, 90);
  rect(40, 420, 20, 30, 90);


}