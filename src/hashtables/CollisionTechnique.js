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
    console.log(`fHash ${firstHash}, data: ${node.content}`)
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
    console.log(' this is the hash, ', firstHash)
    const size = hashTable.length;
    let isInserted = false;
    let probes = 0;
    let possiblePosition = firstHash;
    let secondHash = undefined;
    if (calcDoubleHash) {
      secondHash = calcDoubleHash(node.content, size);
      console.log('second hash ', secondHash)
    }

    while (!isInserted && probes < size) {
      possiblePosition = cTechnique(firstHash, probes, size, secondHash);
      console.log('possible ', possiblePosition)
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
}

module.exports = CollisionTechnique;