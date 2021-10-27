/**
 * @param {number[]} nums
 * @return {number}
 */

const inp = [2, 2, 1];
// const inp = [4, 1, 2, 1, 2];
// const inp = [1];

var singleNumber = function (nums) {
  let store = [[null, 0]];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < store.length; j++) {
      if (nums[i] === store[j][0]) {
        store[j][1]++;
        break;
      }
      if (j === store.length - 1) {
        store.push([nums[i], 1]);
        break;
      }
    }
  }
  for (let j = 0; j < store.length; j++) {
    if (store[j][1] === 1) return store[j][0];
  }
  return -1;
};

console.log(singleNumber(inp));
