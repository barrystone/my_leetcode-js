/**
 * @param {number[]} nums
 * @return {number}
 */

const inp = [3, 2, 3];
// const inp = [2, 2, 1, 1, 1, 2, 2];
// const inp = [
//   47, 47, 72, 47, 72, 47, 79, 47, 12, 92, 13, 47, 47, 83, 33, 15, 18, 47, 47,
//   47, 47, 64, 47, 65, 47, 47, 47, 47, 70, 47, 47, 55, 47, 15, 60, 47, 47, 47,
//   47, 47, 46, 30, 58, 59, 47, 47, 47, 47, 47, 90, 64, 37, 20, 47, 100, 84, 47,
//   47, 47, 47, 47, 89, 47, 36, 47, 60, 47, 18, 47, 34, 47, 47, 47, 47, 47, 22,
//   47, 54, 30, 11, 47, 47, 86, 47, 55, 40, 49, 34, 19, 67, 16, 47, 36, 47, 41,
//   19, 80, 47, 47, 27
// ];
// const inp = [8, 8, 7, 7, 7];

var majorityElement = function (nums) {
  const n = nums.length;
  let count = 1,
    j = 1;
  while (count < Math.ceil(n / 2)) {
    if (nums[0] === nums[j]) {
      count++;
      nums.splice(j, 1);
    } else j++;
    if (j === nums.length - 1 && count < Math.ceil(n / 2)) {
      nums.splice(0, 1);
      count = 1;
      j = 0;
    }
  }
  return nums[0];
};

console.log(majorityElement(inp));
