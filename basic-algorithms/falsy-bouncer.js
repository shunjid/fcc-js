function bouncer(arr) {
  const result = [];
  const falsy = [false, null, 0, "", undefined, NaN];

  arr.forEach(function(ele){
    if(!falsy.includes(ele)){
      result.push(ele);
    }
  });

  return result;
}

bouncer([7, "ate", "", false, 9]);
