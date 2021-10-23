var isValid = function (s) {
  let ans = 1;
  const begin = ['(', '{', '['];
  const end = [')', '}', ']'];
  let store = [0, 0, 0];

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 3; j++) {
      if (s[i] === begin[j]) {
        store[j] = 1;
      } else if (s[i] === end[j]) {
        store[j] = 0;
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    if (store[i]) {
      ans = 0;
    }
  }

  for (let i = 0; i < s.length; i++) {
    let time = 0;
    for (let j = 0; j < 3; j++) {
      if (s[i] === begin[j]) {
        store[j] = 1;
        for (let k = i + 1; k < s.length; k++) {
          time++;
          if (s[k] === end[j]) {
            break;
          }
        }
        if (time % 2 === 0) ans = 0;
      }
      if (s[i] === end[j]) {
        if (store[j] === 0) {
          ans = 0;
        }
      }
    }
  }

  return ans;
};
