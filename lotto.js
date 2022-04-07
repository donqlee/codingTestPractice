const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = 	[31, 10, 45, 1, 6, 19]; 

function solution(lottos, win_nums) {
    let answer = [];
    const zero = lottos.filter((val) => val === 0).length;
    const correct = lottos.filter((val) => win_nums.includes(val));
    
    const maxRank = 7 - correct - zero >= 6 ? 6 : 7 - correct - zero;
    const minRank = 7 - correct >= 6 ? 6 : 7 - correct;
    answer.push(maxRank, minRank)
    return answer;
}

solution(lottos, win_nums);

sol