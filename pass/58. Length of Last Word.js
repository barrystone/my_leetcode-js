/**
 * @param {string} s
 * @return {number}
 */

const inp = 'Hello World';
// const inp = '   fly me   to   the moon  ';
// const inp = 'luffy is still joyboy';
// const inp = '';

var lengthOfLastWord = function (s) {
  if (s) {
    let store = [...s.split(' ')];
    let subStore = [];

    for (let i = 0; i < store.length; i++) {
      if (store[i]) {
        subStore = [...subStore, store[i]];
      }
    }
    return subStore[subStore.length - 1].length;
  } else {
    return 0;
  }
};

console.log(lengthOfLastWord(inp));
