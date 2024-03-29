"use strict";
const reverse = (a) => a.reverse();
function boolfuck(code, input = "") {
    return "hello";
}
const theLift = (queues, capacity) => {
    console.log(queues);
    const levels = queues.length;
    console.log("levels:", levels);
    console.log("capacity:", capacity);
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
    let hasLiftStopped = false;
    let solution = [0];
    if (direction === "up") {
        for (let i = 0; i < queues.length; i += 1) {
            console.log("------ LEVEL:", i, " ------");
            let currentWaiting = queues[i];
            console.log("current level:", currentWaiting);
            if (currentWaiting.length) {
                console.log("people waiting, stop!:", currentWaiting);
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
                            hasLiftStopped = true;
                            isFull = false;
                        }
                        else {
                            console.log("  destination below, do not stop!");
                        }
                    }
                    if (passengers.includes(i)) {
                        console.log("passenger wants off at floor:", i);
                        for (let k = 0; k < passengers.length; k += 1) {
                            if (passengers[k] === i) {
                                console.log("HELLO", passengers[k], " to go to floor:", building[i], "idx:", k);
                                building[i].push(passengers[k]);
                                numArrived += 1;
                                passengers.splice(k, 1);
                                console.log("   passengers after deleting current:", passengers);
                                k -= 1;
                                hasLiftStopped = true;
                                isFull = false;
                            }
                            console.log("     building copy:", building);
                        }
                    }
                    console.log("remaining on floor:", queues[i], "\n");
                }
                else {
                    console.log("not enough room for all!");
                    for (let j = 0; j < currentWaiting.length; j += 1) {
                        console.log("INNER LOOP:", j);
                        if (passengers.includes(i)) {
                            console.log("passenger wants off at floor:", i);
                            for (let k = 0; k < passengers.length; k += 1) {
                                if (passengers[k] === i) {
                                    console.log("HELLO", passengers[k], " to go to floor:", building[i], "idx:", k);
                                    building[i].push(passengers[k]);
                                    numArrived += 1;
                                    passengers.splice(k, 1);
                                    console.log("   passengers after deleting current:", passengers);
                                    k -= 1;
                                    hasLiftStopped = true;
                                    isFull = false;
                                }
                                console.log("     building copy:", building);
                            }
                        }
                        if (currentWaiting[j] > i) {
                            console.log("   destination above:", currentWaiting[j]);
                            passengers.push(currentWaiting[j]);
                            console.log("     passengers:", passengers);
                            console.log("     passenger to delete:", queues[i][j]);
                            queues[i].splice(j, 1);
                            console.log("   remaining on floor:", queues[i]);
                            j -= 1;
                            hasLiftStopped = true;
                            isFull = false;
                        }
                        else {
                            console.log("  destination below, do not stop!");
                        }
                        if (passengers.length === capacity) {
                            console.log("LIFT FULL! ", capacity, " PASSENGERS");
                            isFull = true;
                            break;
                        }
                    }
                }
            }
            if (!currentWaiting.length) {
                console.log("empty floor:", i, "\n");
                console.log("passengers in lift when arriving at empty floor:", passengers);
                if (passengers.includes(i)) {
                    console.log("passenger wants off at floor:", i);
                    for (let k = 0; k < passengers.length; k += 1) {
                        if (passengers[k] === i) {
                            console.log("HELLO", passengers[k], " to go to floor:", building[i], "idx:", k);
                            building[i].push(passengers[k]);
                            numArrived += 1;
                            passengers.splice(k, 1);
                            console.log("   passengers after deleting current:", passengers);
                            k -= 1;
                            hasLiftStopped = true;
                        }
                        console.log("     building copy:", building);
                    }
                    console.log("lift emptied: ", passengers);
                }
            }
            if (hasLiftStopped && i > 0) {
                solution.push(i);
                hasLiftStopped = false;
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
                                console.log("   destination below:", currentWaiting[j]);
                                passengers.push(currentWaiting[j]);
                                console.log("     passengers:", passengers);
                                console.log("     passenger to delete:", queues[i][j]);
                                queues[i].splice(j, 1);
                                console.log("   remaining on floor:", queues[i]);
                                j -= 1;
                                hasLiftStopped = true;
                            }
                            else {
                                console.log("  destination above, do not stop!");
                            }
                        }
                        if (passengers.includes(i)) {
                            console.log("passenger wants off at floor:", i);
                            console.log("     building copy:", building);
                            for (let k = 0; k < passengers.length; k += 1) {
                                if (passengers[k] === i) {
                                    building[i].push(passengers[k]);
                                    numArrived += 1;
                                    console.log("HELLO", passengers[k], " to go to ", building[i]);
                                    passengers.splice(k, 1);
                                    k -= 1;
                                }
                                console.log("     building copy:", building);
                                console.log("     building copy:", building);
                            }
                            console.log("lift emptied: ", passengers);
                        }
                        if (hasLiftStopped) {
                            solution.push(i);
                            hasLiftStopped = false;
                        }
                        console.log("remaining on floor:", queues[i], "\n");
                    }
                    else {
                        console.log("not enough room for all!");
                        for (let j = 0; j < currentWaiting.length; j += 1) {
                            console.log("INNER LOOP:", j);
                            if (passengers.includes(i)) {
                                console.log("passenger wants off at floor:", i);
                                for (let k = 0; k < passengers.length; k += 1) {
                                    if (passengers[k] === i) {
                                        console.log("HELLO", passengers[k], " to go to floor:", building[i], "idx:", k);
                                        building[i].push(passengers[k]);
                                        numArrived += 1;
                                        passengers.splice(k, 1);
                                        console.log("   passengers after deleting current:", passengers);
                                        k -= 1;
                                        hasLiftStopped = true;
                                        isFull = false;
                                    }
                                    console.log("     building copy:", building);
                                }
                            }
                            if (currentWaiting[j] < i) {
                                console.log("   destination below:", currentWaiting[j]);
                                passengers.push(currentWaiting[j]);
                                console.log("     passengers:", passengers);
                                console.log("     passenger to delete:", queues[i][j]);
                                queues[i].splice(j, 1);
                                console.log("   remaining on floor:", queues[i]);
                                j -= 1;
                                hasLiftStopped = true;
                                isFull = false;
                            }
                            else {
                                console.log("  destination above, do not stop!");
                            }
                            if (passengers.length === capacity) {
                                console.log("LIFT FULL! ", capacity, " PASSENGERS");
                                isFull = true;
                                break;
                            }
                        }
                    }
                }
                else {
                    console.log("lift is full!");
                }
            }
            if (!currentWaiting.length) {
                console.log("empty floor:", i, "\n");
                if (passengers.includes(i)) {
                    console.log("passenger wants off at floor:", i);
                    console.log("     building copy:", building);
                    for (let k = 0; k < passengers.length; k += 1) {
                        if (passengers[k] === i) {
                            building[i].push(passengers[k]);
                            numArrived += 1;
                            console.log("HELLO", passengers[k], " to go to ", building[i]);
                            passengers.splice(k, 1);
                            k -= 1;
                        }
                        console.log("     building copy:", building);
                        console.log("     building copy:", building);
                        hasLiftStopped = true;
                    }
                    console.log("lift emptied: ", passengers);
                }
            }
            if (hasLiftStopped) {
                solution.push(i);
                hasLiftStopped = false;
            }
        }
        console.log("passengers:", passengers, "\n");
        console.log("people waiting:", numWaiting);
        console.log("people arrived:", numArrived, "\n");
        direction = "up";
        if (solution[solution.length - 1] !== 0) {
            solution.push(0);
        }
    }
    console.log("SOLUTION ARRAY:", solution);
    return solution;
};
var queues = [[], [], [4, 4, 4, 4], [], [2, 2, 2, 2], [], []];
console.log(theLift(queues, 2));
function calculateCombinations(startPosition, patternLength) {
    return -1;
}
