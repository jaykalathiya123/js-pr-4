var x = 5;
var y = 10;

function swap(a, b) {

    a = a + b;
    b = a - b;
    a = a - b;

    console.log("swapped",a,b);
}
swap(x, y);
