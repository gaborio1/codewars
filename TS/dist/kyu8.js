"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countSheeps = exports.basicOp = exports.greet3 = void 0;
const reverseSeq = (n) => {
    const solution = [];
    for (let i = 1; i <= n; i++) {
        solution.push(i);
    }
    return solution.reverse();
};
const reverseSeq2 = (n) => {
    const solution = [];
    for (let i = 1; i <= n; i++) {
        solution.unshift(i);
    }
    return solution;
};
const reverseSeq3 = (n) => {
    return Array.from({ length: n }, (_, i) => n - i);
};
const reverseSeq4 = (n) => {
    return Array(n).fill(0).map((e, i) => n - i);
};
const reverseSeq5 = (n) => {
    return Array.from({ length: n }, (v, k) => k + 1).reverse();
};
const fakeBin = (str) => {
    return str.replace(/[1-4]/g, "0").replace(/[5-9]/g, "1");
};
const fakeBin2 = (str) => {
    let solution = "";
    for (let i = 0; i < str.length; i++) {
        if (Number(str[i]) < 5) {
            solution += "0";
        }
        else {
            solution += "1";
        }
    }
    console.log(solution);
    return solution;
};
const fakeBin3 = (x) => x.replace(/\d/g, n => Number(n) < 5 ? '0' : '1');
const greet3 = () => "hello world!";
exports.greet3 = greet3;
const getAverage = (marks) => {
    return Math.floor(marks.reduce((a, b) => a + b) / marks.length);
};
function getAverage2(marks) {
    return (marks.reduce((a, b) => a + b) / marks.length) | 0;
}
const check = (a, x) => {
    return a.includes(x);
};
const greet = (name) => {
    return name === "Johnny" ? "Hello, my love!" : "Hello, " + name + "!";
};
const findAverage = (arr) => {
    return arr.length ? arr.reduce((a, b) => a + b) / arr.length : 0;
};
const greet2 = (name) => {
    return `Hello, ${name} how are you doing today?`;
};
const countPositivesSumNegatives = (input) => {
    if (input === null || input.length === 0)
        return [];
    let positiveCount = 0, negativeSum = 0;
    input.forEach((num) => {
        if (num > 0)
            positiveCount += 1;
        if (num < 0)
            negativeSum += num;
    });
    return [positiveCount, negativeSum];
};
function countPositivesSumNegatives3(input) {
    return input && input.length
        ? [
            input.filter((p) => p > 0).length,
            input
                .filter((n) => n < 0)
                .reduce((a, b) => a + b, 0),
        ]
        : [];
}
function countPositivesSumNegatives4(input) {
    if (input && input.length > 0) {
        return [input.filter(x => x > 0).length, input.filter(x => x < 0).reduce((a, b) => a + b, 0)];
    }
    return [];
}
const reverseWords = (str) => {
    return str
        .split(" ")
        .reverse()
        .join(" ");
};
const past = (h, m, s) => {
    const HOUR = 3600, MINUTE = 60, SECOND = 1;
    return (h * HOUR + m * MINUTE + s * SECOND) * 1000;
};
const invert = (array) => {
    return array.map((num) => -num);
};
function invert2(array) {
    return array.map(n => -n);
}
const stringToNumber = (str) => {
    return Number(str);
};
const stringToNumber2 = (str) => +str;
const stringToNumber3 = (str) => parseInt(str);
const maps = (arr) => {
    return arr.map((num) => num * 2);
};
function maps2(x) {
    return x.map(value => value * 2);
}
const findNeedle = (haystack) => {
    return `found the needle at position ${haystack.indexOf("needle")}`;
};
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
const multiply = (a, b) => {
    return a * b;
};
