/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const inp1 = 'hello';
const inp2 = 'll';

// const inp1 = 'aaaaa';
// const inp2 = 'bba';

// const inp1 = 'test';
// const inp2 = '';

// const inp1 = 'aaa';
// const inp2 = 'a';

// const inp1 = 'aaa';
// const inp2 = 'aaaa';

// const inp1 = 'mississippi';
// const inp2 = 'issip';

var strStr = function (haystack, needle) {
  let ans = -1;
  if (!needle) {
    ans = 0;
  } else if (needle.length <= haystack.length) {
    for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] === needle[0]) {
        let status = 1;
        for (let j = 1; j < needle.length; j++) {
          if (haystack[i + j] !== needle[j]) {
            status = 0;
            break;
          }
        }
        if (status) {
          ans = i;
          break;
        }
      }
    }
  }

  return ans;
};

console.log(strStr(inp1, inp2));
