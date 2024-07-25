function triangle(base, height) {
    if (base >= 0 && height >= 0) {
        return (base * height) / 2;
    } else {
        return "Invalid base or height.";
    }
}
var base = 6;
var height = 8;
var triangleArea = triangle(base, height);

console.log("The area of the triangle is:", triangleArea);
