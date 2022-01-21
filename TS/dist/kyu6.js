"use strict";
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
Object.defineProperty(exports, "__esModule", { value: true });
exports.countBits7 = exports.countBits6 = exports.countBits5 = exports.countBits4 = exports.countBits3 = exports.countBits2 = exports.findOutlier3 = exports.findOutlier2 = void 0;
//============= OTHER CODEWARS SOLUTIONS: =============
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
//============= OTHER CODEWARS SOLUTIONS: =============
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
//============= OTHER CODEWARS SOLUTIONS: =============
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
//============= OTHER CODEWARS SOLUTIONS: =============
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
const duplicateCount = (text) => {
    const counterObj = {};
    // const strArr = text.split("").map((letter) => letter.toLowerCase());
    text.split("").map((letter) => letter.toLowerCase()).forEach(num => counterObj[num] = (counterObj[num] || 0) + 1);
    // strArr.forEach(num => counterObj[num] = (counterObj[num] || 0) + 1);
    const duplicatesArr = Object.entries(counterObj).filter(([key, value]) => value > 1);
    console.log(duplicatesArr.length);
    return duplicatesArr.length;
};
duplicateCount(""); //  0
duplicateCount("abcde"); // 0
duplicateCount("aabbcde"); // 2
duplicateCount("aabBcde"); // 2
duplicateCount("Indivisibilities"); // 2
//============= OTHER CODEWARS SOLUTIONS: =============
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  FIND THE PARITY OUTLIER
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)
// CHECK IF ELEMENT'S ABSOLUT VALUE IS ODD OR EVEN, GROUP THEM IN ARRAYS
// RETURN FIRST ELEMENT OF ARRAY WITH ONE ELEMENT
const findOutlier = (ints) => {
    const odds = ints.filter((num) => Math.abs(num) % 2 === 1);
    const evens = ints.filter((num) => Math.abs(num) % 2 === 0);
    // console.log(odds.length > 1 ? evens[0] : odds[0])
    return odds.length > 1 ? evens[0] : odds[0];
};
// findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);   // 11
// findOutlier([160, 3, 1719, 19, 11, 13, -21]);   // 160
// findOutlier([17417968, -12150916, -135668362, -45067422, 65586444, -104088786, 74395984, 198980314, -91660877, -52541784, -49718652, -189685108, -120327066, 178679078, -31538954, 112116518, -186162190, 29923430, 180062518, 878198, -185634066, -188868404, -111266602, -123331452, -184028074, -24771054, -4052, 98231950, -91193344, -154129192, -134529020, 195427700, 187599832, -11229586, -165510592, -19725720, 180071600, -161055558, 109276994, -88809438, -149769730, -89421390, 27663208, 132490658, 118790172, -23745850, 27711836, -4950342, 32063374, 655394]);   // -91660877
//============= OTHER CODEWARS SOLUTIONS: =============
function findOutlier2(integers) {
    if (integers.slice(0, 3).filter(i => i % 2 !== 0).length > 1) {
        return integers.find(v => v % 2 === 0) || 0;
    }
    else {
        return integers.find(v => v % 2 !== 0) || 0;
    }
}
exports.findOutlier2 = findOutlier2;
function findOutlier3(integers) {
    const odds = integers.filter(v => v % 2);
    const evens = integers.filter(v => !(v % 2));
    return odds.length === 1 ? odds[0] : evens[0];
}
exports.findOutlier3 = findOutlier3;
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  BIT COUNTING
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
const countBits = (num) => {
    const bitArr = num.toString(2).match(/1/g);
    // console.log(bitArr === null ? 0 : bitArr.length);
    return bitArr === null ? 0 : bitArr.length;
};
// countBits(0);
// countBits(1234);
//============= OTHER CODEWARS SOLUTIONS: =============
function countBits2(n) {
    return n.toString(2).replace(/0/g, '').length;
}
exports.countBits2 = countBits2;
function countBits3(n) {
    return n.toString(2).split('').filter(c => c === '1').length;
}
exports.countBits3 = countBits3;
function countBits4(n) {
    return n.toString(2)
        .split('')
        .map(Number)
        .filter(Boolean)
        .length;
}
exports.countBits4 = countBits4;
function countBits5(n) {
    return n.toString(2).split('1').length - 1;
    ;
}
exports.countBits5 = countBits5;
function countBits6(n) {
    return n.toString(2).replace(/0/gi, '').length;
}
exports.countBits6 = countBits6;
function countBits7(n) {
    var _a;
    return ((_a = n.toString(2).match(/1/g)) === null || _a === void 0 ? void 0 : _a.length) || 0;
}
exports.countBits7 = countBits7;
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  WHO LIKES IT?
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
const likes = (names) => {
    switch (names.length) {
        case 0:
            return "no one likes this";
        case 1:
            return `${names[0]} likes this`;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default:
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
};
//  MAKE 4+ NAMES DEFAULT 
//============= OTHER CODEWARS SOLUTIONS: =============
// export const likes = (names: string[]): string => {
//     switch (names.length) {
//         case 0: return 'no one likes this';
//         case 1: return `${names[0]} likes this`;
//         case 2: return `${names[0]} and ${names[1]} like this`;
//         case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//         default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//     }
// };
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  ARRAY.DIFF
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// array_diff({1, 2}, 2, {1}, 1, *z) == {2} (z == 1)
// If a value is present in b, all of its occurrences must be removed from the other:
// array_diff({1, 2, 2, 2, 3}, 5, {2}, 1, *z) == {1, 3} (z == 2)
// RETURN ELEMENTS OF a THAT ARE NOT PRESENT IN b
const arrayDiff = (a, b) => {
    return a.filter((num) => b.indexOf(num) < 0);
};
arrayDiff([3, 4, 3], [3]);
//============= OTHER CODEWARS SOLUTIONS: =============
// export function arrayDiff(a: number[], b: number[]): number[] {
//     return a.filter(e => !b.includes(e));
// }
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  SUM OF DIGITS / DIGITAL ROOT
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
const digitalRoot = (num) => {
    const digitArr = num
        .toString()
        .split("")
        .map((el) => Number(el));
    const sum = digitArr.reduce((a, b) => a + b);
    // console.log(num > 9 ? digitalRoot(sum) : num);
    return num > 9 ? digitalRoot(sum) : num;
};
//  NUM -> STR -> ARR(STR) -> ARR(NUM)
//  GET SUM OF DIGITS
//  RETURN digitalRoot(SUM) OR NUM
digitalRoot(493193); // 6
//============= OTHER CODEWARS SOLUTIONS: =============
// export function digitalRoot(n: number): number {
//     return (n - 1) % 9 + 1;
// }
// export const digitalRoot = (n:number):number => {
//     return n>9?digitalRoot([...(n.toString())].reduce((a,c)=>a+Number(c),0)):n;
// };
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  STOP SPINNING MY WORDS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// mop / forEach
//  STR -> ARR(STR) -> IF LENGTH >= 5{SPLIT.REV.JOIN} -> STR
const spinWords = (words) => {
    const arr = words.split(" ");
    arr.map((word, i) => {
        if (word.length >= 5) {
            arr[i] = arr[i].split("").reverse().join("");
        }
    });
    console.log(arr.join(" "));
    return arr.join(" ");
};
// spinWords("Hey fellow warriors");
//============= OTHER CODEWARS SOLUTIONS: =============
function spinWords2(words) {
    return words.replace(/[a-z]{5,}/ig, (s) => s.split("").reverse().join(""));
}
// const spinWords = (words: string): string => words.split(' ')
//                                                         .map(m => m.length >= 5 
//                                                              ? m.split('').reverse().join('') 
//                                                              : m)
//                                                         .join(' ')
// function spinWords(words: string): string {
//     return words.split(" ").map(word => word.length >= 5 ? [...word].reverse().join("") : word).join(" ")
// }                                                 
// function spinWords(words: string): string {
//     return words.split(" ").map(word => word.length >= 5 ? [...word].reverse().join("") : word).join(" ")
// }
// static spinWords(words: string) {
//     const array = words.split(" ");
//     const spin = array.map((word) => {
//       return word.length < 5 ? word : word.split("").reverse().join("");
//     });
//     return spin.join(" ");
// }
// ❗️❗️❗️  INCLUDE THIS IN PROJECTS/TYPESCRIPT ❗️❗️❗️
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  FIND INT THAT APPEARS ODD NUMBER OF TIMES IN ARRAY
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: https://www.reddit.com/r/typescript/comments/hm8jbv/how_to_define_an_interface_for_objects_with/fx4szci/
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// ❗️❗️❗️ DEFINE INTERFACE FOR WHAT'S BEING RETURNED ❗️❗️❗️
// TO AVOID ERROR: Element implicitly has 'any' type because expression of type 'number' can't be used to index type '{}'
// ❗️❗️❗️ LOOK INTO THIS: ❗️❗️❗️
// A type like { [key: string]: number } is just bad and should not be used ever.
// Consider an example: const test: { [key: string]: number } = { a: 1 }; test.b // TS will think it’s of type number, while in fact it’s undefined.
// A type declared like that literally says: „for each key of string type there is a number value”. Which simply is not the case. Just don’t do it. It’s as bad as using any.
// If you need to use an object as a key-value mapper, do it well and either define the keys statically, or make the type of value a union with undefined.
// 1️⃣    WITH filter()
const findOdd = (arr) => {
    const counter = {};
    arr.forEach(num => counter[num] = (counter[num] || 0) + 1);
    const oddTimesArr = Object.entries(counter).filter(([key, value]) => value % 2 > 0);
    // console.log(Number(oddTimesArr[0][0]));
    return Number(oddTimesArr[0][0]);
};
// 2️⃣    WITH forEach()
const findOdd2 = (arr) => {
    const counter = {};
    arr.forEach(num => counter[num] = (counter[num] || 0) + 1);
    let solution; // INITIALIZE ❗️❗️❗️
    Object.entries(counter).forEach(([key, value]) => {
        // value % 2 > 0 && console.log("key: ", Number(key));
        if (value % 2 > 0)
            solution = Number(key); // TYPE ASSERTION ❗️❗️❗️
    });
    return solution;
};
// const findOdd = (arr: number[]): number => {
//     // LOOK INTO THIS, SEE ABOVE:
//     interface NumCounter {
//         [key: string]: number;
//     }
//     const counter: NumCounter = {};
//     arr.forEach(num => counter[num] = (counter[num] || 0) + 1);
//     // console.log(counter);
//     // !!! tsconfig.json COMPILER OPTIONS: "target": "es2018" (es2017 OR LATER) FOR Object.entries TO WORK!!!
//     Object.entries(counter).forEach(([key, value]) => console.log(`${key}: ${value}`));
//     Object.entries(counter).forEach(([key, value]) => {
//         value % 2 > 0 && console.log("key: ", Number(key));
//     });
//     const testArr = Object.entries(counter).filter(([key, value]) => value % 2 > 0);
//     console.log(testArr);
//     console.log(Number(testArr[0][0]));
//     return Number(testArr[0][0]);
// };
findOdd([1, 2, 2, 1, 2]);
findOdd2([1, 2, 2, 1, 2]);
//❗️❗️❗️============= OTHER CODEWARS SOLUTIONS: =============❗️❗️❗️
// https://warrenniu.medium.com/find-the-unique-number-in-an-array-using-the-xor-operator-54d35aa9e8d0
const findOdd3 = (xs) => {
    return xs.reduce((a, b) => a ^ b);
};
// Bit operators work on 32 bits numbers. Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.
// Operator	Description	Example	Same as	Result	Decimal
// &	AND	x = 5 & 1	0101 & 0001	0001	 1
// |	OR	x = 5 | 1	0101 | 0001	0101	 5
// ~	NOT	x = ~ 5	 ~0101	1010	 10
// ^	XOR	x = 5 ^ 1	0101 ^ 0001	0100	 4
// <<	Left shift	x = 5 << 1	0101 << 1	1010	 10
// >>	Right shift	x = 5 >> 1	0101 >> 1	0010	  2
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TypeError: Reduce of empty array with no initial value
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  MULTIPLES OF 3 OR 5
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.
// DIVS ARRAY MUST HAVE AN INITIAL VALUE
const solution = (num) => {
    const divs = [0];
    for (let i = 1; i < num; i++)
        if (i % 3 === 0 || i % 5 === 0) {
            divs.push(i);
        }
    console.log(num >= 0 ? divs.reduce((a, b) => a + b) : 0);
    return num >= 0 ? divs.reduce((a, b) => a + b) : 0;
};
// solution(10);
// solution(-1);
// solution(0);
//============= OTHER CODEWARS SOLUTIONS: =============
// export class Challenge {
//     static solution(n: number) {
//       let x = 0;
//       for (let i = 0;i < n; ++i)
//         if (i % 3 == 0 || i % 5 == 0)
//           x += i
//       return x;
//     }
// }
