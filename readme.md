# Assignment Questions and Answers

## 1.
var is the old way to make a variable. It works inside functions and you can declare the same name again without error.
let is block-scoped, meaning it works only inside  {}  brackets. You cannot declare the same name twice in the same scope.
const is also block-scoped, but once you assign a value you cannot change it again. It is used for values that should not change.

## 2.

forEach() goes through every element of an array and runs some code, but it does not return anything.
map() also goes through every element, but it creates a new array with the results.
filter() checks each element with a condition and returns only those that match the condition as a new array.

## 3.

Arrow functions are a shorter way to write functions. Instead of writing  function , you use  => . They make the code cleaner and often easier to read.

## 4.

Destructuring means taking values from arrays or objects and storing them directly in variables.

## 5.

Template literals use backticks (`) instead of quotes. You can put variables inside using ${}. This is easier and cleaner than using string concatenation with + .
