/**
 * @param {string} s
 * @return {number}
 */

// const inp = 'abcabcbb';
// const inp = 'bbbbb';
const inp = 'pwwkew';

var lengthOfLongestSubstring = function (s) {
  let max = 1,
    j = 0;
  for (let i = 0; i < s.length - 1; i = j) {
    let count = 1;
    j = i + 1;
    console.log('i', i, j);
    // console.log('s', s[i], s[j]);
    while (s[j] !== s[i] && i < s.length - 1) {
      console.log('si', i, j);
      console.log('string', s[i], s[j]);

      count++;
      i++;
      j++;
      //   console.log(j);
    }
    console.log('i end', i, j);

    if (count > max) max = count;
    console.log('count', count);
  }
  return max;
};

console.log(lengthOfLongestSubstring(inp));
