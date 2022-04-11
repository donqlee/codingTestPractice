const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let totalLength = +input[0];

for (let i = 1; i <= totalLength; i++){
    let a = input[i].split(" ").map((val) => +val);
    let b = a.slice(1);
    let count = 0;
    let avg = (b.reduce((prev, cur) => prev + cur))/a[0];
    for (let j = 0; j < b.length; j++){
        if(b[j] > avg){
            count++;
        }
    }
    console.log(((count / a[0]) * 100).toFixed(3)+'%');
}


