function fib(n) {
  const numbers = [1, 1]; // 1

  for (let i = 2; i < n + 1; i++) { // 1
    numbers.push(numbers[i - 2] + numbers[i - 1]); // n
  }
  return numbers[n]; // 1
}

// T = 1 + 1 + 1 + n - 1
// T = n
// => 0(n) => Linear Time Complexity

console.log(fib(4));
console.log(fib(5));
