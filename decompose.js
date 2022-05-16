const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
let i = 1;
function solution(n){
    let sum = 0;
    do {
        sum += n%10;
        n = Math.floor(n/10);
    } while(n > 0);

    return sum;
};

while(i <= +input){
    let sum = solution(i);
    if(sum + i === +input){
        console.log(i);
        break;
    }
    if(i === +input){
        console.log(0);
        break;
    }
    i++;

}