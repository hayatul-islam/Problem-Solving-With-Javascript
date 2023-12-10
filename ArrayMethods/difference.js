// Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

// difference([2, 1], [2, 3]);
// Output: [1]

// Example 1
const difference = (arr, ...args) => {
  const allValues = [...new Set([].concat(...args))];
  const result = [];

  for (const value of arr) {
    const included = allValues.includes(value);
    if (!included) {
      result.push(value);
    }
  }

  return result;
};

// Example 2
const difference2 = (arr, ...args) => {
  const allValues = [...new Set([].concat(...args))];
  return arr.filter((value) => !allValues.includes(value));
};

console.log(difference2([2, 1], [2, 3]));
