/*navigator.geolocation.getCurrentPosition(success());*/

var orientation = "Position: ";
var précision = "Précision: ";
var vitesse = "vitesse: ";
var date = "date: ";
var orientation = "orientation: ";
var alpha = "alpha: ";
var beta = "beta: ";
var gamma = "gamma: ";
var mouvement = "mouvement: ";

ReactDOM.render((React.createElement("p", null, orientation)), document.getElementById('Torientation'));
$(".Torientation").append("<p id='Talpha'>");

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(event) {
      var rotateDegrees = event.alpha;
      var leftToRight = event.gamma;
      var frontToBack = event.beta;
  
      handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
    }, true);
  }

  var handleOrientationEvent = function(frontToBack, leftToRight, rotateDegrees) {
    $(".Talpha").text(frontToBack);
  };

