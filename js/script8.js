var celsiusTemperature = 20;
var fahrenheitTemperature = temp(celsiusTemperature);

function temp(celsius) {

    return (celsius * 1.8) + 32;
}
console.log(celsiusTemperature + " degrees Celsius is equal to " + fahrenheitTemperature.toFixed(2) + " degrees Fahrenheit.");
