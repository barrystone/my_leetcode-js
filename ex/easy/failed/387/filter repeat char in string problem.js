/**
 * @param {string} s
 * @return {number}
 */

// const inp = 'leetcode';
// const inp = 'loveleetcode';
// const inp = 'aabb';
const inp = 'asdasdansdjakdjn';

var firstUniqChar = function (s) {
  let charIdx = 0,
    i = 1;
  // let store =[]
  while (i < s.length) {
    console.log(s[charIdx], i);
    if (s[i] === s[charIdx]) {
      charIdx++;
      console.log(s);
      // s.split('').map((e) => console.log('e', e));
      // s = s.replace('a', '');
      console.log(s);
    } else i++;
  }
  return charIdx === s.length ? -1 : charIdx;
};

console.log(firstUniqChar(inp));
