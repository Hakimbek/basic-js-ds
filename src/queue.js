const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class Queue {

  constructor() {
    this.front = null;
    this.back = null;
  }

  isEmpty() {
    return !this.front;
  }

  getUnderlyingList() {
    let tempValue = this.front;
    return {value: tempValue.value, next:tempValue.next};
  }

  enqueue(value) {
    let node = new Node(value);

    if (this.isEmpty()) {
      this.front = this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
  }

  dequeue() {
    let node = this.front;

    if (!this.isEmpty()) {
      this.front = this.front.next;
    }

    if (!this.front) {
      this.back = null;
    }

    return node.value;
  }
}

module.exports = {
  Queue
};
