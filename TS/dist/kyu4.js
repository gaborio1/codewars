"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextBigger7 = exports.sumOfIntervals3 = void 0;
const part = (n) => {
    return "...";
};
function interpreter(code, iterations, width, height) {
    return "hello";
}
function rectangleRotation(a, b) {
    return 1;
}
const decompose = (n) => {
    return null;
};
function isInteresting(n, awesomePhrases) {
    return 1;
}
function determinant(m) {
}
class G965A {
    static sumOfDivided(lst) {
        return [[1]];
    }
}
const bits = "1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011";
const dblLinear = (num) => {
    let sequence = [1];
    for (let i = 0; i < num / 2; i += 1) {
        const y = sequence[i] * 2 + 1;
        const z = sequence[i] * 3 + 1;
        console.log(sequence[i], "- ", y, z);
        sequence.push(y, z);
        sequence.sort((a, b) => a - b);
    }
    console.log(sequence);
    const solution = sequence[num - 1];
    return solution;
};
console.log(dblLinear(30));
class G964 {
}
const sumOfIntervals6 = (intervals) => {
    let uniqueElements = new Set();
    intervals.forEach((pair) => {
        for (let i = pair[0] + 1; i <= pair[1]; i++) {
            uniqueElements.add(i);
        }
    });
    return uniqueElements.size;
};
const sumOfIntervals = (intervals) => {
    let allIntElements = [];
    intervals.forEach((pair) => {
        for (let i = pair[0] + 1; i <= pair[1]; i++) {
            allIntElements.push(i);
        }
    });
    const uniqueElements = new Set(allIntElements);
    return uniqueElements.size;
};
const sumOfIntervals1 = (intervals) => {
    let allIntElements = [];
    intervals.forEach((pair) => {
        for (let i = pair[0] + 1; i <= pair[1]; i++) {
            allIntElements.push(i);
        }
    });
    const uniqueElements = new Set(allIntElements);
    const ascArr = Array.from(uniqueElements).sort((a, b) => a - b);
    return ascArr.length;
};
function sumOfIntervals2(intervals) {
    const ranges = new Set();
    intervals.forEach(([start, end]) => {
        for (let i = start; i < end; i++)
            ranges.add(i);
    });
    return ranges.size;
}
function isIntervalsConnected(int1, int2) {
    const [int1Start, int1End] = int1;
    const [int2Start, int2End] = int2;
    return ((int1Start <= int2Start && int2Start <= int1End) ||
        (int1Start <= int2End && int2End <= int1End));
}
function mergeIntervals(int1, int2) {
    return [Math.min(int1[0], int2[0]), Math.max(int1[1], int2[1])];
}
function tryMergeInterval(intervals) {
    let isMergedSmth = false;
    for (let i = 0; i < intervals.length; i++) {
        for (let j = 0; j < intervals.length; j++) {
            if (i === j)
                continue;
            if (isIntervalsConnected(intervals[i], intervals[j])) {
                intervals[Math.min(i, j)] = mergeIntervals(intervals[i], intervals[j]);
                intervals.splice(Math.max(i, j), 1);
                isMergedSmth = true;
                break;
            }
        }
    }
    return isMergedSmth;
}
function sumOfIntervals3(intervals) {
    const mergedIntervals = [...intervals];
    while (tryMergeInterval(mergedIntervals)) { }
    return mergedIntervals.reduce((a, b) => a + Math.abs(b[1] - b[0]), 0);
}
exports.sumOfIntervals3 = sumOfIntervals3;
function sumOfIntervals4(intervals) {
    const newIntervals = intervals.map((e) => new Array(e[1] - e[0]).fill(0).map((el, i) => i + e[0]));
    return new Set(newIntervals.reduce((a, b) => [...a, ...b])).size;
}
function sumOfIntervals5(intervals) {
    return new Set(intervals.reduce((a, c) => {
        for (let j = c[0] + 1; j <= c[1]; j++)
            a.push(j);
        return a;
    }, [])).size;
}
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
