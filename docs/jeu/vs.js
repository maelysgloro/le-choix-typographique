$(document).ready(function () {
  $("#notice").on("mouseenter", function () {
    $("#pagectn").css("background-image", "url(../img/vs.png)");
    $("#questions").css("display", "none");
    $("#barre").css("display", "none");
  });

  $("#notice").on("mouseleave", function () {
    $("#pagectn").css("background-image", "none");
    $("#questions").css("display", "flex");
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
    $("#questions").css("display", "none");
    $("#notice").css("display", "none");
    $("#barre").css("display", "none");
  });

  $("#ok3").on("click", function () {
    $("#pagectn").css("background-image", "url(../img/fin.png)");
    $("#ok3").css("display", "none");
  });


  $("#didone").on("click", function () {
    $("#didone").css("display", "none");
    $("#climate").css("display", "none");
    $("#garamond").css("display", "flex");
    $("#comfortaa").css("display", "flex");
  });

  $("#climate").on("click", function () {
    $("#didone").css("display", "none");
    $("#climate").css("display", "none");
    $("#garamond").css("display", "flex");
    $("#comfortaa").css("display", "flex");
  });

  $("#garamond").on("click", function () {
    $("#garamond").css("display", "none");
    $("#comfortaa").css("display", "none");
    $("#montserrat").css("display", "flex");
    $("#courier").css("display", "flex");
  });

  $("#comfortaa").on("click", function () {
    $("#garamond").css("display", "none");
    $("#comfortaa").css("display", "none");
    $("#montserrat").css("display", "flex");
    $("#courier").css("display", "flex");
  });

  $("#montserrat").on("click", function () {
    $("#montserrat").css("display", "none");
    $("#courier").css("display", "none");
    $("#uncial").css("display", "flex");
    $("#oswald").css("display", "flex");
  });

  $("#courier").on("click", function () {
    $("#montserrat").css("display", "none");
    $("#courier").css("display", "none");
    $("#uncial").css("display", "flex");
    $("#oswald").css("display", "flex");
  });


});


