let hello = "   Hello, World!  ";
let wsRegex = /^(\s+)(.+[^\s])(\s+)$/; 
let result = hello.match(wsRegex)[2];

console.log(result);
