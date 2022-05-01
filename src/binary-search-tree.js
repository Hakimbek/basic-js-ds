const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  add(data) {
    if (this.data === data) {
      throw new Error("Data already exist!")
    } else if (this.data > data) {
      if (this.left) {
        this.left.add(data);
      } else {
        this.left = new Node(data)
      }
    } else {
      if (this.right) {
        this.right.add(data);
      } else {
        this.right = new Node(data)
      }
    }
  }

  remove(data) {
    if (data < this.data && this.left) {
      this.left = this.left.remove(data);
    } else if (data > this.data && this.right) {
      this.right = this.right.remove(data);
    } else {
      if (this.data === data) {
        if (this.right && this.left) {
          let minVal = this.right.min();
          this.data = minVal;
          this.right = this.right.remove(minVal);
        } else if (this.right) {
          return this.right;
        } else if (this.left) {
          return this.left;
        } else {
          return null;
        }
      }
    }
    return this;
  }

  min() {
    if (this.left) {
      return this.left.min();
    } else {
      return this.data;
    }
  }

  max() {
    if (this.right) {
      return this.right.max();
    } else {
      return this.data;
    }
  }

  has(data) {
    try {
      if (this.data === data) {
        return true;
      } else if (this.data > data) {
        return this.left.has(data);
      } else if (this.data < data) {
        return this.right.has(data);
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }

  find(data) {
    try {
      if (this.data === data) {
        return this;
      } else if (this.data > data) {
        return this.left.find(data);
      } else if (this.data < data) {
        return this.right.find(data);
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNum = null
  }

  root() {
    return this.rootNum;
  }

  add(data) {
    if (this.rootNum) {
      this.rootNum.add(data);
    } else {
      this.rootNum = new Node(data);
    }
  }

  has(data) {
    if (this.rootNum) {
      return this.rootNum.has(data);
    }
  }

  find(data) {
    if (this.rootNum) {
      try {
        if (this.rootNum.data === data) {
          return this.rootNum;
        } else if (this.rootNum.data > data) {
          return this.rootNum.left.find(data);
        } else if (this.rootNum.data < data) {
          return this.rootNum.right.find(data);
        } else {
          return null;
        }
      } catch (e) {
        return null;
      }
    }
  }

  remove(data) {
    if (this.rootNum) {
      this.rootNum = this.rootNum.remove(data);
    }
  }

  min() {
    if (this.rootNum) {
      return this.rootNum.min();
    }
  }

  max() {
    if (this.rootNum) {
      return this.rootNum.max();
    }
  }
}

module.exports = {
  BinarySearchTree
};