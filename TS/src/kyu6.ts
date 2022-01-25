// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰


//============= OTHER CODEWARS SOLUTIONS: =============


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰


//============= OTHER CODEWARS SOLUTIONS: =============










// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE:  FIND EVEN INDEX 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// Note:
// If you are given an array with multiple answers, return the lowest correct index.



const findEvenIndex = (arr: number[]): number => {

    const sum = arr.reduce((a, b) => a + b);
    console.log(sum);
    let counter: number = 0;
    let solution: number = -1;

    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let previous = arr[i - 1];
        let sideSum = (sum - current) / 2;
        counter += previous;
        console.table(
            {current: current, sideSum: sideSum, counter: counter}
        )
        if (sideSum === counter) {
            console.log("solution found at idx : " , i);
            solution = i;
        }
    }

    return solution;
}

// findEvenIndex([1, 2, 3, 4, 3, 2, 1]);
// findEvenIndex([1,100,50,-51,1,1]);
// findEvenIndex([1,8,1]);
findEvenIndex([20,10,30,10,10,15,35]);

//============= OTHER CODEWARS SOLUTIONS: =============



// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// ❗️❗️❗️  INCLUDE THIS IN PROJECTS/TYPESCRIPT ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  YOUR ORDER PLEASE (REARRANGE WORDS BY NUMBER FOUND IN THEM)
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

const order = (words: string): string => {

    if (words.length === 0) {
        return "";
    } else {
        const orderedArr: string[] = [];
        words.split(" ").forEach((word) => {
            let numStr: number = Number(word.match(/[1-9]/)![0]) - 1;
            orderedArr[numStr] = word;
        })
        return orderedArr.join(" ");
    }

}

//  IF EMPTY STRING: RETURN ""
//  OTHERWISE:
//      CREATE NEW ARRAY FOR ORDERED WORDS
//      SPLIT INTO ARRAY AND FOR EACH WORD:
//          EXTRACT NUMERIC CHARACTER AND CONVERT TO NUMBER - 1 (INDEX)
//          !!! "Non-null assertion operator" (!) !!!
//          SET WORD AS NEW ELEMENT IN ARRAY AT INDEX
//      RETURN ARRAY JOINED INTO STRING 

//  !!! REASON FOR SUBSTRACTING 1 FROM NUMBER: !!!
//  Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//  !!! THIS IS TO PREVENT ELEMENT AT INDEX 0 FROM BEING UNDEFINED IN ORDERED ARRAY  !!!

// order("is2 Thi1s T4est 3a");
// order("");

/*
❗️❗️❗️ TS2531: Object is possibly 'null' ❗️❗️❗️

https://stackoverflow.com/questions/49431880/ts2531-object-is-possibly-null

You should either check for null (using an if) or use a "Non-null assertion operator" (!) if you are sure it is not null:

if(nativeElement.files != null) {
    this.photoService.upload(this.vehicleId, nativeElement.files[0])
        .subscribe(x => console.log(x));
}

OR
this.photoService.upload(this.vehicleId, nativeElement.files![0])
    .subscribe(x => console.log(x));
Note:

The "Non-null assertion operator" will not perform any runtime checks, it just tells the compiler you have special information and you know nativeElement.files will not be null at runtime.

If nativeElement.files is null at runtime, it will generate an error. This is not the safe navigation operator of other languages.
*/


//============= OTHER CODEWARS SOLUTIONS: =============

function order2(words: String): String {
    return words.split(' ')
        .sort((a, b) => +a.match(/\d/)! - +b.match(/\d/)!)
        .join(' ')
}


function order3(words: String): String {
    return words.split(' ')
        .sort((l, r) => +/\d/.exec(l)![0] - +/\d/.exec(r)![0])
        .join(' ');
}


const order4 = (words: string): string => {
    return words.split(' ').sort((a, b) => +a.replace(/\D/g, '') - +b.replace(/\D/g, '')).join(' ');
}


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  TAKE A TEN MINUTE WALK
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

const isValidWalk = (directions: string[]): boolean => {

    interface Counter {
        [key: string]: number;
    }

    const counterObj: Counter = {};

    directions.forEach(dir => counterObj[dir] = (counterObj[dir] || 0) + 1);

    // console.log(
    //     directions.length === 10 ? (counterObj.n === counterObj.s) && (counterObj.e === counterObj.w) : false
    // );

    return directions.length === 10
        ? (counterObj.n === counterObj.s) && (counterObj.e === counterObj.w)
        : false;

}

//  CREATE COUNTER OBJECT {direction: count, ...}
//  IF TOTAL NUMBER OF DIRECTIONS IS 10
//      RETURN NUMBER OF BOTH OPPOSITE DIRECTION PAIRS (N-S, E-W) "BOOLEAN"
//  IF NUMBER OF DIRECTIONS IS NOT 10
//      RETURN FALSE


isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']);
isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']);

//============= OTHER CODEWARS SOLUTIONS: =============

function isValidWalk2(walk: string[]) {
    if (walk.length !== 10) return false;
    if (walk.filter(e => e === 'n').length !== walk.filter(e => e === 's').length) return false;
    if (walk.filter(e => e === 'e').length !== walk.filter(e => e === 'w').length) return false;
    return true;
}


function isValidWalk3(walk: string[]) {
    if (walk.length !== 10) return false;

    type directionValues = {
        [key: string]: number;
    };

    const directions: directionValues = {
        n: 0,
        s: 0,
        w: 0,
        e: 0,
    };

    walk.forEach((direction: string) => {
        directions[direction]++;
    });

    return directions.n === directions.s && directions.w === directions.e;
}


function isValidWalk4(walk: string[]): boolean {
    if (walk.length !== 10) return false

    const coordinates = {
        x: 0,
        y: 0,
    }

    for (let i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n': coordinates.x++; break
            case 's': coordinates.x--; break
            case 'e': coordinates.y++; break
            case 'w': coordinates.y--; break
            default: break
        }
    }

    return (!coordinates.x && !coordinates.y)
}


// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// !!! NEED TO REFACTOR !!!
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  DUPLICATE ENCODER
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

const duplicateEncode = (word: string): string => {


    // 1️⃣  DOES NOT WORK WITH SPECIAL CHARACTERS:

    // const strArr = word.split("");
    // strArr.forEach((letter, i) => {
    //     let regex = new RegExp(letter, "gi");
    //     console.table(
    //         {
    //             letter: strArr[i],
    //             matches: word.match(regex)?.length
    //         }
    //     );
    //     //❗️❗️❗️ WITHOUT "?"" OBJECT IS POSSIBLY NULL ❗️❗️❗️
    //     let counter: number | undefined = word.match(regex)?.length;
    //     if (counter !== undefined) {
    //         if (counter > 1) {
    //             strArr[i] = ")";
    //         } else {
    //             strArr[i] = "(";
    //         }
    //     }
    // })
    // return strArr.join("");


    // 2️⃣  THIS WORKS:
    //  FIND EACH ELEMENT OF ORIGINAL ARRAY IN COPY(ORIGINAL WORD MINUS CURRENT LETTER)
    // IF FOUND, THEN IT IS A DUPLICATE, IF NOT FOUND THEN IT IS SINGLE
    const original = word.split("").map((letter) => letter.toLowerCase());
    let copy = [...original];
    const resultArr: string[] = [];

    for (let i = 0; i < original.length; i++) {
        copy.splice(i, 1);
        if (copy.indexOf(original[i]) < 0) {
            resultArr.push("(");
        } else {
            resultArr.push(")");
        }
        copy = [...original];
    }

    console.log(resultArr.join(""));
    return resultArr.join("");
}

// duplicateEncode("recEde");
// duplicateEncode("(( @");    // "))(("  
// ❗️❗️❗️ SyntaxError: Invalid regular expression: /(/: Unterminated group ❗️❗️❗️


// ❗️❗️❗️ https://stackoverflow.com/questions/17885855/use-dynamic-variable-string-as-regex-pattern-in-javascript/17886301 ❗️❗️❗️

// To create the regex from a string, you have to use JavaScript's RegExp object.

// If you also want to match/replace more than one time, then you must add the g (global match) flag. Here's an example:

// var stringToGoIntoTheRegex = "abc";
// var regex = new RegExp("#" + stringToGoIntoTheRegex + "#", "g");
// // at this point, the line above is the same as: var regex = /#abc#/g;

// var input = "Hello this is #abc# some #abc# stuff.";
// var output = input.replace(regex, "!!");
// alert(output); // Hello this is !! some !! stuff.

//============= OTHER CODEWARS SOLUTIONS: =============

function duplicateEncode2(word: string) {
    // ...
    return word
        .toLowerCase()
        .split('')
        .map((a, i, w) => {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
        })
        .join('')
}


function duplicateEncode3(word: string): string {
    word = word.toLowerCase();
    let countObj: { [index: string]: number } = {};
    for (let char of word) {
        let count = countObj[char] || 0;
        countObj[char] = ++count;
    }
    let result = '';
    for (let char of word) {
        result += countObj[char] > 1 ? ')' : '(';
    }
    return result;
}


function duplicateEncode4(word: string) {
    const chars = word.toLowerCase().split("");

    return chars.map(char => chars.filter(c => c === char).length > 1 ? ")" : "(").join("");
}


function duplicateEncode5(word: string): string {
    return word
        .split('')
        .map(value =>
            (word.match(new RegExp(`[${value}]`, "giu")) || []).length > 1
                ? ')'
                : '('
        )
        .join('');
}




// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  COUNTING DUPLICATES
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

const duplicateCount = (text: string): number => {

    interface Counter {
        [key: string]: number;
    }

    const counterObj: Counter = {};

    text
        .split("")
        .map((letter) => letter.toLowerCase())
        .forEach(num => counterObj[num] = (counterObj[num] || 0) + 1);

    const duplicatesArr = Object
        .entries(counterObj)
        .filter(([key, value]) => value > 1);

    // console.log(duplicatesArr.length);
    return duplicatesArr.length;

}

//  STR -> ARR(LETTERS) -> ARR(LOWERCASED LETTERS) -> OBJ{num: count} 
//  FILTER OUT OBJ KEYS WITH VALUE GREATER THAN ONE INTO ARRAY
//  RETURN LENGTH OF ARRAY

//  

//============= OTHER CODEWARS SOLUTIONS: =============

// import _ from 'lodash';
// export function duplicateCount2(text: string): number {
//     return _(text).countBy(_.toUpper).values().filter(x => x > 1).size();
// }

function duplicateCount3(text: string): number {
    const values = text.toLowerCase();
    const distinctValues = [... new Set(values)];
    const count = (s: string) => values.split(s).length - 1 > 1;
    return distinctValues.filter(value => count(value)).length;
}

function duplicateCount4(text: string): number {
    let array = text.toLowerCase().split('');
    return [...new Set(array.filter((e, i) => array.indexOf(e) !== i))].length;
}


function duplicateCount5(text: string): number {
    return new Set((text.toLowerCase().match(/(.)(?=.*\1)/gi) || [])).size
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  FIND THE PARITY OUTLIER
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// CHECK IF ELEMENT'S ABSOLUT VALUE IS ODD OR EVEN, GROUP THEM IN ARRAYS
// RETURN FIRST ELEMENT OF ARRAY WITH ONE ELEMENT


const findOutlier = (ints: number[]): number => {

    const odds = ints.filter((num) => Math.abs(num) % 2 === 1);
    const evens = ints.filter((num) => Math.abs(num) % 2 === 0);
    // console.log(odds.length > 1 ? evens[0] : odds[0])
    return odds.length > 1 ? evens[0] : odds[0];

}

// findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);   // 11
// findOutlier([160, 3, 1719, 19, 11, 13, -21]);   // 160
// findOutlier([17417968, -12150916, -135668362, -45067422, 65586444, -104088786, 74395984, 198980314, -91660877, -52541784, -49718652, -189685108, -120327066, 178679078, -31538954, 112116518, -186162190, 29923430, 180062518, 878198, -185634066, -188868404, -111266602, -123331452, -184028074, -24771054, -4052, 98231950, -91193344, -154129192, -134529020, 195427700, 187599832, -11229586, -165510592, -19725720, 180071600, -161055558, 109276994, -88809438, -149769730, -89421390, 27663208, 132490658, 118790172, -23745850, 27711836, -4950342, 32063374, 655394]);   // -91660877


//============= OTHER CODEWARS SOLUTIONS: =============

export function findOutlier2(integers: number[]): number {
    if (integers.slice(0, 3).filter(i => i % 2 !== 0).length > 1) {
        return integers.find(v => v % 2 === 0) || 0;
    } else {
        return integers.find(v => v % 2 !== 0) || 0;
    }
}

export function findOutlier3(integers: number[]): number {
    const odds = integers.filter(v => v % 2);
    const evens = integers.filter(v => !(v % 2));

    return odds.length === 1 ? odds[0] : evens[0];
}



// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  BIT COUNTING
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const countBits = (num: number): number => {

    const bitArr = num.toString(2).match(/1/g);
    // console.log(bitArr === null ? 0 : bitArr.length);
    return bitArr === null ? 0 : bitArr.length;

}

// countBits(0);
// countBits(1234);

//============= OTHER CODEWARS SOLUTIONS: =============

export function countBits2(n: number): number {
    return n.toString(2).replace(/0/g, '').length;
}


export function countBits3(n: number) {
    return n.toString(2).split('').filter(c => c === '1').length
}

export function countBits4(n: number) {
    return n.toString(2)
        .split('')
        .map(Number)
        .filter(Boolean)
        .length;
}

export function countBits5(n: number) {
    return n.toString(2).split('1').length - 1;;
}

export function countBits6(n: number) {
    return n.toString(2).replace(/0/gi, '').length;
}


export function countBits7(n: number) {
    return n.toString(2).match(/1/g)?.length || 0
}


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  WHO LIKES IT?
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const likes = (names: string[]): string => {
    switch (names.length) {
        case 0:
            return "no one likes this";
        case 1:
            return `${names[0]} likes this`;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default:
            return `${names[0]}, ${names[1]} and ${names.length - 2
                } others like this`;
    }
};

//  MAKE 4+ NAMES DEFAULT 

//============= OTHER CODEWARS SOLUTIONS: =============

// export const likes = (names: string[]): string => {
//     switch (names.length) {
//         case 0: return 'no one likes this';
//         case 1: return `${names[0]} likes this`;
//         case 2: return `${names[0]} and ${names[1]} like this`;
//         case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//         default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//     }
// };


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  ARRAY.DIFF
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// array_diff({1, 2}, 2, {1}, 1, *z) == {2} (z == 1)
// If a value is present in b, all of its occurrences must be removed from the other:

// array_diff({1, 2, 2, 2, 3}, 5, {2}, 1, *z) == {1, 3} (z == 2)


// RETURN ELEMENTS OF a THAT ARE NOT PRESENT IN b
const arrayDiff = (a: number[], b: number[]): number[] => {
    return a.filter((num) => b.indexOf(num) < 0);
}

arrayDiff([3, 4, 3], [3]);

//============= OTHER CODEWARS SOLUTIONS: =============

// export function arrayDiff(a: number[], b: number[]): number[] {
//     return a.filter(e => !b.includes(e));
// }


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  SUM OF DIGITS / DIGITAL ROOT
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.


const digitalRoot = (num: number): number => {

    const digitArr = num
        .toString()
        .split("")
        .map((el) => Number(el));

    const sum = digitArr.reduce((a, b) => a + b);
    // console.log(num > 9 ? digitalRoot(sum) : num);
    return num > 9 ? digitalRoot(sum) : num;

};

//  NUM -> STR -> ARR(STR) -> ARR(NUM)
//  GET SUM OF DIGITS
//  RETURN digitalRoot(SUM) OR NUM
digitalRoot(493193); // 6

//============= OTHER CODEWARS SOLUTIONS: =============

// export function digitalRoot(n: number): number {
//     return (n - 1) % 9 + 1;
// }

// export const digitalRoot = (n:number):number => {
//     return n>9?digitalRoot([...(n.toString())].reduce((a,c)=>a+Number(c),0)):n;
// };


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  STOP SPINNING MY WORDS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// mop / forEach
//  STR -> ARR(STR) -> IF LENGTH >= 5{SPLIT.REV.JOIN} -> STR
const spinWords = (words: string): string => {
    const arr = words.split(" ");
    arr.map((word, i) => {
        if (word.length >= 5) {
            arr[i] = arr[i].split("").reverse().join("");
        }
    });
    console.log(arr.join(" "));
    return arr.join(" ");
};

// spinWords("Hey fellow warriors");


//============= OTHER CODEWARS SOLUTIONS: =============


function spinWords2(words: string): string {
    return words.replace(/[a-z]{5,}/ig, (s) => s.split("").reverse().join(""))
}

// const spinWords = (words: string): string => words.split(' ')
//                                                         .map(m => m.length >= 5 
//                                                              ? m.split('').reverse().join('') 
//                                                              : m)
//                                                         .join(' ')


// function spinWords(words: string): string {
//     return words.split(" ").map(word => word.length >= 5 ? [...word].reverse().join("") : word).join(" ")
// }                                                 

// function spinWords(words: string): string {
//     return words.split(" ").map(word => word.length >= 5 ? [...word].reverse().join("") : word).join(" ")
// }

// static spinWords(words: string) {
//     const array = words.split(" ");
//     const spin = array.map((word) => {
//       return word.length < 5 ? word : word.split("").reverse().join("");
//     });
//     return spin.join(" ");
// }


// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// ❗️❗️❗️  INCLUDE THIS IN PROJECTS/TYPESCRIPT ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  FIND INT THAT APPEARS ODD NUMBER OF TIMES IN ARRAY
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: https://www.reddit.com/r/typescript/comments/hm8jbv/how_to_define_an_interface_for_objects_with/fx4szci/
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// ❗️❗️❗️ DEFINE INTERFACE FOR WHAT'S BEING RETURNED ❗️❗️❗️
// TO AVOID ERROR: Element implicitly has 'any' type because expression of type 'number' can't be used to index type '{}'

// ❗️❗️❗️ LOOK INTO THIS: ❗️❗️❗️

// A type like { [key: string]: number } is just bad and should not be used ever.

// Consider an example: const test: { [key: string]: number } = { a: 1 }; test.b // TS will think it’s of type number, while in fact it’s undefined.

// A type declared like that literally says: „for each key of string type there is a number value”. Which simply is not the case. Just don’t do it. It’s as bad as using any.

// If you need to use an object as a key-value mapper, do it well and either define the keys statically, or make the type of value a union with undefined.



// 1️⃣    WITH filter()

const findOdd = (arr: number[]): number => {

    interface NumCounter {
        [key: string]: number;
    }

    const counter: NumCounter = {};

    arr.forEach(num => counter[num] = (counter[num] || 0) + 1);

    const oddTimesArr = Object.entries(counter).filter(([key, value]) => value % 2 > 0);

    // console.log(Number(oddTimesArr[0][0]));
    return Number(oddTimesArr[0][0]);
};



// 2️⃣    WITH forEach()

const findOdd2 = (arr: number[]): number => {

    interface NumCounter {
        [key: string]: number;
    }

    const counter: NumCounter = {};

    arr.forEach(num => counter[num] = (counter[num] || 0) + 1);

    let solution: any;  // INITIALIZE ❗️❗️❗️

    Object.entries(counter).forEach(([key, value]) => {
        // value % 2 > 0 && console.log("key: ", Number(key));
        if (value % 2 > 0) solution = Number(key) as number;    // TYPE ASSERTION ❗️❗️❗️
    });


    return solution;

};


// const findOdd = (arr: number[]): number => {

//     // LOOK INTO THIS, SEE ABOVE:
//     interface NumCounter {
//         [key: string]: number;
//     }

//     const counter: NumCounter = {};

//     arr.forEach(num => counter[num] = (counter[num] || 0) + 1);

//     // console.log(counter);

//     // !!! tsconfig.json COMPILER OPTIONS: "target": "es2018" (es2017 OR LATER) FOR Object.entries TO WORK!!!
//     Object.entries(counter).forEach(([key, value]) => console.log(`${key}: ${value}`));


//     Object.entries(counter).forEach(([key, value]) => {
//         value % 2 > 0 && console.log("key: ", Number(key));
//     });


//     const testArr = Object.entries(counter).filter(([key, value]) => value % 2 > 0);
//     console.log(testArr);
//     console.log(Number(testArr[0][0]));


//     return Number(testArr[0][0]);
// };

findOdd([1, 2, 2, 1, 2]);
findOdd2([1, 2, 2, 1, 2]);

//❗️❗️❗️============= OTHER CODEWARS SOLUTIONS: =============❗️❗️❗️

// https://warrenniu.medium.com/find-the-unique-number-in-an-array-using-the-xor-operator-54d35aa9e8d0
const findOdd3 = (xs: number[]): number => {
    return xs.reduce((a, b) => a ^ b);
};

// Bit operators work on 32 bits numbers. Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.

// Operator	Description	Example	Same as	Result	Decimal
// &	AND	x = 5 & 1	0101 & 0001	0001	 1
// |	OR	x = 5 | 1	0101 | 0001	0101	 5
// ~	NOT	x = ~ 5	 ~0101	1010	 10
// ^	XOR	x = 5 ^ 1	0101 ^ 0001	0100	 4
// <<	Left shift	x = 5 << 1	0101 << 1	1010	 10
// >>	Right shift	x = 5 >> 1	0101 >> 1	0010	  2


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TypeError: Reduce of empty array with no initial value
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  MULTIPLES OF 3 OR 5
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.



// DIVS ARRAY MUST HAVE AN INITIAL VALUE
const solution = (num: number): number => {
    const divs = [0];
    for (let i = 1; i < num; i++)
        if (i % 3 === 0 || i % 5 === 0) {
            divs.push(i);
        }
    console.log(num >= 0 ? divs.reduce((a, b) => a + b) : 0);
    return num >= 0 ? divs.reduce((a, b) => a + b) : 0;
}

// solution(10);
// solution(-1);
// solution(0);

//============= OTHER CODEWARS SOLUTIONS: =============

// export class Challenge {
//     static solution(n: number) {
//       let x = 0;
//       for (let i = 0;i < n; ++i)
//         if (i % 3 == 0 || i % 5 == 0)
//           x += i
//       return x;
//     }
// }