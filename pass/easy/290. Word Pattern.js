/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

// const inp1 = 'abba';
// const inp2 = 'dog cat cat dog';

// const inp1 = 'abba';
// const inp2 = 'dog cat cat fish';

// const inp1 = 'aaaa';
// const inp2 = 'dog cat cat dog';

// const inp1 = 'abba';
// const inp2 = 'dog dog dog dog';

const inp1 = 'a';
const inp2 = 'b v';

var wordPattern = function (pattern, s) {
  let store = [[null, []]];
  for (let i = 0; i < pattern.length; i++) {
    for (let j = 0; j < store.length; j++) {
      if (pattern[i] === store[j][0]) {
        store[j][1].push(i);
        break;
      }
      if (j === store.length - 1) store.push([pattern[i], []]);
    }
  }
  let sArray = s.split(' ');
  if (pattern.length !== sArray.length) return false;
  for (let i = 0; i < store.length; i++) {
    let word = sArray[store[i][1][0]];
    for (let j = 0; j < store.length; j++) {
      if (sArray[store[j][1][0]] === word) {
        if (i === j) continue;
        else return false;
      }
    }
  }
  for (let i = 1; i < store.length; i++) {
    let word = sArray[store[i][1][0]];
    for (let j = 1; j < store[i][1].length; j++) {
      if (word !== sArray[store[i][1][j]]) return false;
    }
  }
  return true;
};

console.log(wordPattern(inp1, inp2));
