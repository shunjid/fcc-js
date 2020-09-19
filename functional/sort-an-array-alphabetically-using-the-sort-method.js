function alphabeticalOrder(arr) {
  // 0  : unchanged
  // -1 : a comes before b
  // 1  : b comes before a
  return arr.sort(function(a, b) {
    return a <= b ? -1 : 1;
  });
}
console.log(alphabeticalOrder(["a", "a", "a", "a", "x", "t"]));
