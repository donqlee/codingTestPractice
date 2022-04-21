// 2 ~ 7   : 2 6개 - 6
// 8 ~ 19  : 3 12개 - 18
// 20 ~ 37 : 4 18개 - 36
// 38 ~ 61 : 5 24개  - 60
// 62 ~ 91 : 6 30개 - 90 

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let range = 1;
let block = 1;

while(block < input){
    block += range * 6;
    range++;
}
console.log(range);