/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const inp1 = '11';
const inp2 = '1';

// const inp1 = '1010';
// const inp2 = '1011';

// const inp1 = '1';
// const inp2 = '111';

// const inp1 = '10111';
// const inp2 = '1010000';

var addBinary = function (a, b) {
  const maxLastIndex = (a.length < b.length ? b.length : a.length) - 1;
  let aStr = '',
    bStr = '';
  for (let i = a.length - 1; i >= 0; i--) {
    aStr = aStr.concat(a[i]);
  }
  for (let i = b.length - 1; i >= 0; i--) {
    bStr = bStr.concat(b[i]);
  }

  let ans = '';
  let isCarry = 0;

  for (let i = 0; i <= maxLastIndex; i++) {
    if (aStr[i] === undefined || bStr[i] === undefined) {
      if (bStr[i] === '1' || aStr[i] === '1') {
        if (isCarry) {
          ans = '0' + ans;
          isCarry = 1;
        } else {
          ans = '1' + ans;
        }
      } else {
        if (isCarry) {
          ans = '1' + ans;
          isCarry = 0;
        } else {
          ans = '0' + ans;
        }
      }
    } else {
      if (aStr[i] === '1' && bStr[i] === '1') {
        if (isCarry) {
          ans = '1' + ans;
          isCarry = 1;
        } else {
          ans = '0' + ans;
          isCarry = 1;
        }
      } else if (aStr[i] === '0' && bStr[i] === '0') {
        if (isCarry) {
          ans = '1' + ans;
          isCarry = 0;
        } else {
          ans = '0' + ans;
        }
      } else {
        if (isCarry) {
          ans = '0' + ans;
        } else {
          ans = '1' + ans;
        }
      }
    }
  }

  if (isCarry) {
    ans = '1' + ans;
  }

  return ans;
};

console.log(addBinary(inp1, inp2));
