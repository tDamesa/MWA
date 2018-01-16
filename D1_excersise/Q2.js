String.prototype.filterWords = function(arrStr) {
  let newVal = this;
  for (let val of arrStr) {
    newVal = newVal.replace(val, '***');
  }
  return newVal;
};
console.log('this house is nice!'.filterWords(['house', 'nice']));
