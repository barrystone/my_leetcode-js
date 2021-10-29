/**
 * @param {number[]} digits
 * @return {number[]}
 */

const inp = [1, 2, 3];
// const inp = [4, 3, 2, 1];
// const inp = [0];
// const inp = [9];
// const inp = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
// const inp = [6, 9, 9, 9];

var plusOne = function (digits) {
  let ans = [...digits];
  let index = ans.length - 1;

  while (ans[index] === 9) {
    ans[index] = 0;
    if (index === 0) {
      return [1, ...ans];
    }
    index--;
  }

  ans[index] = ans[index] + 1;

  return ans;
};

console.log(plusOne(inp));
