/*navigator.geolocation.getCurrentPosition(success());*/

var position = "Bonjour";
ReactDOM.render((React.createElement("h1", null, position)), document.getElementById('Tposition'));

/*if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(event) {
      // alpha : rotation autour de l'axe z
      var rotateDegrees = event.alpha;
      // gamma : de gauche à droite
      var leftToRight = event.gamma;
      // bêta : mouvement avant-arrière
      var frontToBack = event.beta;
  
      handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
    }, true);
  }*/