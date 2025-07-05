// Minimum Stack
// Design a stack class that supports the push, pop, top, and getMin operations.

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// Each function should run in
// O
// (
// 1
// )
// O(1) time.

class MinStack {
  constructor() {
    this.stack = [];   
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    const min = this.minStack.length === 0
      ? val
      : Math.min(val, this.minStack[this.minStack.length - 1]);
    this.minStack.push(min);
  }

  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
const minStack = new MinStack();
minStack.push(5);
minStack.push(2);
minStack.push(7);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top());
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.getMin());
