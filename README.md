# Array - Methods

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

// Example 1
const concat = (...args) => {
  let result = [];

  for (let i = 0; i < args.length; i++) {
    const arr = args[i];
    if (Array.isArray(arr)) {
      for (const value of arr) {
        result.push(value);
      }
    } else {
      result.push(arr);
    }
  }

  return result;
};

// Example 2
const concat2 = (...args) => {
  return [].concat(...args);
};

console.log(concat2([1], 2, [3], [[4]]));
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

### Array Drop

Creates a slice of array with n elements dropped from the beginning.

```javascript
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
```

### Array Fill

Fills elements of array with value from start up to, but not including, end.
Note: This method mutates array.

```javascript
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
```
