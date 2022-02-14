"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.humanReadable2 = void 0;
const dirReduc = (arr) => {
    let counter = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === "SOUTH" && counter.includes("NORTH")) {
            arr = arr.splice(i, 1);
        }
    }
    console.log(counter, arr);
    return ["hello"];
};
console.log(dirReduc(["NORTH", "SOUTH", "WEST"]));
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
