const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
let result = 1;
if(input === 0){
    console.log(result);
}else{
    for(let i = +input; i > 0; i--){
        result *= i;
    }
    console.log(result);
}
