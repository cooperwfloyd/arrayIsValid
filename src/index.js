const arrayIsValid = (array, shouldHaveLength = true) => {
  return !!(
    !!array &&
    Array.isArray(array) &&
    (shouldHaveLength === true
      ? !!array?.filter((item) => !!item)?.length
      : true)
  );
};

module.exports = arrayIsValid;
