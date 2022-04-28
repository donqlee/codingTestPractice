const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');

let length = +input[0];
let arr = input[1].split(' ').map(val => +val);
let count = 0;

for (let i = 0; i < length; i++){
    let div = arr[i]
    while (true){
        if(arr[i] === 1){
            break;
        }
        if(div === 2){
            count++
            break;
        }
        div--;
        if(arr[i] %  div === 0){
            break;
        }
    }
   
}
console.log(count);