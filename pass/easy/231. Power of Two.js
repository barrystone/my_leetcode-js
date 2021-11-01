/**
 * @param {number} n
 * @return {boolean}
 */

// const inp = 1;
const inp = 2147483648;

var isPowerOfTwo = function (n) {
  let i = 0;
  while (Math.pow(2, i) <= n) {
    if (Math.pow(2, i) === n) return true;
    i++;
  }
  return false;
};

console.log(isPowerOfTwo(inp));
