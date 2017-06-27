var Weather = require('./../js/weather.js').weatherModule;
var Temperature = require('./../js/temperature.js').temperatureModule;

var showWeather = function(city, temperature, humidity) {
  $('.city-name').text(city);
  $('.temp span').html(temperature + ' &#8490;');
  $('.humidity span').text(humidity + '% Humidity');
  //show map

  $('.search-view').css('display', 'none');
  $('.weather-view').css('display', 'flex');
}

$(document).ready(function() {
  var weather = new Weather();
  var temperature = new Temperature();

  $('.search-form').submit(function(e) {
    e.preventDefault();

    var city = $('input[name="city"]').val();
    $('input[name="city"]').val('');
    weather.getWeather(city, showWeather, temperature);
  });

  $('.search-again').click(function() {
    $('.weather-view').css('display', 'none');
    $('.search-view').css('display', 'flex');
  });

  $('button[name="kelvin"]').click(function() {
    $('.temp span').html(temperature.temp + ' &#8490;');
  });
  $('button[name="celsius"]').click(function() {
    $('.temp span').html(temperature.toCelsius().toFixed(2) + ' &#8451;');
  });
  $('button[name="fahrenheit"]').click(function() {
    $('.temp span').html(temperature.toFahrenheit().toFixed(2) + ' &#8457;');
  });
});
