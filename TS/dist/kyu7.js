"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata4 = exports.Kata3 = exports.Kata2 = void 0;
function bump(x) {
    return "";
}
function adjacentElementsProduct(arr) {
    return 1;
}
const getEvenNumbers = (numbersArray) => {
    return numbersArray.filter((num) => {
        return (num & 1) === 0;
    });
};
const getEvenNumbers2 = (numbersArray) => {
    return numbersArray.filter(x => x % 2 === 0);
};
const isEven = (num) => num % 2 == 0;
const getEvenNumbers3 = (nums) => nums.filter(isEven);
const getEvenNumbers4 = (numbersArray) => {
    return numbersArray.filter(cond => 0 === cond % 2);
};
const sumTriangularNumbers = (n) => {
    let sum = 0, triNum = 0;
    for (let i = 1; i <= n; i++) {
        triNum = triNum + i;
        sum += triNum;
    }
    return sum;
};
function sumTriangularNumbers2(n) {
    return (n <= 0) ? 0 : (n * (n + 1) * (n + 2)) / 6;
}
function sumTriangularNumbers4(n) {
    return Array.from({ "length": n }).map((value, index) => (1 + index + 1) * (index + 1) / 2).reduce((pre, current) => pre + current, 0);
}
function sumTriangularNumbers5(n) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result += (i * (i + 1)) / 2;
    }
    return result;
}
function sumTriangularNumbers6(n) {
    let sum = 0;
    for (let i = 1, j = 1; i <= n; i++, j += i) {
        sum += j;
    }
    return sum;
}
const predictAge = (...args) => {
    return Math.floor(Math.sqrt(args
        .map((num) => Math.pow(num, 2))
        .reduce((acc, curr) => acc + curr)) / 2);
};
function predictAge3(...ages) {
    return Math.trunc(Math.sqrt(ages
        .map(x => x * x)
        .reduce((a, b) => a + b, 0)) / 2);
}
;
class Kata {
    static findLongest(arr) {
        return arr.sort((a, b) => String(b).length - String(a).length)[0];
        let solution = -1;
        const sortedArr = [...arr].sort((a, b) => b - a);
        console.log(sortedArr);
        const maxLength = String(sortedArr[0]).length;
        console.log(maxLength);
        console.log(arr);
        for (let i = 0; i < arr.length; i++) {
            if (String(arr[i]).length === maxLength) {
                solution = arr[i];
                break;
            }
        }
        return solution;
    }
}
class Kata5 {
    static findLongest(array) {
        return array
            .reduce((a, b) => a.toString().length < b.toString().length ? b : a);
    }
}
const isSortedAndHow = (arr) => {
    let isAscending = false;
    let isDescending = false;
    let solution = "no";
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= arr[i - 1]) {
            isAscending = true;
        }
        else {
            break;
        }
        if (i === arr.length - 1 && isAscending) {
            solution = "yes, ascending";
        }
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            isDescending = true;
        }
        else {
            break;
        }
        if (i === arr.length - 1 && isDescending) {
            solution = "yes, descending";
        }
    }
    return solution;
};
function isSortedAndHow2(array) {
    let ascending = true, descending = true;
    for (var i = 1; i < array.length; i++) {
        if (array[i - 1] < array[i])
            descending = false;
        if (array[i - 1] > array[i])
            ascending = false;
        if (!ascending && !descending)
            return "no";
    }
    if (ascending)
        return "yes, ascending";
    return "yes, descending";
}
function isSortedAndHow3(array) {
    if (array.every((x, i, a) => i === 0 || a[i - 1] <= x))
        return "yes, ascending";
    if (array.every((x, i, a) => i === 0 || a[i - 1] >= x))
        return "yes, descending";
    return "no";
}
function isSortedAndHow4(array) {
    return [...array].sort((a, b) => a - b).join('') === array.join('') ? 'yes, ascending' : ([...array].sort((a, b) => a - b).reverse().join('') === array.join('') ? 'yes, descending' : 'no');
}
function isSortedAndHow5(array) {
    let isAsc = true;
    let isDesc = true;
    let i = 0;
    while (i + 1 < array.length) {
        if (array[i] > array[i + 1])
            isAsc = false;
        if (array[i] < array[i + 1])
            isDesc = false;
        i++;
    }
    if (isAsc)
        return "yes, ascending";
    else if (isDesc)
        return "yes, descending";
    else
        return "no";
}
function isSortedAndHow6(array) {
    const asc = [...array].sort((a, b) => a - b);
    const dsc = [...array].sort((a, b) => b - a);
    switch (array.toString()) {
        case asc.toString():
            return 'yes, ascending';
        case dsc.toString():
            return 'yes, descending';
        default:
            return 'no';
    }
}
function isSortedAndHow7(array) {
    if ([...array].sort((a, b) => a - b).join('') === array.join('')) {
        return 'yes, ascending';
    }
    else if ([...array].sort((a, b) => b - a).join('') === array.join('')) {
        return 'yes, descending';
    }
    else {
        return 'no';
    }
}
const angle = (n) => {
    return (n - 2) * 180;
};
const factorial = (num) => {
    let nthFact = 1;
    for (let i = 1; i <= num; i++) {
        nthFact *= i;
    }
    return nthFact;
};
function factorial2(n) {
    if (n <= 1)
        return 1;
    return n * factorial(n - 1);
}
const evaporator = (cont, dayEvap, thresH) => {
    let contentLeft = cont;
    const minQuantity = cont * (thresH / 100);
    let daysLeft = 0;
    while (contentLeft >= minQuantity) {
        contentLeft -= contentLeft * (dayEvap / 100);
        daysLeft++;
    }
    return daysLeft;
};
function evaporator2(content, evap_per_day, threshold) {
    return Math.ceil(Math.log(threshold / 100) / Math.log(1 - evap_per_day / 100));
}
function evaporator3(content, evapPerDay, threshold) {
    const reverseFactor = 1 / (1 - evapPerDay / 100);
    return Math.ceil(-Math.log(threshold / 100) / Math.log(reverseFactor));
}
function evaporator4(content, evapPerDay, threshold) {
    const full = content;
    let days = 0;
    do {
        content -= content / 100 * evapPerDay;
        days++;
    } while (content > full / 100 * threshold);
    return days;
}
const flattenAndSort = (inputArray) => {
    return inputArray
        .reduce((acc, curr) => acc.concat(curr), [])
        .sort((a, b) => a - b);
};
function flattenAndSort2(inputArray) {
    return inputArray.flat().sort((a, b) => a - b);
}
function flattenAndSort4($) {
    return $.toString().split(',').filter(e => e).map(Number).sort((a, b) => a - b);
}
function flattenAndSort5(inputArray) {
    let numbers = [];
    for (const tuple of inputArray) {
        numbers = [
            ...tuple,
            ...numbers,
        ];
    }
    return numbers.sort((a, b) => a - b);
}
const checkCoupon = (usrCode, validCode, currDate, expDate) => {
    const isValidCode = usrCode === validCode;
    let isValidDate = true;
    let months;
    (function (months) {
        months[months["January"] = 1] = "January";
        months[months["February"] = 2] = "February";
        months[months["March"] = 3] = "March";
        months[months["April"] = 4] = "April";
        months[months["May"] = 5] = "May";
        months[months["June"] = 6] = "June";
        months[months["July"] = 7] = "July";
        months[months["August"] = 8] = "August";
        months[months["September"] = 9] = "September";
        months[months["October"] = 10] = "October";
        months[months["November"] = 11] = "November";
        months[months["December"] = 12] = "December";
    })(months || (months = {}));
    const extractDate = (date) => {
        return date.replace(/,/g, "").split(" ");
    };
    const currYear = Number(extractDate(currDate)[2]);
    const expYear = Number(extractDate(expDate)[2]);
    const currMonth = extractDate(currDate)[0];
    const currMonthIdx = months[currMonth];
    const expMonth = extractDate(expDate)[0];
    const expMonthIdx = months[expMonth];
    const currDay = Number(extractDate(currDate)[1]);
    const expDay = Number(extractDate(expDate)[1]);
    console.table({
        currYear: currYear,
        expYear: expYear,
        currMonth: currMonth,
        currMonthIdx: currMonthIdx,
        expMonth: expMonth,
        expMonthIdx: expMonthIdx,
        currDay: currDay,
        expDay: expDay
    });
    if (expYear > currYear) {
        isValidDate = true;
    }
    else if (expYear === currYear) {
        if (expMonthIdx > currMonthIdx) {
            isValidDate = true;
        }
        else if (expMonthIdx === currMonthIdx) {
            if (expDay >= currDay) {
                isValidDate = true;
            }
            else {
                isValidDate = false;
            }
        }
        else {
            isValidDate = false;
        }
    }
    else {
        isValidDate = false;
    }
    return isValidCode && isValidDate;
};
function checkCoupon2(enteredCode, correctCode, currentDate, expirationDate) {
    return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate);
}
function checkCoupon3(enteredCode, correctCode, currentDate, expirationDate) {
    let cDate = new Date(currentDate);
    let expDate = new Date(expirationDate);
    return ((enteredCode === correctCode) && (cDate <= expDate)) ? true : false;
}
function checkCoupon4(enteredCode, correctCode, currentDate, expirationDate) {
    const isValidCode = enteredCode === correctCode;
    const isValidDate = new Date(currentDate) <= new Date(expirationDate);
    return isValidCode && isValidDate;
}
const rowWeights = (arr) => {
    let arr1 = [], arr2 = [];
    arr.forEach((num, idx) => {
        idx & 1
            ? arr1.push(num)
            : arr2.push(num);
    });
    return [arr2.reduce((a, b) => a + b), arr1.reduce((a, b) => a + b)];
};
function rowWeights2(arr) {
    return arr.reduce((r, e, i) => (r[i % 2] += e, r), [0, 0]);
}
function rowWeights3(arr) {
    let even = arr.reduce((sum, x, i) => sum + (!(i % 2) ? x : 0), 0);
    let odd = arr.reduce((sum, x, i) => sum + (i % 2 ? x : 0), 0);
    return [even, odd];
}
function rowWeights4(arr) {
    return arr.reduce((a, c, i) => i % 2 ? [a[0], a[1] + c] : [a[0] + c, a[1]], [0, 0]);
}
function rowWeights5(arr) {
    return arr.reduce((sumOfWeights, weight, i) => {
        sumOfWeights[i % 2] += weight;
        return sumOfWeights;
    }, [0, 0]);
}
function rowWeights6(arr) {
    const res = [0, 0];
    arr.forEach((x, i) => {
        if (i % 2 === 0) {
            res[0] += x;
        }
        else {
            res[1] += x;
        }
    });
    return res;
}
function rowWeights7(arr) {
    let arr1 = 0;
    let arr2 = 0;
    arr.forEach((value, index) => index % 2 ? arr2 += value : arr1 += value);
    return [arr1, arr2];
}
const sortNumbers = (numsArr) => {
    return numsArr.sort((a, b) => a - b);
};
function sortNumbers2(nums) {
    return nums ? nums.sort((a, b) => a - b) : [];
}
function sortNumbers3(nums) {
    return nums === null ? [] : nums.sort((left, right) => left - right);
}
const removeDuplicateWords = (str) => {
    return str
        .split(" ")
        .reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], [])
        .join(" ");
};
function removeDuplicateWords2(s) {
    return Array.from(new Set(s.split(' '))).join(' ');
}
function removeDuplicateWords3(s) {
    return s.split(' ').filter((v, i, a) => a.indexOf(v) === i).join(' ');
}
function removeDuplicateWords4(s) {
    return [...new Set(s.match(/[a-z]+/ig) || [])].join(" ");
}
function removeDuplicateWords5(s) {
    const wordArray = s.split(" ");
    const wordSet = new Set(wordArray);
    const result = Array.from(wordSet).join(" ");
    return result;
}
function removeDuplicateWords6(s) {
    let result = [];
    s.split(' ').forEach((string, index) => {
        if (result.indexOf(string) === -1) {
            result.push(string);
        }
    });
    return result.join(' ');
}
const capitalize = (str) => {
    let odds = "", evens = "";
    for (let i = 0; i < str.length; i++) {
        evens += i % 2 === 0 ? str[i].toUpperCase() : str[i];
        odds += i % 2 > 0 ? str[i].toUpperCase() : str[i];
    }
    return [evens, odds];
};
const capitalize2 = (s) => [
    [...s].map((l, i) => i % 2 ? l : l.toUpperCase()).join(''),
    [...s].map((l, i) => i % 2 ? l.toUpperCase() : l).join(''),
];
function capitalize3(s) {
    const output = ["", ""];
    s.split("").forEach((letter, index) => {
        output[0] += index % 2 ? letter : letter.toUpperCase();
        output[1] += !(index % 2) ? letter : letter.toUpperCase();
    });
    return output;
}
function capitalize4(s) {
    return [...s].reduce((acc, curr, indx) => {
        const isEven = indx % 2 == 0;
        acc[0] += curr[isEven ? "toUpperCase" : "toLowerCase"]();
        acc[1] += curr[!isEven ? "toUpperCase" : "toLowerCase"]();
        return acc;
    }, ["", ""]);
}
function capitalize5(s) {
    return [
        s
            .split('')
            .map((letter, i) => i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase())
            .join(''),
        s
            .split('')
            .map((letter, i) => i % 2 !== 0 ? letter.toUpperCase() : letter.toLowerCase())
            .join('')
    ];
}
class G964 {
}
G964.mxdiflg = (a1, a2) => {
    if (!a1.length || !a2.length)
        return -1;
    const shortest1 = Math.min(...a1.map((word) => word.length));
    const longest1 = Math.max(...a1.map((word) => word.length));
    const shortest2 = Math.min(...a2.map((word) => word.length));
    const longest2 = Math.max(...a2.map((word) => word.length));
    return Math.max(Math.abs(shortest1 - longest2), Math.abs(longest1 - shortest2));
};
G964.mxdiflg2 = (a1, a2) => {
    if (!a1.length || !a2.length)
        return -1;
    const getShortest = (arr) => Math.min(...arr.map((word) => word.length));
    const getLongest = (arr) => Math.max(...arr.map((word) => word.length));
    const shortest1 = getShortest(a1);
    const longest1 = getLongest(a1);
    const shortest2 = getShortest(a2);
    const longest2 = getLongest(a2);
    return Math.max(Math.abs(shortest1 - longest2), Math.abs(longest1 - shortest2));
};
G964.mxdiflg3 = (a1, a2) => {
    if (!a1.length || !a2.length)
        return -1;
    const getMinMax = (arr, output) => {
        return output === "min"
            ? Math.min(...arr.map((word) => word.length))
            : Math.max(...arr.map((word) => word.length));
    };
    const shortest1 = getMinMax(a1, "min");
    const longest1 = getMinMax(a1, "max");
    const shortest2 = getMinMax(a2, "min");
    const longest2 = getMinMax(a2, "max");
    return Math.max(Math.abs(shortest1 - longest2), Math.abs(longest1 - shortest2));
};
G964.mxdiflg4 = (a1, a2) => {
    const getMinMax = (arr, output) => {
        return output === "min"
            ? Math.min(...arr.map((word) => word.length))
            : Math.max(...arr.map((word) => word.length));
    };
    const shortest1 = getMinMax(a1, "min");
    const longest1 = getMinMax(a1, "max");
    const shortest2 = getMinMax(a2, "min");
    const longest2 = getMinMax(a2, "max");
    return a1.length && a2.length
        ? Math.max(Math.abs(shortest1 - longest2), Math.abs(longest1 - shortest2))
        : -1;
};
const solve = (str) => {
    let upperC = 0;
    for (const letter of str) {
        if (/[A-Z]/.test(letter))
            upperC++;
    }
    return upperC > str.length / 2
        ? str.toUpperCase()
        : str.toLowerCase();
};
function solve2(s) {
    let uppercaseCount = s.split('').filter(letter => letter === letter.toUpperCase()).length;
    return uppercaseCount > s.length / 2 ? s.toUpperCase() : s.toLowerCase();
}
function solve3(s) {
    return (s.match(/[a-z]/g) || []).length >= s.length / 2 ? s.toLowerCase() : s.toUpperCase();
}
const solve4 = (s) => {
    const upperCs = s.split("").filter(x => x == x.toUpperCase());
    return upperCs.length > s.length / 2 ? s.toUpperCase() : s.toLowerCase();
};
function solve5(s) {
    return s.replace(/[a-z]/g, '').length > s.length / 2 ? s.toUpperCase() : s.toLowerCase();
}
const minValue = (values) => {
    return Number(Array.from(new Set(values)).sort().join(""));
};
const minValue2 = (values) => {
    return +[...new Set(values)].sort().join("");
};
const smallEnough = (arr, limit) => {
    return arr.every((num) => num <= limit);
};
const checkExam = (array1, array2) => {
    let score = 0;
    for (let i = 0; i < array2.length; i++) {
        switch (array2[i]) {
            case "":
                score += 0;
                break;
            case array1[i]:
                score += 4;
                break;
            default:
                score += -1;
        }
    }
    return score < 0 ? 0 : score;
};
function checkExam2(array1, array2) {
    let result = 0;
    array2.forEach((item, index) => {
        item === array1[index] ? result += 4 : item === '' ? result += 0 : result -= 1;
    });
    return Math.max(result, 0);
}
function checkExam3(array1, array2) {
    let score = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array2[i] === "")
            continue;
        else if (array1[i] === array2[i])
            score += 4;
        else
            score--;
    }
    return score > 0 ? score : 0;
}
function checkExam4(array1, array2) {
    return Math.max(0, array2.reduce((a, b, i) => a + (b == "" ? 0 : b === array1[i] ? 4 : -1), 0));
}
const sumDigits = (num) => {
    return Math.abs(num)
        .toString()
        .split("")
        .map((digit) => Number(digit))
        .reduce((a, b) => a + b);
};
function sumDigits2(number) {
    return Math.abs(number).toString().split('').reduce((acc, digit) => parseInt(digit) + acc, 0);
}
const maxMultiple = (divisor, bound) => {
    let solution = 0;
    for (let num = bound; num > 0; num--) {
        if (num % divisor === 0) {
            solution = num;
            break;
        }
    }
    return solution;
};
function maxMultiple2(divisor, bound) {
    return bound - bound % divisor;
}
function maxMultiple3(divisor, bound) {
    return Math.floor(bound / divisor) * divisor;
}
function maxMultiple4(divisor, bound) {
    for (let n = bound; n > 0; n -= 1)
        if (n % divisor === 0)
            return n;
}
const twoOldestAges = (ages) => {
    return ages
        .sort((a, b) => b - a)
        .slice(0, 2)
        .reverse();
};
const twoOldestAges2 = (ages) => ages.sort((a, b) => a - b).slice(ages.length - 2);
const divisors = (num) => {
    if (num === 1)
        return 1;
    const divisors = [];
    for (let i = 1; i <= num / 2; i++) {
        let divisor1 = i, divisor2 = num / i;
        if (Number.isInteger(num / divisor1)) {
            if (!divisors.includes(divisor1)) {
                if (divisor1 === divisor2) {
                    divisors.push(divisor1);
                }
                else {
                    divisors.push(divisor1, divisor2);
                }
            }
        }
    }
    return divisors.length;
};
function divisors2(n) {
    let steps = 0;
    for (let i = 0; i <= n; i++) {
        if (n % i === 0)
            steps++;
    }
    return steps;
}
const nbDig = (num, digit) => {
    let counter = 0;
    const regex = new RegExp(String(digit), "g");
    for (let i = 0; i <= num; i++) {
        let squareStr = String(Math.pow(i, 2));
        const matches = squareStr.match(regex);
        if (matches)
            counter += matches.length;
    }
    return counter;
};
const breakChocolate = (n, m) => {
    return n * m > 1
        ? n * m - 1
        : 0;
};
const dontGiveMeFive = (start, end) => {
    let counter = 0;
    for (let i = start; i <= end; i++) {
        if (!/5/g.test(String(i))) {
            counter++;
        }
    }
    return counter;
};
function dontGiveMeFive2(start, end) {
    return Array.from({ length: (end - start) + 1 }, (ix, it) => it + start).filter((it) => !(/5/.test(it + ""))).length;
}
;
function dontGiveMeFive3(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => i + start).filter(x => !/5/.test(`${x}`)).length;
}
const reverseWords = (str) => {
    return str
        .split(" ")
        .map((word) => word.split("").reverse().join(''))
        .join(" ");
};
const SeriesSum = (num) => {
    let sum = 0;
    for (let i = 0, denominator = 1; i < num; i++, denominator += 3) {
        sum += 1 / denominator;
    }
    return String(sum.toFixed(2));
};
function SeriesSum2(n) {
    return [...Array(n).keys()].map(k => 1 / (k * 3 + 1)).reduce((acc, n) => acc + n, 0).toFixed(2);
}
const solution = (str, ending) => {
    return str.endsWith(ending);
};
function solution2(str, ending) {
    return !ending.length || str.slice(-ending.length) === ending;
}
function solution3(str, ending) {
    const strSubstring = str.slice(str.length - ending.length);
    return strSubstring === ending;
}
const oddOrEven = (array) => {
    return array.length > 0
        ? array.reduce((a, b) => a + b) & 1
            ? "odd"
            : "even"
        : "even";
};
function oddOrEven2(array) {
    return array.reduce((acc, it) => acc + it, 0) % 2 ? "odd" : "even";
}
const oddOrEven3 = (array) => array.reduce((acc, curr) => acc += curr, 0) % 2 === 0 ? 'even' : 'odd';
const number = (busStops) => {
    let counter = 0;
    busStops.forEach((stop) => {
        counter += stop[0];
        counter -= stop[1];
    });
    return counter;
};
function number2(busStops) {
    return busStops.reduce((rem, [on, off]) => rem + (on - off), 0);
}
function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
}
const isTriangle = (a, b, c) => {
    return (a + b) > c && (a + c) > b && (b + c) > a;
};
const isTriangle2 = (a, b, c) => (a + b <= c || a + c <= b || b + c <= a) ? false : true;
function isTriangle3(a, b, c) {
    return a + b <= c ? false : a + c <= b ? false : b + c <= a ? false : true;
}
const validatePin = (pin) => {
    return (pin.length === 4 && pin.match(/\d/g).length === 4)
        || (pin.length === 6 && pin.match(/\d/g).length === 6);
};
class Kata2 {
    static validatePin(pin) {
        return Kata2.pinFormat.test(pin);
    }
}
exports.Kata2 = Kata2;
Kata2.pinFormat = new RegExp(/^\d{4}(\d{2})?$/);
class Kata3 {
    static validatePin(pin) {
        return /^(\d{4}|\d{6})$/.test(pin);
    }
}
exports.Kata3 = Kata3;
class Kata4 {
    static validatePin(pin) {
        const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        if (pin.length !== 4 && pin.length !== 6) {
            return false;
        }
        for (let index = 0; index < pin.length; index++) {
            if (!digits.includes(pin[index])) {
                return false;
            }
        }
        return true;
    }
}
exports.Kata4 = Kata4;
const dnaStrand = (dna) => {
    const arr = dna.split("");
    arr.map((el, i) => {
        switch (el) {
            case "A":
                arr[i] = "T";
                break;
            case "T":
                arr[i] = "A";
                break;
            case "C":
                arr[i] = "G";
                break;
            case "G":
                arr[i] = "C";
        }
    });
    console.log(arr.join(""));
    return arr.join("");
};
const toJadenCase = (str) => {
    console.log(str.split(" ").map((word) => word.replace(word[0], word[0].toUpperCase())).join(" "));
    return str.split(" ").map((word) => word.replace(word[0], word[0].toUpperCase())).join(" ");
};
const findShort = (str) => {
    return str.split(" ").sort((a, b) => { return a.length - b.length; })[0].length;
};
findShort("bitcoin take over the world maybe who knows perhaps");
const xo = (str) => {
    const xS = str.toLowerCase().match(/x/g);
    const oS = str.toLowerCase().match(/o/g);
    if (xS && oS) {
        return xS.length === oS.length;
    }
    else if (xS || oS) {
        return false;
    }
    else {
        return true;
    }
};
const isIsogram = (str) => {
    const lettersSet = new Set(str.toLowerCase().split(""));
    return lettersSet.size === str.length;
};
function isSquare(num) {
    return Number.isInteger(Math.sqrt(num));
}
;
const getMiddle = (str) => {
    const halfLength = str.length / 2;
    const isEvenLength = str.length % 2 === 0;
    return isEvenLength
        ? str.substring(halfLength - 1, halfLength + 1)
        : str.charAt((str.length - 1) / 2);
};
const descendingOrder = (n) => {
    return Number(n.toString().split("").map(Number).sort().reverse().map(String).join(""));
};
descendingOrder(123456789);
const accum = (str) => {
    const repsArr = [];
    const letters = str.split("").map((el) => el.toLowerCase());
    letters.forEach((letter, i) => {
        let rep = letter
            .repeat(i + 1)
            .replace(letter[0], letter[0].toUpperCase());
        repsArr.push(rep);
    });
    console.log(repsArr.join("-"));
    return repsArr.join("-");
};
const highAndLow = (numbers) => {
    const numArr = numbers.split(" ").map((num) => Number(num));
    return `${Math.max(...numArr)} ${Math.min(...numArr)}`;
};
highAndLow("1 2 3 4 -6");
const disemvowel = (str) => {
    return str.replace(/[aeiou]/gi, "");
};
const squareDigits = (num) => {
    let solution;
    solution = num
        .toString()
        .split("")
        .map((el) => Math.pow(Number(el), 2).toString())
        .join("");
    console.log(Number(solution));
    return Number(solution);
};
const getCount = (str) => {
    return str.split("").filter((el) => el.match(/[aeiou]/gi)).length;
};
