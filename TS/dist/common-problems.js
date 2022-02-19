"use strict";
const fibonacciFirstN = (num) => {
    const fibSequence = [0, 1];
    if (num === 1)
        return [fibSequence[0]];
    if (num === 2)
        return fibSequence;
    for (let i = 0; i < num - 2; i++) {
        let next = fibSequence[i] + fibSequence[i + 1];
        fibSequence.push(next);
    }
    return fibSequence;
};
console.log(fibonacciFirstN(5));
const fibonacciNth = (num) => {
    const fibSequence = [0, 1];
    if (num === 1)
        return fibSequence[0];
    if (num === 2)
        return fibSequence[1];
    for (let i = 0; i < num - 2; i++) {
        let next = fibSequence[i] + fibSequence[i + 1];
        fibSequence.push(next);
    }
    return fibSequence[fibSequence.length - 1];
};
console.log(fibonacciNth(5));
