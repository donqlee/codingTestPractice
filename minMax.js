const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');
let num = input[1].split(' ').map(val => +val);
let max = Math.max(...num);
let min = Math.min(...num);

console.log(min, max);
