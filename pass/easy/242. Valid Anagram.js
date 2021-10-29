/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// const inp1 = 'anagram';
// const inp2 = 'nagaram';

const inp1 = 'rat';
const inp2 = 'car';

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let store = [[null, 0]];
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < store.length; j++) {
      if (s[i] === store[j][0]) {
        store[j][1]++;
        break;
      }
      if (i === store.length - 1) store.push([s[i], 0]);
    }
  }
  for (let i = 0; i < t.length; i++) {
    for (let j = 0; j < store.length; j++) {
      if (t[i] === store[j][0]) {
        store[j][1]--;
        break;
      }
    }
  }
  for (let j = 0; j < store.length; j++) {
    if (store[j][1] !== 0) return false;
  }
  return true;
};

console.log(isAnagram(inp1, inp2));
