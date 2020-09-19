function splitify(str) {
  // \s = space
  // ,  = comma
  // -  = hiphen
  // \. = dot
  return str.split(/\s|,|-|\./);
}
console.log(splitify("Hello World,I-am code"));
