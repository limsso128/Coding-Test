def solution(num_list):
    sum = 0
    
    for i in range(len(num_list)):
        if num_list[i] < 0:
            return i
        else:
            sum += 1
        
    if sum == len(num_list):
        return -1
    
