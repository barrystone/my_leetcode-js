/**
 * @param {number} n
 * @return {boolean}
 */

const inp = 4;
// const inp = 2;
// const inp = 1;

var canWinNim = function (n) {
  return n % 4 === 0 ? false : true;
};

console.log(canWinNim(inp));
