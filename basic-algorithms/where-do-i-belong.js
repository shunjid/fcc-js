function getIndexToIns(arr, num) {
  if(arr.length === 0) {
    return 0;
  }

  const sorter = function(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  arr = [...arr].sort(sorter);
  let index = arr.indexOf(num);
  
  if(index !== -1){
    return index;
  }

  let result = -1;
  const lastElement = arr[arr.length - 1];

  for(const [i, v] of arr.entries()) {
    if(v > num) {
      result = i;
      break;
    }
  }

  if(result === -1) {
    return num > lastElement ? arr.length : arr.length -1;
  } else {
    return result;
  }
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
