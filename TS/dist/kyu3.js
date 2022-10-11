"use strict";
const reverse = (a) => a.reverse();
function boolfuck(code, input = "") {
    return "hello";
}
const theLift = (queues, capacity) => {
    console.log(queues);
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
    let direction = "up";
    let isFull = false;
    let currLevel = 0;
    let passengers = [];
    let numPassengers = passengers.length;
    let solution = [0];
    if (direction === "up") {
        for (let i = 0; i < queues.length; i += 1) {
            let currentWaiting = queues[i];
            console.log("current level:", currentWaiting);
            if (currentWaiting.length) {
                console.log("people waiting, stop!:", currentWaiting);
                if (!isFull) {
                    console.log("free spaces in lift");
                    if (currentWaiting.length <= capacity) {
                        console.log(" all people can get in lift");
                        for (let j = 0; j < currentWaiting.length; j += 1) {
                            if (currentWaiting[j] > i) {
                                console.log("   destination above:", currentWaiting[j]);
                                passengers.push(currentWaiting[j]);
                                console.log("         passengers:", passengers);
                                console.log("         passenger to delete:", queues[i][j]);
                                queues[i].splice(j, 1);
                                console.log("   remaining on floor:", queues[i]);
                            }
                            console.log("remaining on floor:", queues[i]);
                        }
                    }
                }
                break;
            }
        }
        console.log("passengers:", passengers);
    }
    return [999];
};
var queues = [
    [],
    [],
    [4, 1, 5, 1, 6],
    [],
    [],
    [],
    [],
];
console.log(theLift(queues, 5));
function calculateCombinations(startPosition, patternLength) {
    return -1;
}
