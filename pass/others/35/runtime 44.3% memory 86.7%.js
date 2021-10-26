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

var searchInsert = function (nums, target) {
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      ans = i;
      break;
    } else if (nums[i] < target) {
      ans = i + 1;
    } else {
      ans = i;
      break;
    }
  }

  return ans;
};

console.log(searchInsert(inp1, inp2));
