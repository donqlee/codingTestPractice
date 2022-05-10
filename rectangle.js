const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(' ');

const x = +input[0];
const y = +input[1];
const w = +input[2];
const h = +input[3];

let arr = [x, y, w - x, h - y];

console.log(Math.min(...arr));