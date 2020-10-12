// Mine
// function getMin(numbers) {
//   numbers.sort((a, b) => a - b);
//   return numbers[0];
// }

// Max's
function getMin(numbers) {
  let currentMin = numbers[0];
  for (const num of numbers) {
    if (num < currentMin) {
      currentMin = num
    }
  }
  return currentMin
}
// Best case: 0(n)
// Worst case: 0(n)
// Average case: 0(n)

console.log(getMin([1, 2, 3]));
console.log(getMin([9, 8, 3, 5, 1]));
console.log(getMin([10, 3, 8, 6]));

function isEven(number) {
    return number % 2 === 0
}

// => 0(1)

console.log(isEven(2));
console.log(isEven(7));

