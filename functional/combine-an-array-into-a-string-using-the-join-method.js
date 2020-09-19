function sentensify(str) {
  const splitted = str.split(/-|\.|,/);
  return splitted.join(' ');
}

console.log(sentensify("May-the-force-be-with-you"));
