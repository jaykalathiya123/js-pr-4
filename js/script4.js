function rectangle(length, height) {
    if (length >= 0 && height >= 0) {

        return length * height;
    } else {
        return "Invalid length or height.";
    }
}
var length = 10;
var rectangleHeight = 5;
var rectangleArea = rectangle(length, rectangleHeight);

console.log("The area of the rectangle is:", rectangleArea);
