### Chunk Array Function

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

### Compact Array Function

Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

```javascript
compact([0, 1, false, 2, "", 3]);
Output: [1, 2, 3];

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
