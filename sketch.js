//Indhu Kanth @2021


// IcreateCanvasate variables

let wSlider;
let hSlider;
let sSlider;
let pSlider;
let qSlider;
let oSlider;
let uSlider;
let colPic;
let bgCol;

let canvas1;
let canvas2;
let drp;
var pg;
let tileWidth ;
let tileHeight ;
var nam=[];

let bgImg;
let myShader;




        function preload() {
               font = loadFont('PoliteType-Regular.ttf')

      }

  

  

  
  


function setup() 

{  
  
   //createCanvas(bgImg.width, bgImg.height, WEBGL);
      
    
canvas1=createCanvas(800, 800, P2D);
  
canvas1.background(255);
canvas1.position(400,160);
frameRate(25)
         

// let g = createP('B E C O M I N G');
// g.style('font-size', '30px');
// g.position(80, 12);
// g.style('color', '#202020');
// textFont("monospace", 25);


let g1 = createP('B E C O G R A P H Y');
g1.style('font-size', '30px');
g1.style('fon', font);
g1.position(80, 140);
g1.style('color', '#202020');
    
  
  
// let g3 = createP('©Become 2023');
// g3.style('font-size', '20px');
// g3.position(990, 35);
// g3.style('color', '#828080');
  
  let img = createImg("BeeBec.png");
img.position(68, 108);
img.size(130, 72);


  
  
// Letter Input field  
let a = createP('E N T E R - T E X T ');
a.style('font-size', '16px');
a.position(470, 30);
a.style('color', '#000000');
input = createInput();
input.position(470, 74);
input.style('font-size', '20px');
input.size(200,30)

  
// Width Input field  
let b = createP('C E L L - W I D T H');
b.style('font-size', '16px');
b.position(82, 232);
b.style('color', '#000000');
wSlider = createSlider(1, 80, 16, 1);
wSlider.position(80,283)
wSlider.style("width","180px")
wSlider.addClass("mySliders");
  

// Height Input field  
let c = createP('C E L L - H E I G H T');
c.style('font-size', '16px');
c.position(82, 324);
c.style('color', '#000000');
hSlider = createSlider(1, 80, 16, 1);
hSlider.position(80,365)
hSlider.style("width","180px")
hSlider.addClass("mySliders");
  
  
  

// Speed Input field  
let d = createP('S P E E D');
d.style('font-size', '16px');
d.position(82, 404);
d.style('color', '#000000');
sSlider = createSlider(0, 1, 0.05, 0.01);
sSlider.position(80,445)
sSlider.style("width","180px")
sSlider.addClass("mySliders");
  
  
  
  
// Distort X Input field  
let e = createP('D I S T O R T - X');
e.style('font-size', '16px');
e.position(82, 490);
e.style('color', '#000000');
pSlider = createSlider(0, 0.1, 0.05, 0.001);
pSlider.position(80,532)
pSlider.style("width","180px")
pSlider.addClass("mySliders");
    
  
  
// Distort Y Input field  
let f = createP('D I S T O R T - Y');
f.style('font-size', '16px');
f.position(82, 576);
f.style('color', '#000000');
qSlider = createSlider(0, 0.2, 0, 0.01);
qSlider.position(80,622)
qSlider.style("width","180px")
qSlider.addClass("mySliders");
    
    
  
  
// Offset Input field  
let h = createP('O F F S E T');
h.style('font-size', '16px');
h.position(82, 664);
h.style('color', '#000000');
oSlider = createSlider(0, 300, 100, 1);
oSlider.position(80,708)
oSlider.style("width","180px")
oSlider.addClass("mySliders");
    
  
// Offset Input field  
let j = createP('S I Z E');
j.style('font-size', '16px');
j.position(82, 748);
j.style('color', '#000000');
uSlider = createSlider(0, 400, 100, 10);
uSlider.position(80,794)
uSlider.style("width","180px")
uSlider.addClass("mySliders");
    
  
// Color field  
  
let r = createP('B G  -  C O L O R');
r.style('font-size', '16px');
r.position(760, 30); 
r.style('color', '#000000');
bgCol = createColorPicker("white");   
bgCol.position(760, 76);
bgCol.style("width","180px")
bgCol.addClass("mySliders");
  

  // Color field 2 
  
let s = createP('T E X T  -  C O L O R');
s.style('font-size', '16px');
s.position(1010, 30); 
s.style('color', '#000000');
colPic = createColorPicker("black");   
colPic.position(1010, 76);
colPic.style("width","180px")
colPic.addClass("mySliders");
  
let x = createP('A kinetic typography language of <a href="http://www.become.team" target="_blank">BECOME</a>');  
x.style('font-size', '14px');
x.position(80, 910); 
x.style('color', '#000000');
  
// // Transparent Bg
// chk2 = createCheckbox(' T R A N S P A R E N T', false);
// chk2.style('font-size', '16px');
// chk2.style("width","180px")

// chk2.addClass("mySliders");
// chk2.position(470, 108);
// chk2.style('color', '#000000');  
// chk2.changed(mycheck2);
  
  
  
// Freeze Check Box 
chk1 = createCheckbox(' P A U S E', false);
chk1.style('font-size', '16px');
chk1.style("width","180px")

chk1.addClass("mySliders");
chk1.position(80, 870);
chk1.style('color', '#000000');  
chk1.changed(mycheck);
  

// Save button 
button = createButton("S A V E ");
button.style('font-size', '18px', 'color', '0,255,255');
button.position(252, 862);
button.size(100,32)
button.mousePressed(savename);
  
  
  
 // Save button 
button1 = createButton("A B O U T ");
button1.style('font-size', '14px', 'color', '0,255,255');
button1.position(202, 72);
button1.size(100,32)
button1.mousePressed(myFunction); 
  
  
// // Background option drop down   
// drp = createSelect();
// drp.position(84, 552);
// drp.size(180,40)
// drp.style('font-size', '18px', 'color', '0,255,255');
// drp.option('1. W h i t e - BG');
// drp.option(' 2. G r i d - BG');
// drp.option(' 3. D y n a m i c - BG');
// drp.changed(changeOp);
  
  
// let v = createP('C E L L -S I Z E');
// v.style('font-size', '14px');
// v.position(760, 30);

// valueDisplayer = createP()
// valueDisplayer.position(780,42)
// valueDisplayer.style('font-size', '20px');
 
  pg = createGraphics(1000, 1000);

  
}



function draw() 
{
  
  
    // valueDisplayer.html( wSlider.value()+" x "+hSlider.value())

  // Assign the respective values
  nam=input.value();
  let yor=nam;
let ncol;
 // let oru;
//  oru=changeOp();
  
  
  
//   if(chk2.checked())
//     {
//  clear();
//     }
// else
//   {
//   background(bgCol.value());
//   pg.background(bgCol.value());
//   }

  // Define the letter graphic
background(bgCol.value());
let don=uSlider.value();


  // PGraphics

  pg.background(bgCol.value());
  pg.fill(colPic.value());
   pg.textFont(font);
  pg.textSize(don);
  pg.push();
  pg.translate(width/2, height/2);
  pg.textAlign(CENTER, CENTER);
  pg.text(nam, 0, 0);
  pg.pop();


  
  let tilesX = wSlider.value();
  let tilesY = hSlider.value();

  let tileW = int(width/tilesX);
  let tileH = int(height/tilesY);

  
  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {

      // WARP
      let waveX = int(sin(frameCount * sSlider.value() + ( x * y ) * pSlider.value()) * oSlider.value());
      let waveY = int(sin(frameCount * sSlider.value() + ( x * y ) * qSlider.value()) * oSlider.value());

      if (pSlider.value() === 0){
          waveX = 0;
      }

      if (qSlider.value() === 0){
          waveY = 0;
      }
      
      // image(pg,0,0)
      
      // SOURCE
      let sx = x*tileW + waveX;
      let sy = y*tileH + waveY;
      let sw = tileW;
      let sh = tileH;


      // DESTINATION
      let dx = x*tileW;
      let dy = y*tileH;
      let dw = tileW;
      let dh = tileH;



      copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);

    

  
    }

  }

  
  
  
 
//   // Initiating motion
//   for(var y=0; y<height; y+=tileHeight)
//   {
  
//     for(var x=0; x<width; x+=tileWidth)
    
//     {
//       var off = frameCount * 0.1 + (x * y) * 0.01;
//       var sx = parseInt(x + (sin(off))*40);
//       var sy = parseInt(y + (cos(off))*40);

      
//       copy(pg,sx,sy,tileWidth,tileHeight,x,y,sx,y);

 
//      //Background options     
      
//       noFill();
// //       if(oru==1)
// //         {
// //               rect(x,y,tileWidth,tileHeight);
  
          
// //         }
// //       else if(oru==2)
      
// //         {
// //         rect(x,sy,tileWidth,tileHeight);

// //         }
//     }
//   }
  
//   pg.remove(); //clearing memory

// }

}


//function for freezing screen
function mycheck() 
{
  if(chk1.checked())
    {

 noLoop();  
    }
else
  {
    loop();
  }

}






function myFunction() {
            alert("Hello Peeps!\n\nBECOGRAPHY is a generative graphics experience built for the typography treatment for Become. We believe every word has the right to be a verb, creating a ripple in time that shapes our communication and continue to create futures. Play with the controls to dance with the world of words. \n\nv1.1\nIndhu Kanth\n2023.Become™\n\n");
        }


//function for saving 
function savename()
{
  save( "Letter" + nam+ ".png");
}



// //function for selecting background
// function changeOp()
// {
//  	let sel = drp.value();
//   let ass;
//   if(sel == '1. W h i t e - BG'){
// ass=0;
//   } else if(sel == ' 2. G r i d - BG'){
//    	ass = 1;
//   } else if(sel == ' 3. D y n a m i c - BG'){
//    	ass = 2; 
  
//   }
//   return ass;
// }


