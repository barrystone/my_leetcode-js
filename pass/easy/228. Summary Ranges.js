/**
 * @param {number[]} nums
 * @return {string[]}
 */

const inp = [0, 1, 2, 4, 5, 7];
// const inp = [0, 2, 3, 4, 6, 8, 9];
// const inp = [];
// const inp = [-1];

var summaryRanges = function (nums) {
  let i = 0,
    ans = [];
  while (i < nums.length) {
    let j;
    for (j = i; j < nums.length; j++) {
      if (nums[j] + 1 !== nums[j + 1]) break;
    }
    if (i == j) ans.push(`${nums[i]}`);
    else ans.push(`${nums[i]}->${nums[j]}`);
    i = j + 1;
  }
  return ans;
};

console.log(summaryRanges(inp));
