// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

//Input
const nums1 = [2, 7, 11, 15];
const target1 = 9;

var twoSum = function (nums, target) {
  let sum = 0,
    idx1,
    idx2;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[i];
      if (nums[i] + nums[j] === target) {
        idx1 = i;
        idx2 = j;
      }
    }
  }

  return [idx1, idx2];
};

console.log(twoSum(nums1, target1));
