/**
 * @param {string} s
 * @return {boolean}
 */
// const inp = '()';
// const inp = '()[]{}';
// const inp = '(}';
// const inp = '([)]';
// const inp = '([{]]})';
// const inp = '{[]}';
const inp = '{}{}{{{[][][]{{';
// const inp = ']';
// const inp = '[({])}';

var isValid = function (s) {
  let ans = 0;
  const begin = ['(', '{', '['];
  const end = [')', '}', ']'];

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 3; j++) {
      let bStore = [0, 0, 0];
      let eStore = [0, 0, 0];

      if (s[i] === begin[j]) {
        for (let k = i + 1; k < s.length; k++) {
          if (s[k] === end[j]) {
            if ((k - i) % 2 !== 0) {
              //   console.log('k-i', end[j], ' ', k - i);
              for (let p = i + 1; p < k; p++) {
                for (let h = 0; h < 3; h++) {
                  //todo loop {}

                  if (s[p] === begin[h]) {
                    bStore[h] = 1;
                  } else if (s[p] === end[h]) {
                    bStore[h] = 0;
                  }
                }

                let bStoreStatus = 1;
                for (let t = 0; t < 3; t++) {
                  if (bStore[t]) {
                    bStoreStatus = 0;
                    break;
                  }
                }

                if (bStoreStatus) {
                  ans = 1;
                }
              }
            }
          }
        }
      } else if (s[i] === end[j]) {
        for (let k = i - 1; k > 0; k--) {
          if (s[k] === end[j]) {
            // ans = 1;
          }
        }
      }
    }
  }

  return ans;
};

console.log(isValid(inp));
