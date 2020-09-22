const isPrime = function(n, i = 2) {
  if(n <= 2) return n === 2;
  if(n % i === 0) return false;
  if(i * i > n) return true;

  return isPrime(n, i+1);
}

const sumPrimes = function(num) {
  let sum = 2;
  let traverser = 3;
  
  if(num === 2) {
    return sum;
  }

  while(traverser <= num) {
    if(isPrime(traverser)) {
      sum += traverser;
    }
    traverser += 2;
  }

  return sum;
}

console.log(sumPrimes(10));
