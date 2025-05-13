def solution(money):
    answer = []
    i = int(money/5500)
    
    answer.append(i)
    answer.append(money-(i*5500))
    
    return answer