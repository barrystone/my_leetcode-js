/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const inp = [2, 0, 2, 1, 1, 0];

var sortColors = function (nums) {
  bubbleSort = (arr) => {
    const swap = (arr, idx1, idx2) =>
      ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
    let noSwap;
    for (let i = arr.length; i > 0; i--) {
      noSwap = true;
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
          noSwap = false;
        }
      }
      if (noSwap) break;
    }
    return arr;
  };
  bubbleSort(nums);
};

sortColors(inp);

console.log(inp);
