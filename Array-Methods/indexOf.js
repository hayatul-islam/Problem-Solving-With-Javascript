// Gets the index at which the first occurrence of value is found in array using SameValueZero for equality comparisons. If fromIndex is negative, it's used as the offset from the end of array.

// indexOf([1, 2, 1, 2], 2);
// Output:  1

// indexOf([1, 2, 1, 2], 2, 2);
// Output: 3

const arr = [1, 2, 3, 4, 5, 3, 6];

const findIndex = (arr, value, from = 0) => {
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
};

console.log(findIndex(arr, 3, 3));
