const fearNotLetter = function (str) {
  const strSplitted = str.split("");

  for (const [index, letter] of strSplitted.entries()) {
    if (index !== 0) {
      const currentUnicode = letter.charCodeAt(0);
      const previousUnicode = strSplitted[index - 1].charCodeAt(0);
      const difference = currentUnicode - previousUnicode;

      if (difference !== 1) {
        return String.fromCharCode(currentUnicode - 1);
      }

      if (index === str.length - 1) {
        return undefined;
      }
    }
  }
};

console.log(fearNotLetter("abcdefghjklmno"));
