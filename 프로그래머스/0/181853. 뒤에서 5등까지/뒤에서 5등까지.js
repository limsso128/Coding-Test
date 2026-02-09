function solution(num_list) {
    numlist = num_list.sort((a,b)=>a-b);
    return numlist.slice(0,5);
}