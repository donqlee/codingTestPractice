let a = [1,2,3,4];
let b = [-3,-1,0,2];

function solution(a, b) {
    let answer = 0;
    for(let i = 0; i < a.length; i++){
        answer += (a[i] * b [i])
    }
    console.log(answer);
    return answer;
}

solution(a,b);