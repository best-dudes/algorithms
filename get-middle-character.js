// Get Middle Character
// If word has odd count of characters, return the middle one character
// If even, return two characters, which mostly in the middle

// Examples:

// test: es
// testing: t
// middle: dd
// A: A

function getMiddleCharacter(n) {
	if (n.length % 2 === 1) {
		return n[n.length - Math.floor((n.length /2) + 1)];
	} else {
		return n[(n.length/2) - 1] + n[(n.length/2)] ;
}
}

console.log(getMiddleCharacter('test') === 'es');
console.log(getMiddleCharacter('testing') === 't');
console.log(getMiddleCharacter('middle') === 'dd');
console.log(getMiddleCharacter('A') === 'A');
