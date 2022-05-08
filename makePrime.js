let nums = [1,2,8,4,5]

function isPrime(val){
    for(let i = 2; i <= Math.sqrt(val); i++){
        if(val % i == 0){
            return false;
        }
    }
    return true;
}

function solution(nums) {
    let answer = 0;
    let arr = [];
    for(let i = 0; i <= nums.length - 3; i++){
        for(let j =  i + 1; j <= nums.length - 2; j++){
            for(let k = j + 1; k <= nums.length -1; k++){
                let result = nums[i] + nums[j] + nums[k];
                arr.push(result);
            }          
        }
    }
    console.log(arr);
    for(let i = 0; i < arr.length; i++){
        if(isPrime(arr[i])){
            answer++;
        }
    }
    console.log(answer);
    return answer;
}

solution(nums);