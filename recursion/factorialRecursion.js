/*
 * Factorial Algorithm with Recursion
 *
 * Just a different approach
 *
 * Algorithm:
 * -- Go thru all smaller numbers and multiple them with each other
 */

function fact(number) {
  if (number === 1) return 1;

  return number * fact(number - 1);
}

// 0(n) Linear Time Complexity

console.log(fact(3));
console.log(fact(4));
console.log(fact(5));

