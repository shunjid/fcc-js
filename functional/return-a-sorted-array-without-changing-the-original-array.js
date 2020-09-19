const globalArray = [5, 6, 3, 2, 9];

const nonMutatingSort = function (arr) {
  return [...arr].sort((a, b) => a <= b ? -1 : 1);
}

nonMutatingSort(globalArray);