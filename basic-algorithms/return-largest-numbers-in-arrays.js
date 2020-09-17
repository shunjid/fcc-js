function largestOfFour(arr) {
  const maxValues = [];
  const reducer = (a, b) => Math.max(a, b);

  arr.forEach((item) => maxValues.push(item.reduce(reducer)));
  return maxValues;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); 
