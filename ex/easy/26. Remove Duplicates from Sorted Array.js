/**
 * @param {number[]} nums
 * @return {number}
 */
const inp = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

var removeDuplicates = function (nums) {
  let store = [];
  for (let i = 0; i < nums.length; i++) {
    if (store.find((e) => e === nums[i]) === undefined) {
      store = [...store, nums[i]];
    }
  }

  nums = [...store];
  const k = store.length;
  store.shift();

  //   return k;
  return store;
};

console.log(removeDuplicates(inp));
