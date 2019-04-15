// repeatStr

function repeatStr(times, str) {
	var repeatedString = '';

	
	for (var i = 0; i < times; i++) {
	
		repeatedString += str + ' ';
	} 	
	return repeatedString.trimEnd();
}
      
console.log(repeatStr(2, 'Hello') === 'Hello Hello');
console.log(repeatStr(3, 'i like you') === 'i like you i like you i like you');
console.log(repeatStr(9, 'ahah') === 'ahah ahah ahah ahah ahah ahah ahah ahah ahah');
