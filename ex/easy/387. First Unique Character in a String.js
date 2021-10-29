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
  let strArray = s.split('');
  // let store =[]
  while (i < strArray.length) {
    // console.log(strArray);
    if (strArray[i] === strArray[charIdx]) {
      console.log(strArray[charIdx], i, charIdx);
      charIdx++;
      // console.log(strArray);
      strArray = strArray
        .splice(0, charIdx)
        .concat(strArray.filter((e) => e !== strArray[charIdx]));

      // console.log(strArray);
    } else i++;
  }
  return charIdx === strArray.length ? -1 : charIdx;
};

console.log(firstUniqChar(inp));
