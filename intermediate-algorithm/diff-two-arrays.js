function diffArray(arr1, arr2) {
  const difference = [];
  const sorted = arr1.concat(arr2).sort();

  sorted.forEach((value, index) => {
    if(value !== sorted[index+1] && value !== sorted[index-1]) {
      difference.push(value);
    }
  });

  return difference;
}

console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
