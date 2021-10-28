/**
 * @param {number[]} prices
 * @return {number}
 */

const inp = [7, 1, 5, 3, 6, 4];
// const inp = [7, 6, 4, 3, 1];
// const inp = [1, 2];
// const inp = [2, 4, 1];

var maxProfit = function (prices) {
  let ans = 0,
    min = prices[0],
    max;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] <= min) {
      min = prices[i];
      max = prices[i + 1];
      for (let j = i + 1; j < prices.length; j++) {
        if (max < prices[j]) max = prices[j];
      }
    }
    if (max - min > ans) ans = max - min;
  }
  return ans;
};

console.log(maxProfit(inp));
