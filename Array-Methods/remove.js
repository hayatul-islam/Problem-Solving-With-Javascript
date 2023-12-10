// Removes all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with three arguments: (value, index, array).

// const evens = remove(array, function (n) {
//   return n % 2 == 0;
// });
// Output: [2,4]

// console.log(array);
// Output: [1, 3]

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const remove = (arr, cb) => {
  const result = [];
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      result.push(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }

  arr.length = 0;
  arr.push(...newArr);

  return result;
};

const evens = remove(array, (n) => n % 2 === 0);
console.log(evens);
console.log(array);
