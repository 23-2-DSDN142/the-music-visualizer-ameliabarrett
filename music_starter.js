let firstRun = true
let heartImage;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(firstRun){
    rectMode(CENTER);
    heartImage = loadImage('lovesickHeart1.png');

    firstRun = false
  }

  background(5, 1, 36); //navy blue background

 //drawing in urban setting background
 fill(35, 32, 100); //4 navy blue
  rect(100, 400, 120, 400); //2
  rect(300, 540, 140, 380); //6
  rect(580, 480, 120, 540); //9
  rect(940, 490, 120, 480); //13
  rect(1280, 420, 100, 610); //18

  fill(118, 43, 127); //8 purple
  rect(0, 600, 100, 600); //1
  rect(0, 600, 280, 240);//3
  rect(240, 630, 100, 400); //5
  rect(450, 480, 170, 400); //7
  rect(690, 490, 120, 400); //10
  rect(800, 600, 180, 320); //12
  rect(1060, 560, 110, 360); //15
  rect(1200, 460, 80, 560); //17

  fill(59, 168, 201); //5 light blue
  rect(180, 650, 180, 140); //4
  rect(440, 690, 200, 80); //8
  rect(680, 640, 140, 180); //11
  rect(980, 600, 100, 240); //14
  rect(1140, 500, 140, 460); //16


  strokeWeight(5);
  stroke(247, 84, 236);
   var drumMap = map(drum, 0, 100, 5, 20);

   for(var ii = 1; ii <=10; ii++); { 
    var yStep = ii*50; //50
    for(var i = 1; i <=10; i++){
      ellipse(50 * i, yStep, drumMap);
    }
   }

  
  //draws 'lovesick' heart in
 scale(1); 
 //image(heartImage, 730, -300);

  //bass
  let heartSize = map(bass, 0, 100, 730, 10);
  image(heartImage, 730, 10, heartSize, heartSize);

}
