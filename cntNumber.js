// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n").reduce((prev, cur) => prev * cur);
// let arr = [0,0,0,0,0,0,0,0,0,0];

// for(let i = 0; i < String(input).length; i++){
//     arr[String(input)[i]]++
// }
// console.log(arr.join('\n'));



var fs = require('fs')
var input = fs.readFileSync('/dev/stdin').toString().split('\n').map(function(d){
	return +d
})

var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var result = (input[0] * input[1] * input[2]).toString()
result.split('').forEach(function (data) {
	arr[parseInt(data)]++;
})

arr = arr.join('\n')

console.log(arr)