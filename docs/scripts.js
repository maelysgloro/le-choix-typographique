const fonts = ["Modak", "Climate Crisis", "Londrina Outline"];
const fonts_size = [150, 100, 160];
const fonts_height = [1, 1.5, 1];
const fonts_background = ["#FFFFFF", "#A5C9FF", "#D1FFD3"];
let font_index = 0;

$(document).ready(function () {
  $("button").on("click", function () {
    font_index = (font_index + 1) % fonts.length;
    $("#main_title").css("font-family", fonts[font_index]);
    $("#main_title").css("font-size", fonts_size[font_index] + "px");
    $("#main_title").css("line-height", fonts_height[font_index]);
    $("body").css("background-color", fonts_background[font_index]);
  });
});

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5");
}

function draw() {}
