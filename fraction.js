// 1 : 1/1
// 2 : 1/2
// 3 : 2/1
// 4 : 3/1
// 5 : 2/2
// 6 : 1/3
// 7 : 1/4
// 8 : 2/3
// 9 : 3/2 
// 10 : 4/1
// 11 : 5/1
// 12 : 4/2 
// 13 : 3/3
// 14 : 2/4
// 15 : 1/5




const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
let number = Number(input);
let value = 1;
while (true) {
    console.log(number)
	number -= value;
	if (number <= 0) {
		number += value;
		break;
	}
	value++;
}

if (value % 2 === 1) {
	console.log(`${value - (number - 1)}/${1 + (number - 1)}`);
} else {
	console.log(`${1 + (number - 1)}/${value - (number - 1)}`);
}