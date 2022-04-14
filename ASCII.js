const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

function Ascii(N){
    console.log(N.charCodeAt(0));
}
Ascii(input);
