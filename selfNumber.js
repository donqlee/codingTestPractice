let arr = [];
let arr2 = [];
let input = 1;
let num = 0;
while(input <= 10000){
    num = input;
    let sum = 0;
    while(num > 0){
        sum += num % 10; 
        num = parseInt( num / 10);
    }
    sum += input
    arr.push(sum)

    input++;
}
arr =arr.sort((a,b) => a - b);
let set1 = new Set(arr);
arr = [...set1];
for( let i = 1; i <= 10000; i++){
    arr2.push(i);
}
let difference = arr2.filter(x => !arr.includes(x));
difference.map(val => console.log(val));