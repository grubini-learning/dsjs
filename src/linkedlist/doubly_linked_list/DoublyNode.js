class DoublyNode {
  constructor(data) {
    this.data = data;
    this.previous = null;
    this.next = null;
  }

  getData() {
    return this.data;
  }
  getNext() {
    return this.next;
  }
  getPrevious() {
    return this.previous;
  }
  setNext(node) {
    this.next = node;
  }
  setPrevious(node) {
    this.previous = node;
  }
}

module.exports= DoublyNode;