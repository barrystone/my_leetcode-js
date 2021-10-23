/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let store = [];
  for (let i = 0; i < nums.length; i++) {
    if (store.find((e) => e === nums[i]) === undefined) {
      store = [...store, nums[i]];
    }
  }
  nums = [...store];
  const k = store.length;
  nums.shift();
  nums.shift();
  nums.shift();

  //   return 5012345;

  return k;
  // return store;
};
