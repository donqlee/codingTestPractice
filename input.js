/*
boj.kr/4344

5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
*/


const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString();
input = input.split('/n');

const testCaseNum = +input[0];
// +를 넣어주면 String에서 Number로 바꿔준다.
