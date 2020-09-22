function addTogether(...args) {
  if(args.length === 2) {
    if(Number.isInteger(args[1]) && Number.isInteger(args[1])) return args[0] + args[1];
    return undefined;
  } else {
    if(!Number.isInteger(args[0])) return undefined;
    else {
      return (y) => { 
        if(!Number.isInteger(y)) return undefined;
        
        return args[0] + y;
      }
    }
  }
}

console.log(addTogether(2,3));
