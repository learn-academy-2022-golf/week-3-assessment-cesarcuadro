// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

/*
Boiler Template

describe("areYouHungry", () => {
  it("returns eat food or keep coding based on input", () => {
    expect(areYouHungry("yes")).toEqual("eat food")
    expect(areYouHungry("no")).toEqual("keep coding")
  })
})

*/

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("greaterFib", () => {
  it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
    expect(greaterFib(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(greaterFib(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
// -> ReferenceError: greaterFib is not defined

// b) Create the function that makes the test pass.

/*
Create a function that takes in one parameter as an argument
The argument that the parameter is taking in is a number data type that is greater than 2
Find and use a method that takes in the fibonacci sequence
Use the number data type as the length of how many numbers in the fibonacci sequence will be used
The Array.from() method is a static method that creates a new array. 
Return the numbers from the fibonacci sequence inside of an array
*/

const greaterFib = (number) => {
  let fibNumber = (number - 1) + (number - 2)
  return Array.from(fibNumber)
}
  
  /*

      - Expected  - 8
    + Received  + 1

    - Array [
    -   1,
    -   1,
    -   2,
    -   3,
    -   5,
    -   8,
    - ]
    + Array []

    Test Suites: 1 failed, 1 total
Tests:       1 failed, 2 passed, 3 total
  
    I am currently stuck at this point. I understand that we need the equation for the fibonacci sequence, but if I take out the Array.from() method, it will only return the number in the sequence. But if I tried inputting predetermined values to start the sequence or using an if statement to confirm that the number argument is larger than two, I either get more numbers than expected or multiple NaN's. 
    When adding String inside of the Array.from() method, there is one more number than expected on the console instead of the extra being another array.

  */
  



// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

//object,values() turns the values of the objects into an array

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

describe("studyMinutes", () => {
  it("returns an array of the values sorted from least to greatest.", () => {
    expect(studyMinutes(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(studyMinutes(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

// ReferenceError: studyMinutes is not defined

// b) Create the function that makes the test pass.

//Create a function that takes in one object as a parameter
//object.values() turns the values of the objects into an array
//find a way to iterate through the array
//sort the numbers inside of the array
//use array.sort() in ascending order
//array.sort(function(a,b){return a-b}) is the function that takes in two numbers, compares which one is bigger out of the two numbers, then places the bigger number in the b value. This process of sorting is iterated throughout the entire array.

const studyMinutes = (object) => {
  return Object.values(object).sort(function(a,  b) {return a - b})
}

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]
//Process: [100, 100 - 17 = 83, 83 - 23 = 60, 60 - 9 = 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]
//Process: [250, 250 - 89 = 161, 161 + 100 = 261, 261 - 96 = 165]

const accountTransactions3 = []
// Expected output: []

describe("arithmetic", () => {
  it("returns an array of the accumulating sum. An empty array should return an empty array", () => {
    expect(arithmetic(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(arithmetic(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(arithmetic(accountTransactions3)).toEqual([])
  })
})

// b) Create the function that makes the test pass.

/*
create a function named arithmetic that takes in one array as a parameter
zero index of the array as the original integer then add the value of the next integer
Possibly use the .map() method to iterate through the array
Inside of the .map() method, we will be using the accumulative sum function
  The accumulative sum function is 
returns an array of the accumulating sum is when the initial sum is equal to the zero index and value is the input[n]. Once the function is called, the sum is updated with the previous value of output[n-1]. Each time the function is called, the sum will always be called to the zero index.
  starting at the first index, add the value of the following index
  the array that is outputted is the same number of the original array
*/

const arithmetic = (array) => {
  return array.map((sum => value => sum += value)(0))
}

/*
Array [
        100,
    -   -17,
    -   -23,
    -   -9,
    +   83,
    +   60,
    +   51,
      ]
const arithmetic = (array) => {
  return array.map((sum => value => sum += value)(0))
}
The test failed because I put the input of the array that was given instead of the expected output in my testing function. To correct this, I changed the values inside of the .toEqual() method to the actual array for the expected output

Test Suites: 1 failed, 1 total
Tests:       1 failed, 2 passed, 3 total

*/