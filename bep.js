const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(' ');

function bepChecker(input){
    const A = +input[0];
    const B = +input[1];
    const C = +input[2];
    let count = 0;

//    if(C <= B){
//        console.log(-1);
//    }else{
//         while(true){
//             count++;
//             if(A + (B * count) < C * count){
//                 console.log(count);
//                 break;
//             }
//         }
//    }
    let margin = C - B;
    count = Math.floor( A / margin ) + 1;
    console.log(margin <= 0 ? -1 : count);
}

bepChecker(input);