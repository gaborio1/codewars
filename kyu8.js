// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

const boolToWord = (bool) => bool ? "Yes" : "No";

// function boolToWord(bool){
//   return bool ? "Yes" : "No";
// }

// ============================================================================
// ============================================================================


// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'

const solution = (str) => str.split("").reverse().join("");

// function solution(str){
//   return str.split("").reverse().join("");
// }

// ============================================================================
// ============================================================================

// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

var summation = function (num) {
    // Code here
    var result = 0;
    for (var i = 1; i <= num; i++) {
      result += i;
    }
    return result;
}

// ============================================================================
// ============================================================================

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
    findSmallestInt(arr) {
      var result = arr[0];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] < result) {
          result = arr[i];
        }
      }
      return result;
    }
  }

// ============================================================================
// ============================================================================

// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
    return x.replace(/\s+/g,'')
  }

// ============================================================================
// ============================================================================

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Example:

// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12
// Notes:

// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
    var result;
    if (num > 0) {
      result = -Math.abs(num);
    } else {
        result = num;
    } return result;
  }

// ============================================================================
// ============================================================================

// Very simple, given a number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(num) {
    var result;
    if (num > 0) {
      result = -Math.abs(num);
    } else {
        result = Math.abs(num);
    } return result;
  }
  
  
  //  SIMPLER
  
  // function opposite(number) {
  //   return(-number);
  // }

// ============================================================================
// ============================================================================

// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
    var result = "";
    for (var i = 0; i < n; i++) {
      result = result + s;
  //     seperated by space below:
  //     result = result + " " + s;
      }
    return result;
  }

// ============================================================================
// ============================================================================

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.



function positiveSum(arr) {
    var sum = 0;
    arr.forEach(function(i) {
      if(i > 0) {
        sum = sum + i;
      }
    })
    return sum;
  }

// ============================================================================
// ============================================================================

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
    if(Number.isInteger(number/2)){
        return "Even";
    } else {
        return "Odd";
      }
  }

// ============================================================================
// ============================================================================

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


function removeChar(str){
    return str.slice(1, str.length-1);
  };
  

// ============================================================================
// ============================================================================

// multiply

function multiply(a, b){
    return a * b
  }


// ============================================================================
// ============================================================================

