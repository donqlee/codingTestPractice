const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');
let string = [];
let length = +input[0];
for (let i = 1; i <= length; i++){
        let result = '';
        string = input[i].split(' ');
        for(let j = 0; j < string[1].length; j++){
            result += string[1][j].repeat(string[0])
        }
    console.log(result);
}

