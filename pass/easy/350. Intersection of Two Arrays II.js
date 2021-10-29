/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// const inp1 = [1, 2, 2, 1];
// const inp2 = [2, 2];

// const inp1 = [4, 9, 5];
// const inp2 = [9, 4, 9, 8, 4];

var intersect = function (nums1, nums2) {
  const store2 = [...nums2];
  let ans = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < store2.length; j++) {
      if (nums1[i] === store2[j]) {
        store2.splice(j, 1);
        ans.push(nums1[i]);
        break;
      }
    }
  }
  return ans;
};

console.log(intersect(inp1, inp2));
