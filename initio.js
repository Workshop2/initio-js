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

  var leftMotor = new five.Motor({
    pins: {
      pwm: L1,
      dir: 12	//If this is set to 12, the motor turns on but won't
				// turn off until reboot...??
    }
  });

  console.log(leftMotor);

  
  console.log("Starting...");
  leftMotor.start(0);
  
    console.log("forward...");
  leftMotor.forward(255);
  
  board.wait(5000, function() {
   leftMotor.stop();
   console.log("Stopped");
  });



  //var led = new five.Led("GPIO24");
  
  //console.log(led);
  //led.blink(25);
  
});
