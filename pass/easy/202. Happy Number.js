/**
 * @param {number} n
 * @return {boolean}
 */

const inp = 19;
// const inp = 2;
// const inp = 15;
// const inp = 2312389;

var isHappy = function (n) {
  let nStr = n.toString();
  let sum;
  while (sum !== 4) {
    sum = 0;
    for (let i = 0; i < nStr.length; i++) {
      sum += Math.pow(Number(nStr[i]), 2);
    }
    nStr = sum.toString();
    if (sum === 1) return true;
  }
  return false;
};

console.log(isHappy(inp));
