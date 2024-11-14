const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(numbers) {
	return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
};

const power = function(x, y) {
	return x**y;
};

const factorial = function(x) {
	let result = 1;
  for (let i = 1; i <= x; ++i) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
