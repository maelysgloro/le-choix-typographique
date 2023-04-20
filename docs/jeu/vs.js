$(document).ready(function () {
    $("#notice").on("mouseenter", function () {
      $("#pagectn").css("background-image", "url(../img/vs.png)");
      $("#p5_vs").css("display", "none");
      $("#barre").css("display", "none");
    });

    $("#notice").on("mouseleave", function () {
      $("#pagectn").css("background-image", "none");
      $("#p5_vs").css("display", "block");
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
      $("#p5_vs").css("display", "none");
      $("#notice").css("display", "none");
      $("#barre").css("display", "none");
    });
  
    $("#ok3").on("click", function () {
      $("#pagectn").css("background-image", "url(../img/fin.png)");
      $("#ok3").css("display", "none");
    });

    });
    
    
    var myInput;

    function setup() {
      canvas = createCanvas(1002, 475.2);
      canvas.parent("p5_vs");
    
      background(0, 0, 255);
      myInput = createInput('Aa');
          myInput.parent("barre");
          myInput.style('font-size', '25px');
          myInput.size(AUTO, 30);
          myInput.position(50, 20);
    }