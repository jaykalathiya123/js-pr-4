function circle(radius) {

    if (radius >= 0) {
        return Math.PI * radius * radius;
    } else {
        return "Invalid radius.";
    }
}

var radius = 5;
var circleArea = circle(radius);

console.log("The area of the circle with radius", radius, "is:", circleArea);
