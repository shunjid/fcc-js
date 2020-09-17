function reverseString(str) {
  const characters = str.split('');
  str = '';
  characters.slice().reverse().forEach((character) => str += (character));

  return str;
}

console.log(reverseString("hello"));
