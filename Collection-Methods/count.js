// Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the number of times the key was returned by iteratee. The iteratee is invoked with one argument: (value).

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
