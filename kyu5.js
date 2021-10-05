
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

const moveZeros = (arr) => {
	const zeros = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			zeros.push(0); // COUNT ZEROS
			arr.splice(i, 1); // DELETE CURRENT ELEMENT (0) FROM ARR
			i--; // DECREASE INDEX AFTER DELETING ELEMENT
		}
	}
	// console.log(zeros);
	// console.log(arr);
	solution = arr.concat(zeros); // ADD ZEROS TO THE END
	// console.log(solution);
	return solution;
};

// moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
// moveZeros([9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0]);

// ========== OTHER CODEWARS SOLUTIONS ==========


// var moveZeros = function (arr) {
//     return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
//   }

// var moveZeros = function (arr) {
//     var filtedList = arr.filter(function (num){return num !== 0;});
//     var zeroList = arr.filter(function (num){return num === 0;});
//     return filtedList.concat(zeroList);
//   }

// var moveZeros = function (arr) {
//     for(var i = arr.length - 1; i >= 0; i--) {
//       if(arr[i] === 0) {
//         arr.splice(i, 1);
//         arr.push(0);
//       }
//     }
//     return arr;
//   }


// ============================================================================
// ============================================================================

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
    const words = str.split(" "); // SPLIT INTO ARRAY OF STRINGS
    let punct = []; //  EMPTY ARRAY FOR PUNCT MARK
    const solutionArr = []; //  EMPTY ARRAY FOR MUTATED WORDS
    if (
        words[words.length - 1] === "." ||
        words[words.length - 1] === "!" ||
        words[words.length - 1] === "?"
    ) {
        punct = words.pop(); // IF FOUND AT LAST INDEX, REMOVE IT AND SAVE TO VAR
    }
    for (let i = 0; i < words.length; i++) {
        const first = words[i].slice(0, 1); //  GET FIRST LETTER
        const sub = words[i].substring(1); // GET REMAINING LETTERS
        const swap = sub.concat(first, "ay"); // CONCAT FIRST + "AY" TO SUBSTRING
        solutionArr.push(swap); //  PUSH MUTATED WORDS INTO ARR
    }
    if (punct[0]) {
      //  IF THERE IS A PUNCT MARK
        solutionArr.push(punct); //  PUSH IT TO END OF ARRAY
    }
    return solutionArr.join(" "); // JOIN INTO STRING
}
  
  // pigIt("Pig latin is cool");
  // igPay atinlay siay oolcay
  
  // pigIt("Hello world !");
  // elloHay orldway !
  
  pigIt("O tempora o mores !");
  // 'Oay emporatay oay oresmay !'
  
  // ??????????????????????
  // pigIt("Hello world!");
  // ??????????????????????
  
  // ========== OTHER CODEWARS SOLUTIONS ===========
  
  // function pigIt(str){
  //   return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
  // }
  
  // function pigIt(str){
  //   return str.split(' ').map(word => {
  //     return word.substring(1) + word[0] + 'ay';
  //   }).join(' ');
  // }
  
  // function pigIt(str){
  //   return str
  //     .split(' ')
  //     .map((word) => word.match(/[a-z]/i) ? word.slice(1) + word.charAt(0) + 'ay' : word)
  //     .join(' ')
  // }
  
// ============================================================================
// ============================================================================

// 10/4/20

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3 , 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1,2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

var maxSequence = function (arr) {
    var currentTotal = 0;                                     // CURRENT TOTAL FOR EACH POSSIBLE SUM
    var currentTotalsArr = [];                                // STORE ALL POSSIBLE SUMS
    var count = 0;                                            // COUNT INSTANCES OF NEGATIVE NUMBERS
    console.log("arr: " + arr);
    if (arr.length === 0) {                                   // if EMPTY ARRAY
      console.log("empty");
      return 0;                                               // RETURN 0
    }
    for (var i = 0; i < arr.length; i++) {                    // COUNT INSTANCES OF NEGATIVE NUMBERS
      if (arr[i] < 0) {
        count += 1;
      }
    }
    if (count === arr.length) {                               // if ALL NUMBERS ARE NEGATIVE
      return 0;                                               // RETURN 0
    }
  
    for (var i = 0; i < arr.length; i++) {                    // LOOP THROUGH EACH NUMBER
      var currentTotal = 0;                                   // !!! RESET CURRENT TOTAL FOR EACH NUM !!!
      for (var j = i; j < arr.length; j++) {                  // START NEW LOOP BUT STARTING FROM CURRENT INDEX j
        currentTotal += arr[j];                               // ADD TOGETHER CURRENT NUM AND NUMBERS AFTER 
        console.log("arr[j] " + arr[j]);
        console.log(currentTotal);
        currentTotalsArr.push(currentTotal);                  // SAVE ALL SUB ARRAY SUMS TO CURRENT TOTALS ARRAY
      }
    }
    console.log(currentTotalsArr);
    var result = currentTotalsArr.reduce(function (a, b) {    // FIND THE LARGEST SUM OF SUB ARRAYS
      return Math.max(a, b);
    });
    console.log(result);
    return result;                                            // RETURN LARGEST
};
  
  // 3/4 DOES NOT WORK WITH SYMMETRIC ARRAY OR RANDOM ARRAY
  // var maxSequence = function (arr) {
  //   console.log(arr);
  //   if (arr === []) {
  //     return 0;
  //   }
  //   var count = 0;
  //   var sum = arr.reduce((a, b) => a + b, 0);
  //   var leftSubs = [];
  //   var leftMaxIndex;
  //   var rightSubs = [];
  //   var rightMaxIndex;
  //   var sumArr = [];
  //   var result;
  
  //   for (var i = 0; i < arr.length; i++) {
  //     if (arr[i] < 0) {
  //       count += 1;
  //     }
  //   }
  //   if (count === arr.length) {
  //     return 0;
  //   }
  
  //   console.log("sum: " + sum);
  
  //   function leftScan() {
  //     for (var i = 0; i < arr.length; i++) {
  //       sum -= arr[i];
  //       console.log(i + ": " + sum);
  //       leftSubs.push(sum);
  //     }
  //     console.log("left scan " + leftSubs);
  //     // FIND INDEX OF LARGEST ELEMENT IN ARRAY - INDEXOF(MATH.MAX(ARR)) ??
  //     var leftMax = leftSubs.reduce(function (a, b) {
  //       return Math.max(a, b);
  //     });
  //     console.log("leftMax: " + leftMax);
  //     if (sum > leftMax) {
  //       console.log("sum is greater than leftMax");
  //       leftMaxIndex = 0;
  //       console.log("leftMaxIndex: " + leftMaxIndex);
  //       console.log("first: " + arr[leftMaxIndex + 1]);
  //     } else {
  //       leftMaxIndex = leftSubs.indexOf(leftMax);
  //       console.log("leftMaxIndex: " + leftMaxIndex);
  //       console.log("first: " + arr[leftMaxIndex + 1]);
  //     }
  //   }
  
  //   function rightScan() {
  //     sum = arr.reduce((a, b) => a + b, 0);
  //     console.log("sum reset: " + sum);
  //     var j = arr.length - 1;
  //     console.log("j: " + j);
  //     for (j; j > -1; j--) {
  //       sum -= arr[j];
  //       console.log(j + ": " + sum);
  //       rightSubs.push(sum);
  //     }
  //     console.log("right scan " + rightSubs);
  //     // FIND INDEX OF LARGEST ELEMENT IN ARRAY
  //     var rightMax = rightSubs.reduce(function (a, b) {
  //       return Math.max(a, b);
  //     });
  //     console.log("rightMax: " + rightMax);
  //     rightMaxIndex = rightSubs.indexOf(rightMax);
  //     console.log("rightMaxIndex: " + rightMaxIndex);
  //     console.log("last: " + arr[arr.length - 2 - rightMaxIndex]);
  //   }
  
  //   leftScan();
  //   rightScan();
  
  //   // IF SYMMETRIC INPUT ARRAY
  //   if (leftMaxIndex === rightMaxIndex) {
  //     console.log("symmetric input array");
  //     sumArr = arr.slice(leftMaxIndex + 1, arr.length);
  //     console.log("sumArr: " + sumArr);
  //     // TRIM END OF SUM ARR
  //   }
  
  //   sumArr = arr.slice(leftMaxIndex + 1, arr.length - 1 - rightMaxIndex);
  //   console.log("sumArr: " + sumArr);
  //   result = sumArr.reduce(function (a, b) {
  //     return a + b;
  //   });
  //   console.log("result: " + result);
  //   return result;
  // };
  
  // SOLUTION IS SUM OF INDECES 3,4,5 and 6.
  maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // 6 WORKS
  // maxSequence([-2, 3, -1, 3, -10, 3, -1, 3, -20]);
  // maxSequence([-1, 3, -1, 3, -2]);
  // maxSequence([-1, -3]);
  
  // MDN
  // const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
  
  // console.log(beasts.indexOf('bison'));
  // // expected output: 1
  
  // // start from index 2
  // console.log(beasts.indexOf('bison', 2));
  // // expected output: 4
  
  // console.log(beasts.indexOf('giraffe'));
  // // expected output: -1
  
  // [-2, 1, -3, 4, -1, 2, 1, -5, 4]
  // "sum: 1"
  // "0: 3"
  // "1: 2"
  // "2: 5"
  // "3: 1"
  // "4: 2"
  // "5: 0"
  // "6: -1"
  // "7: 4"
  // "8: 0"
  // "left scan 3,2,5,1,2,0,-1,4,0"
  // "leftMax: 5"
  // "leftMaxIndex: 2"
  // "first: 4"
  // "sum reset: 1"
  // "j: 8"
  // "8: -3"
  // "7: 2"
  // "6: 1"
  // "5: -1"
  // "4: 0"
  // "3: -4"
  // "2: -1"
  // "1: -2"
  // "0: 0"
  // "right scan -3,2,1,-1,0,-4,-1,-2,0"
  // "rightMax: 2"
  // "rightMaxIndex: 1"
  // "last: 1"
  // "sumArr: 4,-1,2,1"
  // "result: 6"
  

// ============================================================================
// ============================================================================

// 4/4/20
// THIS IS BASED ON dirReduc(arr) - 5kyu KATA

function validParentheses(parens) {
    var parensArr = parens.split("");                             // SPLIT STR INTO ARR
    for (var i = 0; i < parensArr.length; i++) {                  // LOOP THROUGH
      if (parensArr[i] === "(" && parensArr[i + 1] === ")") {     // if PAIR FOUND ()
        parensArr.splice(i, 2);                                   // REMOVE 2 ELEMENTS STARTING FROM AT THAT INDEX
        i -= 2;                                                   // RESET LOOP i BY 2 SO LOOP CAN START AGAIN FROM WHERE IT LEFT OFF
      }
    }
    if (parensArr.length > 0) {                                   // if ANY ELEMENTS REMAIN
      return false;                                               // false
    } else {                                                      // OTHERWISE
      return true;                                                // true
    }
}
  
  // validParentheses("())()")
  validParentheses("((()())");
  
  
  // Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
  
  // Examples
  // "()"              =>  true
  // ")(()))"          =>  false
  // "("               =>  false
  // "(())((()())())"  =>  true
  
  //==========================================================================================
  // function validParentheses(string){
  //    var tokenizer = /[()]/g, // ignores characters in between; parentheses are
  //        count = 0,           // pretty useless if they're not grouping *something*
  //        token;
  //    while(token = tokenizer.exec(string), token !== null){
  //       if(token == "(") {
  //          count++;
  //       } else if(token == ")") {
  //          count--;
  //          if(count < 0) {
  //             return false;
  //          }
  //       }
  //    }
  //    return count == 0;
  // }

// ============================================================================
// ============================================================================

// Calculating with Functions
//31/3/20

// one(plus(two()))

// 1. INNER FUNCTION two() RETURNS 2
// 2. MIDDLE FUNCTION plus(2) TAKES 2 aAS b AND PLUGS IT IN A FUNCTION AS b AS AN ARGUMENT  return function(a) { return a + b; } b=2 AND RETURNS THAT FUNCTION DEFINITION THAT WILL TAKE a.
// 3. OUTER FUNCTION one(plus(two())) TAKES THAT AS op AND PLUGS 1 INTO IT AS a. THEN RETURNS a + b / 1 + 2 

function zero(op) {                           // OUTER AND/OR INNER FUNCTION
    if (arguments.length === 0) {               //THIS ALSO WORKS:  if (op === undefined) !!! NO ARGUMENS MEANS FUNCION IS THE INNER SO RETURN THE NUMBER ONLY FOR RIGHT OPERAND. 
      return 0;
    } else {                                    // IF THERE ARE MORE THAN 0 ARGUMENTS IT MEANS THAT IT'S THE OUTER FUNCTION SO RETURN MIDDLE FUNCTION WITH LEFT OPERAND PASSED IN
      return op(0);
    }
  }
  
  function one(op) {                            // OUTER FUNCTION WILL TAKE "op = function(a) { return a + 2;}"
    if (arguments.length === 0) {               // 
      return 1;
    } else {
      console.log("op = " + op);                // "op = function(a) { return a + 2;}"
      console.log("op(1) = " + op(1));          // SO WILL RETURN "op(1) = 3"
      return op(1);
    }
  }
  
  function two(op) {
    if (arguments.length === 0) {
      return 2;
    } else {
       console.log("op = " + op);                
      console.log("op(2) = " + op(2));         
      return op(2);
    }
  }
  
  function three(op) {
    if (arguments.length === 0) {
      return 3;
    } else {
      return op(3);
    }
  }
  
  function four(op) {
    if (arguments.length === 0) {
      return 4;
    } else {
      return op(4);
    }
  }
  
  function five(op) {
    if (arguments.length === 0) {
      return 5;
    } else {
      return op(5);
    }
  }
  
  function six(op) {
    if (arguments.length === 0) {
      return 6;
    } else {
      return op(6);
    }
  }
  
  function seven(op) {
    if (arguments.length === 0) {
      return 7;
    } else {
      return op(7);
    }
  }
  
  function eight(op) {
    if (arguments.length === 0) {
      return 8;
    } else {
      return op(8);
    }
  }
  
  function nine(op) {
    if (arguments.length === 0) {
      return 9;
    } else {
      return op(9);
    }
  }
  
  
  
  function plus(b) {                            // MIDDLE FUNCTION TAKES b = RIGHT OPERAND (NUMBER RETURNED FROM INNER FUNCTION)
    console.log("b = " + b);                    // "b = 2"
    return function(a) {                        // RETURN op FUNCTION WITH LEFT OPERAND PASSED IN ( a PLUS )
      console.log("a = " + a);                  // "a = 1"
        return a + b;                           // AND CALCULATE RESULT
    }
  }
  
  function minus(b) {
    return function(a) {
        return a - b;
    }
  }
  
  function times(b) {
    return function(a) {
        return a * b;
    }
  }
  
  function dividedBy(b) {
    return function(a) {
        return Math.floor(a / b);
    }
  }
  
  
  
  
  one(plus(two()))
  //=======================================================
  
  
   
  //   const zero = (operation) => !operation ? 0 : operation(0);
  // const one = (operation) => !operation ? 1 : operation(1);
  // const two = (operation) => !operation ? 2 : operation(2);
  // const three = (operation) => !operation ? 3 : operation(3);
  // const four = (operation) => !operation ? 4 : operation(4);
  // const five = (operation) => !operation ? 5 : operation(5);
  // const six = (operation) => !operation ? 6 : operation(6);
  // const seven = (operation) => !operation ? 7 : operation(7);
  // const eight = (operation) => !operation ? 8 : operation(8);
  // const nine = (operation) => !operation ? 9 : operation(9);
  
  // const plus = (number) => (other_number) => other_number + number;
  // const minus = (number) => (other_number) => other_number - number;
  // const times = (number) => (other_number) => other_number * number;
  // const dividedBy = (number) => (other_number) => other_number / number;
  //=======================================================
  // function zero(func)   { return func ? func(0) : 0; };
  // function one(func)    { return func ? func(1) : 1; };
  // function two(func)    { return func ? func(2) : 2; };
  // function three(func)  { return func ? func(3) : 3; };
  // function four(func)   { return func ? func(4) : 4; };
  // function five(func)   { return func ? func(5) : 5; };
  // function six(func)    { return func ? func(6) : 6; };
  // function seven(func)  { return func ? func(7) : 7; };
  // function eight(func)  { return func ? func(8) : 8; };
  // function nine(func)   { return func ? func(9) : 9; };
  
  // function plus( b )      { return function( a ) { return a + b; }; };
  // function minus( b )     { return function( a ) { return a - b; }; };
  // function times( b )     { return function( a ) { return a * b; }; };
  // function dividedBy( b ) { return function( a ) { return a / b; }; };
  //=======================================================
  // ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  // .forEach(function (name, n) {
  //   this[name] = function (f) { return f ? f(n) : n }
  // });
  // function plus(n)      { return function (a) { return a + n } }
  // function minus(n)     { return function (a) { return a - n } }
  // function times(n)     { return function (a) { return a * n } }
  // function dividedBy(n) { return function (a) { return a / n } }
  //=======================================================
  
  // var n = function(digit) {
  //   return function(op) {
  //     return op ? op(digit) : digit;
  //   }
  // };
  // var zero = n(0);
  // var one = n(1);
  // var two = n(2);
  // var three = n(3);
  // var four = n(4);
  // var five = n(5);
  // var six = n(6);
  // var seven = n(7);
  // var eight = n(8);
  // var nine = n(9);
  
  // function plus(r) { return function(l) { return l + r; }; }
  // function minus(r) { return function(l) { return l - r; }; }
  // function times(r) { return function(l) { return l * r; }; }
  // function dividedBy(r) { return function(l) { return l / r; }; }
  //=======================================================
  // function zero(fn) {return fn ? fn(0) : 0}
  // function one(fn) {return fn ? fn(1) : 1}
  // function two(fn) {return fn ? fn(2) : 2}
  // function three(fn) {return fn ? fn(3) : 3}
  // function four(fn) {return fn ? fn(4) : 4}
  // function five(fn) {return fn ? fn(5) : 5}
  // function six(fn) {return fn ? fn(6) : 6}
  // function seven(fn) {return fn ? fn(7) : 7}
  // function eight(fn) {return fn ? fn(8) : 8}
  // function nine(fn) {return fn ? fn(9) : 9}
  
  // function plus(n) {return function(v) {return v + n}}
  // function minus(n) {return function(v) {return v - n}}
  // function times(n) {return function(v) {return v * n}}
  // function dividedBy(n) {return function(v) {return v / n}}
  //=======================================================
  
  // console.log(seven(times(five())), 35); // must return 35
  // console.log(four(plus(nine())), 13); // must return 13
  // console.log(eight(minus(three())), 5); // must return 5
  // console.log(six(dividedBy(two())), 3); // must return 3

// ============================================================================
// ============================================================================

// dirReduc will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
// Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible.

// 30/3/20

// 3
function dirReduc(arr) {
    for (var i = 0; i < arr.length; i++) {                    // LOOP REMOVES CONSECUTIVE OPPOSITE PAIRS
      if (
        (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") ||     // if ELEMENT AND NEXT ELEMENT ARE OPPOSITE PAIR ! OR ! ANOTHER PAIR OR ANOTHER ETC...
        (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") ||     // ONE OF FOUR POSSIBLE DIRECTIONS HAS TO COME UP SO WE CAN USE "OR". COMPARE WITH 2 !
        (arr[i] === "EAST" && arr[i + 1] === "WEST") ||
        (arr[i] === "WEST" && arr[i + 1] === "EAST")
      ) {
        arr.splice(i, 2);                                     // REMOVE BOTH
        i-=2;                                                 // RESET LOOP TO i-2 AFTER DELETING 2 ELEMENTS !!! NO NEED FOR NESTED LOOP NOW !!!
      }
    }
  console.log(arr);
  // return arr;                                              // RETURN RESULT
}


// COMPARE THESE TWO FOR MULTIPLE if STATEMENTS

// 2
// function dirReduc(arr) {
//   for (var j = 0; j < arr.length; j++) {                      // REPEAT INNER LOOP IN CASE ANOTHER OPPOSITE PAIR BECOMES ADJACENT
//     for (var i = 0; i < arr.length; i++) {                    // INNER LOOP REMOVES CONSECUTIVE OPPOSITE PAIRS
//       if (
//         (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") ||     // if ELEMENT AND NEXT ELEMENT ARE OPPOSITE PAIR ! OR ! ANOTHER PAIR OR ANOTHER ETC...
//         (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") ||     // ONE OF FOUR POSSIBLE DIRECTIONS HAS TO COME UP SO WE CAN USE "OR". COMPARE WITH 2 !
//         (arr[i] === "EAST" && arr[i + 1] === "WEST") ||
//         (arr[i] === "WEST" && arr[i + 1] === "EAST")
//       ) {
//         arr.splice(i, 2);                                     // REMOVE BOTH
//       }
//     }
//   }
//   console.log(arr);
//   // return arr;                                              // RETURN RESULT
// }

// 1
// function dirReduc(arr) {
//   for (var j = 0; j < arr.length; j++) {
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") {
//         arr.splice(i, 2);
//       }
//       if (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") {
//         arr.splice(i, 2);
//       }
//       if (arr[i] === "EAST" && arr[i + 1] === "WEST") {
//         arr.splice(i, 2);
//       }
//       if (arr[i] === "WEST" && arr[i + 1] === "EAST") {
//         arr.splice(i, 2);
//       }
//     }
//     console.log(arr);
//   }
//   console.log(arr);
//   // return arr;
// }

// !!! THIS WORKS BUT NO LOOP !!!
// 1.2
// function dirReduc(arr) {
//   var dirStr = arr.join("");                                                          // CONVERT ARR TO ONE CONCATENATED STRING
//   var patternOpposite  = /NORTHSOUTH|SOUTHNORTH|EASTWEST|WESTEAST/g;                  // REGEX PATTERN FOR ADJACENT PAIRS OF OPPOSITE DIRECTIONS
//   var result = dirStr.replace(patternOpposite, "")                                    // REMOVE OPPOSITE PAIRS BY REPLACING THEM WITH "" IF PATTERN IS MATCHED
//    var result1 = result.replace(patternOpposite, "")
//   var patternCardinal = /SOUTH|NORTH|EAST|WEST/g;                                      // REGEX PATTERN FOR DIRECTIONS TO BE EXTRACTED FROM RESULT STR
//   if (result1 === "") {                                                                // if RESULT STR IS EMPTY
//     return [];                                                                           // RETURN EMPTY ARRAY
//   } else {
//     return result1.match(patternCardinal)                                             // OTHERWISE RETURN ARRAY OF FOUND DIRECTION(S)
//   }
// }

// The match() method retrieves the result of matching a string against a regular expression.

// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);

// console.log(found);
// // expected output: Array ["T", "I"]

//============================================= CODEWARS SOLUTION ==================================================

// function dirReduc(arr) {
//   var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
//   while (pattern.test(str)) str = str.replace(pattern,'');
//   return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
// }

//============================================= CODEWARS SOLUTION ==================================================
// TRY RESETING LOOP AS BELOW !!!
// function dirReduc(arr){
//   for(let i=0; i<arr.length; i++){
//       switch ( arr[i] + arr[i+1] ){
      
//               case "EASTWEST":
//               arr.splice(i,2);
//               i = i - i -1;  // ( i = -1 ) => reset the loop to scan the array from i=0  
//               break;
         
//               case "WESTEAST":
//               arr.splice(i,2);
//               i = i - i -1;
//               break;
         
//               case "NORTHSOUTH":
//               arr.splice(i,2);
//               i = i - i -1;
//               break;
         
//               case "SOUTHNORTH":
//               arr.splice(i,2);
//               i = i - i -1;
//               break;
//       }
//   }
//   return arr
// }
//================================================================================================================
// dirReduc([]);
// dirReduc(["NORTH", "WEST", "EAST", "SOUTH"])
// dirReduc(["SOUTH", "NORTH", "EAST", "WEST", "NORTH"]);
dirReduc(["NORTH", "EAST", "WEST", "SOUTH", "SOUTH", "WEST"]);



// ============================================================================
// ============================================================================



// ============================================================================
// ============================================================================