def solution(num_list):
    even = 0;
    odd = 0;
    
    for i in range(1, len(num_list)+1):
        if i % 2 == 0:
            even += num_list[i-1]
        else:
            odd += num_list[i-1]
    
    if even > odd:
        return even
    else:
        return odd
