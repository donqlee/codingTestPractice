let num = [5,8,4,0,6,7,9];
function solution(numbers) {
    
    let sum = numbers.reduce((prev, cur) => prev + cur);
    let answer = 45 - sum;
    return answer;
}

solution(num);