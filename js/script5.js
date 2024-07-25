var a = 2;
var b = 5;
var c = -3;
var result = quadratic(a, b, c);

function quadratic(a, b, c) {

    if (a !== 0) {a
        return ((b * b) - (4 * a * c)) / (2 * a);
    } else {
        return "Invalid input. 'a' cannot be equal to 0 for the quadratic formula.";
    }
}

console.log("The result of ((b*b) - (4*a*c)) / (2*a) for the given coefficients is:", result);
