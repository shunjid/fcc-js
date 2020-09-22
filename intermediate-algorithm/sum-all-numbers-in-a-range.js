/*
** Sum between 1 to n = n(n+1)/2
** Sum between min to max
** Sum between (1 to max) - Sum between (1 to min)
*/
const sumAll = function(arr) {
  const [min, max] = [
    Math.min(arr[0], arr[1]),
    Math.max(arr[0], arr[1])
  ];

  return ((max*(max+1) - (min-1)*min)) / 2;
}

console.log(sumAll([1, 4]));
