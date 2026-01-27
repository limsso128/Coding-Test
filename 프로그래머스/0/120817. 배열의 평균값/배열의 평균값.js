function solution(numbers) {
    var answer = 0;
    var sum = 0;
    
    for(x of numbers) {
        sum += x
    }
    
    answer = sum/numbers.length
    return answer;
}