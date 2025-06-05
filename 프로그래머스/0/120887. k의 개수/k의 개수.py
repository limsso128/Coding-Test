def int_to_list(n):
    return [int(d) for d in str(n)]
def solution(i, j, k):
    answer = 0
    
    for l in range(i,j+1):
        result = int_to_list(l)
        for x in result:
            if x == k:
                answer += 1
                
    return answer