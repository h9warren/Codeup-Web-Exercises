$(document).ready(function() {
var myStyles = [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]

  // key: 8b21151a7c136222f70cba36e55c6af9
  // temp: data.list[1].temp.day
createMap("29.4241", "-98.4937");
function makeRequest (lat, lon, cnt) {

  var request = $.get("http://api.openweathermap.org/data/2.5/forecast/daily",
  {
    APPID: "8b21151a7c136222f70cba36e55c6af9",
    lat: lat,
    lon: lon,
    cnt: 5,
    units: "imperial"
  });
  request.done(function(data){
    console.log(data);
    hiLo(data);
    weatherIcon(data);
    precip(data);
    humidity(data);
    wind(data);
    pressure(data);
    forecastType(data);
  })
  .fail(function(jqHxr, status, error){
    console.log(status);
    console.log(error);
  })
}
  function hiLo(data) {
    $("#city").text(data.city.name);
    for (var i = 0; i < data.list.length; i++) {
      var low = parseInt(data.list[i].temp.min)
      var high = parseInt(data.list[i].temp.max)
      $("#day" + (i + 1)).html("<h5>" + low + "° / " + high + "°</h5>");
      console.log(data.list[i].temp.max);
      }
  };
  function weatherIcon(data) {
    //get icon
    for (var i = 0; i < data.list.length; i++) {
      var iconCode = (data.list[i].weather[0].icon);
      var getIcon = ("http://openweathermap.org/img/w/" + iconCode + ".png")
      $("#day" + (i + 1)).append("<img src='" + getIcon + "'>");
    }
  };
  function precip(data) {
    for (var i = 0; i < data.list.length; i++) {
      var rainAmt = (data.list[i].weather[0].main);
      var rainDesc = (data.list[i].weather[0].description);
    $("#day" + (i + 1)).append("<p><strong>" + rainAmt + ":</strong> " + rainDesc +" </p>");
    }
  }
  function humidity(data) {
    for (var i = 0; i < data.list.length; i++) {
      var humidity = (data.list[i].humidity);
      $("#day" + (i + 1)).append("<p><strong>Humidity: </strong>" + humidity + "</p>")
    }
  }
  function wind(data) {
    for (var i = 0; i < data.list.length; i++) {
      var windSpeed = (data.list[i].speed);
      $("#day" + (i + 1)).append("<p><strong>Wind: </strong>" + windSpeed + "</p>")
    }
  }
  function pressure(data) {
    for (var i = 0; i < data.list.length; i++) {
      var barometer = (data.list[i].pressure);
      $("#day" + (i + 1)).append("<p><strong>Pressure: </strong>" + barometer + "</p>")
    }
  }
  function createMap(lat, lon) {
    var lat= parseFloat(lat);
    var lon = parseFloat(lon);
    var mapOptions = {
      zoom: 16,
      styles: myStyles,
      center: {
        lat: lat,
        lng: lon
      },
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    var address = "300 Alamo Plaza, San Antonio, TX, 78205";
    makeRequest("29.4241", "-98.4937");
    google.maps.event.addListener(map, 'click', function(event) {
      placeMarker(event.latLng);
    });

    var marker;
    function placeMarker(location) {
      if (marker == null) {
          marker = new google.maps.Marker({
          position: location,
          map: map,
          animation: google.maps.Animation.DROP
        });
      } else {
        marker.setPosition(location);

      }

      var lat = (location.lat());
      var lon = (location.lng());
      makeRequest(lat, lon);


    };
  }
  $("#searchNow").click(function() {
    var searchLoc = $("#searchCity").val();
    console.log(searchLoc);
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
      address: searchLoc
    }, function(results, status) {
      console.log(results);
      if (status == google.maps.GeocoderStatus.OK) {
        var Lat = results[0].geometry.location.lat();
        var Lng = results[0].geometry.location.lng();
        createMap(Lat, Lng);
        makeRequest(Lat, Lng);
        var myOptions = {
          zoom: 11,
          center: new google.maps.LatLng(Lat, Lng)
        };
      }
    });
  })
    $("#1Day").click(function(){
      console.log("one");
    })
});
