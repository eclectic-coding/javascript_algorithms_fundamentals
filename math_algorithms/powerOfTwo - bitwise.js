/*
 * Is power of two - version two (Bitwise)
 *
 * & - bitwise operator
 */

function isPowerOfTwo(number) {
  if (number < 1) return false;

  return (number & (number - 1)) === 0; // O(1)
}

console.log(isPowerOfTwo(8));   // True
console.log(isPowerOfTwo(5));   // False
console.log(isPowerOfTwo(16));  // True
console.log(isPowerOfTwo(13));  // False

