const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ").map(val => +val);

function solution(input){
    if(input[0] === input[1]){
        if(input[0] === input[2]){
            return console.log(10000 + (input[0] * 1000));
        }
        return console.log(1000 + (input[0] * 100));
    }else if(input[0] === input[2]){
        return console.log(1000 + (input[0] * 100));
    }else{
        if(input[1] === input[2]){
            return console.log(1000 + (input[1] * 100));
        }
        let max = Math.max(...input)
        return console.log(max * 100);
    }

}
solution(input);

