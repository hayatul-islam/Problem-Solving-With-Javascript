// Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.

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
