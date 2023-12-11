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

### Array Find Index

This method is like find except that it returns the index of the first element predicate returns truthy for instead of the element itself.

```javascript
const users = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true },
];

// findIndex(users, function(o) { return o.user == 'barney'; });
// Output: 0

// findIndex(users, { 'user': 'fred', 'active': false });
// Output: 1

const findIndex = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return i;
    }
  }
  return -1;
};

const index = findIndex(users, (item) => item.active === true);
console.log(index);
```

### Array Index Of

Gets the index at which the first occurrence of value is found in array using SameValueZero for equality comparisons. If fromIndex is negative, it's used as the offset from the end of array.

```javascript
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
```

### Array Join

Converts all elements in array into a string separated by separator.

```javascript
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
```

### Array Remove

Removes all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with three arguments: (value, index, array).

```javascript
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
```

### Array Reverse

Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.

```javascript
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
```

### Array Slice

Creates a slice of array from start up to, but not including, end.

```javascript
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
```

### Array Uniq

This method is like uniq except that it's designed and optimized for sorted arrays.

```javascript
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
```

# Collection - Methods

### Count

Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the number of times the key was returned by iteratee. The iteratee is invoked with one argument: (value).

```javascript
// count([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }

// count(['one', 'two', 'three'], 'length');
// => { '3': 2, '5': 1 }

const count = (collection, iteratee) => {
  const result = {};
  for (let i = 0; i < collection.length; i++) {
    const value = collection[i];
    let key;

    if (typeof iteratee === "function") {
      key = iteratee(value);
    } else if (typeof iteratee === "string") {
      key = value[iteratee];
    }
    if (result[key] === undefined) {
      result[key] = 1;
    } else {
      result[key]++;
    }
  }
  return result;
};

var result1 = count([6.1, 4.2, 6.3], Math.ceil);
var result2 = count(["one", "two", "three"], "length");
console.log(result1, result2);
```

### For Each

Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.

```javascript
// forEach([1, 2], function(value) {
//     console.log(value);
//   });
// => Logs `1` then `2`.

//   forEach({ 'a': 1, 'b': 2 }, function(value, key) {
//     console.log(key);
//   });
// => Logs 'a' then 'b'

const forEach = (collection, cb) => {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      cb(collection[i], i);
    }
  } else if (typeof collection === "object" && collection !== null) {
    for (const key in collection) {
      if (collection.hasOwnProperty(key)) {
        cb(collection[key], key);
      }
    }
  }
};

forEach([1, 2], (value) => {
  console.log(value);
});

forEach({ a: 1, b: 2 }, (value, key) => {
  console.log(key);
});
```
