def balance_parenthese(string):
    array = [letter for letter in string]

    left = []
    right = []
    total = 0

    if array[0] == ')':
        array.pop(0)
        total += 1
    elif array[-1] == '(':
        array.pop(-1)
        total += 1    
    
    for item in array:
        if item == '(':
            left.append(item)
        elif item == ')':
            right.append(item) 

    if len(right) > len(left):
        return len(right) - len(left) + total         
    elif len(left) > len(right):
        return len(left) - len(right) + total
    else:
        return total 
    



if __name__ == '__main__':
    import os
    os.system("clear")
    
    print("expecting 2:")
    print(balance_parenthese('()))'))
    print()
    print("expecting 4:")
    print(balance_parenthese('))))'))
    print()
    print("expecting 0:")
    print(balance_parenthese('(()())'))
    print()
    print("expecting 3:")
    print(balance_parenthese('()(()))))'))

