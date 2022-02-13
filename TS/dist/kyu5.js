"use strict";
const humanReadable = (secInput) => {
    const HOUR = 3600;
    const MINUTE = 60;
    const SECOND = 1;
    let secondsLeft = secInput;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    const padToTwo = (num) => {
        return num < 10 ? `0${String(num)}` : `${String(num)}`;
    };
    hours = Math.floor(secondsLeft / HOUR);
    secondsLeft = secondsLeft % HOUR;
    minutes = Math.floor(secondsLeft / MINUTE);
    secondsLeft = secondsLeft % MINUTE;
    seconds = secondsLeft;
    console.table({ hours: hours, minutes: minutes, seconds: seconds });
    return `${padToTwo(hours)}:${padToTwo(minutes)}:${padToTwo(seconds)}`;
};
console.log(humanReadable(3661));
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
