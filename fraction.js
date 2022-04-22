// 1 : 1/1
// 2 : 1/2
// 3 : 2/1
// 4 : 3/1
// 5 : 2/2
// 6 : 1/3
// 7 : 1/4
// 8 : 2/3
// 9 : 3/2 
// 10 : 4/1
// 11 : 5/1
// 12 : 4/2 
// 13 : 3/3
// 14 : 2/4
// 15 : 1/5

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('');