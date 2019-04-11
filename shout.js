// Shout

function shout(str) {
    return str[0].toUpperCase() + str.slice(1) + '!!!';
}
      
console.log(shout('help me') === 'Help me!!!');
console.log(shout('i like you') === 'I like you!!!');
console.log(shout('you are crazy') === 'You are crazy!!!');
