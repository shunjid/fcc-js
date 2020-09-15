const countdown = function(n){
  if(n <= 0)
    return [];
  else
    return [n].concat(countdown(n-1))
}
