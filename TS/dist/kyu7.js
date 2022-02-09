"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata4 = exports.Kata3 = exports.Kata2 = void 0;
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
