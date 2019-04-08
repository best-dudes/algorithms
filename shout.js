// Shout

function shout(str) {
<<<<<<< HEAD
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1) + '!!!';
}
      
=======
}
>>>>>>> e7032be99f3353b6b2b47474db60c563e974c85e

console.log(shout('help me') === 'Help me!!!');
console.log(shout('i like you') === 'I like you!!!');
console.log(shout('you are crazy') === 'You are crazy!!!');
