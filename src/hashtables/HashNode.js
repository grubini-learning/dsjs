class HashNode {
  constructor(data) {
    this.data = data;
    this.location = undefined;
  }

  get content() {
    return this.data;
  }
  get attempts() {
    return this.probes;
  }

  set position(value) {
    this.location = value;
  }
}

module.exports = HashNode;