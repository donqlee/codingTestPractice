const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
let cycle;
let count = 0; 
cycle = input; 
while(true){
    cycle = (cycle%10)*10 + (Math.floor(cycle/10) + (cycle%10))%10;
    count++;
    if(cycle == input){
        break;
    }
}
console.log(count);