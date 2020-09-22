const steamrollArray = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      arr = arr.concat(arr[i]);
      arr.splice(i, 1);
      --i;
    }
  }

  return arr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
