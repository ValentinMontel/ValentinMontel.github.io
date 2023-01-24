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
  var positionMarker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
  var NiceMarker = L.marker([43.6961, 7.27178]).addTo(map);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
}

function calculDistance(cord1,cord2){
  var radlat1 = Math.PI * cord1[0]/180
	var radlat2 = Math.PI * cord2[0]/180
	var theta = cord1[1]-cord2[1]
	var radtheta = Math.PI * theta/180
  var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
	
    if (dist > 1) { dist = 1 }
		
  dist = Math.acos(dist)
	dist = dist * 180/Math.PI
	dist = dist * 60 * 1.1515
	return parseInt(dist * 1.609344)
}