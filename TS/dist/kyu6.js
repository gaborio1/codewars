"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countBits7 = exports.countBits6 = exports.countBits5 = exports.countBits4 = exports.countBits3 = exports.countBits2 = exports.findOutlier3 = exports.findOutlier2 = void 0;
const findMissingLetter = (array) => {
    return "hello";
};
const findUniq = (arr) => {
    const arrLength = arr.length;
    console.log(arrLength);
    let solution = 0;
    if (arr[0] !== arr[1] && arr[0] !== arr[2]) {
        console.log("odd one found: " + arr[0]);
        solution = arr[0];
    }
    if (arr[arrLength - 1] !== arr[arrLength - 2] && arr[arrLength - 1] !== arr[arrLength - 3]) {
        console.log("odd one found: " + arr[arrLength - 1]);
        solution = arr[arrLength - 1];
    }
    for (let i = 1; i < arrLength - 1; i++) {
        if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
            console.log("odd one found: " + arr[i]);
            solution = arr[i];
            break;
        }
    }
    console.log("solution: " + solution);
    return solution;
};
findUniq([2, 1, 1, 1, 1, 1]);
findUniq([1, 2, 1, 1, 1, 1]);
findUniq([1, 1, 2, 1, 1, 1]);
findUniq([1, 1, 1, 2, 1, 1]);
findUniq([1, 1, 1, 1, 2, 1]);
findUniq([1, 1, 1, 1, 1, 2]);
findUniq([1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1]);
const narcissistic = (value) => {
    return true;
};
const isPangram = (phrase) => {
    const lettersArr = phrase.toLowerCase().match(/[a-z]/g);
    const lettersSet = new Set(lettersArr);
    return lettersSet.size === 26;
};
const isPangram3 = (phrase) => new Set(phrase.toLowerCase().match(/[a-z]/g)).size === 26;
const isPangram4 = (phrase) => ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    .every(l => phrase.toLowerCase().includes(l));
function isPangram5(phrase) {
    let newString = new Set((phrase.replace(/\W|\d/g, '')).toLowerCase());
    if (newString.size == 26) {
        return true;
    }
    else {
        return false;
    }
}
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
