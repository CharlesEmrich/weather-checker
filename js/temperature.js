//business logic stuff for a particular module
var Temperature = function() {
  this.temp = 0;
};

Temperature.prototype.toFahrenheit = function() {
  var fahrenheit = (9 / 5) * (this.temp - 273) + 32;
  return fahrenheit;
};

Temperature.prototype.toCelsius = function() {
  var celsius = this.temp - 273;
  return celsius;
}

exports.temperatureModule = Temperature;
