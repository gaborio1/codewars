"use strict";
const reverse = (a) => a.reverse();
function boolfuck(code, input = "") {
    return "hello";
}
const theLift = (queues, capacity) => {
    const levels = queues.length;
    console.log("levels:", levels);
    let numWaiting = 0;
    queues.forEach((level) => {
        numWaiting += level.length;
    });
    console.log("people waiting:", numWaiting);
    let building = Array(levels);
    building = building.fill([], 0, levels);
    console.log("building copy:", building);
    let numArrived = 0;
    building.forEach((level) => {
        numArrived += level.length;
    });
    console.log("people arrived:", numArrived);
    let currLevel = 0;
    let passengers = 0;
    let solution = [];
    return [999];
};
var queues = [
    [],
    [],
    [5, 5, 5],
    [],
    [],
    [],
    [],
];
console.log(theLift(queues, 5));
function calculateCombinations(startPosition, patternLength) {
    return -1;
}
