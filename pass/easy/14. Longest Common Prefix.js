/**
 * @param {string[]} strs
 * @return {string}
 */

const inp = ['flower', 'flow', 'flight'];
// const inp = ['dog', 'racecar', 'car'];
// const inp = ['abb', 'abc'];
// const inp = ['abca', 'abc'];

var longestCommonPrefix = function (strs) {
  let common = strs[0];

  let maxStrLength = 0;
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length > maxStrLength) maxStrLength = strs[i].length;
  }

  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j <= maxStrLength; j++) {
      if (common[j] !== strs[i][j]) {
        common = common.slice(0, j);
      }
    }
  }

  return common;
};

console.log(longestCommonPrefix(inp));
