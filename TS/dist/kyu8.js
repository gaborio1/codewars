"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countSheeps = exports.basicOp = exports.greet3 = exports.max3 = exports.min3 = exports.max2 = exports.min2 = void 0;
const sumArray = (array) => {
    if (array === null || array.length <= 2)
        return 0;
    return array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((a, b) => a + b);
};
function sumArray2(array) {
    if (!array || array.length <= 1)
        return 0;
    return array.sort((a, b) => a - b).slice(1, -1).reduce((p, n) => p + n, 0);
}
function sumArray3(a) {
    return (a === null) ? 0 : a.sort((a, b) => a - b).slice(1, -1).reduce((a, b) => a + b, 0);
}
const booleanToString = (b) => {
    return b ? "true" : "false";
};
const booleanToString2 = (b) => {
    return b.toString();
};
const booleanToString3 = (b) => {
    return String(b);
};
class Kata {
}
Kata.bonusTime = (salary, bonus) => {
    return bonus
        ? "£" + String(salary * 10)
        : "£" + String(salary);
};
const hero = (bullets, dragons) => {
    return bullets / dragons >= 2;
};
const paperwork = (n, m) => {
    return (m < 0 || n < 0) ? 0 : n * m;
};
const min = (list) => {
    return Math.min(...list);
};
const max = (list) => {
    return Math.max(...list);
};
const min2 = (list) => {
    return Math.min.apply(Math, list);
};
exports.min2 = min2;
const max2 = (list) => {
    return Math.max.apply(Math, list);
};
exports.max2 = max2;
const min3 = ($) => $.sort((a, b) => a - b)[0];
exports.min3 = min3;
const max3 = ($) => $.sort((a, b) => b - a)[0];
exports.max3 = max3;
const simpleMultiplication = (num) => {
    return num % 2 === 0
        ? num * 8
        : num * 9;
};
function oddOrEven(x) {
    return (x & 1) ? "odd" : "even";
}
function simpleMultiplication4(num) {
    if (num & 1) {
        return num * 9;
    }
    return num * 8;
}
function simpleMultiplication2(num) {
    return num * [8, 9][num % 2];
}
function simpleMultiplication3(num) {
    return num * (num % 2 ? 9 : 8);
}
const betterThanAverage = (classPoints, yourPoints) => {
    classPoints.push(yourPoints);
    const average = classPoints.reduce((a, b) => a + b) / classPoints.length;
    return yourPoints > average;
};
function betterThanAverage2(classPoints, yourPoints) {
    const average = classPoints.concat(yourPoints).reduce((prev, curr) => prev + curr) / (classPoints.length + 1);
    return yourPoints > average;
}
const betterThanAverage3 = (classPoints, yourPoints) => classPoints.reduce((acc, it) => acc + it, 0) / classPoints.length <= yourPoints;
function betterThanAverage4(classPoints, yourPoints) {
    return (classPoints.reduce((a, v) => a + v) / classPoints.length) < yourPoints;
}
function betterThanAverage5(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, c) => a + c) / classPoints.length;
}
function simpleMultiplication6(num) {
    if (num & 1) {
        return num * 9;
    }
    return num * 8;
}
function simpleMultiplication7(num) {
    if (num % 2) {
        return num * 9;
    }
    else {
        return num * 8;
    }
}
const DNAtoRNA = (dna) => {
    return dna.replace(/T/g, "U");
};
const DNAtoRNA2 = ($) => [...$].map(el => el === 'T' ? el = 'U' : el).join('');
function DNAtoRNA3(dna) {
    return dna.split('').map(nab => nab == 'T' ? 'U' : nab).join('');
}
const monkeyCount = (n) => {
    const solution = [];
    for (let i = 1; i <= n; i++) {
        solution.push(i);
    }
    console.log(solution);
    return solution;
};
function monkeyCount2(n) {
    return Array.from({ length: n }, (_, i) => i + 1);
}
function monkeyCount3(n) {
    return Array(n).fill(0).map((e, i) => i + 1);
}
function monkeyCount4(n) {
    return Array.from(Array(n), (x, ix) => ix + 1);
}
const grow = (arr) => {
    return arr.reduce((a, b) => a * b);
};
const bmi = (weight, height) => {
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
            return "Obese";
    }
};
function bmi2(weight, height) {
    const $ = weight / height ** 2;
    return $ <= 18.5 ? 'Underweight' : $ <= 25.0 ? 'Normal' : $ <= 30.0 ? 'Overweight' : 'Obese';
}
const bmi3 = (weight, height, bmi = 0) => (bmi = weight / height ** 2) > 18.5 ? bmi > 25 ? bmi > 30 ? 'Obese' : 'Overweight' : 'Normal' : 'Underweight';
const arrayPlusArray = (arr1, arr2) => {
    return arr1.concat(arr2).reduce((a, b) => a + b);
};
const arrayPlusArray3 = (arr1, arr2) => {
    return [...arr1, ...arr2].reduce((a, b) => a + b);
};
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
