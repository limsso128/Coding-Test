function solution(array, height) {
    var sum = 0;
    
    for(let x of array) {
        if(x > height) {
            sum += 1;
        }
    }
    
    return sum;
}