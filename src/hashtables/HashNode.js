class HashNode {
  constructor(data) {
    this.data = data;
    this.probes = 0;
  }

  get content() {
    return this.data;
  }
  get attempts() {
    return this.probes;
  }
  set attempts(value) {
    this.probes = value;
  }
}

module.exports = HashNode;