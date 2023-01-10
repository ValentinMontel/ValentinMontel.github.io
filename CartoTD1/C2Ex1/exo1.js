var latitude;
var longitude;

window.addEventListener("load", (event) => {
  getCurrentPosition()
})

function getCurrentPosition() {

  function success(position) {
      document.getElementById("phrase1").innerHTML = "Est-ce bien votre carte ?"
      main(position)
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

function main(position){
  var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);
  var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
  var marker = L.marker([43.6961, 7.27178]).addTo(map);
  
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
}