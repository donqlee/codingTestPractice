const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('');

// console.log(input);

let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

for(let i = 0; i < alphabet.length; i++){
    if(input.includes(alphabet[i])){
        alphabet[i] = input.indexOf(alphabet[i]);
    }else{
        alphabet[i] = -1;
    }
}
console.log(alphabet.join(' '));