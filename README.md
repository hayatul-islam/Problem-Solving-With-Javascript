# Chunk Array Function

Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

### Example:

```javascript
chunkFunc(["a", "b", "c", "d"], 2);
// Output: [['a', 'b'], ['c', 'd']]

chunkFunc(["a", "b", "c", "d"], 3);
// Output: [['a', 'b', 'c'], ['d']]

const chunkFunc = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

console.log(chunkFunc(["a", "b", "c", "d", "e", "f"], 2));
// Output: [['a', 'b'], ['c', 'd']]
```
