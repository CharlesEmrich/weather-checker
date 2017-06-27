var apiKey = require('./../.env').apiKey;

//business logic stuff for a particular module
var Weather = function() {
};

Weather.prototype.getWeather = function(location, showWeather, temperature) {
  var ourWeather = this;
  $.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
    .then(function(resp) {
      showWeather(resp.name, resp.main.temp, resp.main.humidity);
      temperature.temp = resp.main.temp;
    })
    .fail(function(error) {
      alert(error);
    });
    // .then(function(resp) {
    //   ourWeather.getMap(resp.coord.lat, resp.coord.lon);
    // });
};
//
// Weather.prototype.getMap = function(lat, long) {
//   $('#target').prop('src', `http://tile.openweathermap.org/map/temp_new/7/${lat}/${long}.png?appid=${apiKey}`);
//   // $.get(`http://tile.openweathermap.org/map/temp_new/7/${lat}/${long}.png?appid=${apiKey}`)
//   // .then(function(resp) {
//   //   console.log(resp);
//   // })
//
// }

exports.weatherModule = Weather;
