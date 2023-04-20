$(document).ready(function () {
    $("#notice").on("mouseenter", function () {
      $("#pagectn").css("background-image", "url(../img/classique.png)");
      $("#p5_classique").css("display", "none");
      $("#barre").css("display", "none");
    });

    $("#notice").on("mouseleave", function () {
      $("#pagectn").css("background-image", "none");
      $("#p5_classique").css("display", "block");
      $("#barre").css("display", "flex");
    });


    $("#ok2").on("click", function () {
      $(".container").css("justify-content", "center");
      $("#pagectn").css("background-image", "url(../img/confirmation.png)");
      $(".consignectn").css("background", "url(../img/consigne.png)");
      $(".consignectn").css("background-position", "center");
      $("#ok2").css("display", "none");
      $("#ok3").css("display", "block");
      $("#classique").css("display", "none");
      $("#vs").css("display", "none");
      $("#panier").css("display", "none");
      $("#p5_classique").css("display", "none");
      $("#notice").css("display", "none");
      $("#barre").css("display", "none");
    });
  
    $("#ok3").on("click", function () {
      $("#pagectn").css("background-image", "url(../img/fin.png)");
      $("#ok3").css("display", "none");
    });

    });
    
 
    let typos = [];
    let fonts = ["Antic Didone", "Bitter", "Climate Crisis", "Comfortaa", "Cormorant Garamond", "Courier Prime", "Goldman", "Modak", "Montserrat", "Oswald", "Pinyon Script", "Playfair Display", "Roboto Mono", "Sacramento", "Uncial Antiqua"];

let fontSize = 64;
let gapSize = 45;
let margin = 125;

let myInput;
let myText="";
let stuff="Aa";
let row = 3;
let col = 8;
let spaceY = fontSize/2 + gapSize;
let spaceX = stuff.length*fontSize/2 + gapSize;
function setup() {
  canvas = createCanvas(1002, 475.2);
  canvas.parent("p5_classique");

  textSize(fontSize);
  textAlign(CENTER, CENTER);

  for (let i = 0, index = 0; i < col && index < fonts.length; i++) {
    typos[i] = [];
    for (let j = 0; j < row && index < fonts.length; j++, index++) {
        typos[i][j] = new Typo(i, j, fonts[index]);
    }
  }
  
  myInput = createInput('Aa');
  myInput.parent("barre");
  myInput.style('font-size', '25px');
  myInput.size(AUTO, 30);
  myInput.position(50, 20);
  myInput.input(typing);
}

function draw() {
  background("#E6D6FF");
  translate(margin*2, margin);

  for (let i = 0, index = 0; i < col && index < fonts.length; i++) {
    for (let j = 0; j < row && index < fonts.length; j++, index++) {
      typos[i][j].display();
    }
  }
  
  
}

function typing() {
  stuff = this.value();
  spaceX = stuff.length*fontSize/2 + gapSize;
}

function mousePressed() {
  for (let i = 0, index = 0; i < col && index < fonts.length; i++) {
    for (let j = 0; j < row && index < fonts.length; j++, index++) {
      typos[i][j].clicked(mouseX - margin*2, mouseY - margin);
    }
  }
}

class Typo {
  constructor(x_, y_, font_) {
    this.x = x_;
    this.y = y_;
    this.c = color(0);
    this.font = font_;
  }

  clicked(px, py) {
    let d = dist(px, py, this.x*spaceX, this.y*spaceY);
    if (d < fontSize / 2) {
      this.c = color(97,0,255);
    }
  }

  display() {
    fill(this.c);
    textFont(this.font);
    text(stuff, this.x*spaceX, this.y*spaceY);
  }
}
