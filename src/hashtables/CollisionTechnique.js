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
        return CollisionTechnique._collisionProcess({hashTable, firstHash, node, cTechnique: (hash, probes, size) => (firstHash + (probes ** 2)) % size});
      case techniques.DOUBLE_HASHING:
        return CollisionTechnique._collisionProcess({hashTable, firstHash, node, calcDoubleHash: (content, size) => ((3 * content) + 1) % size, cTechnique: (firstHash, probes, size, secondHash) => (firstHash + (secondHash * probes)) % size});
      default:
        return CollisionTechnique._collisionProcess({hashTable, firstHash, node, cTechnique: (hash, probes, size) =>  (hash + probes) % size});
    }
  }

  chaining(hashTable) {

  }
  static quadraticProbing(position, hash, size) {
    return ((hash * (position ** 2)) % size);
  }
  static doubleHashing(position, firstHash, secondHash, size) {
    return (firstHash + (secondHash * position)) % size;
  }
  static _collisionProcess(args) {
    let { hashTable, firstHash, node, calcDoubleHash = undefined, cTechnique } = args;
    const size = hashTable.length;
    let isInserted = false;
    let probes = 0;
    let possiblePosition = firstHash;
    let secondHash = undefined;
    if (calcDoubleHash) {
      secondHash = calcDoubleHash(node.content, size);
    }

    while (!isInserted && probes < size) {
      possiblePosition = cTechnique(firstHash, probes, size, secondHash);
      if(possiblePosition < size) {
        if (hashTable[possiblePosition] === undefined) {
          node.position = possiblePosition;
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
  static searchingProcess(key, hash, hashTable) {
    const size = hashTable.length;
    let isFound = false;
    let probes = 0;
    let nextAttempt = hash;
    let nodeFound = undefined;
    while (!isFound && probes < hashTable.length) {
      nextAttempt = (hash + probes) % size;
      if (hashTable[nextAttempt] && hashTable[nextAttempt].content === key) {
        nodeFound = hashTable[nextAttempt];
        isFound = true;
      }
      probes++;
    }
    return nodeFound;
  }
}

module.exports = CollisionTechnique;