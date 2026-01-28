function solution(n, k) {
    var answer = 0;
    var count = Math.floor(n/10);
    answer = (n*12000)+((k-count)*2000);
    return answer;
}