/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const inp1 = [1, 3, 5, 6];
const inp2 = 5;

// const inp1 = [1, 3, 5, 6];
// const inp2 = 2;

// const inp1 = [1, 3, 5, 6];
// const inp2 = 7;

// const inp1 = [1, 3, 5, 6];
// const inp2 = 0;

// const inp1 = [1];
// const inp2 = 0;

// const inp1 = [1, 3];
// const inp2 = 0;

// const inp1 = [1, 3];
// const inp2 = 4;

// Learning binary search
var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (nums[mid] !== target && start < end) {
    if (nums[mid] < target) start = mid + 1;
    else end = mid;
    mid = Math.floor((start + end) / 2);
  }
  return nums[mid] === target ? mid : target > nums[mid] ? mid + 1 : mid;
};

console.log(searchInsert(inp1, inp2));
