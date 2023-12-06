// chunk(["a", "b", "c", "d"], 2)
// Output: [['a', 'b'], ['c', 'd']]

// chunk(['a', 'b', 'c', 'd'], 3);
// Output: [['a', 'b', 'c'], ['d']]

// Solution:
const chunkFunc = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

console.log(chunkFunc(["a", "b", "c", "d", "e", "f"], 2));
console.log(chunkFunc(["a", "b", "c", "d", "e", "f"], 3));
console.log(chunkFunc(["a", "b", "c", "d", "e", "f"], 4));
