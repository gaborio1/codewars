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






// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// dnaStrand []        `shouldBe` []
// dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
// dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
// dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

const dnaStrand = (dna: string): string => {

    const arr = dna.split("");
    console.log(arr);
    const solution = arr.map((letter) => {
        // console.log(letter.toLowerCase());
        // switch (letter) {
        //     case "A":
        //         letter = "T";
        //     case "T":
        //         letter = "A";
        // }
        if (letter === "A") {
            console.log("found");
            letter = "T"
        }
    })

    console.log(solution);
    return "hello";
}

dnaStrand("AT");

//============= OTHER CODEWARS SOLUTIONS: =============



// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

// !!! UNSOLVED: TypeError: Cannot read property 'split' of undefined !!!
//  (WORKS IN EDITOR AND IN DEV TOOLS)

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// TITLE:  JADEN CASE
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

const toJadenCase = (str: string): string => {
  
    // const arr = str.split(" ");
    // console.log(arr);
    // arr.forEach((word) => {
    //     console.log(
    //         word.replace(word[0], word[0].toUpperCase())
    //         );

    // })
    // const solution = arr.map((word) => word.replace(word[0], word[0].toUpperCase()));
    // console.log(solution);

    console.log(

        str.split(" ").map((word) => word.replace(word[0], word[0].toUpperCase())).join(" ")

    )

    return str.split(" ").map((word) => word.replace(word[0], word[0].toUpperCase())).join(" ");
};

toJadenCase("How can mirrors be real if our eyes aren't real");
toJadenCase("a b A B");
// How Can Mirrors Be Real If Our Eyes Aren't Real
// How Can Mirrors Be Real If Our Eyes Aren't Real

//============= OTHER CODEWARS SOLUTIONS: =============



// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  SHORTEST WORD'S LENGTH 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// STR -> ARR(STR) -> SORT ARR BY LENGTH OF WORDS -> GRAB LENGTH OF FIRST ELEMENT
const findShort = (str: string): number => {
    return str.split(" ").sort((a, b) => { return a.length - b.length })[0].length;
}


findShort("bitcoin take over the world maybe who knows perhaps");

//============= OTHER CODEWARS SOLUTIONS: =============


// export function findShort(s: string): number {
//     return Math.min(...s.split(" ").map((w) => w.length));
// }

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  X's AND O's
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

const xo = (str: string): boolean => {
    const xS = str.toLowerCase().match(/x/g);   // GET x's
    const oS = str.toLowerCase().match(/o/g);   // GET o's
    if (xS && oS) {                             // IF BOTH FOUND:
        return xS.length === oS.length;             // CHECK IF THEIR LENGTHS EQUAL (bool)
    } else if (xS || oS) {                      // IF ONLY ONE FOUND:
        return false;                               // false
    } else {                                    // IF NEITHER FOUND
        return true;                                // true
    }
}

//============= OTHER CODEWARS SOLUTIONS: =============

// export function xo(str: string) {
// 	return str.toLowerCase().split('x').length == str.toLowerCase().split('o').length;
//   }




// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  IS ISOGRAM?
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// STRING -> ARRAY OF LOWERCASED LETTERS -> SET (DUPLICATES REMOVED)
// COMPARE NUMBER OF ELEMENTS IN SET AND ORIGINAL STRING
// RETURN TRUE IF EQUAL, OTHERWISE FALSE
const isIsogram = (str: string): boolean => {
    const lettersSet = new Set(str.toLowerCase().split(""));
    return lettersSet.size === str.length;
}

//============= OTHER CODEWARS SOLUTIONS: =============

// export function isIsogram (str: string): boolean {
// 	return (new Set(str.toLowerCase())).size === str.length
// }


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  IS SQUARE?
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

function isSquare(num: number): boolean {
    return Number.isInteger(Math.sqrt(num));
};

//============= OTHER CODEWARS SOLUTIONS: =============

// export default (n: number): boolean => (Math.sqrt(n) % 1 === 0);


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const getMiddle = (str: string): string => {

    const halfLength = str.length / 2;
    const isEvenLength = str.length % 2 === 0;

    // console.log(isEvenLength
    // 	? str.substring(halfLength - 1, halfLength + 1)
    // 	: str.charAt((str.length - 1) / 2)
    // )

    return isEvenLength
        ? str.substring(halfLength - 1, halfLength + 1)
        : str.charAt((str.length - 1) / 2)

}

// getMiddle("abcde");
// getMiddle("abcd");

//============= OTHER CODEWARS SOLUTIONS: =============


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// NUM -> STR -> ARR(STR) -> ARR(NUM) -> ARR(SORTED) -> ARR(REVERSED) -> STRING -> NUM
const descendingOrder = (n: Number): number => {

    // JAVASCRIPT:

    // console.log(
    //     n
    //         .toString()
    //         .split("")
    //         .map(Number)
    //         .sort()
    //         .reverse()
    //         .map(String)
    //         .join("") * 1		// !!! *1 NOT WORKING IN TS !!!
    // );

    return Number(
        n.toString().split("").map(Number).sort().reverse().map(String).join("")
    );
};

descendingOrder(123456789);


//============= OTHER CODEWARS SOLUTIONS: =============

// export function descendingOrder(n: number | null | undefined): number | null | undefined {
//   return n ? parseInt(n.toString().split("").sort().reverse().join("")) : n;
// }




// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  MUMBLING
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰


// EMPTY ARR FOR SOLUTION
// SPLIT INTO ARRAY AND LOWERCASE
// REPEAT index + 1 TIMES AND CAPITALIZE FIRST LETTER THEN PUSH INTO SOLUTION ARRAY
// JOIN INTO STRING WITH "-"
const accum = (str: string): string => {
    const repsArr: string[] = [];
    const letters = str.split("").map((el) => el.toLowerCase());
    letters.forEach((letter, i) => {
        let rep = letter
            .repeat(i + 1)
            .replace(letter[0], letter[0].toUpperCase());
        repsArr.push(rep);
    });
    console.log(repsArr.join("-"));
    return repsArr.join("-");
}

accum("ZpglnRxqenU");

//============= OTHER CODEWARS SOLUTIONS: =============

// export function accum(s: string): string {
// 	return s.split('')
// 	.map((elem, index) => elem.toUpperCase() + (elem.toLowerCase()).repeat(index))
// 	.join('-');
//   }

//   export function accum(s: string): string {
// 	return s.split("").map((value, index) => (value.toUpperCase() + value.toLowerCase().repeat(index))).join("-");
//   }

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// SPLIT INTO ARRAY -> CONVERT TO NUM -> FIND MAX/MINN
const highAndLow = (numbers: string): string => {
    const numArr = numbers.split(" ").map((num) => Number(num));
    // console.log(`${Math.max(...numArr)} ${Math.min(...numArr)}`);
    return `${Math.max(...numArr)} ${Math.min(...numArr)}`;

};

highAndLow("1 2 3 4 -6");
// highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");



//============= OTHER CODEWARS SOLUTIONS: =============

// export class Kata {
// 	static highAndLow(numbers: string) {
// 	  const max = Math.max(...numbers.split(' ').map(i => +i));
// 	  const min = Math.min(...numbers.split(' ').map(i => +i));

// 	  return `${max} ${min}`;

// 	}
// }


// export class Kata 
// {
//   static highAndLow(numbers: string) 
//   {
//     let splitted = numbers.split(" ").map(Number); 
//     let low = Math.min( ...splitted );
//     let high = Math.max( ...splitted );
//     return high + " " + low;
//   }
// }




// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  DISEMVOWEL STRING
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰


// REMOVE ALL VOWELS:
const disemvowel = (str: string): string => {
    return str.replace(/[aeiou]/gi, "");
}

//============= OTHER CODEWARS SOLUTIONS: =============

// export class Kata {
//   static disemvowel(str: string) {
//     var vowels: string = 'AEIOUaeiou';
//     return str.split('').filter(v => !vowels.includes(v)).join('')
//   }
// }

// export class Kata {
//   static readonly LETTERS_LIST = new RegExp('a|e|i|o|u', 'gi');

//   static disemvowel(str: string) {
//     return str.replace(Kata.LETTERS_LIST, '');
//   }
// }

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  SQUARE DIGITS OF NUMBER
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const squareDigits = (num: number): number => {

    let solution;
    // solution = num
    //     .toString()
    //     .split("")
    //     .map((el) => Number(el))
    //     .map((el) => Math.pow(el, 2))
    //     .map((el) => el.toString())
    //     .join("")

    solution = num
        .toString()
        .split("")
        .map((el) => Math.pow(Number(el), 2).toString())
        .join("")

    console.log(Number(solution));
    return Number(solution);

}

// squareDigits(9119);

//============= OTHER CODEWARS SOLUTIONS: =============

// export class Kata {
//     static squareDigits(num: number) {
//       return +num.toString().split('').map(i=>+i*+i).join('');
//     }
// }

// export class Kata {
//     static squareDigits(num: number) {
//       return +num.toString()
//                  .split('')
//                  .map(n => Math.pow(+n,2))
//                  .join('');
//     }
// }

// export class Kata {
//     static squareDigits(num: number): number {
//       return +num.toString().split('').map((n)=>(+n)**2).join('')
//     }
// }


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  COUNT VOWELS IN STRING
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// export class Kata {
//     static getCount = (str: string): number => {
//       return str.split("").filter((el) => el.match(/[aeiou]/gi)).length;
//     }
//   }

// SPLIT INTO ARRAY -> FIND VOWELS -> GET LENGTH OF VOWELS ARRAY
const getCount = (str: string): number => {
    return str.split("").filter((el) => el.match(/[aeiou]/gi)).length;
}

  //============= OTHER CODEWARS SOLUTIONS: =============

//   export class Kata {
//     static getCount(str: string) {
//       let list = str.match(/[aeiou]/gi);
//       return list ? list.length : 0;
//     }
//   }

// export class Kata {
//     static getCount(str: string) : number {
//       return str.split('').filter(c => /[aeiou]/i.test(c)).length
//     }
//   }