"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gematria2 = exports.counter20 = exports.counter19 = exports.counter18 = exports.counter17 = exports.counter16 = exports.counter15 = exports.counter14 = exports.counter13 = exports.counter12 = exports.counter11 = exports.counter10 = exports.counter9 = exports.counter8 = exports.counter7 = exports.counter6 = exports.counter5 = exports.counter4 = exports.counter3 = exports.counter2 = exports.turn4 = exports.authList11 = exports.authList5 = exports.authList4 = exports.solution18 = exports.solution17 = exports.solution16 = exports.solution15 = exports.solution14 = void 0;
class Serializable {
    serialize() {
        return "hello";
    }
    deserialize(source) {
    }
}
function join(tokens, glue) {
    return "hello";
}
function pingPong(startNumber, endNumber) {
    return "";
}
function rotations(dieArray) {
    return 1;
}
const state = {
    modifier: 2,
};
const solution11 = (arr, options) => {
    for (let i = 0; i < arr.length; i += 1) {
        arr[i] += 2 * state.modifier;
    }
    console.log(arr);
    return arr;
};
function solution12(arr, options) {
    return arr.map((value) => value + 2 * options.modifier);
}
const solution13 = (arr, { modifier }) => arr.map((x) => x + modifier * 2);
const state2 = { modifier: 2 };
function solution14(arr, options) {
    let myArr = [];
    for (let i = 0; i < arr.length; i++) {
        myArr.push(arr[i] + 2 * options.modifier);
    }
    return myArr;
}
exports.solution14 = solution14;
const solution15 = (arr, options) => arr.map((val) => (val += 2 * options.modifier));
exports.solution15 = solution15;
function solution16(arr, options) {
    let newArr = [...arr];
    for (let i = 0; i < newArr.length; ++i) {
        newArr[i] += 2 * options.modifier;
    }
    return newArr;
}
exports.solution16 = solution16;
function solution17(arr, options) {
    let other = Object.assign([], arr);
    for (let i = 0; i < other.length; ++i) {
        other[i] += 2 * options.modifier;
    }
    return other;
}
exports.solution17 = solution17;
function solution18(arr, options) {
    return arr.map((item) => item + 2 * options.modifier);
}
exports.solution18 = solution18;
const mergeStrings = (first, second) => {
    return "";
};
const comparator = function (a, b) {
    return 0;
};
const decrypt = (str) => {
    return str;
};
function mapVector(vector, circle1, circle2) {
    return [0, 0];
}
function* allRationals() {
    yield [1, 1];
}
function anchorize(text) {
}
const startSmoking = (bars, boxes) => {
    const BAR = 180;
    const BOX = 18;
    const initialNum = bars * BAR + boxes * BOX;
    console.log("initialNum", initialNum);
    let total = initialNum;
    console.log("total", total);
    let current = Math.floor(total / 5) + (total % 5);
    console.log("current:", current);
    return 1000;
};
console.log(startSmoking(0, 1));
const truthy = [true, 1, "hello", [], {}, function () { }, Infinity, -Infinity];
const falsy = [false, 0, -0, "", null, undefined, NaN];
function sensorAnalysis(sensorData) {
    return [0, 0];
}
const redistributeWealth = (wealth) => {
    console.log(wealth);
    const total = wealth.reduce((acc, curr) => acc + curr);
    console.log(total);
    const average = total / wealth.length;
    console.log(average);
    for (let i = 0; i < wealth.length; i += 1) {
        wealth[i] = average;
    }
    console.log("solution:", wealth);
};
function redistributeWealth2(wealth) {
    const totalWealth = wealth.reduce((a, b) => a + b);
    wealth.fill(totalWealth / wealth.length);
}
function redistributeWealth3(wealth) {
    const sum = wealth.reduce((s, v) => s + v, 0);
    const avg = sum / wealth.length;
    wealth.fill(avg);
}
function redistributeWealth4(wealth) {
    let totalWealth = wealth.reduce((acc, val) => acc + val, 0);
    wealth.forEach((citizenWealth, ind) => (wealth[ind] = totalWealth / wealth.length));
}
const authList = (arr) => {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].length < 6 || arr[i].length > 10)
            return false;
        if (arr[i].match(/[a-z]{1,}[0-9]{1,}/g) === null)
            return false;
        if (arr[i].match(/[a-z]{1,}[0-9]{1,}/g)[0] !== arr[i])
            return false;
    }
    return true;
};
const authList2 = (arr) => arr.every((username) => /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,10}$/.test(username));
const test = (s) => /[0-9]/.test(s) && /[a-z]/.test(s) && /^[a-z0-9]{6,10}$/.test(s);
function authList3(arr) {
    return arr.every(test);
}
let validUsername = /(^(?=.*\d)(?=.*[a-z])[\da-z]{6,10}$)/;
function authList4(arr) {
    for (let i = 0; i < arr.length; i++) {
        let s = arr[i];
        if (!validUsername.test(s))
            return false;
    }
    return true;
}
exports.authList4 = authList4;
const rules = [
    (p) => {
        const l = p.length;
        return l >= 6 && l <= 10;
    },
    (p) => /[a-z]/.test(p),
    (p) => /[0-9]/.test(p),
    (p) => /^[a-z0-9]+$/.test(p),
];
function authList5(arr) {
    return arr.every((p) => rules.every((fn) => fn(p)));
}
exports.authList5 = authList5;
function authList6(arr) {
    return (arr.map((it) => /^[a-z]+[0-9]+/g.test(it)).filter((it) => it).length ==
        arr.length);
}
function authList7(arr) {
    const betweenSixAndTen = arr.every((elem) => elem.length >= 6 && elem.length <= 10);
    const containsLower = arr.every((elem) => /[a-z]/.test(elem));
    const containsOneNumber = arr.every((elem) => /[0-9]/.test(elem));
    const containsOnlyNumsAndLowerLetters = arr.every((elem) => (elem.match(/[0-9a-z]/g) || []).length === elem.length);
    return (betweenSixAndTen &&
        containsLower &&
        containsOneNumber &&
        containsOnlyNumsAndLowerLetters);
}
function auth(str) {
    return /^(?=.*\d)(?=.*[a-z])[\da-z]{6,10}$/.test(str);
}
function authList8(arr) {
    return arr.every(auth);
}
function authList9(arr) {
    return arr.every(auth2);
}
function auth2(str) {
    return /^(?=.*\d)(?=.*[a-z])[\da-z]{6,10}$/.test(str);
}
function authList10(arr) {
    return arr.every((login) => {
        return (login.length >= 6 &&
            login.length <= 10 &&
            login.match(/.*[0-9]+.*/) &&
            login.match(/.*[a-z]+.*/) &&
            login.match(/^[a-z0-9]{6,10}$/) &&
            true);
    });
}
const authList11 = (arr) => arr.every((name) => /^[a-z0-9]{6,10}$/.test(name) &&
    /[a-z]/.test(name) &&
    /\d/.test(name));
exports.authList11 = authList11;
function authList12(arr) {
    return arr.every((v) => /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,10}$/.test(v));
}
function f(x, y, z) {
    return 1;
}
const baumSweet2 = (num) => {
    let solution = [];
    for (let i = 0; i < num; i += 1) {
        console.log("\n ITERATION:", i);
        if (i === 0) {
            solution.push(1);
            continue;
        }
        const binary = i.toString(2);
        const blocksOfZero = binary.match(/0+/g);
        if (blocksOfZero === null) {
            console.log("   NO ZEROS");
            solution.push(1);
            continue;
        }
        const hasOddLength = blocksOfZero.some((block) => (block.length & 1) === 1);
        console.log("  --- binary", binary, "blocksOfZero:", blocksOfZero, "hasOddLength", hasOddLength);
        if (hasOddLength) {
            solution.push(0);
        }
        else {
            solution.push(1);
        }
    }
    console.log("-----solution array:", solution);
    return solution;
};
function* baumSweet3() {
    let solution = [];
    for (let i = 0; i < 1000000; i += 1) {
        if (i === 0) {
            solution.push(1);
            yield 1;
            continue;
        }
        const binary = i.toString(2);
        const blocksOfZero = binary.match(/0+/g);
        if (blocksOfZero === null) {
            solution.push(1);
            yield 1;
            continue;
        }
        const hasOddLength = blocksOfZero.some((block) => (block.length & 1) === 1);
        if (hasOddLength) {
            solution.push(0);
            yield 0;
        }
        else {
            solution.push(1);
            yield 1;
        }
    }
}
function* baumSweet() {
    for (let i = 0; i < 1000000; i += 1) {
        yield i
            .toString(2)
            .split(/1+/)
            .every((el) => el.length % 2 === 0 || i === 0)
            ? 1
            : 0;
    }
}
function* baumSweet4() {
    yield 1;
    let i = 0;
    while (true) {
        i += 1;
        yield +i
            .toString(2)
            .split(/1/g)
            .every((el) => el.length % 2 === 0);
    }
}
function* baumSweet5() {
    yield 1;
    for (var i = 1;; i += 1)
        yield +/^(1|00)+$/.test(i.toString(2));
}
function* baumSweet6() {
    yield 1;
    for (let i = 1;; i++) {
        if (i
            .toString(2)
            .split(/1/g)
            .some((el) => el.length % 2 === 1)) {
            yield 0;
        }
        else {
            yield 1;
        }
    }
}
function* baumSweet7() {
    yield 1;
    let num = 1;
    while (true) {
        yield +(num++)
            .toString(2)
            .split("1")
            .every((el) => el.length % 2 === 0);
    }
}
function* baumSweet8() {
    yield 1;
    for (let i = 1;; i++)
        yield +/^(1|00)+$/.test(i.toString(2));
}
function* baumSweet9() {
    yield 1;
    let i = 0;
    while (true) {
        i += 1;
        yield +i
            .toString(2)
            .split(/1/g)
            .every((el) => el.length % 2 === 0);
    }
}
const time = (distance, boatSpeed, stream) => {
    const streamArr = stream.split(" ");
    console.log(streamArr);
    const streamSpeed = Number(streamArr[1]);
    let speedMod = streamArr[0] === "Downstream" ? streamSpeed : -streamSpeed;
    console.log("speedMod:", speedMod);
    const solution = distance / (boatSpeed + speedMod);
    return Number.isInteger(solution) ? solution : Number(solution.toFixed(2));
};
function time2(distance, boatSpeed, stream) {
    var parts = stream.split(" ");
    var streamSpeed = parts[0] == "Downstream" ? parseInt(parts[1]) : -parseInt(parts[1]);
    return Math.round((distance / (boatSpeed + streamSpeed)) * 100) / 100;
}
function time3(distance, boatSpeed, stream) {
    let [a, b] = stream.split(" ");
    return a == "Downstream"
        ? +(distance / (boatSpeed + +b)).toFixed(2)
        : +(distance / (boatSpeed - +b)).toFixed(2);
}
function time4(distance, boatSpeed, stream) {
    const [streamDir, streamSpeed] = stream.split(" ");
    const factor = streamDir === "Upstream" ? -1 : 1;
    const speed = boatSpeed + factor * Number(streamSpeed);
    const time = distance / speed;
    return Number(time.toFixed(2));
}
function time5(distance, boatSpeed, stream) {
    var _a;
    const m = (_a = stream.match(/^(D|U).+ (\d+)$/)) !== null && _a !== void 0 ? _a : ["", "D", "0"];
    return (Math.round((distance / (boatSpeed + +m[2] * (m[1] === "D" ? 1 : -1))) * 100) / 100);
}
function time6(distance, boatSpeed, stream) {
    let [dir, speed] = stream.split(" ");
    boatSpeed += dir[0] === "U" ? -speed : +speed;
    return +(distance / boatSpeed).toFixed(2);
}
function heavyMetalUmlauts(boringText) {
    return "";
}
const clean = (array) => {
    let solution = [];
    array.forEach((el, idx) => {
        console.log("index:", idx, el);
        if (idx !== null)
            solution.push(el);
    });
    console.log(solution);
    return solution;
};
function clean2(array) {
    return array.filter((e) => true);
}
const clean3 = Object.values;
function clean4(array) {
    return array.filter((elem) => {
        return true;
    });
}
function clean5(array) {
    return array.filter(() => true);
}
function clean6(array) {
    return Object.values(array);
}
function clean7(array) {
    return array.filter((word) => typeof word);
}
function clean8(array) {
    const result = [];
    for (let i = 0; i < array.length; ++i) {
        if (array.hasOwnProperty(i)) {
            result.push(array[i]);
        }
    }
    return result;
}
const choreAssignment = (chores) => {
    let solution = [];
    const ascending = chores.sort((a, b) => a - b);
    console.log(ascending);
    for (let i = 0; i < chores.length / 2; i += 1) {
        solution.push(chores[i] + chores[chores.length - 1 - i]);
    }
    console.log(solution);
    console.log(solution.sort((a, b) => a - b));
    return solution.sort((a, b) => a - b);
};
function choreAssignment2(chores) {
    let arr = chores.sort((a, b) => a - b);
    let ans = [];
    for (let i = 0; i < arr.length / 2; i++) {
        ans.push(arr[i] + arr[arr.length - i - 1]);
    }
    return ans.sort((a, b) => a - b);
}
function choreAssignment3(chores) {
    const res = [];
    const newArr = chores.sort((a, b) => a - b);
    for (let i = 0; i < Math.floor(newArr.length / 2); i++) {
        res.push(newArr[i] + newArr[newArr.length - (i + 1)]);
    }
    return res.sort((a, b) => a - b);
}
function choreAssignment4(chores) {
    const output = [];
    chores.sort((a, b) => a - b);
    while (chores.length > 0) {
        output.push(chores.shift() + chores.pop());
    }
    output.sort((a, b) => a - b);
    return output;
}
function turn(current, target) {
    let Directions;
    (function (Directions) {
        Directions[Directions["N"] = 1] = "N";
        Directions[Directions["E"] = 2] = "E";
        Directions[Directions["S"] = 3] = "S";
        Directions[Directions["W"] = 4] = "W";
    })(Directions || (Directions = {}));
    let solution = "left";
    if (Directions[current] <= 3) {
        if (Directions[target] - Directions[current] === 1) {
            console.log("RIGHT");
            solution = "right";
        }
    }
    else {
        if (Directions[current] - Directions[target] === 3) {
            console.log("RIGHT");
            solution = "right";
        }
    }
    if (Directions[current] > 1) {
        if (Directions[current] - Directions[target] === 1) {
            console.log("LEFT");
            solution = "left";
        }
    }
    else {
        if (Directions[target] - Directions[current] === 3) {
            console.log("LEFT");
            solution = "left";
        }
    }
    return solution;
}
function turn4(c, t) {
    if (c === "N" && t === "W")
        return "left";
    if (c === "E" && t === "N")
        return "left";
    if (c === "S" && t === "E")
        return "left";
    if (c === "W" && t === "S")
        return "left";
    return "right";
}
exports.turn4 = turn4;
function turn5(f, s) {
    return "NESWN".includes(f + s) ? "right" : "left";
}
function turn6(c, t) {
    return "NW,SE,EN,WS".indexOf(c + t) > -1 ? "left" : "right";
}
function turn7(current, target) {
    const dirs = { N: 0, E: 1, S: 2, W: 3 };
    const dir = dirs[target] - dirs[current];
    if (dir === 1 || dir === -3)
        return "right";
    if (dir === -1 || dir === 3)
        return "left";
    throw new Error();
}
function hexWordSum(string) {
    return 1;
}
function countVegetables(s) {
}
function getNewNotes(salary, bills) {
    return 0;
}
function equalize(array) {
    return ["hello"];
}
const sixBitNumber = (str) => {
    if ((str.startsWith("0") && str.length > 1) || !str.length)
        return false;
    if (str.startsWith("-"))
        return false;
    if (str.includes(" "))
        return false;
    return Number(str) >= 0 && Number(str) < 64;
};
const getFreeUrinals = (str) => {
    if (str.indexOf("11") > -1)
        return -1;
    if (str.indexOf("1") > -1) {
        console.log("some places are taken");
    }
    if (str.indexOf("1") === -1) {
        console.log("all avaiable");
    }
    return 123;
};
const counter = () => {
    let num = 0;
    return () => {
        num += 1;
        return num;
    };
};
function counter2() {
    let i = 1;
    return function f() {
        return i++;
    };
}
exports.counter2 = counter2;
function counter3() {
    let count = 0;
    return () => {
        return ++count;
    };
}
exports.counter3 = counter3;
function counter4() {
    let count = 0;
    return () => ++count;
}
exports.counter4 = counter4;
function counter5() {
    var count = 0;
    function inner() {
        return ++count;
    }
    return inner;
}
exports.counter5 = counter5;
function counter6() {
    let obj = { value: 0 };
    return () => innerFunction(obj);
}
exports.counter6 = counter6;
function innerFunction(innerValue) {
    return ++innerValue.value;
}
function counter7() {
    let amount = 1;
    return () => amount++;
}
exports.counter7 = counter7;
function counter8() {
    let count = 0;
    return () => ++count;
}
exports.counter8 = counter8;
function counter9() {
    let count = 0;
    return function () {
        return ++count;
    };
}
exports.counter9 = counter9;
function counter10() {
    let x = 0;
    return () => {
        x++;
        return x;
    };
}
exports.counter10 = counter10;
function counter11() {
    let counter = 1;
    return () => {
        return counter++;
    };
}
exports.counter11 = counter11;
function counter12() {
    let cnt = 0;
    return () => ++cnt;
}
exports.counter12 = counter12;
const counter13 = () => {
    let cnt = 0;
    return () => {
        return ++cnt;
    };
};
exports.counter13 = counter13;
function counter14() {
    let countNumbers = 0;
    return function () {
        return (countNumbers += 1);
    };
}
exports.counter14 = counter14;
function counter15() {
    let counter = 1;
    return () => counter++;
}
exports.counter15 = counter15;
function counter16() {
    let _n = 1;
    return function () {
        return _n++;
    };
}
exports.counter16 = counter16;
function counter17() {
    let value = 0;
    return function () {
        value++;
        return value;
    };
}
exports.counter17 = counter17;
function counter18() {
    let value = 0;
    return () => ++value;
}
exports.counter18 = counter18;
function counter19() {
    let num = 1;
    return () => num++;
}
exports.counter19 = counter19;
function counter20() {
    let x = 1;
    return () => x++;
}
exports.counter20 = counter20;
const toQueryString = (obj) => {
    let solutionArr = [];
    console.log("\n ", Object.entries(obj));
    Object.entries(obj).forEach((entry, idx) => {
        console.log("\n index:", idx, "entry:", entry, "entry[1] length:", entry[1].length);
        if (typeof entry[1] !== "number" && typeof entry[1] !== "string") {
            let arrayVal = [];
            entry[1].forEach((value) => {
                arrayVal.push(entry[0] + "=" + value);
                console.log("arrayVal:", arrayVal);
                console.log("solution array ARRAY:", solutionArr);
                console.log("solution array ARRAY:", solutionArr);
            });
            solutionArr.push(arrayVal);
        }
        else {
            let singleVal = "";
            singleVal = entry[0] + "=" + entry[1];
            console.log("singleVal:", singleVal);
            solutionArr.push(singleVal);
            console.log("solution array SINGLE:", solutionArr);
        }
    });
    console.log("solution array:", solutionArr);
    const solution = solutionArr.flat().join("&");
    console.log(solution);
    return solution;
};
const toQueryString2 = (obj) => Object.entries(obj)
    .reduce((prev, [key, value]) => prev + assosiate(key, value) + "&", "")
    .slice(0, -1);
const assosiate = (key, value) => Array.isArray(value)
    ? value.flatMap((x) => `${key}=${x}`).join("&")
    : `${key}=${value}`;
const toQueryString5 = (x) => Object.entries(x)
    .flatMap(([k, v]) => [v].flat().map((v) => `${k}=${v}`))
    .join("&");
const toQueryString6 = (obj) => {
    const res = Object.entries(obj)
        .map((entries) => {
        const [k, v] = entries;
        if (Array.isArray(v))
            return v.map((value) => `${k}=${value}`).join("&");
        return `${k}=${v}`;
    })
        .join("&");
    return res;
};
const ranking = (people) => {
    console.log(people);
    let solution = [];
    let sortedByPoints = [];
    const sortedArr = people.sort((a, b) => b["points"] - a["points"]);
    console.log("sorted array:", sortedArr);
    sortedArr.forEach((obj, idx) => {
        console.log("undefined:", sortedArr[idx - 1] === undefined);
        console.log("obj.points:", sortedArr[idx]["points"]);
        let currentPerson = {
            name: obj["name"],
            points: obj["points"],
            position: idx + 1,
        };
        sortedByPoints.push(currentPerson);
    });
    console.log("sorted by points:", sortedByPoints);
    let equalPoints = [];
    sortedByPoints.forEach((obj, idx) => {
        if (idx === 0) {
            if (sortedByPoints[idx]["points"] ===
                sortedByPoints[idx + 1]["points"]) {
                console.log("equal points:", sortedByPoints[idx]["points"]);
                equalPoints.push(obj);
            }
        }
        if (idx > 0 && idx < sortedByPoints.length - 1) {
            if (sortedByPoints[idx]["points"] ===
                sortedByPoints[idx - 1]["points"] ||
                sortedByPoints[idx]["points"] ===
                    sortedByPoints[idx + 1]["points"]) {
                console.log("equal points:", sortedByPoints[idx]["points"], obj);
                equalPoints.push(obj);
            }
        }
        if (idx === sortedByPoints.length - 1) {
            if (sortedByPoints[idx]["points"] ===
                sortedByPoints[idx - 1]["points"]) {
                console.log("equal points:", sortedByPoints[idx]["points"], obj);
                equalPoints.push(obj);
            }
        }
        console.log("equal points array:", equalPoints);
    });
    const smallestPos = equalPoints[0]["position"];
    console.log("smallest position:", smallestPos);
    return solution;
};
const input1 = [
    {
        name: "John",
        points: 100,
    },
    {
        name: "Bob",
        points: 130,
    },
    {
        name: "Mary",
        points: 120,
    },
    {
        name: "Kate",
        points: 120,
    },
];
const gracefulTipping = (bill) => {
    let total = 0;
    if (bill < 10) {
        total = Math.ceil(bill * 1.15);
        console.log(total);
    }
    else if (bill > 9) {
        total = bill * 1.15;
        console.log(total);
        console.log(Math.floor(total));
        let num = Math.floor(total);
        const numStr = num.toString();
        console.log("numString", numStr);
        console.log("numstring length:", numStr.length);
        const numLength = numStr.length;
        let base = 1;
        for (let i = 1; i < numLength; i += 1) {
            base *= 10;
        }
        console.log("base:", base);
        const divisibleBy = base / 2;
        console.log("divisible by:", divisibleBy);
        while (!Number.isInteger(num / divisibleBy)) {
            num += 1;
            console.log("num in loop:", num);
        }
        total = num;
    }
    console.log("total:", total, "\n");
    return total;
};
function gracefulTipping2(bill) {
    let amountWithTip = bill * 1.15;
    const roundingMagnitude = getRoundingMagnitude(amountWithTip);
    return roundUp(amountWithTip, roundingMagnitude);
}
function getRoundingMagnitude(amount) {
    const log10 = Math.floor(Math.log10(amount));
    if (log10 >= 1) {
        return 5 * Math.pow(10, log10 - 1);
    }
    return 1;
}
function roundUp(amount, roundingFactor) {
    return Math.ceil(amount / roundingFactor) * roundingFactor;
}
function gracefulTipping3(bill) {
    const withTip = bill * 1.15;
    const mult = 5 * 10 ** (String(Math.ceil(withTip)).length - 2);
    if (mult < 1)
        return Math.ceil(withTip);
    return Math.ceil(withTip / mult) * mult;
}
function gracefulTipping4(bill) {
    const c = (bill * 115) / 100;
    const m = c < 10 ? 1 : 5 * 10 ** Math.floor(Math.log10(c) - 1);
    return Math.ceil(c / m) * m;
}
function gracefulTipping5(bill) {
    let billAndTip = Math.ceil(bill + bill * 0.15);
    let roundingLimit = 5;
    if (billAndTip > 10) {
        for (let i = 1; i < String(billAndTip).length - 1; i++) {
            roundingLimit = Number(String(roundingLimit) + "0");
        }
        while (billAndTip % roundingLimit != 0) {
            billAndTip++;
        }
    }
    return billAndTip;
}
function gracefulTipping6(bill) {
    const tip = 1.15;
    const total = bill * tip;
    const round = 5 * 10 ** (Math.floor(Math.log10(total)) - 1);
    return total < 10 ? Math.ceil(total) : Math.ceil(total / round) * round;
}
function gracefulTipping7(bill) {
    let tip = (bill / 100) * 15;
    let fin = Math.ceil(bill + tip);
    let range = Math.pow(10, fin.toString().length - 1);
    let roundTo = 5 * (range / 10);
    if (roundTo === 0.5)
        return fin;
    return fin + (roundTo - (fin % roundTo));
}
const eightBitNumber = (str) => {
    if ((str.startsWith("0") && str.length > 1) || !str.length)
        return false;
    if (str.startsWith("-"))
        return false;
    if (str.includes(" "))
        return false;
    return Number(str) >= 0 && Number(str) < 256;
};
const say = (string1) => {
    let result = string1;
    return (string2) => {
        return `${result} ${string2}`;
    };
};
const say2 = ($) => (ﬂ) => `${$} ${ﬂ}`;
const say3 = (xs) => (ys) => [xs, ys].join(" ");
const say4 = (a) => (b) => a + " " + b;
const gematria = (str) => {
    let solution = 0;
    const charValues = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        k: 10,
        l: 20,
        m: 30,
        n: 40,
        o: 50,
        p: 60,
        q: 70,
        r: 80,
        s: 90,
        t: 100,
        u: 200,
        x: 300,
        y: 400,
        z: 500,
        j: 600,
        v: 700,
        w: 900,
    };
    for (let char of str.replace(/\s/g, "").toLowerCase()) {
        solution += charValues[char];
    }
    return solution;
};
const values = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 600, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
    200, 700, 900, 300, 400, 500,
];
function gematria2(str) {
    return str
        .toUpperCase()
        .split("")
        .filter((c) => /[a-zA-Z]/.test(c))
        .reduce((a, v) => a + values[v.charCodeAt(0) - 65], 0);
}
exports.gematria2 = gematria2;
function gematria5(str) {
    const gematriaObj = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        k: 10,
        l: 20,
        m: 30,
        n: 40,
        o: 50,
        p: 60,
        q: 70,
        r: 80,
        s: 90,
        t: 100,
        u: 200,
        x: 300,
        y: 400,
        z: 500,
        j: 600,
        v: 700,
        w: 900,
    };
    let gematriaNumber = 0;
    const strLength = str.length;
    const strToLowerCase = str.toLowerCase();
    for (let i = 0; i < strLength; i++) {
        if (strToLowerCase[i] === " ") {
            continue;
        }
        const value = strToLowerCase[i];
        const valueFromGematriaObj = gematriaObj[value];
        gematriaNumber += valueFromGematriaObj;
    }
    return gematriaNumber;
}
const lastChair = (num) => {
    let solutionArr = [];
    let chairsArr = [];
    for (let i = 1; i <= num; i += 1) {
        chairsArr.push(i);
    }
    console.log(chairsArr);
    return 1;
};
console.log(lastChair(10));
const stackHeight2d = (layers) => {
    return !layers ? 0 : ((layers - 1) * Math.sqrt(3)) / 2 + 1;
};
function stackHeight2d2(layers) {
    if (layers <= 0)
        return 0;
    return ((layers - 1) / 2) * Math.sqrt(3) + 1;
}
function stackHeight2d3(layers) {
    if (layers === 0)
        return 0;
    return Math.floor(((Math.sqrt(3) * (layers - 1)) / 2 + 1) * 1000) / 1000;
}
const checkParity = (parity, bin) => {
    let solution = 0;
    const numOnes = bin.match(/1/g).length;
    console.log("numOnes:", numOnes);
    if (parity === "even") {
        if (numOnes & 1) {
            solution = 1;
        }
        else {
            solution = 0;
        }
    }
    else {
        if (numOnes & 1) {
            solution = 0;
        }
        else {
            solution = 1;
        }
    }
    return solution;
};
const checkParity2 = (parity, bin) => {
    let solution = 0;
    const numOnes = bin.match(/1/g).length;
    if (parity === "even") {
        if (numOnes & 1) {
            solution = 1;
        }
    }
    else {
        if (!(numOnes & 1)) {
            solution = 1;
        }
    }
    return solution;
};
function checkParity3(parity, bin) {
    const even = bin.split("").filter((x) => x === "1").length % 2 === 0;
    return parity === "even" && even ? 0 : parity === "odd" && !even ? 0 : 1;
}
function checkParity4(parity, bin) {
    return (parity === "even" &&
        (bin.match(new RegExp("1", "g")) || []).length % 2 == 0) ||
        (parity === "odd" &&
            (bin.match(new RegExp("1", "g")) || []).length % 2 != 0)
        ? 0
        : 1;
}
function checkParity5(parity, bin) {
    const numberOfOneBits = bin.split("").filter((bit) => bit === "1").length;
    const isNumberOfBitsEven = numberOfOneBits % 2 === 0;
    const shouldBeEven = parity === "even";
    const bitsNeeded = isNumberOfBitsEven === shouldBeEven ? 0 : 1;
    return bitsNeeded;
}
function checkParity6(parity, bin) {
    const bits = [...bin].filter((bit) => bit === "1");
    if (bits.length % 2 === 0) {
        return parity === "even" ? 0 : 1;
    }
    if (bits.length % 2 !== 0) {
        return parity === "even" ? 1 : 0;
    }
}
function hexHash(code) {
    return 1;
}
const tapCodeTranslation = (text) => {
    let solution = [];
    const grid = [
        ["a", "b", "c/k", "d", "e"],
        ["f", "g", "h", "i", "j"],
        ["l", "m", "n", "o", "p"],
        ["q", "r", "s", "t", "u"],
        ["v", "w", "x", "y", "z"],
    ];
    text.split("").forEach((char) => {
        console.log(char);
        for (let i = 0; i < grid.length; i += 1) {
            console.log(grid[i]);
            for (let j = 0; j < grid[i].length; j += 1) {
                if (grid[i][j].indexOf(char) > -1) {
                    console.log("found at index:", i + 1, j + 1);
                    let currPos = ".".repeat(i + 1) + " " + ".".repeat(j + 1);
                    solution.push(currPos);
                    break;
                }
            }
        }
    });
    console.log(solution);
    return solution.join(" ");
};
function tapCodeTranslation7(text) {
    const table = [
        ["a", "b", ["c", "k"], "d", "e"],
        ["f", "g", "h", "i", "j"],
        ["l", "m", "n", "o", "p"],
        ["q", "r", "s", "t", "u"],
        ["v", "w", "x", "y", "z"],
    ];
    return text
        .split("")
        .map((l) => {
        console.log(l);
        const line = table.findIndex((line) => line.includes(l) ||
            line.some((arr) => arr instanceof Array && arr.includes(l)));
        const column = table[line].findIndex((col) => col === l || (col instanceof Array && col.includes(l)));
        return [line + 1, column + 1];
    })
        .flat()
        .map((c) => ".".repeat(c))
        .join(" ");
}
function tapCodeTranslation2(text) {
    const dic = [
        ["A", "B", "C", "D", "E"],
        ["F", "G", "H", "I", "J"],
        ["L", "M", "N", "O", "P"],
        ["Q", "R", "S", "T", "U"],
        ["V", "W", "X", "Y", "Z"],
    ];
    let out = "";
    const arr = [...text.toUpperCase()];
    arr.map((el) => {
        if (el === "K")
            el = "C";
        for (let i = 0; i < dic.length; i++) {
            for (let j = 0; j < dic.length; j++) {
                if (dic[i][j] == el) {
                    out += `${".".repeat(i + 1)} ${".".repeat(j + 1)} `;
                    break;
                }
            }
        }
    });
    return out.trim();
}
function tapCodeTranslation3(text) {
    const code = [
        ["A", "B", ".", "D", "E"],
        ["F", "G", "H", "I", "J"],
        ["L", "M", "N", "O", "P"],
        ["Q", "R", "S", "T", "U"],
        ["V", "W", "X", "Y", "Z"],
    ];
    return text
        .split("")
        .map((e) => {
        for (const [index, row] of code.entries()) {
            const elem = e.toUpperCase();
            if (elem !== "C" && elem !== "K") {
                if (row.indexOf(elem) !== -1) {
                    return `${".".repeat(index + 1)} ${".".repeat(row.indexOf(elem) + 1)}`;
                }
            }
            else
                return ". ...";
        }
    })
        .join(" ");
}
function tapCodeTranslation4(text) {
    const tapLetterMap = {
        A: ". .",
        B: ". ..",
        C: ". ...",
        K: ". ...",
        D: ". ....",
        E: ". .....",
        F: ".. .",
        G: ".. ..",
        H: ".. ...",
        I: ".. ....",
        J: ".. .....",
        L: "... .",
        M: "... ..",
        N: "... ...",
        O: "... ....",
        P: "... .....",
        Q: ".... .",
        R: ".... ..",
        S: ".... ...",
        T: ".... ....",
        U: ".... .....",
        V: "..... .",
        W: "..... ..",
        X: "..... ...",
        Y: "..... ....",
        Z: "..... .....",
    };
    return text
        .toUpperCase()
        .split("")
        .map((letter) => tapLetterMap[letter])
        .join(" ");
}
function tapCodeTranslation5(text) {
    return [...text]
        .map((c) => {
        const pos = c === "k" ? 2 : c.charCodeAt(0) - 97 - Number(c > "k");
        return `${".".repeat((pos / 5 + 1) | 0)} ${".".repeat((pos % 5) + 1)}`;
    })
        .join(" ");
}
const sortByHeight = (list) => {
    let solutionArr = [];
    let counter = 0;
    const heightsArr = list
        .filter((num) => num !== -1)
        .sort((a, b) => a - b);
    console.log(heightsArr);
    list.forEach((num) => {
        if (num === -1)
            solutionArr.push(-1);
        else {
            solutionArr.push(heightsArr[counter]);
            counter += 1;
        }
    });
    return solutionArr;
};
function sortByHeight4(list) {
    for (let i = 0; i < list.length - 1; i++) {
        if (list[i] !== -1) {
            for (let j = i + 1; j < list.length; j++) {
                if (list[j] !== -1) {
                    if (list[i] > list[j]) {
                        const t = list[i];
                        list[i] = list[j];
                        list[j] = t;
                    }
                }
            }
        }
    }
    return list;
}
function sortByHeight5(list) {
    let numbersToSort = list.filter((n) => n >= 0).sort((a, b) => a - b);
    let ix = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] >= 0) {
            list[i] = numbersToSort[ix++];
        }
    }
    return list;
}
function sortByHeight6(list) {
    const heights = list.filter((el) => el !== -1).sort((a, b) => a - b);
    const result = [];
    let j = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] === -1) {
            result.push(list[i]);
        }
        else {
            result.push(heights[j]);
            j++;
        }
    }
    return result;
}
function squarePi(digits) {
    return digits;
}
function numberOfRectangles(m, n) {
    return 1;
}
function spinningRings(innerMax, outerMax) {
    let numberOfSpinsTillRingsAreEqual = 0;
    return numberOfSpinsTillRingsAreEqual;
}
const getSectionId = (scrollY, divHeights) => {
    let counter = 0;
    let solution = -1;
    for (let i = 0; i < divHeights.length; i += 1) {
        counter += divHeights[i];
        if (counter - 1 >= scrollY) {
            solution = i;
            break;
        }
    }
    return solution;
};
const getSectionId2 = (n, a) => a.findIndex((x) => (n -= x) < 0);
function getSectionId3(scroll, sizes) {
    let size = -1;
    const arr = sizes.map((el) => (size += el));
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= scroll) {
            return i;
        }
    }
    return -1;
}
function getSectionId4(scroll, sizes) {
    for (let i = 0, sum = 0; i < sizes.length; ++i) {
        if (sum + sizes[i] > scroll)
            return i;
        sum += sizes[i];
    }
    return -1;
}
const collision = (x1, y1, r1, x2, y2, r2) => {
    throw new Error("Not implemented");
};
const polydivisible = (num) => {
    const numStr = num.toString();
    console.log(numStr);
    let solution = true;
    for (let i = 0; i < numStr.length; i += 1) {
        const currentSub = Number(numStr.substring(0, i + 1));
        console.log("current:", currentSub, "divisor:", i + 1, "isDivisible:", Number.isInteger(currentSub / (i + 1)));
        if (!Number.isInteger(currentSub / (i + 1))) {
            solution = false;
            break;
        }
    }
    return solution;
};
function polydivisible2(x) {
    const str = String(x);
    for (let i = 1; i <= str.length; i++) {
        if (+str.slice(0, i) % i !== 0)
            return false;
    }
    return true;
}
function polydivisible3(x) {
    let strX = String(x);
    for (let i = 1; i <= strX.length; i++) {
        if (+strX.slice(0, i) % i !== 0)
            return false;
    }
    return true;
}
function polydivisible4(x) {
    let s = x.toString();
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        sum = sum * 10 + s.charCodeAt(i) - 48;
        if (sum % (i + 1) !== 0)
            return false;
    }
    return true;
}
const doubleton = (num) => {
    const isDoubleton = (num) => {
        const uniqueDigits = new Set(num.toString().split(""));
        return uniqueDigits.size === 2;
    };
    const doubletonsArr = [];
    for (let i = num; i <= 1000; i += 1) {
        if (isDoubleton(i)) {
            doubletonsArr.push(i);
            if (doubletonsArr.length > 1)
                break;
        }
    }
    const solution = num === doubletonsArr[0] ? doubletonsArr[1] : doubletonsArr[0];
    return solution;
};
function doubleton2(num) {
    num += 1;
    while (new Set("" + num).size != 2) {
        num++;
    }
    return num;
}
function doubleton3(num) {
    while (num++) {
        const numbers = String(num).split("");
        if (new Set(numbers).size === 2) {
            return +numbers.join("");
        }
    }
}
function doubleton4(n) {
    for (let i = n + 1; i < 1000000; i++) {
        if (new Set(i.toString()).size == 2)
            return i;
    }
    return 1;
}
function doubleton5(num) {
    for (let n = num + 1;; n++)
        if (new Set([...`${n}`]).size === 2)
            return n;
}
function doubleton6(num) {
    while (!/^(\d)\1*(?!\1)(\d)(\1|\2)*$/.test(String(num + 1)))
        num++;
    return num + 1;
}
class G964AA {
    static intRac(n, guess) {
        return 1;
    }
}
function pointInCircle(x, y) {
    return true;
}
function addingShifted(arrayOfArrays, shift) {
    return arrayOfArrays[0];
}
const unflatten = (flatArray) => {
    let solution = [];
    for (let i = 0; i < flatArray.length; i += 1) {
        const current = flatArray[i];
        console.log("current:", current);
        if (current < 3)
            solution.push(current);
        if (current > 2) {
            const newSub = flatArray.slice(i, i + flatArray[i]);
            solution.push(newSub);
            i += flatArray[i] - 1;
        }
    }
    return solution;
};
const input = [1, 4, 5, 2, 1, 2, 4, 5, 2, 6, 2, 3, 3];
function unflatten2(flatArray) {
    let arr = [];
    let i = 0;
    while (i < flatArray.length) {
        if (flatArray[i] < 3) {
            arr.push(flatArray[i]);
            i++;
        }
        else {
            arr.push(flatArray.slice(i, i + flatArray[i]));
            i += flatArray[i];
        }
    }
    return arr;
}
function unflatten3(flatArray) {
    let counter = 0;
    return flatArray.reduce((acc, x) => {
        if (counter > 0) {
            counter--;
            return [...acc.slice(0, -1), [...acc[acc.length - 1], x]];
        }
        if (x < 3) {
            return [...acc, x];
        }
        if (x > 2) {
            counter = x - 1;
            return [...acc, [x]];
        }
    }, []);
}
function unflatten4(flatArray) {
    const unflattenedArray = [];
    for (let i = 0; i < flatArray.length; i++) {
        const value = flatArray[i];
        if (value < 3) {
            unflattenedArray.push(value);
        }
        else {
            unflattenedArray.push(flatArray.slice(i, i + value));
            i += value - 1;
        }
    }
    return unflattenedArray;
}
function unflatten5(flatArray) {
    let output = [];
    let i = 0;
    while (i < flatArray.length) {
        const head = flatArray[i];
        if (head < 3) {
            output.push(flatArray[i++]);
        }
        else {
            output.push(flatArray.slice(i, i + head));
            i += head;
        }
    }
    return output;
}
function unflatten6(flatArray) {
    const result = [];
    const initialArray = [...flatArray];
    while (true) {
        const firstItem = initialArray.shift();
        if (!firstItem)
            return result;
        if (firstItem < 3)
            result.push(firstItem);
        else {
            const array = [firstItem];
            for (let i = 1; i < firstItem; i += 1) {
                const item = initialArray.shift();
                if (item)
                    array.push(item);
                else
                    break;
            }
            result.push(array);
        }
    }
    return result;
}
function unflatten7(flatArray) {
    const result = [];
    for (let i = 0, max = flatArray.length; i < max; i += 1) {
        const item = flatArray[i];
        if (item < 3) {
            result.push(item);
        }
        if (item > 2) {
            const nextI = i + item;
            const subArray = flatArray.slice(i, nextI);
            result.push(subArray);
            i = nextI - 1;
        }
    }
    return result;
}
const addTwo = (a) => {
    let sum = a;
    return function (b) {
        return sum + b;
    };
};
const addTwo2 = (a) => {
    let sum = a;
    return (b) => sum + b;
};
const add1 = (a) => (b) => a + b;
function add2(x) {
    return function (y) {
        return x + y;
    };
}
const add3 = (a) => {
    return (b) => a + b;
};
function add4(first) {
    return function (second) {
        return first + second;
    };
}
function add5(n) {
    return (a) => n + a;
}
const add6 = (a) => (b) => {
    return a + b;
};
const add7 = (x) => function (y) {
    return x + y;
};
function add8(firstAddend) {
    return function (secondAddend) {
        return firstAddend + secondAddend;
    };
}
let add9 = (a) => (b) => a + b;
{
    add9;
}
const add10 = (firstNumber) => (secondNumber) => firstNumber + secondNumber;
const dateNbDays = (a0, a, p) => {
    const currDate = new Date("2016/1/1");
    const RATE = p / 36000;
    let dayCounter = 0;
    while (a0 < a) {
        dayCounter += 1;
        const dailyInt = a0 * RATE;
        a0 += dailyInt;
    }
    const solution = new Date(currDate.getTime() + dayCounter * 24 * 60 * 60 * 1000);
    return solution.toJSON().substring(0, 10);
};
function dateNbDays2(a0, a, p) {
    let startDate = new Date("2016-01-01");
    let result = a0;
    while (result < a) {
        result += (result * p) / 36000;
        startDate.setDate(startDate.getDate() + 1);
    }
    return startDate.toISOString().split("T")[0];
}
function dateNbDays3(a0, a, p) {
    var days = Math.ceil((Math.log(a) - Math.log(a0)) / Math.log(1 + p / 36000));
    var date = new Date(2016, 0, 1 + days);
    return date.toISOString().split("T")[0];
}
function dateNbDays4(a0, a, p) {
    let count = 1;
    let moneyAmount = a0;
    while (moneyAmount <= a) {
        count += 1;
        moneyAmount += moneyAmount * (p / 100 / 360);
    }
    const date = new Date(2016, 0, count);
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    return `${date.getFullYear()}-${month}-${day}`;
}
function dateNbDays5(a0, a, p) {
    let r = p / 36000;
    let n = Math.ceil(Math.log(a / a0) / Math.log(r + 1));
    let baseOffset = new Date(2016, 0, 1).getTime();
    let finalDate = new Date(baseOffset + 3600 * 24000 * n);
    return finalDate.toISOString().split("T")[0];
}
function dateNbDays6(a0, a, p) {
    const start_date = new Date("2016-01-01");
    let i = 0;
    while (a0 <= a) {
        a0 = a0 * (1 + p / 36000);
        i++;
    }
    start_date.setDate(start_date.getDate() + i);
    return start_date.toISOString().slice(0, 10);
}
function dateNbDays7(a0, a, p) {
    const date = new Date("01-01-2016");
    const interest = p / 36000;
    let money = a0;
    let days = 0;
    do {
        money += money * interest;
        days++;
    } while (a > money);
    date.setDate(date.getDate() + days);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
}
function dateNbDays8(a0, a, p) {
    let count = 1;
    for (let i = 0; a0 <= a; i++) {
        count++;
        a0 += a0 * (p / 100 / 360);
    }
    return JSON.stringify(new Date(2016, 0, count)).slice(1, 11);
}
const median = (numArr) => {
    const sortedArr = numArr.sort((a, b) => a - b);
    const solution = sortedArr.length & 1
        ? sortedArr[(sortedArr.length - 1) / 2]
        : (sortedArr[sortedArr.length / 2] +
            sortedArr[sortedArr.length / 2 - 1]) /
            2;
    return solution;
};
function median2(n) {
    const sorted = n.sort((a, b) => a - b);
    const lHalf = (n.length - (n.length % 2)) / 2;
    if (sorted.length % 2 === 0) {
        return (sorted[lHalf - 1] + sorted[lHalf]) / 2;
    }
    else {
        return sorted[lHalf];
    }
}
function median3(array) {
    let a = array.sort((x, y) => x - y);
    return a.length % 2
        ? a[Math.floor(a.length / 2)]
        : a
            .slice(a.length / 2 - 1, a.length / 2 + 1)
            .reduce((x, y) => x + y, 0) / 2;
}
function median4(n) {
    const sorted = n.slice().sort((a, b) => a - b);
    if (sorted.length % 2)
        return sorted[sorted.length / 2 - 0.5];
    return (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
}
function median5(n) {
    n.sort((a, b) => a - b);
    if (n.length % 2 === 0) {
        let m = n.length / 2;
        return (n[m - 1] + n[m]) / 2;
    }
    return n[(n.length - 1) / 2];
}
const median6 = (n) => {
    n = n.sort((a, b) => a - b);
    const mid = Math.floor(n.length / 2);
    return n.length % 2 === 0 ? (n[mid - 1] + n[mid]) / 2 : n[mid];
};
const nerdify = (str) => {
    const nerdyObj = {
        a: "4",
        A: "4",
        e: "3",
        E: "3",
        l: "1",
        L: "1",
    };
    return str.replace(new RegExp(/[ael]/gi), (el) => nerdyObj[el]);
};
function nerdify2(txt) {
    return txt.replace(/[aA]/g, "4").replace(/[eE]/g, "3").replace(/l/g, "1");
}
function nerdify4(txt) {
    return txt.replace(/A/gi, "4").replace(/E/gi, "3").replace(/l/g, "1");
}
function nerdify6(txt) {
    var answer = "";
    for (var i = 0; i < txt.length; i++) {
        if (txt[i] == "a" || txt[i] == "A") {
            answer += "4";
        }
        else if (txt[i] == "e" || txt[i] == "E") {
            answer += "3";
        }
        else if (txt[i] == "l") {
            answer += "1";
        }
        else {
            answer += txt[i];
        }
    }
    return answer;
}
function nerdify7(txt) {
    return txt.replace(/a/gi, "4").replace(/e/gi, "3").replace(/l/g, "1");
}
function nerdify8(txt) {
    let txtList = txt.split("");
    let newWord = [];
    for (let letter of txtList) {
        if (letter === "a" || letter === "A") {
            letter = "4";
        }
        if (letter === "e" || letter === "E") {
            letter = "3";
        }
        if (letter === "l") {
            letter = "1";
        }
        newWord.push(letter);
    }
    return newWord.join("");
}
const replace = { a: 4, A: 4, e: 3, E: 3, l: 1 };
const regex = new RegExp(`[${Object.keys(replace).join("")}]`, "g");
const countSalutes = (hallway) => {
    let solution = 0;
    const lineOfPeople = hallway
        .split("")
        .filter((el) => el === "<" || el === ">");
    console.log("line of people:", lineOfPeople);
    for (let i = 0; i < lineOfPeople.length; i += 1) {
        const current = lineOfPeople[i];
        if (current === ">") {
            const tailSubArr = lineOfPeople.slice(i + 1);
            console.log("people to right:", tailSubArr);
            const peopleToMeet = tailSubArr.filter((el) => el === "<").length;
            console.log("people to meet:", peopleToMeet);
            solution += peopleToMeet * 2;
        }
    }
    return solution;
};
function countSalutes1(hallway) {
    let right = 0;
    let salutes = 0;
    for (let p of hallway) {
        if (p === ">")
            right += 1;
        else if (p === "<")
            salutes += 2 * right;
    }
    return salutes;
}
function countSalutes2(hallway) {
    let r = 0;
    let l = 0;
    for (let x of hallway) {
        switch (x) {
            case ">":
                r++;
                break;
            case "<":
                l += r;
                break;
        }
    }
    return l * 2;
}
function countSalutes3(hallway) {
    let cnt = 0;
    let numPeople = 0;
    for (const ch of hallway) {
        if (ch === ">")
            numPeople++;
        else if (ch === "<")
            cnt += 2 * numPeople;
    }
    return cnt;
}
function powers(list) {
    return Math.pow(2, list.length);
}
function powers2(list) {
    return 2 ** list.length;
}
const powers3 = (list) => 2 ** list.length;
function powers4(list) {
    return list.length > 0 ? 2 ** list.length : 1;
}
function isAllPossibilities(x) {
    throw new Error("This method or operation is not implemented.");
}
const mutate = (chromosome, p) => {
    return "hello";
};
const amIAfraid = (day, num) => {
    let solution = false;
    if (day === "Monday" && num === 12)
        solution = true;
    if (day === "Tuesday" && num > 95)
        solution = true;
    if (day === "Wednesday" && num === 34)
        solution = true;
    if (day === "Thursday" && num === 0)
        solution = true;
    if (day === "Friday" && (num & 1) === 0)
        solution = true;
    if (day === "Saturday" && num === 56)
        solution = true;
    if (day === "Sunday" && Math.abs(num) === 666)
        solution = true;
    return solution;
};
const amIAfraid2 = (day, num) => {
    return ((day === "Monday" && num === 12) ||
        (day === "Tuesday" && num > 95) ||
        (day === "Wednesday" && num === 34) ||
        (day === "Thursday" && num === 0) ||
        (day === "Friday" && (num & 1) === 0) ||
        (day === "Saturday" && num === 56) ||
        (day === "Sunday" && Math.abs(num) === 666));
};
function amIAfraid3(day, num) {
    switch (day) {
        case "Monday":
            return num == 12;
        case "Tuesday":
            return num > 95;
        case "Wednesday":
            return num == 34;
        case "Thursday":
            return num == 0;
        case "Friday":
            return !(num % 2);
        case "Saturday":
            return num == 56;
        case "Sunday":
            return Math.abs(num) == 666;
        default:
            return false;
    }
}
function amIAfraid4(day, num) {
    switch (day) {
        case "Monday": {
            return !!(num == 12);
        }
        case "Tuesday": {
            return !!(num > 95);
        }
        case "Wednesday": {
            return !!(num == 34);
        }
        case "Thursday": {
            return !!(num == 0);
        }
        case "Friday": {
            return !!(num % 2 == 0);
        }
        case "Saturday": {
            return !!(num == 56);
        }
        case "Sunday": {
            return !!(num == 666 || num == -666);
        }
        default: {
            return false;
        }
    }
}
function amIAfraid5(day, num) {
    switch (day) {
        case "Monday":
            return num === 12;
        case "Tuesday":
            return num > 95;
        case "Wednesday":
            return num === 34;
        case "Thursday":
            return num === 0;
        case "Friday":
            return num % 2 === 0;
        case "Saturday":
            return num === 56;
        case "Sunday":
            return Math.abs(num) === 666;
        default:
            return false;
    }
}
function amIAfraid6(day, num) {
    const fearfulValues = {
        Monday: 12,
        Wednesday: 34,
        Thursday: 0,
        Saturday: 56,
        Sunday: 666,
    };
    if (day === "Tuesday") {
        if (num > 95)
            return true;
        else
            return false;
    }
    if (day === "Friday") {
        if (num % 2 === 0)
            return true;
        else
            return false;
    }
    return Math.abs(num) === fearfulValues[day];
}
function amIAfraid7(day, num) {
    let res = false;
    switch (day) {
        case "Monday":
            res = num == 12 ? true : false;
            break;
        case "Tuesday":
            res = num > 95 ? true : false;
            break;
        case "Wednesday":
            res = num == 34 ? true : false;
            break;
        case "Thursday":
            res = num == 0 ? true : false;
            break;
        case "Friday":
            res = num % 2 == 0 ? true : false;
            break;
        case "Saturday":
            res = num == 56 ? true : false;
            break;
        case "Sunday":
            res = num == 666 || num == -666 ? true : false;
            break;
    }
    return res;
}
function amIAfraid8(day, num) {
    if (day === "Monday" && num === 12) {
        return true;
    }
    else if (day === "Tuesday" && num > 95) {
        return true;
    }
    else if (day === "Wednesday" && num == 34) {
        return true;
    }
    else if (day === "Thursday" && num === 0) {
        return true;
    }
    else if (day === "Friday" && num % 2 == 0) {
        return true;
    }
    else if (day === "Saturday" && num === 56) {
        return true;
    }
    else if (day === "Sunday" && (num == 666 || num == -666)) {
        return true;
    }
    return false;
}
function amIAfraid9(day, num) {
    const afraidDict = {
        Monday: (value) => value === 12,
        Tuesday: (value) => value > 95,
        Wednesday: (value) => value === 34,
        Thursday: (value) => value === 0,
        Friday: (value) => value % 2 === 0,
        Saturday: (value) => value === 56,
        Sunday: (value) => Math.abs(value) === 666,
    };
    const afraidCondition = afraidDict[day];
    return afraidCondition(num);
}
function amIAfraid10(day, num) {
    const dayTests = {
        Monday: (i) => i === 12,
        Tuesday: (i) => i > 98,
        Wednesday: (i) => i === 34,
        Thursday: (i) => i === 0,
        Friday: (i) => !(i % 2),
        Saturday: (i) => i === 56,
        Sunday: (i) => Math.abs(i) === 666,
    };
    const dayTest = dayTests[day];
    if (dayTest) {
        return dayTest(num);
    }
    return false;
}
function amIAfraid11(day, num) {
    switch (day) {
        case "Monday":
            if (num === 12) {
                return true;
            }
            break;
        case "Tuesday":
            if (num > 95) {
                return true;
            }
            break;
        case "Wednesday":
            if (num === 34) {
                return true;
            }
            break;
        case "Thursday":
            if (num === 0) {
                return true;
            }
            break;
        case "Friday":
            if (num % 2 === 0) {
                return true;
            }
            break;
        case "Saturday":
            if (num === 56) {
                return true;
            }
            break;
        case "Sunday":
            if (num === 666 || num === -666) {
                return true;
            }
            break;
        default:
            return false;
    }
    return false;
}
const transposeTwoStrings = (arr) => {
    const numIterations = Math.max(arr[0].length, arr[1].length);
    console.log(numIterations);
    let solutionArr = [];
    for (let i = 0; i < numIterations; i += 1) {
        const char1 = arr[0][i] === undefined ? " " : arr[0][i];
        const char2 = arr[1][i] === undefined ? " " : arr[1][i];
        const currentRow = char1 + " " + char2;
        console.log("char 1:", char1, "char 2:", char2, "current row: ", currentRow);
        solutionArr.push(currentRow);
    }
    console.log(solutionArr);
    const solution = solutionArr.join("\n");
    return solution;
};
function transposeTwoStrings2([a, b]) {
    const res = [];
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
        res.push(`${a[i] || " "} ${b[i] || " "}`);
    }
    return res.join("\n");
}
function transposeTwoStrings3(array) {
    let res = [];
    let m = Math.max(...array.map((s) => s.length));
    for (let i = 0; i < m; i++) {
        res.push(array.map((s) => (i < s.length ? s[i] : " ")).join(" "));
    }
    return res.join("\n");
}
function transposeTwoStrings4(arr) {
    const [left, right] = arr;
    return Array.from({ length: Math.max(left.length, right.length) }, (_, i) => (left[i] || " ") + " " + (right[i] || " ")).join("\n");
}
const encodeA = (str) => {
    const swapObj = {
        a: "g",
        A: "G",
        e: "d",
        E: "D",
        y: "r",
        Y: "R",
        o: "p",
        O: "P",
        u: "l",
        U: "L",
        i: "k",
        I: "K",
        g: "a",
        G: "A",
        d: "e",
        D: "E",
        r: "y",
        R: "Y",
        p: "o",
        P: "O",
        l: "u",
        L: "U",
        k: "i",
        K: "I",
    };
    return str.replace(new RegExp(/[gGaAdDeErRyYpPoOlLuUkKiI]/g), (char) => swapObj[char]);
};
const decodeA = (str) => {
    return encodeA(str);
};
function encodeA1(s) {
    return s
        .split("")
        .map((c) => ({
        G: "A",
        A: "G",
        g: "a",
        a: "g",
        D: "E",
        E: "D",
        d: "e",
        e: "d",
        R: "Y",
        Y: "R",
        r: "y",
        y: "r",
        P: "O",
        O: "P",
        p: "o",
        o: "p",
        L: "U",
        U: "L",
        l: "u",
        u: "l",
        K: "I",
        I: "K",
        k: "i",
        i: "k",
    }[c] || c))
        .join("");
}
var decodeA2 = encodeA1;
const crypt = ["GA", "DE", "RY", "PO", "LU", "KI"];
function encodeA3(str) {
    return str
        .split("")
        .map((x) => {
        const isLower = x.match(/[a-z]/) ? true : false;
        for (let i = 0; i < crypt.length; i++) {
            if (crypt[i][0] === x.toUpperCase()) {
                return isLower ? crypt[i][1].toLowerCase() : crypt[i][1];
            }
            else if (crypt[i][1] === x.toUpperCase()) {
                return isLower ? crypt[i][0].toLowerCase() : crypt[i][0];
            }
        }
        return x;
    })
        .join("");
}
function decodeA3(str) {
    return encodeA3(str);
}
var keys = {
    G: "A",
    A: "G",
    g: "a",
    a: "g",
    D: "E",
    E: "D",
    d: "e",
    e: "d",
    R: "Y",
    Y: "R",
    r: "y",
    y: "r",
    P: "O",
    O: "P",
    p: "o",
    o: "p",
    L: "U",
    U: "L",
    l: "u",
    u: "l",
    K: "I",
    I: "K",
    k: "i",
    i: "k",
};
function encodeA4(str) {
    return str
        .split("")
        .map((e) => (keys[e] ? keys[e] : e))
        .join("");
}
function decodeA4(str) {
    return str
        .split("")
        .map((e) => (keys[e] ? keys[e] : e))
        .join("");
}
const RE = RegExp(/[GADERYPOLUKI]/, "gi"), KEY = {
    A: "G",
    G: "A",
    a: "g",
    g: "a",
    D: "E",
    E: "D",
    d: "e",
    e: "d",
    R: "Y",
    Y: "R",
    r: "y",
    y: "r",
    P: "O",
    O: "P",
    p: "o",
    o: "p",
    L: "U",
    U: "L",
    l: "u",
    u: "l",
    K: "I",
    I: "K",
    k: "i",
    i: "k",
};
const encodeA5 = (str) => str.replace(RE, ($) => KEY[$]), decodeA5 = encodeA5;
const cypher = "GADERYPOLUKIgaderypoluki";
function encodeA6(str) {
    let result = "";
    for (const ch of str) {
        const index = cypher.indexOf(ch);
        if (index === -1) {
            result += ch;
        }
        else {
            result += index % 2 === 0 ? cypher[index + 1] : cypher[index - 1];
        }
    }
    return result;
}
function decodeA6(str) {
    return encodeA6(str);
}
function sumin(n) {
    throw new Error("TODO");
}
function sumax(n) {
    throw new Error("TODO");
}
function sumsum(n) {
    throw new Error("TODO");
}
const crossover = (chrom1, chrom2, idx) => {
    const tail1 = chrom1.slice(idx);
    const tail2 = chrom2.slice(idx);
    console.log(tail1, tail2);
    const newChrom1 = chrom1.substring(0, idx).concat(tail2);
    const newChrom2 = chrom2.substring(0, idx).concat(tail1);
    console.log(newChrom1, newChrom2);
    const solution = [newChrom1, newChrom2];
    return solution;
};
const crossover2 = (chromosome1, chromosome2, index) => {
    const head = (s) => s.substr(0, index);
    const tail = (s) => s.substr(index);
    return [
        head(chromosome1) + tail(chromosome2),
        head(chromosome2) + tail(chromosome1),
    ];
};
const crossover3 = (chromosome1, chromosome2, index) => {
    return [
        chromosome1.slice(0, index) + chromosome2.slice(index),
        chromosome2.slice(0, index) + chromosome1.slice(index),
    ];
};
const crossover4 = (chromosome1, chromosome2, index) => {
    const firstChromosome = new Chromosome(chromosome1);
    const secondChromosome = new Chromosome(chromosome2);
    firstChromosome.crossover(secondChromosome, index);
    return [firstChromosome.toString(), secondChromosome.toString()];
};
class Chromosome {
    constructor(chromosome) {
        this.nucleobases = Array.from(chromosome);
    }
    crossover(chromosome, cutPoint) {
        const geneToGive = this.gene(cutPoint);
        const geneToTake = chromosome.gene(cutPoint);
        this.apply(geneToTake, cutPoint);
        chromosome.apply(geneToGive, cutPoint);
    }
    gene(cutPoint) {
        return this.nucleobases.slice(cutPoint);
    }
    apply(gene, cutPoint) {
        this.nucleobases = this.nucleobases.slice(0, cutPoint).concat(gene);
    }
    toString() {
        return this.nucleobases.join("");
    }
}
function easyLine(n) {
    return 1;
}
const getScore = (arr) => {
    console.log(arr);
    let currLev = 0, clearedLines = 0, score = 0;
    const scoreObj = {
        0: 0,
        1: 40,
        2: 100,
        3: 300,
        4: 1200,
    };
    arr.forEach((lines, idx) => {
        console.log("iteration:", idx);
        let levMultiplier = currLev + 1;
        console.log("   level multiplier:", levMultiplier);
        console.log("   current score:", scoreObj[lines] * levMultiplier);
        score += scoreObj[lines] * levMultiplier;
        console.log("       total score:", score);
        clearedLines += lines;
        console.log("       cleared lines:", clearedLines);
        currLev = Math.floor(clearedLines / 10);
        console.log("       current level:", currLev);
    });
    return score;
};
function getScore3(arr) {
    let cleared = 0, score = 0;
    const level = () => Math.floor(cleared / 10) + 1;
    for (let a of arr) {
        score += [0, 40, 100, 300, 1200][a] * level();
        cleared += a;
    }
    return score;
}
function getScore4(arr) {
    const SCORES = [0, 40, 100, 300, 1200];
    let score = 0;
    let total_lines = 0;
    arr.forEach((nb_lines) => {
        score += SCORES[nb_lines] * (1 + Math.floor(total_lines / 10));
        total_lines += nb_lines;
    });
    return score;
}
const getScore5 = (arr) => arr.reduce((o, c) => ((o.s += [0, 40, 100, 300, 1200][c] * ~~(o.t / 10)), (o.t += c), o), { s: 0, t: 10 }).s;
function getScore6(arr) {
    return arr.reduce((a, e) => [
        a[0] + [0, 40, 100, 300, 1200][e] * Math.trunc(a[1] / 10 + 1),
        a[1] + e,
    ], [0, 0])[0];
}
function getScore7(arr) {
    const calculatePoints = (lines, level) => {
        switch (lines) {
            case 1:
                return 40 * (level + 1);
            case 2:
                return 100 * (level + 1);
            case 3:
                return 300 * (level + 1);
            case 4:
                return 1200 * (level + 1);
            default:
                return 0;
        }
    };
    let level = 0;
    let score = 0;
    let cleared = 0;
    for (let el of arr) {
        cleared += el;
        score += calculatePoints(el, level);
        if (cleared >= 10) {
            level++;
            cleared -= 10;
        }
    }
    return score;
}
const solveAA = (str) => {
    const numIterations = Math.floor(str.length / 2);
    let solution = 0;
    for (let i = 0; i < numIterations; i += 1) {
        const prefix = str.slice(0, i + 1);
        const suffix = str.slice(str.length - 1 - i);
        console.log("prefix: ", prefix, "suffix:", suffix);
        if (prefix === suffix)
            solution = i + 1;
    }
    return solution;
};
function solveAA2(s) {
    let result = Math.floor(s.length / 2);
    while (!s.endsWith(s.slice(0, result))) {
        result--;
    }
    return result;
}
function solveAA3(s) {
    return s.match(/^(.*).*\1$/)[1].length;
}
function solveAA4(s) {
    let num = 0;
    let halfStr = s.length / 2;
    for (let i = 1; i <= halfStr; i++) {
        if (s.slice(0, i) == s.slice(-i))
            num = i;
    }
    return num;
}
function solveAA5(s) {
    for (let i = s.length / 2; i >= 1; i--) {
        let prefix = s.slice(0, i);
        if (prefix == s.slice(-i)) {
            return prefix.length;
        }
    }
    return 0;
}
const compose = (str1, str2) => {
    const strArr1 = str1.split("\n");
    const strArr2 = str2.split("\n").reverse();
    let solutionArr = [];
    for (let i = 0; i < strArr1.length; i += 1) {
        const currentWordArr = strArr1[i]
            .split("")
            .slice(0, i + 1)
            .concat(strArr2[i].split("").slice(0, strArr2[i].length - i));
        solutionArr.push(currentWordArr.join(""));
    }
    const solution = solutionArr.join("\n");
    return solution;
};
function compose2(s1, s2) {
    let res = [];
    let arr1 = s1.split("\n"), arr2 = s2.split("\n");
    for (let i = 0; i < arr1.length; i++) {
        res[i] =
            arr1[i].slice(0, i + 1) +
                arr2[arr2.length - 1 - i].slice(0, arr2.length - i);
    }
    return res.join("\n");
}
function compose3(s1, s2) {
    const arr1 = s1.split("\n");
    const arr2 = s2.split("\n");
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        let j = arr2.length - i - 1;
        const left = arr1[i].substring(0, i + 1);
        const right = arr2[j].substring(0, arr2[j].length - i);
        result.push(left + right);
    }
    return result.join("\n");
}
function compose4(s1, s2) {
    const s1s = s1.split("\n");
    const s2s = s2.split("\n");
    const n = s1s.length;
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(s1s[i].substring(0, i + 1) + s2s[n - i - 1].substring(0, n - i));
    }
    return result.join("\n");
}
function compose5(s1, s2) {
    var a2 = s2.split("\n").reverse();
    var l = a2.length, a1 = s1.split("\n"), res = "";
    for (var i = 0; i < l; i++) {
        res += a1[i].slice(0, i + 1) + a2[i].slice(0, l - i);
        if (i < l - 1)
            res += "\n";
    }
    return res;
}
const shuffledArray = (shuffled) => {
    let solution = [];
    const shuffledArr = shuffled;
    console.log("shuffed array:", shuffledArr);
    let sumOfArr = 0;
    shuffled.forEach((number) => {
        shuffled = [...shuffledArr];
        shuffled.splice(shuffled.indexOf(number), 1);
        const sum = shuffled.reduce((acc, curr) => acc + curr);
        if (sum === number) {
            sumOfArr = number;
            solution = shuffled.sort((a, b) => a - b);
        }
        sum === number && console.log("     Match found:", number);
    });
    return solution;
};
function shuffledArray2(shuffled) {
    let result = [];
    shuffled.forEach((num, index) => {
        let sum = shuffled
            .filter((x, i) => i !== index)
            .reduce((p, c) => p + c, 0);
        if (sum === num)
            result = shuffled
                .filter((x, i) => i !== index)
                .sort((a, b) => a - b);
    });
    return result;
}
function shuffledArray3(shuffled) {
    let sum = shuffled.reduce((acc, cur) => acc + cur, 0) / 2;
    shuffled.splice(shuffled.indexOf(sum), 1);
    return shuffled.sort((a, b) => a - b);
}
function shuffledArray4(shuffled) {
    const sum = shuffled.reduce((a, b) => a + b);
    const idx = shuffled.findIndex((num) => sum - num === num);
    shuffled.splice(idx, 1);
    return shuffled.sort((a, b) => a - b);
}
function shuffledArray5(shuffled) {
    for (let i = 0; i < shuffled.length; i++) {
        const removed = [...shuffled];
        removed.splice(i, 1);
        const sum = removed.reduce((acc, cur) => acc + cur, 0);
        if (shuffled[i] === sum) {
            shuffled.splice(i, 1);
            break;
        }
    }
    return shuffled.sort((a, b) => a - b);
}
function shuffledArray6(shuffled) {
    for (let i = 0; i < shuffled.length; ++i) {
        if (shuffled[i] ===
            shuffled.reduce((sum, val, j) => (i !== j ? sum + val : sum), 0)) {
            return shuffled
                .slice(0, i)
                .concat(shuffled.slice(i + 1))
                .sort((a, b) => a - b);
        }
    }
    return [1, 2];
}
const swapVowelCase = (str) => {
    const lettersArr = str.split("");
    const vowelsReg = /[aeiou]/i;
    lettersArr.forEach((letter, idx) => {
        if (vowelsReg.test(letter)) {
            console.log("vowel found: ", letter);
            lettersArr[idx] =
                letter === letter.toLowerCase()
                    ? letter.toUpperCase()
                    : letter.toLowerCase();
        }
    });
    const solution = lettersArr.join("");
    return solution;
};
const swapVowelCase2 = ($) => $.replace(/[aeiou]/gi, (x) => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase());
function swapVowelCase3(str) {
    return str.replace(/[aeiou]/gi, (x) => /[AEIOU]/.test(x) ? x.toLowerCase() : x.toUpperCase());
}
function swapVowelCase4(str) {
    let result = "";
    let charCode = 0;
    for (let i = 0; i < str.length; i++) {
        charCode = str.charCodeAt(i);
        switch (charCode) {
            case 97:
                result += String.fromCharCode(65);
                break;
            case 101:
                result += String.fromCharCode(69);
                break;
            case 105:
                result += String.fromCharCode(73);
                break;
            case 111:
                result += String.fromCharCode(79);
                break;
            case 117:
                result += String.fromCharCode(85);
                break;
            case 65:
                result += String.fromCharCode(97);
                break;
            case 69:
                result += String.fromCharCode(101);
                break;
            case 73:
                result += String.fromCharCode(105);
                break;
            case 79:
                result += String.fromCharCode(111);
                break;
            case 85:
                result += String.fromCharCode(117);
                break;
            default:
                result += String.fromCharCode(charCode);
        }
    }
    return result;
}
function swapVowelCase5(str) {
    let mapping = {
        a: "A",
        e: "E",
        i: "I",
        o: "O",
        u: "U",
        A: "a",
        E: "e",
        I: "i",
        O: "o",
        U: "u",
    };
    return str.replace(new RegExp(/[aeoui]/gi), (c) => mapping[c]);
}
class Warrior {
    constructor(name) {
        this.strike = function (enemy, swings) {
            enemy.health = Math.max(0, enemy.health - swings * 10);
        };
        this.name = name;
        this.health = 100;
    }
}
class Warrior2 {
    constructor(name) {
        this.name = name;
        this.health = 100;
    }
    strike(enemy, swings) { }
}
Warrior2.prototype.strike = function (enemy, swings) {
    enemy.health = Math.max(0, enemy.health - swings * 10);
};
const intDiff = (intArr, num) => {
    let counter = 0;
    for (let i = 0; i < intArr.length; i += 1) {
        console.log("outer loop:    ", intArr[i]);
        for (let j = 0; j < intArr.length; j += 1) {
            if (i === j)
                continue;
            console.log("   inner loop:   ", intArr[j]);
            if (j - i === num || i - j === num) {
                counter += 1;
            }
        }
    }
    return counter;
};
const intDiff2 = (intArr, num) => {
    let counter = 0;
    for (let i = 0; i < intArr.length; i += 1) {
        console.log("outer loop:    ", intArr[i]);
        for (let j = 0; j < intArr.length; j += 1) {
            if (i === j)
                continue;
            console.log("   inner loop:   ", intArr[j]);
            if (j - i === num || i - j === num) {
                counter += 1;
            }
        }
    }
    return counter;
};
const sortByValueAndIndex = (numArr) => {
    let numValuesArr = [];
    numArr.forEach((num, idx) => {
        numValuesArr.push([num, num * (idx + 1)]);
    });
    const solution = numValuesArr
        .sort((a, b) => a[1] - b[1])
        .map((arr) => arr[0]);
    return solution;
};
function sortByValueAndIndex2(array) {
    return array
        .map((elem, index, _array) => [elem, elem * (1 + index)])
        .sort((a, b) => a[1] - b[1])
        .map((elem, index, _array) => elem[0]);
}
function sortByValueAndIndex3(array) {
    return array
        .map((x, i) => [x, x * (i + 1)])
        .sort(([a, b], [c, d]) => b - d)
        .map(([y, z]) => y);
}
function sortByValueAndIndex4(array) {
    return array
        .map((n, i) => [n, n * i + n])
        .sort((a, b) => a[1] - b[1])
        .map((n) => n[0]);
}
function sortByValueAndIndex5(array) {
    let indexCalculationList = array.map((v, i) => [v, (i + 1) * v]);
    let sortedList = indexCalculationList.sort((a, b) => a[1] - b[1]);
    return sortedList.map((v) => v[0]);
}
function sortByValueAndIndex6(array) {
    const indexed = array.map((el, i) => {
        return { n: el, i: i + 1 };
    });
    indexed.sort((a, b) => a.n * a.i - b.n * b.i);
    return indexed.map((el) => el.n);
}
const divisions = (num, div) => {
    let counter = 0;
    while (num >= div) {
        num = Math.floor(num / div);
        counter += 1;
    }
    return counter;
};
function divisions2(n, divisor) {
    return Math.floor(Math.log(n) / Math.log(divisor));
}
const singleDigit = (num) => {
    if (num < 10)
        return num;
    const binary = num.toString(2);
    const bitArr = binary.split("").map((bit) => Number(bit));
    const sum = bitArr.reduce((acc, curr) => acc + curr);
    return sum < 10 ? sum : singleDigit(sum);
};
function singleDigit2(n) {
    function bitCount(m) {
        return (m.toString(2).match(/1/g) || []).length;
    }
    return n > 9 ? singleDigit(bitCount(n)) : n;
}
function singleDigit3(n) {
    while (n > 9) {
        n = n.toString(2).replace(/0/g, "").length;
    }
    return n;
}
const singleDigit4 = (n, s = n.toString(2)) => {
    if (n <= 9)
        return n;
    const addOnes = (s) => s.split("").reduce((sum, curr) => (curr === "1" ? ++sum : sum), 0);
    let digit = addOnes(s);
    while (digit > 9) {
        s = digit.toString(2);
        digit = addOnes(s);
    }
    return digit;
};
const singleDigit5 = (n) => n < 10 ? n : singleDigit([...n.toString(2)].reduce((a, b) => a + +b, 0));
let singleDigit6 = (n) => n < 10 ? n : singleDigit((n.toString(2).match(/1/g) || []).length);
const wallpaper = (l, w, h) => {
    const numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
    ];
    if (w * l * h === 0)
        return numbers[0];
    const ROLL = 5.2;
    const sideWalls = 2 * (w + l) * h * 1.15;
    const numRolls = sideWalls / ROLL;
    const solution = numbers[Math.ceil(numRolls)];
    return solution;
};
function wallpaper2(l, w, h) {
    const numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
    ];
    return l === 0 || w === 0 || h === 0
        ? "zero"
        : numbers[Math.ceil(((l * h + w * h) * 2 * 1.15) / (10 * 0.52))];
}
const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
];
function wallpaper3(l, w, h) {
    const roomArea = (l * h + w * h) * 2;
    const rollArea = 0.52 * 10;
    const rolls = Math.ceil(roomArea / rollArea + (roomArea / rollArea) * 0.15);
    return numbers[rolls];
}
const wordPattern = (word) => {
    const counterObj = {};
    let solutionArr = [];
    let counter = 0;
    word.toLowerCase()
        .split("")
        .forEach((char, i) => {
        if (!counterObj.hasOwnProperty(char)) {
            counterObj[char] = counter;
            solutionArr.push(counterObj[char]);
            counter += 1;
        }
        else if (counterObj.hasOwnProperty(char)) {
            solutionArr.push(counterObj[char]);
        }
    });
    const solution = solutionArr.join(".");
    return solution;
};
const wordPattern2 = (word) => {
    const splitted = word.toLowerCase().split("");
    const alphabet = {};
    let counter = 0;
    splitted.forEach((symbol) => {
        if (!alphabet[symbol] && alphabet[symbol] !== 0) {
            alphabet[symbol] = counter;
            counter += 1;
        }
    });
    return splitted.map((symbol) => alphabet[symbol]).join(".");
};
function wordPattern3(word) {
    const usedLetters = {};
    let counter = 0;
    const pattern = [];
    word.split("").forEach((c) => {
        const char = c.toLowerCase();
        if (usedLetters[char] === undefined) {
            usedLetters[char] = counter++;
        }
        pattern.push(usedLetters[char]);
    });
    return pattern.join(".");
}
const wordPattern4 = (word, chars = [...new Set(word.toLowerCase())]) => [...word.toLowerCase()].map((c) => chars.indexOf(c)).join(".");
function wordPattern5(word) {
    const letters = [...new Set(word.toLowerCase())];
    return word
        .toLowerCase()
        .split("")
        .map((l) => letters.indexOf(l))
        .join(".");
}
function wordPattern6(word) {
    return word
        .toLowerCase()
        .split("")
        .reduce(({ chars, res }, c) => {
        if (!chars.includes(c))
            chars.push(c);
        res.push(chars.indexOf(c));
        return { chars, res };
    }, { chars: [], res: [] })
        .res.join(".");
}
function wordPattern7(word) {
    let n = [];
    return word
        .toLowerCase()
        .split("")
        .map((c) => {
        if (n.indexOf(c) < 0) {
            n.push(c);
        }
        return n.indexOf(c);
    })
        .join(".");
}
function wordPattern8(word) {
    let arr = word.toLowerCase().split("");
    let unique = [...new Set(arr)];
    return arr.map((v) => unique.indexOf(v)).join(".");
}
const golfScoreCalculator = (parList, scoreList) => {
    const scoreMinPar = scoreList.split("").map((score, idx) => {
        return Number(score) - Number(parList[idx]);
    });
    const solution = scoreMinPar.reduce((acc, curr) => acc + curr);
    return solution;
};
function golfScoreCalculator2(parList, scoreList) {
    return scoreList.split("").reduce((sum, x, i) => sum + +x - +parList[i], 0);
}
function golfScoreCalculator3(parList, scoreList) {
    let score = scoreList.split("").map((x) => Number(x));
    let par = parList.split("").map((x) => Number(x));
    let difference = score.map((num, idx) => num - par[idx]);
    return difference.reduce((sum, x) => sum + x);
}
function golfScoreCalculator4(parList, scoreList) {
    let sum = 0;
    for (let i = 0; i < parList.length; i++) {
        sum += scoreList.charCodeAt(i) - parList.charCodeAt(i);
    }
    return sum;
}
function golfScoreCalculator5(parList, scoreList) {
    let golfScore = 0;
    for (let i = 0; i < 18; i++) {
        golfScore += +scoreList[i] - +parList[i];
    }
    return golfScore;
}
const rakeGarden = (garden) => {
    let gardenArr = garden.split(" ");
    gardenArr = gardenArr.map((item) => {
        return item !== "rock" && item !== "gravel" ? "gravel" : item;
    });
    return gardenArr.join(" ");
};
const rakeGarden2 = (garden) => {
    return garden
        .split(" ")
        .map((item) => {
        return item !== "rock" && item !== "gravel" ? "gravel" : item;
    })
        .join(" ");
};
const rakeGarden3 = (garden) => garden
    .split(" ")
    .map((item) => (item !== "rock" && item !== "gravel" ? "gravel" : item))
    .join(" ");
var garden1 = "slug spider rock gravel gravel gravel gravel gravel gravel gravel";
function rakeGarden4(garden) {
    return garden
        .split(" ")
        .map((a) => {
        if (a != "gravel" && a != "rock")
            return "gravel";
        return a;
    })
        .join(" ");
}
function rakeGarden5(garden) {
    return garden.replace(/((?!\brock\b|\bgravel\b)\b\w+\b)/g, "gravel");
}
function rakeGarden6(garden) {
    return garden
        .split(" ")
        .map((it) => /^gravel$|^rock$/.test(it) ? it : it.replace(it, "gravel"))
        .join(" ");
}
const generate = (length) => {
    let solution = "";
    for (let i = 0; i < length; i += 1) {
        const test = Math.floor(Math.random() * 2) + 1;
        solution += test.toString();
    }
    return solution;
};
const areaLargestSquare = (rad) => {
    const side = Math.sqrt(2 * Math.pow(rad, 2));
    console.log(side);
    const solution = Math.round(Math.pow(side, 2));
    return solution;
};
function areaLargestSquare2(r) {
    return r ** 2 * 2;
}
const areaLargestSquare3 = (ت) => ت * ت + ت * ت;
function areaLargestSquare4(r) {
    return Math.floor((r * 2 ** 0.5) ** 2);
}
const decode = (code, key) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const keyArr = key
        .toString()
        .split("")
        .map((digit) => Number(digit));
    const solutionArr = code.map((num, idx) => {
        return alphabet[num - keyArr[idx % keyArr.length] - 1];
    });
    const solution = solutionArr.join("");
    return solution;
};
function decode2(code, n) {
    let digits = n
        .toString()
        .split("")
        .map((d) => +d);
    let alphabet = " abcdefghijklmnopqrstuvwxyz";
    return code
        .map((c, i) => alphabet.charAt(c - digits[i % digits.length]))
        .join("");
}
function decode3(code, n) {
    const k = [...("" + n)].map(Number);
    return String.fromCharCode(...code.map((v, i) => v + 96 - k[i % k.length]));
}
function decode4(code, n) {
    return String.fromCharCode(...code.map((chr, idx) => chr - Number(String(n)[idx % String(n).length]) + 96));
}
function decode5(code, n) {
    const alphabetNumber = {
        1: "a",
        2: "b",
        3: "c",
        4: "d",
        5: "e",
        6: "f",
        7: "g",
        8: "h",
        9: "i",
        10: "j",
        11: "k",
        12: "l",
        13: "m",
        14: "n",
        15: "o",
        16: "p",
        17: "q",
        18: "r",
        19: "s",
        20: "t",
        21: "u",
        22: "v",
        23: "w",
        24: "x",
        25: "y",
        26: "z",
    };
    let nStringList = String(n).split("");
    return code
        .map((v, i) => v - Number(nStringList[i % nStringList.length]))
        .map((v) => alphabetNumber[v])
        .join("");
}
const cartesianNeighbor = (x, y) => {
    let solution = [];
    solution.push([x - 1, y - 1], [x - 1, y], [x - 1, y + 1], [x, y - 1], [x, y + 1], [x + 1, y - 1], [x + 1, y], [x + 1, y + 1]);
    return solution;
};
function cartesianNeighbor2(x, y) {
    let DIRS = [
        [1, 1],
        [1, -1],
        [1, 0],
        [0, 1],
        [-1, 1],
        [-1, -1],
        [-1, 0],
        [0, -1],
    ];
    return DIRS.map((direction) => {
        return [x + direction[0], y + direction[1]];
    });
}
function cartesianNeighbor3(x, y) {
    return [
        [x - 1, y + 1],
        [x, y + 1],
        [x + 1, y + 1],
        [x - 1, y],
        [x + 1, y],
        [x - 1, y - 1],
        [x, y - 1],
        [x + 1, y - 1],
    ];
}
function cartesianNeighbor4(x, y) {
    let result = [];
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i || j)
                result.push([x + i, y + j]);
        }
    }
    return result;
}
const sortVowels = (str) => {
    if (!str || typeof str === "number")
        return "";
    let solutionArr = [];
    for (let char of str) {
        const currentChar = /[aeiou]/.test(char.toLowerCase())
            ? `|${char}`
            : `${char}|`;
        solutionArr.push(currentChar);
    }
    const solution = solutionArr.join("\n");
    return solution;
};
function sortVowels2(str) {
    return typeof str != "string"
        ? ""
        : [...str]
            .map((x) => (/[aeiou]/i.test(x) ? "|" + x : x + "|"))
            .join("\n");
}
function sortVowels3(str) {
    return typeof str != "string"
        ? ""
        : Array.from(str)
            .map((c) => (/[aeiou]/i.test(c) ? "|" + c : c + "|"))
            .join("\n");
}
function sortVowels4(str) {
    if (typeof str !== "string" || !str)
        return "";
    return [...str]
        .map((ch) => ("aeiouAEIOU".includes(ch) ? `|${ch}` : `${ch}|`))
        .join("\n");
}
function sortVowels5(str) {
    if (!str || typeof str === "number") {
        return "";
    }
    const constantants = str.replace(/[^aeiou]/gi, (match) => match + "|" + "\n");
    const result = constantants.replace(/[aeiou]/gi, (match) => "|" + match + "\n");
    return result.slice(0, result.length - 1);
}
function sortVowels6(s) {
    if (s === undefined || typeof s != "string") {
        return "";
    }
    return [...s]
        .map((c) => ("aeoiu".includes(c.toLowerCase()) ? "|" + c : c + "|"))
        .join("\n");
}
const findSquares = (num) => {
    return `${Math.pow((num - 1) / 2 + 1, 2)}-${Math.pow((num - 1) / 2, 2)}`;
};
const findSquares2 = ($) => `${Math.round($ / 2) ** 2}-${Math.floor($ / 2) ** 2}`;
const findSquares3 = (num) => {
    for (let i = 1; i < 100000; i++) {
        let m = (i + 1) ** 2;
        let l = i ** 2;
        if (m - l === num)
            return `${m}-${l}`;
    }
    return "";
};
const oddOnesOut = (numsArr) => {
    let solution = [];
    const counter = {};
    numsArr.forEach((number) => (counter[number] = (counter[number] || 0) + 1));
    console.log(counter);
    solution = numsArr.filter((num) => {
        const occurrence = counter[num.toString()];
        const isOdd = (occurrence & 1) === 1;
        console.log("num:", num, "occurrence:", occurrence, "isOdd:", isOdd);
        return !isOdd;
    });
    return solution;
};
const oddOnesOut2 = (nums) => nums.filter((x) => nums.filter((n) => n == x).length % 2 == 0);
function oddOnesOut3(nums) {
    let count = nums.reduce((a, c) => {
        a[c] = (a[c] | 0) + 1;
        return a;
    }, {});
    return nums.filter((v) => count[v] % 2 === 0);
}
function oddOnesOut4(nums) {
    let interfaceArray = [];
    for (let singleValue of nums) {
        let foundObject = interfaceArray.find((data) => data.key == singleValue);
        if (foundObject) {
            foundObject.value++;
        }
        else {
            interfaceArray.push({ key: singleValue, value: 1 });
        }
    }
    return nums.filter((num) => {
        let foundObject = interfaceArray.find((element) => element.key === num);
        return foundObject && foundObject.value % 2 == 0;
    });
}
function oddOnesOut5(nums) {
    const obj = {};
    nums.forEach((num) => (obj[num] ? obj[num]++ : (obj[num] = 1)));
    return nums.filter((num) => obj[num] % 2 === 0);
}
const sabb = (str, val, happy) => {
    const testWord = "sabbatical";
    const uniqueChars = new Set(testWord.split(""));
    let counter = 0;
    uniqueChars.forEach((char) => {
        var _a;
        let re = new RegExp(char, "g");
        let occurence = (_a = str.match(re)) === null || _a === void 0 ? void 0 : _a.length;
        counter += occurence ? occurence : 0;
    });
    const totalScore = val + happy + counter;
    return totalScore > 22 ? "Sabbatical! Boom!" : "Back to your desk, boy.";
};
const sabb2 = (s, val, happiness) => (s.match(/[sabticl]/gi) || []).length + val + happiness > 23 - 1
    ? "Sabbatical! Boom!"
    : "Back to your desk, boy.";
function sabb3(s, v, h) {
    return v + h + [...s].filter((e) => "sabticl".includes(e)).length < 23
        ? "Back to your desk, boy."
        : "Sabbatical! Boom!";
}
function sabb4(s, v, h) {
    const c = (s.match(/[sabticl]/gi) || []).length;
    return c + v + h > 22 ? "Sabbatical! Boom!" : "Back to your desk, boy.";
}
function sabb5(s, val, happiness) {
    const t = [...s.toLowerCase()].reduce((a, c) => ("sabticl".includes(c) ? a + 1 : a), 0);
    const score = t + val + happiness;
    return score > 22 ? "Sabbatical! Boom!" : "Back to your desk, boy.";
}
function sabb6(s, val, happiness) {
    let char_arr = ["s", "a", "b", "t", "i", "c", "l"];
    return s.split("").filter((char) => char_arr.includes(char))
        .length +
        val +
        happiness >
        22
        ? "Sabbatical! Boom!"
        : "Back to your desk, boy.";
}
const mod256WithoutMod = (num) => {
    const divisor = 256;
    const isPositive = num > 0;
    if (Math.abs(num) < divisor)
        return num;
    while (Math.abs(num) >= divisor) {
        num = Math.abs(num) - divisor;
    }
    if (num === 0)
        return 0;
    return isPositive ? num : -num;
};
function mod256WithoutMod2(n) {
    return n % 256;
}
function mod256WithoutMod3(n) {
    if (n < 0) {
        return -mod256WithoutMod(-n);
    }
    return n & 255;
}
function mod256WithoutMod4(n) {
    return n < 0 ? -mod256WithoutMod(-n) : n & 0xff;
}
function mod256WithoutMod5(n) {
    return n < 0 ? -(-n & 255) : n & 255;
}
function mod256WithoutMod6(n) {
    return n >= 0
        ? (n / 256 - Math.floor(n / 256)) * 256
        : (n / 256 - Math.ceil(n / 256)) * 256;
}
function mod256WithoutMod7(n) {
    return n - ~~(n / 256) * 256;
}
const absentVowel = (text) => {
    let solution = 0;
    const vowels = "aeiou";
    const allVowels = text.match(/[aeiou]/g);
    const uniqueVowels = new Set(allVowels);
    for (let i = 0; i < vowels.length; i += 1) {
        if (!uniqueVowels.has(vowels[i])) {
            solution = i;
            break;
        }
    }
    return solution;
};
const absentVowel2 = (str) => [..."aeiou"].findIndex((v) => !str.includes(v));
function absentVowel3(x) {
    return [..."aeiou"].findIndex((c) => !x.toLowerCase().includes(c));
}
function absentVowel4(x) {
    let vowels = ["a", "e", "i", "o", "u"];
    let result = 0;
    vowels.forEach((v) => {
        if (!x.includes(v)) {
            result = vowels.indexOf(v);
            return;
        }
    });
    return result;
}
function absentVowel5(x) {
    var vowels = "aeiou";
    for (let i in [...vowels]) {
        if (x.toLowerCase().indexOf(vowels[i]) === -1) {
            return Number(i);
        }
    }
}
function absentVowel6(x) {
    if (/a/i.test(x) === false)
        return 0;
    if (/e/i.test(x) === false)
        return 1;
    if (/i/i.test(x) === false)
        return 2;
    if (/o/i.test(x) === false)
        return 3;
    if (/u/i.test(x) === false)
        return 4;
}
function absentVowel7(x) {
    switch (true) {
        case !x.includes("a"):
            return 0;
            break;
        case !x.includes("e"):
            return 1;
            break;
        case !x.includes("i"):
            return 2;
            break;
        case !x.includes("o"):
            return 3;
            break;
        case !x.includes("u"):
            return 4;
            break;
        default:
            return NaN;
    }
}
function perimeterSequence(a, n) {
    return n * 4 * a;
}
const perimeterSequence2 = (a, n) => (a * n) << 2;
const driver = (data) => {
    console.log(data);
    const inputSurname = data[2];
    console.log(inputSurname);
    let surname = "";
    if (inputSurname.length >= 5) {
        surname = inputSurname.substring(0, 5);
    }
    if (inputSurname.length < 5) {
        surname = `${inputSurname}${"x".repeat(5 - inputSurname.length)}`;
    }
    console.log("surname", surname);
    const dob = data[3].match(/\d{4}/)[0];
    console.log(dob);
    const decadeDigit = dob.toString()[2];
    console.log(decadeDigit);
    let monthStr = data[3]
        .match(/[a-z]{3,}/gi)[0]
        .toLowerCase()
        .slice(0, 3);
    console.log(monthStr);
    let months;
    (function (months) {
        months[months["jan"] = 1] = "jan";
        months[months["feb"] = 2] = "feb";
        months[months["mar"] = 3] = "mar";
        months[months["apr"] = 4] = "apr";
        months[months["may"] = 5] = "may";
        months[months["jun"] = 6] = "jun";
        months[months["jul"] = 7] = "jul";
        months[months["aug"] = 8] = "aug";
        months[months["sep"] = 9] = "sep";
        months[months["oct"] = 10] = "oct";
        months[months["nov"] = 11] = "nov";
        months[months["dec"] = 12] = "dec";
    })(months || (months = {}));
    let monthDigit = Number(months[monthStr]);
    console.log(typeof monthDigit);
    if (monthDigit < 10) {
        monthDigit = `0${monthDigit}`;
    }
    else {
        monthDigit = monthDigit.toString();
    }
    if (data[4].toLowerCase() === "f") {
        monthDigit = (Number(monthDigit) + 50).toString();
    }
    console.log(monthDigit);
    const date = data[3].match(/\d{2}/)[0];
    console.log(date);
    const yearDigit = dob.toString()[3];
    console.log(yearDigit);
    let initials = data[0][0];
    initials += data[1] ? data[1][0] : "9";
    console.log(initials);
    console.log(surname);
    const solution = `${surname.toUpperCase()}${decadeDigit}${monthDigit}${date}${yearDigit}${initials}9AA`;
    return solution;
};
const data = ["John", "James", "Smith", "01-Jan-2000", "M"];
function driver2(data) {
    var r = data[2].toUpperCase().substring(0, 5);
    var i;
    console.log(data[2]);
    for (i = data[2].length; i < 5; i++) {
        r += "9";
    }
    var date = new Date(data[3]);
    r += date.getFullYear().toString().charAt(2);
    r += ("0" + (date.getMonth() + 1 + (data[4] === "M" ? 0 : 50))).slice(-2);
    r += ("0" + date.getDate()).slice(-2);
    r += date.getFullYear().toString().charAt(3);
    r +=
        (data[0].length ? data[0].charAt(0) : "9") +
            (data[1].length ? data[1].charAt(0) : "9");
    r += "9AA";
    return r;
}
function driver3(data) {
    let output = "";
    data[2] = data[2].toUpperCase();
    output += data[2].substr(0, 5);
    while (output.length < 5) {
        output += "9";
    }
    output += data[3].substr(-2, 1);
    let date = new Date(data[3]);
    let month = (date.getMonth() + 1).toString();
    if (month.length < 2) {
        month = 0 + month;
    }
    if (data[4] == "F") {
        output += parseInt(month[0]) + 5 + month[1];
    }
    else {
        output += month;
    }
    let dateDay = date.getDate().toString();
    if (dateDay.length < 2) {
        dateDay = "0" + dateDay;
    }
    output += dateDay;
    output += date.getFullYear().toString().substr(-1);
    output += data[0].substr(0, 1);
    if (data[1] == "") {
        output += "9";
    }
    else {
        output += data[1].substr(0, 1);
    }
    output += "9AA";
    return output;
}
function driver4(data) {
    let date = new Date(data[3]);
    let apellido = data[2].toUpperCase().substring(0, 5);
    if (apellido.length < 5) {
        for (let i = 0; i < 5 - data[2].toUpperCase().substring(0, 4).length; i++) {
            apellido = apellido.concat("9");
        }
    }
    return (apellido +
        data[3].split("-")[2].substring(2, 3) +
        (data[4] === "F"
            ? String(date.getMonth() + 51)
            : date.getMonth() + 1 < 10
                ? "0" + String(date.getMonth() + 1)
                : String(date.getMonth() + 1)) +
        (date.getDate() < 10
            ? "0" + String(date.getDate())
            : String(date.getDate())) +
        data[3].split("-")[2].substring(3, 4) +
        data[0].substring(0, 1) +
        (data[1] !== "" ? data[1].substring(0, 1) : "9") +
        "9AA");
}
function driver5(data) {
    const [name, middleName, surname, birthDate, sex] = data;
    const [day, month, year] = birthDate.split("-");
    let result = "";
    const monthsAlphabet = {
        January: "01",
        Jan: "01",
        February: "02",
        Feb: "02",
        March: "03",
        Mar: "03",
        April: "04",
        Apr: "04",
        May: "05",
        June: "06",
        Jun: "06",
        Jule: "07",
        Jul: "07",
        August: "08",
        Aug: "08",
        September: "09",
        Sep: "09",
        October: "10",
        Oct: "10",
        November: "11",
        Nov: "11",
        December: "12",
        Dec: "12",
    };
    result += surname.slice(0, 5).padEnd(5, "9");
    result += birthDate.substr(-2, 1);
    const monthNumber = monthsAlphabet[month];
    if (sex === "M") {
        result += monthNumber;
    }
    else {
        const femaleNumber = "" + (Number(monthNumber[0]) + 5) + monthNumber[1];
        result += femaleNumber;
    }
    result += day;
    result += year.substr(-1);
    const initials = (name[0] || "9") + (middleName[0] || "9");
    result += initials;
    result += "9";
    result += "AA";
    return result.toUpperCase();
}
function driver6(data) {
    const [first_name, middle_name, last_name, birth, sex] = data;
    return [
        last_name.slice(0, 5).toUpperCase().padEnd(5, "9"),
        birth.charAt(birth.length - 2),
        String(new Date(birth).getMonth() + 1 + (sex === "F" ? 50 : 0)).padStart(2, "0"),
        String(new Date(birth).getDate()).padStart(2, "0"),
        birth.charAt(birth.length - 1),
        first_name.charAt(0) +
            (middle_name.charAt(0) ? middle_name.charAt(0) : 9),
        "9AA",
    ].join("");
}
const months = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
};
function driver7(data) {
    return ""
        .concat(data[2].toUpperCase().slice(0, 5), data[2].length < 5 ? "9".repeat(5 - data[2].length) : "")
        .concat(data[3].slice(-2, -1))
        .concat(data[4] === "F"
        ? (50 + Number(months[data[3].split("-")[1]])).toString()
        : months[data[3].split("-")[1].slice(0, 3)])
        .concat(data[3].split("-")[0])
        .concat(data[3].slice(-1))
        .concat(data[0].slice(0, 1), data[1].length ? data[1].slice(0, 1) : "9")
        .concat("9", "AA");
}
function driver8(data) {
    const getMonth = (dateStr, shouldIncrement) => {
        const date = new Date(dateStr);
        const month = date.getMonth() + 1;
        const monthString = month < 10 ? "0" + month : "" + month;
        if (!shouldIncrement)
            return monthString;
        return `${Number(monthString[0]) + 5}${monthString[1]}`;
    };
    const oneToFive = Array(5)
        .fill(null)
        .map((e, i) => (data[2][i] ? data[2][i] : "9"))
        .join("");
    const six = data[3].split("-")[2][2];
    const sevenEight = getMonth(data[3], data[4] === "F");
    const nineTen = data[3].split("-")[0];
    const eleven = data[3].split("-")[2][3];
    const twelveThirteen = [data[0][0], data[1][0]]
        .map((elem) => elem || "9")
        .join("");
    return (oneToFive +
        six +
        sevenEight +
        nineTen +
        eleven +
        twelveThirteen +
        "9AA").toUpperCase();
}
const pyramid = (numBalls) => {
    let levCount = 0;
    let currentRow = 0;
    while (true) {
        currentRow += 1;
        numBalls -= currentRow;
        if (numBalls < 0)
            break;
        levCount += 1;
    }
    return levCount;
};
function pyramid2(balls) {
    let level = 0;
    while (balls > level) {
        level += 1;
        balls -= level;
    }
    return level;
}
function pyramid3(balls) {
    return Math.floor((-1 + (1 + 4 * balls * 2) ** 0.5) / 2);
}
const pendulum = (values) => {
    const ascArr = values.sort((a, b) => a - b);
    let solution = [ascArr[0]];
    ascArr.slice(1).forEach((el, idx) => {
        if (!(idx & 1)) {
            solution.push(el);
        }
        else {
            solution.unshift(el);
        }
    });
    return solution;
};
function pendulum2(values) {
    const solution = [];
    values
        .sort((x, y) => (x > y ? 1 : x === y ? 0 : -1))
        .forEach((x, i) => {
        const fun = i % 2 ? "push" : "unshift";
        solution[fun](x);
    });
    return solution;
}
function pendulum3(values) {
    return values
        .sort((a, b) => a - b)
        .reduce((previousValue, currentValue, index) => {
        if (index % 2 == 0) {
            previousValue.unshift(currentValue);
        }
        else {
            previousValue.push(currentValue);
        }
        return previousValue;
    }, []);
}
function pendulum4(values) {
    return values
        .sort((a, b) => a - b)
        .reduce((result, v, i) => {
        if (i % 2 === 0)
            result.unshift(v);
        else
            result.push(v);
        return result;
    }, []);
}
function pendulum5(values) {
    let fin = [];
    values
        .sort((a, b) => a - b)
        .forEach((n, i) => (!(i % 2) ? fin.unshift(n) : fin.push(n)));
    return fin;
}
const collatz = (num) => {
    let counter = 1;
    while (num > 1) {
        counter += 1;
        if (num & 1) {
            num = num * 3 + 1;
        }
        else {
            num /= 2;
        }
    }
    return counter;
};
function collatz2(n) {
    let numSteps = 1;
    while (n !== 1) {
        n = n % 2 ? n * 3 + 1 : n / 2;
        ++numSteps;
    }
    return numSteps;
}
const collatz3 = (n) => n === 1 ? 1 : 1 + collatz(n & 1 ? n * 3 + 1 : n / 2);
const isNegativeZero = (num) => {
    return Object.is(-0, num);
};
function isNegativeZero2(n) {
    return Object.is(n, -0);
}
function isNegativeZero3(n) {
    return n != 0 ? false : 1 / n == -Infinity;
}
function isNegativeZero4(n) {
    return n === 0 && 1 / n === -Infinity;
}
function isNegativeZero5(n) {
    const isZero = n === 0;
    const isNegative = 1 / n === -Infinity;
    return isNegative && isZero;
}
function isNegativeZero6(n) {
    return n === -0 && 1 / n === -Infinity;
}
const isNegativeZero7 = (n) => 1 / n === -Infinity && n === -0;
function isNegativeZero8(n) {
    if (n === 0) {
        return 1 / n === -Infinity;
    }
    else {
        return false;
    }
}
const dative = (word) => {
    let solution = word;
    const lettersArr = word.split("");
    for (let i = lettersArr.length - 1; i >= 0; i -= 1) {
        console.log(lettersArr[i]);
        if (/[eéiíöőüű]/.test(lettersArr[i])) {
            solution += "nek";
            break;
        }
        if (/[aáoóuú]/.test(lettersArr[i])) {
            solution += "nak";
            break;
        }
    }
    return solution;
};
function dative2(word) {
    return word + (/[aáoóuú]+/.test(word) ? "nak" : "nek");
}
function dative3(word) {
    let front = ["e", "é", "i", "í", "ö", "ő", "ü", "ű"];
    let back = ["a", "á", "o", "ó", "u", "ú"];
    for (let i = word.length - 1; i >= 0; i--) {
        if (front.includes(word[i]))
            return word + "nek";
        else if (back.includes(word[i]))
            return word + "nak";
    }
}
const dative4 = (word) => word +
    (/[aáoóuú]/.test(word.replace(/[b-dghj-np-tv-z]/g, "").slice(-1))
        ? "nak"
        : "nek");
const calcType2 = (a, b, res) => {
    let solution = "";
    if (res === a + b)
        solution = "addition";
    if (res === a * b)
        solution = "multiplication";
    if (res === a - b)
        solution = "substraction";
    if (res === a / b)
        solution = "division";
    return solution;
};
const calcType = (a, b, res) => {
    let solution = "";
    switch (true) {
        case res === a + b:
            solution = "addition";
            break;
        case res === a * b:
            solution = "multiplication";
            break;
        case res === a - b:
            solution = "substraction";
            break;
        case res === a / b:
            solution = "division";
    }
    return solution;
};
function calcType3(a, b, c) {
    return "addition|multiplication|subtraction|division".split("|")[a + b == c ? 0 : a * b == c ? 1 : a - b == c ? 2 : 3];
}
const calcType4 = (a, b, res) => {
    if (a + b === res)
        return "addition";
    if (a - b === res)
        return "subtraction";
    if (a / b === res)
        return "division";
    if (a * b === res)
        return "multiplication";
    return "operation";
};
function calcType5(a, b, res) {
    return a + b === res
        ? "addition"
        : a - b === res
            ? "subtraction"
            : a * b === res
                ? "multiplication"
                : "division";
}
function calcType6(a, b, res) {
    if (res >= a + b) {
        return a + b === res ? "addition" : "multiplication";
    }
    return a - b === res ? "subtraction" : "division";
}
function calcType7(a, b, res) {
    const add = a + b;
    const sub = a - b;
    const mult = a * b;
    if (add === res) {
        return "addition";
    }
    else if (mult === res) {
        return "multiplication";
    }
    else if (sub === res) {
        return "subtraction";
    }
    return "division";
}
const fusc2 = (num) => {
    if (num === 0)
        return 0;
    if (num === 1)
        return 1;
    if (num % 2 === 0)
        return fusc(num / 2);
    if (num % 2 === 1)
        return fusc((num - 1) / 2) + fusc((num - 1) / 2 + 1);
};
const fusc = (num) => {
    if (num < 2)
        return num;
    return num & 1
        ? fusc((num - 1) / 2) + fusc((num - 1) / 2 + 1)
        : fusc(num / 2);
};
function fusc7(n) {
    switch (true) {
        case n === 0:
            return 0;
        case n === 1:
            return 1;
        case n % 2 === 0:
            return fusc(n / 2);
        case n % 2 === 1:
            return fusc((n - 1) / 2) + fusc((n - 1) / 2 + 1);
        default:
            throw new Error("Invalid input");
    }
}
const fusc3 = ($) => $ < 2
    ? $
    : $ % 2 === 0
        ? fusc($ / 2)
        : fusc(($ + 1) / 2) + fusc(($ - 1) / 2);
function fusc4(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    if (n % 2 === 0) {
        return fusc(n / 2);
    }
    return fusc((n - 1) / 2) + fusc((n + 1) / 2);
}
function fusc5(n) {
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    if (n % 2 === 0)
        return fusc(n / 2);
    let x = (n - 1) / 2;
    return fusc(x) + fusc(x + 1);
}
function fusc6(n, map = new Map([
    [0, 0],
    [1, 1],
])) {
    if (map.has(n)) {
        return map.get(n);
    }
    const half = n >> 1;
    if (n % 2 === 0) {
        const result = fusc(half);
        map.set(n, result);
        return result;
    }
    else {
        const result = fusc(half) + fusc(half + 1);
        map.set(n, result);
        return result;
    }
}
const potatoes = (inputCont, inputWeight, outputCont) => {
    let waterContent = (inputWeight * inputCont) / 100;
    console.log(waterContent);
    const dryWeight = inputWeight - (inputWeight * inputCont) / 100;
    console.log(dryWeight);
    const solution = inputWeight / (100 - outputCont);
    console.log(solution);
    return 1;
};
class G9645 {
    static makeValley(arr) {
        const descArr = arr.sort((a, b) => b - a);
        console.log(descArr);
        let leftWing = [];
        let rightWing = [];
        for (let i = 0; i < descArr.length; i += 2) {
            console.log(descArr[i]);
            leftWing.push(descArr[i]);
            descArr.splice(i, 1);
            i -= 1;
        }
        console.log("left;", leftWing);
        console.log(descArr);
        rightWing = descArr.reverse();
        console.log("right;", rightWing);
        const solution = leftWing.concat(rightWing);
        console.log("solution:", solution);
        return solution;
    }
}
const mean = (list) => {
    const ave = list
        .filter((el) => /\d/.test(el))
        .map((numStr) => Number(numStr))
        .reduce((acc, curr) => acc + curr) /
        list.filter((el) => /\d/.test(el)).length;
    console.log(ave);
    const charStr = list.filter((el) => /[^0-9]/.test(el)).join("");
    console.log(charStr);
    const solution = [ave, charStr];
    return solution;
};
let list = [
    "u",
    "6",
    "d",
    "1",
    "i",
    "w",
    "6",
    "s",
    "t",
    "4",
    "a",
    "6",
    "g",
    "1",
    "2",
    "w",
    "8",
    "o",
    "2",
    "0",
];
function mean2(lst) {
    let sum = 0;
    let count = 0;
    let str = "";
    for (let ch of lst) {
        if (ch >= "0" && ch <= "9") {
            sum += +ch;
            count += 1;
        }
        else {
            str += ch;
        }
    }
    return [sum / count, str];
}
function mean3(lst) {
    const a = lst.reduce((sum, x) => sum + (/\d+/.test(x) ? +x : 0), 0) / 10;
    const b = lst.join("").replace(/\d/g, "");
    return [a, b];
}
const mean4 = (arr) => {
    const [numbers, letters] = [/\d/, /[a-zA-Z]/].map((regex) => arr.filter((value) => regex.test(value)));
    return [
        numbers.reduce((acc, n) => acc + parseInt(n), 0) / numbers.length,
        letters.reduce((acc, s) => acc + s, ""),
    ];
};
function mean5(lst) {
    let numbers = [];
    let strings = [];
    lst.forEach((it) => {
        Number.isFinite(+it) ? numbers.push(+it) : strings.push(it);
    });
    return [
        numbers.reduce((n1, n2) => n1 + n2) / numbers.length,
        strings.join(""),
    ];
}
function mean6(lst) {
    let arrNum = lst.filter((x) => x.match(/[0-9]/g)).map(Number);
    let len = arrNum.length;
    let valmis = arrNum.reduce((a, b) => a + b, 0);
    let arrStr = lst
        .filter((x) => x.match(/[a-z]/g))
        .map(String)
        .join("");
    return [valmis / len, arrStr];
}
function mean8(lst) {
    var total = 0, str = "";
    for (let val of lst) {
        val.charCodeAt(0) > 64 ? (str += val) : (total += parseInt(val));
    }
    return [total / 10, str];
}
const splitTheBill = (obj) => {
    console.log(Object.values(obj));
    const aveCost = Object.values(obj).reduce((acc, curr) => {
        return acc + curr;
    }) / Object.values(obj).length;
    for (let key in obj) {
        obj[key] = Number((obj[key] - aveCost).toFixed(2));
    }
    return obj;
};
function splitTheBill3(x) {
    const entries = Object.entries(x);
    const sum = entries.reduce((s, [_, v]) => s + v, 0);
    const average = sum / entries.length;
    return entries.reduce((result, [k, v]) => {
        result[k] = Number((v - average).toFixed(2));
        return result;
    }, {});
}
function splitTheBill5(x) {
    const output = {};
    let total = 0;
    let cnt = 0;
    for (const v of Object.values(x)) {
        total += v;
        cnt++;
    }
    let avg = total / cnt;
    for (const [k, v] of Object.entries(x)) {
        output[k] = Math.round((v - avg) * 100) / 100;
    }
    return output;
}
const isFloat = (num) => {
    return num % 1 !== 0;
};
function splitTheBill6(x) {
    const bills = [];
    for (const key in x) {
        bills.push([key, x[key]]);
    }
    const totalAmount = bills.reduce((acc, bill) => acc + bill[1], 0);
    const amountPerPerson = totalAmount / bills.length;
    bills.forEach((bill) => {
        let diff = bill[1] - amountPerPerson;
        if (isFloat(diff)) {
            diff = parseFloat(diff.toFixed(2));
        }
        bill[1] = diff;
        x[bill[0]] = bill[1];
    });
    return x;
}
function splitTheBill9(x) {
    const avg = Object.keys(x).reduce((accumulator, key) => accumulator + x[key], 0) /
        Object.keys(x).length;
    return Object.keys(x).reduce((accumulator, key) => {
        return {
            ...accumulator,
            [key]: +(x[key] - avg).toFixed(2),
        };
    }, {});
}
function splitTheBill7(x) {
    const avg = Object.values(x).reduce((sum, num) => sum + num) /
        Object.values(x).length;
    for (const key in x) {
        x[key] = +(x[key] - avg).toFixed(2);
    }
    return x;
}
const isVeryEvenNumber = (num) => {
    if (num < 10 && !(num & 1)) {
        return true;
    }
    else {
        while (num > 9) {
            const numArr = String(num)
                .split("")
                .map((el) => Number(el));
            const sum = numArr.reduce((acc, curr) => acc + curr);
            num = sum;
        }
    }
    const solution = !(num & 1);
    return solution;
};
const isVeryEvenNumber2 = (num) => {
    const numArr = String(num)
        .split("")
        .map((el) => Number(el));
    const sum = numArr.reduce((acc, curr) => acc + curr);
    num = sum;
    const solution = !(num & 1);
    return num < 10 ? solution : isVeryEvenNumber(num);
};
function isVeryEvenNumber3(n) {
    if (n < 10) {
        return n % 2 === 0;
    }
    n = [...String(n)].reduce((acc, el) => acc + Number(el), 0);
    return isVeryEvenNumber(n);
}
function isVeryEvenNumber4(n) {
    return !n-- || (n % 9) % 2 === 1;
}
var isVeryEvenNumber5 = (n) => !!((--n % 9) % 2);
const isVeryEvenNumber6 = (n) => !n-- || (n % 9) % 2 === 1;
function isVeryEvenNumber7(n) {
    while (n > 9) {
        let sumDigits = 0;
        while (n) {
            const d = n % 10;
            sumDigits += d;
            n = (n - d) / 10;
        }
        n = sumDigits;
    }
    return n % 2 === 0;
}
function isVeryEvenNumber8(n) {
    if (n < 10) {
        return n % 2 === 0;
    }
    return isVeryEvenNumber(n
        .toString()
        .split("")
        .reduce((p, c) => (p += parseInt(c)), 0));
}
const freqSeq = (str, sep) => {
    const numArr = [];
    for (let char of str) {
        let regex = new RegExp(char, "g");
        let occurence = str.match(regex).length;
        console.log(char, occurence);
        numArr.push(occurence);
    }
    console.log(numArr);
    const solution = numArr.join(sep);
    return solution;
};
const freqSeq2 = (str, sep) => {
    const numArr = [];
    for (let char of str) {
        const counter = [...str].filter((el) => el === char).length;
        numArr.push(counter);
    }
    const solution = numArr.join(sep);
    return solution;
};
const change = (string) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let solution = "";
    for (let char of alphabet) {
        solution += string.toLowerCase().indexOf(char) > -1 ? "1" : "0";
    }
    return solution;
};
function change2(string) {
    return "abcdefghijklmnopqrstuvwxyz"
        .split("")
        .map((x) => (new RegExp(`${x}`, "i").test(string) ? "1" : "0"))
        .join("");
}
function change3(str) {
    const result = Array(26).fill(0);
    for (const ch of str.toUpperCase()) {
        if (ch >= "A" && ch <= "Z") {
            result[ch.charCodeAt(0) - 65] = 1;
        }
    }
    return result.join("");
}
function change5(s) {
    let returnStr = "";
    for (let i = 65; i < 91; i++) {
        if (s.toUpperCase().includes(String.fromCharCode(i))) {
            returnStr = returnStr.concat("1");
        }
        else {
            returnStr = returnStr.concat("0");
        }
    }
    return returnStr;
}
const flyBy = (lampsArr, droneArr) => {
    if (!/=/g.test(droneArr))
        return lampsArr;
    const dist = droneArr.match(/=/g).length;
    const solution = `${"o".repeat(dist)}${lampsArr.substring(dist)}`;
    return solution;
};
const flyBy2 = (lampsArr, droneArr) => {
    const dist = lampsArr.length > droneArr.length ? droneArr.length : lampsArr.length;
    const solution = `${"o".repeat(dist)}${lampsArr.substring(dist)}`;
    return solution;
};
const flyBy3 = (lamps, drone) => drone.length >= lamps.length
    ? "o".repeat(lamps.length)
    : "o".repeat(drone.length) + "x".repeat(lamps.length - drone.length);
function flyBy4(lamps, drone) {
    const droneIndex = drone.length - 1;
    const lampsArray = lamps.split("");
    lampsArray.forEach((lamp, index) => {
        if (index <= droneIndex) {
            lampsArray[index] = "o";
        }
    });
    return lampsArray.join("");
}
function flyBy5(lamps, drone) {
    return [...lamps].fill("o", 0, drone.length).join("");
}
function flyBy6(lamps, drone) {
    return ("o".repeat(Math.min(drone.length, lamps.length)) +
        "x".repeat(Math.max(0, lamps.length - drone.length)));
}
function flyBy7(lamps, drone) {
    let l = drone.length;
    while (l--)
        lamps = lamps.replace("x", "o");
    return lamps;
}
const timeCorrect = (timeStr) => {
    if (!timeStr)
        return timeStr;
    const re = /\d{2}:\d{2}:\d{2}/;
    const isValidFormat = re.test(timeStr) && timeStr.length === 8;
    if (!isValidFormat)
        return null;
    const hmsArr = timeStr.split(":").map((str) => Number(str));
    const getSeconds = (numArr) => {
        return numArr[0] * 3600 + numArr[1] * 60 + numArr[2];
    };
    let totalSeconds = getSeconds(hmsArr);
    let hour = 0, min = 0, sec = 0;
    if (totalSeconds > 3599) {
        hour += Math.floor(totalSeconds / 3600) % 24;
        totalSeconds = totalSeconds % 3600;
    }
    if (totalSeconds > 59) {
        min += Math.floor(totalSeconds / 60);
        totalSeconds = totalSeconds % 60;
    }
    sec = totalSeconds;
    let solutionArr = [hour, min, sec];
    const padToTwo = (num) => {
        return num < 10 ? `0${num}` : num.toString();
    };
    const padSolArr = solutionArr.map((num) => padToTwo(num));
    const solution = padSolArr.join(":");
    return solution;
};
function timeCorrect2(ts) {
    if (ts === "")
        return "";
    if (ts === null || !ts.match(/^[0-9][0-9]\:[0-9][0-9]\:[0-9][0-9]$/))
        return null;
    let [h, m, s] = ts.split(":").map((v) => parseInt(v));
    let temp = 0;
    [s, temp] = convToUp(s);
    [m, temp] = convToUp(m + temp);
    h = (h + temp) % 24;
    return [h, m, s]
        .map((v) => `0${v}`.substr(v.toString().length - 1))
        .join(":");
}
function convToUp(num) {
    let s = num % 60;
    let temp = (num - s) / 60;
    return [s, temp];
}
function timeCorrect3(timestring) {
    if (!timestring || timestring === "")
        return timestring;
    else if (!/^\d\d:\d\d:\d\d$/.test(timestring))
        return null;
    let [h, m, s] = timestring.split(":").map((x) => +x);
    m += Math.floor(s / 60);
    h += Math.floor(m / 60);
    return [h % 24, m % 60, s % 60]
        .map((x) => ("" + x).padStart(2, "0"))
        .join(":");
}
function timeCorrect4(timestring) {
    if (timestring === null || timestring === "")
        return timestring;
    if (!timestring.match(/^[0-9][0-9]:[0-9][0-9]:[0-9][0-9]/))
        return null;
    let [h, m, s] = timestring.split(":").map((s) => parseInt(s));
    if (s >= 60) {
        s -= 60;
        m++;
    }
    if (m >= 60) {
        m -= 60;
        h++;
    }
    h = h % 24;
    return `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`;
}
const timeCorrect5 = (timestring) => {
    if (timestring == "")
        return "";
    else if (!timestring)
        return null;
    const [house, minutes, seconds] = timestring.split(":").map(Number);
    if (!(house && minutes && seconds))
        return null;
    return new Date(0, 0, 0, house, minutes, seconds).toLocaleTimeString("en-GB", { hour12: false });
};
function timeCorrect6(timestring) {
    if (timestring === "")
        return "";
    if (timestring === null || !/\d{2}:\d{2}:\d{2}/.test(timestring))
        return null;
    let timeArr = timestring.split(":");
    let totalSeconds = (+timeArr[0] * 60 * 60 + +timeArr[1] * 60 + +timeArr[2]) % 86400;
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds - hours * 3600) / 60);
    let seconds = totalSeconds - hours * 3600 - minutes * 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
const extraPerfect = (num) => {
    let solution = [];
    for (let i = 0; i <= num; i += 1) {
        if (i & 1) {
            solution.push(i);
        }
    }
    return solution;
};
function extraPerfect2(n) {
    let r = [];
    for (let i = 1; i <= n; i++) {
        let b = i.toString(2);
        if (b[0] === "1" && b[b.length - 1] === "1")
            r.push(i);
    }
    return r;
}
function extraPerfect3(n) {
    let output = [];
    for (let i = 1; i <= n; i++) {
        if (i.toString(2).charAt(0) == "1" &&
            i.toString(2).charAt(i.toString(2).length - 1) == "1") {
            output.push(i);
        }
    }
    return output;
}
function extraPerfect4(n) {
    let res = [];
    for (let i = 1; i <= n; i++) {
        let bin = i.toString(2);
        if (bin.startsWith("1") && bin.endsWith("1"))
            res.push(i);
    }
    return res;
}
const extraPerfect5 = (n) => [...Array(n)].map((_, i) => i + 1).filter((n) => n % 2);
function extraPerfect6(n) {
    let numbers = new Array(Math.ceil(n / 2));
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = 2 * i + 1;
    }
    return numbers;
}
const replaceNth = (str, nth, oldVal, newVal) => {
    const lettersArr = str.split("");
    let counter = 0;
    for (let i = 0; i < lettersArr.length; i += 1) {
        const current = lettersArr[i];
        if (current === oldVal) {
            counter += 1;
            console.log(current);
            if (counter % nth === 0) {
                lettersArr[i] = newVal;
            }
        }
    }
    console.log(counter);
    console.log(lettersArr);
    const solution = lettersArr.join("");
    return solution;
};
function replaceNth2(s, n, a, b, c = 0) {
    return s
        .split("")
        .map((e) => (e === a ? (++c === n ? ((c = 0) ? b : b) : e) : e))
        .join("");
}
function replaceNth3(text, n, oldValue, newValue) {
    let count = 0;
    return text.split("").reduce((acc, elm, index) => {
        if (elm === oldValue && n > 0) {
            count++;
            if (!(count % n))
                return acc.concat(newValue);
        }
        return acc.concat(elm);
    }, "");
}
function replaceNth4(text, n, oldValue, newValue) {
    if (n < 1)
        return text;
    let matches = 0;
    return text.replace(new RegExp(oldValue, "g"), (match) => (matches++, matches % n ? match : newValue));
}
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
    const [word1, word2] = words.split(" ");
    const sword1 = `${word2[0]}` + word1.slice(1);
    const sword2 = `${word1[0]}` + word2.slice(1);
    return `${sword1} ${sword2}`;
}
function spoonerize3(words) {
    let arr = words.split(" ");
    let a = arr[0][0];
    let b = arr[1][0];
    return b + arr[0].slice(1) + " " + a + arr[1].slice(1);
}
const spoonerize4 = (words) => {
    const [a, b] = words.split(" ");
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
    const arr = words.split(" ");
    return [arr[1][0] + arr[0].slice(1), arr[0][0] + arr[1].slice(1)].join(" ");
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
    let begin = {
        a: str.slice(0, 2),
        b: str.slice(0, 4),
        c: str.slice(0, 1),
    };
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
Kata2.pinFormat = new RegExp(/^\d{4}(\d{2})?$/);
class Kata3 {
    static validatePin(pin) {
        return /^(\d{4}|\d{6})$/.test(pin);
    }
}
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
