const fs = require("fs");
const { isPrimitive } = require("util");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(' ');

const isPrime = (num) => {
    if(num === 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}

for(let i = +input[0]; i <= +input[1]; i++){
    if(isPrime(i)){
        console.log(i);
    }
}
