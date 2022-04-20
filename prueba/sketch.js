let gui;

// BOTONES
let a;
let b;
let c;
let d;
let e;

//MÚSICA
function preload () {
  cancion1 = loadSound("cancion1.mp3");
}
var analyzer;

//DIBUJO

//GATOS
var gato;
var pepino;
var gameover;
var sala;

var posx;
var posy;
var vel;

var controlx;
var controly;
var velocidadControl;

//ANIM
let angle = 0;

//REÍR

//FONDOS
var imagen1;

function setup() {
  createCanvas(1920, 1080);
  background(220);
  pg2 = createGraphics(1920,1080);
  pg4 = createGraphics(1920,1080,WEBGL);
  gui = createGui();
  
  //IMAGEN
  imagen1 = loadImage("p1.jpg");
  
  //BOTONES
  a = createToggle("Música que escucho", 330, 300, 280, 70);
  
  b = createToggle("Me gusta dibujar", 330, 420, 280, 70);
  
  c = createToggle("Me gustan los gatos", 330, 540, 280, 70);
  
  d = createToggle("Animación", 330, 660, 280, 70);
  
 
  
  //GATOS
  gato = loadImage("fd.png");
  pepino = loadImage("pepino.png");
  gameover = loadImage("GAMEOVER100.png");
  sala = loadImage("sala.jpg")
  
  posx = width/2;
  posy = 10;
  vel = 2;
  
  controlx = width/2;
  controly = height-25;
  velocidadControl = 10;

  
}
function draw() {
    imageMode(CORNER);
  image(imagen1,0,0);
  drawGui();
  
  
  ////////////////////////////////////
  //BOTON1
  if (a.val) {
    if (cancion1.isPlaying()){
      
    }else{
      cancion1.play();
    }
  }else{
    if (cancion1.isPlaying()){
      cancion1.stop();
    }else{
      
    }
  }
     
    ////////////////////////////////////
  //BOTON2
    if (b.val) { 
      background(0);
  
       if(keyIsPressed){
      if(key == "1"){
        fill(255);
      }
    }
      
    }else{
      fill(189, 189, 189);
    }

    
    ////////////////////////////////////
  //BOTON3
  
  if (c.val) { 
  
  imageMode(CORNER);
  image(sala,0,0,width,height);
  
  strokeWeight(10);
  imageMode(CENTER);
  image(pepino,posx,posy,200,200);
    
  strokeWeight(10);
  imageMode(CENTER);
  image(gato,mouseX, controly, 300,300);
    
  var distancia = dist(posx,posy,mouseX,controly);

  
  if(distancia <= 25){
    background(0);
    imageMode(CENTER);
    image(gameover,1000,200,150,150);
    noLoop();
  }
    posy += vel;
  
  if(posy > height){
    posx = random(0, width);
    posy = 0;
    vel = random(1,5);
  }
    
    
  }else{
    
  }
    
    ////////////////////////////////////
  //BOTON4
  
  if (d.val) { 
    pg4.background(0);
    pg4.rotateX(frameCount+0.0001);
    pg4.rotateZ(frameCount+0.001);
    //pgd.rotateY(angle);
    //pgd.rotateZ(angle);
    pg4.box(200);
    //pgd.sphere(230);
    
    image(pg4,0,0);
    
  }else{}
    
    
    
    
}