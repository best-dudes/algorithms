// Is Integer
// Check if number has no fraction

// Examples:

// 1: true
// 1.1: false

function isInteger(n) {
return Number.isInteger(n);
}

console.log(isInteger(0) === true);
console.log(isInteger(1) === true);
console.log(isInteger(-1) === true);
console.log(isInteger(1.9) === false);
console.log(isInteger(0.01) === false);

