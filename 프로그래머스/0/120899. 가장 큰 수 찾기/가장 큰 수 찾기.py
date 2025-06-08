def solution(array):
    answer = []
    answer.append(max(array))
    count = 0
    
    for i in array:
        count += 1
        if i == max(array):
            answer.append(count-1)
            
    return answer