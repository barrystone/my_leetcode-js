/**
 * @param {string} s
 * @return {number}
 */

//Input
const inp = 'III';
// const inp = 'MCMXCIV';

var romanToInt = function (s) {
  let symbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  let values = [1, 5, 10, 50, 100, 500, 1000];
  let str = s;
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    let skip = 0;
    symbols.forEach((symbol, idx) => {
      if (str[i] === symbol) {
        if (str[i] === 'I' && str[i + 1] === 'V') {
          sum += 4;
          skip = 1;
        } else if (str[i] === 'I' && str[i + 1] === 'X') {
          sum += 9;
          skip = 1;
        } else if (str[i] === 'X' && str[i + 1] === 'L') {
          sum += 40;
          skip = 1;
        } else if (str[i] === 'X' && str[i + 1] === 'C') {
          sum += 90;
          skip = 1;
        } else if (str[i] === 'C' && str[i + 1] === 'D') {
          sum += 400;
          skip = 1;
        } else if (str[i] === 'C' && str[i + 1] === 'M') {
          sum += 900;
          skip = 1;
        } else {
          sum += values[idx];
          skip = 0;
        }
      }
    });
    i += skip;
  }

  return sum;
};

console.log(romanToInt(inp));
