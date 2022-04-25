const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(' ')

console.log(Math.ceil((input[2] - input[0])/(input[0] - input[1])) + 1);
