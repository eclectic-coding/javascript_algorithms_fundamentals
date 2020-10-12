/*
 * Fibonacci with Recursion
 *
 */

function fib(n) {
  if (n === 0 || n === 1) return 1;

  return fib(n - 1) + fib(n - 2);
}

// Nesting function calls make it not a great solution
// O(n^2) Exponential time Complexity

console.log(fib(4));
console.log(fib(5));
