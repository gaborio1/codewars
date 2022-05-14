"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countBits7 = exports.countBits6 = exports.countBits5 = exports.countBits4 = exports.countBits3 = exports.countBits2 = exports.findOutlier3 = exports.findOutlier2 = exports.solution5 = exports.streetFighterSelection9 = exports.streetFighterSelection8 = void 0;
const dashatize = (num) => {
    if (num < 0)
        num = Math.abs(num);
    if (num < 10)
        return num.toString();
    const numStrArr = num.toString().split("");
    for (let i = 0; i < numStrArr.length; i += 1) {
        let current = numStrArr[i];
        if (Number(current) & 1) {
            if (i === 0)
                numStrArr[i] = `${current}-`;
            else if (i === numStrArr.length - 1)
                numStrArr[i] = `-${current}`;
            else
                numStrArr[i] = `-${current}-`;
        }
    }
    const dashStr = numStrArr.join("");
    const solution = dashStr.replace(/-{2,}/g, "-");
    return solution;
};
const dashatize2 = (num) => {
    return num.toString().
        replace(/([13579])/g, '-$1-').
        replace(/\-+/g, '-').
        replace(/^\-/, '').
        replace(/\-$/, '');
};
const dashatize3 = (num) => {
    return num.toString().replace('-', '').split(/([13579])/).filter(s => s !== '').join('-');
};
const dashatize4 = (num) => {
    return String(Math.abs(num))
        .split(/([13579])/)
        .filter(s => s !== '')
        .join('-');
};
const streetFighterSelection = (fighters, position, moves) => {
    let solution = [];
    let y = position[1], x = position[0];
    let currName = fighters[y][x];
    moves.forEach((dir) => {
        if (dir === "up") {
            if (y === 1) {
                y = 0;
                currName = fighters[y][x];
                solution.push(currName);
            }
            else {
                solution.push(currName);
            }
        }
        if (dir === "down") {
            if (y === 0) {
                y = 1;
                currName = fighters[y][x];
                solution.push(currName);
            }
            else {
                solution.push(currName);
            }
        }
        if (dir === "left") {
            if (x === 0) {
                x = 5;
                currName = fighters[y][x];
                solution.push(currName);
            }
            else {
                x -= 1;
                currName = fighters[y][x];
                solution.push(currName);
            }
        }
        if (dir === "right") {
            if (x === 5) {
                x = 0;
                currName = fighters[y][x];
                solution.push(currName);
            }
            else {
                x += 1;
                currName = fighters[y][x];
                solution.push(currName);
            }
        }
    });
    return solution;
};
let fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];
let moves = ["up", "left", "down", "right", "up", "left", "down", "right"];
function streetFighterSelection2(fighters, position, moves) {
    const returnArr = [];
    const pos = position;
    moves.map(move => {
        switch (move) {
            case 'up':
                pos[0] = 0;
                break;
            case 'down':
                pos[0] = 1;
                break;
            case 'right':
                pos[1] = pos[1] === fighters[0].length - 1 ? 0 : ++pos[1];
                break;
            case 'left':
                pos[1] = pos[1] === 0 ? pos[1] = fighters[0].length - 1 : --pos[1];
                break;
        }
        returnArr.push(fighters[pos[0]][pos[1]]);
    });
    return returnArr;
}
function streetFighterSelection3(fighters, position, moves) {
    let characters = new Array();
    for (let move of moves) {
        switch (move) {
            case 'left':
                position[0] = ((position[0] === 0) ? 5 : position[0] - 1);
                break;
            case 'right':
                position[0] = ((position[0] === 5) ? 0 : position[0] + 1);
                break;
            case 'up':
                position[1] = 0;
                break;
            case 'down':
                position[1] = 1;
                break;
        }
        characters.push(fighters[position[1]][position[0]]);
    }
    return characters;
}
function streetFighterSelection4(fighters, position, moves) {
    let x = position[0];
    let y = position[1];
    let arr = [];
    const mod = 6;
    const stepL = (a) => {
        let sum = a - 1;
        if (sum < 0)
            sum += mod;
        return sum;
    };
    const stepR = (a) => {
        let sum = a + 1;
        if (sum >= mod)
            sum -= mod;
        return sum;
    };
    for (let i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case "up":
                y = 0;
                break;
            case "down":
                y = 1;
                break;
            case "left":
                x = stepL(x);
                break;
            case "right":
                x = stepR(x);
                break;
        }
        arr.push(fighters[y][x]);
    }
    return arr;
}
function streetFighterSelection6(fighters, position, moves) {
    let s = [];
    let [x, y] = position;
    for (let c of moves) {
        switch (c) {
            case "up":
                x = Math.max(x - 1, 0);
                break;
            case "down":
                x = Math.min(x + 1, 1);
                break;
            case "left":
                y = (y + 5) % 6;
                break;
            case "right":
                y = (y + 1) % 6;
                break;
        }
        s.push(fighters[x][y]);
    }
    return s;
}
var Moves;
(function (Moves) {
    Moves["right"] = "right";
    Moves["left"] = "left";
    Moves["up"] = "up";
    Moves["down"] = "down";
})(Moves || (Moves = {}));
function streetFighterSelection8(fighters, position, moves) {
    var chosenFighters = [];
    var horizontalPosition = position[1];
    var verticalPosition = position[0];
    function setHorisontalPosition() {
        var fightersLength = fighters[verticalPosition].length - 1;
        if (horizontalPosition < 0) {
            horizontalPosition = fightersLength;
        }
        else if (horizontalPosition > fightersLength) {
            horizontalPosition = 0;
        }
    }
    function setVerticalPosition() {
        var fightersLength = fighters.length - 1;
        if (verticalPosition < 0) {
            verticalPosition = 0;
        }
        else if (verticalPosition > fightersLength) {
            verticalPosition = fightersLength;
        }
    }
    for (var i = 0; i < moves.length; i++) {
        if (moves[i] === Moves.right) {
            horizontalPosition++;
            setHorisontalPosition();
        }
        else if (moves[i] === Moves.left) {
            horizontalPosition--;
            setHorisontalPosition();
        }
        else if (moves[i] === Moves.up) {
            verticalPosition--;
            setVerticalPosition();
        }
        else if (moves[i] === Moves.down) {
            verticalPosition++;
            setVerticalPosition();
        }
        console.log(moves, fighters[verticalPosition][horizontalPosition]);
        chosenFighters.push(fighters[verticalPosition][horizontalPosition]);
    }
    return chosenFighters;
}
exports.streetFighterSelection8 = streetFighterSelection8;
const MAX_X = 5;
const MAX_Y = 1;
function streetFighterSelection9(fighters, position, moves) {
    let [x, y] = position;
    return moves.map(dir => {
        switch (dir) {
            case 'up':
                y = y > 0 ? y - 1 : y;
                break;
            case 'down':
                y = y < MAX_Y ? y + 1 : y;
                break;
            case 'left':
                x = x === 0 ? MAX_X : x - 1;
                break;
            case 'right':
                x = x === MAX_X ? 0 : x + 1;
                break;
        }
        return fighters[y][x];
    });
}
exports.streetFighterSelection9 = streetFighterSelection9;
function streetFighterSelection10(fighters, position, moves) {
    let hoveredCharacters = [];
    let currentPosition = position;
    for (let move of moves) {
        if (move == 'up') {
            if (currentPosition[0] == 0) {
                hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
            }
            else {
                currentPosition[0]--;
                hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
            }
        }
        if (move == 'down') {
            if (currentPosition[0] == 1) {
                hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
            }
            else {
                currentPosition[0]++;
                hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
            }
        }
        if (move == 'left') {
            if (currentPosition[1] == 0) {
                currentPosition[1] = 5;
                hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
            }
            else {
                currentPosition[1]--;
                hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
            }
        }
        if (move == 'right') {
            if (currentPosition[1] == 5) {
                currentPosition[1] = 0;
                hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
            }
            else {
                currentPosition[1]++;
                hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
            }
        }
    }
    return hoveredCharacters;
}
const playPass = (str, shift) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const strArr = str.toLowerCase().split("");
    const shiftArr = strArr.map((char, i) => {
        let targetIdx = alphabet.indexOf(char) + shift;
        if (targetIdx > alphabet.length - 1)
            targetIdx = targetIdx % alphabet.length;
        if (/[a-z]/.test(char))
            return alphabet[targetIdx];
        if (/[0-9]/.test(char))
            return (9 - Number(char)).toString();
        return char;
    });
    const solution = shiftArr
        .map((char, i) => {
        if ((i & 1) === 0)
            return char.toUpperCase();
        return char;
    })
        .reverse()
        .join("");
    return solution;
};
function playPass2(s, n) {
    return s.toUpperCase()
        .split('')
        .map((v, i, a) => {
        if (/[0-9]/.test(v))
            return Math.abs(Number(v) - 9);
        if (/[A-Z]/.test(v)) {
            let x = String.fromCharCode((((v.charCodeAt(0) + n) - 65) % 26) + 65);
            return i % 2 == 1 ? x.toLowerCase() : x;
        }
        return v;
    }).reverse()
        .join('');
}
class G9641 {
    static isLetter(v) {
        return G9641.alphabet.indexOf(v) !== -1;
    }
    static isDigit(v) {
        return G9641.digits.indexOf(v) !== -1;
    }
    static playPass3(s = '', n = 0) {
        if (!s) {
            return '';
        }
        return s.toLowerCase().split('').map((v, i) => {
            if (G9641.isLetter(v)) {
                let letter = G9641.alphabet[(G9641.alphabet.indexOf(v) + n) % 26];
                return (i % 2) ? letter.toLowerCase() : letter.toUpperCase();
            }
            else if (G9641.isDigit(v)) {
                return 9 - Number(v);
            }
            return v;
        }).reverse().join('');
    }
}
G9641.alphabet = "abcdefghijklmnopqrstuvwxyz";
G9641.digits = "0123456789";
function playPass4(s, n, a = 'abcdefghijklmnopqrstuvwxyz') {
    return s.replace(/\d/g, d => '' + (9 - +d))
        .replace(/[a-z]/gi, l => a[(a.indexOf(l.toLowerCase()) + n) % a.length])
        .split('').map((e, i) => i % 2 == 1 ? e : e.toUpperCase())
        .reverse().join('');
}
class G9642 {
    static playPass(s, n) {
        let result = s.replace(/[A-Z]/g, (match) => {
            const code = match.charCodeAt(0);
            return String.fromCharCode((code - 65 + n) % 26 + 65);
        });
        result = result.replace(/\d/g, (match) => {
            return Math.abs(Number(match) - 9).toString();
        });
        const split = result.split("");
        for (let i = 0; i < split.length; i++) {
            if (i % 2 === 0) {
                split[i] = split[i].toUpperCase();
            }
            else {
                split[i] = split[i].toLowerCase();
            }
        }
        return split.reverse().join("");
    }
}
const foldArray = (numArr, numFolds) => {
    let numFoldsLeft = numFolds;
    let currentArray = [];
    if (numArr.length & 1) {
        let leadSub = numArr.slice(0, (numArr.length - 1) / 2);
        let trailSub = numArr.slice(Math.ceil(numArr.length / 2)).reverse();
        let middleEl = numArr[(numArr.length - 1) / 2];
        leadSub.forEach((num, idx) => {
            currentArray.push(num + trailSub[idx]);
        });
        currentArray.push(middleEl);
        numFoldsLeft -= 1;
    }
    else {
        for (let i = 0; i < numArr.length / 2; i += 1) {
            let currSum = numArr[i] + numArr[numArr.length - 1 - i];
            currentArray.push(currSum);
        }
        numFoldsLeft -= 1;
    }
    return numFoldsLeft
        ? foldArray(currentArray, numFoldsLeft)
        : currentArray;
};
function foldArray2(array, runs) {
    const arr2 = [...array];
    while (runs > 0) {
        arr2.map((val, i, arr) => i + 1 === arr.length ? val : arr[i] = val + arr.pop());
        runs--;
    }
    return arr2;
}
function foldArray3(array, runs) {
    var len = array.length, arr = array.slice();
    if (runs == 0)
        return arr;
    for (var i = 0; i < Math.floor(len / 2); i++) {
        arr[i] += arr[len - i - 1];
    }
    return foldArray(arr.slice(0, Math.ceil(len / 2)), runs - 1);
}
function foldArray4(array, runs) {
    let resultArray = array.slice();
    for (var i = 0; i < runs; ++i) {
        let runArray = resultArray.slice(0, Math.ceil(resultArray.length / 2));
        for (var j = resultArray.length - 1; j >= resultArray.length / 2; --j) {
            runArray[resultArray.length - 1 - j] += resultArray[j];
        }
        resultArray = runArray;
    }
    return resultArray;
}
function foldArray5(array, runs) {
    while (runs > 0) {
        let n = ~~(array.length / 2);
        array = Array.from({ length: n }, (_, i) => array[i] + array[array.length - 1 - i]).concat(...(array.length % 2 ? [array[n]] : []));
        runs--;
    }
    return array;
}
function foldArray6(array, runs) {
    let foldedArray = array;
    for (let i = 0; i < runs; i++) {
        foldedArray = singleFold(foldedArray);
    }
    return foldedArray;
}
function singleFold(array) {
    const middle = Math.ceil(array.length / 2);
    const reversed = array.slice(middle, array.length).reverse().concat(0);
    const normal = array.slice(0, middle);
    return normal.map((num, i) => num + reversed[i]);
}
function foldArray7(array, runs) {
    if (runs === 0)
        return array;
    const hasCenterPoint = array.length % 2 === 1;
    const foldLength = Math.floor(array.length / 2);
    const newArr = [];
    for (let i = 0; i < foldLength; i++) {
        newArr[i] = array[(array.length - 1) - i] + array[i];
    }
    if (hasCenterPoint)
        newArr.push(array[foldLength]);
    return foldArray(newArr, --runs);
}
const solve = (str) => {
    if (!/[bcdfghjklmnpqrstvwxyz]/g.test(str))
        return 0;
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const matchSubs = str
        .match(/[^aeiou]+/g)
        .map((sub) => sub.split(""));
    const valueSubs = matchSubs.map((subArr) => {
        return subArr.map((char) => alphabet.indexOf(char) + 1);
    });
    let allSums = [];
    valueSubs.forEach((sub) => {
        let currSum = sub.reduce((acc, curr) => acc + curr);
        allSums.push(currSum);
    });
    const solution = Math.max(...allSums);
    return solution;
};
const solve6 = (str) => {
    if (!/[bcdfghjklmnpqrstvwxyz]/g.test(str))
        return 0;
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const valueSubs = str
        .match(/[^aeiou]+/g)
        .map((sub) => sub.split(""))
        .map((subArr) => {
        return subArr.map((char) => alphabet.indexOf(char) + 1);
    });
    let allSums = [];
    valueSubs.forEach((sub) => {
        let currSum = sub.reduce((acc, curr) => acc + curr);
        allSums.push(currSum);
    });
    const solution = Math.max(...allSums);
    return solution;
};
function solve2(s) {
    return Math.max(...s
        .split(/[aeiou]/)
        .map(x => [...x].reduce((a, b) => a + b.charCodeAt(0) - 96, 0)));
}
function solve3(s) {
    let highest = 0;
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        if ('aeiou'.includes(s[i])) {
            sum = 0;
            continue;
        }
        sum += s.charCodeAt(i) - 96;
        if (highest < sum) {
            highest = sum;
        }
    }
    return highest;
}
function solve4(s) {
    let res = 0;
    const arr = s.split(/a|e|i|o|u/);
    arr.forEach(subs => {
        let sum = 0;
        for (let i = 0; i < subs.length; i++) {
            sum += (subs.charCodeAt(i) - 96);
        }
        if (sum > res)
            res = sum;
    });
    return res;
}
function solve5(s) {
    return Math.max(...s.replace(/[aeiou]+/g, ' ')
        .split(' ')
        .map(e => e.split('').reduce((prev, current) => prev + current.charCodeAt(0) - 96, 0)));
}
const race = (v1, v2, lead) => {
    const convert = (seconds) => {
        let hour = 0, min = 0, sec = 0;
        if (seconds >= 3600) {
            hour += Math.floor(seconds / 3600);
            seconds = seconds % 3600;
        }
        if (seconds >= 60) {
            min += Math.floor(seconds / 60);
            seconds = seconds % 60;
        }
        sec += seconds;
        return [hour, min, sec];
    };
    const feetPerSec1 = v1 / 3600, feetPerSec2 = v2 / 3600;
    let numSeconds = 0;
    let dist1 = lead;
    let dist2 = 0;
    while (dist2 < dist1) {
        dist1 += feetPerSec1;
        dist2 += feetPerSec2;
        numSeconds += 1;
    }
    const solution = convert(numSeconds - 1);
    return solution;
};
const multiplicationTable = (size) => {
    let solution = [];
    let firstRow = [];
    for (let i = 1; i <= size; i += 1) {
        firstRow.push(i);
    }
    console.log(firstRow);
    for (let i = 1; i <= firstRow.length; i += 1) {
        let nthRow = firstRow.map((num) => {
            return num * (i);
        });
        solution.push(nthRow);
    }
    return solution;
};
const multiplicationTable2 = (size) => {
    const result = [];
    for (let i = 1; i <= size; i++) {
        const resultSubArr = [];
        for (let j = 1; j <= size; j++) {
            resultSubArr.push(i * j);
        }
        result.push(resultSubArr);
    }
    return result;
};
function multiplicationTable3(size) {
    return [...Array(size)].map((_, i) => [...Array(size)].map((_, j) => (i + 1) * (j + 1)));
}
function multiplicationTable4(size) {
    let table = [];
    for (let i = 1; size >= i; i++) {
        let row = [];
        for (let j = 1; size >= j; j++) {
            row.push(i * j);
        }
        table.push(row);
    }
    return table;
}
function multiplicationTable5(size) {
    return new Array(size).fill(null)
        .map((_, i) => new Array(size).fill(null)
        .map((_, j) => (i + 1) * (j + 1)));
}
const cleanString = (str) => {
    let charsArr = [];
    for (let char of str) {
        if (char !== "#")
            charsArr.push(char);
        if (char === "#" && charsArr.length)
            charsArr.pop();
    }
    const solution = charsArr.join("");
    return solution;
};
function cleanString6(s) {
    const re = /(^|[^#])#/;
    return re.test(s) ? cleanString(s.replace(re, '')) : s;
}
function cleanString2(s) {
    return Array.from(s).reduce((a, b) => b == '#' ? a.slice(0, -1) : a.concat(b), '');
}
function cleanString3(s) {
    let stack = [];
    for (const c of s) {
        if (c === '#') {
            stack.pop();
        }
        else {
            stack.push(c);
        }
    }
    return stack.join('');
}
const cleanString4 = (s) => Array.from(s).reduce((acc, char) => char === '#' ? acc.substring(0, acc.length - 1) : acc + char, '');
function cleanString8(s) {
    while (s.indexOf("#") != -1) {
        while (s[0] == "#") {
            s = s.substring(1);
        }
        s = s.replace(/[^#]#/g, "");
    }
    return s;
}
const encryptThis = (str) => {
    if (str.length === 0)
        return "";
    const wordsArr = str.split(" ").map((word) => word.split(""));
    wordsArr.forEach((lettersArr) => {
        lettersArr[0] = lettersArr[0].charCodeAt(0).toString();
        if (lettersArr.length > 2) {
            let secondChar = lettersArr[1];
            let lastChar = lettersArr[lettersArr.length - 1];
            lettersArr[1] = lastChar;
            lettersArr[lettersArr.length - 1] = secondChar;
        }
    });
    const solution = wordsArr
        .map((array) => array.join(""))
        .join((" "));
    return solution;
};
let encryptThis2 = (str) => {
    if (!str)
        return '';
    return str
        .split(' ')
        .map((word) => {
        let first = word[0];
        let second = (word.length > 1) ? word[1] : '';
        let middle = word.slice(2, -1);
        let last = (word.length > 2) ? word[word.length - 1] : '';
        return first.charCodeAt(0) + last + middle + second;
    })
        .join(' ');
};
const encryptThis3 = (str) => str
    .split(' ')
    .map(word => word
    .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
    .replace(/^\w/, letter => letter.charCodeAt(0).toFixed(0)))
    .join(' ');
const encryptThis4 = (str) => {
    return str.replace(/\b(\S)(\S?)(\S*?)(\S?)\b/g, (_, a, b, c, d) => `${a.charCodeAt(0)}${d}${c}${b}`);
};
const encryptThis5 = (str) => {
    return str.split(' ').map((word) => {
        if (word === '')
            return '';
        if (word.length === 1)
            return word.charCodeAt(0).toString();
        if (word.length === 2)
            return (word[0].charCodeAt(0) + word[1]).toString();
        return word[0].charCodeAt(0) + word[word.length - 1] + word.substring(2, word.length - 1) + word[1];
    }).join(' ');
};
const encryptThis6 = (str) => {
    return str
        .split(" ")
        .map((word) => word.replace(/(^\w)(\w?)(\w*?)(\w?$)/, (match, p1, p2, p3, p4) => `${p1.charCodeAt(0)}${p4}${p3}${p2}`))
        .join(" ");
};
const encryptThis7 = (str) => {
    return str.split(' ').map(w => {
        switch (w.length) {
            case 0:
                return '';
            case 1:
                return w.charCodeAt(0);
            case 2:
                return w.charCodeAt(0) + w.charAt(1);
            default:
                return w.charCodeAt(0) + w.charAt(w.length - 1) + w.slice(2, w.length - 1) + w.charAt(1);
        }
    }).join(' ');
};
const meeting = (str) => {
    const namesArr = str.toUpperCase().split(";");
    let solution = "";
    const revNamesArr = namesArr
        .map((fullName) => fullName.split(":"))
        .map((fullName) => fullName.reverse());
    const sortedTest = revNamesArr.sort();
    sortedTest.forEach((fullName) => {
        solution += `(${fullName.join(", ")})`;
    });
    return solution;
};
function meeting2(s) {
    return s.toUpperCase()
        .split(';')
        .map(n => '(' + n.split(':').reverse().join(', ') + ')')
        .sort()
        .join('');
}
const toUpper = (str) => str.toUpperCase();
const stringSorter = (a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
};
const attendeeToString = ({ lastName, firstName }) => `(${toUpper(lastName)}, ${toUpper(firstName)})`;
function meeting3(s) {
    const attendees = s.split(';').map(attendee => {
        const [firstName, lastName] = attendee.split(':');
        return {
            firstName: toUpper(firstName),
            lastName: toUpper(lastName),
        };
    });
    const sortedAttendees = attendees.sort((a, b) => {
        if (a.lastName === b.lastName) {
            return stringSorter(a.firstName, b.firstName);
        }
        else {
            return stringSorter(a.lastName, b.lastName);
        }
    });
    return sortedAttendees.map(x => attendeeToString(x)).join('');
}
function meeting4(s) {
    return s.split(';').map(x => x.split(':').map(x => x.toUpperCase()).reverse().join(', ')).sort().map(x => `(${x})`).join('');
}
class Friend {
    constructor(name) {
        const [firstName, lastName] = name.split(":");
        this.firstName = firstName.toUpperCase();
        this.lastName = lastName.toUpperCase();
    }
    get getFirstName() {
        return this.firstName;
    }
    get getLastName() {
        return this.lastName;
    }
    get getFullName() {
        return `(${this.getLastName}, ${this.getFirstName})`;
    }
}
class FriendGrouped {
    constructor(groups) {
        this.groups = groups;
    }
    sortGroupByKey() {
        this.groups.sort((lhs, rhs) => lhs.key.localeCompare(rhs.key));
    }
    sortFriendsByFirstName() {
        this.groups.forEach(group => group.value.sort((lhs, rhs) => lhs.getFirstName.localeCompare(rhs.getFirstName)));
    }
    toString() {
        let str = "";
        for (const group of this.groups) {
            str += group.value.map(friend => friend.getFullName).join("");
        }
        return str;
    }
}
class FriendsHelper {
    static parse(input) {
        return input.split(";").map(name => new Friend(name));
    }
    static createGroupedFriends(friends) {
        let list = [];
        friends.forEach(friend => {
            let group = list.find(group => group.key === friend.getLastName);
            if (!group) {
                group = {
                    key: friend.getLastName,
                    value: []
                };
                list.push(group);
            }
            group.value.push(friend);
        });
        return new FriendGrouped(list);
    }
}
function meeting5(s) {
    const friends = FriendsHelper.parse(s);
    const groupedFriends = FriendsHelper.createGroupedFriends(friends);
    groupedFriends.sortGroupByKey();
    groupedFriends.sortFriendsByFirstName();
    return groupedFriends.toString();
}
class Attendee2 {
    constructor(_first, _last) {
        this._first = _first;
        this._last = _last;
    }
    static FromInputString(str) {
        const [firstName, lastName] = str.split(':');
        return new Attendee2(firstName, lastName);
    }
    get first() {
        return this._first.toUpperCase();
    }
    get last() {
        return this._last.toUpperCase();
    }
    toString() {
        return `(${this.last}, ${this.first})`;
    }
}
const stringSorter2 = (a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
};
function meeting6(s) {
    const attendees = s.split(';').map(str => Attendee2.FromInputString(str));
    const sortedAttendees = attendees.sort((a, b) => {
        if (a.last === b.last) {
            return stringSorter(a.first, b.first);
        }
        else {
            return stringSorter(a.last, b.last);
        }
    });
    return sortedAttendees.join('');
}
function thirt(n) {
    return 1;
}
const partsSums = (numArr) => {
    numArr.reverse();
    let solution = [];
    let accum = 0;
    numArr.forEach((num) => {
        accum += num;
        solution.push(accum);
    });
    solution.reverse().push(0);
    return solution;
};
function partsSums2(ls) {
    let total = ls.reduce((acc, cur) => acc + cur, 0);
    return [...[total], ...ls.map(num => total -= num)];
}
function partsSums3(ls) {
    let summArr = [0];
    for (let i = ls.length - 1; i >= 0; i--) {
        summArr.push(summArr[summArr.length - 1] + ls[i]);
    }
    return summArr.reverse();
}
function partsSums4(ls) {
    let length = ls.length;
    let total = ls.reduce((prev, curr) => prev + curr, 0);
    ls.unshift(0);
    return ls.map((val, i) => total -= val);
}
function partsSums5(values) {
    let knownTotal = values.reduce((ac, n) => ac + n, 0);
    return values.reduce((output, value) => {
        output.push(knownTotal -= value);
        return output;
    }, [knownTotal]);
}
function partsSums6(ls) {
    return ls.reverse().reduce((acc, n, i) => {
        const a = acc[i];
        acc.push(n + a);
        return acc;
    }, [0]).reverse();
}
const parse = (str) => {
    let solution = [];
    let currVal = 0;
    str.split("").forEach((instr) => {
        switch (instr) {
            case "i":
                currVal++;
                break;
            case "d":
                currVal--;
                break;
            case "s":
                currVal *= currVal;
                break;
            case "o":
                solution.push(currVal);
        }
    });
    return solution;
};
function parse2(data) {
    var result = [];
    var current = 0;
    data.split('').map((c) => {
        switch (c) {
            case 'i':
                current++;
                break;
            case 'd':
                current--;
                break;
            case 's':
                current = current ** 2;
                break;
            case 'o':
                result.push(current);
                break;
        }
    });
    return result;
}
function parse3(data) {
    let v = 0, result = [];
    for (let d of data.split('')) {
        switch (d) {
            case 'i':
                v++;
                break;
            case 'd':
                v--;
                break;
            case 's':
                v *= v;
                break;
            case 'o': result.push(v);
        }
    }
    return result;
}
class G964C {
}
G964C.stockList = (artList, catList) => {
    let solutionArr = [];
    let totalCounter = 0;
    catList.forEach((cat) => {
        let counter = 0;
        artList.forEach((art) => {
            if (art[0] === cat) {
                let stock = Number(art.match(/\d+/g)[0]);
                counter += stock;
            }
        });
        solutionArr.push(`(${cat} : ${counter})`);
        totalCounter += counter;
    });
    const solution = solutionArr.join(" - ");
    return totalCounter
        ? solution
        : "";
};
var b, c;
b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
c = ["A", "B", "C", "D"];
class G964B {
}
G964B.revrot = (str, chunkSize) => {
    if (chunkSize <= 0 || str.length === 0)
        return "";
    let numArr = str.split("").map((el) => parseInt(el));
    console.log(numArr);
    let chunksArr = [];
    for (let i = 0; i < str.length; i += chunkSize) {
        if (numArr.length >= chunkSize) {
            chunksArr.push(numArr.slice(0, chunkSize));
        }
        numArr.splice(0, chunkSize);
    }
    chunksArr.forEach((chunk) => {
        let condition = Number.isInteger(chunk.map((num) => Math.pow(num, 3)).reduce((a, b) => a + b) / 2);
        if (condition) {
            chunk = chunk.reverse();
        }
        else {
            let firstDigit = chunk[0];
            chunk.splice(0, 1);
            chunk.push(firstDigit);
        }
    });
    const solution = chunksArr
        .flat()
        .join("");
    return solution;
};
class G966 {
    static sqInRect(length, width) {
        if (length === width)
            return null;
        let solution = [];
        let descSides = [length, width].sort((a, b) => b - a);
        while (descSides[0] > 0 && descSides[1] > 0) {
            let numberOfSq = Math.floor(descSides[0] / descSides[1]);
            for (let i = 1; i <= numberOfSq; i++) {
                solution.push(descSides[1]);
            }
            let newSide = descSides[0] % descSides[1];
            descSides[0] = newSide;
            descSides.sort((a, b) => b - a);
        }
        return solution;
    }
}
class G966a {
    static sqInRect(l, w) {
        if (l == w)
            return null;
        var sqs = [], tmp;
        while (l) {
            tmp = Math.min(w, l);
            l = Math.max(w, l);
            w = tmp;
            sqs.push(w);
            l -= w;
        }
        return sqs;
    }
}
class G966a1 {
    static sqInRect(l, w) {
        if (l === w)
            return null;
        if (w > l)
            [l, w] = [w, l];
        return [w].concat(G966a1.sqInRect(l - w, w) || w);
    }
}
class G966a2 {
    static sqInRect(l, w) {
        let remainingSize = l * w;
        let shorterSide;
        const insideSqSides = [];
        if (l == w) {
            return null;
        }
        while (remainingSize > 0) {
            shorterSide = Math.min(l, w);
            remainingSize -= Math.pow(shorterSide, 2);
            l = shorterSide;
            w = remainingSize / l;
            insideSqSides.push(shorterSide);
        }
        return insideSqSides;
    }
}
const camelCase = (str) => {
    return str
        ? str
            .trim()
            .split(" ")
            .map((word) => word
            .replace(word[0], word[0].toUpperCase()))
            .join("")
        : "";
};
const camelCase2 = (str) => str
    .split(" ")
    .map((s) => (s ? s[0].toUpperCase() + s.slice(1) : ""))
    .join("");
function camelCase3(str) {
    return str
        .replace(/\b\w/g, (str) => str.toUpperCase())
        .split(" ")
        .join("");
}
function camelCase4(str) {
    return str
        .split(" ")
        .reduce((acc, cur) => acc + cur.charAt(0).toUpperCase() + cur.slice(1), "");
}
function camelCase5(str) {
    return str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
}
const camelCase6 = (str) => str
    .split(" ")
    .map((s) => s.replace(s.charAt(0), s.charAt(0).toUpperCase()))
    .join("");
function camelCase7(str) {
    return str
        ? str
            .trim()
            .split(" ")
            .map((word) => word[0].toUpperCase() + word.substring(1))
            .join("")
        : "";
}
const camelCase8 = (str) => str
    .split(" ")
    .map((x) => { var _a; return (_a = x[0]) === null || _a === void 0 ? void 0 : _a.toUpperCase().concat(x.slice(1)); })
    .join("");
const camelCase9 = (str) => str
    .split(" ")
    .map((word) => word.length ? word[0].toUpperCase() + word.slice(1) : "")
    .join("");
const solution0 = (roman) => {
    const romanValues = {
        I: 1,
        II: 2,
        III: 3,
        IV: 4,
        V: 5,
        VI: 6,
        VII: 7,
        VIII: 8,
        IX: 9,
        X: 10,
        XX: 20,
        XXX: 30,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CC: 200,
        CCC: 300,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000,
        MM: 2000,
        MMM: 3000,
    };
    let result = 0;
    if (roman.indexOf("CM") > -1) {
        result += romanValues.CM;
        roman = roman.replace("CM", "");
    }
    if (roman.indexOf("CD") > -1) {
        result += romanValues.CD;
        roman = roman.replace("CD", "");
    }
    if (roman.indexOf("D") > -1) {
        result += romanValues.D;
        roman = roman.replace("D", "");
    }
    if (roman.indexOf("XC") > -1) {
        result += romanValues.XC;
        roman = roman.replace("XC", "");
    }
    if (roman.indexOf("XL") > -1) {
        result += romanValues.XL;
        roman = roman.replace("XL", "");
    }
    if (roman.indexOf("L") > -1) {
        result += romanValues.L;
        roman = roman.replace("L", "");
    }
    if (roman.indexOf("IX") > -1) {
        result += romanValues.IX;
        roman = roman.replace("IX", "");
    }
    if (roman.indexOf("IV") > -1) {
        result += romanValues.IV;
        roman = roman.replace("IV", "");
    }
    if (roman.indexOf("V") > -1) {
        result += romanValues.V;
        roman = roman.replace("V", "");
    }
    if (roman.match(/M/g))
        result += romanValues.M * roman.match(/M/g).length;
    if (roman.match(/C/g))
        result += romanValues.C * roman.match(/C/g).length;
    if (roman.match(/X/g))
        result += romanValues.X * roman.match(/X/g).length;
    if (roman.match(/I/g))
        result += romanValues.I * roman.match(/I/g).length;
    return result;
};
function solution1(roman) {
    var _a, _b, _c, _d;
    var valRoman = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M",
    };
    var romanVal = {
        I: 1,
        IV: 4,
        V: 4,
        IX: 9,
        x: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000,
    };
    const romanStrVal = {
        I: 1,
        II: 2,
        III: 3,
        IV: 4,
        V: 5,
        VI: 6,
        VII: 7,
        VIII: 8,
        IX: 9,
        X: 10,
        XX: 20,
        XXX: 30,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CC: 200,
        CCC: 300,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000,
        MM: 2000,
        MMM: 3000,
    };
    let result = 0;
    console.log(roman);
    if (roman.indexOf("CM") > -1) {
        result += romanStrVal.CM;
        roman = roman.replace("CM", "");
    }
    if (roman.indexOf("CD") > -1) {
        result += romanStrVal.CD;
        roman = roman.replace("CD", "");
    }
    if (roman.indexOf("D") > -1) {
        result += romanStrVal.D;
        roman = roman.replace("D", "");
    }
    if (roman.indexOf("XC") > -1) {
        result += romanStrVal.XC;
        roman = roman.replace("XC", "");
    }
    if (roman.indexOf("XL") > -1) {
        result += romanStrVal.XL;
        roman = roman.replace("XL", "");
    }
    if (roman.indexOf("L") > -1) {
        result += romanStrVal.L;
        roman = roman.replace("L", "");
    }
    if (roman.indexOf("IX") > -1) {
        result += romanStrVal.IX;
        roman = roman.replace("IX", "");
    }
    if (roman.indexOf("IV") > -1) {
        result += romanStrVal.IV;
        roman = roman.replace("IV", "");
    }
    if (roman.indexOf("V") > -1) {
        result += romanStrVal.V;
        roman = roman.replace("V", "");
    }
    const Ms = (_a = roman.match(/M/g)) === null || _a === void 0 ? void 0 : _a.length;
    if (Ms)
        result += romanStrVal.M * Ms;
    const Cs = (_b = roman.match(/C/g)) === null || _b === void 0 ? void 0 : _b.length;
    if (Cs)
        result += romanStrVal.C * Cs;
    const Xs = (_c = roman.match(/X/g)) === null || _c === void 0 ? void 0 : _c.length;
    if (Xs)
        result += romanStrVal.X * Xs;
    const Is = (_d = roman.match(/I/g)) === null || _d === void 0 ? void 0 : _d.length;
    if (Is)
        result += romanStrVal.I * Is;
    console.log("roman: ", roman);
    return result;
}
const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};
function solution5(roman) {
    let value = 0;
    for (let i = 0; i < roman.length; i++) {
        const current = values[roman[i]];
        const next = values[roman[i + 1]] || 0;
        if (current < next) {
            value -= current;
        }
        else {
            value += current;
        }
    }
    return value;
}
exports.solution5 = solution5;
function solution8(roman) {
    const symbols = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    return roman
        .split("")
        .map((e) => symbols[e])
        .reduce((p, c) => (p < c ? c - p : c + p));
}
function solution11(roman) {
    const symbols = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    return roman
        .split("")
        .map((r, i, arr) => r === "I" && ["V", "X"].includes(arr[i + 1]) ? -1 : symbols[r])
        .reduce((a, b) => a + b);
}
function solution12(roman) {
    const map = new Map([
        ["I", 1],
        ["IV", 4],
        ["V", 5],
        ["IX", 9],
        ["X", 10],
        ["XL", 40],
        ["L", 50],
        ["XC", 90],
        ["C", 100],
        ["CD", 400],
        ["D", 500],
        ["CM", 900],
        ["M", 1000],
    ]);
    let result = 0;
    for (let i = 0; i < roman.length; i++) {
        const twoSymbols = map.get(roman[i] + roman[i + 1]);
        const oneSymbol = map.get(roman[i]);
        if (twoSymbols) {
            i += 1;
        }
        result += twoSymbols || oneSymbol || 0;
    }
    return result;
}
function solution13(roman) {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        CM: 900,
        CD: 400,
        XC: 90,
        XL: 40,
        IX: 9,
        IV: 4,
    };
    return roman
        .replace(/CM|CD|XC|XL|IX|IV|M|D|C|L|X|V|I/g, (r) => `,${values[r]},`)
        .split(/,+/)
        .reduce((sum, n) => sum + Number(n), 0);
}
function solution14(roman) {
    const initial = 0;
    const numbers = roman.split("").map((letter) => {
        switch (letter) {
            case "I":
                return 1;
            case "V":
                return 5;
            case "X":
                return 10;
            case "L":
                return 50;
            case "C":
                return 100;
            case "D":
                return 500;
            case "M":
                return 1000;
            default:
                return 0;
        }
    });
    const result = numbers.reduce(function (valorAnterior, valorActual, indice) {
        if (indice + 1 === numbers.length ||
            valorActual >= numbers[indice + 1]) {
            return valorAnterior + valorActual;
        }
        else {
            return valorAnterior - valorActual;
        }
    }, initial);
    return result;
}
const solution2 = (num) => {
    let roman = "";
    if (num >= 1000) {
        const v1000 = (num / 1000) | 0;
        console.log("1000: " + v1000);
        num = num % 1000;
        roman += "M".repeat(v1000);
    }
    if (num >= 900) {
        num = num % 900;
        roman += "CM";
    }
    if (num >= 500) {
        num = num % 500;
        roman += "D";
    }
    if (num >= 400) {
        num = num % 400;
        roman += "CD";
    }
    if (num >= 100) {
        const v100 = (num / 100) | 0;
        console.log("100: " + v100);
        num = num % 100;
        roman += "C".repeat(v100);
    }
    if (num >= 90) {
        num = num % 90;
        roman += "XC";
    }
    if (num >= 50) {
        num = num % 50;
        roman += "L";
    }
    if (num >= 40) {
        num = num % 40;
        roman += "XL";
    }
    if (num >= 10) {
        const v10 = (num / 10) | 0;
        console.log("10: " + v10);
        num = num % 10;
        roman += "X".repeat(v10);
    }
    if (num >= 9) {
        num = num % 9;
        roman += "IX";
    }
    if (num >= 5) {
        num = num % 5;
        roman += "V";
    }
    if (num >= 4) {
        num = num % 4;
        roman += "IV";
    }
    if (num >= 1) {
        const v1 = (num / 1) | 0;
        num = num % 1;
        roman += "I".repeat(v1);
    }
    return num > 3999 ? "invalid input" : roman;
};
function solution4(number) {
    const nums = [
        1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1,
    ];
    const romans = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I",
    ];
    let result = "";
    for (let i = 0; i < nums.length; i++) {
        while (number >= nums[i]) {
            number -= nums[i];
            result += romans[i];
        }
    }
    return result;
}
function solution6(n) {
    let thousands = ["", "M", "MM", "MMM"];
    let hundreds = [
        "",
        "C",
        "CC",
        "CCC",
        "CD",
        "D",
        "DC",
        "DCC",
        "DCCC",
        "CM",
    ];
    let tens = [
        "",
        "X",
        "XX",
        "XXX",
        "XL",
        "L",
        "LX",
        "LXX",
        "LXXX",
        "XC",
    ];
    let ones = [
        "",
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
    ];
    let res = "";
    res += thousands[Math.floor(n / 1000)];
    res += hundreds[Math.floor(n / 100) % 10];
    res += tens[Math.floor(n / 10) % 10];
    res += ones[n % 10];
    return res;
}
function solution7(number) {
    let returnString = "";
    const table = [
        { key: "M", value: 1000 },
        { key: "CM", value: 900 },
        { key: "D", value: 500 },
        { key: "CD", value: 400 },
        { key: "C", value: 100 },
        { key: "XC", value: 90 },
        { key: "L", value: 50 },
        { key: "XL", value: 40 },
        { key: "X", value: 10 },
        { key: "IX", value: 9 },
        { key: "V", value: 5 },
        { key: "IV", value: 4 },
        { key: "I", value: 1 },
    ];
    while (true) {
        const v = table.filter((v) => v.value <= number)[0];
        if (v == null) {
            break;
        }
        if (v !== null) {
            if (v.value <= number) {
                returnString += v.key;
                number = number - v.value;
            }
        }
    }
    return returnString;
}
const wave = (str) => {
    const strArr = str.split("");
    let solution = [];
    strArr.forEach((letter, idx) => {
        let currentWaveArr = [...strArr];
        if (letter !== " ") {
            currentWaveArr[idx] = currentWaveArr[idx].toUpperCase();
            solution.push(currentWaveArr.join(""));
        }
    });
    return solution;
};
function wave3(str) {
    const result = [];
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === " ") {
            continue;
        }
        result.push(str.substring(0, i) +
            str.charAt(i).toUpperCase() +
            str.substring(i + 1));
    }
    return result;
}
function wave5(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let k = str.split("");
        k[i] = k[i].toUpperCase();
        if (str != k.join("")) {
            arr.push(k.join(""));
        }
    }
    return arr;
}
function wave7(str) {
    let finalArray = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ")
            continue;
        let letters = str.split("");
        letters[i] = str[i].toUpperCase();
        finalArray.push(letters.join(""));
    }
    return finalArray;
}
const bouncingBall = (dropHeight, bounceRate, viewHeight) => {
    if (dropHeight <= 0 ||
        bounceRate <= 0 ||
        bounceRate >= 1 ||
        viewHeight <= 0 ||
        viewHeight >= dropHeight) {
        return -1;
    }
    let actualBounce = dropHeight * bounceRate;
    let counter = 1;
    while (actualBounce > viewHeight) {
        actualBounce = actualBounce * bounceRate;
        counter += 2;
    }
    return counter;
};
function bouncingBall2(h, bounce, window) {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
        return -1;
    }
    return 2 * Math.ceil(Math.log(window / h) / Math.log(bounce)) - 1;
}
function bouncingBall3(h, bounce, window) {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
        return -1;
    }
    return 2 + bouncingBall3(h * bounce, bounce, window);
}
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
        return a1.filter((a) => a2.some((b) => b.includes(a))).sort();
    }
}
class G964a3 {
    static inArray(a1, a2) {
        return a1.filter((x) => a2.join().indexOf(x) > -1).sort();
    }
}
class G964a4 {
    static inArray(a1, a2) {
        const source = a2.join("#");
        return a1.filter((item) => source.indexOf(item) !== -1).sort();
    }
}
class G964a5 {
    static inArray(a1, a2) {
        return a1.sort().filter((s) => a2.find((s2) => s2.includes(s)));
    }
}
const comp = (a1, a2) => {
    return a1 === null || a2 === null
        ? false
        : String([...a1].sort((a, b) => a - b).map((el) => Math.pow(el, 2))) ===
            String([...a2].sort((a, b) => a - b));
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
var b2 = [
    11 * 21,
    121 * 121,
    144 * 144,
    19 * 19,
    161 * 161,
    19 * 19,
    144 * 144,
    19 * 19,
];
function comp3(a1, a2) {
    if (!(a1 && a2) || a1.length !== a2.length)
        return false;
    return (a1
        .map((x) => x * x)
        .sort()
        .toString() === a2.sort().toString());
}
function comp4(a1, a2) {
    return (!!a1 &&
        !!a2 &&
        a1
            .map((x) => x * x)
            .sort()
            .join() == a2.sort().join());
}
const longestConsec = (strArr, numWords) => {
    if (strArr.length === 0 || numWords < 1 || numWords > strArr.length) {
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
    return strarr
        .map((currentValue, index, array) => array.slice(index, index + k).join(""))
        .reduce((acc, cur) => (cur.length > acc.length ? cur : acc));
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
    let max = "";
    const n = strarr.length;
    for (let i = 0; i <= n - k && k > 0 && k <= n; i++) {
        const newStr = strarr.slice(i, i + k).join("");
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
    return total < 0 ? -1 : base - 1;
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
    return sum === m ? i - 1 : -1;
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
    const digitArr = String(num).split("").map(Number);
    let sum = 0;
    digitArr.forEach((digit, idx) => {
        sum += Math.pow(digit, idx + pow);
    });
    console.log("sum: " + sum);
    return sum % num === 0 ? sum / num : -1;
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
    braces = braces.replace("()", "");
    braces = braces.replace("[]", "");
    braces = braces.replace("{}", "");
    if (braces.length === 0)
        return true;
    if (braces.length === count)
        return false;
    return validBraces(braces);
}
function validBraces3(braces) {
    let tempBraces = braces;
    for (let i = 0; i <= braces.length / 2; i++) {
        tempBraces = tempBraces.replace(/(\(\))|(\[\])|(\{\})/g, "");
    }
    return !tempBraces;
}
function validBrace4(braces) {
    [...braces].forEach(() => (braces = braces
        .replace("()", "")
        .replace("{}", "")
        .replace("[]", "")));
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
    const alphabet = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
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
    return word
        .split("")
        .reduce((sum, char) => sum + char.charCodeAt(0) - VALUE_OFFSET, 0);
};
const high2 = (str) => {
    return str
        .split(" ")
        .reduce((max, word) => (calcValue(word) > calcValue(max) ? word : max));
};
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const getLetterScore = (str) => alphabet.indexOf(str) + 1;
const getWordScore = (str) => str
    .split("")
    .map(getLetterScore)
    .reduce((acc, n) => acc + n, 0);
const high3 = (str) => str
    .split(" ")
    .reduce((acc, value) => getWordScore(value) > getWordScore(acc) ? value : acc);
const towerBuilder = (nFloors) => {
    const absoluteWidth = nFloors + (nFloors - 1);
    const building = [];
    for (let floors = 1, blocks = 1; floors <= nFloors; floors++, blocks += 2) {
        let floorStr = "";
        let leadTrailSpaces = (absoluteWidth - blocks) / 2;
        floorStr =
            " ".repeat(leadTrailSpaces) +
                "*".repeat(blocks) +
                " ".repeat(leadTrailSpaces);
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
        result.push(" ".repeat(n - i) + "*".repeat(i * 2 - 1) + " ".repeat(n - i));
    }
    return result;
};
const towerBuilder5 = (n) => {
    return new Array(n).fill("").map((_, i) => {
        let spaces = " ".repeat(n - i - 1);
        return spaces + "*".repeat(2 * i + 1) + spaces;
    });
};
const findMissingLetter = (arr) => {
    let solution = "";
    const alphabet = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    const startIdx = alphabet.indexOf(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        if (alphabet[startIdx + i] !== arr[i]) {
            solution = alphabet[startIdx + i];
            break;
        }
    }
    return solution;
};
findMissingLetter(["a", "b", "c", "d", "f"]);
findMissingLetter(["O", "Q", "R", "S"]);
function findMissingLetter3(array) {
    const isUpper = array[0] == array[0].toUpperCase();
    let expectedLetter = "";
    for (const letter of array) {
        if (expectedLetter != "" && letter != expectedLetter)
            return expectedLetter;
        expectedLetter = String.fromCharCode(letter.charCodeAt(0) + 1);
    }
    throw "Nothing missing";
}
function findMissingLetter4(letters) {
    const first = letters.shift().charCodeAt(0) + 1;
    const offset = letters.findIndex((l, i) => l.charCodeAt(0) !== i + first);
    return String.fromCharCode(first + offset);
}
function findMissingLetter5(array) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet
        .substr(alphabet.indexOf(array[0]))
        .split("")
        .find((curr, idx) => curr != array[idx]);
}
const findUniq = (arr) => {
    const arrLength = arr.length;
    let solution = 0;
    if (arr[0] !== arr[1] && arr[0] !== arr[2]) {
        solution = arr[0];
    }
    if (arr[arrLength - 1] !== arr[arrLength - 2] &&
        arr[arrLength - 1] !== arr[arrLength - 3]) {
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
    return arr.find((y) => y != x);
}
function findUniq5(arr) {
    return arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
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
    const digitArr = num.toString().split("").map(Number);
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
    str.split("").forEach((x) => (acc += Math.pow(+x, str.length)));
    return acc === value;
}
function narcissistic3(value) {
    const digits = String(value).split("");
    return (digits.reduce((acc, current) => acc + Math.pow(Number(current), digits.length), 0) === value);
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
const tribonacci4 = ([a, b, c], n) => (n < 1 ? [] : [a].concat(tribonacci([b, c, a + b + c], n - 1)));
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
        console.table({
            current: current,
            sideSum: sideSum,
            counter: counterLeft,
        });
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
    return words
        .split(" ")
        .sort((a, b) => +a.match(/\d/) - +b.match(/\d/))
        .join(" ");
}
function order3(words) {
    return words
        .split(" ")
        .sort((l, r) => +/\d/.exec(l)[0] - +/\d/.exec(r)[0])
        .join(" ");
}
const order4 = (words) => {
    return words
        .split(" ")
        .sort((a, b) => +a.replace(/\D/g, "") - +b.replace(/\D/g, ""))
        .join(" ");
};
const isValidWalk = (directions) => {
    const counterObj = {};
    directions.forEach((dir) => (counterObj[dir] = (counterObj[dir] || 0) + 1));
    return directions.length === 10
        ? counterObj.n === counterObj.s && counterObj.e === counterObj.w
        : false;
};
isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]);
isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]);
function isValidWalk2(walk) {
    if (walk.length !== 10)
        return false;
    if (walk.filter((e) => e === "n").length !==
        walk.filter((e) => e === "s").length)
        return false;
    if (walk.filter((e) => e === "e").length !==
        walk.filter((e) => e === "w").length)
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
            case "n":
                coordinates.x++;
                break;
            case "s":
                coordinates.x--;
                break;
            case "e":
                coordinates.y++;
                break;
            case "w":
                coordinates.y--;
                break;
            default:
                break;
        }
    }
    return !coordinates.x && !coordinates.y;
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
        .split("")
        .map((a, i, w) => {
        return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
        .join("");
}
function duplicateEncode3(word) {
    word = word.toLowerCase();
    let countObj = {};
    for (let char of word) {
        let count = countObj[char] || 0;
        countObj[char] = ++count;
    }
    let result = "";
    for (let char of word) {
        result += countObj[char] > 1 ? ")" : "(";
    }
    return result;
}
function duplicateEncode4(word) {
    const chars = word.toLowerCase().split("");
    return chars
        .map((char) => (chars.filter((c) => c === char).length > 1 ? ")" : "("))
        .join("");
}
function duplicateEncode5(word) {
    return word
        .split("")
        .map((value) => (word.match(new RegExp(`[${value}]`, "giu")) || []).length > 1
        ? ")"
        : "(")
        .join("");
}
const duplicateCount = (text) => {
    const counterObj = {};
    text.split("")
        .map((letter) => letter.toLowerCase())
        .forEach((num) => (counterObj[num] = (counterObj[num] || 0) + 1));
    const duplicatesArr = Object.entries(counterObj).filter(([key, value]) => value > 1);
    return duplicatesArr.length;
};
function duplicateCount3(text) {
    const values = text.toLowerCase();
    const distinctValues = [...new Set(values)];
    const count = (s) => values.split(s).length - 1 > 1;
    return distinctValues.filter((value) => count(value)).length;
}
function duplicateCount4(text) {
    let array = text.toLowerCase().split("");
    return [...new Set(array.filter((e, i) => array.indexOf(e) !== i))].length;
}
function duplicateCount5(text) {
    return new Set(text.toLowerCase().match(/(.)(?=.*\1)/gi) || []).size;
}
const findOutlier = (ints) => {
    const odds = ints.filter((num) => Math.abs(num) % 2 === 1);
    const evens = ints.filter((num) => Math.abs(num) % 2 === 0);
    return odds.length > 1 ? evens[0] : odds[0];
};
function findOutlier2(integers) {
    if (integers.slice(0, 3).filter((i) => i % 2 !== 0).length > 1) {
        return integers.find((v) => v % 2 === 0) || 0;
    }
    else {
        return integers.find((v) => v % 2 !== 0) || 0;
    }
}
exports.findOutlier2 = findOutlier2;
function findOutlier3(integers) {
    const odds = integers.filter((v) => v % 2);
    const evens = integers.filter((v) => !(v % 2));
    return odds.length === 1 ? odds[0] : evens[0];
}
exports.findOutlier3 = findOutlier3;
const countBits = (num) => {
    const bitArr = num.toString(2).match(/1/g);
    return bitArr === null ? 0 : bitArr.length;
};
function countBits2(n) {
    return n.toString(2).replace(/0/g, "").length;
}
exports.countBits2 = countBits2;
function countBits3(n) {
    return n
        .toString(2)
        .split("")
        .filter((c) => c === "1").length;
}
exports.countBits3 = countBits3;
function countBits4(n) {
    return n.toString(2).split("").map(Number).filter(Boolean).length;
}
exports.countBits4 = countBits4;
function countBits5(n) {
    return n.toString(2).split("1").length - 1;
}
exports.countBits5 = countBits5;
function countBits6(n) {
    return n.toString(2).replace(/0/gi, "").length;
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
    return words.replace(/[a-z]{5,}/gi, (s) => s.split("").reverse().join(""));
}
const findOdd = (arr) => {
    const counter = {};
    arr.forEach((num) => (counter[num] = (counter[num] || 0) + 1));
    const oddTimesArr = Object.entries(counter).filter(([key, value]) => value % 2 > 0);
    return Number(oddTimesArr[0][0]);
};
const findOdd2 = (arr) => {
    const counter = {};
    arr.forEach((num) => (counter[num] = (counter[num] || 0) + 1));
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
