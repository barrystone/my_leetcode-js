/**
 * @param {number[]} nums
 * @return {number}
 */

// const inp = [3, 0, 1];
// const inp = [0, 1];
const inp = [9, 6, 4, 2, 3, 5, 7, 0, 1];
// const inp = [0];

var missingNumber = function (nums) {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = 0; j <= nums.length; j++) {
      if (nums[j] === i) break;
      if (j === nums.length - 1) return i;
    }
  }
  return nums;
};

console.log(missingNumber(inp));
