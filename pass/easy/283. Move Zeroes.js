/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

let inp = [0, 1, 0, 3, 12];
// const inp = [0];
// const inp = [0, 0, 1];

var moveZeroes = function (nums) {
  const oLen = nums.length;
  for (let i = 0; i < oLen; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      i--;
    }
  }
  const cutLen = oLen - nums.length;
  for (let j = 0; j < cutLen; j++) {
    nums.push(0);
  }
};

moveZeroes(inp);

console.log(inp);
