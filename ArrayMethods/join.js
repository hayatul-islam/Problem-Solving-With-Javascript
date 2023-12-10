// Converts all elements in array into a string separated by separator.

// join(['a', 'b', 'c'], '~');
// Output: 'a~b~c'

const arr = ["a", "b", "c"];
const join = (arr, separator) => {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    if (i < arr.length - 1) {
      result += separator;
    }
  }
  return result;
};

console.log(join(arr, "*"));
