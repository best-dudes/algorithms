// Has fraction
// Check if number has fraction

// Examples:

// 1: false
// 1.1: true

function hasFraction(n) {
return Number.isInteger(n);
}

console.log(hasFraction(0) === false);
console.log(hasFraction(1) === false);
console.log(hasFraction(-1) === false);
console.log(hasFraction(1.9) === true);
console.log(hasFraction(0.01) === true);
