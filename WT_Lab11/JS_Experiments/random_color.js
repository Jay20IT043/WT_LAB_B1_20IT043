$(document).ready(function() {
  var palettes = [
    ['red', 'blue', 'green'],
    ['yellow', 'cyan', 'orange'],
    ['cyan', 'orange', 'blue']
  ];
  var randomPalette = palettes[Math.floor(Math.random() * palettes.length)];
  
  var new_bgcolor = randomPalette[0];
  var new_textcolor = randomPalette[1];
  var new_bordercolor = randomPalette[2];

  $('body').css({
    'background-color': new_bgcolor,
    'color': new_textcolor,
    'border-color': new_bordercolor
  });
});