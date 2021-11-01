/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// const inp1 = 'abc';
// const inp2 = 'ahbgdc';

// const inp1 = 'axc';
// const inp2 = 'ahbgdc';

const inp1 = 'a';
const inp2 = 'ab';

var isSubsequence = function (s, t) {
  let i = 0;
  for (let j = 0; j < t.length; j++) {
    if (t[j] === s[i]) i++;
  }
  return i === s.length ? true : false;
};

console.log(isSubsequence(inp1, inp2));
