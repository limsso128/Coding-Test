function solution(array) {
    var answer = [];
    var maxNum = Math.max(...array);
    
    for(let i=0; i<array.length; i++) {
        if(array[i] == maxNum) {
            answer.push(maxNum, i)
        }
    }
    
    return answer;
}