var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
  io: new Raspi()
});


var R1 = "GPIO24";
var R2 = "GPIO26";
var L1 = "GPIO19";
var L2 = "GPIO21";


console.log("Hello :)")

board.on("ready", function() {
  console.log("ready")

  var frontLeftMotor = new five.Motor(L1);
  frontLeftMotor.start(50);
  console.log(frontLeftMotor);
//  var led = new five.Led("P1-13");
//  led.blink();
});
