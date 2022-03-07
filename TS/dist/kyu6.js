"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countBits7 = exports.countBits6 = exports.countBits5 = exports.countBits4 = exports.countBits3 = exports.countBits2 = exports.findOutlier3 = exports.findOutlier2 = void 0;
class G964a {
    static inArray(a1, a2) {
        let solution = [];
        a1.forEach((subStr) => {
            const findSubStr = (word) => word.indexOf(subStr) >= 0;
            let firstMatch = a2.find(findSubStr);
            if (firstMatch)
                solution.push(subStr);
        });
        return solution.sort();
    }
}
class G964a2 {
    static inArray(a1, a2) {
        return a1.filter(a => a2.some(b => b.includes(a))).sort();
    }
}
class G964a3 {
    static inArray(a1, a2) {
        return a1.filter(x => a2.join().indexOf(x) > -1).sort();
    }
}
class G964a4 {
    static inArray(a1, a2) {
        const source = a2.join('#');
        return a1
            .filter((item) => source.indexOf(item) !== -1)
            .sort();
    }
}
class G964a5 {
    static inArray(a1, a2) {
        return a1
            .sort()
            .filter(s => a2.find(s2 => s2.includes(s)));
    }
}
const comp = (a1, a2) => {
    return (a1 === null || a2 === null)
        ? false
        : String([...a1].sort((a, b) => a - b).map((el) => Math.pow(el, 2)))
            === String([...a2].sort((a, b) => a - b));
};
const comp2 = (a1, a2) => {
    if (a1 === null || a2 === null)
        return false;
    const ascending1 = [...a1].sort((a, b) => a - b);
    const ascending1Squared = ascending1.map((el) => Math.pow(el, 2));
    const ascending2 = [...a2].sort((a, b) => a - b);
    return String(ascending1Squared) === String(ascending2);
};
var b1 = [121, 144, 19, 161, 19, 144, 19, 11];
var b2 = [11 * 21, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
function comp3(a1, a2) {
    if (!(a1 && a2) || a1.length !== a2.length)
        return false;
    return a1.map(x => x * x).sort().toString() === a2.sort().toString();
}
function comp4(a1, a2) {
    return !!a1 && !!a2 && a1.map(x => x * x).sort().join() == a2.sort().join();
}
const longestConsec = (strArr, numWords) => {
    if (strArr.length === 0
        || numWords < 1
        || numWords > strArr.length) {
        return "";
    }
    let concatArr = [];
    for (let i = 0; i < strArr.length - numWords + 1; i++) {
        let concatWord = "";
        for (let j = 0; j < numWords; j++) {
            let nextWord = strArr[i + j];
            concatWord += nextWord;
        }
        concatArr.push(concatWord);
    }
    const concatArrCopy = [...concatArr];
    const sortedArr = concatArrCopy.sort((a, b) => b.length - a.length);
    const longest = sortedArr[0].length;
    let solution = "";
    for (let i = 0; i < concatArr.length; i++) {
        if (concatArr[i].length === longest) {
            solution = concatArr[i];
            break;
        }
    }
    return solution;
};
function longestConsec2(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k <= 0)
        return "";
    return strarr.map((currentValue, index, array) => array.slice(index, index + k).join(''))
        .reduce((acc, cur) => cur.length > acc.length ? cur : acc);
}
function longestConsec3(strarr, k) {
    if (!(strarr && strarr.length) || k <= 0 || strarr.length < k) {
        return "";
    }
    return strarr.reduce((acc, cur, i, arr) => {
        let concatinated = arr.slice(i, i + k).join("");
        return acc.length < concatinated.length ? concatinated : acc;
    }, "");
}
function longestConsec4(strarr, k) {
    let max = '';
    const n = strarr.length;
    for (let i = 0; i <= n - k && k > 0 && k <= n; i++) {
        const newStr = strarr.slice(i, i + k).join('');
        max = max.length >= newStr.length ? max : newStr;
    }
    return max;
}
const findNb = (num) => {
    let total = num;
    let base = 1;
    while (total > 0) {
        total -= Math.pow(base, 3);
        base++;
    }
    return total < 0
        ? -1
        : base - 1;
};
function findNb2(m) {
    var n = 0;
    while (m > 0)
        m -= Math.pow(++n, 3);
    return m ? -1 : n;
}
function findNb3(m) {
    let sum = 0;
    let i = 1;
    for (; sum < m; i++) {
        sum += Math.pow(i, 3);
    }
    return sum === m ? (i - 1) : -1;
}
function findNb4(m) {
    let n = 1;
    while (m > 0) {
        m = m - n ** 3;
        if (m === 0)
            return n;
        n++;
    }
    return -1;
}
class G964 {
}
G964.digPow = (num, pow) => {
    const digitArr = String(num).split("").map((Number));
    let sum = 0;
    digitArr.forEach((digit, idx) => {
        sum += Math.pow(digit, idx + pow);
    });
    console.log("sum: " + sum);
    return sum % num === 0
        ? sum / num
        : -1;
};
const validBraces = (braces) => {
    if (braces.length % 2 > 0)
        return false;
    const bracePair = /\(\)|\[\]|\{\}/;
    let str = braces;
    while (bracePair.test(str)) {
        str = str.replace(bracePair, "");
    }
    console.log("str: " + str);
    return str.length === 0;
};
function validBraces2(braces) {
    if (braces.length % 2 !== 0)
        return false;
    let count = braces.length;
    braces = braces.replace('()', '');
    braces = braces.replace('[]', '');
    braces = braces.replace('{}', '');
    if (braces.length === 0)
        return true;
    if (braces.length === count)
        return false;
    return validBraces(braces);
}
function validBraces3(braces) {
    let tempBraces = braces;
    for (let i = 0; i <= braces.length / 2; i++) {
        tempBraces = tempBraces.replace(/(\(\))|(\[\])|(\{\})/g, '');
    }
    return !tempBraces;
}
function validBrace4(braces) {
    [...braces].forEach(() => braces = braces.replace('()', '').replace('{}', '').replace('[]', ''));
    return !braces;
}
const validBraces5 = (braces) => {
    const s = braces.replace(/\(\)|\[\]|\{\}/g, "");
    if (s.length === 0)
        return true;
    else if (s === braces)
        return false;
    else
        return validBraces(s);
};
const high = (str) => {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const getScore = (str) => {
        let score = 0;
        str.split("").forEach((char) => {
            score += alphabet.indexOf(char) + 1;
        });
        return score;
    };
    const counterObj = {};
    str.split(" ").forEach((word) => {
        counterObj[word] = getScore(word);
    });
    console.log(Object.entries(counterObj).sort((a, b) => b[1] - a[1])[0][0]);
    return Object.entries(counterObj).sort((a, b) => b[1] - a[1])[0][0];
};
const VALUE_OFFSET = 96;
const calcValue = (word) => {
    return word.split('').reduce((sum, char) => sum + char.charCodeAt(0) - VALUE_OFFSET, 0);
};
const high2 = (str) => {
    return str.split(' ').reduce((max, word) => calcValue(word) > calcValue(max) ? word : max);
};
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const getLetterScore = (str) => alphabet.indexOf(str) + 1;
const getWordScore = (str) => str
    .split('')
    .map(getLetterScore)
    .reduce((acc, n) => acc + n, 0);
const high3 = (str) => str
    .split(' ')
    .reduce((acc, value) => getWordScore(value) > getWordScore(acc) ? value : acc);
const towerBuilder = (nFloors) => {
    const absoluteWidth = nFloors + (nFloors - 1);
    const building = [];
    for (let floors = 1, blocks = 1; floors <= nFloors; floors++, blocks += 2) {
        let floorStr = "";
        let leadTrailSpaces = (absoluteWidth - blocks) / 2;
        floorStr = " "
            .repeat(leadTrailSpaces)
            + "*"
                .repeat(blocks)
            + " "
                .repeat(leadTrailSpaces);
        building.push(floorStr);
    }
    console.log(building);
    return building;
};
const towerBuilder2 = (nFloors) => {
    return Array.from({ length: nFloors }, (_, i) => `${" ".repeat(nFloors - i - 1)}${"*".repeat(2 * i + 1)}${" ".repeat(nFloors - i - 1)}`);
};
const towerBuilder3 = (nFloors) => {
    return Array.from({ length: nFloors }, (_, index) => {
        const spaces = " ".repeat(nFloors - 1 - index);
        return `${spaces}${"*".repeat(index * 2 + 1)}${spaces}`;
    });
};
const towerBuilder4 = (n) => {
    const result = [];
    for (let i = 1; i <= n; i++) {
        result.push(' '.repeat(n - i)
            + '*'.repeat(i * 2 - 1)
            + ' '.repeat(n - i));
    }
    return result;
};
const towerBuilder5 = (n) => {
    return new Array(n).fill("").map((_, i) => {
        let spaces = " ".repeat(n - i - 1);
        return spaces + '*'.repeat(2 * i + 1) + spaces;
    });
};
const findMissingLetter = (arr) => {
    let solution = "";
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const startIdx = alphabet.indexOf(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        if (alphabet[startIdx + i] !== arr[i]) {
            solution = alphabet[startIdx + i];
            break;
        }
    }
    return solution;
};
findMissingLetter(['a', 'b', 'c', 'd', 'f']);
findMissingLetter(['O', 'Q', 'R', 'S']);
function findMissingLetter3(array) {
    const isUpper = array[0] == array[0].toUpperCase();
    let expectedLetter = '';
    for (const letter of array) {
        if (expectedLetter != '' && letter != expectedLetter)
            return expectedLetter;
        expectedLetter = String.fromCharCode(letter.charCodeAt(0) + 1);
    }
    throw 'Nothing missing';
}
function findMissingLetter4(letters) {
    const first = letters.shift().charCodeAt(0) + 1;
    const offset = letters.findIndex((l, i) => l.charCodeAt(0) !== (i + first));
    return String.fromCharCode(first + offset);
}
function findMissingLetter5(array) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet
        .substr(alphabet.indexOf(array[0]))
        .split('')
        .find((curr, idx) => curr != array[idx]);
}
const findUniq = (arr) => {
    const arrLength = arr.length;
    let solution = 0;
    if (arr[0] !== arr[1] && arr[0] !== arr[2]) {
        solution = arr[0];
    }
    if (arr[arrLength - 1] !== arr[arrLength - 2] && arr[arrLength - 1] !== arr[arrLength - 3]) {
        solution = arr[arrLength - 1];
    }
    for (let i = 1; i < arrLength - 1; i++) {
        if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
            solution = arr[i];
            break;
        }
    }
    return solution;
};
function findUniq3(arr) {
    arr = arr.sort();
    return arr[0] == arr[1] ? arr[arr.length - 1] : arr[0];
}
function findUniq4(arr) {
    const x = arr[arr[0] == arr[1] ? 0 : 2];
    return arr.find(y => y != x);
}
function findUniq5(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}
function findUniq6(arr) {
    var arr = arr.sort();
    return arr[0] == arr[1] ? arr.pop() : arr[0];
}
function findUniq7(arr) {
    return arr.filter((el) => arr.indexOf(el) == arr.lastIndexOf(el))[0];
}
const narcissistic = (num) => {
    const exp = num.toString().length;
    const digitArr = num
        .toString().split("")
        .map(Number);
    const powerSum = digitArr
        .map((base) => Math.pow(base, exp))
        .reduce((a, b) => a + b);
    return powerSum === num;
};
narcissistic(7);
narcissistic(153);
narcissistic(1634);
narcissistic(16342);
function narcissistic2(value) {
    const str = String(value);
    let acc = 0;
    str.split('').forEach((x) => acc += Math.pow(+x, str.length));
    return acc === value;
}
function narcissistic3(value) {
    const digits = String(value).split('');
    return digits.reduce((acc, current) => acc + Math.pow(Number(current), digits.length), 0) === value;
}
const isPangram = (phrase) => {
    const lettersArr = phrase.toLowerCase().match(/[a-z]/g);
    const lettersSet = new Set(lettersArr);
    return lettersSet.size === 26;
};
const tribonacci = ([a, b, c], n) => {
    if (n === 0)
        return [];
    if (n === 1)
        return [a];
    if (n === 2)
        return [a, b];
    if (n === 3)
        return [a, b, c];
    const triArr = [a, b, c];
    for (let i = 3; i < n; i++) {
        let length = triArr.length;
        triArr.push(triArr[length - 1] + triArr[length - 2] + triArr[length - 3]);
    }
    return triArr;
};
function tribonacci2(s, n) {
    for (let i = 0; s.length < n; i++)
        s.push(s[i] + s[i + 1] + s[i + 2]);
    return s.slice(0, n);
}
function tribonacci3([a, b, c], n) {
    if (n == 0)
        return [];
    if (n == 1)
        return [a];
    if (n == 2)
        return [a, b];
    if (n == 3)
        return [a, b, c];
    var result = [a, b, c];
    for (var i = 3; i < n; i++) {
        result[i] = result[i - 1] + result[i - 2] + result[i - 3];
    }
    return result;
}
const tribonacci4 = ([a, b, c], n) => n < 1 ? [] : [a].concat(tribonacci([b, c, a + b + c], n - 1));
const findEvenIndex = (arr) => {
    const sum = arr.reduce((a, b) => a + b);
    let counterLeft = 0;
    let solution = -1;
    arr.forEach((current, i) => {
        let previous = arr[i - 1];
        let sideSum = (sum - current) / 2;
        counterLeft += previous ? previous : 0;
        if (sideSum === counterLeft) {
            solution = i;
        }
        console.table({ current: current, sideSum: sideSum, counter: counterLeft });
        if (sideSum === counterLeft) {
            console.log("solution found at idx : ", i);
            solution = i;
        }
    });
    return solution;
};
const order = (words) => {
    if (words.length === 0) {
        return "";
    }
    else {
        const orderedArr = [];
        words.split(" ").forEach((word) => {
            let numStr = Number(word.match(/[1-9]/)[0]) - 1;
            orderedArr[numStr] = word;
        });
        return orderedArr.join(" ");
    }
};
function order2(words) {
    return words.split(' ')
        .sort((a, b) => +a.match(/\d/) - +b.match(/\d/))
        .join(' ');
}
function order3(words) {
    return words.split(' ')
        .sort((l, r) => +/\d/.exec(l)[0] - +/\d/.exec(r)[0])
        .join(' ');
}
const order4 = (words) => {
    return words.split(' ').sort((a, b) => +a.replace(/\D/g, '') - +b.replace(/\D/g, '')).join(' ');
};
const isValidWalk = (directions) => {
    const counterObj = {};
    directions.forEach(dir => counterObj[dir] = (counterObj[dir] || 0) + 1);
    return directions.length === 10
        ? (counterObj.n === counterObj.s) && (counterObj.e === counterObj.w)
        : false;
};
isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']);
isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']);
function isValidWalk2(walk) {
    if (walk.length !== 10)
        return false;
    if (walk.filter(e => e === 'n').length !== walk.filter(e => e === 's').length)
        return false;
    if (walk.filter(e => e === 'e').length !== walk.filter(e => e === 'w').length)
        return false;
    return true;
}
function isValidWalk3(walk) {
    if (walk.length !== 10)
        return false;
    const directions = {
        n: 0,
        s: 0,
        w: 0,
        e: 0,
    };
    walk.forEach((direction) => {
        directions[direction]++;
    });
    return directions.n === directions.s && directions.w === directions.e;
}
function isValidWalk4(walk) {
    if (walk.length !== 10)
        return false;
    const coordinates = {
        x: 0,
        y: 0,
    };
    for (let i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n':
                coordinates.x++;
                break;
            case 's':
                coordinates.x--;
                break;
            case 'e':
                coordinates.y++;
                break;
            case 'w':
                coordinates.y--;
                break;
            default: break;
        }
    }
    return (!coordinates.x && !coordinates.y);
}
const duplicateEncode = (word) => {
    const original = word.split("").map((letter) => letter.toLowerCase());
    let copy = [...original];
    const resultArr = [];
    for (let i = 0; i < original.length; i++) {
        copy.splice(i, 1);
        if (copy.indexOf(original[i]) < 0) {
            resultArr.push("(");
        }
        else {
            resultArr.push(")");
        }
        copy = [...original];
    }
    console.log(resultArr.join(""));
    return resultArr.join("");
};
function duplicateEncode2(word) {
    return word
        .toLowerCase()
        .split('')
        .map((a, i, w) => {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
    })
        .join('');
}
function duplicateEncode3(word) {
    word = word.toLowerCase();
    let countObj = {};
    for (let char of word) {
        let count = countObj[char] || 0;
        countObj[char] = ++count;
    }
    let result = '';
    for (let char of word) {
        result += countObj[char] > 1 ? ')' : '(';
    }
    return result;
}
function duplicateEncode4(word) {
    const chars = word.toLowerCase().split("");
    return chars.map(char => chars.filter(c => c === char).length > 1 ? ")" : "(").join("");
}
function duplicateEncode5(word) {
    return word
        .split('')
        .map(value => (word.match(new RegExp(`[${value}]`, "giu")) || []).length > 1
        ? ')'
        : '(')
        .join('');
}
const duplicateCount = (text) => {
    const counterObj = {};
    text
        .split("")
        .map((letter) => letter.toLowerCase())
        .forEach(num => counterObj[num] = (counterObj[num] || 0) + 1);
    const duplicatesArr = Object
        .entries(counterObj)
        .filter(([key, value]) => value > 1);
    return duplicatesArr.length;
};
function duplicateCount3(text) {
    const values = text.toLowerCase();
    const distinctValues = [...new Set(values)];
    const count = (s) => values.split(s).length - 1 > 1;
    return distinctValues.filter(value => count(value)).length;
}
function duplicateCount4(text) {
    let array = text.toLowerCase().split('');
    return [...new Set(array.filter((e, i) => array.indexOf(e) !== i))].length;
}
function duplicateCount5(text) {
    return new Set((text.toLowerCase().match(/(.)(?=.*\1)/gi) || [])).size;
}
const findOutlier = (ints) => {
    const odds = ints.filter((num) => Math.abs(num) % 2 === 1);
    const evens = ints.filter((num) => Math.abs(num) % 2 === 0);
    return odds.length > 1 ? evens[0] : odds[0];
};
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
const countBits = (num) => {
    const bitArr = num.toString(2).match(/1/g);
    return bitArr === null ? 0 : bitArr.length;
};
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
const arrayDiff = (a, b) => {
    return a.filter((num) => b.indexOf(num) < 0);
};
arrayDiff([3, 4, 3], [3]);
const digitalRoot = (num) => {
    const digitArr = num
        .toString()
        .split("")
        .map((el) => Number(el));
    const sum = digitArr.reduce((a, b) => a + b);
    return num > 9 ? digitalRoot(sum) : num;
};
digitalRoot(493193);
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
function spinWords2(words) {
    return words.replace(/[a-z]{5,}/ig, (s) => s.split("").reverse().join(""));
}
const findOdd = (arr) => {
    const counter = {};
    arr.forEach(num => counter[num] = (counter[num] || 0) + 1);
    const oddTimesArr = Object.entries(counter).filter(([key, value]) => value % 2 > 0);
    return Number(oddTimesArr[0][0]);
};
const findOdd2 = (arr) => {
    const counter = {};
    arr.forEach(num => counter[num] = (counter[num] || 0) + 1);
    let solution;
    Object.entries(counter).forEach(([key, value]) => {
        if (value % 2 > 0)
            solution = Number(key);
    });
    return solution;
};
findOdd([1, 2, 2, 1, 2]);
findOdd2([1, 2, 2, 1, 2]);
const findOdd3 = (xs) => {
    return xs.reduce((a, b) => a ^ b);
};
const solution = (num) => {
    const divs = [0];
    for (let i = 1; i < num; i++)
        if (i % 3 === 0 || i % 5 === 0) {
            divs.push(i);
        }
    console.log(num >= 0 ? divs.reduce((a, b) => a + b) : 0);
    return num >= 0 ? divs.reduce((a, b) => a + b) : 0;
};
