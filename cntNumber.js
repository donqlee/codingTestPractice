const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").reduce((prev, cur) => prev * cur);
let arr = [0,0,0,0,0,0,0,0,0,0];

for(let i = 0; i < String(input).length; i++){
    arr[String(input)[i]]++
}
console.log(arr.join('\n'));