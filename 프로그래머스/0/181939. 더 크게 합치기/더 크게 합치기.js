function solution(a, b) {
    var numA =Number(String(a)+String(b));
    var numB =Number(String(b)+String(a));
    
    if(numA < numB) {
        return numB;
    }else {
        return numA;
    }
}