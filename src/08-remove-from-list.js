/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let node = l;
  let nodePrev = null;
  let head = l;
  while (node) {
    if (node.value === k) {
      if (!nodePrev) {
        head = node.next;
      } else {
        nodePrev.next = node.next;
      }
    } else {
      nodePrev = node;
    }
    node = node.next;
  }
  return head;
}

module.exports = removeKFromList;
