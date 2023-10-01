let heartImage;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(5, 1, 36) //navy blue ish
  textFont('Futura'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  //image
  if(firstRun){
    rectMode(CENTRE);
    testImg = loadImage('lovesickHeart.png');
     firstRun = false
     }
  
 
   //bass
   for (let i = 1; i <= 5; i++ ){
     let ellipseSize = map(bass, 0, 100, 100,250);
     fill(185,93, 148);//pale pink 
     ellipse(200 *i, 200, ellipseSize);
    }
 
}

//let ellipseSize = map(bass, 0, 100, 100,250);
     //fill(185,93, 148);//pale pink 
     //ellipse(width/2, height/4 + 5 * bass, ellipseSize, ellipseSize);

 image(heartImage, 200, 80);