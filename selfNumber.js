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


function NotSelfnumber(N){
    
    //숫자 하나를 더하는 것에 대한 함수
    let sum = N

    while(true){   
        if(N == 0) break;
        sum += N%10
        N = parseInt(N/10)
    }
    return sum; //무엇을 return할지 꼭 써주기
}

function selfnumber(N){
    let selfnum = []
    let result = []

    for(let i=1; i <= N; i++){
        let index = NotSelfnumber(i); 
        
        if(index <= N){
            selfnum[index] = true;
        }
    }

    for(let i=1; i<= N; i++){
        if(!selfnum[i]) result.push(i);
    }
    console.log(result.join('\n'));
}

selfnumber(10000);