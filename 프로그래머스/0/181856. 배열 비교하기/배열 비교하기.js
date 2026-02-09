function solution(arr1, arr2) {
    var sum1 = 0;
    var sum2 = 0;
    
    if(arr1.length > arr2.length) {
        return 1
    } else if(arr1.length < arr2.length){
        return -1;
    } else {
        for(let x of arr1) {
            sum1 += x;
        }
        for(let y of arr2) {
            sum2 += y;
        }
        if(sum1>sum2) {
            return 1;
        }else if(sum1<sum2) {
            return -1;
        }else {
            return 0;
        }
    }
}