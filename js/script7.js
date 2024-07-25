var ftemp = 68;
var celsiusTemperature = convert(ftemp);

function convert(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}
console.log(ftemp + " degrees Fahrenheit is equal to " + celsiusTemperature.toFixed(2) + " degrees Celsius.");
