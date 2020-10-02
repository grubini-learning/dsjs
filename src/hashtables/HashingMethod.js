const methods = {
  DIVISION: 'division',
  FOLDING: 'folding',
  MODULUS_MULTIPLICATION: 'modulus_multiplication'
};

class HashMethod {
  static get methods() {
    return methods;
  }

  static divisionMethod(firstHashResult, capacity) {
    return firstHashResult % capacity;
  }
  static foldingMethod() {
    return 0;
  }
  static modulusMultiplicationMethod() {
    return 0;
  }
}

module.exports = HashMethod;