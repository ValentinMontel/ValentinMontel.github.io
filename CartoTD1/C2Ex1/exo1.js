window.addEventListener("load", (event) => {
  getCurrentPosition()
})

function getCurrentPosition() {

  function success(position) {
      this.latitude = position.coords.latitude
      this.longitude = position.coords.longitude
      setTimeout( getCurrentPosition, 5000)
  }

  function error() {
      document.getElementById("phrase1").innerHTML = "Please active your GPS"
  }

  if (!navigator.geolocation) {
      document.getElementById("phrase1").innerHTML = "Geolocation is not supported by your browser"
  } else {
      document.getElementById("phrase1").innerHTML = "Locating…"
      navigator.geolocation.getCurrentPosition(success, error)
  }
}

var latitude;
var longitude;
var map = L.map('map').setView([latitude, longitude], 13);
/*var map = L.map('map').setView([43.83, 4.36], 13);*/

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);