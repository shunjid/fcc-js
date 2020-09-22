const greatestCommonDivisor = (a, b) => {
  if (a % b === 0) return b;
  else return greatestCommonDivisor(b, a % b);
};

const leastCommonMultiple = (a, b) => {
  return (a * b) / greatestCommonDivisor(a, b); 
}

const smallestCommons = function (arr) {
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);
  const range = [];

  for (let i = min; i <= max; i++) {
    range.push(i);
  }

  return range.reduce(leastCommonMultiple);
};

console.log(smallestCommons([1, 5]));
