/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

const inp = 0b00000010100101000001111010011100;
// const inp = 0b00000010100101000001111010011101;
// const inp = 0b11111111111111111111111111111101;

var reverseBits = function (n) {
  let str = '';
  let powNumber = 31;
  while (n >= 0 && powNumber >= 0) {
    if (n - Math.pow(2, powNumber) >= 0) {
      str += '1';
      n -= Math.pow(2, powNumber);
    } else str += '0';
    powNumber--;
  }
  let rstr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    rstr += str[i];
  }
  let sum = 0;
  let rstrRemain = 31;
  while (rstrRemain >= 0) {
    if (rstr[rstrRemain] === '1') sum += Math.pow(2, 31 - rstrRemain);
    rstrRemain--;
  }
  return sum;
};

console.log(reverseBits(inp));
