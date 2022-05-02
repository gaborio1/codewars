"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.humanReadable2 = exports.G9642 = exports.convertFrac5 = exports.convertFrac4 = void 0;
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
            simplifiedSolution = solution
                .replace(/\d+/g, (num) => (Number(num) / i).toString());
        }
    }
    return simplifiedSolution
        ? simplifiedSolution
        : solution;
};
const convertFrac2 = (lst) => {
    const gcd = (a, b) => (b ? gcd(b, a % b) : a);
    const lcm = (a, b) => (a * b) / gcd(a, b);
    const cd = lst.reduce((a, [_, d]) => lcm(d, a), 1);
    const lcd = lst.reduce((d, [a, c]) => gcd(d, (a * cd) / c), cd);
    return lst.map(([n, d]) => `(${(n * cd) / d / lcd},${cd / lcd})`).join('');
};
const gcd = (x, y) => {
    while (y != 0) {
        const z = x % y;
        x = y;
        y = z;
    }
    return x;
};
const lcm = (x, y) => x * y / gcd(x, y);
const convertFrac3 = (lst) => {
    const common = lst
        .map(([x, y]) => y)
        .reduce(lcm, 1);
    const acc = lst
        .map(([x, y]) => x * (common / y));
    const least = acc
        .reduce(gcd, common);
    return acc
        .map(x => `(${x / least},${common / least})`)
        .join('');
};
const findGcd = (a, b) => b ? findGcd(b, a % b) : a;
const findLcm = (a, b) => a * b / findGcd(a, b);
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
    return list.reduce((result, [n0, n1]) => `${result}(${n0 * lcm / n1},${lcm})`, '');
};
exports.convertFrac4 = convertFrac4;
const convertFrac5 = (lst) => {
    if (lst.length == 0)
        return "";
    const getPrimes = function (maxNum) {
        const candidates = Array.from({ length: maxNum }, i => true);
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
    const max_denom = lst.map(i => i[1]).reduce((carry, item) => {
        if (carry < item)
            return item;
        return carry;
    });
    const primes = getPrimes(max_denom + 1);
    const factorize = function (num) {
        const res = {};
        primes.forEach(prime => {
            let cnt = 0;
            while (num > 1) {
                if ((num % prime) === 0) {
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
    const simplified_lst = lst.map(item => {
        const fnum = factorize(item[0]);
        const fdenom = factorize(item[1]);
        const cfactors = {};
        Object.keys(fnum).forEach(prime => {
            if (fdenom[parseInt(prime)]) {
                cfactors[parseInt(prime)] = (fnum[parseInt(prime)] <= fdenom[parseInt(prime)]) ? fnum[parseInt(prime)] : fdenom[parseInt(prime)];
            }
        });
        const div = Object.keys(cfactors).reduce((carry, prime) => {
            return carry * Math.pow(parseInt(prime), cfactors[parseInt(prime)]);
        }, 1);
        return [Math.floor(item[0] / div), Math.floor(item[1]) / div];
    });
    const fdenoms = simplified_lst.map(item => {
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
    return simplified_lst.map(item => {
        const num = Math.floor(item[0] * lcd / item[1]);
        return `(${num},${lcd})`;
    }).join('');
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
        if (typeof (y) === "number") {
            currentSum += y;
            return f;
        }
    }
    f.toString = function () {
        return currentSum;
    };
    return f;
}
function add5(n) { return Object.assign((i) => add(i + n), { valueOf: () => n }); }
class G965 {
    static removeNb(n) {
    }
}
const chooseBestSum = (maxDist, numTowns, list) => {
    const generatePermutations = (list, size = list.length) => {
        if (size > list.length)
            return [];
        else if (size == 1)
            return list.map(d => [d]);
        return list.flatMap(d => generatePermutations(list.filter(a => a !== d), size - 1).map(item => [d, ...item]));
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
    return solution
        ? solution
        : null;
};
class G964b {
}
G964b.gap = (gap, min, max) => {
    let solution = [];
    let primesArr = [];
    let allMatchesArr = [];
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
        if (num === 1 || num === 2)
            return true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0)
                return false;
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
