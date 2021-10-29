/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// const inp = [1, 1, 2];
const inp = [1, 1, 2, 3, 3];

var deleteDuplicates = function (head) {
  let store = [];

  for (let i = 0; i < head.length; i++) {
    let j = 0;
    while (j < store.length) {
      if (head[i] === store[j]) {
        break;
      }
      j++;
    }

    if (j === store.length) {
      store.push(head[i]);
    }
  }

  return store;
};

console.log(deleteDuplicates(inp));
