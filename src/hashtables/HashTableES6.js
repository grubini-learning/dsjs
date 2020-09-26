const HashTable = function(maxCapacity, minCapacity, currentCapacity, hashingMethod) {

};

// need a hash function
// need a method (hashing or collision)
// hashing technique (division, folding, modulus multiplication)
// the collision has (chaining, linear probing, quadratic probing, double hashing)
//need to record the actual current capacity
//need to record the current quantity
// need to have an array for a hash
// need to have a maximum allowed capacity globally
// need to have a minimum allowed capacity globally

// concept, tries to insert object in the array by hashing technique in (division, modulus, multiplication)
// if the spot is taken there is a collision
  // take the collission technique to keep trying until
    // we insert it
    // the number of times we have tried is greater than the length of the hash table
// the hash table can be resized until it hits its maximum capacity
// it can also remove elements
//it can also search

// open addressing


//Collisions
//===================
  // chaining
    // uses a doubly linked list if collision happens
  // Open Addressing (elements are stored in the hash table itself)
    // Linear Probing h`(k) is a new hash function
      // checks the next slot
      // h`(k, i) = (h(k) + 1) mod m
    // Quadratic Probing
      // spcing is increased
      // h(k, i) = (h`(k) + c1i + c2i^2) mod m

//Hashing Methods
//==============
  // Division
    // k --> key m --> size of table
    // h(k) = k mod m
  // Multiplication
    // c1 and c2
    // A is any constant between 0 and 1 but = (5**.5 / 2)
    // h(k) = floor value m * (kA mod 1)
  //Double hashing
    // h(k, i) = (h1(k) + i * h2(k)) mod m
    // PRIME - (key mod PRIME)
