const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
let arr = [0, 1];
let result = 0;
if(+input === 0){
    console.log(arr[0]);
}else if(+input === 1){
    console.log(arr[1])
}else{
    for(let i = 2; i <= +input; i++){    
        result = arr[i - 2] +  arr[i - 1];  
        arr.push(result);
    }
    console.log(result);
}
