navigator.geolocation.getCurrentPosition(success())

var position = "Bonjour"
ReactDOM.render(React.createElement("h1",null,position))

function success(pos) {
    var crd = pos.coords;
  
    console.log('Votre position actuelle est :');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude : ${crd.longitude}`);
    console.log(`La précision est de ${crd.accuracy} mètres.`);
  }