const numbers = ["one", "two", "three", "four", "five", "six"]; // THIS IS REGULAR DATA[] BUT CAN ALSO BE STATIC DEFAULT PROPS

// SHUFFLE AND GRAB FIRST TWO
function randomEl(arr) {
  numbers.sort(function () {
    return 0.5 - Math.random();
  });
  let rand1 = arr[0];
  let rand2 = arr[1];
  console.log(rand1 + ", " + rand2);
}

randomEl(numbers);

// OR, PICKING RANDOM ELEMENTS BY INDEX (COLT STEELE)

// PICK TWO RANDOM INDICES
function randomElByIndex(arr) {
  let rand1 = arr[Math.floor(Math.random() * arr.length)];
  let rand2 = arr[Math.floor(Math.random() * arr.length)];
  console.log(rand1 + ", " + rand2);
}

randomElByIndex(numbers);

// ============================================================================
// ============================================================================

// 1. ( COLT STEELE )
// let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

// 2.
function padToThree(num) {          // WE NEED 3 DIGITS, LARGEST POSSIBLE IS 999
    if (num <= 999) {                 // if num IS LESS THAN 4 DIGITS
      return `00${num}`.slice(-3);    // IMPLICIT TYPE COERCION !!!  "number" => "string" | 00 + 23 => 0023 THEN slice(-3) RETURNS LAST 3 DIGITS
    } else {
        return num;                   // NO COERCION 
    }
  }
  
  console.log(padToThree(23));          // 23
  console.log(typeof padToThree(23));   // "string"
  
      
  
  console.log(padToThree(1000));          // 1000
  console.log(typeof padToThree(1000));   // "number"
  
  
  // COERCION EXAMPLES
  
  // true + false
  // 12 / "6"
  // "number" + 15 + 3
  // 15 + 3 + "number"
  // [1] > null
  // "foo" + + "bar"
  // 'true' == true
  // false == 'false'
  // null == ''
  // !!"false" == !!"true"
  // [‘x’] == ‘x’
  // [] + null + 1
  // [1,2,3] == [1,2,3]
  // {}+[]+{}+[1]
  // !+[]+[]+![]
  // new Date(0) - 0
  // new Date(0) + 0
  
  


// ============================================================================
// ============================================================================

function outer(a) {
    function middle(b) {
      function inner(c) {
        return a + b + c;
      }
      return inner;
    }
    return middle;
  }
  
  // outer(1)(2)(3)
  


// ============================================================================
// ============================================================================

function zero(innerFunc) {
    return innerFunc(0);
  }
  
  function one(innerFunc) {
    return innerFunc(1);
  }
  
  
  function two(innerFunc) {             // OUTER FUNCTION TAKES INNER FUNCTION AS A PARAMETER WHICH
    // console.log(innerFunc);             // PRINT FUNCTION DEFINITION
    // console.log(innerFunc(2));          // PRINT RESULT OF FUNCTION
    return innerFunc(2);                // RETURN RESULT
  }
  
  function three(innerFunc) {           
    return innerFunc(3);                // !!! innerFunc(3) WILL BE times(3) !!!
  }
  
  
  
  function times(n) {                   // INNER FUNCTION
    return n * n;                       // RETURNS n * n
  }
  
  
  two(times);
  
  //=======================================================
  
  
  // function add(a, b) {
  //     return a+b;
  // }
  
  // var subtract = function (a, b) {
  //     return a-b;
  // }
  
  // function handle_data(func) {
  //     // get data from user or other external source
  //     var a = 2;
  //     var b = 3;
  //     return func(a, b);
  // }
  
  // console.log(handle_data(add));       // 5
  // console.log(handle_data(subtract));  // -1
  


// ============================================================================
// ============================================================================


// 1 COMPARE WITH SECOND SOLUTION! 

function nestedLoop(text, inner, outer) {                 // text=input text    inner=number of times inner loop repeats      outer=outer loop repeats
    var o = outer;
    for (o; o > 0; o--) {
      console.log("outside loop " + o);
      var i = inner;                                        // !!! HAVE TO RESET i TO ITS INITIAL VALUE OTHERWISE INNER LOOP ONLY RUNS ONCE !!!
       for (i; i > 0; i--) {
        console.log(" inside loop text: " + text + i);
       }
    } 
  }
    
  // nestedLoop("repeat me ", 4, 2);
  
  // "outer loop 2"
  // " inner loop text: repeat me 4"
  // " inner loop text: repeat me 3"
  // " inner loop text: repeat me 2"
  // " inner loop text: repeat me 1"
  // "outer loop 1"
  // " inner loop text: repeat me 4"
  // " inner loop text: repeat me 3"
  // " inner loop text: repeat me 2"
  // " inner loop text: repeat me 1"
  
  // 2
  // ========================================== WITH  HARD CODED LOOP VARIABLES ==========================================
  
  // function nestedLoop(text) {                
  //   for (o = 3; o > 0; o--) {
  //     console.log("outside loop " + o);
  //      for (i = 4; i > 0; i--) {
  //       console.log(" inside loop text: " + text + i);
  //      }
  //   } 
  // }
  
  
  // nestedLoop()

// ============================================================================
// ============================================================================


// !!! NOT FINISHED !!!

// THIS IS BASED ON 5kyu - dirReduc(). 6/11 PASSED, THIS WILL NOT ALLOW CIRCULAR MOTION IE. north-west-south-east AS YOU'LL END UP WHERE YOU STARTED.
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
// Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
// 24/3/20

function dirReduc(arr) {
    var inputArr = arr;
    console.log("INPUT: " + inputArr);
    var positionArr = [];
    var result = [];
    var y = 0;
    var x = 0;
    for (var i = 0; i < inputArr.length; i++) {
      if (inputArr[i] === "NORTH") {
        y++;
      } else if (inputArr[i] === "SOUTH") {
        y--;
      } else if (inputArr[i] === "EAST") {
        x++;
      } else if (inputArr[i] === "WEST") {
        x--;
      } else {
        console.log("no directions");
      }
    }
    console.log("Position" + " " + " " + "(" + x + ", " + y + ")");
    positionArr.push(x);
    positionArr.push(y);
    console.log(positionArr);
  
    // for (var i = 0; i < positionArr.length; i++) {
    if (positionArr[0] > 0) {
      // EAST
      console.log("east");
      for (var i = 0; i < positionArr[0]; i++) {
        result.push("EAST");
      }
    }
  
    if (positionArr[0] < 0) {
      // WEST
      console.log("west");
      for (var i = 0; i > positionArr[0]; i--) {
        result.push("WEST");
      }
    }
  
    if (positionArr[1] > 0) {
      // NORTH
      console.log("north");
      for (var i = 0; i < positionArr[1]; i++) {
        result.push("NORTH");
      }
    }
  
    if (positionArr[1] < 0) {
      // SOUTH
      console.log("south");
      for (var i = 0; i > positionArr[1]; i--) {
        result.push("SOUTH");
      }
    }
    console.log("Result: " + result);
    return result;
  }
  
  // dirReduc(["EAST","WEST","NORTH","SOUTH","SOUTH"])
  // dirReduc(["NORTH","NORTH","SOUTH","SOUTH","EAST"])
  // dirReduc(["NORTH","NORTH","SOUTH","SOUTH"])
  // dirReduc(["NORTH","SOUTH","SOUTH","EAST","WEST"])
  // dirReduc(["SOUTH", "SOUTH", "EAST","WEST"])
  // dirReduc(["EAST","WEST","WEST","NORTH","EAST"])
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
  


// ============================================================================
// ============================================================================


// First bit for the Sign bit and remaining bits for the Magnitude bits 1=NEGATIVE 0=POSITIVE
// 20/3/20

var integerToSignedBinary = function(n) {
    var num = Math.abs(n);                             // CALCULATE ABSOLUTE VALUE AS LOOP CAN ONLY HANDLE POSITIVE INTEGERS
    var placeValueArr = [1];                             // DECLARE PLACEVALUEARR FOR PLACE VALUES
    var bitArr = [];                                     // EMPTY ARRAY FOR BINARY DIGITS
    var placeValue = 1;                                  // SET PLACEVALUE TO 1 AS THE FIRST BASE 2 PLACE VALUE
    while (placeValue <= num) {                          // THIS LOOP WILL GENERATE A REVERSED SEQUENCE OF PLACE VALUES (LESS OR EQUAL TO INPUT NUM)
      placeValue = placeValue * 2;
      placeValueArr.unshift(placeValue);                     // RESULT:[1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1] ETC...
    }
    for (var i = 0; i < placeValueArr.length; i++) {     // THIS LOOP CONVERTS INPUT NUM TO BINARY
      if (num - placeValueArr[i] >= 0) {                    // if PLACE VALUE CAN BE SUBTRACTED FROM NUM WITH ZERO OR POSITIVE REMAINDER 
        num = num - placeValueArr[i];                          // SUBTRACT IT AND
        bitArr.push(1);                                        // PUSH 1 
      } else {                                              // if IT WOULD LEAVE A NEGATIVE REMAINDER, MOVE ON TO NEXT VALUE WITHOUT SUBTRACTING
        bitArr.push(0);                                         // PUSH 0 
      }                                                         // RESULT:[1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0]
    }
                                  // THIS CAN ONLY DO POSITIVE INTEGERS
    // if (bitArr[0] === 0) {                               // REMOVE FIRST DIGIT IF IT IS 0
    //   bitArr.splice(0, 1);
    // } 
    // console.log(bitArr);
    if (n < 0) {                                            // if INPUT n IS NEGATIVE 
      bitArr[0] = 1;                                        // MAKE FIRST DIGIT 1
    }
    console.log(bitArr);
    return bitArr;
  };
  
  
  // integerToSignedBinary(-8);
  
  //SIGNED BINARY
  // We can represent negative numbers in several ways. The simplest is to simply use the leftmost digit of the number as a special value to represent the sign of the number: 0 = positive, 1 = negative. For example, a value of positive 12 (decimal) would be written as 01100 in binary, but negative 12 (decimal) would be written as 11100. Notice that in this system, it is important to show the leading 0 (to indicate a positive value).
  
  //TWO'S COMPLIMENT
  // For technical reasons, a different scheme, called "two's complement" is more often used for representing negative numbers. In this system, a positive 12 is still 01100, but -12 would be written as 10100. Notice that there is nothing instrinsically correct about one system over another. Either 11100 or 10100 can be used to represent -12, it just depends on what system of interpretation is used. That is, a human programmer chooses the meaning of the bits.
  


// ============================================================================
// ============================================================================

// FACTORIAL    5! = 1*2*3*4*5    AND   0! = 1 !!!
// 28/2/20

function factorial(num) {
    // var num = num;
    var result = 1;
    for (var i = 1; i <= num; i++) {
      result = result * i;
    }
    return result;
  }
  
  
  factorial(5);


// ============================================================================
// ============================================================================

// Removing duplicate elements from array
// 7/3/20

// 1. SORTED ELEMENTS
var unique = arr.filter(function (elem, index, self) {
    return index === self.indexOf(elem);
  });
  
  // 2. ELEMENTS ALREADY ORDERED
  var newarr = [arr[0]];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] != arr[i - 1]) newarr.push(arr[i]);
  }
  
  // 3. ELEMENTS NOT ORDERED YET
  var newarr = (function (arr) {
    var m = {},
      newarr = [];
    for (var i = 0; i < arr.length; i++) {
      var v = arr[i];
      if (!m[v]) {
        newarr.push(v);
        m[v] = true;
      }
    }
    return newarr;
  })(arr);
  
  // Remove duplicate items in array
  // Note: If you are using an environment compatible with Set and Array.from(), you could use let orderedArray = Array.from(new Set(myArray)) to get an array where duplicate items have been removed.
  
  let myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
  let myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
    if (accumulator.indexOf(currentValue) === -1) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
  
  console.log(myOrderedArray);
  


// ============================================================================
// ============================================================================


// Counting instances of values in an object - MDN

// let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

// let countedNames = names.reduce(function (allNames, name) { 
//   if (name in allNames) {
//     allNames[name]++
//   }
//   else {
//     allNames[name] = 1
//   }
//   return allNames
// }, {})
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }


// ====================================================================


function countElemOccour(arr) {
    var numArr = arr.sort(function(a, b) { // SORT ARRAY IN ASCENDING ORDER
     return a - b;
    });
    var countObj = {};                                                             // COUNT OCCOURANCES OF EACH ELEMENT IN ARRAY
    numArr.forEach(number => (countObj[number] = (countObj[number] || 0) + 1));       // count[2]; //3 <= 2 appears 3/times
       for (const property in countObj) {                                          // ITERATE OVER ALL ENUMERABLE PROPERTIES OF AN OBJ THAT ARE KEYED BY STRINGS
          console.log(`${property}: ${countObj[property]}`);                            // (PRINT KEY VALUE PAIRS)
       }
          console.log(countObj);
  }
  
  countElemOccour([1, 2, 2, 1, 3, 1, 4,]);
  
  // ====================================================================
  
  
  // Don't use two arrays for the result, use an object
  
  // function countElemOccour(arr) {
  //   result = { };
  //   for(var i = 0; i < arr.length; ++i) {
  //     if(!result[arr[i]])
  //         result[arr[i]] = 0;
  //     ++result[arr[i]];
  //     }
  //   console.log(result);
  // }
  
  // countElemOccour([5, 5, 5, 2, 2, 2, 2, 2, 9, 4]); // Then result will look like:
  
  // {
  //     2: 5,
  //     4: 1,
  //     5: 3,
  //     9: 1
  // }
  
  
  
  
  
  
  
  // If you use an object, its more easy:
  
  // var count = {};
  // numbers.forEach(number => count[number] = (count[number] || 0) +1);
  // So you can do
  
  // count[2]; //3 <= 2 appears 3/times
  // // Or the same with a Map:
  
  // var count = new Map();
  // numbers.forEach(number => count.set(count.get(number) + 1));
  
  // count.get(2)
  