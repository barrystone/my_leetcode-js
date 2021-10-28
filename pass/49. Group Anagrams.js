/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const inp = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
// const inp = [''];
// const inp = ['a'];

var groupAnagrams = function (strs) {
  let oldStrs = [...strs];
  let sortStr = [];
  for (let i = 0; i < oldStrs.length; i++) {
    oldStrs[i] = oldStrs[i].split('').sort();
    let str = '';
    for (let j = 0; j < oldStrs[i].length; j++) {
      str += oldStrs[i][j];
    }
    sortStr.push(str);
  }

  let store = [[0]];
  for (let i = 1; i < sortStr.length; i++) {
    for (let j = 0; j < store.length; j++) {
      if (sortStr[i] === sortStr[store[j][0]]) {
        store[j].push(i);
        break;
      }
      if (j === store.length - 1) {
        store.push([i]);
        break;
      }
    }
  }
  let ans = [];
  for (let i = 0; i < store.length; i++) {
    let array = [];
    for (let j = 0; j < store[i].length; j++) {
      array.push(strs[store[i][j]]);
    }
    ans.push(array);
  }

  for (let j = 0; j < store.length; j++) {
    console.log(ans[j]);
  }
  return ans;
};

console.log(groupAnagrams(inp));

//   for (let j = 0; j < store.length; j++) {
//     console.log(store[j]);
//   }
