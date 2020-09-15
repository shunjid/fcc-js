const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = [];
  
  arr.forEach(function(msg){
    failureItems.push(`<li class="text-warning">${msg}</li>`);
  });

  return failureItems;
}

const failuresList = makeList(result.failure);
