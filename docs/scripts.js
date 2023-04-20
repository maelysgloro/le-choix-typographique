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
    $("#button").css("justify-content", "space-between");
    $("#pagectn").css("background", "none");
    $(".consignectn").css("background-image", "none");
    $("#ok").css("display", "none");
    $("#ok2").css("display", "block");
    $("#vs").css("display", "block");
    $("#panier").css("display", "block");
    $("#classique").css("display", "block");
    $("#notice").css("display", "block");
    $("#barre").css("display", "flex");
    
    $("#classique").css("color", "#E6D6FF");
    $("#classique").css("background-color", "black");
    $("#p5_classique").css("display", "block");
  });

  $("#classique").on("click", function () {
    $("#classique").css("color", "#E6D6FF");
    $("#classique").css("background-color", "black");
    $("#p5_classique").css("display", "block");

    $("#vs").css("color", "black");
    $("#vs").css("background-color", "#E6D6FF");
    $("#p5_vs").css("display", "none");
    $("#panier").css("color", "black");
    $("#panier").css("background-color", "#E6D6FF");
    $("#p5_panier").css("display", "none");

  });

  $("#vs").on("click", function () {
    $("#vs").css("color", "#E6D6FF");
    $("#vs").css("background-color", "black");
    $("#p5_vs").css("display", "block");
    
    $("#classique").css("color", "black");
    $("#classique").css("background-color", "#E6D6FF");
    $("#p5_classique").css("display", "none");
    $("#panier").css("color", "black");
    $("#panier").css("background-color", "#E6D6FF");
    $("#p5_panier").css("display", "none");

  });

  $("#panier").on("click", function () {
    $("#panier").css("color", "#E6D6FF");
    $("#panier").css("background-color", "black");
    //$("#p5_panier").css("display", "block");
    
    $("#vs").css("color", "black");
    $("#vs").css("background-color", "#E6D6FF");
    $("#p5_vs").css("display", "none");
    $("#classique").css("color", "black");
    $("#classique").css("background-color", "#E6D6FF");
    $("#p5_classique").css("display", "none");

    

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
    $("#p5_classique").css("display", "none");
    $("#p5_vs").css("display", "none");
    $("#p5_panier").css("display", "none");
    $("#notice").css("display", "none");
    $("#barre").css("display", "none");
  });

  $("#ok3").on("click", function () {
    $("#pagectn").css("background-image", "url(img/fin.png)");
    $("#ok3").css("display", "none");
  });

  $("#notice").on("mouseenter", function () {
    $("#pagectn").css("background-image", "url(img/classique.png)");
    $("#p5_classique").css("display", "none");
    $("#barre").css("display", "none");
  });

  $("#notice").on("mouseleave", function () {
    $("#pagectn").css("background-image", "none");
    $("#p5_classique").css("display", "block");
    $("#barre").css("display", "block");
  });

});

var myInput;

function setup() {
  canvas = createCanvas(1002, 475.2);
  canvas.parent("p5_classique");

  background(0, 255, 0);
  myInput = createInput('Aa');
      myInput.parent("barre");
      myInput.style('font-size', '25px');
      myInput.size(AUTO, 30);
      myInput.position(50, 20);
}