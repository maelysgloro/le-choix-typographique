

$(document).ready(function () {


  $("#circulaire").on("click", function () {
    $("#circulaire").css("color", "white");
    $("#circulaire").css("background-color", "#6100FF");
    $("#p5").css("display", "block");
    $("#input").css("display", "flex");

    $("#emotion").css("color", "#6100FF");
    $("#emotion").css("background-color", "white");
    $("#curseurs").css("display", "none");

    $("#choix").css("color", "#6100FF");
    $("#choix").css("background-color", "white");
    $("#multiples").css("display", "none");

    $(".consignectn").css("background-image", "url(img/circulaire.png)");
  });

  $("#emotion").on("click", function () {
    $("#emotion").css("color", "white");
    $("#emotion").css("background-color", "#6100FF");
    $("#curseurs").css("display", "flex");
    
    $("#circulaire").css("color", "#6100FF");
    $("#circulaire").css("background-color", "white");
    $("#p5").css("display", "none");
    $("#input").css("display", "none");

    $("#choix").css("color", "#6100FF");
    $("#choix").css("background-color", "white");
    $("#multiples").css("display", "none");

    $(".consignectn").css("background-image", "url(img/emotion.png)");
  });

  $("#choix").on("click", function () {
    $("#choix").css("color", "white");
    $("#choix").css("background-color", "#6100FF");
    $("#multiples").css("display", "flex");
    
    $("#emotion").css("color", "#6100FF");
    $("#emotion").css("background-color", "white");
    $("#curseurs").css("display", "none");

    $("#circulaire").css("color", "#6100FF");
    $("#circulaire").css("background-color", "white");
    $("#p5").css("display", "none");
    $("#input").css("display", "none");

    $(".consignectn").css("background-image", "url(img/choix.png)");
  });



});

let fonts = ["Antic Didone", "Bitter", "Climate Crisis", "Comfortaa", "Cormorant Garamond", "Courier Prime", "Goldman", "Modak", "Montserrat", "Oswald", "Pinyon Script", "Playfair Display", "Roboto Mono", "Sacramento", "Uncial Antiqua"];
var pupilSize = 25;
var myInput;

function setup() {
  canvas = createCanvas(600, 420);
  canvas.parent("p5");
  
  myInput = createInput('Aa');
  myInput.parent("input");
  myInput.style('font-size', '25px');
  myInput.style('color', '#6100FF');
  myInput.size(200, 30);
  angleMode(DEGREES);
  textAlign(CENTER);
  
}

function draw() {
  background(255);
  fill(255);
  stroke("#6100FF");
  ellipse(width/2, height/2, 300, 300); // Dessine l'oeil

  // Calcule la position de la pupille en fonction de la position de la souris
  let angle = atan2(mouseY - height/2, mouseX - width/2);
  let pupilX = width/2 + cos(angle) * (162 - pupilSize/2);
  let pupilY = height/2 + sin(angle) * (162 - pupilSize/2);

  //pupille
  fill("#6100FF");
  ellipse(pupilX, pupilY, pupilSize, pupilSize);
  
  let uniforme = (angle + 180) / 360;
  let index = int(uniforme * fonts.length % fonts.length);
  myInput.style('font-family', fonts[index]);
  
  noStroke();
  textSize(14);
  textFont(fonts[index]);
  text(fonts[index], pupilX + cos(angle)*(pupilSize*2 + fonts[index].length*2), pupilY + sin(angle)*(pupilSize*2));
  
}