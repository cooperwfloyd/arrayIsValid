const arrayIsValid = require(`./src`);

// false
console.log('false');
console.log(arrayIsValid());
console.log(arrayIsValid(undefined));
console.log(arrayIsValid(null));
console.log(arrayIsValid(false));
console.log(arrayIsValid(0));
console.log(arrayIsValid(''));
console.log(arrayIsValid(() => null));
console.log(arrayIsValid([]));
// true
console.log('true:');
console.log(arrayIsValid(['', 'a']));
console.log(arrayIsValid([undefined, true]));
console.log(arrayIsValid([null, true]));
console.log(arrayIsValid([{}]));
console.log(arrayIsValid([true]));
console.log(arrayIsValid(['yes']));
