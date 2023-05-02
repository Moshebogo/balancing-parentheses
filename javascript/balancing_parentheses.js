const leftParentheses = []
const rightParentheses = []

function balancingParentheses(string) {

      for (parentheses of string) {
        if (parentheses === '(') {
            leftParentheses.push(parentheses)
        } else if (parentheses === ')') {
            rightParentheses.push(parentheses)
        }
  }  

  if (Math.abs(leftParentheses.length - rightParentheses.length >= 3)) {
      return Math.abs(leftParentheses.length - rightParentheses.length)
  }

  let total = 0
  if (string[0] === ')' && string.endsWith('(')) {
       total = total + 2
  } else if (string[0] === ')') {
       total = total + 1
  } else if (string.endsWith('(')) {
      total = total + 1
  }
  return total
}

console.log(balancingParentheses(')))))'))
// console.log(rightParentheses)
// console.log(leftParentheses)


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
