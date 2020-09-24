class SinglyNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  getData() {
    return this.data;
  }
  setData(data) {
    this.data = data;
  }
  getNext() {
    return this.next;
  }
  setNext(node) {
    this.next = node;
  }
}

module.exports = SinglyNode;