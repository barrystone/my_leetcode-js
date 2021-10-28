/**
 * @param {number} numRows
 * @return {number[][]}
 */

const inp = 5;
// const inp = 1;

var generate = function (numRows) {
  let ans = [];
  for (let i = 1; i <= numRows; i++) {
    let row = [];
    for (let j = 0; j < i; j++) {
      if (j === 0 || j === i - 1) row.push(1);
      else row.push(ans[i - 2][j - 1] + ans[i - 2][j]);
    }
    ans.push(row);
  }
  return ans;
};

console.log(generate(inp));
