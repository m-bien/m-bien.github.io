// Initialize the map variable
var map;


function initMap() {
  var center = {lat: 36.06865390159834, lng: -79.8107065341785};

  // Create the map
  var map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 14
  });

  // Bus data
  var buses = [
    {
      position: center,
      info: {
        driver: "John Doe",
        rating: "4.5 stars",
        load: "Half full",
        destination: "Downtown"
      }
    },
    {
      position: {lat: 36.063653, lng: -79.817807},
      info: {
        driver: "Jane Smith",
        rating: "4.7 stars",
        load: "Nearly full",
        destination: "University"
      }
    }
  ];

  // Function to create a bus marker and InfoWindow
  function createBusMarker(bus) {
    var marker = new google.maps.Marker({
      position: bus.position,
      map: map,
      icon: {
        url: 'assets/favicon.png', // Path to your bus icon image
        scaledSize: new google.maps.Size(32, 32) // Adjust the size as needed
      }
    });

    if (!window.location.pathname.includes('driver')) {
      var infoWindowContent = `
      <div>
        <h4>Driver: ${bus.info.driver}</h4>
        <p>Rating: ${bus.info.rating}</p>
        <p>Load: ${bus.info.load}</p>
        <p>Destination: ${bus.info.destination}</p>
        <button onclick="">Request ride</button>
        <button onclick="">View Reviews</button>
      </div>
    `;
    } else {
      var infoWindowContent = `
      <div>
        <h4>Driver: ${bus.info.driver}</h4>
        <p>Rating: ${bus.info.rating}</p>
        <p>Load: ${bus.info.load}</p>
        <p>Destination: ${bus.info.destination}</p>
        <button onclick="">Send Alert</button>
        <button onclick="">View Reviews</button>
      </div>
    `;
    }

    var infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });

    return marker;
  }

  // Create markers for each bus
  var busMarkers = buses.map(createBusMarker);

  // Function to simulate bus movement
  function moveBus(marker, index) {
    var newPosition = {
      lat: marker.getPosition().lat() + (Math.random() - Math.random()) / 10000,
      lng: marker.getPosition().lng() + (Math.random() + Math.random()) / 10000
    };
    marker.setPosition(newPosition);
  }

  // Move each bus every 250 ms
  setInterval(function() {
    busMarkers.forEach(moveBus);
  }, 750);
} 

// Load the map script dynamically
function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCmmCmJxrpgZNdbad86zGFxi6nn3g3jt4w&callback=initMap';
  document.body.appendChild(script);
}

window.onload = loadScript;
