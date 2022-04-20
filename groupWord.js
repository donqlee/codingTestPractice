const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');


let result = 0;
for (let i = 1; i <= input[0]; i++){
    let a = input[i].split('');
    for (let j = 0; j < a.length; j++){
        if (a.indexOf(a[j], j + 1) === -1){
            if(a.length - 1 === j){
                result++;
            }
            continue;
        }else if(a.indexOf(a[j], j + 1) === j + 1){
            continue;
        }else{
            break;
        }
    }
}
console.log(result);


var N = parseInt(input.shift());
var count = 0;

function solution(str){
  var record = [];
  for(var i = 0, length = str.length; i < length; i++){
    if(record.indexOf(str[i]) === -1){
      record.push(str[i]);
    } else {
      if(record[record.length -1] !== str[i]){
        return;
      }
    }
  }
  count++;
}

for(var i = 0; i < N; i++){
  solution(input[i])
}

console.log(count);

