/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const inp1 = [1, 2, 4];
const inp2 = [1, 3, 4];

// const inp1 = [];
// const inp2 = [0];

var mergeTwoLists = function (l1, l2) {
  let list1 = [...l1];
  let list2 = [...l2];

  if (list1[0] !== undefined) {
    for (let i = 0; i < list1.length; i++) {
      if (list1[i] <= list2[0]) {
        list1.splice(i + 1, 0, list2[0]);
        list2.shift();
        i++;
      }
    }
  } else {
    list1 = list2;
  }

  return list1;
};

//what? why it dosn't work in leetcode?
console.log(mergeTwoLists(inp1, inp2));
