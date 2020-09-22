function sumFibs(num) {
  let [a, b, s] = [1, 1, 0];

  while (a <= num) {
    if (a % 2 !== 0) s += a;

    [a, b] = [b, b+a]
  }
  return s;
}
console.log(sumFibs(4));
