let firstRun = true;
let heartImage;
let navy;
let purple;


function draw_one_frame(words, vocal, drum, bass, other, counter) {
 
  // BACKGROUND
   background(5, 1, 36); //navy blue

//DRUMS
//stars
var drumMap = map(drum, 0, 100, 0, 5 );
  
for (var ii = 1; ii <= 50; ii++) { // how many across x
  var yStar = ii * 20;
  for (var i = 1; i <= 30; i++) { //how many y 
    fill(193, 177, 231); 
    let r = random(50);
    ellipse(50 * i + r, yStar , drumMap);
  }
}

  // BASS
  //background circle with lines cutting
  let circleRadius = 250;
  
  fill(193, 177, 231); // Pale whitey purple
  ellipse(width / 2, height / 2, circleRadius * 2, circleRadius * 2);
  

  let stripeWidth = map(other, 40, 100, 40, 70, true);

  let numStripes = height / stripeWidth;
  for(let i=0; i<numStripes; i=i+2) {
    let cury = map(i, 0, numStripes-1, 0, height);
    fill(5, 1, 36); //navy blue
      rect(0, cury, width, stripeWidth);
  }
    
    
 }





 

  // VOCALS
  
  // OTHER
