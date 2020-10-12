/*
 * Factorial Algorithms
 *
 * Algorithm:
 * -- Go thru all smaller numbers and multiple them with each other
 */

function fact(number) {
  let result = 1
  for (let i = 2; i <= number; i++) {
    result = result * i
  }
  return result
}

// 0(n) Linear Time Complexity

console.log(fact(3));
console.log(fact(4));
console.log(fact(5));

