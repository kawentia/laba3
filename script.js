//завдання 1
function random(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(random(5, 10));
console.log(random(0, 1));
console.log(random(-10, 10));



//завдання 2
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(11));
console.log(isPrime(25));
console.log(isPrime(2));
console.log(isPrime(1));
console.log(isPrime(0));


//завдання 3
function sumSequence(n) {
  if (n < 1) {
    return 0;
  }

  return (n * (n + 1)) / 2;
}

console.log(sumSequence(5));
console.log(sumSequence(10));
console.log(sumSequence(-3));
console.log(sumSequence(0));   