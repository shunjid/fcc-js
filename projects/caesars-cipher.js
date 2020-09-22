const fromASCII = (pos) => String.fromCharCode(pos);

const getPosition = (char) => char.charCodeAt(0) - 64;

const getChar = (position) => {
  if(position <= 0) return fromASCII(65 + (26+position) - 1);
  else return fromASCII(65 + position - 1);
};

const rot13 = (str) => {
  const regex = /\s|[!?.]/g;
  const splitted = str.split('');
  let decoded = '';

  splitted.forEach((char) => {
    if(regex.test(char)) decoded = decoded.concat(char);
    else {
      const rotatedPosition = getPosition(char) - 13;
      decoded = decoded.concat(getChar(rotatedPosition));
    }
  });
  return decoded;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
