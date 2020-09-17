function repeatStringNumTimes(str, num) {
  if(num < 1)
    return '';
  
  const base = str;
  while(num != 1) {
    str += base;
    --num;
  }
  return str;
}

repeatStringNumTimes("abc", 3);
