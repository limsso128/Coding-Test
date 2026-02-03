function solution(numbers) {
    var answer = 0;
    numlist = numbers.sort((a,b) => a-b);
    answer = numlist[numlist.length-1] * numlist[numlist.length-2];
    return answer;
    
}