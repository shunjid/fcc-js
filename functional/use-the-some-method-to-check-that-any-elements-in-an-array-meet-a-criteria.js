function checkPositive(arr) {
  return arr.some((val) => val > 0);
}
checkPositive([1, 2, 3, -4, 5]);
