/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// const inp = 0b10;
const inp = 0b00000000000000000000000000001011;
// const inp = 0b00000000000000000000000010000000;
// const inp = 0b11111111111111111111111111111101;

var hammingWeight = function (n) {
  let powNumber = 32;
  let sum = 0;
  while (n !== 0 && powNumber >= 0) {
    if (n >= Math.pow(2, powNumber)) {
      n -= Math.pow(2, powNumber);
      sum += 1;
      powNumber--;
    } else powNumber--;
  }
  return sum;
};

console.log(hammingWeight(inp));
