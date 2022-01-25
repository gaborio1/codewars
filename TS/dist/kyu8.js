"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countSheeps = exports.basicOp = void 0;
const digitize = (n) => {
    return n.toString().split("").reverse().map((num) => Number(num));
};
const abbrevName = (name) => {
    return name.split(" ").map((word) => word.charAt(0).toUpperCase()).join(".");
};
const basicOp = (op, a, b) => {
    return eval(a + op + b);
};
exports.basicOp = basicOp;
const centuryFromYear = (year) => {
    return Math.ceil(year / 100);
};
const litres = (time) => {
    return Math.floor(time / 2);
};
const isDivisible = (n, x, y) => {
    return n % x === 0 && n % y === 0;
};
const countSheeps = (arr) => {
    let counter = 0;
    arr.map((el) => {
        if (el) {
            counter++;
        }
    });
    return counter;
};
exports.countSheeps = countSheeps;
function countSheeps2(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length;
}
const squareSum = (numbers) => {
    let result = 0;
    numbers.forEach((num) => {
        result += num ** 2;
    });
    return result;
};
const noSpace = (str) => {
    return str.replace(/ /g, "");
};
const findSmallestInt = (args) => {
    return Math.min(...args);
};
const summation = (num) => {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        result += i;
    }
    return result;
};
const numberToString = (num) => {
    return num.toString();
};
const solution = (str) => {
    return str.split("").reverse().join("");
};
const boolToWord = (bool) => {
    return bool ? "Yes" : "No";
};
const removeChar = (str) => {
    return str.substring(1, str.length - 1);
};
console.log(removeChar("aa1cbcb"));
const makeNegative = (num) => {
    return num < 0 ? num : -num;
};
const positiveSum = (arr) => {
    const positivesArr = arr.filter((el) => el > 0);
    return positivesArr.length > 0
        ? positivesArr.reduce((a, b) => a + b)
        : 0;
};
const even_or_odd = (n) => {
    return Number.isInteger(n / 2) ? "Even" : "Odd";
};
console.log(even_or_odd(7), even_or_odd(8));
even_or_odd(7);
even_or_odd(8);
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(7, 7));
