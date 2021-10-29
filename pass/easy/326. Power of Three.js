/**
 * @param {number} n
 * @return {boolean}
 */

// const inp = 27;
// const inp = 0;
// const inp = 9;
const inp = 45;

var isPowerOfThree = function (n) {
  let powNumber = 0;
  while (Math.pow(3, powNumber) <= n) {
    if (Math.pow(3, powNumber) === n) return 1;
    else powNumber++;
  }
  return 0;
};

console.log(isPowerOfThree(inp));
