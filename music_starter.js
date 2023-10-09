let firstRun = true;
let heartImage;
let navy;
let purple;


function draw_one_frame(words, vocal, drum, bass, other, counter) {
 
  // BACKGROUND
   background(5, 1, 36); //navy blue

//DRUMS
//stars
var drumMap = map(drum, 0, 100, 5, 20);
  
for (var ii = 1; ii <= 10; ii++) {
  var yStar = ii * 50;
  for (var i = 1; i <= 10; i++) {
    fill(193, 177, 231); 
    ellipse(100 * i, yStar, drumMap);
  }
}


  // BASS
  //background circle with lines cutting
  let circleRadius = 250;
  let numLines = 12;
  let lineSpacing = 60;
  
  fill(193, 177, 231); // Pale whitey purple
  ellipse(width / 2, height / 2, circleRadius * 2, circleRadius * 2);
  
  for (let i = 0; i < numLines; i++) {
    let y = height / 2 - circleRadius + i * lineSpacing;
    strokeWeight(20);
    stroke(5, 1, 36); //navy blue
    line(width / 2 - circleRadius, y, width / 2 + circleRadius, y);
  }
    
    
 }





 

  // VOCALS
  
  // OTHER