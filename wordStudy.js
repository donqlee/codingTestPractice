const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().toUpperCase();

console.log(input);

// const result = new Array(26).fill(0);

// console.log(result);
