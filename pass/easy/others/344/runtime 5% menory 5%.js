/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const inp = ['h', 'e', 'l', 'l', 'o'];
// const inp = ['H', 'a', 'n', 'n', 'a', 'h'];

var reverseString = function (s) {
  let time = s.length;
  for (let i = s.length - 1; time > 0; i--) {
    s.push(s[i]);
    s.splice(i, 1);
    time--;
  }
};

reverseString(inp);

console.log(inp);
