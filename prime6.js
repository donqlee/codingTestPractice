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

for(let i = 1; i <= +input[0]; i++){
    let a = +input[i] / 2;
    let b = +input[i] / 2;
    while(true){
       if(isPrime(a) && isPrime(b)){
           console.log (a, b);
           break;
       }else{
           a--;
           b++;
       }
    }
}