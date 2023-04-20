$(document).ready(function () {
    $("#notice").on("mouseenter", function () {
      $("#pagectn").css("background-image", "url(../img/panier.png)");
      $("#p5_panier").css("display", "none");
      $("#barre").css("display", "none");
    });

    $("#notice").on("mouseleave", function () {
      $("#pagectn").css("background-image", "none");
      $("#p5_panier").css("display", "block");
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
      $("#p5_panier").css("display", "none");
      $("#notice").css("display", "none");
      $("#barre").css("display", "none");
    });
  
    $("#ok3").on("click", function () {
      $("#pagectn").css("background-image", "url(../img/fin.png)");
      $("#ok3").css("display", "none");
    });

    });
    
    
    var typo = [];
    var fonts = ["Antic Didone", "Bitter", "Climate Crisis", "Comfortaa", "Cormorant Garamond", "Courier Prime", "Goldman", "Modak", "Montserrat", "Oswald", "Pinyon Script", "Playfair Display", "Roboto Mono", "Sacramento", "Uncial Antiqua"];
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
      canvas.parent("p5_panier");

      textSize(40);
      textAlign(CENTER);
      rectMode(CENTER);
      imageMode(CENTER)

      for (let i = 0; i < 50; i++) {
        typo.push(new element());
      }

      paddle = new Paddle();

      myInput = createInput('Aa');
      myInput.parent("barre");
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
        this.index = round(random(0, 14));
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