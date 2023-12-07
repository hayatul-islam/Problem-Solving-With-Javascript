#Array - Methods

### Array Chunk

Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

```javascript
// chunkFunc(["a", "b", "c", "d"], 2);
// Output: [["a", "b"],["c", "d"],];

// chunkFunc(["a", "b", "c", "d"], 3);
// Output: [["a", "b", "c"], ["d"]];

const chunkFunc = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

console.log(chunkFunc(["a", "b", "c", "d"], 2));
// Output: [['a', 'b'], ['c', 'd']]
```

### Array Compact

Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

```javascript
// compact([0, 1, false, 2, "", 3]);
// Output: [1, 2, 3];

//  Example: 1
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

// Example: 2
const compact2 = (arr) => {
  return arr.filter((value) => Boolean(value));
};

console.log(compact2([0, 1, false, 2, "", 3]));
```

### Array Concat

Creates a new array concatenating array with any additional arrays and/or values.

```javascript
// concat(array, 2, [3], [[4]]);
// Output: [1, 2, 3, [4]]

const concat = (...args) => {
  return [].concat(...args);
};

console.log(concat([1], 2, [3], [[4]]));
```

### Array Difference

Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

```javascript
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
```
