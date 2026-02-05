function solution(numbers) {
    let numStr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    numStr.forEach((word, idx) => {
        numbers = numbers.replaceAll(word, idx);
    });
    
    return Number(numbers);
}