// This method is like uniq except that it's designed and optimized for sorted arrays.

// uniq(array)
// Output: [1, 2, 3];

const array = [1, 2, 3, 4, 5, 3, 4];

const uniq = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (!result.includes(value)) {
      result.push(value);
    }
  }
  return result;
};

console.log(uniq(array));
