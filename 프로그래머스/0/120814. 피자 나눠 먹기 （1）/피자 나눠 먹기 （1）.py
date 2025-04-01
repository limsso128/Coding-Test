def solution(n):
    num = n % 7 
    
    if num == 0:
        return n // 7
    elif n > 7:
        return (n // 7) + 1
    elif n < 7:
        return 1
    
