// version 1
// function isPrime(num) {
//
//   for (let i = 2; i < num; i++) { // 1
//     if (num % 1 === 0) { // n
//       return false; // 1
//     }
//   }
//   return true // 1
// }

// Average case
// => 0(n)

// version 2
function isPrime(num) {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true
}

// => 0(n {squared})

console.log(isPrime(5));
console.log(isPrime(9));



