// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE : Tricky JavaScript Interview Questions and Answers (BY: TECHSITH)
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
//  SOURCE : https://www.youtube.com/watch?v=qsNxdukPc2U 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
//1️⃣     NUMBER +/- NUMERIC STRING
// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

console.log(2 + "2");   // 22   PLUS OPERATOR WILL CONCAT "2"+"2"

console.log(2 - "2");   // 0    MINUS IS ONLY A NUMBER OPERATOR  2 - 2 


// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
//2️⃣    REMOVE DUPLICATES
// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖


const nums = [1, 2, 2, 3];

const noDuplicates = [...new Set(nums)];  //  arr => set => arr


// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
//3️⃣     VARIABLE SCOPE: IMMEDIATELY INVOKED FUNCTION EXPRESSION
// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖


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

const func2 = function () {
    {
        (function () {
            let l = "let";
            var v = "var";
        })();

    }
    console.log(l);     //  l DOESN'T EXIST OUTSIDE OF ITS BLOCK (UNCAUGHT REF ERROR: l IS NOT DEFINED)
    console.log(v);     //  (UNCAUGHT REF ERROR: v IS NOT DEFINED)
}
func();

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
// 4️⃣    COMPARISON OPERATORS
// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖


console.log(5 < 6 < 7);     // true     (5<6) = true(1) < 7 ==> true

console.log(7 > 6 > 5);     // false    (7>6) = true(1) !> 5 ==> false 

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
// 5️⃣    ACCESSING ARROW FUNCTION ARGUMENTS
// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

const a = () => arguments;

console.log(a("hello"));    //  WON'T GE ARGUMENTS BACK

// SOLUTION: USE REGULAR FUNCTION OR:

const a2 = (...n) => { return n };

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
// 6️⃣   return STATEMENT SHOULD NOT HAVE A LINE BREAK
// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖


const x = function () {
    return                  // WILL MEAN: return; AS JS INSERTS A ";"
    {
        message: "hello"
    }
}

x();    // undefined !!!

// solution: 

const x2 = () => {
    return {
        message: "hello"
    }
}

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
// 7️⃣    RESTRICTING USR FROM MODIFYING/ADDING PROPERTIES TO OBJECT
// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖


// A.
const profile = {
    name: "john"
}

// SOLUTION:

Object.freeze(profile);

profile.age = 35;   // WILL NOT WORK


// B.
// ALLOW USER TO MODIFFY EXISTING PROPERTY ONLY:

// SOLUTION:

Object.seal(profile);

profile.name = "will";      // ALLOWED
profile.age = 35;           // WILL NOT WORK

// C.
// ALLOW MODIFYING ONE PROPERTY ONLY
const profile = {
    name: "john",
    age: 20
}

// SOLUTION:

Object.defineProperty(profile, "age", {     // SPECIFY OBJ / PROPERTY
    value: 3,                               // CONFIGURE
    writable: false
})


// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
// 7️⃣    Math.max() OUTPUT WITH NO ARGUMENTS
// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

console.log(Math.max());    // NEGATIVE INFINITY

// Math.max WILL COMPARE NUMBERS TO -INF. IF THERE'S NOTHING TO COMPARE IT WITH, IT WILL RETURN IT.


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE : Top 10 JavaScript Interview Questions (BY: TECHSITH)
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
//  SOURCE : https://www.youtube.com/watch?v=oxoFVqetl1E
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
//1️⃣     let / var DIFFERENCES
// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//  let IS ES2015/ES6, var IS OLD
//  let IS BLOCK SCOPE, var IS FUNCTION SCOPE
//  var GETS HOISTED:

let x3 = function () {

    if (true) {
        console.log(v);     // undefined  AS ITS DEFINITION GETS HOISTED BUT NOT THE VALUE !!!
        console.log(l);     // REF ERROR: l IN NOT DEFINED !!!
        var v = 2;
        let l = 1;
    }

}


// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
//2️⃣   == VS === COMPARISON OPERATORS
// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// PRIMITIVES:
//  == VALUE (CONVERT S BOTH TO SAME TYPE)
//  === VALUE AND TYPE

// OBJECTS:

const c = [1, 2];

c.push(3);  // [1, 2, 3]    CAN MODIFY !!!

c = [1, 2, 3];  // TYPE ERROR: ASSIGNMENT TO CONST !!! CAN NOT ASSIGN

//  !!! USE const FOR OBJECT TO AVOID ACCIDENTAL RE-ASSIGNMENT !!!


// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
//3️⃣     let VS const 
// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// let: CAN REASIGN VALUE / TYPE
// const: CAN NOT RE-ASSIGN 


// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
// 4️⃣    null VS undefined
// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//  2:
//  IF WE DECLARA A VARIABLE WITHOUT ASSIGNING A VALUE, ITS VALUE WILL BE undefined
//  null IS ASSIGNED BY US 

// 1:
// typeof(undefined) => undefined
// typeof(null) => object

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
// 5️⃣   WHATS THE USE OF ARROW FUNCTIONS?
// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

const profile = {

    firstName: "",
    lastName: "",
    setName: function (name) {
        let splitName = function (n) {           // REGULAR FUNCTION HAS ITS OWN this 
            let nameArray = n.split(" ");       // THEREFORE this = window obj
            this.firstName = nameArray[0];
            this.lastName = nameArray[1];
            console.log(this);
            // this = Window {window: Window, self: Window, document: document, name: '', location: Location, …}
        }
        splitName(name);
    }
}

profile.setName("phil collins");

console.log(profile.firstName);         // undefined !!! 
// BUT:
console.log(window.firstName);          // phil
console.log(firstName);                 // phil

// WITH ARROW FUNCTION:

const profile = {

    firstName: "",
    lastName: "",
    setName: function (name) {
        let splitName = (n) => {              // ARROW FUNCTION DOESN'T GET ITS OWN this 
            let nameArray = n.split(" ");     // this = profile OBJECT
            this.firstName = nameArray[0];
            this.lastName = nameArray[1];
            console.log(this);
            // this = // {firstName: 'phil', lastName: 'collins', setName: ƒ} 
        }
        splitName(name);
    }
}


profile.setName("phil collins");

console.log(profile.firstName);

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
// 6️⃣   PROTOTYPAL INHERITANCE
// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// OBJECTS HAVE A PROTOTYPE PROPERTY, WE CAN ATTACH PROPERTIES / METHODS TO IT 
// WHEN WE CREATE INSTANCES OF OBJECTS, THEY INHERIT THE PROPERTIES OF THEIR PARENT 
// AND CAN USE THOSE METHODS DESPITE THEY ARE NOT THEIR OWN
// WHEN WE CALL A METHOD ON AN OBJ, IT FIRST LOOKS IN ITS OWN PROPERTIES. 
// IF METHOD NOT FOUND, IT WILL LOOK FOR IN THE PARENT. ONCE FOUND IT IS EXECUTED 



let car = function (model) {             // car CONSTRUCTOR OBJ
    this.model = model;
}

car.prototype.getModel = function () {    // ATTACH getModel TO ITS PROTOTYPE
    return this.model;
}

let bmw = new car("bmw");       // CREATE NEW car
console.log(bmw.getModel());    // AND CALL getModel METHOD ON IT ==> bmw

let chevy = new car("chevy");
console.log(chevy.getModel());  // chevy 

// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
// 7️⃣    
// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖





// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
// 8️⃣   
// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖




// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
// 9️⃣   
// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖



// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
// 1️⃣0️⃣ 
// ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖



