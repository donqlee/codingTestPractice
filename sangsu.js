const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(' ');



// let a = input[0].split('').reverse().join('');
// let b = input[1].split('').reverse().join('');
// console.log(a > b ? a : b);




const [a, b] = input.map(v => [...v].reverse().join(''));

console.log(a > b ? a : b);

