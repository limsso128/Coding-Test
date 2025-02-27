def solution(strArr):
    answer = []
    
    for str in strArr:
        if 'ad' not in str:
            answer.append(str)
        else:
            continue
            
    return answer