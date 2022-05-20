"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata4 = exports.Kata3 = exports.Kata2 = exports.strongNumber4 = exports.calc = exports.specialNumber2 = exports.closestMultiple104 = exports.evensAndOdds4 = void 0;
function isNegativeZero(n) {
    return true;
}
function dative(word) {
    return "hello";
}
const calcType = (a, b, res) => {
    return "calculation";
};
const fusc = (n) => {
    return 1;
};
const potatoes = (p0, w0, p1) => {
    return 1;
};
class G9645 {
    static makeValley(arr) {
        return [1];
    }
}
const mean = (lst) => {
    return [1, "hello"];
};
const splitTheBill = (x) => {
    return x;
};
const isVeryEvenNumber = (n) => {
    return true;
};
const freqSeq = (str, sep) => {
    return "";
};
const change = (string) => {
    return "hello";
};
const flyBy = (lamps, drone) => {
    return "hello";
};
const timeCorrect = (timestring) => {
    return "?";
};
const extraPerfect = (n) => {
};
const replaceNth = (text, n, oldValue, newValue) => {
    return text;
};
const spoonerize = (wordStr) => {
    const lettersArr = wordStr
        .split(" ")
        .map((word) => word.split(""));
    const first = lettersArr[0][0];
    const second = lettersArr[1][0];
    lettersArr[0][0] = second;
    lettersArr[1][0] = first;
    let solution = lettersArr
        .map((arr) => {
        return arr.join("");
    })
        .join(" ");
    return solution;
};
function spoonerize2(words) {
    const [word1, word2] = words.split(' ');
    const sword1 = `${word2[0]}` + word1.slice(1);
    const sword2 = `${word1[0]}` + word2.slice(1);
    return `${sword1} ${sword2}`;
}
function spoonerize3(words) {
    let arr = words.split(" ");
    let a = arr[0][0];
    let b = arr[1][0];
    return b + arr[0].slice(1) + ' ' + a + arr[1].slice(1);
}
const spoonerize4 = (words) => {
    const [a, b] = words.split(' ');
    return `${b.charAt(0)}${a.substr(1)} ${a.charAt(0)}${b.substr(1)}`;
};
function spoonerize5(words) {
    let [word1, word2] = words.split(" ");
    let spoonerizedWord1 = spoonerizeWord(word1, word2);
    let spoonerizedWord2 = spoonerizeWord(word2, word1);
    return `${spoonerizedWord1} ${spoonerizedWord2}`;
}
function spoonerizeWord(word1, word2) {
    return `${word2[0]}${word1.slice(1)}`;
}
function spoonerize7(words) {
    let list = words.split(" ");
    let a = list[0][0];
    let b = list[1][0];
    return `${b + list[0].slice(1)} ${a + list[1].slice(1)}`;
}
function spoonerize8(words) {
    const arr = words.split(' ');
    return [arr[1][0] + arr[0].slice(1), arr[0][0] + arr[1].slice(1)].join(' ');
}
class Kata6 {
}
Kata6.head = (arr) => {
    return arr[0];
};
Kata6.tail = (arr) => {
    return arr.slice(1);
};
Kata6.init = (arr) => {
    return arr.slice(0, -1);
};
Kata6.last = (arr) => {
    return arr[arr.length - 1];
};
const Kata62 = {
    head: (arr) => arr[0],
    tail: (arr) => arr.slice(1),
    init: (arr) => arr.slice(0, arr.length - 1),
    last: (arr) => arr[arr.length - 1],
};
class Kata63 {
    static head([head, ..._]) {
        return head;
    }
    static tail([_, ...tail]) {
        return tail;
    }
    static init(arr) {
        return arr.slice(0, -1);
    }
    static last(arr) {
        return arr.slice(-1)[0];
    }
}
class Kata64 {
}
Kata64.tail = (arr) => {
    return arr.slice(1, arr.length);
};
Kata64.init = (arr) => {
    return arr.slice(0, -1);
};
Kata64.last = (arr) => {
    return arr[arr.length - 1];
};
Kata64.head = (arr) => {
    return arr[0];
};
class Kata65 {
    static head(list = []) {
        const a = list[0];
        return a;
    }
    static tail(list = []) {
        const c = [];
        for (let i = 1; i < list.length; i++) {
            c.push(list[i]);
        }
        return c;
    }
    static init(list = []) {
        const c = [];
        for (let i = 0; i < list.length - 1; i++) {
            c.push(list[i]);
        }
        return c;
    }
    static last(list = []) {
        const a = list[list.length - 1];
        return a;
    }
}
class Kata66 {
    static head(array) {
        return array[0];
    }
    static tail(array) {
        let temp = [...array];
        temp.shift();
        return temp;
    }
    static init(array) {
        let temp = [...array];
        temp.pop();
        return temp;
    }
    static last(array) {
        let temp = [...array];
        return temp.pop();
    }
}
class Kata67 {
    static head([head, ..._]) {
        return head;
    }
    static tail([_, ...tail]) {
        return tail;
    }
    static init(arr) {
        return arr.slice(0, -1);
    }
    static last(arr) {
        return arr.slice(-1)[0];
    }
}
const numbersWithDigitInside = (range, digit) => {
    let matches = [];
    for (let i = 1; i <= range; i += 1) {
        if (i.toString().indexOf(digit.toString()) > -1) {
            matches.push(i);
        }
    }
    console.log(matches);
    if (matches.length === 0)
        return [0, 0, 0];
    const count = matches.length;
    const sum = matches.reduce((acc, curr) => acc + curr);
    const prod = matches.reduce((acc, curr) => acc * curr);
    const solution = [count, sum, prod];
    return solution;
};
function numbersWithDigitInside2(x, d) {
    let numbers = [];
    for (let i = 1; i <= x; i++) {
        if (~i.toString().indexOf(d.toString())) {
            numbers.push(i);
        }
    }
    return [
        numbers.length,
        numbers.reduce((a, b) => a + b, 0),
        numbers.length === 0 ? 0 : numbers.reduce((a, b) => a * b),
    ];
}
function numbersWithDigitInside4(x, d) {
    let numbers = [];
    for (let i = 1; i <= x; i++) {
        if (String(i).indexOf(String(d)) !== -1) {
            numbers.push(i);
        }
    }
    return [
        numbers.length,
        numbers.reduce((a, b) => a + b, 0),
        numbers.length === 0
            ? 0
            : numbers.reduce((a, b) => a * b),
    ];
}
function numbersWithDigitInside5(x, d) {
    let count = 0, sum = 0, product = 0;
    for (let i = 1; i <= x; i++) {
        if (("" + i).indexOf("" + d) != -1) {
            count++;
            sum += i;
            product = (product == 0 ? 1 : product) * i;
        }
    }
    return [count, sum, product];
}
function numbersWithDigitInside6(x, d) {
    const set = [];
    for (let i = 1; i <= x; i++)
        set.push(i);
    const match = set.filter((test) => test.toString().indexOf(d.toString()) >= 0);
    return match.length
        ? [
            match.length,
            match.reduce((a, b) => a + b),
            match.reduce((a, b) => a * b),
        ]
        : [0, 0, 0];
}
const countLettersAndDigits = (str) => {
    if (!/[a-z0-9]/gi.test(str))
        return 0;
    const matches = str.match(/[a-z0-9]/gi);
    return matches.length;
};
function countLettersAndDigits2(input) {
    return [...input].map((it) => it.replace(/[^a-z0-9]/gi, "")).join("")
        .length;
}
function countLettersAndDigits3(input) {
    return input.replace(/[^A-Za-z0-9]/g, "").length;
}
function countLettersAndDigits4(input) {
    let temp = 0;
    input.split("").forEach((i) => (i.match(/^[a-z0-9]+$/i) ? temp++ : temp));
    return temp;
}
function countLettersAndDigits5(input) {
    let countArr = input.match(/[0-9A-Za-z]/g) || [];
    return countArr.length;
}
function countLettersAndDigits6(input) {
    const array = input.match(/[a-z0-9]/gi);
    return array ? array.length : 0;
}
function countLettersAndDigits7(input) {
    return input.split("").filter(function (v) {
        if (48 <= v.charCodeAt(0) && v.charCodeAt(0) <= 57)
            return true;
        if (65 <= v.charCodeAt(0) && v.charCodeAt(0) <= 90)
            return true;
        if (97 <= v.charCodeAt(0) && v.charCodeAt(0) <= 122)
            return true;
        return false;
    }).length;
}
class G9643 {
}
G9643.scale = (str, repeatChar, repeatSub) => {
    if (str.length === 0)
        return "";
    const subStrArr = str.split("\n");
    const horizontal = subStrArr
        .map((sub) => {
        return sub
            .replace(/./g, function (match) {
            return Array(repeatChar + 1).join(match);
        })
            .concat("\n");
    });
    const vertical = horizontal.map((sub) => {
        return Array(repeatSub + 1).join(sub);
    });
    const solution = vertical.join("").slice(0, -1);
    return solution;
};
const scale2 = (strng, k, n) => strng
    .replace(/[^\n]/g, (x) => Array(k + 1).join(x))
    .replace(/[^\n]+/g, (x) => Array(n + 1)
    .join("\n" + x)
    .trim());
const scale3 = (strng, k, n) => {
    if (strng.length === 0)
        return "";
    var a = strng
        .split("\n")
        .map(function (x) {
        var y = x
            .split("")
            .map(function (z) {
            return Array(k + 1).join(z);
        })
            .join("");
        return Array(n + 1).join(y + "\n");
    })
        .join("");
    return a.substring(0, a.length - 1);
};
class Kata1 {
    static isNice(arr) {
        let solution = false;
        for (let i = 0; i < arr.length; i += 1) {
            const numArr = arr.slice();
            numArr.splice(i, 1);
            solution = numArr.some((el) => el + 1 === arr[i] || el - 1 === arr[i]);
            if (!solution)
                break;
        }
        return solution;
    }
}
function isNice2(arr) {
    let set = new Set(arr);
    return (arr.length !== 0 && arr.every((v) => set.has(v - 1) || set.has(v + 1)));
}
function isNice4(arr) {
    return (arr.length > 0 &&
        arr.every((n) => arr.includes(n - 1) || arr.includes(n + 1)));
}
const nextHappyYear = (year) => {
    year += 1;
    let digitsArr = year.toString().split("");
    let uniqueDigits = new Set(digitsArr);
    return digitsArr.length > uniqueDigits.size ? nextHappyYear(year) : year;
};
function nextHappyYear2(year) {
    year += 1;
    while (new Set("" + year).size != 4) {
        year++;
    }
    return year;
}
function nextHappyYear3(year) {
    let res = year;
    do {
        res++;
    } while (+res
        .toString()
        .split("")
        .filter((el, i, arr) => arr.indexOf(el) === i)
        .join("") != res);
    return res;
}
function nextHappyYear4(year) {
    while (3 > 2) {
        let shake = new Set(String(++year).split(""));
        if (shake.size === 4)
            break;
    }
    return year;
}
function nextHappyYear5(year) {
    let digits_of_the_year = year.toString().split("").map(Number);
    do {
        year++;
        digits_of_the_year = year.toString().split("").map(Number);
    } while (digits_of_the_year[3] == digits_of_the_year[2] ||
        digits_of_the_year[3] == digits_of_the_year[1] ||
        digits_of_the_year[3] == digits_of_the_year[0] ||
        digits_of_the_year[2] == digits_of_the_year[1] ||
        digits_of_the_year[2] == digits_of_the_year[0] ||
        digits_of_the_year[1] == digits_of_the_year[0]);
    return year;
}
function nextHappyYear6(year) {
    cicle: for (let i = year + 1; i <= 9999; i++) {
        if (new Set(i.toString().split("")).size == 4) {
            return i;
            break cicle;
        }
    }
}
function nextHappyYear7(year) {
    year++;
    const arr = Array.from(year.toString());
    if (new Set(arr).size !== arr.length) {
        return nextHappyYear(year);
    }
    else {
        return year;
    }
}
function nextHappyYear8(year) {
    while ([...new Set(("" + ++year).split(""))].length < 4) { }
    return year;
}
const save = (sizesArr, storage) => {
    let freeSpace = storage, solution = 0;
    for (let i = 0; i < sizesArr.length; i += 1) {
        freeSpace -= sizesArr[i];
        if (freeSpace < 0) {
            break;
        }
        solution += 1;
    }
    return solution;
};
function save2(sizes, hd) {
    return sizes.reduce((a, v) => {
        if ((hd -= v) >= 0)
            a++;
        return a;
    }, 0);
}
function save3(sizes, hd) {
    let currentCapacity = 0;
    let totalSavedFiles = 0;
    for (let index = 0; index < sizes.length; index++) {
        if (currentCapacity + sizes[index] <= hd) {
            currentCapacity += sizes[index];
            totalSavedFiles += 1;
        }
        else {
            break;
        }
    }
    return totalSavedFiles;
}
const save4 = (sizes, hd) => sizes.reduce(({ total, files }, n) => ({
    total: total + n,
    files: total + n <= hd ? files + 1 : files,
}), { total: 0, files: 0 }).files;
const circleOfNumbers = (num, firstNum) => {
    return firstNum < num / 2 ? num / 2 + firstNum : firstNum - num / 2;
};
function circleOfNumbers2(n, firstNumber) {
    return (firstNumber + n / 2) % n;
}
function circleOfNumbers3(n, firstNumber) {
    const result = firstNumber - n / 2;
    return result == 0 ? 0 : result > 0 ? 0 + result : n + result;
}
function circleOfNumbers4(n, firstNumber) {
    let midPoint = n / 2;
    let result = 0;
    if (firstNumber === midPoint) {
        return 0;
    }
    if (firstNumber > midPoint) {
        return firstNumber - midPoint;
    }
    return firstNumber + midPoint;
}
function circleOfNumbers5(n, firstNumber) {
    const stepSize = 360 / n;
    const stepCount = 180 / stepSize;
    return Math.trunc((firstNumber + stepCount) % n);
}
const newAvg = (donations, targetAvg) => {
    if (!donations.length)
        return targetAvg;
    const targetSum = targetAvg * (donations.length + 1);
    const currentSum = donations.reduce((acc, curr) => acc + curr);
    const solution = Math.ceil(targetSum - currentSum);
    if (solution <= 0)
        throw new Error("Expected New Average is too low");
    return solution;
};
const newAvg2 = (dons, targetAvg) => {
    if (!dons.length)
        return targetAvg;
    const solution = Math.ceil(targetAvg * (dons.length + 1) - dons.reduce((acc, curr) => acc + curr));
    if (solution <= 0)
        throw new Error("Expected New Average is too low");
    return solution;
};
function newAvg3(arr, newavg) {
    const out = Math.ceil(newavg * (arr.length + 1) - arr.reduce((a, b) => a + b, 0));
    if (out <= 0) {
        throw "Expected New Average is too low";
    }
    return out;
}
function newAvg4(arr, newavg) {
    const sum = arr.reduce((tot, val) => tot + val, 0);
    const don = (arr.length + 1) * newavg - sum;
    if (don < 0) {
        throw new Error("Expected New Average is too low");
    }
    return Math.ceil(don);
}
function newAvg5(arr, newavg) {
    let donate = Math.ceil(newavg * (arr.length + 1) - arr.reduce((a, b) => a + b, 0));
    if (donate <= 0)
        throw "Expected New Average is too low";
    return donate;
}
const productArray = (nums) => {
    const totalProd = nums.reduce((acc, curr) => acc * curr);
    const solution = nums.map((num) => totalProd / num);
    return solution;
};
const productArray2 = (nums) => {
    return nums.map((num) => nums.reduce((acc, curr) => acc * curr) / num);
};
function productArray3(nums) {
    let n = nums.reduce((a, b) => a * b, 1);
    return nums.map((x) => n / x);
}
var Issuer;
(function (Issuer) {
    Issuer["VISA"] = "VISA";
    Issuer["AMEX"] = "AMEX";
    Issuer["Mastercard"] = "Mastercard";
    Issuer["Discover"] = "Discover";
    Issuer["Unknown"] = "Unknown";
})(Issuer || (Issuer = {}));
const getIssuer = (cardNum) => {
    const cardNumStr = cardNum.toString();
    let solution = "";
    const re = {
        VISA: /^4[0-9]{12}(?:[0-9]{3})?$/,
        Mastercard: /^5[1-5][0-9]{14}$/,
        AMEX: /^3[47][0-9]{13}$/,
        Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    };
    for (let key in re) {
        if (re[key].test(cardNumStr)) {
            solution = key;
            break;
        }
        else {
            solution = "Unknown";
        }
    }
    return solution;
};
function detectCardType(number) {
    var re = {
        electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
        maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
        dankort: /^(5019)\d+$/,
        interpayment: /^(636)\d+$/,
        unionpay: /^(62|88)\d+$/,
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        amex: /^3[47][0-9]{13}$/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
    };
}
const getIssuer2 = (x, $ = x.toString()) => (Number($.slice(0, 2)) === 34 || Number($.slice(0, 2)) === 37) &&
    $.length === 15
    ? "AMEX"
    : Number($.slice(0, 4)) === 6011 && $.length === 16
        ? "Discover"
        : Number($.slice(0, 2)) > 50 &&
            Number($.slice(0, 2)) < 56 &&
            $.length === 16
            ? "Mastercard"
            : Number($.slice(0, 1)) === 4 && ($.length === 13 || $.length === 16)
                ? "VISA"
                : "Unknown";
const getIssuer3 = (x) => {
    let cn = x.toString();
    switch (true) {
        case /^3[4,7]/.test(cn) && cn.length == 15:
            return Issuer.AMEX;
        case /^6011/.test(cn) && cn.length == 16:
            return Issuer.Discover;
        case /^5[1-5]/.test(cn) && cn.length == 16:
            return Issuer.Mastercard;
        case /^4/.test(cn) && (cn.length == 13 || cn.length == 16):
            return Issuer.VISA;
        default:
            return Issuer.Unknown;
    }
};
const getIssuer4 = (x) => {
    let str = x.toString();
    let len = str.length;
    let begin = { a: str.slice(0, 2), b: str.slice(0, 4), c: str.slice(0, 1) };
    if ((len === 16 || len === 13) && begin.c === "4") {
        return "VISA";
    }
    else if (len === 16 &&
        (begin.a === "51" ||
            begin.a === "52" ||
            begin.a === "53" ||
            begin.a === "54" ||
            begin.a === "55")) {
        return "Mastercard";
    }
    else if (len === 16 && begin.b === "6011") {
        return "Discover";
    }
    else if (len === 15 && (begin.a === "34" || begin.a === "37")) {
        return "AMEX";
    }
    return "Unknown";
};
function getIssuer5(x) {
    const test = (reg) => reg.test(`${x}`);
    if (test(/^(34|37)\d{13}$/))
        return "AMEX";
    else if (test(/^6011\d{12}$/))
        return "Discover";
    else if (test(/^(51|52|53|54|55)\d{14}$/))
        return "Mastercard";
    else if (test(/^4((\d{12})|(\d{15}))$/))
        return "VISA";
    return "Unknown";
}
const getIssuer6 = (x) => {
    let creditCardNumber = x.toString();
    let ccFirstFour = creditCardNumber.substr(0, 4);
    let ccFirstTwo = creditCardNumber.substr(0, 2);
    let ccLength = creditCardNumber.length;
    let Issuer;
    (function (Issuer) {
        Issuer["VISA"] = "VISA";
        Issuer["AMEX"] = "AMEX";
        Issuer["Mastercard"] = "Mastercard";
        Issuer["Discover"] = "Discover";
        Issuer["Unknown"] = "Unknown";
    })(Issuer || (Issuer = {}));
    if (ccFirstFour == "6011" && ccLength == 16) {
        return Issuer.Discover;
    }
    if ((ccFirstTwo == "34" || ccFirstTwo == "37") && ccLength == 15) {
        return Issuer.AMEX;
    }
    if (creditCardNumber.substr(0, 1) == "4" &&
        (ccLength == 13 || ccLength == 16)) {
        return Issuer.VISA;
    }
    if ((ccFirstTwo == "51" ||
        ccFirstTwo == "52" ||
        ccFirstTwo == "53" ||
        ccFirstTwo == "54" ||
        ccFirstTwo == "55") &&
        ccLength == 16) {
        return Issuer.Mastercard;
    }
    else {
        return Issuer.Unknown;
    }
};
const getIssuer7 = (x) => {
    const s = x.toString();
    if (/^4(\d{12}|\d{15})$/.test(s))
        return Issuer.VISA;
    if (/^3[4|7]\d{13}$/.test(s))
        return Issuer.AMEX;
    if (/^6011\d{12}$/.test(s))
        return Issuer.Discover;
    if (/^5[1-5]\d{14}$/.test(s))
        return Issuer.Mastercard;
    return Issuer.Unknown;
};
const getIssuer9 = (x) => {
    if (String(x).length === 15 && /^34|37/.test(String(x)))
        return Issuer.AMEX;
    if (String(x).length === 16 && /^6011/.test(String(x)))
        return Issuer.Discover;
    if (String(x).length === 16 && /^51|^52|^53|^54|^55/.test(String(x)))
        return Issuer.Mastercard;
    if (String(x).length === 13 && /^4/.test(String(x)))
        return Issuer.VISA;
    if (String(x).length === 16 && /^4/.test(String(x)))
        return Issuer.VISA;
    return Issuer.Unknown;
};
const getIssuer10 = (x) => {
    const card_number = String(x);
    const data = [
        { type: Issuer.AMEX, begins: ["34", "37"], len: [15] },
        { type: Issuer.Discover, begins: ["6011"], len: [16] },
        {
            type: Issuer.Mastercard,
            begins: ["51", "52", "53", "54", "55"],
            len: [16],
        },
        { type: Issuer.VISA, begins: ["4"], len: [13, 16] },
    ];
    const res = data.find((d) => d.begins.some((b) => card_number.startsWith(b)) &&
        d.len.some((l) => card_number.length === l));
    return res ? res.type : Issuer.Unknown;
};
const getIssuer8 = (x) => Object.values(Issuer)[[
    /^4\d{12}(\d{3})?$/,
    /^3[47]\d{13}$/,
    /^5[1-5]\d{14}$/,
    /^6011\d{12}$/,
    /.*/,
].findIndex((p) => p.test(`${x}`))];
const getIssuer11 = (x) => {
    const s = x.toString();
    if (s.length === 15 && (s.startsWith("34") || s.startsWith("37"))) {
        return Issuer.AMEX;
    }
    else if (s.length === 16 && s.startsWith("6011")) {
        return Issuer.Discover;
    }
    else if (s.length === 16 &&
        ["51", "52", "53", "54", "55"].includes(s.slice(0, 2))) {
        return Issuer.Mastercard;
    }
    else if ((s.length === 13 || s.length === 16) && s.startsWith("4")) {
        return Issuer.VISA;
    }
    else {
        return Issuer.Unknown;
    }
};
const lastSurvivor = (letters, coords) => {
    const lettersArr = letters.split("");
    coords.forEach((index) => {
        lettersArr.splice(index, 1);
    });
    return lettersArr[0];
};
function lastSurvivor2(letters, coords) {
    return coords.reduce((s, p) => s.slice(0, p) + s.slice(p + 1), letters);
}
function lastSurvivor3(letters, coords) {
    coords.forEach((n) => {
        letters = letters.slice(0, n) + letters.slice(n + 1);
    });
    return letters;
}
const squaresNeeded = (numGrains) => {
    if (!numGrains)
        return 0;
    let curr = 1, acc = 1, sqCounter = 1;
    while (acc < numGrains) {
        curr *= 2;
        acc += curr;
        sqCounter += 1;
    }
    return sqCounter;
};
function squaresNeeded2(grains) {
    return grains && grains.toString(2).length;
}
function squaresNeeded3(grains) {
    return grains ? Math.floor(Math.log2(grains) + 1) : 0;
}
function squaresNeeded4(grains) {
    return Math.ceil(Math.log2(grains + 1));
}
function squaresNeeded5(grains) {
    let squares = 0;
    let squareSize = 1;
    let totalGrains = grains;
    while (totalGrains > 0) {
        totalGrains -= squareSize;
        squares++;
        squareSize *= 2;
    }
    return squares;
}
const squaresNeeded6 = (grains) => grains && ~~Math.log2(grains) + 1;
const evensAndOdds = (num) => {
    const binary = num.toString(2);
    const hex = num.toString(16);
    return num & 1 ? hex : binary;
};
const evensAndOdds2 = (n) => n % 2 === 0 ? n.toString(2) : n.toString(16);
function evensAndOdds3(n) {
    return Number(n).toString(n % 2 == 0 ? 2 : 16);
}
const evensAndOdds4 = (n) => {
    return n % 2 === 0 ? (n >>> 0).toString(2) : n.toString(16);
};
exports.evensAndOdds4 = evensAndOdds4;
function evensAndOdds5(n) {
    if (n & 1) {
        return n.toString(16);
    }
    return n.toString(2);
}
const sortMyString = (str) => {
    let solution = "";
    let oddStr = "";
    let evenStr = "";
    for (let i = 0; i < str.length; i += 1) {
        let current = str[i];
        if ((i & 1) === 1) {
            oddStr += current;
        }
        else if ((i & 1) === 0) {
            evenStr += current;
        }
    }
    solution += evenStr + " " + oddStr;
    return solution;
};
function sortMyString2(S) {
    var getEveryOtherLetter = (n) => S.split("")
        .filter((_, i) => i % 2 === n)
        .join("");
    return `${getEveryOtherLetter(0)} ${getEveryOtherLetter(1)}`;
}
function sortMyString3(S) {
    let even = "", odd = "";
    for (let i = 0; i < S.length; i++) {
        if (i === 0 || i % 2 === 0)
            even += S.charAt(i);
        else
            odd += S.charAt(i);
    }
    return even + " " + odd;
}
function sortMyString4(s) {
    return (s
        .split("")
        .filter((_, i) => !(i % 2))
        .join("") +
        " " +
        s
            .split("")
            .filter((_, i) => i % 2)
            .join(""));
}
const sortMyString5 = (str) => [0, 1]
    .map((n) => str
    .split("")
    .filter((_, index) => index % 2 === n)
    .join(""))
    .join(" ");
function sortMyString6(str) {
    var a = str.split(""), sodd = [], seven = [];
    for (let i = 0; i < a.length; i++)
        if (i % 2 === 0)
            seven.push(a[i]);
        else
            sodd.push(a[i]);
    return seven.join("") + " " + sodd.join("");
}
function sortMyString7(S) {
    let first = "", second = "", i;
    for (i = 0; i < S.length; i++)
        i & 1 ? (second += S[i]) : (first += S[i]);
    return `${first} ${second}`;
}
function sortMyString8(S) {
    return (S.split("")
        .filter((e, i) => i % 2 === 0)
        .join("") +
        " " +
        S.split("")
            .filter((e, i) => i % 2 !== 0)
            .join(""));
}
const maxGap = (numArr) => {
    const sortedArr = numArr.sort((a, b) => a - b);
    let diffsArr = sortedArr
        .map((num, idx) => sortedArr[idx + 1] - num)
        .slice(0, -1);
    const solution = Math.max(...diffsArr);
    return solution;
};
const maxGap2 = (numArr) => {
    return Math.max(...numArr
        .sort((a, b) => a - b)
        .map((num, idx) => numArr[idx + 1] - num)
        .slice(0, -1));
};
const maxGap7 = (numArr) => {
    return Math.max(...numArr
        .sort((a, b) => a - b)
        .map((num, idx, arr) => arr[idx + 1] - num)
        .slice(0, -1));
};
function maxGap6(nums) {
    return Math.max(...nums
        .sort((a, b) => {
        return b - a;
    })
        .map((value, index, array) => {
        return index == array.length - 1 ? 0 : value - array[index + 1];
    }));
}
function maxGap3(nums) {
    let arr = nums.slice().sort((x, y) => x - y);
    return Math.max(...arr.map((x, i, a) => a[i + 1] - x).slice(0, -1));
}
function maxGap4(nums) {
    const sorted = nums.sort((a, b) => b - a);
    let answer = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < sorted.length - 1; i++) {
        const temp = sorted[i] - sorted[i + 1];
        if (temp > answer)
            answer = temp;
    }
    return answer;
}
function maxGap5(nums) {
    nums.sort((a, b) => b - a);
    let diff = 0;
    for (let i = 1; i < nums.length; i++) {
        if (Math.abs(nums[i] - nums[i - 1]) > diff) {
            diff = Math.abs(nums[i] - nums[i - 1]);
        }
    }
    return diff;
}
const average = (scoresArr) => {
    return Math.round(scoresArr.reduce((acc, curr) => acc + curr) / scoresArr.length);
};
function average2(scores) {
    const reducer = (total, currentValue) => total + currentValue;
    const sumOfNumbers = scores.reduce(reducer);
    const scoreLength = scores.length;
    return Math.round(sumOfNumbers / scoreLength);
}
function average3(scores) {
    let sum = eval(scores.join("+"));
    let avg = sum / scores.length;
    return Math.round(avg);
}
const minimumSteps = (numsArr, tHold) => {
    const ascArr = numsArr.sort((a, b) => a - b);
    let sum = 0, counter = 0;
    for (counter; counter < ascArr.length; counter += 1) {
        sum += ascArr[counter];
        if (sum >= tHold)
            break;
    }
    return counter;
};
function minimumSteps2(nums, value) {
    var s = 0;
    var total = 0;
    nums.sort((n1, n2) => n1 - n2);
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
        s++;
        console.log(total);
        if (nums[0] >= value) {
            return 0;
        }
        if (total >= value) {
            return s - 1;
        }
    }
}
const minimumSteps3 = (nums, value) => nums
    .sort((a, b) => a - b)
    .reduce((acc, item) => (acc[0] < value ? [acc[0] + item, acc[1] + 1] : acc), [0, -1])[1];
const incrementer = (numArr) => {
    const solution = numArr.map((el, idx) => {
        const sum = el + (numArr.indexOf(el) + 1);
        return sum > 9 ? sum - 10 : sum;
    });
    return solution;
};
const incrementer2 = (nums) => nums.map((num, index) => (num + index + 1) % 10);
const compare = (str1, str2) => {
    const getStrVal = (str) => {
        if (!str || /[^A-Z]/gi.test(str))
            return 0;
        const upperCased = str.toUpperCase();
        let value = 0;
        for (let i = 0; i < upperCased.length; i++) {
            value += upperCased.charCodeAt(i);
        }
        return value;
    };
    console.table({
        value1: getStrVal(str1),
        value2: getStrVal(str2),
        isEqual: getStrVal(str1) === getStrVal(str2),
    });
    return getStrVal(str1) === getStrVal(str2);
};
function compare2(s1, s2) {
    function fun(s) {
        if (typeof s === "string" && s.replace(/[a-z]/gi, "") === "")
            return s.toUpperCase();
        return "";
    }
    const red = (s) => fun(s)
        .split("")
        .reduce((acc, el) => acc + el.charCodeAt(0), 0);
    return red(s1) === red(s2);
}
function compare3(s1, s2) {
    function sum(str) {
        if (!str || !str.length) {
            return 0;
        }
        let arr = str
            .toUpperCase()
            .split("")
            .map((c) => c.charCodeAt(0));
        if (!arr.every((el) => el >= "A".charCodeAt(0) && el <= "Z".charCodeAt(0))) {
            return 0;
        }
        return arr.reduce((acc, el) => acc + el);
    }
    return sum(s1) === sum(s2);
}
function compare5(s1, s2) {
    function count(x) {
        let count = 0;
        if (x)
            for (let c of x.toUpperCase()) {
                const cc = c.charCodeAt(0);
                if (cc >= 65 && cc <= 90)
                    count += cc;
                else
                    return 0;
            }
        return count;
    }
    return count(s1) == count(s2);
}
const closestMultiple10 = (num) => {
    return Math.round(num / 10) * 10;
};
function closestMultiple102(num) {
    let last = num % 10;
    if (last < 5) {
        num -= last;
    }
    else {
        num += 10 - last;
    }
    return num;
}
const part10 = (num) => {
    if (num < 5)
        return num * -1;
    return 10 - num;
};
const closestMultiple104 = (num) => {
    return num + part10(num % 10);
};
exports.closestMultiple104 = closestMultiple104;
const factorialA = (n) => {
    if (n < 2) {
        return 1;
    }
    else {
        return n * factorialA(n - 1);
    }
};
const factorialA2 = (n) => {
    return n < 2 ? 1 : n * factorialA(n - 1);
};
const factorialA5 = (n) => {
    var fact = 1;
    function factorial(num) {
        if (num > 0) {
            fact = fact * num;
            factorial(num - 1);
        }
        return fact;
    }
    return factorial(n);
};
const encode = (str, key) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const keyArr = key
        .toString()
        .split("")
        .map((el) => Number(el));
    const seqLength = keyArr.length;
    const strArr = str.split("");
    const charPositionArr = strArr.map((char) => alphabet.indexOf(char) + 1);
    const encodedArr = charPositionArr.map((el, idx) => (el += idx < seqLength ? keyArr[idx] : keyArr[idx % seqLength]));
    return encodedArr;
};
function encode2(str, n) {
    const keys = n.toString().split("").map(Number);
    return str.split("").map((code, index) => {
        return (code.toLowerCase().charCodeAt(0) - 96 + keys[index % keys.length]);
    });
}
function encode3(str, n) {
    return str
        .split("")
        .map((c) => c.charCodeAt(0) - 96)
        .map((c, idx) => c + parseInt(n.toString()[idx % n.toString().length]));
}
const houseNumbersSum = (arr) => {
    let solution = 0;
    for (let i = 0; i < arr.length; i++) {
        solution += arr[i];
        if (!arr[i])
            break;
    }
    return solution;
};
const houseNumbersSum2 = (arr) => arr.splice(0, arr.indexOf(0)).reduce((a, v) => a + v, 0);
function houseNumbersSum3(inputArray) {
    let counter = 0;
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] !== 0) {
            counter += inputArray[i];
        }
        else {
            break;
        }
    }
    return counter;
}
function houseNumbersSum4(inputArray) {
    let sum = 0;
    4;
    for (let i of inputArray) {
        if (i === 0)
            break;
        sum += i;
    }
    return sum;
}
const solveC = (str) => {
    if (!/\d/g.test(str))
        return 0;
    const digitSubs = str.match(/\d+/g).map((el) => Number(el));
    const solution = Math.max(...digitSubs);
    return solution;
};
const solveC2 = (str) => {
    return /\d/g.test(str)
        ? Math.max(...str.match(/\d+/g).map((el) => Number(el)))
        : 0;
};
const solveC3 = (s) => Math.max(...s.split(/[a-z]/g).map((el) => +el));
function solveC4(s) {
    return Math.max(...s.split(/\D+/).map((e) => Number(e)));
}
function solveC5(s) {
    const numArray = s.replace(/\D+/g, " ").trim().split(" ").map(Number);
    return Math.max(...numArray);
}
function solveC6(s) {
    const matches = s.match(/\d+/g);
    return Math.max(...matches.map((el) => Number(el)));
}
const specialNumber = (num) => {
    const numStr = num.toString();
    return /[6-9]/g.test(numStr) ? "NOT!!" : "Special!!";
};
const specialNumbers = [0, 1, 2, 3, 4, 5].map((n) => n.toString());
const specialNumber2 = (n) => n
    .toString()
    .split("")
    .every((n) => specialNumbers.includes(n))
    ? "Special!!"
    : "NOT!!";
exports.specialNumber2 = specialNumber2;
function specialNumber3(n) {
    return /[^0-5]/.test(n.toString()) ? "NOT!!" : "Special!!";
}
function specialNumber4(n) {
    return n.toString().match(/[^0-5]/) ? "NOT!!" : "Special!!";
}
function unluckyDays(year) {
    return 1;
}
const maxProduct = (numbers, size) => {
    const descArr = numbers.sort((a, b) => b - a);
    const factorsArr = descArr.slice(0, size);
    let solution = factorsArr.reduce((acc, curr) => acc * curr);
    return solution;
};
const maxProduct2 = (numbers, size) => {
    return numbers
        .sort((a, b) => b - a)
        .slice(0, size)
        .reduce((acc, curr) => acc * curr);
};
function maxProduct3(numbers, size) {
    return numbers
        .sort((a, b) => a - b)
        .slice(-size)
        .reduce((ret, val) => ret * val, 1);
}
const solveB = (str) => {
    if (!/[aeiou]/g.test(str))
        return 0;
    const substrings = str.match(/[aeiou]+/g);
    const solution = substrings.sort((a, b) => b.length - a.length)[0]
        .length;
    return solution;
};
function solveB2(s) {
    return Math.max(...(s.match(/[aeiou]+/gi) || []).map((x) => x.length));
}
const solveB3 = (str) => Math.max(...str.split(/[^aeiou]/i).map((x) => x.length));
function solveB4(str) {
    return str
        .split(/[^aeiou]+/)
        .reduce((acc, vowelChain) => Math.max(acc, vowelChain.length), 0);
}
const calc = (str) => {
    if (str.length < 1)
        return 0;
    const strArr = str.split("");
    let numStrConcat = "";
    strArr.forEach((char, idx) => {
        numStrConcat += str.charCodeAt(idx);
    });
    const numStrMinusSeven = numStrConcat.replace(/7/g, "1");
    const total1 = numStrConcat
        .split("")
        .map((el) => Number(el))
        .reduce((a, b) => a + b);
    const total2 = numStrMinusSeven
        .split("")
        .map((el) => Number(el))
        .reduce((a, b) => a + b);
    const result = total1 - total2;
    return result;
};
exports.calc = calc;
function calc2(str) {
    return ([...str]
        .map((x) => x.charCodeAt(0))
        .join("")
        .split("")
        .filter((x) => x === "7").length * 6);
}
const calc3 = (x) => {
    return ((x.replace(/./g, (x) => x.charCodeAt(0).toString()).match(/7/g) || [])
        .length * 6);
};
function calc4(str) {
    return (Array.from(str, (c) => c.charCodeAt(0))
        .toString()
        .replace(/[^7]/g, "").length * 6);
}
const calc5 = (str) => {
    const codes = str.split("").map((c) => c.charCodeAt(0));
    const total1 = codes.reduce((a, b) => a + b, 0);
    const total2 = codes
        .map((x) => +x.toString().replace(/7/g, "1"))
        .reduce((a, b) => a + b, 0);
    return total1 - total2;
};
function calc6(str) {
    const charCodes = str.split("").map((char) => char.charCodeAt(0));
    return sum2(charCodes) - sum(charCodes.map(replace7with1));
}
function sum2(arr) {
    return arr.reduce((total, x) => total + x, 0);
}
function replace7with1(num) {
    return parseInt(num.toString().replace(/7/g, "1"));
}
const wordValue = (arr) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let solution = [];
    arr.forEach((word, idx) => {
        console.log(word);
        let letterArr = word.split("");
        console.log(letterArr);
        let wordVal = 0;
        letterArr.forEach((letter) => {
            let letterVal = alphabet.indexOf(letter) + 1;
            wordVal += letterVal;
        });
        solution.push(wordVal * (idx + 1));
    });
    return solution;
};
function wordValue2(arr) {
    const w = " abcdefghijklmnopqrstuvwxyz";
    return arr.map((x, i) => x.split("").reduce((sum, y) => sum + w.indexOf(y), 0) * (i + 1));
}
const wordValue3 = (arr) => arr
    .map((a) => a
    .split("")
    .map((c) => (c === " " ? 0 : c.charCodeAt(0) - 96))
    .reduce((z, x) => z + x, 0))
    .map((e, i) => e * +[i + 1]);
function wordValue4(arr) {
    let res = [];
    arr.forEach((str, ind) => {
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            str.charCodeAt(i) !== 32
                ? (sum += (str.charCodeAt(i) - 96) * (ind + 1))
                : 0;
        }
        res.push(sum);
    });
    return res;
}
const jumpingNumber = (num) => {
    if (num < 10)
        return "Jumping!!";
    let isJumping = true;
    const digitArr = num
        .toString()
        .split("")
        .map((el) => Number(el));
    for (let i = 0; i < digitArr.length - 1; i++) {
        if (digitArr[i] + 1 !== digitArr[i + 1] &&
            digitArr[i] - 1 !== digitArr[i + 1]) {
            isJumping = false;
            break;
        }
        console.table({
            current: digitArr[i],
            next: digitArr[i + 1],
            isJumping: isJumping,
        });
    }
    return isJumping ? "Jumping!!" : "Not!!";
};
function jumpingNumber2(n) {
    let arr = String(n)
        .split("")
        .map((num) => Number(num));
    if (arr.length === 1) {
        return "Jumping!!";
    }
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] - arr[i + 1] !== 1 && arr[i + 1] - arr[i] !== 1) {
            return "Not!!";
        }
    }
    return "Jumping!!";
}
function jumpingNumber3(n) {
    let arr = [...String(n)];
    return arr.slice(1).every((x, i) => Math.abs(+x - +arr[i]) == 1)
        ? "Jumping!!"
        : "Not!!";
}
function jumpingNumber4(n) {
    if (n < 10) {
        return "Jumping!!";
    }
    let arr = n.toString().split("").map(Number);
    for (let i = 0; i < arr.length - 1; i++) {
        if (Math.pow(arr[i] - arr[i + 1], 2) != 1) {
            return "Not!!";
        }
    }
    return "Jumping!!";
}
function jumpingNumber5(n) {
    return n
        .toString()
        .split("")
        .map((n) => parseInt(n))
        .every((digit, index, arr) => index === 0 ? true : Math.abs(arr[index - 1] - arr[index]) === 1)
        ? "Jumping!!"
        : "Not!!";
}
const arrayLeaders = (numbers) => {
    let leadersArr = [];
    const lastEl = numbers.length - 1;
    for (let i = 0; i < lastEl; i++) {
        let current = numbers[i];
        if (current > numbers.slice(i + 1).reduce((a, b) => a + b)) {
            leadersArr.push(current);
        }
    }
    if (numbers[lastEl] > 0) {
        leadersArr.push(numbers[lastEl]);
    }
    return leadersArr;
};
const arrayLeaders2 = (numbers) => numbers.filter((item, i) => item > numbers.slice(i + 1).reduce((a, b) => a + b, 0));
function arrayLeaders3(numbers) {
    return numbers.filter((x, i) => x > numbers.slice(i + 1).reduce((a, b) => a + b, 0));
}
function arrayLeaders4(numbers) {
    let sum = 0;
    const results = [];
    for (let i = numbers.length - 1; i >= 0; i--) {
        const current = numbers[i];
        if (current > sum) {
            results.push(current);
        }
        sum += current;
    }
    return results.reverse();
}
const maxTriSum = (nums) => {
    const unuqueNums = new Set(nums);
    console.log(unuqueNums);
    const ascArr = Array.from(unuqueNums).sort((a, b) => b - a);
    console.log(ascArr);
    console.log(ascArr[0] + ascArr[1] + ascArr[2]);
    return ascArr[0] + ascArr[1] + ascArr[2];
};
function maxTriSum2(nums) {
    return [...new Set(nums)]
        .sort((a, b) => b - a)
        .slice(0, 3)
        .reduce((c, d) => c + d, 0);
}
const maxTriSum3 = (nums) => nums
    .filter((item, i) => nums.indexOf(item) == i)
    .sort((a, b) => (a < b ? 1 : -1))
    .slice(0, 3)
    .reduce((a, b) => a + b, 0);
const nthSmallest = (arr, pos) => {
    const ascArr = arr.sort((a, b) => a - b);
    return ascArr[pos - 1];
};
function nthSmallest2(arr, pos) {
    return arr.sort((a, b) => a - b)[--pos];
}
function nthSmallest3(arr, pos) {
    return [...arr].sort((a, b) => a - b)[pos - 1];
}
function nthSmallest4(arr, pos) {
    for (let i = 1; i < pos; i++) {
        arr.splice(arr.indexOf(Math.min(...arr)), 1);
    }
    return arr[arr.indexOf(Math.min(...arr))];
}
function nthSmallest5(arr, pos) {
    var sortArray = arr.sort((a, b) => a - b);
    return sortArray[pos - 1];
}
const add = (num1, num2) => {
    const greater = Math.max(num1, num2).toString();
    const numStr1 = num1.toString();
    const numStr2 = num2.toString();
    let solutionArr = [];
    for (let i = 0; i < greater.length; i++) {
        console.log("numbers: ", numStr1[numStr1.length - 1 - i], numStr2[numStr2.length - 1 - i]);
        let sum = 0;
        if (numStr1[numStr1.length - 1 - i] === undefined) {
            console.log("undefined");
            sum = Number(numStr2[numStr2.length - 1 - i]);
        }
        else if (numStr2[numStr2.length - 1 - i] === undefined) {
            console.log("undefined");
            sum = Number(numStr1[numStr1.length - 1 - i]);
        }
        else {
            sum =
                Number(numStr1[numStr1.length - 1 - i]) +
                    Number(numStr2[numStr2.length - 1 - i]);
        }
        console.log("sum: ", sum);
        solutionArr.unshift(sum);
    }
    console.log(solutionArr);
    return Number(solutionArr.join(""));
};
const tidyNumber = (num) => {
    const increasingNum = num
        .toString()
        .split("")
        .map((el) => Number(el))
        .sort((a, b) => a - b)
        .join("");
    return parseInt(increasingNum) === num;
};
function tidyNumber2(num) {
    let s = "" + num;
    for (let i = 1; i < s.length; i++) {
        if (s[i] < s[i - 1]) {
            return false;
        }
    }
    return true;
}
const tidyNumber3 = (num) => num == +[...String(num)].sort((a, b) => +a - +b).join("");
const tidyNumber4 = (n) => +[...String(n)].sort().join("") === n;
const containAllRots = (str, arr) => {
    const strArr = str.split("");
    for (let i = 0; i < strArr.length; i++) {
        let currChar = strArr[0];
        strArr.splice(0, 1);
        strArr.push(currChar);
        let currtRotationStr = strArr.join("");
        if (arr.indexOf(currtRotationStr) < 0)
            return false;
    }
    return true;
};
function containAllRots2($, arr) {
    arr = arr.map((e) => e.toLowerCase());
    const arr$ = Array.from({ length: $.length }, (x) => $.toLowerCase()).map((el, i) => el.slice(i) + el.slice(0, i));
    return arr$.every((e) => arr.includes(e));
}
function containAllRots3(str, arr) {
    const inputStrings = new Set(arr);
    return getRots(str).every((rotation) => inputStrings.has(rotation));
}
function getRots(str, res = []) {
    if (res.length === str.length)
        return res;
    res.push(str);
    return getRots(str.slice(1) + str[0], res);
}
function containAllRots4(str, arr) {
    for (let idx = 0; idx < str.length; idx += 1) {
        const rot = str.slice(idx) + str.slice(0, idx);
        if (!arr.includes(rot))
            return false;
    }
    return true;
}
const disariumNumber = (num) => {
    const digitsArr = num
        .toString()
        .split("")
        .map((el) => Number(el));
    const pwrPosSum = digitsArr
        .map((el, idx) => Math.pow(el, idx + 1))
        .reduce((a, b) => a + b);
    return pwrPosSum === num ? "Disarium !!" : "Not !!";
};
function disariumNumber2(n) {
    return String(n)
        .split("")
        .reduce((sum, x, i) => sum + parseInt(x) ** (i + 1), 0) === n
        ? "Disarium !!"
        : "Not !!";
}
const disariumNumber3 = (n) => n
    .toString()
    .split("")
    .map((value, index) => parseInt(value) ** (index + 1))
    .reduce((acc, n) => acc + n, 0) === n
    ? "Disarium !!"
    : "Not !!";
function disariumNumber4(n) {
    return String(n)
        .split("")
        .reduce((prev, curr, index) => prev + Math.pow(Number(curr), index + 1), 0) === n
        ? "Disarium !!"
        : "Not !!";
}
const cookingTime = (eggs) => {
    if (eggs === 0)
        return 0;
    const rounds = Math.ceil(eggs / 8);
    const time = rounds * 5;
    return time;
};
const cookingTime2 = (eggs) => {
    return eggs < 1 ? 0 : Math.ceil(eggs / 8) * 5;
};
const strongNumber = (num) => {
    const factorial = (n) => {
        if (n <= 1)
            return 1;
        return n * factorial(n - 1);
    };
    const numArr = num
        .toString()
        .split("")
        .map((el) => Number(el));
    console.log(numArr);
    const factSum = numArr
        .map((digit) => {
        return factorial(digit);
    })
        .reduce((a, b) => a + b);
    console.log(factSum);
    return num === factSum ? "STRONG!!!!" : "Not Strong !!";
};
const factorial3 = (n) => (n === 0 ? 1 : n * factorial(n - 1));
const strongNumber4 = (num) => num ===
    num
        .toString()
        .split("")
        .reduce((acc, value) => acc + factorial(parseInt(value)), 0)
    ? "STRONG!!!!"
    : "Not Strong !!";
exports.strongNumber4 = strongNumber4;
class G964c {
    static movie(prePaid, ticket, perc) {
        let counter = 0, sysA = 0, sysB = prePaid, currDiscPrice = ticket;
        while (Math.ceil(sysB) >= sysA) {
            sysA += ticket;
            currDiscPrice *= perc;
            sysB += currDiscPrice;
            counter++;
        }
        return counter;
    }
}
class G964c1 {
    static movie(card, ticket, perc) {
        let i = 0;
        while (Math.ceil(card) >= ticket * i) {
            card += ticket * perc ** i;
            i++;
        }
        return i - 1;
    }
}
class G964c2 {
    static movie(card, ticket, perc) {
        let k = 1, i = 1;
        while (Math.ceil(card + ticket * perc * k) >= ticket * i) {
            k += Math.pow(perc, i);
            i++;
        }
        return i;
    }
}
class G964c3 {
    static movie(card, ticket, perc) {
        var cardPrice = card + ticket;
        var ticketPrice = ticket;
        var previousTicket = ticket;
        var i = 1;
        while (Math.ceil(cardPrice) >= ticketPrice) {
            ticketPrice += ticket;
            previousTicket *= perc;
            cardPrice += previousTicket;
            i += 1;
        }
        return i - 1;
    }
}
class G964c5 {
    static movie(card, ticket, perc) {
        let counter = 1;
        let ticketTotal = ticket;
        let currentTicketPrice = ticket * perc;
        let cardTotal = card + currentTicketPrice;
        while (ticketTotal <= Math.ceil(cardTotal)) {
            counter++;
            ticketTotal += ticket;
            currentTicketPrice *= perc;
            cardTotal += currentTicketPrice;
        }
        return counter;
    }
}
const orderedCount = (text) => {
    let solution = [];
    const counterObj = {};
    text.split("").forEach((num) => (counterObj[num] = (counterObj[num] || 0) + 1));
    console.log(counterObj);
    Object.entries(counterObj).forEach(([key, value]) => {
        console.log([key, value]);
        solution.push([key, value]);
    });
    return solution;
};
const orderedCount2 = (text) => {
    const strArr = text.split("");
    let solution = [];
    const counterObj = {};
    strArr.forEach((num) => (counterObj[num] = (counterObj[num] || 0) + 1));
    console.log(counterObj);
    const uniqueElements = new Set(strArr);
    console.log(uniqueElements);
    uniqueElements.forEach((el) => {
        console.log(el, counterObj[el]);
        solution.push([el, counterObj[el]]);
    });
    return solution;
};
function orderedCount3(text) {
    return [...new Set(text)].map((x) => [x, text.split(x).length - 1]);
}
function orderedCount4(t) {
    return [...new Set(t.split(""))].map((e) => [
        e,
        t.split("").filter((v) => v == e).length,
    ]);
}
function orderedCount5(text) {
    const arr = text.split("").filter((el, i, arr) => arr.indexOf(el) === i);
    return arr.map((value, index) => {
        return [value, text.split("").filter((val) => val === value).length];
    });
}
function orderedCount6(text) {
    return text
        .split("")
        .filter((el, i) => text.indexOf(el) === i)
        .map((item) => [item, text.split(item).length - 1]);
}
function orderedCount7(text) {
    let m = {};
    let output = [];
    for (let i of text) {
        if (!(i in m)) {
            m[i] = 1;
        }
        else {
            m[i] += 1;
        }
    }
    for (let i of text) {
        if (i in m) {
            output.push([i, m[i]]);
            delete m[i];
        }
    }
    return output;
}
const growingPlant = (up, down, target) => {
    if (up < 5 ||
        up > 100 ||
        down < 2 ||
        down >= up ||
        target < 4 ||
        target > 1000) {
        return 0;
    }
    let actualHeigth = 0, counter = 0;
    while (actualHeigth <= target) {
        actualHeigth += up;
        counter++;
        if (actualHeigth >= target) {
            break;
        }
        actualHeigth -= down;
    }
    return counter;
};
function growingPlant2(up, down, h) {
    let count = 1;
    let a = up;
    while (a < h) {
        count++;
        a = a - down + up;
    }
    return count;
}
function growingPlant3(up, down, target) {
    let height = up;
    let days = 1;
    while (height < target) {
        height += up - down;
        days++;
    }
    return days;
}
function growingPlant4(up, down, h) {
    return Math.max(Math.ceil((h - down) / (up - down)), 1);
}
function growingPlant5(up, down, h) {
    let meters = 0;
    let day = 0;
    while (meters < h) {
        day++;
        meters += up;
        if (meters >= h)
            return day;
        meters -= down;
    }
    return day;
}
class G964B {
}
G964B.maxRot = (num) => {
    console.log(num);
    const numRotations = num.toString().length - 1;
    const numArr = num.toString().split("");
    let versionsArr = [];
    for (let i = 0; i < numRotations; i++) {
        let rotateDigit = numArr[i];
        numArr.splice(i, 1);
        numArr.push(rotateDigit);
        let number = parseInt(numArr.join(""));
        versionsArr.push(number);
    }
    return Math.max(...versionsArr.concat(num));
};
const menFromBoys = (arr) => {
    let uniqueOdds = new Set(), uniqueEvens = new Set();
    arr.forEach((int) => {
        (int & 1) === 1 ? uniqueOdds.add(int) : uniqueEvens.add(int);
    });
    const oddsArr = [...uniqueOdds].sort((a, b) => b - a);
    const evensArr = [...uniqueEvens].sort((a, b) => a - b);
    const solution = [...evensArr, ...oddsArr];
    return solution;
};
function menFromBoys2(arr) {
    let urr = [...new Set(arr)];
    return [
        ...urr.filter((x) => Math.abs(x % 2) == 0).sort((a, b) => a - b),
        ...urr.filter((x) => Math.abs(x % 2) == 1).sort((a, b) => b - a),
    ];
}
function menFromBoys3(arr) {
    let ar = [...new Set(arr)];
    return ar
        .filter((x) => x % 2 === 0)
        .sort((a, b) => a - b)
        .concat(...ar.filter((x) => x % 2).sort((a, b) => b - a));
}
function menFromBoys4(arr) {
    const [even, odd] = [new Set(), new Set()];
    for (const x of arr) {
        x % 2 ? odd.add(x) : even.add(x);
    }
    return [...even]
        .sort((a, b) => a - b)
        .concat([...odd].sort((a, b) => b - a));
}
function menFromBoys5(arr) {
    return arr
        .reduce(([even, odd], x) => {
        x % 2 ? odd.add(x) : even.add(x);
        return [even, odd];
    }, [new Set(), new Set()])
        .map((set, i) => [...set].sort(i % 2 ? (a, b) => b - a : (a, b) => a - b))
        .flat();
}
const menFromBoys6 = (arr) => [
    ...new Set(arr
        .filter((e) => e % 2 === 0)
        .sort((a, b) => a - b)
        .concat(arr.filter((a) => a % 2).sort((a, b) => b - a))),
];
const balancedNum = (num) => {
    if (num < 100)
        return "Balanced";
    const numStr = String(num);
    const length = numStr.length;
    const getLeftNumStr = (numStr) => {
        let leftStr = (length & 1) === 1
            ? numStr.slice(0, (length - 1) / 2)
            : numStr.slice(0, length / 2 - 1);
        return leftStr;
    };
    const getRightNumStr = (numStr) => {
        let rightStr = (length & 1) === 1
            ? numStr.slice((length - 1) / 2 + 1)
            : numStr.slice(length / 2 + 1);
        return rightStr;
    };
    const leftSum = getLeftNumStr(numStr)
        .split("")
        .map((strDigit) => Number(strDigit))
        .reduce((a, b) => a + b);
    const rightSum = getRightNumStr(numStr)
        .split("")
        .map((strDigit) => Number(strDigit))
        .reduce((a, b) => a + b);
    return leftSum === rightSum ? "Balanced" : "Not Balanced";
};
function balancedNum2(number) {
    const numbers = (number + "").split("").map((digit) => parseInt(digit));
    const length = numbers.length;
    if (length <= 2)
        return "Balanced";
    const left = numbers.slice(0, Math.floor(length / 2 - 0.5));
    const right = numbers.slice(Math.ceil(length / 2 + 0.5), length);
    return left.reduce((a, b) => a + b) == right.reduce((a, b) => a + b)
        ? "Balanced"
        : "Not Balanced";
}
function balancedNum3(number) {
    let s = number.toString();
    let n = Math.floor((s.length - 1) / 2);
    return !n ||
        [...s.slice(0, n)].reduce((a, b) => a + +b, 0) ==
            [...s.slice(-n)].reduce((a, b) => a + +b, 0)
        ? "Balanced"
        : "Not Balanced";
}
function balancedNum4(number) {
    const numArray = number.toString().split("");
    let forwardSum = 0;
    let backwardSum = 0;
    for (let i = 0; i < numArray.length / 2 - 1; i++) {
        forwardSum += parseInt(numArray[i]);
        backwardSum += parseInt(numArray[numArray.length - 1 - i]);
    }
    return forwardSum === backwardSum ? "Balanced" : "Not Balanced";
}
function balancedNum5(num) {
    const [leftSum, rightSum] = splitMiddle(numToArray(num)).map(sum);
    return leftSum === rightSum ? "Balanced" : "Not Balanced";
}
function numToArray(num, res = []) {
    if (num === 0)
        return res;
    res.push(num % 10);
    return numToArray(Math.trunc(num / 10), res);
}
function splitMiddle(arr) {
    const middle = Math.floor(arr.length / 2);
    return [
        arr.slice(0, middle - (arr.length % 2 ? 0 : 1)),
        arr.slice(middle + 1),
    ];
}
function sum(arr) {
    return arr.reduce((total, x) => total + x, 0);
}
let cycleCount = 0;
const seven = (num) => {
    if (num === 0)
        return [0, 0];
    const numStr = num.toString();
    let lastDigit = Number(numStr.slice(-1));
    let remainingDigits = Number(numStr.substring(0, numStr.length - 1));
    let remainder = remainingDigits - lastDigit * 2;
    cycleCount++;
    let solution = [remainder, cycleCount];
    console.table({
        numStr: numStr,
        lastDigit: lastDigit,
        remainingDigits: remainingDigits,
        remainder: remainder,
        cycleCount: cycleCount,
        solution: [solution],
    });
    if (remainder < 100) {
        cycleCount = 0;
        return solution;
    }
    return seven(remainder);
};
const generateShape = (int) => {
    if (int === 1)
        return "+";
    let solution = "";
    for (let i = 0; i < int; i++) {
        let row = i >= 1 ? "\n" + "+".repeat(int) : "+".repeat(int);
        solution += row;
    }
    return solution;
};
function generateShape2(int) {
    return `${"+".repeat(int)}\n`.repeat(int).slice(0, -1);
}
function generateShape3(int) {
    return Array(int)
        .fill(Array(int + 1).join("+"))
        .join("\n");
}
function generateShape4(int) {
    var array = [];
    for (let i = 0; i < int; i++) {
        array.push("+".repeat(int));
    }
    return array.join("\n");
}
function generateShape5(int) {
    let result = "";
    for (let i = 0; i < int; i++)
        result += "+".repeat(int) + "\n";
    return result.slice(0, result.length - 1);
}
function generateShape6(size) {
    return new Array(size).fill(new Array(size).fill("+").join("")).join("\n");
}
const automorphic = (num) => {
    const numStr = num.toString();
    const numStrLength = numStr.length;
    const sqStr = Math.pow(num, 2).toString();
    return numStr === sqStr.slice(-numStrLength) ? "Automorphic" : "Not!!";
};
function automorphic2(n) {
    return String(n ** 2).endsWith(String(n)) ? "Automorphic" : "Not!!";
}
const countRedBeads = (num) => {
    return num <= 1 ? 0 : (num - 1) * 2;
};
function countRedBeads2(n) {
    return Math.max(0, (n - 1) * 2);
}
const inviteMoreWomen = (guestsArr) => {
    return guestsArr.reduce((acc, curr) => acc + curr) > 0;
};
function inviteMoreWomen2(L) {
    return eval(L.join("+")) > 0;
}
function inviteMoreWomen3(L) {
    return (L.filter((num) => num > 0).length > L.filter((num) => num < 0).length);
}
const sumCubes = (num) => {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        result += Math.pow(i, 3);
    }
    return result;
};
function sumCubes2(n) {
    let res = 0;
    for (let i = 0; i <= n; i += 1) {
        res += i ** 3;
    }
    return res;
}
function sumCubes3(n) {
    if (n == 1) {
        return 1;
    }
    else {
        return Math.pow(n, 3) + sumCubes(n - 1);
    }
}
const solveA = (arr) => {
    let solution = [];
    arr.map((el) => el.toLowerCase()).forEach((word) => {
        let counter = 0;
        for (let i = 0; i < word.length; i++) {
            let position = i;
            let charCode = word.charCodeAt(i) - 97;
            if (position === charCode)
                counter++;
        }
        solution.push(counter);
    });
    return solution;
};
function solveA2(arr) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return arr.map((s) => s
        .split("")
        .reduce((t, c, i) => (c.toLowerCase() === alphabet[i] ? t + 1 : t), 0));
}
function solveA3(arr) {
    return arr.map((str) => {
        var count = 0;
        var i = str.length;
        while (i > 0) {
            i--;
            if ((str.charCodeAt(i) & 31) == i + 1)
                count++;
        }
        return count;
    });
}
const solveA4 = (arr) => arr.map((x) => x
    .split("")
    .reduce((acc, item, i) => acc + (item.toLowerCase().charCodeAt(0) - 97 == i ? 1 : 0), 0));
function solveA5(arr) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return arr.map((word) => {
        return word
            .toLowerCase()
            .split("")
            .reduce((acc, char, i) => {
            const isPositionMatch = alphabet[i] === char;
            return acc + (isPositionMatch ? 1 : 0);
        }, 0);
    });
}
const minSum = (arr) => {
    if ((arr.length & 1) === 1)
        return "odd number of array elements!";
    let sum = 0;
    const ascArr = arr.sort((a, b) => a - b);
    console.log(ascArr);
    for (let i = 0; i < ascArr.length / 2; i++) {
        sum += ascArr[i] * ascArr[ascArr.length - 1 - i];
    }
    return sum;
};
function minSum2(arr) {
    let sum = 0;
    const nums = [...arr];
    while (nums.length !== 0) {
        const max = Math.max(...nums);
        const min = Math.min(...nums);
        sum += max * min;
        nums.splice(nums.indexOf(max), 1);
        nums.splice(nums.indexOf(min), 1);
    }
    return sum;
}
function minSum3(arr) {
    return [...arr]
        .sort((a, b) => a - b)
        .reduce((sum, x, _, sorted) => sum + x * sorted.pop(), 0);
}
function minSum4(arr) {
    return arr
        .sort((a, b) => a - b)
        .reduce((acc, currVal, index, a) => acc + (currVal * a[a.length - 1 - index]) / 2, 0);
}
function minSum5(arr) {
    return arr
        .sort((a, b) => a - b)
        .reduce((acc, currVal, index, a) => acc + (currVal * a[a.length - 1 - index]) / 2, 0);
}
const averages = (numArr) => {
    if (!numArr || numArr.length < 2)
        return [];
    let solution = [];
    for (let i = 0; i < numArr.length - 1; i++) {
        let pairAve = (numArr[i] + numArr[i + 1]) / 2;
        solution.push(pairAve);
    }
    return solution;
};
function averages2(numbers) {
    let avrgs = [];
    if (!numbers || numbers.length <= 1) {
        return avrgs;
    }
    numbers.reduce((a, b) => {
        avrgs.push((a + b) / 2);
        return b;
    });
    return avrgs;
}
function averages3(numbers) {
    return Array.isArray(numbers)
        ? numbers
            .map((item, index) => (item + numbers[index + 1]) / 2)
            .slice(0, -1)
        : [];
}
function averages4(numbers) {
    if (numbers === null)
        return [];
    return numbers.slice(1).map((x, i) => (numbers[i] + x) / 2);
}
const addLetters = (...letters) => {
    if (letters.length === 0)
        return "z";
    const charCodeSum = letters
        .map((char) => char.charCodeAt(0) - 96)
        .reduce((acc, curr) => acc + curr, 0);
    if (charCodeSum % 26 === 0)
        return "z";
    return charCodeSum > 26
        ? String.fromCharCode((charCodeSum % 26) + 96)
        : String.fromCharCode(charCodeSum + 96);
};
const addLetters2 = (...letters) => {
    console.log(...letters);
    console.log(letters);
    if (letters.length === 0)
        return "z";
    const charCodeSum = letters
        .map((char) => char.charCodeAt(0) - 96)
        .reduce((acc, curr) => acc + curr, 0);
    console.log(charCodeSum);
    console.log(charCodeSum % 26);
    if (charCodeSum % 26 === 0)
        return "z";
    return charCodeSum > 26
        ? String.fromCharCode((charCodeSum % 26) + 96)
        : String.fromCharCode(charCodeSum + 96);
};
function addLetters3(...letters) {
    const aCode = "a".charCodeAt(0);
    const zCode = "z".charCodeAt(0);
    const mod = zCode - aCode + 1;
    const normalizeCharCode = (letter) => letter.charCodeAt(0) - aCode + 1;
    const normalizeCharCodes = letters.map(normalizeCharCode);
    const add = (a, b) => a + b;
    const value = normalizeCharCodes.reduce(add, 0);
    const finalCharCode = ((value - 1 + mod) % mod) + aCode;
    return String.fromCharCode(finalCharCode);
}
const addLetters4 = (...letters) => String.fromCharCode((letters.reduce((acc, val) => acc + val.charCodeAt(0) - 96, 0) % 26 ||
    26) + 96);
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const addLetters5 = (...letters) => letters.length === 0
    ? "z"
    : alphabet[(letters.reduce((acc, c) => acc + (alphabet.indexOf(c) + 1), 0) -
        1) %
        alphabet.length];
function addLetters6(...letters) {
    if (letters.length === 0)
        return "z";
    const letterArray = "abcdefghijklmnopqrstuvwxyz".split("");
    let sum = 0;
    for (const letter of letters) {
        sum += letterArray.indexOf(letter) + 1;
    }
    let remainder = sum % 26;
    if (remainder === 0)
        return "z";
    else
        return letterArray[remainder - 1];
}
function addLetters7(...letters) {
    const sum = letters.map((c) => c.charCodeAt(0) - 96).reduce((a, b) => a + b, 0) %
        26;
    return sum === 0 ? "z" : String.fromCharCode(96 + sum);
}
function addLetters8(...letters) {
    const s = "zabcdefghijklmnopqrstuvwxy";
    let sum = 0;
    for (let l of letters) {
        sum += s.indexOf(l);
    }
    return s[sum % 26];
}
function addLetters9(...letters) {
    if (!letters || letters.length < 1)
        return "z";
    if (letters.length === 1)
        return letters[0];
    const num = letters
        .map((ch) => ch.charCodeAt(0) - 96)
        .reduce((sum, curr) => sum + curr, 0) % 26;
    if (num === 0)
        return "z";
    else
        return String.fromCharCode(num + 96);
}
const isPowerOfTwo = (num) => {
    if (num === 1)
        return true;
    if ((num & 1) === 1)
        return false;
    while (num > 1) {
        num = num / 2;
    }
    return num === 1;
};
function isPowerOfTwo2(n) {
    return Number.isInteger(Math.log2(n));
}
const isPowerOfTwo3 = (n) => Math.log2(n) % 1 === 0;
function isPowerOfTwo4(n) {
    return n === 2 || n === 1 ? true : n < 2 ? false : isPowerOfTwo(n / 2);
}
function isPowerOfTwo5(n) {
    for (let i = 0; true; i++) {
        const pow = Math.pow(2, i);
        if (pow === n) {
            return true;
        }
        else if (pow > n) {
            return false;
        }
    }
}
function isPowerOfTwo6(n) {
    while (n > 2 && n % 2 == 0)
        n = n / 2;
    return n == 2 || n == 1;
}
const overTheRoad = (address, n) => {
    return n * 2 + 1 - address;
};
function overTheRoad2(address, n) {
    if (address % 2 === 0) {
        return 1 + 2 * (n - address / 2);
    }
    else {
        return 2 * n - (address - 1);
    }
}
const evenNumbers = (array, n) => {
    return array.filter((el) => (el & 1) === 0).slice(-n);
};
function isEven2(n) {
    return n % 2 === 0;
}
function evenNumbers2(array, n) {
    return array.filter(isEven2).slice(-n);
}
class G965a1 {
}
G965a1.gps = (secInt, distArr) => {
    let speedsArr = [];
    for (let i = 1; i < distArr.length; i++) {
        let curr = distArr[i], prev = distArr[i - 1];
        let sectionDist = curr - prev;
        let sectAveSpeed = (3600 / secInt) * sectionDist;
        speedsArr.push(sectAveSpeed);
    }
    console.log(speedsArr);
    return Math.max(...speedsArr) | 0;
};
class G965a2 {
}
G965a2.gps = (seconds, sections) => {
    if (sections.length <= 1)
        return 0;
    const sectionSpeeds = sections
        .map((start, index) => start - (sections[index - 1] || 0))
        .map((distance) => (3600 * distance) / seconds);
    return Math.floor(Math.max(...sectionSpeeds));
};
const noOdds = (values) => {
    return values.filter((el) => {
        return (el & 1) === 0;
    });
};
function noOdds2(values) {
    return values.filter((i) => !(i % 2));
}
class G964a {
}
G964a.partlist = (arr) => {
    let solution = [];
    for (let i = 0; i < arr.length - 1; i++) {
        let subArr = [];
        subArr.push(arr.slice(0, i + 1).join(" "), arr.slice(i + 1).join(" "));
        solution.push(subArr);
    }
    return solution;
};
class G964a2 {
    static partlist(arr) {
        return arr
            .map((s, i, a) => [
            a.slice(0, i + 1).join(" "),
            a.slice(i + 1, a.length).join(" "),
        ])
            .slice(0, arr.length - 1);
    }
}
class G964a3 {
    static partlist(arr) {
        return arr
            .slice(1)
            .map((x, i) => [
            arr.slice(0, i + 1).join(" "),
            arr.slice(i + 1).join(" "),
        ]);
    }
}
class G964a4 {
    static partlist(arr) {
        const x = arr.map((word, idx) => {
            return [
                arr.slice(0, idx + 1).join(" "),
                arr.slice(idx + 1, arr.length).join(" "),
            ];
        });
        return x.slice(0, -1);
    }
}
const bump = (road) => {
    let counter = 0;
    for (let i = 0; i < road.length; i++) {
        if (road[i] === "n") {
            counter++;
            if (counter > 15)
                return "Car Dead";
        }
    }
    return "Woohoo!";
};
function bump2(x) {
    return x.split("").filter((a) => a === "n").length <= 15
        ? "Woohoo!"
        : "Car Dead";
}
function bump3(x) {
    return x.replace(/_/g, "").length > 15 ? `Car Dead` : `Woohoo!`;
}
function bump4(x) {
    return x
        .split("")
        .reduce((total, n) => (n === "n" ? total + 1 : total), 0) > 15
        ? "Car Dead"
        : "Woohoo!";
}
function bump5(x) {
    const arr = x.match(/[n+]/g) || [];
    return arr.length <= 15 ? "Woohoo!" : "Car Dead";
}
function bump6(x) {
    return (x.match(/n/g) || []).length > 15 ? "Car Dead" : "Woohoo!";
}
const adjacentElementsProduct = (arr) => {
    let productsArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        let adjacentProd = arr[i] * arr[i + 1];
        productsArr.push(adjacentProd);
    }
    return Math.max(...productsArr);
};
const adjacentElementsProduct2 = (arr) => Math.max(...arr.map((value, index) => index === arr.length - 1
    ? value * arr[index - 1]
    : value * arr[index + 1]));
function adjacentElementsProduct3(arr) {
    return Math.max(...arr.slice(1).map((x, i) => x * arr[i]));
}
const getEvenNumbers = (numbersArray) => {
    return numbersArray.filter((num) => {
        return (num & 1) === 0;
    });
};
const getEvenNumbers2 = (numbersArray) => {
    return numbersArray.filter((x) => x % 2 === 0);
};
const isEven = (num) => num % 2 == 0;
const getEvenNumbers3 = (nums) => nums.filter(isEven);
const getEvenNumbers4 = (numbersArray) => {
    return numbersArray.filter((cond) => 0 === cond % 2);
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
    return n <= 0 ? 0 : (n * (n + 1) * (n + 2)) / 6;
}
function sumTriangularNumbers4(n) {
    return Array.from({ length: n })
        .map((value, index) => ((1 + index + 1) * (index + 1)) / 2)
        .reduce((pre, current) => pre + current, 0);
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
    return Math.trunc(Math.sqrt(ages.map((x) => x * x).reduce((a, b) => a + b, 0)) / 2);
}
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
        return array.reduce((a, b) => a.toString().length < b.toString().length ? b : a);
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
    return [...array].sort((a, b) => a - b).join("") === array.join("")
        ? "yes, ascending"
        : [...array]
            .sort((a, b) => a - b)
            .reverse()
            .join("") === array.join("")
            ? "yes, descending"
            : "no";
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
            return "yes, ascending";
        case dsc.toString():
            return "yes, descending";
        default:
            return "no";
    }
}
function isSortedAndHow7(array) {
    if ([...array].sort((a, b) => a - b).join("") === array.join("")) {
        return "yes, ascending";
    }
    else if ([...array].sort((a, b) => b - a).join("") === array.join("")) {
        return "yes, descending";
    }
    else {
        return "no";
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
        content -= (content / 100) * evapPerDay;
        days++;
    } while (content > (full / 100) * threshold);
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
    return $.toString()
        .split(",")
        .filter((e) => e)
        .map(Number)
        .sort((a, b) => a - b);
}
function flattenAndSort5(inputArray) {
    let numbers = [];
    for (const tuple of inputArray) {
        numbers = [...tuple, ...numbers];
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
        expDay: expDay,
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
    return (enteredCode === correctCode &&
        Date.parse(currentDate) <= Date.parse(expirationDate));
}
function checkCoupon3(enteredCode, correctCode, currentDate, expirationDate) {
    let cDate = new Date(currentDate);
    let expDate = new Date(expirationDate);
    return enteredCode === correctCode && cDate <= expDate ? true : false;
}
function checkCoupon4(enteredCode, correctCode, currentDate, expirationDate) {
    const isValidCode = enteredCode === correctCode;
    const isValidDate = new Date(currentDate) <= new Date(expirationDate);
    return isValidCode && isValidDate;
}
const rowWeights = (arr) => {
    let arr1 = [], arr2 = [];
    arr.forEach((num, idx) => {
        idx & 1 ? arr1.push(num) : arr2.push(num);
    });
    return [arr2.reduce((a, b) => a + b), arr1.reduce((a, b) => a + b)];
};
function rowWeights2(arr) {
    return arr.reduce((r, e, i) => ((r[i % 2] += e), r), [0, 0]);
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
    arr.forEach((value, index) => index % 2 ? (arr2 += value) : (arr1 += value));
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
    return Array.from(new Set(s.split(" "))).join(" ");
}
function removeDuplicateWords3(s) {
    return s
        .split(" ")
        .filter((v, i, a) => a.indexOf(v) === i)
        .join(" ");
}
function removeDuplicateWords4(s) {
    return [...new Set(s.match(/[a-z]+/gi) || [])].join(" ");
}
function removeDuplicateWords5(s) {
    const wordArray = s.split(" ");
    const wordSet = new Set(wordArray);
    const result = Array.from(wordSet).join(" ");
    return result;
}
function removeDuplicateWords6(s) {
    let result = [];
    s.split(" ").forEach((string, index) => {
        if (result.indexOf(string) === -1) {
            result.push(string);
        }
    });
    return result.join(" ");
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
    [...s].map((l, i) => (i % 2 ? l : l.toUpperCase())).join(""),
    [...s].map((l, i) => (i % 2 ? l.toUpperCase() : l)).join(""),
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
            .split("")
            .map((letter, i) => i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase())
            .join(""),
        s
            .split("")
            .map((letter, i) => i % 2 !== 0 ? letter.toUpperCase() : letter.toLowerCase())
            .join(""),
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
    return upperC > str.length / 2 ? str.toUpperCase() : str.toLowerCase();
};
function solve2(s) {
    let uppercaseCount = s
        .split("")
        .filter((letter) => letter === letter.toUpperCase()).length;
    return uppercaseCount > s.length / 2 ? s.toUpperCase() : s.toLowerCase();
}
function solve3(s) {
    return (s.match(/[a-z]/g) || []).length >= s.length / 2
        ? s.toLowerCase()
        : s.toUpperCase();
}
const solve4 = (s) => {
    const upperCs = s.split("").filter((x) => x == x.toUpperCase());
    return upperCs.length > s.length / 2 ? s.toUpperCase() : s.toLowerCase();
};
function solve5(s) {
    return s.replace(/[a-z]/g, "").length > s.length / 2
        ? s.toUpperCase()
        : s.toLowerCase();
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
        item === array1[index]
            ? (result += 4)
            : item === ""
                ? (result += 0)
                : (result -= 1);
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
    return Math.abs(number)
        .toString()
        .split("")
        .reduce((acc, digit) => parseInt(digit) + acc, 0);
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
    return bound - (bound % divisor);
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
    return (ages
        .sort((a, b) => b - a)
        .slice(0, 2)
        .reverse());
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
    return n * m > 1 ? n * m - 1 : 0;
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
    return Array.from({ length: end - start + 1 }, (ix, it) => it + start).filter((it) => !/5/.test(it + "")).length;
}
function dontGiveMeFive3(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => i + start).filter((x) => !/5/.test(`${x}`)).length;
}
const reverseWords = (str) => {
    return str
        .split(" ")
        .map((word) => word.split("").reverse().join(""))
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
    return [...Array(n).keys()]
        .map((k) => 1 / (k * 3 + 1))
        .reduce((acc, n) => acc + n, 0)
        .toFixed(2);
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
const oddOrEven3 = (array) => array.reduce((acc, curr) => (acc += curr), 0) % 2 === 0 ? "even" : "odd";
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
    return a + b > c && a + c > b && b + c > a;
};
const isTriangle2 = (a, b, c) => a + b <= c || a + c <= b || b + c <= a ? false : true;
function isTriangle3(a, b, c) {
    return a + b <= c ? false : a + c <= b ? false : b + c <= a ? false : true;
}
const validatePin = (pin) => {
    return ((pin.length === 4 && pin.match(/\d/g).length === 4) ||
        (pin.length === 6 && pin.match(/\d/g).length === 6));
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
        const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
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
    console.log(str
        .split(" ")
        .map((word) => word.replace(word[0], word[0].toUpperCase()))
        .join(" "));
    return str
        .split(" ")
        .map((word) => word.replace(word[0], word[0].toUpperCase()))
        .join(" ");
};
const findShort = (str) => {
    return str.split(" ").sort((a, b) => {
        return a.length - b.length;
    })[0].length;
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
