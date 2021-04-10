const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const newNode = new ListNode();
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.tail.value = element;
    this.length++;
  }

  dequeue() {
    const node = this.head.value;
    if (this.tail === this.head) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return node;
  }
}

module.exports = Queue;
