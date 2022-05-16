const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');

let cardCnt = +input[0].split(' ')[0];
let win = +input[0].split(' ')[1];
let card = input[1].split(' ').map((val) => +val)
let resultArr = [];


for(let i = 0; i < cardCnt; i++){
    for(let j = i + 1; j < cardCnt; j++){
        for(let k = j + 1; k < cardCnt; k++){
            let sum = card[i] + card[j] + card[k];
            if(sum <= win){
                resultArr.push(sum)
            }
        }
    }
}

console.log(Math.max(...resultArr));