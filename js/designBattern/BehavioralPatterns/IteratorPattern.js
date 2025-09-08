function createIterator(array) {
  let index = 0;
  return {
    next: function() {
      return index < array.length
        ? { value: array[index++], done: false }
        : { done: true };
    }
  };
}

const iterator = createIterator(["A", "B", "C"]);

console.log(iterator.next()); // { value: "A", done: false }
console.log(iterator.next()); // { value: "B", done: false }
console.log(iterator.next()); // { value: "C", done: false }
console.log(iterator.next()); // { done: true }
