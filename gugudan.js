const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

function solution(dan){
    for (let i = 1; i < 10; i ++){
        console.log(`${dan} * ${i} = ${dan*i}`)
    }
}

solution(+input);