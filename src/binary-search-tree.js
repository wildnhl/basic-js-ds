const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(value) {
    this.data = value;
    this.rightNode = null;
    this.leftNode = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    if (!this.rootNode) {
      return null;
    }
    return this.rootNode;
  }

  add(dataCome) {
    this.rootNode = addNode(this.rootNode, dataCome);

    function addNode(node, dataNode) {
      if (!node) return new Node(dataNode);

      if (node.data === dataNode) return node;

      if (node.data > dataNode) {
        node.leftNode = addNode(node.leftNode, dataNode);
      } else {
        node.rightNode = addNode(node.rightNode, dataNode);
      }
      return node;
    }
  }

  has(dataCome) {
    return hasNode(this.rootNode, dataCome);

    function hasNode(node, dataNode) {
      if (!node) return false;

      if (node.data === dataNode) {
        return true;
      }

      if (node.data > dataNode) {
        return hasNode(node.leftNode, dataNode);
      } else {
        return hasNode(node.rightNode, dataNode);
      }
    }
  }

  find(dataCome) {
    return findNode(this.rootNode, dataCome);

    function findNode(node, dataNode) {
      if (!node) return null;

      if (node.data === dataNode) {
        return node;
      }

      if (node.data > dataNode) {
        return findNode(node.leftNode, dataNode);
      } else {
        return findNode(node.rightNode, dataNode);
      }
    }
  }
  remove(dataCome) {
    this.rootNode = removeNode(this.rootNode, dataCome);
    function removeNode(node, dataNode) {
      if (!node) return null;
      if (node.data > dataNode) {
        node.leftNode = removeNode(node.leftNode, dataNode);
        return node;
      } else if (node.data < dataNode) {
        node.rightNode = removeNode(node.rightNode, dataNode);
        return node;
      }
      if (node.data === dataNode) {
        if (!node.leftNode && !node.rightNode) {
          return null;
        }
        if (!node.leftNode) {
          node = node.rightNode;
          return node;
        }

        if (!node.rightNode) {
          node = node.leftNode;
          return node;
        }

        if (node.leftNode && node.rightNode) {
          let minRight = node.rightNode;
          while (minRight.leftNode) {
            minRight = minRight.leftNode;
          }
          node.data = minRight.data;
          node.rightNode = removeNode(node.rightNode, minRight.data);
          return node;
        }
      }
    }
  }
  min() {
    let minValue;
    if (!this.rootNode) {
      return false;
    } else {
      minValue = this.rootNode.data;
      return minNode(this.rootNode.leftNode, minValue);
    }

    function minNode(node, minValue) {
      if (!node) return minValue;
      if (node.data < minValue) {
        minValue = node.data;
        return minNode(node.leftNode, minValue);
      }
    }
  }
  max() {
    let maxValue;
    if (!this.rootNode) {
      return false;
    } else {
      maxValue = this.rootNode.data;
      return maxNode(this.rootNode.rightNode, maxValue);
    }

    function maxNode(node, maxValue) {
      if (!node) return maxValue;
      if (node.data > maxValue) {
        maxValue = node.data;
        return maxNode(node.rightNode, maxValue);
      }
    }
  }
}

module.exports = {
  BinarySearchTree,
};
