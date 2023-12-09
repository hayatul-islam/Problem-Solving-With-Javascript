// Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.

// reverse(array);
// Output: [3, 2, 1]

// console.log(array);
// Output: [3, 2, 1]

const array = [1, 2, 3];

// Example 1
const reverse = (arr) => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
};

// Example 2
const reverse2 = (arr) => {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  arr.length = 0;
  arr.push(...result);
  return result;
};

console.log(reverse2(array));
console.log(array);
