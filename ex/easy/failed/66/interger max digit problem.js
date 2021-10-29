/**
 * @param {number[]} digits
 * @return {number[]}
 */

// const inp = [1, 2, 3];
// const inp = [4, 3, 2, 1];
// const inp = [0];
// const inp = [9];
const inp = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];

var plusOne = function (digits) {
  let str = '';
  for (let i = 0; i < digits.length; i++) {
    str = str + digits[i];
  }
  let interger = Number(str) + 1;

  return interger.toString().split('');
};

console.log(plusOne(inp));
