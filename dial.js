const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('');

const dial = {
    ABC: 3,
    DEF: 4,
    GHI: 5,
    JKL: 6,
    MNO: 7,
    PQRS: 8,
    TUV: 9,
    WXYZ: 10,
}
let result = 0;

for(let i = 0; i < input.length; i++){
    for(let key in dial){
        if(key.includes(input[i])){
            result += dial[key];
            break;
        }
    }
}
console.log(result);

