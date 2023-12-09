// Creates a slice of array from start up to, but not including, end.

// slice(array, 1, 2)
// Output: [2, 3];

const array = [1, 2, 3, 4, 5, 6];
const slice = (arr, start = 0, end = arr.length) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(arr[i]);
  }
  return result;
};

console.log(slice(array, 2, 4));
