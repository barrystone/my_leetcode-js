/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const inp1 = 'egg';
const inp2 = 'add';

// const inp1 = 'foo';
// const inp2 = 'bar';

// const inp1 = 'paper';
// const inp2 = 'title';

// const inp1 = 'badc';
// const inp2 = 'baba';

// const inp1 = 'egcd';
// const inp2 = 'adfd';

var isIsomorphic = function (s, t) {
  let store1 = [],
    store2 = [];
  for (let i = 0; i < s.length; i++) {
    let isStore = 0;
    for (let j = 0; j < store1.length; j++) {
      if (s[i] === store1[j]) {
        if (t[i] !== store2[j]) return false;
        isStore = 1;
        break;
      }
    }
    for (let j = 0; j < store1.length; j++) {
      if (t[i] === store2[j]) {
        if (s[i] !== store1[j]) return false;
        isStore = 1;
        break;
      }
    }
    if (!isStore) {
      store1.push(s[i]);
      store2.push(t[i]);
    }
  }
  return true;
};

console.log(isIsomorphic(inp1, inp2));
