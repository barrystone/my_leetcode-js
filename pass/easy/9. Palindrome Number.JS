/**
 * @param {number} x
 * @return {boolean}
 */

//Input
const inp = 121;

var isPalindrome = function (x) {
  let ans = false;
  let str = x.toString();
  let rstr = '';

  let rstrIdx = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    rstr = rstr.concat(str[i]);
    rstrIdx++;
  }

  if (str === rstr) {
    ans = true;
  } else {
    ans = false;
  }

  return ans;
};

console.log(isPalindrome(inp));
