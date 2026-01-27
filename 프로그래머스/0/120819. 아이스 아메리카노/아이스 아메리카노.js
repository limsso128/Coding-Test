function solution(money) {
    var answer = [];
    count = Math.floor(money/5500)
    answer.push(count);
    answer.push(money-(5500*count))
    return answer;
}