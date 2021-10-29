/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const inp = ['h', 'e', 'l', 'l', 'o'];
// const inp = ['H', 'a', 'n', 'n', 'a', 'h'];

var reverseString = function (s) {
  const len = s.length;
  let time = len;
  for (let i = s.length - 1; time > 0; i--) {
    s.push(s[i]);
    time--;
  }
  s.splice(0, len);
};

reverseString(inp);

console.log(inp);
