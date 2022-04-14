const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n")
let arr = input[1].split('');

let sum = arr.reduce((prev, cur) => Number(prev) + Number(cur))
console.log(sum);