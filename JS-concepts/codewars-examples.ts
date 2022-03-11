// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// MATH
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// MATH.MAX()
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

//1️⃣ VS TERNARY: RETURN SOMETHING OR ZERO

const enough = (cap: number, on: number, wait: number): number => {

    return cap < (on + wait)
        ? (on + wait) - cap
        : 0;

}

const enough2 = (cap: number, on: number, wait: number): number => Math.max(on + wait - cap, 0);

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// BITWISE OPERATORS
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥


/*

SOURCE:
https://www.w3schools.com/jsref/jsref_operators.asp

JavaScript Bitwise Operators
Bit operators work on 32 bits numbers. Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.

Operator	Description	Example	Same as	Result	Decimal
&	AND	x = 5 & 1	0101 & 0001	0001	 1
|	OR	x = 5 | 1	0101 | 0001	0101	 5
~	NOT	x = ~ 5	 ~0101	1010	 10
^	XOR	x = 5 ^ 1	0101 ^ 0001	0100	 4
<<	Left shift	x = 5 << 1	0101 << 1	1010	 10
>>	Right shift	x = 5 >> 1	0101 >> 1	0010	  2

*/

// EXAMPLES:

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// "OR" / SINGLE PIPE / "|"
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// 1️⃣
// ROUND DOWN DECIMALS: (Math.floor(3.345) => 3)

// ❗️❗️❗️
// 3.345 | 0  =>  3
// 3 | 0  =>  3
// ❗️❗️❗️

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// TITLE:  GET AVERAGE OF ARRAY ROUNDED DOWN
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: SINGLE PIPE BITWISE OPERATOR "|"
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const getAverage = (marks: number[]): number => {
    return Math.floor(marks.reduce((a, b) => a + b) / marks.length);
}

// VS:

// ❗️❗️❗️ x | 0 is x, if x is an integer. ❗️❗️❗️
function getAverage2(marks: number[]): number {
    return (marks.reduce((a, b) => a + b) / marks.length) | 0;
}


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// "AND" / "&"
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// 1️⃣  EVEN OR ODD ? (NUM % 2 === 0)

// (1 & 1) => 1   RETURNS  1 IF N IS ODD
// (2 & 1) => 0   RETURNS 0 IF N IS EVEN

// ❗️❗️❗️ num & 1 ❗️❗️❗️
function simpleMultiplication6(num: number): number {
    if (num & 1) {
        return num * 9
    }
    return num * 8;
}


function oddOrEven(x: number) {
    return (x & 1) ? "odd" : "even";
}

function isOdd(num: number): number { return num % 2; }


// FILTER OUT ODD NUMBERS:
const getEvenNumbers = (numbersArray: number[]): number[] => {

    return numbersArray.filter((num) => {
        return (num & 1) === 0;
    });

}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// "XOR" / "^" (EXCLUSIVE OR)
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰


// 1️⃣  FIND UNIQUE NUMBER IN ARRAY

// https://warrenniu.medium.com/find-the-unique-number-in-an-array-using-the-xor-operator-54d35aa9e8d0
const findOdd3 = (xs: number[]): number => {
    return xs.reduce((a, b) => a ^ b);
};


// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// SWITCH STATEMENT
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 1️⃣  SWITCH(TRUE) WITH LOGICAL OPERATORS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰


// ❗️❗️❗️ LOGICAL OPERATORS IN SWITCH ❗️❗️❗️
const bmi = (weight: number, height: number): string => {

    const bmi = weight / height ** 2;

    switch (true) {
        case (bmi <= 18.5):
            return "Underweight";
            break;
        case (bmi <= 25.0):
            return "Normal";
            break;
        case (bmi <= 30.0):
            return "Overweight";
            break;
        default:
            return "Obese"
    }

}

// console.log(bmi(90, 1.80));

//============= WITH CHAINED TERNARY: =============

// ❗️❗️❗️ CHAINED TERNARY ❗️❗️❗️
function bmi2(weight: number, height: number): string {
    const $ = weight / height ** 2;
    return $ <= 18.5 ? 'Underweight' : $ <= 25.0 ? 'Normal' : $ <= 30.0 ? 'Overweight' : 'Obese';
}

const bmi3 = (weight: number, height: number, bmi: number = 0): string => (bmi = weight / height ** 2) > 18.5 ? bmi > 25 ? bmi > 30 ? 'Obese' : 'Overweight' : 'Normal' : 'Underweight';



// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TERNARY OPERATOR
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 1️⃣  CHAINED TERNARY:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

function bmi4(weight: number, height: number): string {
    const $ = weight / height ** 2;
    return $ <= 18.5 ? 'Underweight' : $ <= 25.0 ? 'Normal' : $ <= 30.0 ? 'Overweight' : 'Obese';
}

const bmi5 = (weight: number, height: number, bmi: number = 0): string => (bmi = weight / height ** 2) > 18.5 ? bmi > 25 ? bmi > 30 ? 'Obese' : 'Overweight' : 'Normal' : 'Underweight';

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 1️⃣  TERNARY IN STRING TEMPLATE
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// name equals owner	'Hello boss'
// otherwise	'Hello guest'

const greetTwo = (name: string, owner: string): string => {

    return `Hello ${name === owner ? "boss" : "guest"}`;

}


// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// ARRAY METHODS
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// COMPARING ARRAYS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// DETERMINE IF ARRAY IS SORTED(ASC/DESC), OR RANDOM

// 1️⃣ LOOP
const isSortedAndHow = (arr: number[]): string => {

    let isAscending: boolean = false;
    let isDescending: boolean = false;
    let solution: string = "no";

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= arr[i - 1]) {
            isAscending = true;
        } else {
            break;
        }
        if (i === arr.length - 1 && isAscending) {
            solution = "yes, ascending";
        }
    }

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            isDescending = true;
        } else {
            break;
        }
        if (i === arr.length - 1 && isDescending) {
            solution = "yes, descending";
        }
    }

    return solution;
}

// 2️⃣ CONVERT TO STRING AND THEN COMPARE 
function isSortedAndHow6(array: number[]): string {
    const asc: number[] = [...array].sort((a, b) => a - b);
    const dsc: number[] = [...array].sort((a, b) => b - a);
    switch (array.toString()) {
        case asc.toString():
            return 'yes, ascending';
        case dsc.toString():
            return 'yes, descending';
        default:
            return 'no';
    }
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// FILTER():
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰


// 1️⃣ REMOVE DUPLICATES FROM ARRAY:
const twoOldestAges = (ages: number[]): number[] => {

    return ages
        .filter((curr, index) => ages.indexOf(curr) === index)
        .sort((a, b) => b - a)
        .slice(0, 2)
        .reverse();

}

//  FILTER WILL REMOVE DUPLICATES IF NEEDED
// SORT ARRAY DESCENDING NUMERICALLY
// GET FIRST TWO ELEMENTS
// REVERSE

// console.log(twoOldestAges([1, 5, 87, 45, 8, 8, 87]));
// console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 1️⃣  PUSH():
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// .PUSH().REVERSE() FASTER THAN .UNSHIFT()

// 2️⃣ ☑️
const reverseSeq = (n: number): number[] => {

    const solution: number[] = [];

    for (let i = 1; i <= n; i++) {
        solution.push(i);
    }

    return solution.reverse();

};

// 1️⃣
//  ❗️❗️❗️ START LOOP AT ONE AND UNSHIFT i INTO SOLUTION IS TOO SLOW: ❗️❗️❗️
// Execution Timed Out (12000 ms)

const reverseSeq2 = (n: number): number[] => {

    const solution: number[] = [];
    for (let i = 1; i <= n; i++) {
        solution.unshift(i);			// ❗️❗️❗️ Execution Timed Out (12000 ms) ❗️❗️❗️
    }
    return solution;
};

// console.log(reverseSeq(50));


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 1️⃣  FILL():
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*

Fill all the elements with a value:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi");
Fill the last two elements:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi", 2, 4);
Definition and Usage
The fill() method fills specified elements in an array with a value.

The fill() method overwrites the original array.

Start and end position can be specified. If not, all elements will be filled.

Syntax
array.fill(value, start, end)
Parameters
Parameter	Description
value	Required.
The value to fill in.
start	Optional.
The start index (position).
Default is 0.
end	Optional.
The stop index (position).
Default is array length.
Return Value
Type	Description
An array	The filled array.

*/

/*
Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
monkeyCount(1) // --> [1]
*/

const monkeyCount = (n: number): number[] => {

    const solution: number[] = [];

    for (let i = 1; i <= n; i++) {
        solution.push(i);
    }
    console.log(solution);
    return solution;
}

// console.log(monkeyCount(5));

/* ❗️❗️❗️
Definition and Usage
The fill() method fills specified elements in an array with a value.

The fill() method overwrites the original array.

Start and end position can be specified. If not, all elements will be filled.

Syntax
array.fill(value, start, end)
Parameters
Parameter	Description
value	Required.
The value to fill in.
start	Optional.
The start index (position).
Default is 0.
end	Optional.
The stop index (position).
Default is array length.
*/


//============= OTHER CODEWARS SOLUTIONS: =============

// ❗️❗️❗️
function monkeyCount3(n: number) {
    return Array(n).fill(0).map((e, i) => i + 1)
}
// ❗️❗️❗️


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 1️⃣  ARRAY.FROM():
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰


/*

Create an array from a string:

Array.from("ABCDEFG")
Definition and Usage
The Array.from() method returns an array from any object with a length property.

The Array.from() method returns an array from any iterable object.

Array.from()
Array.from() is a static property of the JavaScript Array object.

You can only use it as Array.from().

Using x.from(), where x is an array will return undefined.

Syntax
Array.from(object, mapFunction, thisValue)
Parameters
Parameter	Description
object	Required.
The object to convert to an array.
mapFunction	Optional.
A map function to call on each item.
thisValue	Optional.
A value to use as thisfor the mapFunction
Return Value
Type	Description
An array	The values from the iterable object.

*/


/*
Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
monkeyCount(1) // --> [1]
*/

const monkeyCount5 = (n: number): number[] => {

    const solution: number[] = [];

    for (let i = 1; i <= n; i++) {
        solution.push(i);
    }
    console.log(solution);
    return solution;
}

// console.log(monkeyCount(5));
// ❗️❗️❗️
function monkeyCount2(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i + 1);
}

function monkeyCount4(n: number) {
    return Array.from(Array(n), (x, ix) => ix + 1)
}
// ❗️❗️❗️

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 1️⃣  FLAT()
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Array.prototype.flat()
The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]

Parameters
depth Optional
The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.

Return value
A new array with the sub-array elements concatenated into it.

Examples:

Flattening nested arrays
const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Flattening and array holes
The flat method removes empty slots in arrays:

const arr5 = [1, 2, , 4, 5];
arr5.flat();
// [1, 2, 4, 5]

*/
const flattenAndSort = (inputArray: number[][]): number[] => {

    // 1️⃣  ❗️❗️❗️ THIS IS NOT WORKING IN CODEWARS ❗️❗️❗️
    // return inputArray
    //     .flat()
    //     .sort((a, b) => a - b);

    // 2️⃣
    return inputArray
        .reduce((acc, curr) => acc.concat(curr), [])
        .sort((a, b) => a - b);

}


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// .SORT():
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
❗️❗️❗️ SORT WILL MUTATE ORIGINAL ARRAY ❗️❗️❗️
You need to copy the array before you sort it. One way with es6:

const sorted = [...arr].sort();
The spread-syntax as array literal (copied from mdn):

var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
❗️❗️❗️

const ascArr = [...arr].sort((a, b) => a - b);
   

const descArr = [...arr].sort((a, b) => b - a);
    
*/

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// STRING METHODS
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// .REPLACE():
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// dnaStrand []        `shouldBe` []
// dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
// dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
// dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

const dnaStrand = (dna: string): string => {

    const arr = dna.split("");


    arr.map((el, i) => {

        switch (el) {
            case "A":
                arr[i] = "T"
                break
            case "T":
                arr[i] = "A"
                break
            case "C":
                arr[i] = "G"
                break
            case "G":
                arr[i] = "C"
        }
    });

    console.log(arr.join(""));
    return arr.join("");
}

dnaStrand("ATCG");

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const correct = (str: string): string => {

    interface Errors {
        [key: string]: string;
    }

    const errors: Errors = { "5": "S", "0": "O", "1": "I" };

    return str.replace(/[015]/g, (char) => errors[char]);

}

// console.log(correct("L0ND0N"));
// console.log(correct("DUBL1N"));
// console.log(correct("BUDAPE5T"));
// console.log(correct("PAR15"));

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰


// ❗️❗️❗️
function doubleChar5(str: string): string {
    return str.replace(/./g, e => e + e)
}


//============= OTHER CODEWARS SOLUTIONS: =============

// ❗️❗️❗️
function dnaStrand2(dna: string) {
    return dna.replace(/./g, (c) => ({ A: 'T', T: 'A', G: 'C', C: 'G' })[c]);
}



// ❗️❗️❗️ if you want a replaced with x, b with y and c with z, you can do something like this:

// var chars = {'a':'x','b':'y','c':'z'};
// var s = '234abc567bbbbac';
// s = s.replace(/[abc]/g, m => chars[m]);
// console.log(s);
// Output: 234xyz567yyyyxz


// ❗️❗️❗️
// let dummyString = 'Javascript^ is$ the most popular _language';
// newString = dummyString.replace(/[_^$]/g, charactersToReplace => ({'^': '', '_': ':', '$' : '+' })[charactersToReplace]);


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
//  PADSTART(), PADEND():
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
JavaScript String Padding
ECMAScript 2017 added two String methods: padStart and padEnd to support padding at the beginning and at the end of a string.

Example
let str = "5";
str = str.padStart(4,0);
// result is 0005
Example
let str = "5";
str = str.padEnd(4,0);
// result is 5000
*/

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// "THIS" KEYWORD
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥

// String.prototype.toJadenCase = function (str: string ): string {

//     return this.split(" ").map((word) => word.replace(word[0], word[0].toUpperCase())).join(" ");

//   };

// ❗️❗️❗️ HAVE TO USE this IN CODEWARS SOLUTION ❗️❗️❗️
//   return this.split(" ").map((word) => word.replace(word[0], word[0].toUpperCase())).join(" ");
// VS:
//  ❗️❗️❗️ TypeError: Cannot read property 'split' of undefined ❗️❗️❗️
// return str.split(" ").map((word) => word.replace(word[0], word[0].toUpperCase())).join(" ");

// STRING -> ARR(WORDS) -> CAPITALIZE EACH WORD IN ARRAY -> JOIN INTO STRING WITH " "



// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// REGEX
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
//  JS REGEXP OBJECT:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// ❗️❗️❗️ SyntaxError: Invalid regular expression: /(/: Unterminated group ❗️❗️❗️


// ❗️❗️❗️ https://stackoverflow.com/questions/17885855/use-dynamic-variable-string-as-regex-pattern-in-javascript/17886301 ❗️❗️❗️

// To create the regex from a string, you have to use JavaScript's RegExp object.

// If you also want to match/replace more than one time, then you must add the g (global match) flag. Here's an example:

// var stringToGoIntoTheRegex = "abc";
// var regex = new RegExp("#" + stringToGoIntoTheRegex + "#", "g");
// // at this point, the line above is the same as: var regex = /#abc#/g;

// var input = "Hello this is #abc# some #abc# stuff.";
// var output = input.replace(regex, "!!");
// alert(output); // Hello this is !! some !! stuff.

// EXAMPLE:

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

const duplicateEncode = (word: string): string => {


    // 1️⃣  DOES NOT WORK WITH SPECIAL CHARACTERS:

    const strArr = word.split("");
    strArr.forEach((letter, i) => {
        let regex = new RegExp(letter, "gi");  //  ❗️❗️❗️ JS REGEX OBJECT ❗️❗️❗️
        console.table(
            {
                letter: strArr[i],
                matches: word.match(regex)?.length
            }
        );

        //❗️❗️❗️ WITHOUT "?" OBJECT IS POSSIBLY NULL ❗️❗️❗️
        let counter: number | undefined = word.match(regex)?.length;

        if (counter !== undefined) {
            if (counter > 1) {
                strArr[i] = ")";
            } else {
                strArr[i] = "(";
            }
        }
    })
    return strArr.join("");


    // 2️⃣  THIS WORKS:
    //  FIND EACH ELEMENT OF ORIGINAL ARRAY IN COPY(ORIGINAL WORD MINUS CURRENT LETTER)
    // IF FOUND, THEN IT IS A DUPLICATE, IF NOT FOUND THEN IT IS SINGLE
    const original = word.split("").map((letter) => letter.toLowerCase());
    let copy = [...original];
    const resultArr: string[] = [];

    for (let i = 0; i < original.length; i++) {
        copy.splice(i, 1);
        if (copy.indexOf(original[i]) < 0) {
            resultArr.push("(");
        } else {
            resultArr.push(")");
        }
        copy = [...original];
    }

    console.log(resultArr.join(""));
    return resultArr.join("");
}

// duplicateEncode("recEde");
// duplicateEncode("(( @");    // "))(("  


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// MATCH VALID WORDS, PUNCUATION:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// VALID WORD: const validWord = /[a-z]+/gi
// PUNCTUATION: const punctuation = /[?!\.]/g;

const pigIt = (str: string): string => {

    // 1️⃣
    return str.replace(/[a-z]+/gi, (word) => `${word.slice(1)}${word.charAt(0)}ay`);

    // 2️⃣
    // const validWord = /[a-z]+/gi

    // return str.replace(validWord, (word) => {
    //     return `${word.slice(1)}${word.charAt(0)}ay`
    // });

}

console.log(pigIt('pdNWGEbnnAYBq  qKDVJ prMerdBgTDjFZYaHXd iX ! rxBwJkSVppxW hg . cQFYCExtQFgytIxTj HWEqmZ qFiJOYxcqIObSWjSlJL lg  !  mGJtNrQ iINNKiOohUuMAk dwwOYRmL'));

// pdNWGEbnnAYBq  qKDVJ prMerdBgTDjFZYaHXd iX ! rxBwJkSVppxW hg . cQFYCExtQFgytIxTj HWEqmZ qFiJOYxcqIObSWjSlJL lg  !  mGJtNrQ iINNKiOohUuMAk dwwOYRmL

// EXPECTED THIS:
// dNWGEbnnAYBqpay ay KDVJqay rMerdBgTDjFZYaHXdpay Xiay ! xBwJkSVppxWray ghay . QFYCExtQFgytIxTjcay WEqmZHay FiJOYxcqIObSWjSlJLqay glay ay ! ay GJtNrQmay INNKiOohUuMAkiay wwOYRmLday

// TO EQUAL:
// dNWGEbnnAYBqpay  KDVJqay rMerdBgTDjFZYaHXdpay Xiay ! xBwJkSVppxWray ghay . QFYCExtQFgytIxTjcay WEqmZHay FiJOYxcqIObSWjSlJLqay glay  !  GJtNrQmay INNKiOohUuMAkiay wwOYRmLday

