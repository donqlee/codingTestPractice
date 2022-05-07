let absolutes = [1,2,3];
let signs = [false,false,true];

function solution(absolutes, signs) {

    let answer = 0;
    for(let i = 0; i < absolutes.length; i++){
        if(signs[i]){
            answer += absolutes[i];
            
        }else{
            answer -= absolutes[i]
        }
    }
    console.log(answer);
    return answer;
}

solution(absolutes, signs);