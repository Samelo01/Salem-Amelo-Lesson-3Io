








//--------------- IMPORTANT!!! ---------------

// IF YOU HAVE NOT READ THE README.md FILE YET, double click on that file in the "Files" panel to the left now and read it before you begin your assignment!  








//---------- OVERVIEW AND INSTRUCTIONS ----------

//# JavaScript Loops and Arrays
// This is the coding assigment for the third week of the Intro to Programming course from Code the Dream. The concepts touched on in this assignment include:
//   - Simplify Repetitive Tasks with Loops
//   - Working with ‘for’ Loops
//   - Understanding Arrays


// In this assignment you will write your own code. Your instructions are listed as "comments", meaning the instructions are grayed out and start with '//' at the beginning of the line of code. Put your answers immediately below the instructions for each question. As mentioned in the README.md file, you'll need to use console logs for all the questions to check your code output. Using a function in a console.log is very similar to how you were using them with variables last week. To invoke/call the function use the syntax: 

  //  console.log("Q#: ", functionName(anyInput))

// As always, click the green Run button at the top of the screen to see the output of your called functions in the Console tab to the right of this screen. Check to make sure that the output you get in your Console is the expected output.  To ensure you get comfortable with and learn the syntax well, be sure your AI code completion options are off!  You can find instructions on how to do this in your README.md file under "Instructions".


// ---------- QUESTION 1 ----------
// Write a function called 'repeat' that takes 1 integer parameter and, using a for or while loop, prints out the string "Hello World!" to the console the same number of times as the parameter. NOTE: for this question, since your console log should be inside your function, you only need to call/invoke the function after you write it rather than call/invoke it inside of a console.log.

// EXAMPLE "LOG":
//    repeat(3);
// EXAMPLE OUTPUT: 
//    Hello World!
//    Hello World!
//    Hello World!

// PUT YOUR CODE HERE
function repeat(num){
  for(let i = 0; i < num; i++){
    console.log("Q1: ", "Hello World!")
  }
}
repeat(3)

// ---------- QUESTION 2 ----------
// Write a function called 'pyramidCounting' that takes 1 integer parameter and returns the sum of all of the numbers between 0 and the parameter. 

// EXAMPLE LOG: 
//    console.log("Q2: ", pyramidCounting(4));
// EXAMPLE OUTPUT: 
//    Q2: 10
// The mathematical explanation of this is 0+1+2+3+4 = 10.

//PUT YOUR CODE HERE
function pyramidCounting(num){
  let sum = 0
  for(let i = 0; i <= num; i++){
    sum += i
  }
  return sum
}
console.log("Q2: ", pyramidCounting(4))

// ---------- QUESTION 3 ----------
// Write a function called 'noVowels' that take a string parameter and removes vowels from that string using a loop.

// EXAMPLE LOG:
//    console.log("Q3: ", noVowels(adventurous));
// EXAMPLE OUTPUT:
//    Q3: dvntrs

// PUT YOUR CODE HERE
function noVowels(str){
  let newStr = ""
  for(let i = 0; i < str.length; i++){
    if(str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && str[i] !== "o" && str[i] !== "u"){
      newStr += str[i]
    }
  }
  return newStr
}
console.log("Q3: ", noVowels("adventurous"))

// ---------- QUESTION 4 ----------
// Write a function called 'vowelCount' that takes 1 string parameter and returns the number of vowels in that string. 

// EXAMPLE LOG:
//    console.log("Q4: ", vowelCount('I love to code.'));
// EXAMPLE OUTPUT: 
//    Q4: 6

// PUT YOUR CODE HERE
function vowelCount(str){
  let count = 0
  for(let i = 0; i < str.length; i++){
    if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
      count++
    }
  }
  return count
}
console.log("Q4: ", vowelCount('I love to code.'))

// ---------- QUESTION 5 ----------
// Write a function called 'numOfOdds' that takes 1 integer parameter and returns the number of odd numbers between 0 and that number, including the number if it's odd. (Hint: Use the modulo operator)

// EXAMPLE LOG:
//    console.log("Q5: ", numOfOdds(15));
// EXAMPLE OUTPUT: 
//    Q5: 8

// PUT YOUR CODE HERE
function numOfOdds(num){
  let count = 0
  for(let i = 0; i <= num; i++){
    if(i % 2 !== 0){
      count++
    }
  }
  return count
}
console.log("Q5: ", numOfOdds(13))

// ---------- QUESTION 6 ----------
// Create two variables named 'empty' and 'full'.  Assign an empty array to the 'empty' variable and any array of strings or numbers to the 'full' variable.  Write a function called 'arrayChecker' that returns true if the array passed as a parameter is empty and false if not.  Check both the 'empty' and 'full' variables to make sure they are returning the expected values.

// EXAMPLE LOGS:
//    console.log("Q6 empty: ", arrayChecker(empty));
//    console.log("Q6 not empty: ", arrayChecker(full));
// EXAMPLE OUTPUTS:
//    Q6 empty: true
//    Q6 not empty: false

// PUT YOUR CODE HERE
let empty = []
let full = [1,2,3,4,5]
function arrayChecker(arr){
  if(arr.length === 0){
    return true
  } else {
    return false
  }
}
console.log("Q6 empty: ", arrayChecker(empty))
console.log("Q6 not empty: ", arrayChecker(full))

// ---------- QUESTION 7 ----------
// Write a function called 'getElementAt' that takes an array parameter and an integer parameter.  The function should return the element in the array at the given number index or 'null' if it doesn't exist.  Use your 'full' variable from Question 6 to test.

// EXAMPLE LOGS:
//    console.log("Q7: ", getElementAt(full, 2));
//    console.log("Q7: ", getElementAt(full, 7));
// EXAMPLE OUTPUT: (if the array assigned to variable 'full' is ["dream", 19, "code", 24, 180])
//    Q7: code
//    Q7: null

// PUT YOUR CODE HERE
function getElementAt(arr, num){
  if(arr[num] === undefined){
    return null
  } else {
    return arr[num]
  }
}
console.log("Q7: ", getElementAt(full, 2))
console.log("Q7: ", getElementAt(full, 7))

// ---------- QUESTION 8 ----------
// Write a function called 'insertInArray' that takes an array parameter, makes a NEW array with the value '0' inserted at the second position in the NEW array.  The function should return the NEW array.  Use your 'full' variable from Question 6 to test.  NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array.  To make a copy you can use the slice() method as in this example: 
// let newArray = originalArray.slice() 
// LEARNING MOMENT: Also console log the variable 'full' to compare the new array to the original.

// EXAMPLE LOG:
//    console.log("Q8: ", insertInArray(full));
//    console.log("original array: ", full);
// EXAMPLE OUTPUT: (if the array assigned to variable 'full' is ["dream", 19, "code", 24, 180])
//    Q8: ["dream", 0, 19, "code", 24, 180]
//    original array: ["dream", 19, "code", 24, 180]

// PUT YOUR CODE HERE
function insertinArray(arr){
  let newArr = arr.slice()
  newArr.splice(1, 0, 0)
  return newArr
}
console.log("Q8: ", insertinArray(full))
console.log("Q8: ", "original array: ", full)


// ---------- QUESTION 9 ----------
// Write a function called 'compareArrays' that takes two Array parameters (containing numbers or strings only) and returns true if they are equal, false if not.  The purpose of this function should be to look at each element of the two arrays and compare them, returning false when they either hit two items that don't match, or returning false if the two arrays themselves are different lengths. You can test this with the 'empty' and 'full' variables from Question 6, and/or you can create a variable called 'compare' and assign it an array identical to 'full' to compare those.  To further test your function's accuracy, create a new variable called 'part' that is a partial copy of the 'full' variable and test that as well.

// REMEMBER: In JavaScript, 1 === '1' is false, but 1 == '1' is true. You'll need to use the triple equals operator which is more strict because it compares data type.

// EXAMPLE LOG:
//    console.log("Q9 same: ", compareArrays(full, compare));
// EXAMPLE OUTPUT: (if both arrays assigned to variable 'full' and 'compare' are ["dream", 19, "code", 24])
//    Q9 same: true

// EXAMPLE LOG:
//    console.log("Q9 different: ", compareArrays(full, empty));
// EXAMPLE OUTPUT: (if using variables from Question 6)
//    Q9 different: false

// EXAMPLE LOG:
//    console.log("Q9 partial: ", compareArrays(full, part));
// EXAMPLE OUTPUT: (if 'full' variable is ["dream", 19, "code", 24] and if 'part' variable is ["dream", 19, "code"])
//    Q9 different: false

// PUT YOUR CODE HERE
function compareArrays(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false
  }
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false
    }
  }
  return true
}
let compare = ["dream", 19, "code", 24]
let part = ["dream", 19, "code"]

console.log("Q9 same: ", compareArrays(full, compare))
console.log("Q9 different: ", compareArrays(full, empty))
console.log("Q9 partial: ", compareArrays(full, part))



// ---------- QUESTION 10 ----------
// Create a variable called 'numbers' and assign it an array with at least 3 numbers as elements (example: [10, 3, 4]).  Write a function called 'calculateTotal' that takes one array parameter and loops through the array in order to return the sum of all the array elements.
// STRETCH GOAL: use the `reduce()` method

// EXAMPLE LOG:
//    console.log("Q10: ", calculateTotal(numbers));
// EXAMPLE OUTPUT: (if the array assigned to variable 'numbers' is [3, 4, 2 ,8])
//    Q10: 17

// PUT YOUR CODE HERE
let numbers = [3, 4, 2, 8]
function calculateTotal(arr){
  let sum = 0
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum
}
console.log("Q10: ", calculateTotal(numbers))

// ---------- QUESTION 11 ----------
// Write two functions called 'findEvens' and 'findOdds' that each take one array parameter and each returns a NEW Array of all the even or odd numbers as indicated.  NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array.  To make a copy you can use the slice() method as in this example: 
// let newArray = originalArray.slice()
// STRETCH GOAL: use the `filter()` method

// EXAMPLE LOG:
//    console.log("Q11 evens: ", findEvens([10,2,3,19,7,6,93]));
//    console.log("Q11 odds: ", findOdds([10,2,3,19,7,6,93]));
// EXAMPLE OUTPUT: 
//    Q11 evens: [10,2,6]
//    Q11 odds: [3,19,7,93]

// PUT YOUR CODE HERE
function findEvens(arr){
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      newArr.push(arr[i])
    }
  }
  return newArr
}

function findOdds(arr){
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 !== 0){
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log("Q11 evens: ", findEvens([10,2,3,19,7,6,93]))
console.log("Q11 odds: ", findOdds([10,2,3,19,7,6,93]))
                                     
// ---------- QUESTION 12 ----------
// Write a function called 'makeSquares' that takes one array parameter and returns a NEW Array with the squared values of each of the numbers.  NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array.  To make a copy you can use the slice() method as in this example: 
// let newArray = originalArray.slice()
// STRETCH GOAL: use the `map()` method

// EXAMPLE LOG: 
//    console.log("Q12: ", makeSquares([2,5,8]));
// EXAMPLE OUTPUT: 
//    Q12: [4,25,64]

// PUT YOUR CODE HERE
function makeSquares(arr){
  let newArr = [] 
    for(let i = 0; i < arr.length; i++){
      newArr.push(arr[i] * arr[i])
    }
  return newArr
  }

  console.log("Q12: ", makeSquares([2,5,8]))

// ---------- BONUS QUESTION / STRETCH GOAL ----------
// Back in the old days, the early 2000s, this was a famous technical interview question. Write a function definition that takes NO parameters. The function will loop from 1 to 15 and return an array of numbers. While looping, the function will check if the current value in the loop is divisible by 3, by 5, or by both. If the current value in the loop is divisible by 3, the function will add the string "fizz" to an array. If the current value in the loop is divisible by 5, the function will add the string "buzz" to the array. If the current value in the loop is divisible by both, the function will add the value "fizzbuzz" to the array. If the number isn't divisible by 3, 5, OR both, it will add the number to the array.  The function will return the array of values.

// EXAMPLE LOG:
//    console.log("BONUS: ", fizzBuzz();
// EXAMPLE OUTPUT:
//    BONUS: [1,2,'fizz',4,'buzz','fizz',7,8,'fizz','buzz',11,'fizz',13,14,'fizzbuzz']

// PUT YOUR CODE HERE
function fizzBuzz(){
  let arr = []
  for(let i = 1; i <= 15; i++){
    if(i % 3 === 0 && i % 5 === 0){
      arr.push("fizzbuzz")
    } else if(i % 3 === 0){
      arr.push("fizz")
    } else if(i % 5 === 0){
      arr.push("buzz")
    } else {
      arr.push(i)
    }
  }
  return arr
}
console.log("BONUS: ", fizzBuzz())