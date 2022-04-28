

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');

let start = +input[0];
let end = +input[1];
let arr = [];

const isPrime = (val) => {
    if(val === 1){
        return;
    }
    for (let i = 2; i <= Math.sqrt(val); i++){
        if(val % i === 0){
            return;
        }
    }      
    arr.push(val);
}


for(let i = start; i <= end; i++){
    isPrime(i);
}
if (arr.length > 0) {
    let sum = arr.reduce((prev, cur) => prev + cur);
    let min = Math.min(...arr);
    console.log(sum);
    console.log(min)

}else{
    console.log(-1);
}





