let five = require('johnny-five');
let board = new five.Board();
board.on('ready', function () {
  let led = new five.Led(8);
  led.blink(10000);
});