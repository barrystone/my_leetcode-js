/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const inp = [2, 0, 2, 1, 1, 0];

var sortColors = function (nums) {
  let array = [...nums];
  let ans = [];
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < array.length - 1; ) {
    console.log('old', i, array);
    let item = array[0];

    for (let j = i; j < array.length; j++) {
      if (array[j] >= array[j + 1]) {
        swap(array, j, j + 1);
        console.log('new', i, array);
      }
    }
    if (array[0] === item) {
      i++;
    } else {
      i = 0;
    }
  }

  console.log(nums);
  console.log(array);
  //   return array;
};

console.log(sortColors(inp));
