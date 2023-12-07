// Creates a new array concatenating array with any additional arrays and/or values.

// concat(array, 2, [3], [[4]]);
// Output: [1, 2, 3, [4]]

const concat = (...args) => {
  return [].concat(...args);
};

console.log(concat([1], 2, [3], [[4]]));
