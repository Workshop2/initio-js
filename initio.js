var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
  io: new Raspi()
});

console.log("Hello :)")

board.on("ready", function() {
  console.log("ready")
  var led = new five.Led("P1-13");
  led.blink();
    console.log("done ready")
});


console.log("Something else?")
