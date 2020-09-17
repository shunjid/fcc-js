const checker = function(source, target) {
  let checked = 0;

  source.forEach(function(s){
    if(includes(target, target.length - 1, s)) {
      checked += 1;
    }
  });
  return checked === source.length;
};

const includes = function(arr, index, searchFor) {
  if (arr[index] === searchFor) return true;
  if (index === -1) return false;
  return includes(arr, index-1, searchFor);
};

function mutation(arr) {
  const first = arr[0].toLowerCase().split('');
  const second = arr[1].toLowerCase().split('');

  return checker(second, first);
}

console.log(mutation(["hello", "hey"]));
