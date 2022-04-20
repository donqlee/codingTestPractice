const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let replaced_str = input.replace(/lj|c=|c-|dz=|d-|nj|s=|z=/g, 'a'); 
console.log(replaced_str.length);


