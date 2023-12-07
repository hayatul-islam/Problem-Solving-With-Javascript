// Creates a new array concatenating array with any additional arrays and/or values.

// concat(array, 2, [3], [[4]]);
// Output: [1, 2, 3, [4]]

// Example 1
const concat = (...args) => {
  let result = [];

  for (let i = 0; i < args.length; i++) {
    const arr = args[i];
    if (Array.isArray(arr)) {
      for (const value of arr) {
        result.push(value);
      }
    } else {
      result.push(arr);
    }
  }

  return result;
};

// Example 2
const concat2 = (...args) => {
  return [].concat(...args);
};

console.log(concat2([1], 2, [3], [[4]]));
