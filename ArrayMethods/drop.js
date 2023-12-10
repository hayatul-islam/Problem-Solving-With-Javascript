// Creates a slice of array with n elements dropped from the beginning.

// drop([1, 2, 3]);
// Output: [2, 3]

// drop([1, 2, 3], 2);
// Output: [3]

// Example 1
const drop = (arr, n = 1) => {
  const result = [];
  for (let i = n; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
};

// Example 2
const drop2 = (arr, n = 1) => {
  return arr.slice(n);
};

console.log(drop2([1, 2, 3], 0));
