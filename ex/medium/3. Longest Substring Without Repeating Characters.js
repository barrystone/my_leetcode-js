/**
 * @param {string} s
 * @return {number}
 */

const inp = 'abcabcbb';
// const inp = 'bbbbb';
// const inp = 'pwwkew';

var lengthOfLongestSubstring = function (s) {
  let max = 1;
  let store = ['1'];

  let i = 0;
  while (i < s.length - 1) {
    for (let j = 0; j < store.length && i < s.length - 1; j++) {
      console.log('store', i, store);

      if (s[i] === store[j]) {
        i = j;
        console.log(i, s[i]);
        console.log(store.length - 1);
        store = ['1'];
        break;
      }

      if (j === store.length - 1) {
        store.push(s[i]);
        // console.log('store', i, store);
        // break;
        i++;
      }
    }
    // console.log(store.length - 1);
    if (store.length - 1 > max) max = store.length - 1;
  }
  return max;
};

console.log(lengthOfLongestSubstring(inp));
