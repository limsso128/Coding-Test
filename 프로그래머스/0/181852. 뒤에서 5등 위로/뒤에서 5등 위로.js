function solution(num_list) {
    var numlist = num_list.sort((a,b)=>a-b);
    var count = numlist.length-5
    return numlist.slice(numlist.length-count, numlist.length);
}