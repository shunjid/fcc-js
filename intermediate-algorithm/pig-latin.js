const isVowel = function (char) {
  return /^[aeiou]$/.test(char.toLowerCase());
};

const translatePigLatin =function(str) {
  if (isVowel(str.substring(0, 1))) return str.concat("way");

  const splitted = str.split("");
  let consonentClusterLength = 0;

  for (const char of splitted) {
    if (isVowel(char)) break;
    consonentClusterLength++;
  }

  return str
    .substring(consonentClusterLength, str.length)
    .concat(str.substring(0, consonentClusterLength))
    .concat("ay");
}

console.log(translatePigLatin("glove"));
