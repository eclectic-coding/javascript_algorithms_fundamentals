/*
 * Is power of two
 * Determine whether an input number is a power of two
 *
 * -- Algorithm needs to divine number and future division results by two until remainder is
 *    always 0
 */

function isPowerOfTwo(number) {
  if (number < 1) return false;

  let dividedNumber = number;
  while (dividedNumber !== 1) {
    if (dividedNumber % 2 !== 0) {
      return false;
    }
    dividedNumber = dividedNumber / 2;
  }
  return true;
}

// Best case: number = 13 = 0(1) Constant Time Complexity
// Worst case: 1,000,000 => 0(log n) Logarithmic Time Complexity

console.log(isPowerOfTwo(8));   // True
console.log(isPowerOfTwo(5));   // False
console.log(isPowerOfTwo(16));  // True
console.log(isPowerOfTwo(13));  // False

