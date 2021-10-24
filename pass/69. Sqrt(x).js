/**
 * @param {number} x
 * @return {number}
 */

const inp = 2;
// const inp = 8;
// const inp = 9;
// const inp = 11;
// const inp = 17;
// const inp = 2147483648 - 1;
// const inp = 0;
// const inp = 2147395599;

var mySqrt = function (x) {
  if (x === 0) return 0;
  const maxSqrtDigits = Math.ceil(x.toString().length / 2);

  let i = 9;
  for (let j = i * Math.pow(10, maxSqrtDigits); j >= 1; j--) {
    if (j * j <= x) {
      return j;
    }
    i--;
  }
};

console.log(mySqrt(inp));
