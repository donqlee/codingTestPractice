const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
input = +input;

function Hansu(N){
    let count = 0;
    for (let i = 1; i <= N; i++){
        if(i < 100){
            count++;
        }else{
            i = String(i);
            let A = Number(i[0]) - Number(i[1]);
            let B = Number(i[1]) - Number(i[2]);
            if (A === B){
                count++;
            }
        }
    }
    console.log(count);
}

Hansu(input);