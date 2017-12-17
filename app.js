let width = 535;
let height = 954; 

let canvas;
let ctx;
let stars = [];

class Star {
  constructor(){
    this.x = Math.floor(width/2 - Math.random() * width);
    this.y = Math.floor(height/2 - Math.random() * height);
    this.px = this.x;
    this.py = this.y;
    this.speed = 1.03;
  }

  update(){
    if(this.x > width/2 || this.x < -width/2 || this.y > height/2 || this.y < -height/2){
      this.x = Math.floor(width/4 - Math.random() * width/2);
      this.y = Math.floor(height/4 - Math.random() * height/2);
      this.px = this.x;
      this.py = this.y;
    }
    else{
      this.px = this.x;
      this.py = this.y;
      this.x *= this.speed;
      this.y *= this.speed;
      // this.x = Math.pow(this.x,this.speed);
      // this.y = Math.pow(this.y,this.speed);
    }
  };

  pos(){
    return "x: " + this.x + " y: " + this.y + " px: " + this.px + " py: "+ this.py;
  };

  draw(){
    //ctx.fillRect(this.x + width/2, this.y + height/2,4,4);
    ctx.beginPath();
    ctx.moveTo(this.px+ width/2, this.py+ height/2);
    ctx.lineTo(this.x+ width/2, this.y+ height/2);
    ctx.stroke();

  };
}

document.addEventListener("DOMContentLoaded", function(event) { 
    setup();
    update();
    setInterval(update,1/60 * 1000);
});

window.addEventListener("resize", function(event){
  updateSize();
});

function setup(){
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  updateSize();
  for (var i = 0; i < width/2; i++) { //Math.floor(width * height / 10)
    stars.push(new Star())
  }
  
}

function updateSize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  width = window.innerWidth;
  height = window.innerHeight; 
}

function update(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle="#FFFFFF";
  ctx.strokeStyle = '#FFFFFF';
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].draw();
  }
}