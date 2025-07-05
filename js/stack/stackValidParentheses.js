// Valid Parentheses

// You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.
// The input string s is valid if and only if:
// Every open bracket is closed by the same type of close bracket.
// Open brackets are closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Return true if s is a valid string, and false otherwise.

function isValid(s) {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack.pop() !== map[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
console.log(isValid("[]"));
