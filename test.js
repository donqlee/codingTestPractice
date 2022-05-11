let scores = [[85, 90], [91, 87], [88, 87]]

function solution(scores){
    let answer = [];
    let sum = [];
    let exam1Sum = 0;
    let exam2Sum = 0;

    let examObj = [];
    scores.forEach((val, index) => {
        return (examObj.push({
            id : index + 1,
            exam1 : val[0],
            exam2 : val[1],
            sum : val[0] + val[1],
            rank : 0
        }))
    })
    
    for(let i = 0; i < scores.length; i++){
        sum.push(scores[i][0] + scores[i][1]);
        exam1Sum += scores[i][0];
        exam2Sum += scores[i][1];
    }
 
    if(exam1Sum === exam2Sum){
        examObj.sort((a, b) => b.sum - a.sum);    
    }else if(exam1Sum < exam2Sum){
        examObj.sort((a, b) => b.exam1 - a.exam1);
        examObj.sort((a, b) => b.sum - a.sum);
    }else{
        examObj.sort((a, b) => b.exam2 - a.exam2);
        examObj.sort((a, b) => b.sum - a.sum);
    }
    for(let i = 0; i < examObj.length; i++){
        examObj[i].rank = i + 1;
    }
    examObj.sort((a, b) => a.id - b.id);
    examObj.forEach((val) => answer.push(val.rank))
    console.log(answer);
}

solution(scores);


// let n = 5;
// let arr = [89, 89, 92, 100, 76];
 
// console.log(solution(n, arr));



 
// // 나의코드
// function solution(n, arr) {
//   let ans = [];
 
//   for (let i = 0; i < n; i++) {
//     let rank = 1;
//     for (let j = 0; j < n; j++) {
//       if (arr[i] < arr[j]) rank++;
//     }
//     ans.push(rank);
//   }
 
//   console.log(ans)
// }