// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

// compact([0, 1, false, 2, '', 3]);
// Output: [1, 2, 3]

// example 1
const compact = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};

// console.log(compact([0, 1, false, 2, "", 3]));

// Example 2
const compact2 = (arr) => {
  return arr.filter((value) => Boolean(value));
};

console.log(compact2([0, 1, false, 2, "", 3]));
