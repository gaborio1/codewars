"use strict";
const nextBigger = (num) => {
    const digitsArr = String(num).split("");
    console.log(digitsArr);
    let solutionArr = [];
    const numStr = String(num);
    let matchArr = [];
    for (let i = numStr.length - 1; i >= 0; i--) {
        console.log(numStr[i]);
        matchArr.unshift(numStr[i]);
        console.log(matchArr);
        const largest = Number([...matchArr].sort().reverse().join(""));
        console.log("largestNumber: " + largest);
        const actual = Number(matchArr.join(""));
        console.log("actual: " + actual);
        if (actual !== largest) {
            console.log("match found");
            break;
        }
    }
    console.log("matchArr: " + matchArr);
    console.log("digitsArr: " + digitsArr);
    if (Number(matchArr.join("")) === Number([...matchArr].sort().reverse().join("")))
        return -1;
    for (let i = 0; i < digitsArr.length - matchArr.length; i++) {
        solutionArr.push(digitsArr[i]);
    }
    console.log("solutionArrInit: " + solutionArr);
    console.log("matchArr: " + matchArr);
    const matcArrFirstDigit = matchArr[0];
    console.log("matcArrFirstDigit: " + matcArrFirstDigit);
    let nextLargestDigit = "";
    const sortedArr = [...matchArr].sort();
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] > matcArrFirstDigit) {
            nextLargestDigit = sortedArr[i];
            console.log(nextLargestDigit);
            solutionArr.push(nextLargestDigit);
            sortedArr.splice(i, 1);
            console.log("sortedMinusArrSplice: " + sortedArr);
            break;
        }
    }
    console.log("solutionArr: " + solutionArr.concat(sortedArr));
    return Number(solutionArr.concat(sortedArr).join(""));
};
console.log(nextBigger(29));
console.log(nextBigger(12));
console.log(nextBigger(414));
console.log(nextBigger(59884848459853));
console.log(nextBigger(544));
