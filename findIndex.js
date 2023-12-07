// This method is like find except that it returns the index of the first element predicate returns truthy for instead of the element itself.

const users = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true },
];

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
