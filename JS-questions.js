// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE : Tricky JavaScript Interview Questions and Answers
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
//  SOURCE : https://www.youtube.com/watch?v=qsNxdukPc2U (BY: TECHSITH)
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

//1️⃣

console.log(2 + "2");   // 22   PLUS OPERATOR WILL CONCAT "2"+"2"

console.log(2 - "2");   // 0    MINUS IS ONLY A NUMBER OPERATOR  2 - 2 



//2️⃣    REMOVE DUPLICATES

const nums = [1, 2, 2, 3];

const noDuplicates = [...new Set(nums)];  //  arr => set => arr



//3️⃣     VARIABLE SCOPE: IMMEDIATELY INVOKED FUNCTION EXPRESSION

const func = function () {
    {
        let l = "let";  //  BLOCK SCOPE
        var v = "var";  // FUCTION SCOPE
    }
    console.log(l);     //  l DOESN'T EXIST OUTSIDE OF ITS BLOCK (UNCAUGHT REF ERROR: l IS NOT DEFINED)
    console.log(v);     //  v IS AVAILABLE IN THIS FUNCTION
}
func();

// SOLUTION: USE IMMEDIATELY INVOKED FUNCTION EXPRESSION

const func = function () {
    {
        (function() {
            let l = "let";  
            var v = "var";  
        })();
        
    }
    console.log(l);     //  l DOESN'T EXIST OUTSIDE OF ITS BLOCK (UNCAUGHT REF ERROR: l IS NOT DEFINED)
    console.log(v);     //  (UNCAUGHT REF ERROR: v IS NOT DEFINED)
}
func();


// 4️⃣

console.log(5 < 6 < 7);     // true     (5<6) = true(1) < 7 ==> true

console.log(7 > 6 > 5);     // false    (7>6) = true(1) !> 5 ==> false 


// 5️⃣    ACCESSING ARROW FUNCTION ARGUMENTS

const a = () => arguments;

console.log(a("hello"));    //  WON'T GE ARGUMENTS BACK

// SOLUTION: USE REGULAR FUNCTION OR:

const a = (...n) => {return n};

