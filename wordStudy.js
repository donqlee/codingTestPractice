const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().toLowerCase();
const charMap = {};
console.log(typeof charMap);

for (let char of input){
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
}
let max = Math.max.apply(null, Object.values(charMap));
let maxChar = '';
let count = 0;
for(let char in charMap){
    if(charMap[char] === max){
        maxChar = char;
        count++;
    }
}

if(count > 1){
    console.log('?');
}else{
    console.log(maxChar.toUpperCase());
}

// const result = new Array(26).fill(0);

// for (let i = 0; i < input.length; i++) {
//     console.log(input.charCodeAt(i));
//   result[input.charCodeAt(i) - 97] ++;
// }

// console.log(result);
