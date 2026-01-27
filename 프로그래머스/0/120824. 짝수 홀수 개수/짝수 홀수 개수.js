function solution(num_list) {
    var answer = [];
    var even = 0;
    var odd = 0;

    for(let x of num_list) {
        if(x%2==0) {
            even += 1;
        } else {
            odd += 1
        }
    }
    
    answer.push(even, odd)
    return answer;
}