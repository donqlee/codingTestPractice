const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let length = +input[0];

for(let i = 1; i <= length; i++){
    let count = 0;
    let score = 0;
    for(let j = 0; j < input[i].length; j++){
        if(input[i][j] === 'O'){
                count++;
               
            }else{
            count = 0;
        }
        score += count;
    }
    console.log(score);
}
