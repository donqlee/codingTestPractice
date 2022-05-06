const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');

const isPrime = (n) => {
    if(n == 1){
        return false;
    }else{
        for(let i = 2; i <= Math.sqrt(n); i++){
            if(n % i == 0){
                return false;
            }
        }
    }
    return true;
}


for (let i = 0; i < input.length; i++){
    if(+input[i] === 0){
        break;
    }
    let arr = [];
    for(let j = +input[i]; j < +input[i] * 2; j++){
        if(isPrime(j + 1)){
            arr.push(j + 1);
        }
    }
    console.log(arr.length);
}

