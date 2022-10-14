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
    let building = [];
    for (let i = 0; i < levels; i += 1) {
        building.push([]);
    }
    let numArrived = 0;
    building.forEach((level) => {
        numArrived += level.length;
    });
    console.log("people arrived:", numArrived, "\n");
    let direction = "up";
    let isFull = false;
    let currLevel = 0;
    let passengers = [];
    let numPassengers = passengers.length;
    let solution = [0];
    if (direction === "up") {
        for (let i = 0; i < queues.length; i += 1) {
            console.log("------ LEVEL:", i, " ------");
            let currentWaiting = queues[i];
            console.log("current level:", currentWaiting);
            if (currentWaiting.length) {
                console.log("people waiting, stop!:", currentWaiting);
                if (!isFull) {
                    console.log("free spaces in lift");
                    if (currentWaiting.length <= capacity) {
                        console.log(" all people can get in lift");
                        for (let j = 0; j < currentWaiting.length; j += 1) {
                            console.log("INNER LOOP:", j);
                            if (currentWaiting[j] > i) {
                                console.log("   destination above:", currentWaiting[j]);
                                passengers.push(currentWaiting[j]);
                                console.log("     passengers:", passengers);
                                console.log("     passenger to delete:", queues[i][j]);
                                queues[i].splice(j, 1);
                                console.log("   remaining on floor:", queues[i]);
                                j -= 1;
                                solution.push(i);
                            }
                            else {
                                console.log("  destination below, do not stop!");
                            }
                        }
                        console.log("remaining on floor:", queues[i], "\n");
                    }
                }
            }
            else {
                console.log("empty floor:", i, "\n");
                if (passengers.includes(i)) {
                    console.log("passenger wants off at floor:", i);
                    console.log("     building copy:", building);
                    passengers.forEach((passenger) => {
                        if (passenger === i) {
                            building[i].push(passenger);
                            numArrived += 1;
                            console.log("HELLO", passenger, " to go to ", building[i]);
                        }
                        console.log("     building copy:", building);
                    });
                    passengers = [];
                    console.log("lift emptied: ", passengers);
                    solution.push(i);
                }
            }
            direction = "down";
        }
        console.log("passengers:", passengers, "\n");
        console.log("people waiting:", numWaiting);
        console.log("people arrived:", numArrived, "\n");
    }
    if (direction === "down") {
        for (let i = queues.length - 1; i >= 0; i -= 1) {
            console.log("------ LEVEL:", i, " ------");
            let currentWaiting = queues[i];
            console.log("current level:", currentWaiting);
            if (currentWaiting.length) {
                console.log("people waiting, stop!:", currentWaiting);
                if (!isFull) {
                    console.log("free spaces in lift");
                    if (currentWaiting.length <= capacity) {
                        console.log(" all people can get in lift");
                        for (let j = 0; j < currentWaiting.length; j += 1) {
                            console.log("INNER LOOP:", j);
                            if (currentWaiting[j] < i) {
                                console.log("   destination above:", currentWaiting[j]);
                                passengers.push(currentWaiting[j]);
                                console.log("     passengers:", passengers);
                                console.log("     passenger to delete:", queues[i][j]);
                                queues[i].splice(j, 1);
                                console.log("   remaining on floor:", queues[i]);
                                j -= 1;
                                solution.push(i);
                            }
                            else {
                                console.log("  destination above, do not stop!");
                            }
                        }
                        console.log("remaining on floor:", queues[i], "\n");
                    }
                }
            }
            else {
                console.log("empty floor:", i, "\n");
                if (passengers.includes(i)) {
                    console.log("passenger wants off at floor:", i);
                    console.log("     building copy:", building);
                    passengers.forEach((passenger) => {
                        if (passenger === i) {
                            building[i].push(passenger);
                            numArrived += 1;
                            console.log("HELLO", passenger, " to go to ", building[i]);
                        }
                        console.log("     building copy:", building);
                    });
                    passengers = [];
                    console.log("lift emptied: ", passengers);
                    solution.push(i);
                }
            }
        }
        console.log("passengers:", passengers, "\n");
        console.log("people waiting:", numWaiting);
        console.log("people arrived:", numArrived, "\n");
        direction = "up";
        solution.push(0);
    }
    console.log("SOLUTION ARRAY:", solution);
    return [999];
};
var queues = [
    [],
    [0],
    [],
    [],
    [2],
    [3],
    [],
];
console.log(theLift(queues, 5));
function calculateCombinations(startPosition, patternLength) {
    return -1;
}
