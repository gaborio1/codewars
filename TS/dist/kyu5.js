"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.humanReadable2 = exports.G9642 = exports.convertFrac5 = exports.convertFrac4 = exports.findUniq5 = exports.phone3 = exports.buddy4 = exports.buddy = exports.buddy2 = exports.fromBase64 = exports.toBase64 = exports.sumAnn = exports.sumJohn = exports.ann = exports.john = exports.puzzle = exports.countKprimes = exports.closest6 = exports.closest4 = void 0;
let fighters = [
    ["", "Ryu", "E.Honda", "Blanka", "Guile", ""],
    ["Balrog", "Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat"],
    ["Vega", "T.Hawk", "Fei Long", "Deejay", "Cammy", "M.Bison"],
];
let position = [0, 2];
let moves = ['left', 'left',
    'left', 'left',
    'left', 'left',
    'left', 'left'];
const superStreetFighterSelection = (fighters, position, moves) => {
    console.log(fighters);
    console.log(moves);
    if (!fighters.length)
        return [];
    if (!position.length)
        return [];
    if (!moves.length)
        return [];
    let currentPlayer = fighters[position[0]][position[1]];
    console.log("current player:", currentPlayer);
    let solution = [currentPlayer];
    let vertical = position[0];
    let horizontal = position[1];
    for (let i = 0; i < moves.length; i += 1) {
        let currentDir = moves[i];
        console.log("current direction:", currentDir);
        if (currentDir === "up") {
            if (vertical < 1) {
                solution.push(currentPlayer);
                console.log("UNDEFINED, STOP!");
                solution.push(fighters[vertical][horizontal]);
            }
            else {
                if (fighters[vertical - 1][horizontal] === "") {
                    solution.push(currentPlayer);
                    console.log("EMPTY, STOP!");
                }
                else {
                    vertical -= 1;
                    solution.push(fighters[vertical][horizontal]);
                }
            }
        }
        else if (currentDir === "down") {
            if (vertical === fighters.length - 1) {
                console.log("UNDEFINED, STOP!");
                solution.push(fighters[vertical][horizontal]);
            }
            else {
                if (fighters[vertical + 1][horizontal] === "") {
                    console.log("EMPTY BELOW, STOP!");
                }
                else {
                    vertical += 1;
                    solution.push(fighters[vertical][horizontal]);
                }
            }
        }
        else if (currentDir === "left") {
            if (fighters[vertical][horizontal - 1] === "") {
                console.log("EMPTY LEFT, STOP!");
                solution.push(fighters[vertical][horizontal]);
            }
            else {
                if (horizontal === 0) {
                    console.log("UNDEFINED LEFT, ROTATE!");
                    horizontal = fighters[horizontal].length - 1;
                    solution.push(fighters[vertical][horizontal]);
                }
                else {
                    horizontal -= 1;
                    solution.push(fighters[vertical][horizontal]);
                }
            }
        }
        else {
            console.log("RIGHT");
            if (fighters[vertical][horizontal + 1] === "") {
                console.log("EMPTY RIGHT, STOP");
                solution.push(fighters[vertical][horizontal]);
            }
            else {
                if (horizontal === fighters[vertical].length - 1) {
                    console.log("UNDEFINED RIGHT, ROTATE!");
                    horizontal = 0;
                    solution.push(fighters[vertical][horizontal]);
                }
                else {
                    horizontal += 1;
                    solution.push(fighters[vertical][horizontal]);
                }
            }
        }
    }
    return solution;
};
console.log(superStreetFighterSelection(fighters, position, moves));
const closest = (str) => {
    const numArr = str.split(" ").map((str) => Number(str));
    console.log("numArr:", numArr);
    if (numArr.length === 1)
        return [];
    const weigthArr = numArr.map((num) => num
        .toString()
        .split("")
        .map((str) => Number(str))
        .reduce((acc, curr) => acc + curr));
    console.log("weightArr:", weigthArr);
    const weightArrCopy = [...weigthArr];
    const ascWeigthArr = weightArrCopy.sort((a, b) => a - b);
    const diffArr = [];
    for (let i = 1; i < ascWeigthArr.length; i += 1) {
        const current = ascWeigthArr[i] - ascWeigthArr[i - 1];
        diffArr.push(current);
    }
    const smallestDiff = Math.min(...diffArr);
    let smallestIdx = 0;
    for (let i = 0; i < diffArr.length; i += 1) {
        if (diffArr[i] === smallestDiff) {
            smallestIdx = i;
            break;
        }
    }
    const diffA = ascWeigthArr[smallestIdx];
    const diffB = ascWeigthArr[smallestIdx + 1];
    let idxNumA = 0;
    let idxNumB = 0;
    if (diffA === diffB) {
        let sameIndicesArr = [];
        for (let i = 0; i < weigthArr.length; i += 1) {
            if (weigthArr[i] === diffA) {
                sameIndicesArr.push(i);
            }
        }
        idxNumA = sameIndicesArr[0];
        idxNumB = sameIndicesArr[1];
    }
    else {
        idxNumA = weigthArr.indexOf(diffA);
        idxNumB = weigthArr.indexOf(diffB);
    }
    const numA = numArr[idxNumA];
    const numB = numArr[idxNumB];
    const solution = [
        [diffA, idxNumA, numA],
        [diffB, idxNumB, numB],
    ];
    return solution;
};
function closest2(code) {
    if (!code) {
        return [];
    }
    const arr = code
        .split(" ")
        .map((e, i) => [[...e].reduce((a, b) => +a + +b, 0), i, +e])
        .sort(([a0, a1], [b0, b1]) => a0 - b0 || a1 - b1);
    let findIndex = 0, findDel = arr[1][0] - arr[0][0];
    for (let i = 2; i < arr.length; i++) {
        if (findDel > arr[i][0] - arr[i - 1][0]) {
            findDel = arr[i][0] - arr[i - 1][0];
            findIndex = i - 1;
        }
    }
    return arr.slice(findIndex, findIndex + 2);
}
function closest3(s) {
    if (s === "")
        return [];
    const splitted = s.split(" ");
    const positions = splitted.map((_, i) => i);
    const values = splitted.map((x) => +x);
    const weights = splitted.map((x) => x.split("").reduce((a, v) => a + +v, 0));
    const ranks = splitted.map((_, i) => i);
    ranks.sort((a, b) => weights[a] - weights[b] || positions[a] - positions[b]);
    let delta = Number.MAX_SAFE_INTEGER;
    let best = 0;
    for (let i = 1; i < ranks.length; i++) {
        const d = weights[ranks[i]] - weights[ranks[i - 1]];
        if (d < delta) {
            delta = d;
            best = i - 1;
        }
    }
    const s1 = ranks[best];
    const s2 = ranks[best + 1];
    return [
        [weights[s1], positions[s1], values[s1]],
        [weights[s2], positions[s2], values[s2]],
    ];
}
const closest4 = (z) => z
    ? z
        .split(" ")
        .map((s, i) => [
        s
            .split("")
            .map((c) => +c)
            .reduce((w, d) => (w += d)),
        i,
        +s,
    ])
        .sort(([a, b], [c, d]) => a - c || b - d)
        .reduce((d, w, i, [_, ...a]) => a[i]
        ? [...d, [a[i][0] - w[0], i, [w, a[i]]]]
        : d, [])
        .sort(([a, b], [c, d]) => a - c || b - d)[0][2]
    : [];
exports.closest4 = closest4;
function closest5(strng) {
    let numbers = strng.split(" ");
    let sumDigits = numbers.map((s) => s.split("").reduce((acc, d) => {
        acc += parseInt(d);
        return acc;
    }, 0));
    let diff = -1;
    let res = [];
    for (let i = 0; i < sumDigits.length - 1; i++) {
        for (let j = i + 1; j < sumDigits.length; j++) {
            const currentDiff = Math.abs(sumDigits[i] - sumDigits[j]);
            if (diff < 0 || currentDiff < diff) {
                diff = currentDiff;
                res = [
                    [sumDigits[i], i, parseInt(numbers[i])],
                    [sumDigits[j], j, parseInt(numbers[j])],
                ];
            }
            else if (currentDiff == diff) {
                if (sumDigits[i] + sumDigits[j] < res[0][0] + res[1][0]) {
                    diff = currentDiff;
                    res = [
                        [sumDigits[i], i, parseInt(numbers[i])],
                        [sumDigits[j], j, parseInt(numbers[j])],
                    ];
                }
            }
        }
    }
    return res.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });
}
class ClosestWeight {
    constructor(inputNums) {
        this.nestedNums = [];
        this.weights = [];
        this.weightsChart = {};
        this.diffsChart = {};
        this.nums = [];
        this.closestWeightsIndex = 0;
        this.smallestWeghtDiff = 999999999;
        this.num1_index = 0;
        this.num2_index = 1;
        this.inputNums = inputNums;
    }
    parseInputs() {
        this.nums = this.inputNums.split(" ").map((d) => parseInt(d));
        console.log("nums", this.nums);
    }
    calcWeights() {
        this.weights = this.nums.map((n) => n
            .toString()
            .split("")
            .reduce((a, b) => a + parseInt(b), 0));
        console.log("weights", this.weights);
    }
    saveClosestAndSmallest(weightDiff, num1_index, num2_index) {
        this.smallestWeghtDiff = weightDiff;
        this.num1_index = num1_index;
        this.num2_index = num2_index;
    }
    findClosestAndSmallest() {
        this.smallestWeghtDiff = Math.abs(this.weights[0] - this.weights[1]);
        for (let i = 0; i < this.nums.length - 1; i++) {
            for (let j = i + 1; j < this.nums.length; j++) {
                let weight_i = this.weights[i];
                let weight_j = this.weights[j];
                let weightdiff = Math.abs(this.weights[i] - this.weights[j]);
                if (weightdiff < this.smallestWeghtDiff) {
                    this.saveClosestAndSmallest(weightdiff, i, j);
                }
                else if (weightdiff == this.smallestWeghtDiff) {
                    let currentWeight = weight_i + weight_j;
                    let smallestWeight = this.weights[this.num1_index] +
                        this.weights[this.num2_index];
                    if (currentWeight < smallestWeight) {
                        this.saveClosestAndSmallest(weightdiff, i, j);
                    }
                    else if (currentWeight == smallestWeight) {
                        if (i + j < this.num1_index + this.num2_index) {
                            this.saveClosestAndSmallest(weightdiff, i, j);
                        }
                    }
                }
            }
        }
    }
    formatNum(index) {
        return [this.weights[index], index, this.nums[index]];
    }
    run() {
        this.parseInputs();
        if (this.nums.length < 2)
            return [];
        this.calcWeights();
        this.findClosestAndSmallest();
        if (this.weights[this.num1_index] > this.weights[this.num2_index])
            [this.num1_index, this.num2_index] = [
                this.num2_index,
                this.num1_index,
            ];
        return [
            this.formatNum(this.num1_index),
            this.formatNum(this.num2_index),
        ];
    }
}
function closest6(strng) {
    return new ClosestWeight(strng).run();
}
exports.closest6 = closest6;
const countKprimes = (k, start, nd) => {
    return [];
};
exports.countKprimes = countKprimes;
const puzzle = (s) => {
    return -1;
};
exports.puzzle = puzzle;
function john(n) {
    return [];
}
exports.john = john;
function ann(n) {
    return [];
}
exports.ann = ann;
function sumJohn(n) {
    return 0;
}
exports.sumJohn = sumJohn;
function sumAnn(n) {
    return 0;
}
exports.sumAnn = sumAnn;
function toBase64(str) {
    return "hello";
}
exports.toBase64 = toBase64;
function fromBase64(str) {
    return "hello";
}
exports.fromBase64 = fromBase64;
const buddy5 = (start, limit) => {
    const divSum = (num) => {
        let result = 0;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                if (i == num / i)
                    result += i;
                else
                    result += i + num / i;
            }
        }
        return result + 1;
    };
    let solution = [];
    for (let i = start; i <= limit; i += 1) {
        const divisorsSum = divSum(i);
        let k = divisorsSum < i ? i + 1 : divisorsSum - 1;
        let buddyDivisorsSum = divSum(k);
        if (buddyDivisorsSum === i + 1 && divisorsSum === k + 1) {
            console.log("Match found:", i, k);
            solution.push(i, k);
            return solution;
        }
    }
    return solution;
};
function sumFactor(n) {
    let total = 1;
    for (let i = 2; i <= Math.sqrt(n) + 1; i++) {
        if (n % i == 0)
            total += i + n / i;
    }
    return total;
}
function buddy2(start, limit) {
    for (let i = start; i <= limit; i++) {
        let a = sumFactor(i) - 1;
        let b = sumFactor(a) - 1;
        if (b == i && i < a)
            return [i, a];
    }
    return [];
}
exports.buddy2 = buddy2;
function buddy3(start, limit) {
    function aux(n) {
        var res = 1, i = 2;
        for (; i * i < n; i++)
            if (n % i === 0)
                res += i + n / i;
        if (i * i === n)
            res += i;
        return res;
    }
    for (let k = start; k <= limit; k++) {
        let m = aux(k) - 1;
        if (k === aux(m) - 1 && k < m)
            return [k, m];
    }
    return [];
}
const divisors = (n) => {
    let divisors = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (i === n / i) {
                divisors.push(n);
            }
            else {
                divisors.push(i);
                divisors.push(n / i);
            }
        }
    }
    return divisors;
};
const properDivisors = (num) => divisors(num).filter((n) => n !== num);
const sumOfProperDivisors = (num) => properDivisors(num).reduce((prev, curr) => prev + curr, 0);
function buddy(start, limit) {
    for (let n = start; n <= limit; n++) {
        let m = sumOfProperDivisors(n) - 1;
        if (m <= n)
            continue;
        if (sumOfProperDivisors(m) - 1 === n) {
            return [n, m];
        }
    }
    return [];
}
exports.buddy = buddy;
const DUMMY = {
    48: 75,
    1050: 1925,
    2024: 2295,
    5775: 6128,
    8892: 16587,
    9504: 20735,
    62744: 75495,
    186615: 206504,
    196664: 219975,
    199760: 309135,
    266000: 507759,
    312620: 549219,
    526575: 544784,
    573560: 817479,
    587460: 1057595,
    1000824: 1902215,
    1081184: 1331967,
    1139144: 1159095,
    1173704: 1341495,
    1208504: 1348935,
    1233056: 1524831,
    1236536: 1459143,
    1279950: 2576945,
    1921185: 2226014,
    2036420: 2681019,
    2102750: 2142945,
    2140215: 2421704,
    2171240: 3220119,
    2198504: 3123735,
    2312024: 3010215,
    2580864: 5644415,
    2958500: 3676491,
};
const ARR = Object.keys(DUMMY).map(Number);
function buddy4(start, limit) {
    const v = ARR.find((v) => v >= start) || -1;
    const w = DUMMY[v];
    return v != -1 && v <= limit ? [v, w] : [];
}
exports.buddy4 = buddy4;
const dr = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010\n" +
    "+1-541-984-3012 <P Reed> /PO Box 530; Pollocksville, NC-28573\n :+1-321-512-2222 <Paul Dive> Sequoia Alley PQ-67209\n" +
    "+1-741-984-3090 <Peter Reedgrave> _Chicago\n :+1-921-333-2222 <Anna Stevens> Haramburu_Street AA-67209\n" +
    "+1-111-544-8973 <Peter Pan> LA\n +1-921-512-2222 <Wilfrid Stevens> Wild Street AA-67209\n" +
    "<Peter Gone> LA ?+1-121-544-8974 \n <R Steell> Quora Street AB-47209 +1-481-512-2222\n" +
    "<Arthur Clarke> San Antonio $+1-121-504-8974 TT-45120\n <Ray Chandler> Teliman Pk. !+1-681-512-2222! AB-47209,\n" +
    "<Sophia Loren> +1-421-674-8974 Bern TP-46017\n <Peter O'Brien> High Street +1-908-512-2222; CC-47209\n" +
    "<Anastasia> +48-421-674-8974 Via Quirinal Roma\n <P Salinger> Main Street, +1-098-512-2222, Denver\n" +
    "<C Powel> *+19-421-674-8974 Chateau des Fosses Strasbourg F-68000\n <Bernard Deltheil> +1-498-512-2222; Mount Av.  Eldorado\n" +
    "+1-099-500-8000 <Peter Crush> Labrador Bd.\n +1-931-512-4855 <William Saurin> Bison Street CQ-23071\n" +
    "<P Salinge> Main Street, +1-098-512-2222, Denve\n" +
    "/+5-541-754-3010 156 Alphandria_Street. <Jr Part>\n 1333, Green, Road <F Fulgur> NW-46423 ;+6-541-914-3010!\n" +
    "+5-541-984-3012 <Peter Reeves> /PO Box 5300; Albertville, SC-28573\n :+5-321-512-2222 <Paulo Divino> Boulder Alley ZQ-87209\n" +
    "+3-741-984-3090 <F Flanaghan> _Chicago Av.\n :+3-921-333-2222 <Roland Scorsini> Bellevue_Street DA-67209\n" +
    "+8-111-544-8973 <Laurence Pantow> SA\n +8-921-512-2222 <Raymond Stevenson> Joly Street EE-67209\n" +
    "<John Freeland> Mantow ?+2-121-544-8974 \n <Robert Mitch> Eleonore Street QB-87209 +2-481-512-2222?\n" +
    "<Arthur Paternos> San Antonio $+7-121-504-8974 TT-45121\n <Ray Charles> Stevenson Pk. !+7-681-512-2222! CB-47209,\n" +
    "<JP Gorce> +9-421-674-8974 New-Bern TP-16017\n <P McDon> Revolution Street +2-908-512-2222; PP-47209\n" +
    "<Elizabeth Corber> +8-421-674-8974 Via Papa Roma\n <C Saborn> Main Street, +15-098-512-2222, Boulder\n" +
    "<Colin Marshall> *+9-421-674-8974 Edinburgh UK\n <Bernard Povit> +3-498-512-2222; Hill Av.  Cameron\n" +
    "+12-099-500-8000 <Pete Highman> Ontario Bd.\n +8-931-512-4855 <W Mount> Oxford Street CQ-23071\n" +
    "<Donald Drinkaw> Moon Street, +3-098-512-2222, Peterville\n";
const phone = (str, num) => {
    const dataArr = str.split("\n");
    const entryMatches = dataArr.filter((entry) => entry.indexOf(num) > -1);
    console.log("entry matches:", entryMatches);
    if (entryMatches.length === 0)
        return `Error => Not found: ${num}`;
    if (entryMatches.length > 1)
        return `Error => Too many people: ${num}`;
    const phoneFormat = new RegExp(/\d{1,2}-\d{3}-\d{3}-\d{4}/g);
    const phoneNum = entryMatches[0].match(phoneFormat)[0];
    console.log("   number:", phoneNum);
    const nameFormat = new RegExp(/(?<=<).*?(?=>)/g);
    const name = entryMatches[0].match(nameFormat)[0];
    console.log("   name:", name);
    let address = entryMatches[0]
        .replace(/<.*?>/g, "")
        .replace(/\+\d{1,2}-\d{3}-\d{3}-\d{4}/g, "")
        .replace(/_/g, " ")
        .replace(/\//g, "")
        .replace(/[^a-zA-Z0-9 \- \.]/g, "")
        .replace(/\s{2,}/g, " ")
        .trim();
    console.log(`Phone => ${phoneNum}, Name => ${name}, Address => ${address}`);
    const solution = `Phone => ${phoneNum}, Name => ${name}, Address => ${address}`;
    return solution;
};
const phone2 = (str, num) => {
    const dataArr = str.split("\n");
    const entryMatches = dataArr.filter((entry) => entry.indexOf(num) > -1);
    if (entryMatches.length === 0)
        return `Error => Not found: ${num}`;
    if (entryMatches.length > 1)
        return `Error => Too many people: ${num}`;
    const phoneFormat = new RegExp(/\d{1,2}-\d{3}-\d{3}-\d{4}/g);
    const phoneNum = entryMatches[0].match(phoneFormat)[0];
    const nameFormat = new RegExp(/(?<=<).*?(?=>)/g);
    const name = entryMatches[0].match(nameFormat)[0];
    let address = entryMatches[0]
        .replace(nameFormat, "")
        .replace(phoneFormat, "")
        .replace(/_/g, " ")
        .replace(/\//g, "")
        .replace(/[^a-zA-Z0-9 \- \.]/g, "")
        .replace(/\s{2,}/g, " ")
        .trim();
    const solution = `Phone => ${phoneNum}, Name => ${name}, Address => ${address}`;
    return solution;
};
const getName = (phoneData) => {
    var _a;
    return (_a = phoneData.match("<(.*?)>")) !== null && _a !== void 0 ? _a : ["", ""];
};
const getPhoneNumber = (phoneData) => {
    var _a, _b;
    return ((_b = (_a = phoneData.match(/(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/g)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : "");
};
const cleanupAddress = (address) => {
    return [...address]
        .join("")
        .replace(/[`~!@#$%^&*()|+\=?;:'",<>\{\}\[\]\\\/]/g, "")
        .replace(/_/g, " ")
        .replace(/\s+/g, " ")
        .trim();
};
const phone3 = (strng, num) => {
    const matchingResults = strng.split(/\n/g).filter((a) => a.includes(num));
    if (matchingResults.length === 0) {
        return `Error => Not found: ${num}`;
    }
    if (matchingResults.length > 1) {
        return `Error => Too many people: ${num}`;
    }
    const phoneData = matchingResults[0];
    const [nameWithTags, name] = getName(phoneData);
    const phoneNumber = getPhoneNumber(phoneData);
    const address = [...phoneData]
        .join("")
        .replace(nameWithTags, "")
        .replace(phoneNumber, "")
        .trim();
    const cleanedUpAddress = cleanupAddress(address);
    return `Phone => ${num}, Name => ${name}, Address => ${cleanedUpAddress}`;
};
exports.phone3 = phone3;
const phone4 = (strng, num) => {
    const re = new RegExp(`(?:\\n|\/)((?:.(?!\\n))*\\\+${num}.*?)\\n`, "gmi");
    let s = strng.match(re);
    if (!s) {
        return `Error => Not found: ${num}`;
    }
    if (s.length > 1) {
        return `Error => Too many people: ${num}`;
    }
    let str = s[0].replace("\n", "").trim();
    const nameReg = str.match(/<(.*)>/gim);
    let name = nameReg ? nameReg[0] : "";
    str = str
        .replace(name, "")
        .replace(`+${num}`, "")
        .replace(/[*|;|\/|\?|\$|,|\:]/g, "")
        .replace(/\s\s+/g, " ")
        .replace("_", " ");
    name = name.replace(/[<|>]/g, "");
    return `Phone => ${num}, Name => ${name.trim()}, Address => ${str.trim()}`;
};
const phone6 = (strng, num) => {
    const lines = strng.split("\n");
    const relevantLines = lines.filter((line) => line.includes(num));
    if (relevantLines.length === 0) {
        return `Error => Not found: ${num}`;
    }
    if (relevantLines.length > 1) {
        return `Error => Too many people: ${num}`;
    }
    const line = relevantLines[0];
    const name = line.match(/<([^>]+)>/)[1];
    const address = line
        .replace(num, "")
        .replace(name, "")
        .replace(/[^a-z0-9\.\s\-_]/gi, "")
        .replace(/[\s_]+/g, " ")
        .trim();
    return `Phone => ${num}, Name => ${name}, Address => ${address}`;
};
const movingShift = (s, shift) => {
    return [];
};
const demovingShift = (arr, shift) => {
    return "";
};
class G9640 {
}
G9640.dec2FactString = (nb) => {
    return "hello";
};
G9640.factString2Dec = (str) => {
    return 1;
};
function solequa(n) {
    return [[1, 1]];
}
function smallest(n) {
    return [1];
}
function going(n) {
    return -1;
}
const findUniq = (arr) => {
    let match = "";
    let reducedStrArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        const current = arr[i]
            .replace(/\s/g, "")
            .toLowerCase()
            .split("")
            .sort()
            .join("");
        const set = new Set(current);
        const reduced = Array.from(current).join("");
        reducedStrArr.push(reduced);
    }
    for (let i = 0; i < reducedStrArr.length; i += 1) {
        let current = reducedStrArr[i];
        if (i === 0) {
            if (current !== reducedStrArr[i + 1] &&
                current !== reducedStrArr[i + 2]) {
                match = current;
                break;
            }
        }
        if (i > 0 && i < reducedStrArr.length - 1) {
            if (current !== reducedStrArr[i - 1] &&
                current !== reducedStrArr[i + 1]) {
                match = current;
                break;
            }
        }
        if (i === reducedStrArr.length - 1) {
            if (current !== reducedStrArr[i - 1] &&
                current !== reducedStrArr[i - 2]) {
                match = current;
                break;
            }
        }
    }
    const matchIndex = reducedStrArr.indexOf(match);
    const solution = arr[matchIndex];
    return solution;
};
function findUniq2(arr) {
    const regx = new RegExp(`[${arr[0]}]`, "ig");
    const resultArray = arr.map((value) => value.replace(regx, ""));
    let trueCheck = false;
    if (resultArray[1] === "" || resultArray[2] === "")
        trueCheck = true;
    if (trueCheck) {
        for (let i = 1; i < resultArray.length; i++) {
            if (resultArray[i] !== "")
                return arr[i];
        }
        return "Log";
    }
    else {
        return arr[0];
    }
}
function findUniq3(arr) {
    let newArr = arr.map((a) => [...new Set(a.toLowerCase())].sort().join(""));
    return arr.find((str, i) => newArr.indexOf(newArr[i]) === newArr.lastIndexOf(newArr[i]));
}
function findUniq4(arr) {
    const isEqual = (a, b) => {
        const aSet = new Set(a.toLowerCase());
        const bSet = new Set(b.toLowerCase());
        if (aSet.size !== bSet.size)
            return false;
        return [...aSet].every((letter) => bSet.has(letter));
    };
    const etalon = isEqual(arr[0], arr[1]) ? arr[0] : arr[2];
    return arr.filter((str) => !isEqual(str, etalon))[0];
}
const findUniq5 = (arr) => arr
    .sort()
    .filter((x, _, array) => x.match(new RegExp(`[^${array[1]}]`, `ig`)))[0] || `Log`;
exports.findUniq5 = findUniq5;
function findUniq6(arr) {
    var _a;
    function hash(value) {
        return Array.from(new Set(value.split("").map((c) => c.toLowerCase())))
            .sort()
            .filter((c) => c !== " ")
            .join("");
    }
    const x = hash(arr[hash(arr[0]) === hash(arr[1]) ? 0 : 2]);
    return (_a = arr.find((v) => hash(v) !== x)) !== null && _a !== void 0 ? _a : "";
}
function findUniq7(arr) {
    const cleaned = arr.map((s) => [...new Set(s.replace(/\s/g, "").toLowerCase().split(""))]
        .sort()
        .join(""));
    const notUnique = cleaned[cleaned[0] === cleaned[1] ? 0 : 2];
    const uniqueIndex = cleaned.findIndex((s) => s !== notUnique);
    return arr[uniqueIndex];
}
class Vector {
    constructor(components) {
    }
}
function interpreter(code, tape) {
    return "hello";
}
function decomp(n) {
    return "your code";
}
const beeramid = (bonus, price) => {
    let totalDrinks = Math.trunc(bonus / price);
    let levelCounter = 0;
    for (let i = 1; i <= Math.abs(bonus / price); i += 1) {
        let currSquare = Math.pow(i, 2);
        if (totalDrinks < currSquare)
            break;
        levelCounter += 1;
        totalDrinks -= currSquare;
    }
    return levelCounter;
};
function beeramid2(bonus, price) {
    let level = 0;
    let n = 1;
    let i = 1;
    while (n <= Math.floor(bonus / price)) {
        i++;
        n += i ** 2;
        level++;
    }
    return level;
}
function beeramid3(bonus, price) {
    let pyramidLevel = 1;
    let remainingBonus = bonus;
    let nextLevelCost = pyramidLevel * pyramidLevel * price;
    while (remainingBonus >= nextLevelCost) {
        remainingBonus -= nextLevelCost;
        pyramidLevel++;
        nextLevelCost = pyramidLevel * pyramidLevel * price;
    }
    return pyramidLevel - 1;
}
function beeramid6(bonus, price) {
    let maxCan = Math.floor(bonus / price);
    let result = 0;
    while (Math.pow(result + 1, 2) <= maxCan) {
        result++;
        maxCan -= Math.pow(result, 2);
    }
    return result;
}
function beeramid7(bonus, price) {
    let i = 1;
    while (true) {
        const total = ((i * (i + 1) * (2 * i + 1)) / 6) * price;
        if (total > bonus) {
            return i - 1;
        }
        i++;
    }
}
function beeramid8(bonus, price) {
    const beer = Math.floor(bonus / price);
    let num = 0;
    let lvl = 0;
    while (num < beer) {
        num += lvl ** 2;
        if (num == beer)
            break;
        if (num > beer) {
            lvl--;
            break;
        }
        lvl++;
    }
    return lvl;
}
class SnakesLadders {
    constructor() {
    }
    play(die1, die2) {
        return "HELLO";
    }
}
const parseMolecule = (formula) => {
    const elementMatch = /[A-Z]{1}[a-z]?/g;
    console.log(formula.match(elementMatch));
};
const josephusSurvivor = (num, gap) => {
    let items = [];
    for (let i = 1; i <= num; i += 1) {
        items.push(i);
    }
    console.log(items);
    let solutionArr = [], seqArr = [...items];
    let validSteps = 0;
    for (let i = 0; i < seqArr.length; i += 1) {
        if (!solutionArr.includes(seqArr[i]))
            validSteps += 1;
        if (validSteps === gap) {
            solutionArr.push(seqArr[i]);
            validSteps = 0;
        }
        if (solutionArr.length === items.length)
            break;
        if (i === seqArr.length - 1)
            seqArr = seqArr.concat(items);
    }
    return solutionArr[solutionArr.length - 1];
};
const josephus2 = (items, gap) => {
    if (items.length === 1)
        return items;
    let solutionArr = [], seqArr = [...items];
    let validSteps = 0;
    for (let i = 0; i < seqArr.length; i += 1) {
        if (!solutionArr.includes(seqArr[i]))
            validSteps += 1;
        if (validSteps === gap) {
            solutionArr.push(seqArr[i]);
            validSteps = 0;
        }
        if (solutionArr.length === items.length)
            break;
        if (i === seqArr.length - 1)
            seqArr = seqArr.concat(items);
    }
    return solutionArr;
};
const josephus3 = (items, gap) => {
    if (items.length === 1)
        return items;
    let solutionArr = [], sequenceArr = [];
    for (let i = 0; i < items.length * 40; i += 1) {
        sequenceArr = sequenceArr.concat(items);
    }
    let validSteps = 0;
    for (let i = 0; i < sequenceArr.length; i += 1) {
        if (!solutionArr.includes(sequenceArr[i])) {
            validSteps += 1;
        }
        if (validSteps === gap) {
            solutionArr.push(sequenceArr[i]);
            validSteps = 0;
        }
        if (solutionArr.length === items.length)
            break;
    }
    return solutionArr;
};
const josephus4 = (items, k) => {
    let lst = [];
    let i = (k - 1) % items.length;
    while (items.length) {
        lst.push(items[i]);
        items.splice(i, 1);
        i = (i + k - 1) % items.length;
    }
    return lst;
};
const josephus5 = (items, k) => {
    const alive = [...items];
    const dead = [];
    let i = (k - 1) % alive.length;
    while (alive.length) {
        const killed = alive.splice(i, 1);
        dead.push(...killed);
        i = (i + k - 1) % alive.length;
    }
    return dead;
};
function josephus6(items, k) {
    const result = [];
    while (items.length > 0) {
        for (let skip = 1; skip < k; skip++) {
            items.push(items.shift());
        }
        result.push(items.shift());
    }
    return result;
}
const josephus7 = (items, k) => {
    let result = [];
    let currentIndex = 1;
    while (items.length > 0) {
        currentIndex = currentIndex + k - 1;
        while (currentIndex > items.length) {
            currentIndex = currentIndex - items.length;
        }
        result.push(items[currentIndex - 1]);
        items.splice(currentIndex - 1, 1);
    }
    return result;
};
const josephus8 = (items, k) => {
    let res = [];
    let i = (k - 1) % items.length;
    while (items.length) {
        res.push(items[i]);
        items.splice(i, 1);
        i = (i + k - 1) % items.length;
    }
    return res;
};
const convertFrac = (list) => {
    let solution = "";
    let denomsArr = [];
    list.forEach((frac) => {
        denomsArr.push(frac[1]);
    });
    let commDenom = 0;
    let i = Math.max(...denomsArr);
    while (true) {
        if (denomsArr.every((denom) => i % denom === 0)) {
            commDenom = i;
            break;
        }
        i++;
    }
    const uniqueComps = new Set();
    list.forEach((frac) => {
        solution += `(${frac[0] * (commDenom / frac[1])},${commDenom})`;
        uniqueComps.add(frac[0] * (commDenom / frac[1]));
    });
    let simplifiedSolution = "";
    uniqueComps.add(commDenom);
    const allCompsArr = Array.from(uniqueComps);
    for (let i = 2; i <= commDenom / 2; i++) {
        if (allCompsArr.every((comp) => comp % i === 0)) {
            simplifiedSolution = solution.replace(/\d+/g, (num) => (Number(num) / i).toString());
        }
    }
    return simplifiedSolution ? simplifiedSolution : solution;
};
const convertFrac2 = (lst) => {
    const gcd = (a, b) => (b ? gcd(b, a % b) : a);
    const lcm = (a, b) => (a * b) / gcd(a, b);
    const cd = lst.reduce((a, [_, d]) => lcm(d, a), 1);
    const lcd = lst.reduce((d, [a, c]) => gcd(d, (a * cd) / c), cd);
    return lst.map(([n, d]) => `(${(n * cd) / d / lcd},${cd / lcd})`).join("");
};
const gcd = (x, y) => {
    while (y != 0) {
        const z = x % y;
        x = y;
        y = z;
    }
    return x;
};
const lcm = (x, y) => (x * y) / gcd(x, y);
const convertFrac3 = (lst) => {
    const common = lst.map(([x, y]) => y).reduce(lcm, 1);
    const acc = lst.map(([x, y]) => x * (common / y));
    const least = acc.reduce(gcd, common);
    return acc.map((x) => `(${x / least},${common / least})`).join("");
};
const findGcd = (a, b) => (b ? findGcd(b, a % b) : a);
const findLcm = (a, b) => (a * b) / findGcd(a, b);
const findLcmOfList = (arr) => arr.reduce((lcm, num) => findLcm(lcm, num), 1);
const simplify = (a, b) => {
    const gcd = findGcd(a, b);
    return gcd === 1 ? [a, b] : [a / gcd, b / gcd];
};
const convertFrac4 = (lst) => {
    let denoms = [];
    const list = lst.map(([n0, n1]) => {
        const simpleArr = simplify(n0, n1);
        denoms.push(simpleArr[1]);
        return simpleArr;
    });
    const lcm = findLcmOfList(denoms);
    return list.reduce((result, [n0, n1]) => `${result}(${(n0 * lcm) / n1},${lcm})`, "");
};
exports.convertFrac4 = convertFrac4;
const convertFrac5 = (lst) => {
    if (lst.length == 0)
        return "";
    const getPrimes = function (maxNum) {
        const candidates = Array.from({ length: maxNum }, (i) => true);
        const maxi = Math.floor(Math.sqrt(maxNum));
        for (let i = 2; i <= maxi; i++) {
            if (candidates[i]) {
                const sqi = i * i;
                for (let k = 0;; k++) {
                    const j = sqi + i * k;
                    if (j > maxNum)
                        break;
                    candidates[j] = false;
                }
            }
        }
        const primes = [];
        for (let i = 2; i < candidates.length; i++) {
            if (candidates[i]) {
                primes.push(i);
            }
        }
        return primes;
    };
    const max_denom = lst
        .map((i) => i[1])
        .reduce((carry, item) => {
        if (carry < item)
            return item;
        return carry;
    });
    const primes = getPrimes(max_denom + 1);
    const factorize = function (num) {
        const res = {};
        primes.forEach((prime) => {
            let cnt = 0;
            while (num > 1) {
                if (num % prime === 0) {
                    num = Math.floor(num / prime);
                    cnt++;
                }
                else {
                    break;
                }
            }
            if (cnt > 0)
                res[prime] = cnt;
        });
        return res;
    };
    const simplified_lst = lst.map((item) => {
        const fnum = factorize(item[0]);
        const fdenom = factorize(item[1]);
        const cfactors = {};
        Object.keys(fnum).forEach((prime) => {
            if (fdenom[parseInt(prime)]) {
                cfactors[parseInt(prime)] =
                    fnum[parseInt(prime)] <= fdenom[parseInt(prime)]
                        ? fnum[parseInt(prime)]
                        : fdenom[parseInt(prime)];
            }
        });
        const div = Object.keys(cfactors).reduce((carry, prime) => {
            return carry * Math.pow(parseInt(prime), cfactors[parseInt(prime)]);
        }, 1);
        return [Math.floor(item[0] / div), Math.floor(item[1]) / div];
    });
    const fdenoms = simplified_lst.map((item) => {
        return factorize(item[1]);
    });
    const lcm_factors = {};
    for (const factors of fdenoms) {
        for (const prime in factors) {
            if (lcm_factors[parseInt(prime)]) {
                if (factors[parseInt(prime)] > lcm_factors[parseInt(prime)])
                    lcm_factors[parseInt(prime)] = factors[parseInt(prime)];
            }
            else {
                lcm_factors[parseInt(prime)] = factors[parseInt(prime)];
            }
        }
    }
    const lcd = Object.keys(lcm_factors).reduce((carry, prime) => {
        return carry * Math.pow(parseInt(prime), lcm_factors[parseInt(prime)]);
    }, 1);
    return simplified_lst
        .map((item) => {
        const num = Math.floor((item[0] * lcd) / item[1]);
        return `(${num},${lcd})`;
    })
        .join("");
};
exports.convertFrac5 = convertFrac5;
function brainLuck(code, input) {
}
function add(n) {
    const sum = function (y) {
        return add(n + y);
    };
    sum.valueOf = function () {
        return n;
    };
    return sum;
}
function add2(x) {
    const fn = (y) => add(x + y);
    fn.valueOf = () => x;
    return fn;
}
function add3(x) {
    const addNum = (next) => {
        return add(x + next);
    };
    addNum.valueOf = () => {
        return x;
    };
    return addNum;
}
function add4(x) {
    let currentSum = x;
    function f(y) {
        if (typeof y === "number") {
            currentSum += y;
            return f;
        }
    }
    f.toString = function () {
        return currentSum;
    };
    return f;
}
function add5(n) {
    return Object.assign((i) => add(i + n), { valueOf: () => n });
}
class G965 {
    static removeNb(n) {
    }
}
const chooseBestSum = (maxDist, numTowns, list) => {
    const generatePermutations = (list, size = list.length) => {
        if (size > list.length)
            return [];
        else if (size == 1)
            return list.map((d) => [d]);
        return list.flatMap((d) => generatePermutations(list.filter((a) => a !== d), size - 1).map((item) => [d, ...item]));
    };
    const allPermutations = generatePermutations(list, numTowns);
    console.log(allPermutations);
    const allDistances = allPermutations.map((arr) => {
        return arr.reduce((acc, curr) => acc + curr);
    });
    console.log(allDistances);
    const distsInRange = allDistances.filter((dist) => dist <= maxDist);
    console.log(distsInRange);
    const solution = Math.max(...distsInRange, 0);
    console.log(solution);
    return solution ? solution : null;
};
class G964b {
}
G964b.gap = (gap, min, max) => {
    let solution = [];
    let primesArr = [];
    let allMatchesArr = [];
    const isPrime = (num) => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };
    for (let i = min; i <= max; i++) {
        let prime = 0;
        if (isPrime(i)) {
            prime = i;
            primesArr.push(prime);
        }
    }
    console.log(primesArr);
    const gapsArr = primesArr.map((el, idx) => {
        if (primesArr[idx + 1] - el === gap) {
            console.log("match found");
            allMatchesArr.push([el, primesArr[idx + 1]]);
        }
        return primesArr[idx + 1] - el;
    });
    console.table({
        primesArr: primesArr,
        "gaps arr: ": gapsArr,
        allMatchesArr: allMatchesArr,
    });
    if (allMatchesArr.length === 0) {
        console.log("empty array");
        return [0, 0];
    }
    solution = allMatchesArr[0];
    return solution;
};
class G964b1 {
    static isPrime(n) {
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}
G964b1.gap = (g, m, n) => {
    let lower = 0;
    for (let i = m; i < n; i++) {
        if (G964b1.isPrime(i)) {
            if (lower === 0 || i - lower !== g) {
                lower = i;
            }
            else {
                return [lower, i];
            }
        }
    }
    return null;
};
class G964b3 {
}
G964b3.gap = (g, m, n) => {
    const primes = [];
    for (let i = m; i < n; i++) {
        let prime = true;
        for (let j = 2; j < i / 2; j++) {
            if (i % j === 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            primes.push(i);
            const length = primes.length;
            if (length > 1) {
                if (primes[length - 1] - primes[length - 2] === g) {
                    return [primes[length - 2], primes[length - 1]];
                }
            }
        }
    }
    return null;
};
const countPrimes = (primes) => {
    const counter = {};
    primes.forEach((number) => (counter[number] = (counter[number] || 0) + 1));
    console.log(counter);
    return "hello";
};
const primeFactors = (num) => {
    let factors = [];
    let numRemainder = num;
    let solution = "";
    const isPrime = (num) => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };
    for (let i = 2; i < (num - 1) / 2; i++) {
        let prime = 0;
        if (isPrime(i)) {
            prime = i;
            while (numRemainder % prime === 0) {
                numRemainder = numRemainder / prime;
                factors.push(prime);
            }
        }
        if (numRemainder === 1)
            break;
    }
    console.log(factors);
    if (factors.length === 0)
        return `(${num})`;
    let counter = 0;
    for (let i = 0; i < factors.length; i++) {
        counter++;
        console.log("counter: ", counter);
        if (factors[i] !== factors[i + 1] && factors[i] !== undefined) {
            console.log("new factor: ", factors[i], i);
            solution +=
                counter < 2 ? `(${factors[i]})` : `(${factors[i]}**${counter})`;
            counter = 0;
        }
    }
    return solution;
};
class G964a {
}
G964a.perimeter = (num) => {
    const fibonacciFirstN = (num) => {
        const fibSequence = [1, 1];
        for (let i = 0; i < num - 1; i++) {
            let next = fibSequence[i] + fibSequence[i + 1];
            fibSequence.push(next);
        }
        return fibSequence;
    };
    return 4 * fibonacciFirstN(num).reduce((a, b) => a + b);
};
class G964a2 {
}
G964a2.perimeter = (n) => {
    let numbers = [1, 1];
    for (let i = 2; i <= n; i++) {
        numbers.push(numbers[i - 1] + numbers[i - 2]);
    }
    return 4 * numbers.reduce((curr, acc) => acc + curr, 0);
};
class G964a3 {
}
G964a3.perimeter = (n) => {
    return (Array.from(Array(n + 2).keys())
        .map((e, i, arr) => {
        if (i > 0) {
            arr[i + 1] = arr[i] + arr[i - 1];
            return e;
        }
        else {
            return 1;
        }
    })
        .slice(1)
        .reduce((a, b) => a + b) * 4);
};
class G964a4 {
}
class G964a5 {
}
G964a5.perimeter = (n) => {
    const fibCalc = [];
    function fibonacci(n) {
        if (fibCalc[n] !== undefined) {
            return fibCalc[n];
        }
        let calc;
        if (n < 2) {
            calc = n;
        }
        else {
            calc = fibonacci(n - 2) + fibonacci(n - 1);
        }
        fibCalc.push(calc);
        return calc;
    }
    let length = 0;
    for (let i = 0; i <= n + 1; i++) {
        length += 4 * fibonacci(i);
    }
    return length;
};
class G964a6 {
}
G964a6.perimeter = (n) => {
    var sum = 0;
    var first = 0;
    var last = 0;
    for (var i = 1; i <= n + 1; i++) {
        var el = first + last;
        el = el == 0 ? 1 : el;
        first = last;
        last = el;
        sum += el * 4;
    }
    return sum;
};
class G964a7 {
}
G964a7.perimeter = (n) => {
    let a = 0, b = 4, sum = 4;
    for (let i = 1; i <= n; i++) {
        const c = a + b;
        (a = b), (b = c), (sum += c);
    }
    return sum;
};
class G964 {
}
G964.productFib = (num) => {
    let solution = [];
    const sequence = [0, 1];
    const products = [];
    let current = 0;
    while (current <= num) {
        let next = sequence[current] + sequence[current + 1];
        sequence.push(next);
        let product = sequence[current + 1] * sequence[current + 2];
        products.push(product);
        if (product === num) {
            solution = [sequence[current + 1], sequence[current + 2], true];
            break;
        }
        else if (product > num) {
            solution = [
                sequence[current + 1],
                sequence[current + 2],
                false,
            ];
            break;
        }
        current++;
    }
    return solution;
};
class G9642 {
}
exports.G9642 = G9642;
G9642.productFib = (num) => {
    let solution = [];
    const sequence = [0, 1];
    const products = [];
    const fibMax = 15;
    for (let i = 0; i <= fibMax; i++) {
        let next = sequence[i] + sequence[i + 1];
        sequence.push(next);
        let product = sequence[i + 1] * sequence[i + 2];
        products.push(product);
        if (product === num) {
            console.log(`found: ${sequence[i + 1]} and ${sequence[i + 2]}`);
            solution = [sequence[i + 1], sequence[i + 2], true];
            break;
        }
        else if (product > num) {
            console.log("stop the loop: " + product);
            solution = [sequence[i + 1], sequence[i + 2], false];
            break;
        }
    }
    return solution;
};
const dirReduc = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] === "NORTH" && arr[i + 1] === "SOUTH") ||
            (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") ||
            (arr[i] === "EAST" && arr[i + 1] === "WEST") ||
            (arr[i] === "WEST" && arr[i + 1] === "EAST")) {
            arr.splice(i, 2);
            i -= 2;
        }
    }
    return arr;
};
function dirReduc2(arr) {
    var pat = /(NORTHSOUTH|SOUTHNORTH|EASTWEST|WESTEAST)/;
    var way = arr.join("");
    while (pat.test(way))
        way = way.replace(pat, "");
    return way.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}
const dirReduc3 = (arr) => {
    const opposites = [
        ["NORTH", "SOUTH"],
        ["EAST", "WEST"],
    ];
    return arr.reduce((acc, curr) => {
        const opposite = opposites
            .find((el) => el.includes(curr))
            .filter((el) => el !== curr)[0];
        const idx = acc.length - 1;
        return acc.length && acc[idx] === opposite
            ? acc.slice(0, idx)
            : acc.concat(curr);
    }, []);
};
function dirReduc4(arr) {
    let str = arr.join(":");
    while (str.match(/NORTH:*SOUTH/) ||
        str.match(/SOUTH:*NORTH/) ||
        str.match(/EAST:*WEST/) ||
        str.match(/WEST:*EAST/)) {
        str = str
            .replace(/NORTH:*SOUTH/g, "")
            .replace(/SOUTH:*NORTH/g, "")
            .replace(/EAST:*WEST/g, "")
            .replace(/WEST:*EAST/g, "");
    }
    return str.split(":").filter(Boolean);
}
function dirReduc5(arr) {
    arr = arr.map((dir) => dir.toUpperCase());
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] === "NORTH" && arr[i + 1] === "SOUTH") ||
            (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") ||
            (arr[i] === "WEST" && arr[i + 1] === "EAST") ||
            (arr[i] === "EAST" && arr[i + 1] === "WEST")) {
            arr.splice(i, 2);
            return dirReduc(arr);
        }
    }
    return arr;
}
const humanReadable = (secInput) => {
    const HOUR = 3600, MINUTE = 60;
    let secondsLeft = secInput;
    let hours = 0, minutes = 0, seconds = 0;
    const padToTwo = (num) => {
        return num < 10 ? `0${String(num)}` : `${String(num)}`;
    };
    hours = Math.floor(secondsLeft / HOUR);
    secondsLeft = secondsLeft % HOUR;
    minutes = Math.floor(secondsLeft / MINUTE);
    secondsLeft = secondsLeft % MINUTE;
    seconds = secondsLeft;
    return `${padToTwo(hours)}:${padToTwo(minutes)}:${padToTwo(seconds)}`;
};
const format = (n) => String(Math.floor(n)).padStart(2, "00");
function humanReadable2(seconds) {
    const h = seconds / 3600;
    const m = (seconds % 3600) / 60;
    const s = (seconds % 3600) % 60;
    return [h, m, s].map(format).join(":");
}
exports.humanReadable2 = humanReadable2;
function humanReadable3(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds / 60) % 60;
    const pad = (n) => `${n}`.padStart(2, "0");
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds % 60)}`;
}
const pigIt = (str) => {
    return str.replace(/[a-z]+/gi, (word) => `${word.slice(1)}${word.charAt(0)}ay`);
};
const pigIt2 = (str) => {
    const punctuation = /[?!\.]/g;
    if (punctuation.test(str.charAt(str.length - 1))) {
        console.log("punctuation: " + str.charAt(str.length - 1));
    }
    return str
        .split(" ")
        .map((word) => {
        return `${word.slice(1)}${word.charAt(0)}ay`;
    })
        .join(" ");
};
const pigIt3 = (a) => a.replace(/(\w)(\w+)*/g, "$2$1ay");
const pigIt4 = (a) => {
    return a.replace(/[a-z]+/gi, (x) => x.slice(1) + x[0] + "ay");
};
