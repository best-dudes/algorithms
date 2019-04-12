function repeatStr(times, str) {
    if (times > 0) {
        return str.repeat(times);
    } else {
        return "";
    }
}
      
console.log(repeatStr(2, 'Hello') === 'Hello Hello');
console.log(repeatStr(3, 'i like you') === 'i like you i like you i like you');
console.log(repeatStr(9, 'ahah') === 'ahah ahah ahah ahah ahah ahah ahah ahah ahah');
