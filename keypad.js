function solution(numbers, hand) {
    let answer = '';
    let lH = '*';
    let rH = '#';
    const pos = {
        1 : [0, 0], 2 : [1, 0], 3 : [2, 0],
        4 : [0, 1], 5 : [1, 1], 6 : [2, 1],
        7 : [0, 2], 8 : [1, 2], 9 : [2, 2],
        '*' : [0, 3], 0 : [1, 3], '#' : [2, 3]
    };
    function dist (num, lH, rH, pos, hand){
        let dist_L = Math.abs(pos[lH][0] - pos[num][0]) + 
                    Math.abs(pos[lH][1] - pos[num][1]);
        let dist_R = Math.abs(pos[rH][0] - pos[num][0]) + 
                    Math.abs(pos[rH][1] - pos[num][1]);
        if(dist_L === dist_R){
            return hand === 'left' ? 'L' : 'R'
        }
        return dist_L < dist_R ? 'L' : 'R';
    }
    for (let num of numbers){
        if (num % 3 === 1){
            answer += 'L';
            lH = num;
        }
        else if (num != 0 && num % 3 === 0){
            answer += 'R';
            rH = num;
        }
        else {
            answer += dist(num, lH, rH, pos, hand);
            answer[answer.length - 1] === 'L' ? lH = num : rH = num
        }
    }
   
    return answer;
}