
function balancingParentheses(string) {
    const array = []
    for (letter of string) {
        array.push(letter)
    }

    const left = []
    const right = []
    let total = 0

    if (array[0] === ')') {
        array.shift()
        total += 1
    } else if (array[-1] === '(') {
        array.pop()
        total += 1
    }

    for (each of array) {
        if (each === "(") {
            left.push(each)
        } else if (each === ")") {
            right.push(each)
        }
    }

    if (right.length > left.length) {
        return right.length - left.length + total                                       
    } else if (left.length > right.length) {
        return left.length - right.length + total
    } else {
        return total
    }

}



if (require.main === module) {
  console.clear()  
  // add your own tests in here
  console.log("Expecting: 4");
  console.log(balancingParentheses('(((('));

  console.log("");

  console.log("Expecting: 6");
  console.log(balancingParentheses('))))))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
