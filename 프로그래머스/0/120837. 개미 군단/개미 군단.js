function solution(hp) {
    var answer = 0;
    var max = Math.floor(hp/5); // 4
    var count1 = hp-(max*5); // 3
    var mld = Math.floor(count1/3); //병정개미 1
    var count2 = count1-(mld*3);
    var min = Math.floor(count2/1); //일개미 0
    
    answer = max+mld+min;
    
    return answer;
}