const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let i = 2;
while(true){
    if(+input === 1){
        break;
    }
    else if(+input % i === 0){
        input = input / i
        console.log(i);
        if(input === 1){
            break;
        }
    }else{
        i++;
    }   
}

