"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.humanReadable2 = void 0;
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
