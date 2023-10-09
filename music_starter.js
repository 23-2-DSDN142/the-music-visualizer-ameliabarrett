let firstRun = true;
let heartImage;
let navy;
let purple;


function draw_one_frame(words, vocal, drum, bass, other, counter) {
  // BACKGROUND
  background(20);
  //let navy = color(32, 2, 87); // Start at dark navy blue
  //let purple = color(105, 35, 212); // End at purple

let gradient = drawingContext.createLinearGradient (
  500, 0, 500, 720);

  gradient.addColorStop(0, color(32, 2, 87));
  gradient.addColorStop(1, color(105, 35, 212));

  drawingContext.fillStyle = gradient;

  rect(0, 0, 1280, 720);

 }

 // let mappedColour = lerpColor(navy, purple, 0.1);
  //fill(mappedColour);
  //rect(0, 0, 1280, 720);



  // DRUMS
  var drumMap = map(drum, 0, 100, 5, 20);
  
  for (var ii = 1; ii <= 10; ii++) {
    var yStep = ii * 50;
    for (var i = 1; i <= 10; i++) {
      ellipse(50 * i, yStep, drumMap);
    }
  }
  
  // BASS
  let circleRadius = 250;
  let numLines = 15;
  let lineSpacing = 35;
  
  fill(193, 177, 231); // Pale whitey purple
  ellipse(width / 2, height / 2, circleRadius * 2, circleRadius * 2);
  
  for (let i = 0; i < numLines; i++) {
    let y = height / 2 - circleRadius + i * lineSpacing;
    line(width / 2 - circleRadius, y, width / 2 + circleRadius, y);
  }
  
  // VOCALS
  
  // OTHER