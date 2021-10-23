/**
 * @param {number[]} nums
 * @return {number}
 */

const inp = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const inp = [1];
// const inp = [-1];
// const inp = [5, 4, -1, 7, 8];

var maxSubArray = function (nums) {
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum > max) max = sum;
    }
  }

  return max;
};

console.log(maxSubArray(inp));
