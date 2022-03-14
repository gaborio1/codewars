"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.humanReadable2 = exports.G9642 = void 0;
function chooseBestSum(t, k, ls) {
    return 1;
}
class G964b {
}
class G964a8 {
}
G964a8.primeFactors = (num) => {
    return "hello";
};
console.log(G964a8.primeFactors(86240));
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
    return Array.from(Array(n + 2).keys()).map((e, i, arr) => { if (i > 0) {
        arr[i + 1] = arr[i] + arr[i - 1];
        return e;
    }
    else {
        return 1;
    } }).slice(1).reduce((a, b) => a + b) * 4;
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
        length += (4 * fibonacci(i));
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
        a = b, b = c, sum += c;
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
            solution = [sequence[current + 1], sequence[current + 2], false];
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
        if ((arr[i] === "NORTH" && arr[i + 1] === "SOUTH")
            || (arr[i] === "SOUTH" && arr[i + 1] === "NORTH")
            || (arr[i] === "EAST" && arr[i + 1] === "WEST")
            || (arr[i] === "WEST" && arr[i + 1] === "EAST")) {
            arr.splice(i, 2);
            i -= 2;
        }
    }
    return arr;
};
function dirReduc2(arr) {
    var pat = /(NORTHSOUTH|SOUTHNORTH|EASTWEST|WESTEAST)/;
    var way = arr.join('');
    while (pat.test(way))
        way = way.replace(pat, '');
    return way.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}
const dirReduc3 = (arr) => {
    const opposites = [
        ['NORTH', 'SOUTH'],
        ['EAST', 'WEST'],
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
    let str = arr.join(':');
    while (str.match(/NORTH:*SOUTH/) || str.match(/SOUTH:*NORTH/) || str.match(/EAST:*WEST/) || str.match(/WEST:*EAST/)) {
        str = str.replace(/NORTH:*SOUTH/g, '').replace(/SOUTH:*NORTH/g, '').replace(/EAST:*WEST/g, '').replace(/WEST:*EAST/g, '');
    }
    return str.split(':').filter(Boolean);
}
function dirReduc5(arr) {
    arr = arr.map(dir => dir.toUpperCase());
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "NORTH" && arr[i + 1] === "SOUTH" ||
            arr[i] === "SOUTH" && arr[i + 1] === "NORTH" ||
            arr[i] === "WEST" && arr[i + 1] === "EAST" ||
            arr[i] === "EAST" && arr[i + 1] === "WEST") {
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
    const m = seconds % 3600 / 60;
    const s = seconds % 3600 % 60;
    return [h, m, s].map(format).join(":");
}
exports.humanReadable2 = humanReadable2;
function humanReadable3(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds / 60) % 60;
    const pad = (n) => `${n}`.padStart(2, '0');
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
    return a.replace(/[a-z]+/ig, x => x.slice(1) + x[0] + "ay");
};
