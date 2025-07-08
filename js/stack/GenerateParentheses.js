// Generate Parentheses
// You are given an integer n. Return all well-formed parentheses strings that you can generate with n pairs of parentheses.

// Example 1:

// Input: n = 1

// Output: ["()"]
// Example 2:

// Input: n = 3

// Output: ["((()))","(()())","(())()","()(())","()()()"]


class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = [];

        function backtrack(current, open, close) {
            if (current.length === n * 2) {
                result.push(current);
                return;
            }

            if (open < n) {
                backtrack(current + '(', open + 1, close);
            }

            if (close < open) {
                backtrack(current + ')', open, close + 1);
            }
        }

        backtrack('', 0, 0);
        return result;
    }
}
const sol = new Solution();
console.log(sol.generateParenthesis(3));

