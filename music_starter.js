let firstRun = true;
let carNeonImage;
let cityScapeImage;
let bigCityScapeImage; 



function draw_one_frame(words, vocal, drum, bass, other, counter) {
 
  //TOP HALF OF VISUALISER !!!!

  // BACKGROUND
   background(5, 1, 36); //navy blue

   let gradient = drawingContext.createLinearGradient(500, 0, 500, 720); //gradient bounds
   gradient.addColorStop(0, color(32, 2, 87)); //Start at dark navy blue
   gradient.addColorStop(1, color(124 , 35 , 161)); //End at purple
   drawingContext.fillStyle = gradient;
   rect(0, 0, 1000, 900);


   // brightest stars
let drumMap = map(other, 0, 100, 0, 5 );
  
for (let ii = 1; ii <= 50; ii++) { // how many across x
  let yStar = ii * 95;
  for (let i = 1; i <= 30; i++) { //how many y 
    noStroke();
    fill(193, 177, 231); 
    let r = random(100);
    ellipse(100 * i + r, yStar + r , drumMap);
  }
}
    
  //OTHER
//stars
let drumMapTwo = map(other, 0, 100, 0, 6 );
  
for (let ii = 1; ii <= 50; ii++) { // how many across x
  let yStar = ii * 95;
  for (let i = 1; i <= 30; i++) { //how many y 
    
    let navy = color(5, 1, 36);
    let palePink = color(193, 177, 231);
    let mapforColorLerp = map(other, 0, 100, 0, 1);
    let mappedColor = lerpColor(palePink, navy, mapforColorLerp);
    
    noStroke();
    fill(mappedColor); 
    let r = random(100);
    ellipse(100 * i - r, yStar - r , drumMapTwo);
  }
}

 
  // VOCALS
  //background circle with lines cutting
  let circleRadius = 250;
  
  noStroke();
  fill(219 , 73 , 234); // 193, 177, 231 Pale whitey purple
  ellipse(width / 2, height / 2, circleRadius * 3, circleRadius * 3);


 let stripeWidth = map(vocal, 0, 100, 10, 90, true);

  let numStripes = height / stripeWidth;
  for(let i=0; i<numStripes; i=i+2) {
  let cury = map(i, 0, numStripes-5, 700, height);
   noStroke();
   fill(124 , 35 , 161); //purply color
   rect(0, cury, width, vocal);
}

  //OTHER

  let ellipseSize = map(other, 0, 100, 0, 5);
  //normal stars
 noStroke();
 fill(193, 177, 231); 
 ellipse(150, 100, ellipseSize, ellipseSize);
 ellipse(70, 720, ellipseSize, ellipseSize);
 ellipse(300, 300, ellipseSize, ellipseSize);
 ellipse(200, 500, ellipseSize, ellipseSize);
 ellipse(800, 600, ellipseSize, ellipseSize);
 ellipse(900, 400, ellipseSize, ellipseSize);
 ellipse(500, 350, ellipseSize, ellipseSize);
 ellipse(600, 200, ellipseSize, ellipseSize);
 ellipse(900, 100, ellipseSize, ellipseSize);

   


//BOTTOM HALF OF VISUALISER

  noStroke();
  fill(27 , 10 , 71);
  rect(0, 900, 1000, 600);


  let bassMap = map(bass, 0, 100, 5, 30);
  let lengthOfLine = 1000;
  let lineStart = 1;
  let lineStep = 900;
  let lineEnd = lineStart+lengthOfLine;
    stroke(bassMap, 80, 80);
   
  for(let i = 1; i <= bassMap; i++){
     lineStep +=10;
      line(lineStart, lineStep, lineEnd, lineStep);
   }
 

    //HORIZONTAL grid ground
    strokeWeight(2);
    stroke(74 , 229 , 220);
   line(0, 900, 1000, 900);
   line(0, 910, 1000, 910);
   line(0, 930, 1000, 930);
   line(0, 950, 1000, 950);
   line(0, 980, 1000, 980);
   line(0, 1030, 1000, 1030);
   line(0, 1100, 1000, 1100);
   line(0, 1190, 1000, 1190);
   line(0, 1300, 1000, 1300);
 


  noStroke();
  fill(31 , 8 , 160); //BLUE road 
  beginShape();
  vertex(50, 1500);
  vertex(470, 900);
  vertex(520, 900);
  vertex(950, 1500);
  endShape();

  //neon blue ROAD lines 
 
  strokeWeight(5);
  stroke(74 , 229 , 220);
  line(470, 900, 50, 1500); //left road
  line(520, 900, 950, 1500); //right road

  strokeWeight(5);
  line(470, 900, 45, 1500); //makes left thicker
  line(470, 900, 40, 1500); //makes left thicker
  line(470, 900, 35, 1500); //makes left thicker
  line(520, 900, 955, 1500); //makes right thicker
  line(520, 900, 960, 1500); //makes right thicker
  line(520, 900, 965, 1500); //makes right thicker


  //ROAD CENTRE LINES

  let closestRoadArray = [1500, 1340];
  let secondRoadArray = [1260, 1140];
  let thirdRoadArray = [1080, 1000];
  let fourthRoadArray = [960, 920];

  for(let i = 0; i <=1; i++){
    strokeWeight(10); //CLOSEST middle lines
  line(320, closestRoadArray[0], 360, closestRoadArray[1]); 
  line(680, closestRoadArray[0], 630, closestRoadArray[1]);
  }
 

  strokeWeight(7);  //2nd furtherest road lines
  line(390, secondRoadArray[0], 420, secondRoadArray[1]);
  line(605, secondRoadArray[0], 573, secondRoadArray[1]); 

  strokeWeight(3); //3rd furtherest road lines
  line(440, thirdRoadArray[0], 462, thirdRoadArray[1]); 
  line(555, thirdRoadArray[0], 531, thirdRoadArray[1]); 

  strokeWeight(1); //4th furtherest road lines
  line(470, fourthRoadArray[0], 480, fourthRoadArray[1]); 
  line(520, fourthRoadArray[0], 510, fourthRoadArray[1]);


  //VERTICAL grid ground
  strokeWeight(2);
  stroke(74 , 229 , 220);
 // 5 left side lines
 line(50, 900, 0, 920);
 line(150, 900, 0, 965);
 line(240, 900, 0, 1040);
 line(300, 900, 0, 1140);
 line(380, 900, 0, 1320);
  // 5 right side lines
  line(620, 900, 1000, 1320);
  line(700, 900, 1000, 1140);
  line(760, 900, 1000, 1040);
  line(850, 900, 1000, 965);
  line(950, 900, 1000, 920);







//loading in IMAGES
  if (firstRun){
 carNeonImage = loadImage('carImage.png');
 cityScapeImage = loadImage('cityScape.png');
 bigCityScapeImage = loadImage('bigCityScape.png');
 firstRun = false
  }

  scale(0.12);
  image(carNeonImage, 100 * 29 , 200 * 45);

  scale(4);
  image(bigCityScapeImage, -50, -130);

  scale(4);
  image(cityScapeImage, 10, 68);

  

}





 

  // VOCALS
  
  // OTHER
