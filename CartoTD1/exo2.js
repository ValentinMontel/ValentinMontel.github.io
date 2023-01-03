/*navigator.geolocation.getCurrentPosition(success());*/

var orientation = "Bonjour";
ReactDOM.render((React.createElement("p", null, orientation)), document.getElementById('Torientation'));

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(event) {
      var rotateDegrees = event.alpha;
      var leftToRight = event.gamma;
      var frontToBack = event.beta;
  
      handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
    }, true);
  }

  var handleOrientationEvent = function(frontToBack, leftToRight, rotateDegrees) {
    
  };

