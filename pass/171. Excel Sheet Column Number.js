/**
 * @param {string} columnTitle
 * @return {number}
 */

const inp = 'A';
// const inp = 'AB';
// const inp = 'ZY';
// const inp = 'FXSHRXW';

var titleToNumber = function (columnTitle) {
  let strLen = columnTitle.length;
  let ans = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    ans += Math.pow(26, strLen - 1) * (columnTitle[i].charCodeAt(0) - 64);
    strLen--;
  }
  return ans;
};

console.log(titleToNumber(inp));
