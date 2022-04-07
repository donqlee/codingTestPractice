// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('/n');
// let start = input[0].split(' ');
// let hour = +start[0];
// let min = +start[1];
// let time = +input[1];
// // let hour = 17;
// // let min = 40;
// // let time = 80;



// if(min + time >= 60){
//     hour = hour + parseInt((min + time) / 60)
//     min = (min + time) % 60;
//     if(hour >=24){
//         hour = hour - 24
//     }
// }else{
//     min = min + time;
//     hour = hour
// }

// console.log(hour, min);


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
 
let hour = input[0].split(" ")[0];
let min = input[0].split(" ")[1];
let time = input[1];
solution(+hour, +min, +time);

function solution(hour, min, time){
    if(min + time >= 60){
        hour = hour + parseInt((min + time) / 60)
        min = (min + time) % 60;
        if(hour >=24){
            hour = hour - 24
        }
    }else{
        min = min + time;
        hour = hour
    }
    
    console.log(hour, min);
}
