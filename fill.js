// Fills elements of array with value from start up to, but not including, end.
// Note: This method mutates array.

// fill(array, 'a');
// Output: ['a', 'a', 'a']

// fill([4, 6, 8, 10], '*', 1, 2);
// Output: [4, '*', '*', 10]

// Example 1
const fill = (arr, value, start = 0, end = arr.length) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i >= start && i <= end) {
      result.push(value);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

// Example 2
const fill2 = (arr, value, start = 0, end = arr.length) => {
  const result = arr.slice();
  for (let i = start; i <= end; i++) {
    result[i] = value;
  }

  return result;
};

console.log(fill2([1, 2, 3, 4, 5, 6], "*", 1, 4));
