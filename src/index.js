const arrayHasLength = require('array-has-length');

const arrayIsValid = (array) => {
  return !!(
    arrayHasLength(array) && arrayHasLength(array.filter((item) => !!item))
  );
};

module.exports = arrayIsValid;
