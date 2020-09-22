const isCapital = function(ch){
    return ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90;
}

String.prototype.toTitleCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

const myReplace = function(str, before, after) {
  const isTitleCase = isCapital(before.substring(0, 1));
  if(isTitleCase) after = after.toTitleCase();
  else after = after.toLowerCase();

  str = str.replace(before, after);
  return str;
}


console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
