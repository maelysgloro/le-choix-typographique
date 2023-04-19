const polices = ["Modak", "Climate Crisis","Typefesse", "Londrina Outline","PP Mondwest"];
const fonts_size = [150, 100, 130, 150, 150];
const fonts_height = [1, 1.5, 1.2, 1, 1];
const fonts_background = ["#FFFFFF", "#A5C9FF","#f4a8d9", "#D1FFD3","#cfb4f9"];
let font_index = 0;

$(document).ready(function () {

  $("#clique").on("click", function () {
    font_index = (font_index + 1) % polices.length;
    $("#main_title").css("font-family", polices[font_index]);
    $("#main_title").css("font-size", fonts_size[font_index] + "px");
    $("#main_title").css("line-height", fonts_height[font_index]);
    $("body").css("background-color", fonts_background[font_index]);
  });

  $("#jouer").on("click", function () {
    $("#pagectn").css("background-image", "url(img/categorie.png)");
    $("#jouer").css("display", "none");
    $("#ok").css("display", "block");
  });

  $("#ok").on("click", function () {
    $(".container").css("justify-content", "space-between");
    $("#pagectn").css("background", "none");
    $(".consignectn").css("background-image", "none");
    $("#ok").css("display", "none");
    $("#ok2").css("display", "block");
    $("#classique").css("display", "block");
    $("#vs").css("display", "block");
    $("#panier").css("display", "block");
    $("#p5").css("display", "block");
    $("#notice").css("display", "block");
  });

  $("#ok2").on("click", function () {
    $(".container").css("justify-content", "center");
    $("#pagectn").css("background-image", "url(img/confirmation.png)");
    $(".consignectn").css("background", "url(img/consigne.png)");
    $(".consignectn").css("background-position", "center");
    $("#ok2").css("display", "none");
    $("#ok3").css("display", "block");
    $("#classique").css("display", "none");
    $("#vs").css("display", "none");
    $("#panier").css("display", "none");
    $("#p5").css("display", "none");
    $("#notice").css("display", "none");
  });

  $("#ok3").on("click", function () {
    $("#pagectn").css("background-image", "url(img/fin.png)");
    $("#ok3").css("display", "none");
  });

  $("#notice").on("mouseenter", function () {
    $("#pagectn").css("background-image", "url(img/panier.png)");
    $("#p5").css("display", "none");
  });

  $("#notice").on("mouseleave", function () {
    $("#pagectn").css("background-image", "none");
    $("#p5").css("display", "block");
  });

});

var typo = [];
var fonts = ["Comic Sans MS", "Futura", "Courier New", "Montserrat", "Didot"];
var index;
var y = 0;
var x = 10;
var myInput;
var myText;
var stuff;

function preload() {
  img = loadImage('panier.svg');
}

function setup() {
  canvas = createCanvas(1002, 475.2);
  canvas.parent("p5");

  textSize(40);
  textAlign(CENTER);
  rectMode(CENTER);
  imageMode(CENTER)

  for (let i = 0; i < 50; i++) {
    typo.push(new element());
  }

  paddle = new Paddle();

  myInput = createInput('Aa');
  myInput.parent("p5");
  myInput.style('font-size', '25px');
  myInput.size(AUTO, 30);
  myInput.position(50, 20);
  myInput.input(typing);

  myText = '';
  stuff='Aa';
}

function draw() {
  background("#E6D6FF");

  for (let i = 0; i < typo.length; i++) {
    typo[i].move();
    typo[i].display();
    typo[i].checkPaddle(paddle);
  }


  paddle.display();
  paddle.move();

}


function typing() {
    stuff = this.value();
}


class element {
  constructor() {
    this.x = random(width);
    this.y = random(-3000, 0);
    this.c = color(0);
    this.index = round(random(0, 4));
  }

  checkPaddle(p){
    if (this.x < (p.x + p.w/2) && this.x > (p.x - p.w/2) && this.y > (p.y - p.h/2) && this.y < (p.y)){
      this.c = color("#E6D6FF");
    }
  }

  move() {
    this.y = this.y + 1;
  }

  display() {
    fill(this.c);
    textFont(fonts[this.index]);
    text(stuff, this.x, this.y);
  }
}

class Paddle {
  constructor() {
    this.x = width/2;
    this.y = height - 150;
    this.w = 195;
    this.h = 106;
  }

  move(){
    this.x = mouseX;
  }

  display() {
    noStroke();
    image(img, this.x, this.y, this.w, this.h);
  }
}
