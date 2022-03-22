"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextBigger7 = void 0;
class G964 {
}
const sumOfIntervals = (intervals) => {
    return 1;
};
const nextBigger = (num) => {
    const digitsArr = String(num)
        .split("")
        .map((digit) => Number(digit));
    let solutionArr = [];
    const numStr = String(num);
    let matchArr = [];
    for (let i = numStr.length - 1; i >= 0; i--) {
        let digit = Number(numStr[i]);
        matchArr.unshift(digit);
        const largestSub = Number([...matchArr].sort().reverse().join(""));
        const actualSub = Number(matchArr.join(""));
        if (actualSub !== largestSub) {
            break;
        }
    }
    if (Number(matchArr.join("")) ===
        Number([...matchArr].sort().reverse().join("")))
        return -1;
    for (let i = 0; i < digitsArr.length - matchArr.length; i++) {
        solutionArr.push(digitsArr[i]);
    }
    const matcArrFirstDigit = matchArr[0];
    let nextLargestDigit;
    const sortedMatchArr = [...matchArr].sort();
    for (let i = 0; i < sortedMatchArr.length; i++) {
        if (sortedMatchArr[i] > matcArrFirstDigit) {
            nextLargestDigit = sortedMatchArr[i];
            solutionArr.push(nextLargestDigit);
            sortedMatchArr.splice(i, 1);
            break;
        }
    }
    return Number(solutionArr.concat(sortedMatchArr).join(""));
};
const nextBigger2 = (num) => {
    const digitsArr = String(num)
        .split("")
        .map((digit) => Number(digit));
    let solutionArr = [];
    const numStr = String(num);
    let matchArr = [];
    for (let i = numStr.length - 1; i >= 0; i--) {
        let digit = Number(numStr[i]);
        matchArr.unshift(digit);
        const largestSub = Number([...matchArr].sort().reverse().join(""));
        const actualSub = Number(matchArr.join(""));
        if (actualSub !== largestSub) {
            break;
        }
    }
    if (Number(matchArr.join("")) ===
        Number([...matchArr].sort().reverse().join("")))
        return -1;
    for (let i = 0; i < digitsArr.length - matchArr.length; i++) {
        solutionArr.push(digitsArr[i]);
    }
    const matcArrFirstDigit = matchArr[0];
    let nextLargestDigit;
    const sortedMatchArr = [...matchArr].sort();
    for (let i = 0; i < sortedMatchArr.length; i++) {
        if (sortedMatchArr[i] > matcArrFirstDigit) {
            nextLargestDigit = sortedMatchArr[i];
            solutionArr.push(nextLargestDigit);
            sortedMatchArr.splice(i, 1);
            break;
        }
    }
    return Number(solutionArr.concat(sortedMatchArr).join(""));
};
function nextBigger3(n) {
    const digitArray = Array.from(String(n), Number);
    let swapped = false;
    let i = digitArray.length - 1;
    for (i; i > 0 && !swapped; i--) {
        if (digitArray[i] > digitArray[i - 1]) {
            const j = i +
                findIndexOfNextBiggerDigit(digitArray.slice(i), digitArray[i - 1]);
            let temp = digitArray[j];
            digitArray[j] = digitArray[i - 1];
            digitArray[i - 1] = temp;
            swapped = true;
        }
    }
    if (!swapped)
        return -1;
    return Number(partialSort(digitArray, i).join(""));
}
function findIndexOfNextBiggerDigit(arr, threshold) {
    let minDigit = arr[0];
    let minDigitIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > threshold && arr[i] < minDigit) {
            minDigit = arr[i];
            minDigitIndex = i;
        }
    }
    return minDigitIndex;
}
function partialSort(arr, start) {
    const sortedPart = arr.slice(start + 1).sort();
    return arr.slice(0, start + 1).concat(sortedPart);
}
function nextBigger4(num) {
    if (num < 12 ||
        num % 1 !== 0 ||
        /^(\d)\1+$/.test(num.toString()) ||
        /^9*8*7*6*5*4*3*2*1*0*$/.test(num.toString()))
        return -1;
    const numStr = sortAsString(num);
    let nextNum = num;
    let isNextBigger = false;
    while (!isNextBigger) {
        if (numStr === sortAsString(++nextNum))
            isNextBigger = true;
    }
    return nextNum;
}
function sortAsString(num) {
    return num.toString().split("").sort().join("");
}
const nextBigger5 = (n) => {
    let max = maxify(n);
    while (++n <= max) {
        if (maxify(n) === max) {
            return n;
        }
    }
    return -1;
};
const maxify = (n) => {
    return +[...`${n}`]
        .map((n) => +n)
        .sort((a, b) => b - a)
        .join("")
        .replace(/^(0+)([1-9])/, "$2$1");
};
function nextBigger6(n) {
    const originalArr = ("" + n).split("").sort().join("");
    let newArr = "";
    let current = n + 1;
    if (n.toString().split("").join("") ==
        [...n.toString().split("")].sort().reverse().join(""))
        return -1;
    while (originalArr !== newArr) {
        newArr = ("" + current).split("").sort().join("");
        current++;
    }
    return current - 1;
}
function sortedDigits(n) {
    let arr = n.toString().split("");
    arr.sort(function (a, b) {
        return b.localeCompare(a);
    });
    return arr;
}
function nextBigger7(n) {
    let arr = sortedDigits(n);
    let max = parseInt(arr.join(""), 10);
    for (let i = n + 1; i <= max; i++) {
        if (sortedDigits(i).every((x, j) => x === arr[j])) {
            return i;
        }
    }
    return -1;
}
exports.nextBigger7 = nextBigger7;
