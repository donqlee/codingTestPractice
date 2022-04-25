const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');

for (let i = 1; i <= +input[0]; i++){
    let info = input[i].split(' ');
    const H = parseInt(info[0]);
    const N = parseInt(info[2]);
    if(N % H === 0){//꼭대기층
       fl = H; 
       ho = N / H;
    }else if(N % H !== 0){
     fl = N % H;
     ho = Math.floor(N / H)+1;
   }
   if(ho < 10){ho = `0${ho}`;}
   console.log(`${fl}${ho}`);  
}
