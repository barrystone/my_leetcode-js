/**
 * @param {number} num
 * @return {number}
 */

// const inp = 38;
// const inp = 0;
// const inp = 2147483647;
// const inp = 10;

var addDigits = function (num) {
  let sum = num;
  while (sum >= 10) {
    strArray = sum.toString().split('');
    sum = 0;
    for (let i = 0; i < strArray.length; i++) {
      sum += Number(strArray[i]);
    }
  }
  return sum;
};

console.log(addDigits(inp));
