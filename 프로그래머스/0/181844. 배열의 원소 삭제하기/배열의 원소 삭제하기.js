function solution(arr, delete_list) {
    var answer = [];
    var numlist = []
    for(let x of arr) {
        for(let y of delete_list) {
            if(x==y) {
                numlist.push(x);
            }
        }
    }
    
    answer = arr.filter(num => !numlist.includes(num));
    
    return answer;
}