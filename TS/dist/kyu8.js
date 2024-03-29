"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countSheeps = exports.basicOp = exports.greet3 = exports.max3 = exports.min3 = exports.max2 = exports.min2 = exports.expressionsMatter6 = exports.name = exports.howManyLightsabersDoYouOwn5 = void 0;
function makeUpperCase(str) {
    let newStr;
    const map = {
        a: 'A',
        b: 'B',
        c: 'C',
        d: 'D',
        e: 'E',
        f: 'F',
        g: 'G',
        h: 'H',
        i: 'I',
        j: 'J',
        k: 'K',
        l: 'L',
        m: 'M',
        n: 'N',
        o: 'O',
        p: 'P',
        q: 'Q',
        r: 'R',
        s: 'S',
        t: 'T',
        u: 'U',
        v: 'V',
        w: 'W',
        x: 'X',
        y: 'Y',
        z: 'Z'
    };
    return str.split('').map(char => map[char] || char).join('');
}
const var1Boolean = true;
console.log(var1Boolean);
const var2Decimal = 13;
console.log(var2Decimal);
const var2Hex = parseInt("f00d", 16);
console.log(var2Hex);
const var4Binary = parseInt("111111", 2);
console.log(var4Binary);
const var5Octal = parseInt("0744", 8);
console.log(var5Octal);
const var6String = "Hello, world!";
console.log(var6String);
const var7Array = [1, "test", { a: 3 }, 4, 5];
console.log(var7Array);
const var8NumericArray = [1, 2, 3, 4, 5];
console.log(var8NumericArray);
const var9Tuple = ["key", 12345];
console.log(var9Tuple);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
const var10Enum = Color.Blue;
console.log(var10Enum);
const var11ArrayOfAny = [1, "test", { a: 3 }, 4, 5];
console.log(var11ArrayOfAny);
const var12VoidFunction = () => {
    console.log("void");
};
const voidVar = var12VoidFunction();
console.log(voidVar);
const var13Null = null;
console.log(var13Null);
const var14Undefined = undefined;
console.log(var14Undefined);
const var15NeverFunction = () => {
    throw new Error();
};
const arr2bin = (arr) => {
    return arr
        .filter((el) => typeof el === "number")
        .reduce((a, b) => a + b, 0)
        .toString(2);
};
function arr2bin2(arr) {
    return arr
        .filter((x) => typeof x == "number")
        .reduce((x, y) => x + y, 0)
        .toString(2);
}
function arr2bin3(arr) {
    return arr
        .map((val) => (typeof val !== "number" ? 0 : val))
        .reduce((curr, acc) => curr + acc, 0)
        .toString(2);
}
const htmlspecialchars = (formData) => {
    const chars = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "&": "&amp;",
    };
    return formData.replace(/[<>"&]/g, (key) => chars[key]);
};
function htmlspecialchars2(formData) {
    return formData
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}
function htmlspecialchars4(formData) {
    console.log(formData.split(""));
    formData = formData
        .split("")
        .map(function (char) {
        console.log(char);
        if (char === "<")
            return "&lt;";
        if (char === ">")
            return "&gt;";
        if (char === '"')
            return "&quot;";
        if (char === "&")
            return "&amp;";
        return char;
    })
        .join("");
    console.log(formData);
    return formData;
}
function htmlspecialchars7(formData) {
    var rep1 = /</gi;
    var rep2 = />/gi;
    var rep3 = /"/gi;
    var rep4 = /&/gi;
    var formData2 = formData.replace(rep4, "&amp;");
    formData = formData2.replace(rep1, "&lt;");
    formData2 = formData.replace(rep2, "&gt;");
    formData = formData2.replace(rep3, "&quot;");
    formData.trim;
    return formData;
}
function htmlspecialchars8(formData) {
    const char = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "&": "&amp;",
    };
    return formData.replace(/./g, (c) => char[c] || c);
}
const iceBrickVolume = (radius, bottleLength, rimLength) => {
    const sqSide = Math.sqrt(Math.pow(radius, 2) * 2);
    return Math.round(Math.pow(sqSide, 2) * (bottleLength - rimLength));
};
const iceBrickVolume2 = (radius, bottleLength, rimLength) => {
    return (bottleLength - rimLength) * 2 * radius ** 2;
};
function subtractSum(n) {
    return "hello";
}
const SafeInteger = (n) => {
    return n <= Number.MAX_SAFE_INTEGER;
};
const SafeInteger2 = Number.isSafeInteger;
function SafeInteger3(n) {
    return Number.isSafeInteger(n) ? true : false;
}
function SafeInteger4(n) {
    return n < Number.MAX_SAFE_INTEGER && n > Number.MIN_SAFE_INTEGER
        ? true
        : false;
}
const bigToSmall = (arr) => {
    return arr
        .reduce((acc, curr) => acc.concat(curr), [])
        .sort((a, b) => b - a)
        .join(">");
};
function bigToSmall2(arr) {
    return []
        .concat(...arr)
        .sort((a, b) => b - a)
        .join(">");
}
function bigToSmall3(arr) {
    return arr
        .flat()
        .sort((a, b) => b - a)
        .join(">");
}
const bigToSmall4 = (arr) => arr
    .flat(1)
    .sort((a, b) => a - b)
    .reverse()
    .join(">");
function isReallyNaN(val) {
    console.log(val === val);
    return Number.isNaN(val);
}
const isReallyNaN2 = ($) => typeof $ === "number" && isNaN($);
function isReallyNaN3(val) {
    return Object.is(NaN, val);
}
function isReallyNaN4(val) {
    return Number.isNaN(val);
}
const isReallyNaN5 = (val) => String(val) == "NaN" && typeof val == typeof 0;
function isReallyNaN6(val) {
    let answer;
    console.log(val);
    console.log(isNaN(val));
    if (!isNaN(val) ||
        val === undefined ||
        typeof val === "string" ||
        typeof val !== "number") {
        answer = false;
    }
    else {
        answer = true;
    }
    return answer;
}
function isReallyNaN7(val) {
    return isNaN(val) && typeof val == "number";
}
function isReallyNaN8(val) {
    return typeof val === "number" && val !== 0 && !Boolean(val);
}
class God {
    static create() {
    }
}
const parseF = (str) => {
    return str[0].match(/\d/) ? parseFloat(str) : null;
};
function parseF3(s) {
    return isNaN(parseFloat(s)) ? null : parseFloat(s);
}
function parseF4(s) {
    const number = +s;
    if (number == null || Number.isNaN(number)) {
        return null;
    }
    return +number;
}
function parseF5(s) {
    let parsed = parseFloat(s);
    return Object.is(NaN, parsed) ? null : parsed;
}
function parseF6(s) {
    return +s === +s ? +s : null;
}
const sixToast = (numToast) => {
    const MAX_NUM_TOAST = 6;
    return Math.abs(MAX_NUM_TOAST - numToast);
};
function sixToast2(num) {
    return Math.abs(6 - num);
}
function sixToast4(num) {
    return num === 3 ? 3 : num - 6;
}
const sakuraFall = (velocity) => {
    const HEIGHT = 400;
    return velocity <= 0 ? 0 : HEIGHT / velocity;
};
const shark = (pontDist, sharkDist, youSpeed, sharkSpeed, dolphin) => {
    const yourTime = pontDist / youSpeed;
    let sharkTime = dolphin
        ? sharkDist / (sharkSpeed / 2)
        : sharkDist / sharkSpeed;
    return yourTime < sharkTime ? "Alive!" : "Shark Bait!";
};
const shark2 = (pD, sD, yS, sS, d) => (pD / yS < (sD / sS) * (d ? 2 : 1) ? "Alive!" : "Shark Bait!");
const shark3 = (a, b, c, d, e) => (a / c < b / (e ? d / 2 : d) ? "Alive!" : "Shark Bait!");
const cubeChecker = (volume, side) => {
    console.log(volume, side);
    return volume > 0 && side > 0 ? volume === Math.pow(side, 3) : false;
};
function cubeChecker2(volume, side) {
    return volume > 0 ? volume === side ** 3 : false;
}
function cubeChecker3(volume, side) {
    return volume > 0 && volume == side ** 3;
}
function cubeChecker4(volume, side) {
    if (Math.pow(side, 3) === volume && volume > 0 && side > 0) {
        return true;
    }
    else {
        return false;
    }
}
function cubeChecker5(volume, side) {
    return volume / side ** 3 === 1;
}
function cubeChecker6(volume, side) {
    const [l, w, h] = [side, side, side];
    return volume == l * w * h && side != 0;
}
const digit = (digit) => {
    const pattern = /\d/;
    return digit === "" || digit.length > 1 ? false : pattern.test(digit);
};
const isAllDigits = (digit) => {
    if (digit === "")
        return false;
    const pattern = /\d/;
    const isDigit = (str) => {
        return pattern.test(str);
    };
    return digit.split("").every(isDigit);
};
const a1 = "dev", b1 = "Lab";
const name1 = a1 + b1;
const printArray = (array) => {
    return String(array);
};
const printArray2 = ($) => $.join(",");
function printArray3(array) {
    return array.map((el) => el.toString()).join(",");
}
function printArray4(array) {
    return array ? [...array].join(",") : "";
}
const usdcny = (usd) => {
    const RATE = 6.75;
    let cny = (usd * RATE).toFixed(2);
    return `${cny} Chinese Yuan`;
};
let numNoDecimals = 1;
let numWithDecimals = numNoDecimals.toFixed(2);
function usdcny2(usd) {
    return `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
}
var sunday = [
    6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
    7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478,
    6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381,
    5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032,
    9871, 5990, 6309, 7825,
], monday = [
    9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719,
    6648, 8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932,
    7360, 9221, 5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105,
    9769, 9679, 7842, 7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098,
    6099, 5828, 7217, 9387,
], tuesday = [
    8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292,
    7552, 5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758,
    8415, 7313, 7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684,
    8793, 8116, 8493, 5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756,
    5717, 7555, 9447, 7703,
], wednesday = [
    6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102, 5047,
    6601, 8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031,
    8710, 5182, 9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652,
    5783, 7698, 9492, 6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357,
    7378, 9598, 5405, 9493,
], thursday = [
    6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197,
    9866, 6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752,
    8695, 8402, 9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063,
    6083, 7383, 7548, 5066, 7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858,
    5360, 6638, 8012, 8701,
], friday = [
    5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589,
    6362, 6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473,
    5663, 9501, 9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072,
    8942, 6859, 5617, 5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455,
    8720, 5725, 6960, 5127,
], saturday = [
    5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354,
    8943, 5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625,
    7795, 7003, 5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242,
    9585, 9649, 9838, 7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184,
    7960, 9455, 5633, 9085,
];
var stairs = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];
const stairsIn20 = (stairs) => {
    let yearTotal = 0;
    stairs.forEach((day) => {
        let subTotal = day.reduce((prev, curr) => prev + curr);
        yearTotal += subTotal;
    });
    return yearTotal * 20;
};
const nextId = (ids) => {
    const sortedIds = [...new Set([...ids])].sort((a, b) => a - b);
    if (sortedIds[0] > 0)
        return 0;
    let solution = 0;
    for (let i = 0; i < sortedIds.length; i++) {
        if (sortedIds[i] + 1 !== sortedIds[i + 1]) {
            solution = sortedIds[i] + 1;
            break;
        }
    }
    return solution;
};
function nextId2(ids) {
    let i = 0;
    while (ids.includes(i)) {
        i++;
    }
    return i;
}
function nextId3(ids) {
    const idsSet = new Set(ids);
    let i = 0;
    while (idsSet.has(i)) {
        i += 1;
    }
    return i;
}
function nextId4(ids) {
    for (let i = 0;; i++)
        if (!ids.includes(i))
            return i;
}
function nextId5(ids) {
    let s = new Set(ids.sort());
    for (let i = 0; i < s.size; i++) {
        if (!s.has(i))
            return i;
    }
    return s.size;
}
const remove1 = (str) => {
    return str.replace(/!/g, "").concat("!");
};
function remove13(s) {
    return (s
        .split("")
        .filter((c) => c !== "!")
        .join("") + "!");
}
const remove15 = (s) => `${s.replace(/!/g, "")}!`;
function remove16(s) {
    let answer = s.split("!").join("");
    return answer.concat("!");
}
const howManyLightsabersDoYouOwn = (name) => {
    if (!name)
        return 0;
    return name === "Zach" ? 18 : 0;
};
const howManyLightsabersDoYouOwn2 = (name) => name === "Zach" ? 18 : 0;
function howManyLightsabersDoYouOwn3(name) {
    return name && name == "Zach" ? 18 : 0;
}
function howManyLightsabersDoYouOwn4(name) {
    if (name != null && typeof name === "string" && name.includes("Zach")) {
        return 18;
    }
    return 0;
}
var data = {
    name: "Zach",
    AmountOfLightsabers: 18,
};
function howManyLightsabersDoYouOwn5(name) {
    if (name == data.name) {
        return data.AmountOfLightsabers;
    }
    else {
        return 0;
    }
}
exports.howManyLightsabersDoYouOwn5 = howManyLightsabersDoYouOwn5;
function howManyLightsabersDoYouOwn6(name) {
    if (name == null || name == undefined || name.length == 0)
        return 0;
    if (name.length == 4 && name == "Zach")
        return 18;
    else
        return 0;
}
function howManyLightsabersDoYouOwn7(name) {
    return /Zach/.test(name) ? 18 : 0;
}
const squareArea = (fractCirc) => {
    return Number(Math.pow((fractCirc * 2) / Math.PI, 2).toFixed(2));
};
const squareArea2 = (num) => {
    let rad = (num * 2) / Math.PI;
    return rad * rad;
};
const flip = (dir, arr) => {
    return dir === "R" ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
};
const flip2 = (dir, arr) => arr.sort((a, b) => (dir === "R" ? a - b : b - a));
function flip3(dir, arr) {
    return arr.sort(dir == "R" ? (a, b) => a - b : (a, b) => b - a);
}
function flip4(dir, arr) {
    return arr.sort((a, b) => {
        return dir === "R" ? (a < b ? -1 : 1) : a > b ? -1 : 1;
    });
}
function flip5(dir, arr) {
    arr.sort((a, b) => a - b);
    if (dir === "R") {
        return arr;
    }
    else {
        return arr.reverse();
    }
}
function flip6(dir, arr) {
    switch (dir) {
        case "R":
            return arr.sort((n1, n2) => n1 - n2);
        case "L":
            return arr.sort((n1, n2) => n2 - n1);
        default:
            return [];
    }
}
const isPalindrome = (line) => {
    const strLine = String(line);
    const strLineReverse = strLine.split("").reverse().join("");
    return strLine === strLineReverse;
};
const isPalindrome2 = (line) => line === line.split("").reverse().join("");
function isPalindrome3(line) {
    let result = true;
    for (let i = 0; i < line.length / 2; i++) {
        if (line[i] !== line[line.length - 1 - i]) {
            result = false;
            break;
        }
    }
    return result;
}
function isPalindrome4(line) {
    return line
        .split("")
        .every((el, idx) => el === line.charAt(line.length - idx - 1));
}
let isPalindrome5 = (line) => line === [...line].reverse().join("");
function isPalindrome6(line) {
    return String(line) === String(line).split("").reverse().join("");
}
function isPalindrome7(line) {
    return line == [...line].reverse().join("");
}
const plural = (n) => {
    return n !== 1;
};
function plural2(n) {
    return n === 1 ? false : true;
}
function plural3(n) {
    if (n !== 1) {
        return true;
    }
    else {
        return false;
    }
}
const main = (verb, noun) => {
    return verb.concat(noun);
};
function main2(verb, noun) {
    return verb + noun;
}
const main3 = (verb, noun) => `${verb}${noun}`;
const main4 = Function.prototype.call.bind(String.prototype.concat);
function main5(verb, noun) {
    return `${verb.trim()} ${noun.trim()}`;
}
const distinct = (arr) => {
    return Array.from(new Set(arr));
};
const distinct2 = (ﬂ) => [...new Set(ﬂ)];
const distinct3 = (a) => {
    return a.filter((e, i) => a.lastIndexOf(e) === i);
};
const distinct4 = (a) => {
    return a.filter((el, idx) => a.indexOf(el) === a.indexOf(el, idx));
};
const distinct5 = (a) => {
    return [...new Set([...a])];
};
const getDrinkByProfession = (profession) => {
    const lowerCaseProf = profession.toLowerCase();
    let drink = "";
    switch (lowerCaseProf) {
        case "jabroni":
            drink = "Patron Tequila";
            break;
        case "school counselor":
            drink = "Anything with Alcohol";
            break;
        case "programmer":
            drink = "Hipster Craft Beer";
            break;
        case "bike gang member":
            drink = "Moonshine";
            break;
        case "politician":
            drink = "Your tax dollars";
            break;
        case "rapper":
            drink = "Cristal";
            break;
        default:
            drink = "Beer";
    }
    return drink;
};
var params = {};
params["jabroni"] = "Patron Tequila";
params["school counselor"] = "Anything with Alcohol";
params["programmer"] = "Hipster Craft Beer";
params["bike gang member"] = "Moonshine";
params["politician"] = "Your tax dollars";
params["rapper"] = "Cristal";
function getDrinkByProfession3(profession) {
    var key = profession.toLowerCase();
    if (params[key] !== undefined) {
        return params[key];
    }
    return "Beer";
}
function getDrinkByProfession5(profession) {
    switch (profession.toLowerCase()) {
        case "jabroni":
            return "Patron Tequila";
        case "school counselor":
            return "Anything with Alcohol";
        case "programmer":
            return "Hipster Craft Beer";
        case "bike gang member":
            return "Moonshine";
        case "politician":
            return "Your tax dollars";
        case "rapper":
            return "Cristal";
        default:
            return "Beer";
    }
}
function capitalize(profession) {
    const words = profession.split(" ");
    return words
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}
function getDrinkByProfession6(profession) {
    switch (capitalize(profession)) {
        case "Jabroni":
            return "Patron Tequila";
        case "School Counselor":
            return "Anything with Alcohol";
        case "Programmer":
            return "Hipster Craft Beer";
        case "Bike Gang Member":
            return "Moonshine";
        case "Politician":
            return "Your tax dollars";
        case "Rapper":
            return "Cristal";
        default:
            return "Beer";
    }
}
function getDrinkByProfession7(profession) {
    return (new Map([
        ["Jabroni".toLowerCase(), "Patron Tequila"],
        ["School Counselor".toLowerCase(), "Anything with Alcohol"],
        ["Programmer".toLowerCase(), "Hipster Craft Beer"],
        ["Bike Gang Member".toLowerCase(), "Moonshine"],
        ["Politician".toLowerCase(), "Your tax dollars"],
        ["Rapper".toLowerCase(), "Cristal"],
    ]).get(profession.toLowerCase()) || "Beer");
}
const position = (char) => {
    const abc = "abcdefghijklmnopqrstuvwxyz";
    return `Position of alphabet: ${abc.indexOf(char.toLowerCase()) + 1}`;
};
function position2(alphabet) {
    return `Position of alphabet: ${alphabet.charCodeAt(0) - "a".charCodeAt(0) + 1}`;
}
const position3 = (alphabet) => `Position of alphabet: ${"abcdefghijklmnopqrstuvwxyz".indexOf(alphabet) + 1}`;
function position4(alphabet) {
    const mapOfLetterToNumber = new Map();
    mapOfLetterToNumber.set("a", 1);
    mapOfLetterToNumber.set("b", 2);
    mapOfLetterToNumber.set("c", 3);
    mapOfLetterToNumber.set("d", 4);
    mapOfLetterToNumber.set("e", 5);
    mapOfLetterToNumber.set("f", 6);
    mapOfLetterToNumber.set("g", 7);
    mapOfLetterToNumber.set("h", 8);
    mapOfLetterToNumber.set("i", 9);
    mapOfLetterToNumber.set("j", 10);
    mapOfLetterToNumber.set("k", 11);
    mapOfLetterToNumber.set("l", 12);
    mapOfLetterToNumber.set("m", 13);
    mapOfLetterToNumber.set("n", 14);
    mapOfLetterToNumber.set("o", 15);
    mapOfLetterToNumber.set("p", 16);
    mapOfLetterToNumber.set("q", 17);
    mapOfLetterToNumber.set("r", 18);
    mapOfLetterToNumber.set("s", 19);
    mapOfLetterToNumber.set("t", 20);
    mapOfLetterToNumber.set("u", 21);
    mapOfLetterToNumber.set("v", 22);
    mapOfLetterToNumber.set("w", 23);
    mapOfLetterToNumber.set("x", 24);
    mapOfLetterToNumber.set("y", 25);
    mapOfLetterToNumber.set("z", 26);
    return `Position of alphabet: ${mapOfLetterToNumber.get(alphabet)}`;
}
class Kata1 {
    static buildString(...template) {
        return `I like ${template.join(", ")}!`;
    }
}
class Kata1a {
    static buildString(...template) {
        let result = template.join(", ");
        return `I like ${result}!`;
    }
}
class Kata1b {
    static buildString(...template) {
        let answer = "I like ";
        for (var i in template) {
            if (parseInt(i) == template.length - 1) {
                answer += template[i] + "!";
            }
            else {
                answer += template[i] + ", ";
            }
        }
        return answer;
    }
}
const apple = (x) => {
    return Math.pow(Number(x), 2) > 1000
        ? "It's hotter than the sun!!"
        : "Help yourself to a honeycomb Yorkie for the glovebox.";
};
function apple2(x) {
    if (typeof x === "string")
        x = parseInt(x);
    return Math.pow(x, 2) > 1000
        ? `It's hotter than the sun!!`
        : `Help yourself to a honeycomb Yorkie for the glovebox.`;
}
function apple3(x) {
    return Math.pow(+x, 2) >= 1000
        ? "It's hotter than the sun!!"
        : "Help yourself to a honeycomb Yorkie for the glovebox.";
}
const findMultiples = (int, limit) => {
    let solution = [];
    for (let i = int; i <= limit; i += int) {
        solution.push(i);
    }
    return solution;
};
const findMultiples2 = (int, limit) => [...Array(limit).keys()]
    .map((value) => value + 1)
    .filter((value) => value % int === 0);
const findMultiples3 = (integer, limit) => Array.from({ length: limit / integer }).map((_current, i) => (i + 1) * integer);
const dutyFree = (normPrice, discount, hol) => {
    return Math.floor(hol / ((normPrice * discount) / 100));
};
const dutyFree2 = (normPrice, discount, hol) => Math.floor(hol / ((discount * normPrice) / 100));
const addFive = (num) => {
    return num + 5;
};
const addFive2 = (x) => x + 5;
const warnTheSheep = (queue) => {
    if (queue[queue.length - 1] === "wolf")
        return "Pls go away and stop eating my sheep";
    const revQueue = queue.reverse();
    let message = "";
    for (let i = 0; i < revQueue.length - 1; i++) {
        let next = queue[i + 1];
        if (next === "wolf") {
            message = `Oi! Sheep number ${i + 1}! You are about to be eaten by a wolf!`;
        }
    }
    return message;
};
function warnTheSheep2(queue) {
    const position = queue.reverse().indexOf("wolf");
    return position
        ? `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`
        : "Pls go away and stop eating my sheep";
}
function warnTheSheep3(queue) {
    return queue.indexOf("wolf") === queue.length - 1
        ? "Pls go away and stop eating my sheep"
        : `Oi! Sheep number ${queue.length - queue.indexOf("wolf") - 1}! You are about to be eaten by a wolf!`;
}
function warnTheSheep4(queue) {
    const reversedArray = queue.reverse();
    const sheepIndex = reversedArray.findIndex((animal) => animal === "wolf");
    return sheepIndex > 0
        ? `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`
        : "Pls go away and stop eating my sheep";
}
const convertToCelsius = (temperature) => {
    return Number(((temperature - 32) * (5 / 9)).toFixed(5));
};
const weatherInfo2 = (temp) => {
    const convertedTemp = convertToCelsius(temp);
    return convertedTemp > 0
        ? `${convertedTemp} is above freezing temperature`
        : `${convertedTemp} is freezing temperature`;
};
function weatherInfo3(temp) {
    let c = +((temp - 32) * (5 / 9)).toFixed(5);
    if (c < 0) {
        return c + " is freezing temperature";
    }
    else {
        return c + " is above freezing temperature";
    }
}
function weatherInfo4(t) {
    var c = Math.round((t - 32) * (5 / 9) * 100000) / 100000;
    if (c < 0)
        return c + " is freezing temperature";
    else
        return c + " is above freezing temperature";
}
function weatherInfo5(temp) {
    const c = Math.round(convertToCelsius(temp) * 1e5) / 1e5;
    if (c < 0)
        return c + " is freezing temperature";
    else
        return c + " is above freezing temperature";
}
function convertToCelsius2(temperature) {
    return ((temperature - 32) * 5) / 9;
}
const mouthSize = (animal) => {
    return animal.toLowerCase() === "alligator" ? "small" : "wide";
};
const mouthSize2 = (animal) => /alligator/i.test(animal) ? "small" : "wide";
const hexToDec = (hexString) => {
    return parseInt(hexString, 16);
};
function hexToDec2(hexString) {
    const tempHex = hexString.toLowerCase();
    const hexToNumMap = {
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15,
    };
    let result = 0;
    let power = 0;
    for (let i = tempHex.length - 1; i >= 0; i--, power++) {
        const ch = tempHex[i];
        if (i === 0 && ch === "-") {
            result *= -1;
        }
        else if (ch in hexToNumMap) {
            result += hexToNumMap[ch] * 16 ** power;
        }
        else {
            result += Number(ch) * 16 ** power;
        }
    }
    return result;
}
function hexToDec3(hexString) {
    const hex = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
    ];
    return hexString
        .toUpperCase()
        .split("")
        .reverse()
        .map((value, index) => hex.indexOf(value) * Math.pow(16, index))
        .reduce((sum, value) => (value < 0 ? -1 * sum : sum + value), 0);
}
function hexToDec4(hexString) {
    return parseInt(hexString.replace(/^(-)?(.*)/, "$10x$2"));
}
class XOR {
    static xor(a, b) {
        return (a && !b) || (b && !a);
        return a != b;
    }
}
class XOR2 {
    static xor(a, b) {
        return a != b;
    }
}
const remove = (str) => {
    const last = str.length - 1;
    return str[last] === "!" ? str.slice(0, last) : str;
};
const remove2 = (s) => s.replace(/!$/, "");
const remove21 = (s) => (s.endsWith("!") ? s.slice(0, -1) : s);
function remove3(s) {
    if (s.endsWith("!")) {
        return s.slice(0, s.length - 1);
    }
    else {
        return s;
    }
}
function remove4(s) {
    return s.replace(/[!]{1}$/g, "");
}
const remove5 = (s) => s
    .split("!")
    .filter((v, i, a) => !(v === "" && i === a.length - 1))
    .join("!");
function remove6(s) {
    return s.match(/!$/) ? s.slice(0, -1) : s;
}
function remove7(s) {
    if (s.substr(s.length - 1) == "!") {
        return s.substr(0, s.length - 1);
    }
    else {
        return s;
    }
}
const hello = (name) => {
    if (!name) {
        return "Hello, World!";
    }
    const lowerCased = name.toLowerCase();
    const formattedName = lowerCased.replace(lowerCased[0], lowerCased[0].toUpperCase());
    return `Hello, ${formattedName}!`;
};
const hello2 = (name = "") => `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`;
function hello3(name = "") {
    const term = name
        ? name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
        : `World`;
    return `Hello, ${term}!`;
}
function hello4(name = "") {
    const nameLower = name.toLowerCase();
    return name
        ? `Hello, ${nameLower.replace(nameLower[0], nameLower[0].toUpperCase())}!`
        : "Hello, World!";
}
function hello5(name = "") {
    if (name) {
        return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
    }
    else {
        return "Hello, World!";
    }
}
const arr = (n) => {
    if (!n)
        return [];
    let solution = [];
    for (let i = 0; i < n; i++) {
        solution.push(i);
    }
    return solution;
};
const arr2 = (n = 0) => Array.from({ length: n }, (_, i) => i);
const arr3 = (n = 0) => [...Array(n).keys()];
const arr4 = (...n) => n.length === 0 ? [] : Array.from(Array(n[0]).keys());
const arr5 = (n) => Number.isNaN(+n) ? [] : [...Array(n).keys()];
const arr6 = (n = 0) => {
    return new Array(n).fill("").map((it, i) => i);
};
const arr7 = (n = 0) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i);
    }
    return arr;
};
const between = (a, b) => {
    let solution = [];
    for (let i = a; i <= b; i++) {
        solution.push(i);
    }
    return solution;
};
function between2(a, b) {
    return Array.from({ length: b - a + 1 }, (_, j) => j + a);
}
function between3(a, b) {
    return [...Array(b - a + 1)].map((n, i) => i + a);
}
var a = "code";
var b = "wa.rs";
exports.name = a + b;
const shortLongShort = (a, b) => {
    return a.length < b.length ? a + b + a : b + a + b;
};
function shortLongShort2(a, b) {
    let [short, long] = [a, b].sort((a, b) => a.length - b.length);
    return `${short}${long}${short}`;
}
function shortLongShort3(a, b) {
    return a.length > b.length ? b.concat(a, b) : a.concat(b, a);
}
function shortLongShort4(a, b) {
    return a.length > b.length ? b.concat(a).concat(b) : a.concat(b).concat(a);
}
function shortLongShort5(a, b) {
    return a["length"] > b["length"] ? b + a + b : a + b + a;
}
const testEven = (num) => {
    return num % 2 === 0;
};
const testEven2 = (n) => {
    return n == Math.floor(n) && !(n & 1);
};
const seatsInTheater = (nCols, nRows, col, row) => {
    return (nCols - col + 1) * (nRows - row);
};
function seatsInTheater2(nCols, nRows, col, row) {
    const width = nCols - col + 1;
    const height = nRows - row;
    return width * height;
}
const saleHotdogs = (n) => {
    if (n < 5)
        return n * 100;
    if (n < 10)
        return n * 95;
    return n * 90;
};
function saleHotdogs2(n) {
    if (n == null) {
        throw new Error("The method or operation is not implemented.");
    }
    return n * (n < 5 ? 100 : n >= 5 && n < 10 ? 95 : 90);
}
const saleHotdogs3 = ($) => $ * ($ < 5 ? 100 : $ >= 10 ? 90 : 95);
function saleHotdogs4(n) {
    return (n >= 10 ? 90 : n >= 5 ? 95 : 100) * n;
}
const move = (pos, roll) => {
    return pos + roll * 2;
};
const isUpperCase = (str) => {
    return str === str.toUpperCase();
};
function isUpperCase2(str) {
    return str.match(/[a-z]/) === null;
}
function isUpperCase3(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)
            return false;
    }
    return true;
}
function isUpperCase4(str) {
    return /^[A-Z\s]+$/.test(str);
}
function isUpperCase5(str) {
    return str.split("").every((c) => c === c.toUpperCase());
}
function isUpperCase6(str) {
    for (const letter of str) {
        if (letter !== letter.toUpperCase()) {
            return false;
        }
    }
    return true;
}
const squareOrSquareRoot = (array) => {
    return array.map((num) => {
        return Number.isInteger(Math.sqrt(num))
            ? Math.sqrt(num)
            : Math.pow(num, 2);
    });
};
function squareOrSquareRoot2(array) {
    return array.map((a) => (Math.sqrt(a) % 1 == 0 ? Math.sqrt(a) : a * a));
}
function squareOrSquareRoot3(array) {
    return array.map((x) => (!(Math.sqrt(x) % 1) ? Math.sqrt(x) : x * x));
}
const getRealFloor = (amFloor) => {
    if (amFloor < 1) {
        return amFloor;
    }
    else if (amFloor < 13) {
        return amFloor - 1;
    }
    return amFloor - 2;
};
function getRealFloor2(n) {
    let floor;
    if (n < 1) {
        floor = n;
    }
    else if (n < 13) {
        floor = n - 1;
    }
    else {
        floor = n - 2;
    }
    return floor;
}
function getRealFloor3(n) {
    return n <= 0 ? n : n <= 13 ? n - 1 : n - 2;
}
function getRealFloor4(n) {
    switch (true) {
        case n < 1:
            return n;
        case n < 13:
            return n - 1;
        default:
            return n - 2;
    }
}
const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
};
function goals2(...args) {
    return args.reduce((a, b) => a + b);
}
function goals3(...leagueGoals) {
    return leagueGoals.reduce((total, goal) => total + goal);
}
const goals4 = (...args) => args.reduce((a, b) => a + b);
function goals5(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
function goals6(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return Object.values(arguments).reduce((a, b) => a + b);
}
const nthEven = (n) => {
    return (n - 1) * 2;
};
function nthEven2(n) {
    let result = 0;
    for (let i = 0; i < n; i++) {
        result = i * 2;
    }
    console.log(result);
    return result;
}
function nthEven3(n) {
    return Math.floor(n * 2 - 2);
}
const repeater = (str, n) => {
    return str.repeat(n);
};
function repeater2(str, n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result = result.concat(str.toString());
    }
    return result;
}
function repeater3(str, n) {
    return Array(n).fill(str).join("");
}
function repeater4(str, n) {
    return new Array(n + 1).join(str);
}
const repeater5 = Function.prototype.call.bind(String.prototype.repeat);
const fixTheMeerkat = (arr) => {
    return arr.reverse();
};
function fixTheMeerkat2([tail, body, head]) {
    return [head, body, tail];
}
function fixTheMeerka2t(arr) {
    let pos1 = arr[2], pos2 = arr[1], pos3 = arr[0];
    return [pos1, pos2, pos3];
}
function fixTheMeerka3t(arr) {
    [arr[0], arr[2]] = [arr[2], arr[0]];
    return arr;
}
function fixTheMeerkat4(arr) {
    return [arr[2], arr[1], arr[0]];
}
const index = (array, numIdx) => {
    return numIdx < array.length ? Math.pow(array[numIdx], numIdx) : -1;
};
const index2 = (array, n) => array[n] ** n || -1;
function index3(array, n) {
    const res = array[n] ** n;
    return isNaN(res) ? -1 : res;
}
function index4(array, n) {
    const val = array[n];
    if (val === undefined)
        return -1;
    return Math.pow(val, n);
}
const finalGrade = (exam, pro) => {
    let grade = 0;
    if (exam > 90 || pro > 10) {
        grade = 100;
    }
    else if (exam > 75 && pro >= 5) {
        grade = 90;
    }
    else if (exam > 50 && pro >= 2) {
        grade = 75;
    }
    return grade;
};
const well = (strArr) => {
    if (strArr.indexOf("good") < 0)
        return "Fail!";
    return strArr.join("").match(/good/g).length < 3
        ? "Publish!"
        : "I smell a series!";
};
function well2(x) {
    let num = x.filter((a) => a === "good").length;
    return num > 2 ? "I smell a series!" : num >= 1 ? "Publish!" : "Fail!";
}
function well3(x) {
    const ideasCount = {
        goodIdeas: 0,
        badIdeas: 0,
    };
    x.forEach((item) => {
        item === "bad"
            ? (ideasCount.badIdeas += 1)
            : (ideasCount.goodIdeas += 1);
    });
    if (ideasCount.goodIdeas > 2) {
        return "I smell a series!";
    }
    else if (ideasCount.goodIdeas <= 2 && ideasCount.goodIdeas !== 0) {
        return "Publish!";
    }
    else {
        return "Fail!";
    }
}
function well4(x) {
    const number = x.filter((i) => i === "good").length;
    if (!number) {
        return "Fail!";
    }
    if (number < 3) {
        return "Publish!";
    }
    return "I smell a series!";
}
const gooseFilter = (birds) => {
    const geese = [
        "African",
        "Roman Tufted",
        "Toulouse",
        "Pilgrim",
        "Steinbacher",
    ];
    return birds.filter((bird) => geese.indexOf(bird) < 0);
    return birds.filter((bird) => !geese.includes(bird));
    let filteredArr = [];
    birds.forEach((bird) => {
        if (!geese.includes(bird)) {
            filteredArr.push(bird);
        }
    });
};
function gooseFilter2(birds) {
    const geese = [
        "African",
        "Roman Tufted",
        "Toulouse",
        "Pilgrim",
        "Steinbacher",
    ];
    return birds.filter((bird) => !geese.includes(bird));
}
function gooseFilter3(birds) {
    const geese = [
        "African",
        "Roman Tufted",
        "Toulouse",
        "Pilgrim",
        "Steinbacher",
    ];
    const geeseIndex = geese.reduce((acc, birdName) => {
        acc[birdName] = true;
        return acc;
    }, {});
    return birds.filter((bird) => !(bird in geeseIndex));
}
function gooseFilter4(birds) {
    const geese = [
        "African",
        "Roman Tufted",
        "Toulouse",
        "Pilgrim",
        "Steinbacher",
    ];
    var j = 0, result = [];
    for (let i = 0; i < birds.length; i++) {
        if (birds[i] == "African" ||
            birds[i] == "Toulouse" ||
            birds[i] == "Roman Tufted" ||
            birds[i] == "Pilgrim" ||
            birds[i] == "Steinbacher") {
            delete birds[i];
        }
        if (birds[i] != undefined) {
            result[j] = birds[i];
            j++;
        }
    }
    return result;
}
function gooseFilter5(birds) {
    const geese = [
        "African",
        "Roman Tufted",
        "Toulouse",
        "Pilgrim",
        "Steinbacher",
    ];
    return birds.filter((bird) => geese.find((gee) => gee == bird) === undefined);
}
const gooseFilter6 = (birds) => birds.filter((x) => [
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
].indexOf(x) === -1);
const checkForFactor = (base, factor) => {
    return base % factor === 0;
};
const checkForFactor2 = (base, factor) => !(base % factor);
function checkForFactor3(base, factor) {
    return base % factor === 0 ? true : false;
}
function checkForFactor4(base, factor) {
    const reminder = base % factor;
    return Number.isInteger(reminder) && Object.is(reminder, 0);
}
function checkForFactor5(base, factor) {
    return base % factor > 0 ? false : true;
}
const findDifference = (a, b) => {
    const getVolume = (arr) => {
        return arr.reduce((acc, curr) => acc * curr);
    };
    return Math.abs(getVolume(a) - getVolume(b));
};
function findDifference2(a, b) {
    return Math.abs(a.reduce((x, y) => x * y) - b.reduce((x, y) => x * y));
}
function findDifference3([a, b, c], [d, e, f]) {
    return Math.abs(a * b * c - d * e * f);
}
function findDifference4(a, b) {
    let volA = a[0] * a[1] * a[2];
    let volB = b[0] * b[1] * b[2];
    if (volA > volB)
        return volA - volB;
    else
        return volB - volA;
}
const get_age = (age) => {
    return Number(age.match(/\d+/g)[0]);
};
function get_age2(age) {
    return parseInt(age);
}
function get_age4(age) {
    return parseInt(age.match(/^\d+/)[0], 10);
}
const howMuchILoveYou = (petals) => {
    let phrases;
    (function (phrases) {
        phrases[phrases["I love you"] = 1] = "I love you";
        phrases[phrases["a little"] = 2] = "a little";
        phrases[phrases["a lot"] = 3] = "a lot";
        phrases[phrases["passionately"] = 4] = "passionately";
        phrases[phrases["madly"] = 5] = "madly";
        phrases[phrases["not at all"] = 6] = "not at all";
    })(phrases || (phrases = {}));
    if (petals <= 6)
        return phrases[petals];
    if (petals > 6 && petals % 6)
        return phrases[petals % 6];
    return phrases[6];
};
function howMuchILoveYou2(nbPetals) {
    return [
        "not at all",
        "I love you",
        "a little",
        "a lot",
        "passionately",
        "madly",
        "not at all",
    ][nbPetals % 6];
}
function howMuchILoveYou3(petals) {
    return [
        "I love you",
        "a little",
        "a lot",
        "passionately",
        "madly",
        "not at all",
    ][(petals - 1) % 6];
}
function howMuchILoveYou4(petals) {
    switch ((petals - 1) % 6) {
        case 1:
            return "a little";
        case 2:
            return "a lot";
        case 3:
            return "passionately";
        case 4:
            return "madly";
        case 5:
            return "not at all";
        default:
            return "I love you";
    }
}
function howMuchILoveYou5(petals) {
    while (petals > 6) {
        petals -= 6;
    }
    switch (petals) {
        case 1:
            return "I love you";
        case 2:
            return "a little";
        case 3:
            return "a lot";
        case 4:
            return "passionately";
        case 5:
            return "madly";
        case 6:
            return "not at all";
        default:
            return "";
    }
}
function howMuchILoveYou6(petals) {
    if (petals > 6)
        petals %= 6;
    switch (petals) {
        case 1:
            return "I love you";
        case 2:
            return "a little";
        case 3:
            return "a lot";
        case 4:
            return "passionately";
        case 5:
            return "madly";
        case 6:
            return "not at all";
        default:
            return "not at all";
    }
}
const twoSort = (strArr) => {
    let solution = "";
    const lettersArr = strArr.sort()[0].split("");
    console.log(lettersArr);
    lettersArr.forEach((char, idx) => {
        console.log(lettersArr.length, char, idx);
        idx < lettersArr.length - 1
            ? (solution += char + "***")
            : (solution += char);
    });
    return solution;
};
function twoSort2(s) {
    return s.sort()[0].split("").join("***");
}
function twoSort3(s) {
    return [...s.sort()[0]].join("***");
}
function twoSort4(strings) {
    return strings
        .sort((a, b) => (a.charCodeAt(0) > b.charCodeAt(0) ? 1 : -1))[0]
        .split("")
        .join("***");
}
function twoSort5(s) {
    const ret = s
        .sort()[0]
        .split("")
        .map((x) => x + "***")
        .join("")
        .slice(0, -3);
    return ret;
}
function twoSort7(s) {
    s.sort((a, b) => {
        return a > b ? 1 : -1;
    });
    return s[0]
        .replace(/./g, (match) => {
        return match + "***";
    })
        .slice(0, -3);
}
const expressionsMatter = (a, b, c) => {
    return Math.max(a + b + c, (a + b) * c, a * (b + c), a * b * c);
};
function expressionsMatter2(a, b, c) {
    let one = a * (b + c);
    let two = a * b * c;
    let three = (a + b) * c;
    let four = a + b + c;
    return Math.max(one, two, three, four);
}
function expressionsMatter3(a, b, c) {
    return [a * b * c, (a + b) * c, a * (b + c), a + b + c].sort((a, b) => a - b)[3];
}
function expressionsMatter4(a, b, c) {
    let calculated = [];
    calculated.push(a + b + c);
    calculated.push((a + b) * c);
    calculated.push(a * (b + c));
    calculated.push(a * b * c);
    return Math.max(...calculated);
}
function expressionsMatter5(a, b, c) {
    const case1 = a * (b + c);
    const case2 = a * b * c;
    const case3 = a + b * c;
    const case4 = (a + b) * c;
    const case5 = a + b + c;
    const arr = [case1, case2, case3, case4, case5];
    const sorted = arr.sort((a, b) => a - b);
    return sorted[arr.length - 1];
}
const getHighestResult = (a, b) => Math.max(a + b, a * b);
function expressionsMatter6(a, b, c) {
    return Math.max(getHighestResult(getHighestResult(a, b), c), getHighestResult(a, getHighestResult(b, c)));
}
exports.expressionsMatter6 = expressionsMatter6;
function expressionsMatter7(a, b, c) {
    const results = [];
    results.push(a + b + c);
    results.push(a * b * c);
    results.push(a + b * c);
    results.push(a * b + c);
    results.push((a + b) * c);
    results.push(a * (b + c));
    return Math.max(...results);
}
const switchItUp = (intNumber) => {
    const numbers = {
        0: "Zero",
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
    };
    return numbers[intNumber];
};
function switchItUp2(intNumber) {
    let out;
    (function (out) {
        out[out["Zero"] = 0] = "Zero";
        out[out["One"] = 1] = "One";
        out[out["Two"] = 2] = "Two";
        out[out["Three"] = 3] = "Three";
        out[out["Four"] = 4] = "Four";
        out[out["Five"] = 5] = "Five";
        out[out["Six"] = 6] = "Six";
        out[out["Seven"] = 7] = "Seven";
        out[out["Eight"] = 8] = "Eight";
        out[out["Nine"] = 9] = "Nine";
        out[out["Ten"] = 10] = "Ten";
    })(out || (out = {}));
    return out[intNumber];
}
function switchItUp3(intNumber) {
    return [
        "Zero",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
    ][intNumber];
}
function switchItUp4(intNumber) {
    switch (intNumber) {
        case 0:
            return "Zero";
        case 1:
            return "One";
        case 2:
            return "Two";
        case 3:
            return "Three";
        case 4:
            return "Four";
        case 5:
            return "Five";
        case 6:
            return "Six";
        case 7:
            return "Seven";
        case 8:
            return "Eight";
        case 9:
            return "Nine";
        default:
            return "";
    }
}
function switchItUp6(intNumber) {
    var _a;
    const map = new Map();
    map.set(1, "One");
    map.set(2, "Two");
    map.set(3, "Three");
    map.set(4, "Four");
    map.set(5, "Five");
    map.set(6, "Six");
    map.set(7, "Seven");
    map.set(8, "Eight");
    map.set(9, "Nine");
    return (_a = map.get(intNumber)) !== null && _a !== void 0 ? _a : "Zero";
}
const quarterOf = (month) => {
    if (month < 1) {
        return "invalid input";
    }
    else if (month < 4) {
        return 1;
    }
    else if (month < 7) {
        return 2;
    }
    else if (month < 10) {
        return 3;
    }
    else if (month < 13) {
        return 4;
    }
    else {
        return "invalid input";
    }
};
const quarterOf2 = (month) => Math.ceil(month / 3);
function quarterOf3(month) {
    return month >= 10 ? 4 : month >= 7 ? 3 : month >= 4 ? 2 : 1;
}
function quarterOf4(month) {
    return Math.ceil((month * 4) / 12);
}
function quarterOf5(month) {
    switch (month) {
        case 1:
            return 1;
            break;
        case 2:
            return 1;
            break;
        case 3:
            return 1;
            break;
        case 4:
            return 2;
            break;
        case 5:
            return 2;
            break;
        case 6:
            return 2;
            break;
        case 7:
            return 3;
            break;
        case 8:
            return 3;
            break;
        case 9:
            return 3;
            break;
        case 10:
            return 4;
            break;
        case 11:
            return 4;
            break;
        case 12:
            return 4;
            break;
    }
    return month;
}
const oddCount = (num) => {
    return num & 1 ? (num - 1) / 2 : num / 2;
};
const oddCount2 = (n) => Math.floor(n / 2);
const hoopCount = (num) => {
    return num >= 10
        ? "Great, now move on to tricks"
        : "Keep at it until you get it";
};
const twiceAsOld = (dad, son) => {
    return Math.abs(dad - son * 2);
};
function twiceAsOld2(dadYearsOld, sonYearsOld) {
    if (sonYearsOld - (dadYearsOld - sonYearsOld) > 0) {
        return sonYearsOld - (dadYearsOld - sonYearsOld);
    }
    else {
        return Math.abs(sonYearsOld - (dadYearsOld - sonYearsOld));
    }
}
function twiceAsOld3(dadYearsOld, sonYearsOld) {
    let yearsAgo = 0;
    let flag = true;
    while (flag) {
        if (dadYearsOld - yearsAgo === 2 * (sonYearsOld - yearsAgo) ||
            dadYearsOld + yearsAgo === 2 * (sonYearsOld + yearsAgo)) {
            flag = false;
            break;
        }
        yearsAgo++;
    }
    return yearsAgo;
}
function twiceAsOld4(dadYearsOld, sonYearsOld) {
    let dad = dadYearsOld;
    let son = sonYearsOld;
    let i = 0;
    do {
        if (dad / son === 2) {
            return i;
        }
        i++;
        dad--;
        son--;
    } while (son > 0);
    dad = dadYearsOld;
    son = sonYearsOld;
    i = 0;
    while (1) {
        if (dad / son === 2) {
            return i;
        }
        i++;
        dad++;
        son++;
    }
    return 0;
}
function twiceAsOld5(dadYearsOld, sonYearsOld) {
    let rest = dadYearsOld - sonYearsOld * 2;
    return rest < 0 ? rest * -1 : rest;
}
const otherAngle = (a, b) => {
    return 180 - (a + b);
};
const toAlternatingCase = (str) => {
    const alterCase = (char) => {
        return char === char.toUpperCase()
            ? char.toLowerCase()
            : char.toUpperCase();
    };
    return str.replace(/[a-z]/gi, (letter) => alterCase(letter));
};
function toAlternatingCase2(s) {
    return s
        .split("")
        .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
        .join("");
}
function toAlternatingCase3(s) {
    return s
        .split("")
        .map((e) => e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase())
        .join("");
}
const flipCharAlphaCase = (code) => code >= 65 && code <= 90
    ? code + 32
    : code >= 97 && code <= 122
        ? code - 32
        : code;
const toAlternatingCase4 = (s) => String.fromCharCode(...s
    .split("")
    .map((char) => char.charCodeAt(0))
    .map(flipCharAlphaCase));
const updateLight = (current) => {
    const sequence = ["green", "yellow", "red"];
    const next = sequence.indexOf(current) + 1;
    return sequence[next] ? sequence[next] : sequence[0];
};
function updateLight2(current) {
    const L = ["green", "yellow", "red", "green"];
    return L[L.indexOf(current) + 1];
}
const updateLight3 = ($) => $ === "green"
    ? "yellow"
    : $ === "yellow"
        ? "red"
        : $ === "red"
            ? "green"
            : "error";
function updateLight5(current) {
    switch (current) {
        case "green":
            return "yellow";
            break;
        case "yellow":
            return "red";
            break;
        case "red":
            return "green";
            break;
    }
    return current;
}
function updateLight6(current) {
    return "" + { green: "yellow", yellow: "red", red: "green" }[current];
}
const correct = (str) => {
    const errors = { "5": "S", "0": "O", "1": "I" };
    return str.replace(/[015]/g, (char) => errors[char]);
};
function correct2(s) {
    return s.replace(/\d/g, (e) => {
        if (e == "5")
            return "S";
        if (e == "0")
            return "O";
        return "I";
    });
}
function correct3(s) {
    return s.replace(/1/g, "I").replace(/5/g, "S").replace(/0/g, "O");
}
function correct4(s) {
    return s.replace(/\d/g, (n) => (n == "5" ? "S" : n == "0" ? "O" : "I"));
}
function correct5(s) {
    const result = s.split("").map((item) => {
        switch (item) {
            case "5":
                return "S";
            case "0":
                return "O";
            case "1":
                return "I";
            default:
                return item;
        }
    });
    return result.join("");
}
function correct6(s) {
    return s.replace(/[105]/g, (x) => (x == "1" ? "I" : x == "0" ? "O" : "S"));
}
const correct7 = (s) => s.replace(/\d/g, (d) => "OIZEASGTBG"[+d]);
const doubleChar = (str) => {
    let solution = "";
    for (const letter of str) {
        solution += letter.repeat(2);
    }
    return solution;
};
function doubleChar5(str) {
    return str.replace(/./g, (e) => e + e);
}
const doubleChar2 = ($) => [...$].reduce((ac, e) => ac + e + e, "");
const doubleChar3 = (str) => str
    .split("")
    .map((c) => c.repeat(2))
    .join("");
function doubleChar4(str) {
    return [...str].map((c) => c + c).join("");
}
function doubleChar6(str) {
    return str.replace(/(.)/g, "$1$1");
}
const getGrade = (a, b, c) => {
    const average = (a + b + c) / 3;
    switch (true) {
        case average >= 90:
            return "A";
        case average >= 80:
            return "B";
        case average >= 70:
            return "C";
        case average >= 60:
            return "D";
        default:
            return "F";
    }
};
function getGrade2(a, b, c) {
    let avg = (a + b + c) / 3;
    return avg < 60
        ? "F"
        : avg < 70
            ? "D"
            : avg < 80
                ? "C"
                : avg < 90
                    ? "B"
                    : "A";
}
function getGrade3(a, b, c) {
    switch (((a + b + c) / 30) | 0) {
        case 10:
            return "A";
        case 9:
            return "A";
        case 8:
            return "B";
        case 7:
            return "C";
        case 6:
            return "D";
        default:
            return "F";
    }
}
const enough = (cap, on, wait) => {
    return cap < on + wait ? on + wait - cap : 0;
};
const enough2 = (cap, on, wait) => Math.max(on + wait - cap, 0);
const setAlarm = (employed, vacation) => {
    return employed && !vacation;
};
const setAlarm2 = (employed, vacation) => employed && !vacation;
const greetTwo = (name, owner) => {
    return `Hello ${name === owner ? "boss" : "guest"}`;
};
function greetTwo2(name, owner) {
    return "Hello " + (name == owner ? "boss" : "guest");
}
const rentalCarCost = (days) => {
    return days < 3 ? days * 40 : days < 7 ? days * 40 - 20 : days * 40 - 50;
};
function rentalCarCost2(d) {
    let total = d * 40;
    if (d >= 3 && d < 7)
        total -= 20;
    if (d >= 7)
        total -= 50;
    return total;
}
const rentalCarCost3 = (d) => d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);
const cockroachSpeed = (s) => {
    return Math.floor((s * 1000) / 36);
};
function stringToArray(s) {
    return s.split(" ");
}
function stringToArray2(s) {
    return s.split(/\s/);
}
function stringToArray3(s) {
    return [...s.split(" ")];
}
const smash = (words) => {
    return words.join(" ");
};
const feast = (beast, dish) => {
    return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);
};
function feast2(beast, dish) {
    return (beast.startsWith(dish.charAt(0)) &&
        beast.endsWith(dish.charAt(dish.length - 1)));
}
const isDivideBy = (number, a, b) => {
    return number % a === 0 && number % b === 0;
};
function isDivideBy2(number, a, b) {
    return !(number % a || number % b);
}
const isDivideBy3 = (n, a, b) => {
    return n / a === Math.trunc(n / a) && n / b === Math.trunc(n / b);
};
function isDivideBy4(number, a, b) {
    console.log(number, a, b);
    return Number.isInteger(number / a) && Number.isInteger(number / b);
}
const countSheep = (num) => {
    let solution = "";
    for (let i = 1; i <= num; i++) {
        solution += `${i} sheep...`;
    }
    return solution;
};
function countSheep2(num) {
    return Array.from({ length: num }, (x, i) => `${i + 1} sheep...`).join("");
}
function countSheep3(num) {
    return [...Array(num).keys()].reduce((res, cur) => res + `${cur + 1} sheep...`, "");
}
const firstNonConsecutive = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + 1) {
            return arr[i];
        }
    }
    return null;
};
function firstNonConsecutive2(arr) {
    return arr.find((currentValue, index, array) => {
        return currentValue - array[index - 1] > 1;
    });
}
const rps = (p1, p2) => {
    if (p1 === p2)
        return "Draw!";
    if ((p1[0] === "r" && p2[0] === "s") ||
        (p1[0] === "s" && p2[0] === "p") ||
        (p1[0] === "p" && p2[0] === "r")) {
        return "Player 1 won!";
    }
    if ((p1[0] === "s" && p2[0] === "r") ||
        (p1[0] === "p" && p2[0] === "s") ||
        (p1[0] === "r" && p2[0] === "p")) {
        return "Player 2 won!";
    }
};
function rps2(p1, p2) {
    if (p1 == p2)
        return "Draw!";
    let table = ["scissors", "paper", "rock"];
    let i = (table.indexOf(p1) + 1) % 3;
    let j = table.indexOf(p2);
    return i == j ? "Player 1 won!" : "Player 2 won!";
}
const beats = {
    scissors: "paper",
    paper: "rock",
    rock: "scissors",
};
function rps3(p1, p2) {
    if (p1 === p2)
        return "Draw!";
    if (beats[p1] == p2)
        return "Player 1 won!";
    return "Player 2 won!";
}
function rps4(p1, p2) {
    const results = {
        rock: {
            rock: "Draw!",
            scissors: "Player 1 won!",
            paper: "Player 2 won!",
        },
        scissors: {
            rock: "Player 2 won!",
            scissors: "Draw!",
            paper: "Player 1 won!",
        },
        paper: {
            rock: "Player 1 won!",
            scissors: "Player 2 won!",
            paper: "Draw!",
        },
    };
    return results[p1][p2];
}
function rps5(p1, p2) {
    let msg = "";
    switch (true) {
        case p1 == "scissors" && p2 == "paper":
            msg = "Player 1 won!";
            break;
        case p1 == "scissors" && p2 == "rock":
            msg = "Player 2 won!";
            break;
        case p1 == "paper" && p2 == "scissors":
            msg = "Player 2 won!";
            break;
        case p1 == "rock" && p2 == "scissors":
            msg = "Player 1 won!";
            break;
        case p1 == "rock" && p2 == "paper":
            msg = "Player 2 won!";
            break;
        case p1 == "paper" && p2 == "rock":
            msg = "Player 1 won!";
            break;
        default:
            msg = "Draw!";
    }
    return msg;
}
const sumMix = (arr) => {
    return arr.reduce((a, b) => a * 1 + b * 1);
};
function sumMix2(xs) {
    return xs.reduce((a, x) => a + +x, 0);
}
const areYouPlayingBanjo = (name) => {
    return name[0].toLowerCase() === "r"
        ? `${name} plays banjo`
        : `${name} does not play banjo`;
};
function areYouPlayingBanjo2(name) {
    return name.startsWith("r") || name.startsWith("R")
        ? name + " plays banjo"
        : name + " does not play banjo";
}
function areYouPlayingBanjo3(name) {
    return name + (/^r/i.test(name) ? " plays banjo" : " does not play banjo");
}
function areYouPlayingBanjo4(name) {
    return name.charAt(0).toUpperCase() === "R"
        ? `${name} plays banjo`
        : `${name} does not play banjo`;
}
const zeroFuel = (distance, mpg, fuelLeft) => {
    return distance / mpg <= fuelLeft;
};
const lovefunc = (flower1, flower2) => {
    return ((flower1 + flower2) & 1) === 1;
};
function lovefunc2(flower1, flower2) {
    return (flower1 + flower2) % 2 === 1;
}
function lovefunc3(flower1, flower2) {
    return flower1 % 2 != flower2 % 2;
}
const lovefunc4 = (f1, f2) => f1 % 2 == f2 % 2 ? false : true;
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
    return array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((p, n) => p + n, 0);
}
function sumArray3(a) {
    return a === null
        ? 0
        : a
            .sort((a, b) => a - b)
            .slice(1, -1)
            .reduce((a, b) => a + b, 0);
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
    return bonus ? `£${String(salary * 10)}` : `£${String(salary)}`;
};
const hero = (bullets, dragons) => {
    return bullets / dragons >= 2;
};
const paperwork = (n, m) => {
    return m < 0 || n < 0 ? 0 : n * m;
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
    return num % 2 === 0 ? num * 8 : num * 9;
};
function oddOrEven(x) {
    return x & 1 ? "odd" : "even";
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
    const average = classPoints.concat(yourPoints).reduce((prev, curr) => prev + curr) /
        (classPoints.length + 1);
    return yourPoints > average;
}
const betterThanAverage3 = (classPoints, yourPoints) => classPoints.reduce((acc, it) => acc + it, 0) / classPoints.length <=
    yourPoints;
function betterThanAverage4(classPoints, yourPoints) {
    return (classPoints.reduce((a, v) => a + v) / classPoints.length < yourPoints);
}
function betterThanAverage5(classPoints, yourPoints) {
    return (yourPoints > classPoints.reduce((a, c) => a + c) / classPoints.length);
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
const DNAtoRNA2 = ($) => [...$].map((el) => (el === "T" ? (el = "U") : el)).join("");
function DNAtoRNA3(dna) {
    return dna
        .split("")
        .map((nab) => (nab == "T" ? "U" : nab))
        .join("");
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
    return Array(n)
        .fill(0)
        .map((e, i) => i + 1);
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
        case bmi <= 18.5:
            return "Underweight";
            break;
        case bmi <= 25.0:
            return "Normal";
            break;
        case bmi <= 30.0:
            return "Overweight";
            break;
        default:
            return "Obese";
    }
};
function bmi2(weight, height) {
    const $ = weight / height ** 2;
    return $ <= 18.5
        ? "Underweight"
        : $ <= 25.0
            ? "Normal"
            : $ <= 30.0
                ? "Overweight"
                : "Obese";
}
const bmi3 = (weight, height, bmi = 0) => (bmi = weight / height ** 2) > 18.5
    ? bmi > 25
        ? bmi > 30
            ? "Obese"
            : "Overweight"
        : "Normal"
    : "Underweight";
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
    return Array(n)
        .fill(0)
        .map((e, i) => n - i);
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
const fakeBin3 = (x) => x.replace(/\d/g, (n) => (Number(n) < 5 ? "0" : "1"));
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
        return [
            input.filter((x) => x > 0).length,
            input.filter((x) => x < 0).reduce((a, b) => a + b, 0),
        ];
    }
    return [];
}
const reverseWords = (str) => {
    return str.split(" ").reverse().join(" ");
};
const past = (h, m, s) => {
    const HOUR = 3600, MINUTE = 60, SECOND = 1;
    return (h * HOUR + m * MINUTE + s * SECOND) * 1000;
};
const invert = (array) => {
    return array.map((num) => -num);
};
function invert2(array) {
    return array.map((n) => -n);
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
    return x.map((value) => value * 2);
}
const findNeedle = (haystack) => {
    return `found the needle at position ${haystack.indexOf("needle")}`;
};
const digitize = (n) => {
    return n
        .toString()
        .split("")
        .reverse()
        .map((num) => Number(num));
};
const abbrevName = (name) => {
    return name
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase())
        .join(".");
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
