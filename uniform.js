let n = 5;
let lost = [2,4];
let reserve = [1,3,5];

function solution(n, lost, reserve) {
    let answer = n - lost.length;
    let tmp_lost = [];
    for(let i = 0; i < lost.length; i++){
        if(reserve.includes(lost[i])){
            reserve = reserve.filter((val) => val !== lost[i])
            answer++;
        }else{
            tmp_lost.push(lost[i]);
        }
    }
    lost = tmp_lost;
    lost.sort((a,b) => a-b);
    reserve.sort((a,b) => a-b);
    
    for(let i = 0; i < lost.length; i++){
        if(reserve.includes(lost[i] - 1)){
            reserve = reserve.filter((val) => val !== lost[i] - 1);
            answer++;
        }else if(reserve.includes(lost[i] + 1)){
            reserve = reserve.filter((val) => val !== lost[i] + 1);
            answer++;
        }
    }
    return answer;
}

solution(n, lost, reserve);