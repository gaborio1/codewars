"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.countBits7 = exports.countBits6 = exports.countBits5 = exports.countBits4 = exports.countBits3 = exports.countBits2 = exports.findOutlier3 = exports.findOutlier2 = exports.solution5 = exports.streetFighterSelection9 = exports.streetFighterSelection8 = exports.myFirstInterpreter3 = exports.backwardsPrime8 = exports.backwardsPrime7 = exports.isPalindrome = exports.isPrime = exports.numPrimorial2 = void 0;
function encode(text) {
    return "bits";
}
function decode(bits) {
    return "text";
}
function binaryToString(binary) {
    return "";
}
class G96412 {
    static game(n) {
        return [1];
    }
}
class G96411 {
    static iterPi(epsilon) {
        const PI = Math.PI;
        let approxPi = 0;
        let iterCounter = 0;
        const numIterations = 1 / epsilon + 1;
        for (let i = 0, step = 1; i < numIterations + 1; i += 1, step += 2) {
            const fract = i & 1 ? -1 / step : 1 / step;
            approxPi += fract;
            iterCounter = i + 1;
            if (Math.abs(PI - approxPi * 4) < epsilon)
                break;
        }
        approxPi *= 4;
        approxPi = Number(approxPi.toFixed(10));
        const solution = [iterCounter, approxPi];
        return solution;
    }
}
class G001 {
    static howmuch(m, n) {
        let solution = [];
        let min = m, max = n;
        if (m > n) {
            min = n;
            max = m;
        }
        for (let i = min; i <= max; i += 1) {
            if (Number.isInteger((i - 1) / 9) &&
                Number.isInteger((i - 2) / 7)) {
                console.log("match:", i);
                solution.push([
                    `M: ${i}`,
                    `B: ${(i - 2) / 7}`,
                    `C: ${(i - 1) / 9}`,
                ]);
            }
        }
        return solution;
    }
}
class G0012 {
    static howmuch(m, n) {
        let i = Math.min(m, n);
        let j = Math.max(m, n);
        let result = [];
        while (i <= j) {
            if (i % 9 == 1 && i % 7 == 2) {
                result.push([
                    `M: ${i}`,
                    `B: ${(i - 2) / 7}`,
                    `C: ${(i - 1) / 9}`,
                ]);
            }
            i++;
        }
        return result;
    }
}
const grabscrab = (anagram, dict) => {
    let solution = [];
    const sortedAnagram = anagram.split("").sort().join();
    for (let i = 0; i < dict.length; i += 1) {
        const sortedWord = dict[i].split("").sort().join();
        if (sortedWord === sortedAnagram) {
            solution.push(dict[i]);
        }
    }
    return solution;
};
function grabscrab2(anagram, dictionary) {
    let s = [...anagram].sort().join("");
    return dictionary.filter((x) => [...x].sort().join("") === s);
}
const grabscrab3 = (() => {
    const sortWord = (word) => [...word].sort().join("");
    return (anagram, dictionary) => {
        return dictionary.filter((word) => sortWord(word) === sortWord(anagram));
    };
})();
const grabscrab4 = (anagram, dictionary) => dictionary.filter((word) => ![...anagram].reduce((acc, c) => acc.replace(c, ""), word));
const rotate = (str) => {
    const wordArr = str.split("\n");
    console.log(wordArr);
    return wordArr
        .map((word) => word.split("").reverse().join(""))
        .reverse()
        .join("\n");
};
const selfieAndRot = (str) => {
    const wordArr = str.split("\n");
    let topArr = [], bottomArr = [];
    wordArr.forEach((word) => {
        const topCurrent = word + ".".repeat(word.length);
        console.log("top current:", topCurrent);
        topArr.push(topCurrent);
        const bottomCurrent = topCurrent.split("").reverse().join("");
        console.log("bottom current:", bottomCurrent);
        bottomArr.unshift(bottomCurrent);
    });
    console.log("top array:", topArr);
    console.log("bottom array:", bottomArr);
    const solutionArr = [...topArr, ...bottomArr];
    console.log(solutionArr);
    const solution = solutionArr.join("\n");
    return solution;
};
const oper = (func, str) => {
    return func(str);
};
const maxBall = (v0) => {
    const G = 9.81;
    const vMS = v0 / 3.6;
    let t = 0;
    let heightsArr = [];
    let currHeight = 0;
    let counter = 0;
    while (true) {
        const lastReading = heightsArr[heightsArr.length - 1];
        currHeight = vMS * t - 0.5 * G * t ** 2;
        if (currHeight < lastReading)
            break;
        counter += 1;
        t += 0.1;
        heightsArr.push(currHeight);
    }
    console.log(heightsArr, heightsArr.length);
    return counter - 1;
};
function maxBall2(v0) {
    const g = 9.81;
    let v = v0 / 3.6;
    let t = v / g;
    return Math.round(t * 10);
}
function maxBall3(v0) {
    const t = Math.round((v0 * 1000 * 10) / 9.81 / 3600);
    return t;
}
function maxBall4(input) {
    const gravity = 9.81;
    const ratio = 5 / 18;
    const velocity = input * ratio;
    return Math.round((velocity / gravity) * 10);
}
function maxBall5(v0) {
    const v = (v0 * 1000) / 3600;
    let h1 = -Infinity;
    let t = 0.1;
    let h2 = v * t - 0.5 * 9.81 * t * t;
    while (h2 > h1) {
        h1 = h2;
        t += 0.1;
        h2 = v * t - 0.5 * 9.81 * t * t;
    }
    return Math.round(t * 10) - 1;
}
function maxBall6(v0) {
    const records = [0];
    const g = 9.81;
    let t = 0.1;
    let h = (v0 / 3.6) * t - 0.5 * g * t * t;
    records.push(h);
    while (h > 0) {
        t += 0.1;
        h = (v0 / 3.6) * t - 0.5 * g * t * t;
        records.push(h);
    }
    const max = Math.max(...records);
    return records.indexOf(max);
}
class G9643 {
    static rank(namesStr, weightsArr, rank) {
        if (namesStr === "")
            return "No participants";
        let nameValArr = [];
        const namesArr = namesStr.split(",");
        console.log(namesArr);
        if (namesArr.length < rank)
            return "Not enough participants";
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const getValue = (str) => {
            let value = 0;
            console.log("length:", str.length);
            for (let letter of str) {
                value += alphabet.indexOf(letter.toLowerCase()) + 1;
            }
            value += str.length;
            return value;
        };
        namesArr.forEach((name, idx) => {
            const winNum = getValue(name) * weightsArr[idx];
            console.log(name, getValue(name), " => ", winNum);
            nameValArr.push([name, winNum]);
        });
        console.log(nameValArr);
        const descWinArr = nameValArr.sort((a, b) => {
            return b[1] - a[1];
        });
        console.log(descWinArr);
        const winningNum = descWinArr[rank - 1][1];
        console.log("winning number:", winningNum);
        const winnersArr = descWinArr
            .filter((runnerUp) => {
            return runnerUp[1] === winningNum;
        })
            .sort();
        console.log(winnersArr);
        const solution = winnersArr[0][0];
        return solution;
    }
}
const stringTransformer = (str) => {
    let solutionArr = [];
    let strArr = str.split("");
    console.log(strArr);
    strArr = strArr.map((char) => {
        return char === char.toLowerCase()
            ? char.toUpperCase()
            : char.toLowerCase();
    });
    console.log(strArr);
    console.log(strArr.join(""));
    let wordArr = [];
    for (let i = strArr.length - 1; i >= 0; i -= 1) {
        const current = strArr[i];
        if (current === " ") {
            solutionArr.push(wordArr.join(""));
            wordArr = [];
            console.log("   space");
            solutionArr.push(current);
        }
        if (/[a-zA-Z]/.test(current)) {
            wordArr.unshift(current);
            console.log("current word:", wordArr);
        }
        if (strArr[i - 1] === undefined) {
            solutionArr.push(wordArr.join(""));
        }
    }
    console.log("solution: ", solutionArr.join(""));
    return solutionArr.join("");
};
function stringTransformer2(str) {
    return str
        .split(" ")
        .reverse()
        .join(" ")
        .split("")
        .map((v) => (v == v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
        .join("");
}
function stringTransformer3(str) {
    return str
        .split(" ")
        .reverse()
        .map((x) => x.replace(/./g, (y) => /[A-Z]/.test(y) ? y.toLowerCase() : y.toUpperCase()))
        .join(" ");
}
function stringTransformer4(str) {
    return str
        .split("")
        .map((l) => (l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()))
        .join("")
        .split(" ")
        .reverse()
        .join(" ");
}
function stringTransformer5(str) {
    return str
        .replace(/./g, (c) => {
        if (c.match(/[A-Z]/g))
            return c.toLowerCase();
        else
            return c.toUpperCase();
    })
        .split(" ")
        .reverse()
        .join(" ");
}
const isValidCoordinates = (coordinates) => {
    const coordsArr = coordinates.split(",");
    console.log(coordsArr);
    if (coordsArr.length !== 2)
        return false;
    const latNum = Number(coordsArr[0]);
    const longNum = Number(coordsArr[1]);
    console.log(latNum, longNum);
    if (isNaN(latNum) || isNaN(longNum))
        return false;
    if (Math.abs(latNum) > 90 || Math.abs(longNum) > 180)
        return false;
    return true;
};
function isValidCoordinates2(coordinates) {
    const pattern = /^-?(90|[0-8]\d|\d)(?:\.\d*)?,\s-?(1[0-7]\d|180|\d{1,2})(?:\.\d*)?$/;
    return pattern.test(coordinates);
}
function isValidCoordinates3(coordinates) {
    const [lat, lng] = coordinates.split(", ").map(Number);
    return lat > -90 && lat < 90 && lng > -180 && lng < 180;
}
function isValidCoordinates4(coordinates) {
    const [lat, long] = coordinates.split(", ");
    const validLat = Number(lat) >= -90 && Number(lat) <= 90;
    const validLong = Number(long) >= -180 && Number(long) <= 180;
    return validLat && validLong;
}
function isValidCoordinates5(coordinates) {
    if (coordinates.match(/^(-?\d+(?:\.\d+)?), (-?\d+(?:\.\d+)?)$/g)) {
        let [a, b] = coordinates.split(", ").map((num) => parseInt(num, 10));
        return 90 >= a && a >= -90 && 180 >= b && b >= -180;
    }
    return false;
}
const isValidCoordinates7 = (c) => /^-?([0-8]\d|90|\d)(\.\d+)?,\s-?(180|1[0-7]\d|\d{2}|\d)(\.\d+)?$/.test(c);
class G9645 {
}
G9645.travel = (dataStr, zip) => {
    console.log("----------zip: " + zip + " zip-----------");
    const zipFormat = /[A-Z]{2}\s[0-9]{5}(?!\.)/g;
    if (!zipFormat.test(zip))
        return zip + ":/";
    let solution = zip + ":";
    const addressArr = dataStr.split(",");
    console.log(addressArr);
    const zipMatchArr = addressArr.filter((address) => {
        return address.includes(zip);
    });
    console.log(zipMatchArr);
    let cityStreetArr = [];
    let houseNumberArr = [];
    zipMatchArr.forEach((adStr) => {
        console.log(adStr);
        const detailsArr = adStr.split(" ");
        console.log(detailsArr);
        const cityStreet = detailsArr.slice(1, -2).join(" ");
        console.log(cityStreet);
        cityStreetArr.push(cityStreet);
        houseNumberArr.push(detailsArr[0]);
    });
    console.log(cityStreetArr);
    const cityStreetStr = cityStreetArr.join(",");
    console.log(cityStreetStr);
    console.log(houseNumberArr);
    const houseNumberStr = houseNumberArr.join(",");
    console.log(houseNumberStr);
    solution += cityStreetStr + "/" + houseNumberStr;
    console.log(solution);
    return solution;
};
const ad = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432," +
    "54 Holy Grail Street Niagara Town ZP 32908,3200 Main Rd. Bern AE 56210,1 Gordon St. Atlanta RE 13000," +
    "10 Pussy Cat Rd. Chicago EX 34342,10 Gordon St. Atlanta RE 13000,58 Gordon Road Atlanta RE 13000," +
    "22 Tokyo Av. Tedmondville SW 43098,674 Paris bd. Abbeville AA 45521,10 Surta Alley Goodtown GG 30654," +
    "45 Holy Grail Al. Niagara Town ZP 32908,320 Main Al. Bern AE 56210,14 Gordon Park Atlanta RE 13000," +
    "100 Pussy Cat Rd. Chicago EX 34342,2 Gordon St. Atlanta RE 13000,5 Gordon Road Atlanta RE 13000," +
    "2200 Tokyo Av. Tedmondville SW 43098,67 Paris St. Abbeville AA 45521,11 Surta Avenue Goodtown GG 30654," +
    "45 Holy Grail Al. Niagara Town ZP 32918,320 Main Al. Bern AE 56215,14 Gordon Park Atlanta RE 13200," +
    "100 Pussy Cat Rd. Chicago EX 34345,2 Gordon St. Atlanta RE 13222,5 Gordon Road Atlanta RE 13001," +
    "2200 Tokyo Av. Tedmondville SW 43198,67 Paris St. Abbeville AA 45522,11 Surta Avenue Goodville GG 30655," +
    "2222 Tokyo Av. Tedmondville SW 43198,670 Paris St. Abbeville AA 45522,114 Surta Avenue Goodville GG 30655," +
    "2 Holy Grail Street Niagara Town ZP 32908,3 Main Rd. Bern AE 56210,77 Gordon St. Atlanta RE 13000";
const sortTheInnerContent = (words) => {
    const wordsArr = words.split(" ");
    console.log(wordsArr);
    wordsArr.forEach((word, idx) => {
        if (word.length > 3) {
            const lettersArr = word.split("");
            const innerLetters = lettersArr.slice(1, -1);
            console.log(innerLetters);
            const innerSortRev = innerLetters.sort().reverse().join("");
            console.log(innerSortRev);
            wordsArr[idx] = `${word[0]}${innerSortRev}${word[word.length - 1]}`;
        }
    });
    return wordsArr.join(" ");
};
function sortTheInnerContent2(words) {
    return words
        .split(" ")
        .map((w) => w.length < 2
        ? w
        : w[0] +
            w.slice(1, -1).split("").sort().reverse().join("") +
            w.slice(-1))
        .join(" ");
}
function sortTheInnerContent3(w) {
    return w
        .split(" ")
        .map((x, i, arr) => x.length < 2
        ? x
        : arr[i][0] +
            x.slice(1, -1).split("").sort().reverse().join("") +
            arr[i].slice(-1))
        .join(" ");
}
const sortTheInnerContent4 = (phrase) => phrase
    .split(" ")
    .map(([start, ...rest]) => {
    const end = rest.pop();
    return [start, ...rest.sort().reverse(), end].join("");
})
    .join(" ");
function sortTheInnerContent5(words) {
    return words.replace(/\S+/g, (x) => x.replace(/^(.)(.{2,})(.)$/g, (a, b, c, d) => b + c.split("").sort().reverse().join("") + d));
}
function sortTheInnerContent6(words) {
    return words
        .split(" ")
        .map((word) => {
        if (word.length < 4) {
            return word;
        }
        else {
            var middle = word.substring(1, word.length - 1);
            return (word.charAt(0) +
                middle.split("").sort().reverse().join("") +
                word.charAt(word.length - 1));
        }
    })
        .join(" ");
}
function sortTheInnerContent7(input) {
    const words = input.split(" ");
    return words
        .map((word) => {
        if (word.length <= 3)
            return word;
        const chars = word.split("");
        return (chars[0] +
            chars
                .slice(1, chars.length - 1)
                .sort()
                .reverse()
                .join("") +
            chars[chars.length - 1]);
    })
        .join(" ");
}
const numPrimorial = (num) => {
    let primesArr = [];
    const isPrime = (num) => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };
    let i = 2;
    while (primesArr.length < num) {
        let prime = 0;
        if (isPrime(i)) {
            prime = i;
            primesArr.push(prime);
        }
        if (primesArr.length === num) {
            break;
        }
        i += 1;
    }
    const solution = primesArr.reduce((acc, curr) => acc * curr);
    return solution;
};
const primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
    157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
    239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
    331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419,
    421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503,
    509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607,
    613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701,
    709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811,
    821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911,
    919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997, 1009, 1013,
    1019, 1021, 1031, 1033, 1039, 1049, 1051, 1061, 1063, 1069, 1087, 1091,
    1093, 1097, 1103, 1109, 1117, 1123, 1129, 1151, 1153, 1163, 1171, 1181,
    1187, 1193, 1201, 1213, 1217, 1223, 1229, 1231, 1237, 1249, 1259, 1277,
    1279, 1283, 1289, 1291, 1297, 1301, 1303, 1307, 1319, 1321, 1327, 1361,
    1367, 1373, 1381, 1399, 1409, 1423, 1427, 1429, 1433, 1439, 1447, 1451,
    1453, 1459, 1471, 1481, 1483, 1487, 1489, 1493, 1499, 1511, 1523, 1531,
    1543, 1549, 1553, 1559, 1567, 1571, 1579, 1583, 1597, 1601, 1607, 1609,
    1613, 1619, 1621, 1627, 1637, 1657, 1663, 1667, 1669, 1693, 1697, 1699,
    1709, 1721, 1723, 1733, 1741, 1747, 1753, 1759, 1777, 1783, 1787, 1789,
    1801, 1811, 1823, 1831, 1847, 1861, 1867, 1871, 1873, 1877, 1879, 1889,
    1901, 1907, 1913, 1931, 1933, 1949, 1951, 1973, 1979, 1987, 1993, 1997,
    1999, 2003, 2011, 2017, 2027, 2029, 2039, 2053, 2063, 2069, 2081, 2083,
    2087, 2089, 2099, 2111, 2113, 2129, 2131, 2137, 2141, 2143, 2153, 2161,
    2179, 2203, 2207, 2213, 2221, 2237, 2239, 2243, 2251, 2267, 2269, 2273,
    2281, 2287, 2293, 2297, 2309, 2311, 2333, 2339, 2341, 2347, 2351, 2357,
    2371, 2377, 2381, 2383, 2389, 2393, 2399, 2411, 2417, 2423, 2437, 2441,
    2447, 2459, 2467, 2473, 2477, 2503, 2521, 2531, 2539, 2543, 2549, 2551,
    2557, 2579, 2591, 2593, 2609, 2617, 2621, 2633, 2647, 2657, 2659, 2663,
    2671, 2677, 2683, 2687, 2689, 2693, 2699, 2707, 2711, 2713, 2719, 2729,
    2731, 2741, 2749, 2753, 2767, 2777, 2789, 2791, 2797, 2801, 2803, 2819,
    2833, 2837, 2843, 2851, 2857, 2861, 2879, 2887, 2897, 2903, 2909, 2917,
    2927, 2939, 2953, 2957, 2963, 2969, 2971, 2999, 3001, 3011, 3019, 3023,
    3037, 3041, 3049, 3061, 3067, 3079, 3083, 3089, 3109, 3119, 3121, 3137,
    3163, 3167, 3169, 3181, 3187, 3191, 3203, 3209, 3217, 3221, 3229, 3251,
    3253, 3257, 3259, 3271, 3299, 3301, 3307, 3313, 3319, 3323, 3329, 3331,
    3343, 3347, 3359, 3361, 3371, 3373, 3389, 3391, 3407, 3413, 3433, 3449,
    3457, 3461, 3463, 3467, 3469, 3491, 3499, 3511, 3517, 3527, 3529, 3533,
    3539, 3541, 3547, 3557, 3559, 3571, 3581, 3583, 3593, 3607, 3613, 3617,
    3623, 3631, 3637, 3643, 3659, 3671, 3673, 3677, 3691, 3697, 3701, 3709,
    3719, 3727, 3733, 3739, 3761, 3767, 3769, 3779, 3793, 3797, 3803, 3821,
    3823, 3833, 3847, 3851, 3853, 3863, 3877, 3881, 3889, 3907, 3911, 3917,
    3919, 3923, 3929, 3931, 3943, 3947, 3967, 3989, 4001, 4003, 4007, 4013,
    4019, 4021, 4027, 4049, 4051, 4057, 4073, 4079, 4091, 4093, 4099, 4111,
    4127, 4129, 4133, 4139, 4153, 4157, 4159, 4177, 4201, 4211, 4217, 4219,
    4229, 4231, 4241, 4243, 4253, 4259, 4261, 4271, 4273, 4283, 4289, 4297,
    4327, 4337, 4339, 4349, 4357, 4363, 4373, 4391, 4397, 4409, 4421, 4423,
    4441, 4447, 4451, 4457, 4463, 4481, 4483, 4493, 4507, 4513, 4517, 4519,
    4523, 4547, 4549, 4561, 4567, 4583, 4591, 4597, 4603, 4621, 4637, 4639,
    4643, 4649, 4651, 4657, 4663, 4673, 4679, 4691, 4703, 4721, 4723, 4729,
    4733, 4751, 4759, 4783, 4787, 4789, 4793, 4799, 4801, 4813, 4817, 4831,
    4861, 4871, 4877, 4889, 4903, 4909, 4919, 4931, 4933, 4937, 4943, 4951,
    4957, 4967, 4969, 4973, 4987, 4993, 4999, 5003, 5009, 5011, 5021, 5023,
    5039, 5051, 5059, 5077, 5081, 5087, 5099, 5101, 5107, 5113, 5119, 5147,
    5153, 5167, 5171, 5179, 5189, 5197, 5209, 5227, 5231, 5233, 5237, 5261,
    5273, 5279, 5281, 5297, 5303, 5309, 5323, 5333, 5347, 5351, 5381, 5387,
    5393, 5399, 5407, 5413, 5417, 5419, 5431, 5437, 5441, 5443, 5449, 5471,
    5477, 5479, 5483, 5501, 5503, 5507, 5519, 5521, 5527, 5531, 5557, 5563,
    5569, 5573, 5581, 5591, 5623, 5639, 5641, 5647, 5651, 5653, 5657, 5659,
    5669, 5683, 5689, 5693, 5701, 5711, 5717, 5737, 5741, 5743, 5749, 5779,
    5783, 5791, 5801, 5807, 5813, 5821, 5827, 5839, 5843, 5849, 5851, 5857,
    5861, 5867, 5869, 5879, 5881, 5897, 5903, 5923, 5927, 5939, 5953, 5981,
    5987, 6007, 6011, 6029, 6037, 6043, 6047, 6053, 6067, 6073, 6079, 6089,
    6091, 6101, 6113, 6121, 6131, 6133, 6143, 6151, 6163, 6173, 6197, 6199,
    6203, 6211, 6217, 6221, 6229, 6247, 6257, 6263, 6269, 6271, 6277, 6287,
    6299, 6301, 6311, 6317, 6323, 6329, 6337, 6343, 6353, 6359, 6361, 6367,
    6373, 6379, 6389, 6397, 6421, 6427, 6449, 6451, 6469, 6473, 6481, 6491,
    6521, 6529, 6547, 6551, 6553, 6563, 6569, 6571, 6577, 6581, 6599, 6607,
    6619, 6637, 6653, 6659, 6661, 6673, 6679, 6689, 6691, 6701, 6703, 6709,
    6719, 6733, 6737, 6761, 6763, 6779, 6781, 6791, 6793, 6803, 6823, 6827,
    6829, 6833, 6841, 6857, 6863, 6869, 6871, 6883, 6899, 6907, 6911, 6917,
    6947, 6949, 6959, 6961, 6967, 6971, 6977, 6983, 6991, 6997, 7001, 7013,
    7019, 7027, 7039, 7043, 7057, 7069, 7079, 7103, 7109, 7121, 7127, 7129,
    7151, 7159, 7177, 7187, 7193, 7207, 7211, 7213, 7219, 7229, 7237, 7243,
    7247, 7253, 7283, 7297, 7307, 7309, 7321, 7331, 7333, 7349, 7351, 7369,
    7393, 7411, 7417, 7433, 7451, 7457, 7459, 7477, 7481, 7487, 7489, 7499,
    7507, 7517, 7523, 7529, 7537, 7541, 7547, 7549, 7559, 7561, 7573, 7577,
    7583, 7589, 7591, 7603, 7607, 7621, 7639, 7643, 7649, 7669, 7673, 7681,
    7687, 7691, 7699, 7703, 7717, 7723, 7727, 7741, 7753, 7757, 7759, 7789,
    7793, 7817, 7823, 7829, 7841, 7853, 7867, 7873, 7877, 7879, 7883, 7901,
    7907, 7919,
];
function numPrimorial2(n) {
    return primes.slice(0, n).reduce((acc, v) => acc * v);
}
exports.numPrimorial2 = numPrimorial2;
const numPrimorial3 = (n) => {
    const isPrime = (m) => {
        for (let i = 2; i < m / 2 + 1; i++) {
            if (m % i === 0) {
                return false;
            }
        }
        return true;
    };
    let t = 0, op = 1, c = 1;
    while (true) {
        c++;
        if (isPrime(c)) {
            op *= c;
            t++;
            if (t === n) {
                break;
            }
        }
    }
    return op;
};
function numPrimorial4(n) {
    const primes = [];
    let i = 2;
    while (primes.length < n) {
        let j = 2;
        let prime = true;
        while (prime && j < i) {
            if (i % j === 0) {
                prime = false;
            }
            j++;
        }
        if (prime) {
            primes.push(i);
        }
        i++;
    }
    return primes.reduce((acc, cur) => acc * cur, 1);
}
function numPrimorial5(n) {
    let count = 0;
    let sol = 1;
    for (let i = 2; count < n; i++) {
        let isPrime = true;
        for (let j = 2; j <= ~~Math.sqrt(i); j++)
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        if (isPrime) {
            count++;
            sol *= i;
        }
    }
    return sol;
}
class G9647 {
}
G9647.step = (step, min, max) => {
    let solution = [];
    let primesArr = [];
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
    for (let i = 0; i < primesArr.length; i += 1) {
        console.log(primesArr[i]);
        for (let j = i + 1; j < primesArr.length; j += 1) {
            const diff = primesArr[j] - primesArr[i];
            if (diff === step) {
                solution = [primesArr[i], primesArr[j]];
                return solution;
            }
        }
    }
    return null;
};
class G96473 {
    static step(g, start, end) {
        for (let n = start; n <= end - g; n++) {
            if (this.isPrime(n) && this.isPrime(n + g))
                return [n, n + g];
        }
        return null;
    }
    static isPrime(n) {
        if (n === 2)
            return true;
        if (n % 2 === 0 || n < 2)
            return false;
        for (let i = 3; i <= Math.trunc(Math.sqrt(n)); i += 2) {
            if (n % i === 0)
                return false;
        }
        return true;
    }
}
class G9646 {
}
_a = G9646;
G9646.getFigures = (town, dataStr) => {
    const townsArr = dataStr.split("\n");
    console.log(townsArr);
    const townRec = townsArr.filter((townData) => townData.startsWith(town));
    console.log(townRec);
    const monthRec = townRec[0].match(/\d{0,}\.\d{0,}/g);
    return monthRec;
};
G9646.mean = (town, str) => {
    const solution = G9646.getFigures(town, str)
        .map((figure) => Number(figure))
        .reduce((acc, curr) => acc + curr) /
        G9646.getFigures(town, str).length;
    return solution;
};
G9646.variance = (town, str) => {
    const average = _a.mean(town, str);
    console.log(average);
    const solution = _a.getFigures(town, str)
        .map((figure) => Number(figure))
        .map((num) => num - average)
        .map((dev) => Math.pow(dev, 2))
        .reduce((acc, curr) => acc + curr) /
        _a.getFigures(town, str).length;
    return solution;
};
const data = "Rome:Jan 81.2,Feb 63.2,Mar 70.3,Apr 55.7,May 53.0,Jun 36.4,Jul 17.5,Aug 27.5,Sep 60.9,Oct 117.7,Nov 111.0,Dec 97.9" +
    "\n" +
    "London:Jan 48.0,Feb 38.9,Mar 39.9,Apr 42.2,May 47.3,Jun 52.1,Jul 59.5,Aug 57.2,Sep 55.4,Oct 62.0,Nov 59.0,Dec 52.9" +
    "\n" +
    "Paris:Jan 182.3,Feb 120.6,Mar 158.1,Apr 204.9,May 323.1,Jun 300.5,Jul 236.8,Aug 192.9,Sep 66.3,Oct 63.3,Nov 83.2,Dec 154.7" +
    "\n" +
    "NY:Jan 108.7,Feb 101.8,Mar 131.9,Apr 93.5,May 98.8,Jun 93.6,Jul 102.2,Aug 131.8,Sep 92.0,Oct 82.3,Nov 107.8,Dec 94.2" +
    "\n" +
    "Vancouver:Jan 145.7,Feb 121.4,Mar 102.3,Apr 69.2,May 55.8,Jun 47.1,Jul 31.3,Aug 37.0,Sep 59.6,Oct 116.3,Nov 154.6,Dec 171.5" +
    "\n" +
    "Sydney:Jan 103.4,Feb 111.0,Mar 131.3,Apr 129.7,May 123.0,Jun 129.2,Jul 102.8,Aug 80.3,Sep 69.3,Oct 82.6,Nov 81.4,Dec 78.2" +
    "\n" +
    "Bangkok:Jan 10.6,Feb 28.2,Mar 30.7,Apr 71.8,May 189.4,Jun 151.7,Jul 158.2,Aug 187.0,Sep 319.9,Oct 230.8,Nov 57.3,Dec 9.4" +
    "\n" +
    "Tokyo:Jan 49.9,Feb 71.5,Mar 106.4,Apr 129.2,May 144.0,Jun 176.0,Jul 135.6,Aug 148.5,Sep 216.4,Oct 194.1,Nov 95.6,Dec 54.4" +
    "\n" +
    "Beijing:Jan 3.9,Feb 4.7,Mar 8.2,Apr 18.4,May 33.0,Jun 78.1,Jul 224.3,Aug 170.0,Sep 58.4,Oct 18.0,Nov 9.3,Dec 2.7" +
    "\n" +
    "Lima:Jan 1.2,Feb 0.9,Mar 0.7,Apr 0.4,May 0.6,Jun 1.8,Jul 4.4,Aug 3.1,Sep 3.3,Oct 1.7,Nov 0.5,Dec 0.7";
const data1 = "Rome:Jan 90.2,Feb 73.2,Mar 80.3,Apr 55.7,May 53.0,Jun 36.4,Jul 17.5,Aug 27.5,Sep 60.9,Oct 147.7,Nov 121.0,Dec 97.9" +
    "\n" +
    "London:Jan 58.0,Feb 38.9,Mar 49.9,Apr 42.2,May 67.3,Jun 52.1,Jul 59.5,Aug 77.2,Sep 55.4,Oct 62.0,Nov 69.0,Dec 52.9" +
    "\n" +
    "Paris:Jan 182.3,Feb 120.6,Mar 188.1,Apr 204.9,May 323.1,Jun 350.5,Jul 336.8,Aug 192.9,Sep 66.3,Oct 63.3,Nov 83.2,Dec 154.7" +
    "\n" +
    "NY:Jan 128.7,Feb 121.8,Mar 151.9,Apr 93.5,May 98.8,Jun 93.6,Jul 142.2,Aug 131.8,Sep 92.0,Oct 82.3,Nov 107.8,Dec 94.2" +
    "\n" +
    "Vancouver:Jan 155.7,Feb 121.4,Mar 132.3,Apr 69.2,May 85.8,Jun 47.1,Jul 31.3,Aug 37.0,Sep 69.6,Oct 116.3,Nov 154.6,Dec 171.5" +
    "\n" +
    "Sydney:Jan 123.4,Feb 111.0,Mar 151.3,Apr 129.7,May 123.0,Jun 159.2,Jul 102.8,Aug 90.3,Sep 69.3,Oct 82.6,Nov 81.4,Dec 78.2" +
    "\n" +
    "Bangkok:Jan 20.6,Feb 28.2,Mar 40.7,Apr 81.8,May 189.4,Jun 151.7,Jul 198.2,Aug 197.0,Sep 319.9,Oct 230.8,Nov 57.3,Dec 9.4" +
    "\n" +
    "Tokyo:Jan 59.9,Feb 81.5,Mar 106.4,Apr 139.2,May 144.0,Jun 186.0,Jul 155.6,Aug 148.5,Sep 216.4,Oct 194.1,Nov 95.6,Dec 54.4" +
    "\n" +
    "Beijing:Jan 13.9,Feb 14.7,Mar 18.2,Apr 18.4,May 43.0,Jun 88.1,Jul 224.3,Aug 170.0,Sep 58.4,Oct 38.0,Nov 19.3,Dec 2.7" +
    "\n" +
    "Lima:Jan 11.2,Feb 10.9,Mar 10.7,Apr 10.4,May 10.6,Jun 11.8,Jul 14.4,Aug 13.1,Sep 23.3,Oct 1.7,Nov 0.5,Dec 10.7";
const backwardsPrime = (min, max) => {
    let primesArr = [];
    const isPrime = (num) => {
        if (num === 1 || num === 2)
            return true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0)
                return false;
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
    console.log("PRIMES:", primesArr);
    const solution = primesArr.filter((prime) => {
        const revPrime = Number(prime.toString().split("").reverse().join(""));
        return isPrime(revPrime) && revPrime !== prime;
    });
    return solution;
};
const backwardsPrime2 = (min, max) => {
    let primesArr = [];
    const isPrime = (num) => {
        let count = 2;
        while (count < num / 2 + 1) {
            if (num % count !== 0) {
                count++;
                continue;
            }
            return false;
        }
        return true;
    };
    const primeBetween = (a, b) => {
        for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
            if (isPrime(i)) {
                primesArr.push(i);
            }
        }
    };
    primeBetween(min, max);
    console.log("PRIMES:", primesArr);
    const solution = primesArr.filter((prime) => {
        const revPrime = Number(prime.toString().split("").reverse().join(""));
        return isPrime(revPrime) && revPrime !== prime;
    });
    return solution;
};
const backwardsPrime3 = (min, max) => {
    let primesArr = [];
    function isPrime(num) {
        for (var i = 2; i < num; i++)
            if (num % i === 0)
                return false;
        return num > 1;
    }
    for (let i = min; i <= max; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            primesArr.push(i);
        }
    }
    console.log("PRIMES:", primesArr);
    const solution = primesArr.filter((prime) => {
        const revPrime = Number(prime.toString().split("").reverse().join(""));
        return isPrime(revPrime) && revPrime !== prime;
    });
    return solution;
};
const backwardsPrime4 = (min, max) => {
    let primesArr = [];
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
    const solution = primesArr.filter((prime) => {
        const revPrime = Number(prime.toString().split("").reverse().join(""));
        return isPrime(revPrime) && revPrime !== prime;
    });
    return solution;
};
function backwardsPrime5(start, stop) {
    const prime = [];
    for (let i = start < 10 ? 11 : start; i <= stop; i++) {
        if ((0, exports.isPrime)(i)) {
            if ((0, exports.isPrime)(Number(i.toString().split("").reverse().join("")))) {
                if (!isPalindrome(String(i))) {
                    prime.push(i);
                }
            }
        }
    }
    return prime;
}
const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0)
            return false;
    return num > 1;
};
exports.isPrime = isPrime;
function isPalindrome(str) {
    return str == str.split("").reverse().join("");
}
exports.isPalindrome = isPalindrome;
function isPrime2(num) {
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}
function backwardsPrime7(start, stop) {
    const result = [];
    for (let num = start; num <= stop; num++) {
        if (!isPrime2(num))
            continue;
        const backward = parseInt(num.toString().split("").reverse().join(""));
        if (backward !== num && isPrime2(backward))
            result.push(num);
    }
    return result;
}
exports.backwardsPrime7 = backwardsPrime7;
function isPrime3(n) {
    for (var x = 2; x <= Math.sqrt(n); x++) {
        if (n % x === 0) {
            return false;
        }
    }
    return n > 1;
}
function reverseNumber(n) {
    return Number(String(n).split("").reverse().join(""));
}
function backwardsPrime8(start, stop) {
    var output = [];
    for (let n = start; n <= stop; n++) {
        let m = reverseNumber(n);
        if (m != n && isPrime3(n) && isPrime3(m)) {
            output.push(n);
        }
    }
    return output;
}
exports.backwardsPrime8 = backwardsPrime8;
const longestRepetition = (str) => {
    if (!str)
        return ["", 0];
    const re = /(.)\1{0,}/g;
    const matchesArr = str.match(re);
    console.log(matchesArr);
    const descArr = matchesArr.sort((a, b) => b.length - a.length);
    console.log(descArr);
    console.log(descArr[0][0], descArr[0].length);
    const solution = [descArr[0][0], descArr[0].length];
    return solution;
};
function longestRepetition2(text) {
    var _b;
    const output = ["", 0];
    (_b = text.match(/(.)\1*/g)) === null || _b === void 0 ? void 0 : _b.forEach((match) => {
        if ((match === null || match === void 0 ? void 0 : match.length) > output[1]) {
            output[0] = match.charAt(0);
            output[1] = match.length;
        }
    });
    return output;
}
function longestRepetition3(text) {
    let longest = { char: "", len: 0 };
    let current = { ...longest };
    text.split("").forEach((character) => {
        if (character === current.char) {
            current.len += 1;
        }
        else {
            current.char = character;
            current.len = 1;
        }
        if (current.len > longest.len) {
            longest.char = current.char;
            longest.len = current.len;
        }
    });
    return [longest.char, longest.len];
}
function longestRepetition4(text) {
    let currentChar = "";
    let currentCount = 0;
    let maxChar = "";
    let maxCount = 0;
    for (let i = 0; i <= text.length; i++) {
        let char = text[i];
        if (char === currentChar) {
            currentCount++;
        }
        else {
            if (currentCount > maxCount) {
                maxCount = currentCount;
                maxChar = currentChar;
            }
            currentChar = char;
            currentCount = 1;
        }
    }
    return [maxChar, maxCount];
}
function longestRepetition5(text) {
    let longest = { char: "", repeat: 0 };
    let attempt = { char: "", repeat: 0 };
    text.split("").forEach((alpha) => {
        if (alpha === attempt.char)
            attempt.repeat += 1;
        else
            attempt = { char: alpha, repeat: 1 };
        if (attempt.repeat > longest.repeat) {
            longest.repeat = attempt.repeat;
            longest.char = attempt.char;
        }
    });
    return [longest.char, longest.repeat];
}
function longestRepetition6(text) {
    const match = text.match(/(\w)\1*/gm);
    if (match) {
        const res = match.sort((a, b) => b.length - a.length)[0];
        return [res[0], res.length];
    }
    return ["", 0];
}
function longestRepetition7(text) {
    return text
        .split("")
        .reduce((acc, curr) => {
        const last = acc[acc.length - 1];
        if (!!last && last[0] === curr) {
            last[1] += 1;
        }
        else {
            acc.push([curr, 1]);
        }
        return acc;
    }, [])
        .reduce((acc, curr) => (curr[1] > acc[1] ? curr : acc), ["", 0]);
}
const decipherThis = (str) => {
    const wordsArr = str.split(" ");
    wordsArr.forEach((word, idx) => {
        let charCode = Number(word.match(/\d+/g));
        const char = String.fromCharCode(charCode);
        wordsArr[idx] = word.replace(/\d+/g, char);
    });
    wordsArr.forEach((word, idx) => {
        if (word.length > 2) {
            const second = word[1];
            const last = word[word.length - 1];
            const lettersArr = word.split("");
            lettersArr[1] = last;
            lettersArr[lettersArr.length - 1] = second;
            wordsArr[idx] = lettersArr.join("");
        }
    });
    const solution = wordsArr.join(" ");
    return solution;
};
function decipherThis2(str) {
    return str
        .split(" ")
        .map((word) => {
        const asciiCode = parseInt(word);
        const asciiCodeDigits = asciiCode.toString().length;
        const newWord = String.fromCharCode(asciiCode) + word.substr(asciiCodeDigits);
        if (newWord.length <= 2) {
            return newWord;
        }
        else {
            return (newWord[0] +
                newWord[newWord.length - 1] +
                newWord.substring(2, newWord.length - 1) +
                newWord[1]);
        }
    })
        .join(" ");
}
function decipherThis3(str) {
    return str
        .replace(/(\d+)/g, (code) => String.fromCharCode(+code))
        .replace(/\b(\w)(\w?)(\w*)(\w)/g, "$1$4$3$2");
}
function decipherThis4(str) {
    return str
        .split(" ")
        .map((word) => word.replace(/^[0-9]{0,}/, (e) => String.fromCharCode(+e)))
        .map((word) => word.length <= 2
        ? word
        : word[0] +
            word[word.length - 1] +
            word.slice(2, word.length - 1) +
            word[1])
        .join(" ");
}
function decipherThis5(str) {
    return str
        .split(" ")
        .map((word) => word.replace(/(^\d{2,3})([a-z]?)([a-z]*?)([a-z]?$)/, (match, p1, p2, p3, p4) => `${String.fromCharCode(p1)}${p4}${p3}${p2}`))
        .join(" ");
}
const getLengthOfMissingArray = (arrayOfArrays) => {
    if (arrayOfArrays.length === 0)
        return 0;
    let solution = 0;
    const ascLenArr = arrayOfArrays.sort((a, b) => a.length - b.length);
    for (let i = 0; i < ascLenArr.length; i += 1) {
        if (ascLenArr[i].length === 0)
            return 0;
        let currLen = ascLenArr[i].length;
        if (currLen + 1 !== ascLenArr[i + 1].length) {
            solution = currLen + 1;
            break;
        }
    }
    return solution;
};
function getLengthOfMissingArray2(arrayOfArrays) {
    const sortedLengthArray = arrayOfArrays
        .map((array) => array.length)
        .sort((a, b) => a - b);
    if (sortedLengthArray[0] === 0)
        return 0;
    return (--sortedLengthArray.filter((a, index, array) => a - array[index - 1] !== 1)[1] || 0);
}
function getLengthOfMissingArray5(arrayOfArrays) {
    if (arrayOfArrays === null || arrayOfArrays.length === 0)
        return 0;
    for (let i = 0; i < arrayOfArrays.length; i++) {
        if (arrayOfArrays[i] === null || arrayOfArrays[i].length === 0)
            return 0;
    }
    arrayOfArrays = arrayOfArrays.sort(function (x, y) {
        return x.length > y.length ? 1 : -1;
    });
    for (let i = 1; i < arrayOfArrays.length; i++) {
        if (arrayOfArrays[i].length != arrayOfArrays[i - 1].length + 1)
            return arrayOfArrays[i - 1].length + 1;
    }
}
const mazeRunner = (maze, dirs) => {
    let row = 0;
    let col = 0;
    for (let i = 0; i < maze.length; i += 1) {
        if (maze[i].includes(2)) {
            row = i;
            col = maze[i].indexOf(2);
            break;
        }
    }
    let curr = maze[row][col];
    for (let i = 0; i < dirs.length; i += 1) {
        if (dirs[i] === "N") {
            row -= 1;
            if (row < 0)
                return "Dead";
            curr = maze[row][col];
            if (curr === 3) {
                return "Finish";
            }
            else if (curr === 1) {
                return "Dead";
            }
        }
        if (dirs[i] === "S") {
            row += 1;
            if (row > maze.length - 1)
                return "Dead";
            curr = maze[row][col];
            if (curr === 3) {
                return "Finish";
            }
            else if (curr === 1) {
                return "Dead";
            }
        }
        if (dirs[i] === "W") {
            col -= 1;
            if (col < 0)
                return "Dead";
            curr = maze[row][col];
            if (curr === 3) {
                return "Finish";
            }
            else if (curr === 1) {
                return "Dead";
            }
        }
        if (dirs[i] === "E") {
            col += 1;
            if (col > maze[row].length - 1)
                return "Dead";
            curr = maze[row][col];
            if (curr === 3) {
                return "Finish";
            }
            else if (curr === 1) {
                return "Dead";
            }
        }
    }
    return "Lost";
};
let maze = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 3],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 2, 1, 0, 1, 0, 1],
];
function mazeRunner3(maze, directions) {
    let y = maze.findIndex((r) => r.includes(2));
    let x = maze[y].indexOf(2);
    for (const d of directions) {
        if (d === "N")
            y -= 1;
        if (d === "S")
            y += 1;
        if (d === "W")
            x -= 1;
        if (d === "E")
            x += 1;
        if (x < 0 ||
            y < 0 ||
            x >= maze[0].length ||
            y >= maze.length ||
            maze[y][x] === 1) {
            return "Dead";
        }
        if (maze[y][x] === 3) {
            return "Finish";
        }
    }
    return "Lost";
}
function mazeRunner4(maze, directions) {
    var y = 0, x = 0;
    var maxY = maze.length, maxX = maze[0].length;
    for (let i = 0; i < maxY; i++)
        for (let j = 0; j < maxX; j++)
            if (maze[i][j] === 2) {
                y = i;
                x = j;
            }
    for (let direc of directions) {
        switch (direc) {
            case "N":
                if (y - 1 < 0)
                    return "Dead";
                else
                    y--;
                break;
            case "S":
                if (y + 1 >= maxY)
                    return "Dead";
                else
                    y++;
                break;
            case "W":
                if (x - 1 < 0)
                    return "Dead";
                else
                    x--;
                break;
            case "E":
                if (x + 1 >= maxX)
                    return "Dead";
                else
                    x++;
                break;
            default:
                return "Lost";
        }
        if (maze[y][x] === 1)
            return "Dead";
        else if (maze[y][x] === 3)
            return "Finish";
    }
    return "Lost";
}
function mazeRunner5(maze, directions) {
    let runner = [[]];
    for (let i = 0; i < maze.length; i++)
        for (let j = 0; j < maze[0].length; j++)
            if (maze[i][j] == 2)
                runner = [[i], [j]];
    let [[x], [y]] = runner;
    for (let i of directions) {
        if (i === "N")
            x--;
        if (i === "S")
            x++;
        if (i === "W")
            y--;
        if (i === "E")
            y++;
        if (maze[x] === undefined ||
            maze[x][y] === undefined ||
            maze[x][y] === 1)
            return "Dead";
        if (maze[x][y] === 3)
            return "Finish";
    }
    return "Lost";
}
function mazeRunner6(maze, directions) {
    let [row, column] = getStartingPoint(maze);
    const [NORTH, SOUTH, WEST, EAST] = ["N", "S", "W", "E"];
    const [WALL, FINISH] = [1, 3];
    for (let direction of directions) {
        if (direction == NORTH)
            row -= 1;
        if (direction == SOUTH)
            row += 1;
        if (direction == WEST)
            column -= 1;
        if (direction == EAST)
            column += 1;
        if (maze[row] === undefined ||
            maze[row][column] === undefined ||
            maze[row][column] === WALL)
            return "Dead";
        if (maze[row][column] === FINISH)
            return "Finish";
    }
    return "Lost";
}
const getStartingPoint = (maze) => {
    for (let i in maze) {
        for (let j in maze[i]) {
            if (maze[i][j] === 2)
                return [Number(i), Number(j)];
        }
    }
    return [-1, -1];
};
class G9644 {
}
G9644.stat = (str) => {
    if (str.length === 0)
        return "";
    console.log("   ------input:", str, ":end of input-----");
    const resultStrArr = str.split(",");
    console.log("RESULT STR ARR", resultStrArr);
    const numResArr = resultStrArr.map((result) => result.split("|"));
    console.log("NUM RES ARR:", numResArr);
    const convToSec = (hmsArr) => {
        const numArr = hmsArr.map((strVal) => Number(strVal));
        console.log(numArr);
        const numSeconds = numArr[0] * 3600 + numArr[1] * 60 + numArr[2];
        console.log(numSeconds);
        return numSeconds;
    };
    const convToHMS = (numSeconds) => {
        let hours = 0, mins = 0, secs = 0;
        if (numSeconds / 3600 >= 1) {
            hours += Math.trunc(numSeconds / 3600);
            numSeconds = numSeconds % 3600;
        }
        if (numSeconds / 60 >= 1) {
            mins += Math.trunc(numSeconds / 60);
            numSeconds = numSeconds % 60;
        }
        secs = numSeconds;
        console.log(hours, mins, secs);
        return [hours, mins, secs];
    };
    const secondsArr = numResArr.map((arr) => convToSec(arr));
    console.log("SECONDS ARR", secondsArr);
    const lowest = Math.min(...secondsArr);
    const highest = Math.max(...secondsArr);
    console.log(lowest, highest);
    const secRange = highest - lowest;
    console.log(secRange);
    const rangeHMS = convToHMS(secRange);
    console.log(rangeHMS);
    const aveSeconds = Math.trunc(secondsArr.reduce((acc, curr) => acc + curr) / secondsArr.length);
    console.log(aveSeconds);
    const aveHMS = convToHMS(aveSeconds);
    console.log(aveHMS);
    const ascSecArr = secondsArr.sort((a, b) => a - b);
    console.log(ascSecArr);
    const getMedian = (numArr) => {
        console.log("   numArr length:", numArr.length);
        console.log("   numArr length & 1:", numArr.length & 1);
        return numArr.length & 1
            ? numArr[(numArr.length - 1) / 2]
            : Math.trunc((numArr[numArr.length / 2] +
                numArr[numArr.length / 2 - 1]) /
                2);
    };
    const medSeconds = getMedian(ascSecArr);
    console.log("   MEDIAN SECONDS:", medSeconds);
    const medHMS = convToHMS(medSeconds);
    console.log("   MEDIAN HMS:", medHMS);
    const format = (arr) => {
        return arr
            .map((num) => {
            if (num < 10) {
                return `0${num.toString()}`;
            }
            return num.toString();
        })
            .join("|");
    };
    const solution = `Range: ${format(rangeHMS)} Average: ${format(aveHMS)} Median: ${format(medHMS)}`;
    console.log(solution);
    return solution;
};
console
    .log();
const nbMonths = (priceOld, priceNew, savePerM, lossPCM) => {
    let balance = priceOld - priceNew;
    console.log("initial balance:", balance);
    let savings = 0;
    let monthCount = 0;
    while (balance + savings <= 0) {
        console.log("   loss pc month:", lossPCM);
        balance *= (100 - lossPCM) / 100;
        console.log("       balance:", balance);
        savings += savePerM;
        console.log("savings accumulator:", savings);
        monthCount += 1;
        console.log("                  months count:", monthCount);
        if (monthCount % 2 !== 0)
            lossPCM += 0.5;
        console.log("change left:", Math.round(savings + balance));
    }
    const change = Math.round(savings + balance);
    return [monthCount, change];
};
function nbMonths2(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    var months = 0, moneySaved = 0;
    while (startPriceNew > startPriceOld + moneySaved) {
        moneySaved += savingperMonth;
        startPriceOld -= startPriceOld * (percentLossByMonth / 100);
        startPriceNew -= startPriceNew * (percentLossByMonth / 100);
        months++;
        if (months % 2 == 1) {
            percentLossByMonth += 0.5;
        }
    }
    return [months, Math.round(startPriceOld + moneySaved - startPriceNew)];
}
function nbMonths3(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    let monthCount = 0;
    let oldCarPrice = startPriceOld;
    let newCarPrice = startPriceNew;
    let savingMoneyAmount = oldCarPrice - newCarPrice;
    while (Math.round(savingMoneyAmount) < 0) {
        monthCount++;
        oldCarPrice =
            oldCarPrice *
                ((100 - (Math.floor(monthCount / 2) * 0.5 + percentLossByMonth)) /
                    100);
        newCarPrice =
            newCarPrice *
                ((100 - (Math.floor(monthCount / 2) * 0.5 + percentLossByMonth)) /
                    100);
        savingMoneyAmount =
            oldCarPrice - newCarPrice + savingperMonth * monthCount;
    }
    return [monthCount, Math.round(savingMoneyAmount)];
}
function nbMonths4(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    let months = 0;
    let balance = 0;
    let percent = percentLossByMonth;
    while (balance + startPriceOld < startPriceNew) {
        balance += savingperMonth;
        months += 1;
        if (months % 2 === 0) {
            percent += 0.5;
        }
        startPriceOld *= 1 - percent / 100;
        startPriceNew *= 1 - percent / 100;
    }
    return [months, Math.round(balance + startPriceOld - startPriceNew)];
}
function nbMonths5(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    let gap = startPriceOld - startPriceNew, gapPrice = gap, rate = 1.0, month = 0;
    while (gapPrice < 0) {
        month += 1;
        if (month % 2 == 0) {
            percentLossByMonth += 0.5;
        }
        rate *= 1 - percentLossByMonth / 100;
        gapPrice = gap * rate + month * savingperMonth;
    }
    return [month, Math.round(gapPrice)];
}
const myFirstInterpreter = (code) => {
    let cellStatus = 0;
    const commandArr = code.split("");
    let solution = "";
    for (let i = 0; i < commandArr.length; i += 1) {
        let currCommand = commandArr[i];
        if (currCommand === "+") {
            cellStatus += 1;
            if (cellStatus === 256) {
                cellStatus = 0;
            }
        }
        if (currCommand === ".") {
            console.log(String.fromCharCode(cellStatus));
            solution += String.fromCharCode(cellStatus);
        }
    }
    console.log(solution);
    return solution;
};
const arr = [89, 79, 85, 32, 68, 73, 68, 32, 73, 84, 33];
function myFirstInterpreter2(code) {
    var c = 0, out = "";
    for (var i of code) {
        if (i === "+")
            c = (c + 1) % 256;
        if (i === ".")
            out += String.fromCharCode(c);
    }
    return out;
}
const COMMANDS = {
    "+": "+",
    ".": ".",
};
const myFirstInterpreter3 = (code) => {
    const DEFAULT_STATE = {
        value: 0,
        output: "",
    };
    const add = (state) => {
        const value = (state.value + 1) % 256;
        return { ...state, value };
    };
    const print = (state) => {
        const output = state.output + String.fromCharCode(state.value);
        return { ...state, output };
    };
    const interprete = (char, state) => {
        switch (char) {
            case COMMANDS["+"]:
                return add(state);
            case COMMANDS["."]:
                return print(state);
            default:
                return state;
        }
    };
    const result = code.split("").reduce((acc, curr) => {
        return interprete(curr, acc);
    }, DEFAULT_STATE);
    return result.output;
};
exports.myFirstInterpreter3 = myFirstInterpreter3;
const pyramid = (num) => {
    let solutionArr = [];
    for (let i = 0; i < num; i += 1) {
        let rowStr = "1".repeat(i + 1);
        let rowArr = rowStr.split("").map((str) => Number(str));
        solutionArr.push(rowArr);
    }
    return solutionArr;
};
function pyramid2(n) {
    const ret = [];
    for (let i = 0; i < n; i++) {
        ret.push(Array(i + 1).fill(1));
    }
    return ret;
}
function pyramid3(n) {
    const result = [];
    while (n > 0) {
        result.unshift(new Array(n).fill(1));
        n--;
    }
    return result;
}
function pyramid4(n) {
    if (n === 0) {
        return [];
    }
    const newArr = new Array(n).fill(1);
    return [...pyramid(n - 1), newArr];
}
function pyramid5(n) {
    const p = [];
    for (let i = 1; i <= n; i++) {
        p.push(new Array(i).fill(1));
    }
    return p;
}
function pyramid6(n) {
    return Array.from(new Array(n).keys()).map((x) => new Array(x + 1).fill(1));
}
function pyramid7(n) {
    return Array.from({ length: n }, (_, i) => Array(i + 1).fill(1));
}
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
    return num
        .toString()
        .replace(/([13579])/g, "-$1-")
        .replace(/\-+/g, "-")
        .replace(/^\-/, "")
        .replace(/\-$/, "");
};
const dashatize3 = (num) => {
    return num
        .toString()
        .replace("-", "")
        .split(/([13579])/)
        .filter((s) => s !== "")
        .join("-");
};
const dashatize4 = (num) => {
    return String(Math.abs(num))
        .split(/([13579])/)
        .filter((s) => s !== "")
        .join("-");
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
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"],
];
let moves = ["up", "left", "down", "right", "up", "left", "down", "right"];
function streetFighterSelection2(fighters, position, moves) {
    const returnArr = [];
    const pos = position;
    moves.map((move) => {
        switch (move) {
            case "up":
                pos[0] = 0;
                break;
            case "down":
                pos[0] = 1;
                break;
            case "right":
                pos[1] = pos[1] === fighters[0].length - 1 ? 0 : ++pos[1];
                break;
            case "left":
                pos[1] =
                    pos[1] === 0 ? (pos[1] = fighters[0].length - 1) : --pos[1];
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
            case "left":
                position[0] = position[0] === 0 ? 5 : position[0] - 1;
                break;
            case "right":
                position[0] = position[0] === 5 ? 0 : position[0] + 1;
                break;
            case "up":
                position[1] = 0;
                break;
            case "down":
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
    return moves.map((dir) => {
        switch (dir) {
            case "up":
                y = y > 0 ? y - 1 : y;
                break;
            case "down":
                y = y < MAX_Y ? y + 1 : y;
                break;
            case "left":
                x = x === 0 ? MAX_X : x - 1;
                break;
            case "right":
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
        if (move == "up") {
            if (currentPosition[0] == 0) {
                hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
            }
            else {
                currentPosition[0]--;
                hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
            }
        }
        if (move == "down") {
            if (currentPosition[0] == 1) {
                hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
            }
            else {
                currentPosition[0]++;
                hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
            }
        }
        if (move == "left") {
            if (currentPosition[1] == 0) {
                currentPosition[1] = 5;
                hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
            }
            else {
                currentPosition[1]--;
                hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
            }
        }
        if (move == "right") {
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
    return s
        .toUpperCase()
        .split("")
        .map((v, i, a) => {
        if (/[0-9]/.test(v))
            return Math.abs(Number(v) - 9);
        if (/[A-Z]/.test(v)) {
            let x = String.fromCharCode(((v.charCodeAt(0) + n - 65) % 26) + 65);
            return i % 2 == 1 ? x.toLowerCase() : x;
        }
        return v;
    })
        .reverse()
        .join("");
}
class G9641 {
    static isLetter(v) {
        return G9641.alphabet.indexOf(v) !== -1;
    }
    static isDigit(v) {
        return G9641.digits.indexOf(v) !== -1;
    }
    static playPass3(s = "", n = 0) {
        if (!s) {
            return "";
        }
        return s
            .toLowerCase()
            .split("")
            .map((v, i) => {
            if (G9641.isLetter(v)) {
                let letter = G9641.alphabet[(G9641.alphabet.indexOf(v) + n) % 26];
                return i % 2 ? letter.toLowerCase() : letter.toUpperCase();
            }
            else if (G9641.isDigit(v)) {
                return 9 - Number(v);
            }
            return v;
        })
            .reverse()
            .join("");
    }
}
G9641.alphabet = "abcdefghijklmnopqrstuvwxyz";
G9641.digits = "0123456789";
function playPass4(s, n, a = "abcdefghijklmnopqrstuvwxyz") {
    return s
        .replace(/\d/g, (d) => "" + (9 - +d))
        .replace(/[a-z]/gi, (l) => a[(a.indexOf(l.toLowerCase()) + n) % a.length])
        .split("")
        .map((e, i) => (i % 2 == 1 ? e : e.toUpperCase()))
        .reverse()
        .join("");
}
class G9642 {
    static playPass(s, n) {
        let result = s.replace(/[A-Z]/g, (match) => {
            const code = match.charCodeAt(0);
            return String.fromCharCode(((code - 65 + n) % 26) + 65);
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
        let trailSub = numArr
            .slice(Math.ceil(numArr.length / 2))
            .reverse();
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
    return numFoldsLeft ? foldArray(currentArray, numFoldsLeft) : currentArray;
};
function foldArray2(array, runs) {
    const arr2 = [...array];
    while (runs > 0) {
        arr2.map((val, i, arr) => i + 1 === arr.length ? val : (arr[i] = val + arr.pop()));
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
        newArr[i] = array[array.length - 1 - i] + array[i];
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
        .map((x) => [...x].reduce((a, b) => a + b.charCodeAt(0) - 96, 0)));
}
function solve3(s) {
    let highest = 0;
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        if ("aeiou".includes(s[i])) {
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
    arr.forEach((subs) => {
        let sum = 0;
        for (let i = 0; i < subs.length; i++) {
            sum += subs.charCodeAt(i) - 96;
        }
        if (sum > res)
            res = sum;
    });
    return res;
}
function solve5(s) {
    return Math.max(...s
        .replace(/[aeiou]+/g, " ")
        .split(" ")
        .map((e) => e
        .split("")
        .reduce((prev, current) => prev + current.charCodeAt(0) - 96, 0)));
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
            return num * i;
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
    return new Array(size)
        .fill(null)
        .map((_, i) => new Array(size).fill(null).map((_, j) => (i + 1) * (j + 1)));
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
    return re.test(s) ? cleanString(s.replace(re, "")) : s;
}
function cleanString2(s) {
    return Array.from(s).reduce((a, b) => (b == "#" ? a.slice(0, -1) : a.concat(b)), "");
}
function cleanString3(s) {
    let stack = [];
    for (const c of s) {
        if (c === "#") {
            stack.pop();
        }
        else {
            stack.push(c);
        }
    }
    return stack.join("");
}
const cleanString4 = (s) => Array.from(s).reduce((acc, char) => char === "#" ? acc.substring(0, acc.length - 1) : acc + char, "");
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
        .join(" ");
    return solution;
};
let encryptThis2 = (str) => {
    if (!str)
        return "";
    return str
        .split(" ")
        .map((word) => {
        let first = word[0];
        let second = word.length > 1 ? word[1] : "";
        let middle = word.slice(2, -1);
        let last = word.length > 2 ? word[word.length - 1] : "";
        return first.charCodeAt(0) + last + middle + second;
    })
        .join(" ");
};
const encryptThis3 = (str) => str
    .split(" ")
    .map((word) => word
    .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
    .replace(/^\w/, (letter) => letter.charCodeAt(0).toFixed(0)))
    .join(" ");
const encryptThis4 = (str) => {
    return str.replace(/\b(\S)(\S?)(\S*?)(\S?)\b/g, (_, a, b, c, d) => `${a.charCodeAt(0)}${d}${c}${b}`);
};
const encryptThis5 = (str) => {
    return str
        .split(" ")
        .map((word) => {
        if (word === "")
            return "";
        if (word.length === 1)
            return word.charCodeAt(0).toString();
        if (word.length === 2)
            return (word[0].charCodeAt(0) + word[1]).toString();
        return (word[0].charCodeAt(0) +
            word[word.length - 1] +
            word.substring(2, word.length - 1) +
            word[1]);
    })
        .join(" ");
};
const encryptThis6 = (str) => {
    return str
        .split(" ")
        .map((word) => word.replace(/(^\w)(\w?)(\w*?)(\w?$)/, (match, p1, p2, p3, p4) => `${p1.charCodeAt(0)}${p4}${p3}${p2}`))
        .join(" ");
};
const encryptThis7 = (str) => {
    return str
        .split(" ")
        .map((w) => {
        switch (w.length) {
            case 0:
                return "";
            case 1:
                return w.charCodeAt(0);
            case 2:
                return w.charCodeAt(0) + w.charAt(1);
            default:
                return (w.charCodeAt(0) +
                    w.charAt(w.length - 1) +
                    w.slice(2, w.length - 1) +
                    w.charAt(1));
        }
    })
        .join(" ");
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
    return s
        .toUpperCase()
        .split(";")
        .map((n) => "(" + n.split(":").reverse().join(", ") + ")")
        .sort()
        .join("");
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
    const attendees = s.split(";").map((attendee) => {
        const [firstName, lastName] = attendee.split(":");
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
    return sortedAttendees.map((x) => attendeeToString(x)).join("");
}
function meeting4(s) {
    return s
        .split(";")
        .map((x) => x
        .split(":")
        .map((x) => x.toUpperCase())
        .reverse()
        .join(", "))
        .sort()
        .map((x) => `(${x})`)
        .join("");
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
        this.groups.forEach((group) => group.value.sort((lhs, rhs) => lhs.getFirstName.localeCompare(rhs.getFirstName)));
    }
    toString() {
        let str = "";
        for (const group of this.groups) {
            str += group.value.map((friend) => friend.getFullName).join("");
        }
        return str;
    }
}
class FriendsHelper {
    static parse(input) {
        return input.split(";").map((name) => new Friend(name));
    }
    static createGroupedFriends(friends) {
        let list = [];
        friends.forEach((friend) => {
            let group = list.find((group) => group.key === friend.getLastName);
            if (!group) {
                group = {
                    key: friend.getLastName,
                    value: [],
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
        const [firstName, lastName] = str.split(":");
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
    const attendees = s
        .split(";")
        .map((str) => Attendee2.FromInputString(str));
    const sortedAttendees = attendees.sort((a, b) => {
        if (a.last === b.last) {
            return stringSorter(a.first, b.first);
        }
        else {
            return stringSorter(a.last, b.last);
        }
    });
    return sortedAttendees.join("");
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
    return [...[total], ...ls.map((num) => (total -= num))];
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
    return ls.map((val, i) => (total -= val));
}
function partsSums5(values) {
    let knownTotal = values.reduce((ac, n) => ac + n, 0);
    return values.reduce((output, value) => {
        output.push((knownTotal -= value));
        return output;
    }, [knownTotal]);
}
function partsSums6(ls) {
    return ls
        .reverse()
        .reduce((acc, n, i) => {
        const a = acc[i];
        acc.push(n + a);
        return acc;
    }, [0])
        .reverse();
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
    data.split("").map((c) => {
        switch (c) {
            case "i":
                current++;
                break;
            case "d":
                current--;
                break;
            case "s":
                current = current ** 2;
                break;
            case "o":
                result.push(current);
                break;
        }
    });
    return result;
}
function parse3(data) {
    let v = 0, result = [];
    for (let d of data.split("")) {
        switch (d) {
            case "i":
                v++;
                break;
            case "d":
                v--;
                break;
            case "s":
                v *= v;
                break;
            case "o":
                result.push(v);
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
    return totalCounter ? solution : "";
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
    .map((x) => { var _b; return (_b = x[0]) === null || _b === void 0 ? void 0 : _b.toUpperCase().concat(x.slice(1)); })
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
    var _b, _c, _d, _e;
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
    const Ms = (_b = roman.match(/M/g)) === null || _b === void 0 ? void 0 : _b.length;
    if (Ms)
        result += romanStrVal.M * Ms;
    const Cs = (_c = roman.match(/C/g)) === null || _c === void 0 ? void 0 : _c.length;
    if (Cs)
        result += romanStrVal.C * Cs;
    const Xs = (_d = roman.match(/X/g)) === null || _d === void 0 ? void 0 : _d.length;
    if (Xs)
        result += romanStrVal.X * Xs;
    const Is = (_e = roman.match(/I/g)) === null || _e === void 0 ? void 0 : _e.length;
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
    var _b;
    return ((_b = n.toString(2).match(/1/g)) === null || _b === void 0 ? void 0 : _b.length) || 0;
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
