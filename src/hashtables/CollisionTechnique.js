const techniques = {
  CHAINING: 'chaining',
  LINEAR_PROBING: 'linear_probing',
  QUADRATIC_PROBING: 'quadratic_probing',
  DOUBLE_HASHING: 'double_hashing'
};

class CollisionTechnique {
  static get techniques() {
    return techniques;
  }

  static resolveCollision(hashTable, firstHash, node, colMethod = techniques.LINEAR_PROBING) {
    switch (colMethod) {
      case techniques.CHAINING:
        return CollisionTechnique.chaining();
      case techniques.QUADRATIC_PROBING:
        return CollisionTechnique.quadraticProbing();
      case techniques.DOUBLE_HASHING:
        return CollisionTechnique.doubleHashing();
      default:
        return CollisionTechnique.linearProbing(hashTable, firstHash, node);
    }
  }

  chaining(hashTable) {

  }
  static linearProbing(hashTable, hash, node) {
    const size = hashTable.length;
    let isInserted = false;
    let probes = 0;
    let possiblePosition = hash;
    while (!isInserted && probes < size) {
      possiblePosition = (hash + probes) % size;
      if(possiblePosition < size) {
        if (hashTable[possiblePosition] === undefined) {
          hashTable[possiblePosition] = node;
          isInserted = true;
        }
      } else {
        break;
      }
      probes++;
    }

    return (isInserted) ? probes : 0;
  }
  static quadraticProbing(position, hash, size) {
    return ((hash * (position ** 2)) % size);
  }
  static doubleHashing(position, firstHash, secondHash, size) {
    return (firstHash + (secondHash * position)) % size;
  }
}

module.exports = CollisionTechnique;