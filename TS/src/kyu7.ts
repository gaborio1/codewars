// ❗️❗️❗️ ✅  ❓❓❓
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Learning TypeScript. Mixins
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Overview
Along with traditional object-oriented hierarchies, another popular way of building up classes from reusable components is to build them by combining simpler partial classes. You may be familiar with the idea of mixins or traits for languages like Scala, and the pattern has also reached some popularity in the JavaScript community.

Introduction to mixins
Generally speaking a mixin class is a class that implements a distinct aspect of functionality. Other classes can then include the mixin and access its methods and properties. That way, mixins provide a form of code reuse that is based on composing behavior.

Now let’s see how you can model mixins in TypeScript. First of all we’ll define two classes Disposable and Activatable that will act as our mixins. You can see each one is focused on a particular activity or capability. We’ll later mix these together to form a new class from both capabilities.

class Disposable {
    isDisposed: boolean;
    dispose() {
        this.isDisposed = true;
    }
}

class Activatable {
    isActive: boolean;
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}
Next, we’ll create the class that will handle the combination of the two mixins. Let’s look at this in more detail to see how it does this:

class SmartObject implements Disposable, Activatable {
The first thing you may notice in the above is that instead of using extends, we use implements. This treats the classes as interfaces, and only uses the types behind Disposable and Activatable rather than the implementation. This means that we’ll have to provide the implementation in class. Except, that’s exactly what we want to avoid by using mixins.

To satisfy this requirement, we create stand-in properties and their types for the members that will come from our mixins. This satisfies the compiler that these members will be available at runtime. This lets us still get the benefit of the mixins, albeit with some bookkeeping overhead.

// Disposable
isDisposed: boolean = false;
dispose: () => void;
// Activatable
isActive: boolean = false;
activate: () => void;
deactivate: () => void;
Finally, we mix our mixins into the class, creating the full implementation.

applyMixins(SmartObject, [Disposable, Activatable]);
Lastly, we create a helper function that will do the mixing for us. This will run through the properties of each of the mixins and copy them over to the target of the mixins, filling out the stand-in properties with their implementations.

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
Hint: You can find the complete source code for this sample here: https://www.typescriptlang.org/docs/handbook/mixins.html

Task
You're required to implement mixin Serializable which should contain:

method public serialize(): string - this method must serialize all properties of the object (i.e. return object converted to string).
method public deserialize(source: string): void - this is the opposite method, that converts string to object properties and assigns them to current object.
For simplicity's sake let's consider that objects won't contain any circular references. The function applyMixins is defined in tests and you don't need to change it.


*/

class Serializable {
    serialize(): string {
        return "hello";
    }

    deserialize(source: string): void {
        // TODO:
    }
}

/*
describe('Person', () => {
  it("should serialize/deserialize correctly", () => {
    const sourcePerson = new Person('John', 'Galt');
    const serializedPerson = sourcePerson.serialize();
    const resultPerson = new Person();
    resultPerson.deserialize(serializedPerson);
    expect(resultPerson.firstName).to.equal("John");
    expect(resultPerson.lastName).to.equal("Galt");
  });
});

*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Learning TypeScript. Advanced Types. Union Types
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Overview
Union types are closely related to intersection types, but they are used very differently. Occasionally, you’ll run into a library that expects a parameter to be either a number or a string. For instance, take the following function:

 function padLeft(value: string, padding: any) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

padLeft("Hello world", 4); // returns "    Hello world"
The problem with padLeft is that its padding parameter is typed as any. That means that we can call it with an argument that’s neither a number nor a string, but TypeScript will be okay with it.

let indentedString = padLeft("Hello world", true); // passes at compile time, fails at runtime.
In traditional object-oriented code, we might abstract over the two types by creating a hierarchy of types. While this is much more explicit, it’s also a little bit overkill. One of the nice things about the original version of padLeft was that we were able to just pass in primitives. That meant that usage was simple and concise. This new approach also wouldn’t help if we were just trying to use a function that already exists elsewhere.

Instead of any, we can use a union type for the padding parameter:


function padLeft(value: string, padding: string | number) {
    // ...
}

let indentedString = padLeft("Hello world", true); // errors during compilation
A union type describes a value that can be one of several types. We use the vertical bar (|) to separate each type, so number | string | boolean is the type of a value that can be a number, a string, or a boolean.

Task
Let’s have a look at some properties of TypeScript union types:

Identity: A|A is equivalent to A
Commutativity: A|B is equivalent to B|A
Associativity: (A|B)|C is equivalent to A|(B|C)
Subtype collapsing: A|B is equivalent to A if B is a subtype of A
I.e. if we have a value that has a union type, we can only access members that are common to all types in the union. If a value has the type A | B, we only know for certain that it has members that both A and B have.

Your task is to create function join(tokens: string | string[], glue?: string): string which can accept both string and string[] and return one string in which tokens are concatenated with the glue.

Hint: Use typeof before calling join method.

P.S. Solved this kata? Take a look at other katas in "Learning TypeScript" collection.

*/

function join(tokens: string | string[], glue?: string): string {
    return "hello";
}

/*
describe('join', () => {
  it("should return string as it is", () => {
    expect(join("Hello")).to.equal("Hello");
  });
  it("should return joined string in case of string[]", () => {
    let arr = ["Hello", "world!"];
    expect(join(arr, ", ")).to.equal("Hello, world!");
  });
});

*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Ping Pong
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Return a number sequence replacing multiples of the following with words: 3 = Ping 5 = Pong

For example 1 2 Ping 4 Pong

Parameters will be start number and end number

N.B In the event of a number being a multiple of either insert both words without spaces
*/

function pingPong(startNumber: number, endNumber: number): string {
    return "";
}

/*
describe('pingPong', () => {
  it('basic tests', () => {
    Test.assertEquals(pingPong(1, 5), "1 2 Ping 4 Pong");
    Test.assertEquals(pingPong(10, 15), "Pong 11 Ping 13 14 PingPong");
    
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Learning TypeScript. Classes & Interfaces. Abstract classes
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
You're given an abstract class Animal and stubs for classes Animal, Boa, Parrot and Monkey:

export abstract class Animal {
  protected constructor(public value: number) {}

  convertTo (someone: Animal) {
    // TODO:
  }
}

export class Boa extends Animal {
  // TODO:
}

export class Parrot extends Animal {
  // TODO:
}

export class Monkey extends Animal {
  // TODO:
}
Your task is to implement these classes. Boa, Parrot and Monkey must convert to each other correctly.

Have fun! )

P.S. Solved this kata? Take a look at other katas in "Learning TypeScript" collection.
*/

/*
export abstract class Animal {
    protected constructor(public value: number) {}
  
    convertTo (someone: Animal): number {
      // TODO:
    }
  }
  
   class Boa extends Animal {
    // TODO:
  }
  
   class Parrot extends Animal {
    // TODO:
  }
  
   class Monkey extends Animal {
    // TODO:
  }
*/

/*
describe("Boa", () => {
  it("should be measured in Monkeys correctly", () => {
    const boa = new Boa();
    const monkey = new Monkey();
    expect(boa.convertTo(monkey)).to.equal(5);
  });
  it("should be measured in Parrots correctly", () => {
    const boa = new Boa();
    const parrot = new Parrot();
    expect(boa.convertTo(parrot)).to.equal(38);
  });
});

*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Learning TypeScript. Classes & Interfaces. Setters
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
N.B.: To solve this kata you need to choose "2.4/ES6" target.

Overview
In "Learning TypeScript. Classes & Interfaces. Getters", we learned that if we knew all the dimensions (i.e. length, width, height) of a cuboid, we could easily work out its corresponding volume and surface area. The way we achieved this in our code was by the use of getters which automatically computed the volume and surface area of the cuboid whenever either one of length, width, height changed. However, in the previouos exercise, one thing we could not do is define setters for surface area or volume of a cuboid because for a given volume/SA, there were an infinite number of possibilities to the dimensions of the cuboid.

However, for cubes (a special type of cuboid), since their length, width and height are always the same, it is possible to figure out the side length of a cube given its surface area and/or volume. Therefore, in this Kata, you will be asked to define setters as well as getters for both the surface area and volume of a cube.

Task
You're given the ICuboid interface. Define a class Cube that implements ICuboid. Constructor function of Cube takes exactly one parameter length and stores the value of the argument into this.length. You will then define both a getter and a setter for the surfaceArea and volume of the cube.

Articles of Interest
Below are some articles of interest that may help you complete this Kata:

Setters - Mozilla Developer
What are getters and setters? - Stack Overflow
ES6 Classes Intro (includes section on getters and setters)
Credits
This is TypeScript version of kata "Fun with ES6 Classes #4 - Cubes and Setters" by @donaldsebleung

P.S. Solved this kata? Take a look at other katas in "Learning TypeScript" collection.
*/

// declare var ICuboid: {
//     new (length: number): ICuboid;
//   }

//   interface ICuboid {
//     /** Length of the cube */
//     length: number;
//     /** Surface area of the cube */
//     surfaceArea: number;
//     /** Volume of the cube */
//     volume: number;
//   }

//    class Cube implements ICuboid {
//     // TODO:
//   }

/*
describe("The Cube class", () => {
  it("should initialize properly and have working getters and setters", () => {
    var cube = new Cube(1);
    expect(cube.length).to.equal(1);
    expect(cube.surfaceArea).to.equal(6);
    expect(cube.volume).to.equal(1);

    cube.length = 2;
    expect(cube.surfaceArea).to.equal(24);
    expect(cube.volume).to.equal(8);

    cube.surfaceArea = 54;
    expect(cube.length).to.equal(3);
    expect(cube.volume).to.equal(27);

    cube.surfaceArea = 96;
    expect(cube.length).to.equal(4);
    expect(cube.volume).to.equal(64);
    
    cube.volume = 125;
    expect(cube.length).to.approximately(5, 0.000001);
    expect(cube.surfaceArea).to.approximately(150, 0.000001);
    
    cube.volume = 1000;
    expect(cube.length).to.approximately(10, 0.000001);
    expect(cube.surfaceArea).to.approximately(600, 0.000001);
  });
});

*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Learning TypeScript. Classes & Interfaces. Getters
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
N.B.: To solve this kata you need to choose "2.4/ES6" target.

Task
Define the following classes:

I. Cuboid
The object constructor for the class Cuboid should receive exactly three arguments in the following order: length, width, height and store these three values in this.length, this.width and this.height respectively.

The class Cuboid should then have a getter surfaceArea which returns the surface area of the cuboid and a getter volume which returns the volume of the cuboid.

II. Cube
Class Cube is a subclass of class Cuboid. The constructor function of Cube should receive one argument only, its length, and use that value passed in to set this.length, this.width and this.height.

Hint: Make a call to super, passing in the correct arguments, to make life easier ;)

Articles of Interest
Below are some articles of interest that may help you complete this Kata:

Stack Overflow - What are getters and setters in ES6?
getter - Javascript | MDN
Credits
This is TypeScript version of kata "Fun with ES6 Classes #3 - Cuboids, Cubes and Getters" by @donaldsebleung

P.S. Solved this kata? Take a look at other katas in "Learning TypeScript" collection.


*/

// class Cuboid {
//     // TODO:
// }

// class Cube extends Cuboid {
//     // TODO:
// }

/*
describe("class Cuboid", () => {
  it("should initialize properly and have working getters", () => {
    var cuboid = new Cuboid(1, 2, 3);
    expect(cuboid.length).to.equal(1);
    expect(cuboid.width).to.equal(2);
    expect(cuboid.height).to.equal(3);
    expect(cuboid.volume).to.equal(6);
    expect(cuboid.surfaceArea).to.equal(22);
    cuboid.length = 4;
    expect(cuboid.volume).to.equal(24);
    expect(cuboid.surfaceArea).to.equal(52);
    cuboid.width = 5;
    expect(cuboid.volume).to.equal(60);
    expect(cuboid.surfaceArea).to.equal(94);
    cuboid.height = 6;
    expect(cuboid.volume).to.equal(120);
    expect(cuboid.surfaceArea).to.equal(148);
    [cuboid.length, cuboid.width, cuboid.height] = [7, 8, 9];
    expect(cuboid.volume).to.equal(504);
    expect(cuboid.surfaceArea).to.equal(382);
  });
});

describe("class Cube extends Cuboid", () => {
  it("should initialize properly and have the same getters as the parent class", () => {
    var cube = new Cube(1);
    expect(cube.length).to.equal(1);
    expect(cube.width).to.equal(1);
    expect(cube.height).to.equal(1);
    expect(cube.volume).to.equal(1);
    expect(cube.surfaceArea).to.equal(6);
    cube.length = cube.width = cube.height = 2;
    expect(cube.volume).to.equal(8);
    expect(cube.surfaceArea).to.equal(24);
    cube.length = cube.width = cube.height = 3;
    expect(cube.volume).to.equal(27);
    expect(cube.surfaceArea).to.equal(54);
    cube.length = cube.width = cube.height = 5;
    expect(cube.volume).to.equal(125);
    expect(cube.surfaceArea).to.equal(150);
    cube.length = cube.width = cube.height = 10;
    expect(cube.volume).to.equal(1000);
    expect(cube.surfaceArea).to.equal(600);
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Learning TypeScript. Classes & Interfaces. Implement interface methods
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*

One of TypeScript’s core principles is that type-checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

Task
You are given an interface IGeometricFigure:

interface IGeometricFigure {
  area: () => number;
  perimeter: () => number;
}
Your task is to implement classes Square and Circle:

export class Square implements IGeometricFigure {
  // TODO:
}

export class Circle implements IGeometricFigure {
  // TODO:
}

*/

// interface IGeometricFigure {
//     area: () => number;
//     perimeter: () => number;
// }

// class Square implements IGeometricFigure {
//     // TODO:
// }

// class Circle implements IGeometricFigure {
//     // TODO:
// }

/*

describe("The Square class", () => {
  it("should calculate area and perimeter correctly", () => {
    var square = new Square(1);
    expect(square.area()).to.equal(1);
    expect(square.perimeter()).to.equal(4);
  });
});

describe("The Circle class", () => {
  it("should calculate area and perimeter correctly", () => {
    var circle = new Circle(1);
    expect(circle.area()).to.equal(Math.PI);
    expect(circle.perimeter()).to.equal(2*Math.PI);
  });
});


*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Dice Rotation
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
There are any number of dice, and the input array contains the number on the dice's face up.

A dice is 6 faced.

Calculate the total number of minimum rotations of dice, to make all faces the same.

1 will require only one rotation to have 2, 3, 4 and 5 face up, but would require minimum two rotations to make it the face 6, as 6 is the opposite side of 1.

The opposite side of 2 is 5 and 3 is 4.

For example:

dieArray = {1,1,6}, Answer = 2. Rotate 6 two times to get 1.

dieArray = {1,2,3}, Answer = 2. Rotate 1 and 2 and make them 3 (or make them all 1 or 2 as all three would require the same number of rotations.

dieArray = {3, 3, 3}, Answer = 0.

dieArray = {1,6,2,3}, Answer = 3. Rotate 1, 6 and 3 to make them all 2.


*/
function rotations(dieArray: number[]): number {
    return 1;
}
/*
describe("Solution", function () {
   describe("Fixed Tests", function () {
      act(2, [1, 1, 6]);
      act(2, [1, 2, 3]);
      act(0, [3, 3, 3]);
      act(3, [1, 6, 2, 3]);
   });
});

*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Pure Functions
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
A function is pure when:

It always return the same value given the same arguments (it doesn't update or depend on out of the scope variables);
Evaluation of the result does not cause side effect (mutations...) or output
Task
You are given a function that is impure, and your job is to purify it.

This function must:

return a new array where each value is itself plus 2 times the "modifier"
Example:

Array = 1, 2, 3
Modifier = 5

Should return = 11, 12, 13

*/
// const state = {
//     modifier: 2,
// };

// function solution11(arr: number[], options) {
//     for (let i = 0; i < arr.length; ++i) {
//         arr[i] += 2 * state.modifier;
//     }

//     console.log(arr);

//     return arr;
// }

/*
describe('pure', () => {
  it('should not mutate arr', () => {
    const arr = [1, 2, 3];
    const newArr = solution(arr, { modifier: 2 });
    
    assert.notEqual(newArr, arr);
  });
  
  it('should not mutate options', () => {
    const options = { modifier: 2 };
    const newArr = solution([1, 2, 3], options);
    
    assert.deepEqual(options, { modifier: 2 });
  });
  
  it('should not depend on out of scope variables', () => {
    let source = 'return ' + solution.toString();
    
    const sol = Function('arr', 'options', source)();
    sol([1, 2], { modifier: 1 });
    
    assert.isOk('Looks OK');
  });
  
  it('should not output (no-console)', () => {
    const source = solution.toString();
    
    if (/console/.test(source)) {
      assert.fail();
    }
  });
});

*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Merge overlapping strings
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.

"abcde" + "cdefgh" => "abcdefgh"
"abaab" + "aabab" => "abaabab"
"abc" + "def" => "abcdef"
"abc" + "abc" => "abc"
NOTE: The algorithm should always use the longest possible overlap.

"abaabaab" + "aabaabab" would be "abaabaabab" and not "abaabaabaabab"
*/
const mergeStrings = (first: string, second: string): string => {
    // Do your thing
    return "";
};
/*
describe("mergeStrings", function() {
  it('"Example 1"', () => {
    const expected = 'abcdefgh'
    const actual = mergeStrings('abcde', 'cdefgh')
    assert.equal(actual, expected)
  })

  it('"Example 2"', () => {
    const expected = 'abaabab'
    const actual = mergeStrings('abaab', 'aabab')

    assert.equal(actual, expected)
  })
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: The 12 Days of Christmas
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Oh No!

The song sheets have been dropped in the snow and the lines of each verse have become all jumbled up.

Task
You have to write a comparator function which can sort the lines back into their correct order, otherwise Christmas will be cancelled!

Reminder: Below is what the final verse should look like

On the 12th day of Christmas my true love gave to me
12 drummers drumming,
11 pipers piping, 
10 lords a leaping, 
9 ladies dancing, 
8 maids a milking,
7 swans a swimming, 
6 geese a laying, 
5 golden rings, 
4 calling birds,
3 French hens, 
2 turtle doves and 
a partridge in a pear tree.

*/
const comparator = function (a: string, b: string): number {
    return 0;
};

/*
describe("SolutionTests", function() {

  var shuffle = function(list:string[]) {
    var shuffled = []
    for (let i = 0; i < list.length; i++) shuffled.push(list[i]);
    for (let i = 0; i < shuffled.length; i++) {
      if (Math.random() > 0.5) {
        const j:number = (i+3) % shuffled.length;
        // swap lines i & j
        const tmp:string = shuffled[i] as string
        shuffled[i] = shuffled[j] as string
        shuffled[j] = tmp
      }
    }
    return shuffled
  }
  
  var display = function(list:string[]) {
    for (var i in list) {
      console.log(list[i])
    }
    return list
  }

  var doTest = function(lines:string[]) {
    var shuffled = shuffle(lines);
    console.log("SHUFFLED:"); display(shuffled);
    var actual = shuffled.sort(comparator);
    var expected = lines;    
    assert.deepEqual(actual, expected, "Christmas is cancelled!");
  }
  
  it("verse12", function() {
    var lines = [
        "On the 12th day of Christmas my true love gave to me",
        "12 drummers drumming,",
        "11 pipers piping,",
        "10 lords a leaping,",
        "9 ladies dancing,",
        "8 maids a milking,",
        "7 swans a swimming,", 
        "6 geese a laying,", 
        "5 golden rings,", 
        "4 calling birds,",
        "3 French hens,", 
        "2 turtle doves and", 
        "a partridge in a pear tree."    
    ];
    doTest(lines)  
  });
  
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Decrypt this school cipher
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
School students Alice and Bob send messages to each other. To ensure that their messages are not readable by teachers they encrypt text with simple algorythm. Every message contains only latin letters (lowercase and uppercase), digits from 0 to 9 and space symbol.

So, the encryption algorythm is:

Reverse the whole string.
Replace every letter with it ASCII code in quotes (A to '65', h to '104' and so on).
Insert digits and spaces as is.
E.g. this message:

9Hi Alice4
is encrypted as

4'101''99''105''108''65' '105''72'9
Your task is to write function decrypt to get source messages from encrypted strings.


*/
const decrypt = (str: string): string => {
    return str;
};

/*
describe('decrypt', () => {
  it('should decrypt any messages', () => {
    assert.strictEqual(decrypt("'101''99''105''108''65'"), "Alice")
    assert.strictEqual(decrypt("'98''111''66'"), "Bob")
    assert.strictEqual(decrypt("30 71"), "17 03")
  });
});

*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: 2D Vector Mapping
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
ntroduction
Imagine a function that maps a number from a given range, to another, desired one. If this is too vague - let me explain a little bit further: let's take an arbitrary number - 2 for instance - and map it with this function from range 0-5 to, let's say - 10-20. Our number lies in 2/5 of the way in it's original range, so in order to map it to the desired one we need to find a number that lies exactly in the same place, but in our new range. This number, in this case, is 14. You can visualize this as taking a 5cm piece of rubber, putting it next to the ruler, marking the dot on the second centimeter, then stretching the rubber between 10th and 20th centimeter and reading the value next to the dot.

Task
The task in this kata is, unfortunately, a little bit more complex. We will take the same idea, but apply it to the 2-dimensional plane, so instead of single numbers, we will consider vectors with their x-position and y-position, instead of ranges, we will look at the circles with given centers and radii.

You need to write a function called map_vector (or mapVector) that takes 3 arguments - vector, circle1, circle2 and returns a tuple/array/slice of x, y positions of the mapped vector. All three arguments will be tuples (arrays), the first one with x, y positions of a base vector, the second and third with x, y positions of the center of a circle and it's radius. The base vector will always be within the first circle and you need to map it from the first circle to the second. The coordinates should be precise up to second decimal place.

Examples
Let's take a look at a simple example:

vector = 5, 5
circle1 = 10, 20, 42
circle2 = -100, -42, 69
As we see, the vector's cartesian coordinates are x=5, y=5, first's circle's center is in x=10, y=20, it's radius is 42, and so on. Let's visualize it:

The red dot is our given vector. After running our function we should get our new, mapped vector with coordinates x=-108.21, y=-66.64. Take a look at the light-blue dot here:

So, to represent this with code:

mapVector([5, 5], [10, 20, 42], [-100, -42, 69]) === [-108.21, -66.64]
Two, very important things to notice here are:

The distance between a vector and a circle's center is scaled accordingly to the second circle's radius
The angle between the vector and the line x=c1.x is preserved (c1.x == first circle's center's x position)
It is also worth to mention, that when both circles' radii are equal, this is equivalent of just translating the vector by the distance between them, and when the circles are concentric this is roughly equivalent to the mapping function mentioned in the introduction.

Notes
Although it is not really a problem, but for simplicity the given vector will always be contained within the first circle. The plane in random tests is a square with sides ranging between -400 to 400.

Tip
It may not be necessary, but if you're stuck, think about the most iconic animal that pops to mind when thinking about the negative influence of the climate changes on our planet's habitat.

Enjoy, and don't hesitate to comment on any mistakes or problems with this kata.


*/
function mapVector(
    vector: [number, number],
    circle1: [number, number, number],
    circle2: [number, number, number]
): [number, number] {
    return [0, 0];
}
/*
describe("Basic tests", function() {
  it("Should handle simple cases", () => {
    const examples = [
      {
          input: [[46, 58], [0, 0, 100], [0, 0, 100]],
          output: [46, 58]
      },
      {
          input: [[50, 88], [-25, 128, 100], [50, 50, 100]],
          output: [125, 10]
      },
      {
          input: [[120, 58], [100, 76, 36], [120, -62, 50]],
          output: [147.78, -87.0]
      },
      {
          input: [[5, 5], [10, 20, 42], [-100, -42, 60]],
          output: [-107.14, -63.43]
      },
    ];
  
    for (const example of examples) {
      const got = mapVector(<[number, number]>example.input[0], <[number, number, number]>example.input[1], <[number, number, number]>example.input[2]);
      const expected = <[number, number]>example.output;
      assert.approximately(got[0], expected[0], margin,
        `x coordinate is off - ${got[0]} is not ${expected[0]}. Error margin: ${margin}.`
      );
      assert.approximately(got[1], expected[1], margin,
        `y coordinate is off - ${got[1]} is not ${expected[1]}. Error margin: ${margin}.`
      );
    }
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: List of all Rationals
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Here's a way to construct a list containing every positive rational number:

Build a binary tree where each node is a rational and the root is 1/1, with the following rules for creating the nodes below:

The value of the left-hand node below a/b is a/a+b
The value of the right-hand node below a/b is a+b/b
So the tree will look like this:

                       1/1
                  /           \ 
            1/2                  2/1
           /    \              /     \
       1/3        3/2        2/3       3/1
      /   \      /   \      /   \     /   \
   1/4    4/3  3/5   5/2  2/5   5/3  3/4   4/1

 ...
Now traverse the tree, breadth first, to get a list of rationals.

[ 1/1, 1/2, 2/1, 1/3, 3/2, 2/3, 3/1, 1/4, 4/3, 3/5, 5/2, .. ]
Every positive rational will occur, in its reduced form, exactly once in the list, at a finite index.

In the kata, we will use tuples of type [number, number] to represent rationals, where [a, b] represents a / b

Use this method to create an infinite list of tuples:

function* allRationals(): IterableIterator<[number, number]>
matching the list described above:

allRationals() => [[1, 1], [1, 2], [2, 1], [1, 3], [3, 2], ...]
*/
function* allRationals(): IterableIterator<[number, number]> {
    yield [1, 1];
}
/*
describe("List of all Rationals", () => {
  const gen = allRationals();
  const a = [...Array(100001)].map(() => gen.next().value);
  it("Basic tests", () => {
    assert.deepStrictEqual(a[0], [1, 1]);
    assert.deepStrictEqual(a[3], [1, 3]);
    assert.deepStrictEqual(a[4], [3, 2]);
    assert.deepStrictEqual(a[10], [5, 2]);
  });
  it("Larger indices", () => {
    assert.deepStrictEqual(a[100], [19, 12]);
    assert.deepStrictEqual(a[1000], [39, 28]);
    assert.deepStrictEqual(a[10000], [205, 162]);
    assert.deepStrictEqual(a[100000], [713, 586]);
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Anchorize me!
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Parse the text and replace Globally url with corresponding html syntax.

Supported protocols:

http
https
ftp
ftps
file
smb
NOTE: Ideal will be with ** Regex **

Input
'hello FTP://world.com !'

Output
'hello <a href="FTP://world.com">FTP://world.com</a> !'

Input
'hello http://world.com !'

Output
'hello <a href="http://world.com">http://world.com</a> !'
*/
function anchorize(text: string) {
    // show me the code!!
}
/*
describe("Basic tests", function() {
  it("Should return anchorized samples", function() {
    assert.strictEqual('<xmp>'+anchorize('hello http://world.com !')+'</xmp>','<xmp>'+'hello <a href="http://world.com">http://world.com</a> !'+'</xmp>');
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Smoking Timmy
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Timothy (age: 16) really likes to smoke. Unfortunately, he is too young to buy his own cigarettes and that's why he has to be extremely efficient in smoking.

It's now your task to create a function that calculates how many cigarettes Timothy can smoke out of the given amounts of bars and boxes:

a bar has 10 boxes of cigarettes,
a box has 18 cigarettes,
out of 5 stubs (cigarettes ends) Timothy is able to roll a new one,
of course the self made cigarettes also have an end which can be used to create a new one...
Please note that Timothy never starts smoking cigarettes that aren't "full size" so the amount of smoked cigarettes is always an integer.


*/
function startSmoking(bars: number, boxes: number): number {
    return 0;
}
/*
describe("Example Cases", function() {
  
  it("startSmoking(0,1) should return 22", function() {
     assert.deepEqual(startSmoking(0,1), 22);
  });

  it("startSmoking(1,0) should return 224", function() {
     assert.deepEqual(startSmoking(1,0),224);
  });
  
  it("startSmoking(1,1) should return 247", function() {
     assert.deepEqual(startSmoking(1,1),247);
  });
  it("startSmoking(10,2) should return 2294", function() {
     assert.deepEqual(startSmoking(10,2),2294);
  });
  it("More tests", function() {
     assert.deepEqual(startSmoking(0,0),0);
     assert.deepEqual(startSmoking(1,0),224);
     assert.deepEqual(startSmoking(1,1),247);
     assert.deepEqual(startSmoking(10,2),2294);
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Truthy and Falsy
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
n JavaScript there are truthy and falsy values:

truthy: a value that when evaluated in a boolean context returns true
falsy: a value that when evaluated in a boolean context returns false
MDN links:

https://developer.mozilla.org/en/docs/Glossary/Truthy
https://developer.mozilla.org/en-US/docs/Glossary/Falsy
Your task
You are given two empty arrays (truthy and falsy) and you have to fill this array with at least 5 elements in each which will evaluate to true or false accordingly.


*/
const truthy = [];
const falsy = [];

/*
describe('length', () => {
  it('truthy array should have at least 5 unique elements', () => {
    assert.isAtLeast(new Set(truthy).size, 5);
  });
  
  it('falsy array should have at least 5 unique elements', () => {
    assert.isAtLeast(new Set(falsy).size, 5);
  });
});

describe('truthy', () => {
  it('elements should evaluate to true', () => {
    for (const element of truthy) {
      assert.isTrue(!!element, `Value ${element} is falsy`);
    }
  });
});

describe('falsy', () => {
  it('elements should evaluate to false', () => {
    for (const element of falsy) {
      assert.isFalse(!!element, `Value ${element} is truthy`);
    }
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: AD2070: Help Lorimar troubleshoot his robots- ultrasonic distance analysis
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
The year is 2070 and intelligent connected machines have replaced humans in most things. There are still a few critical jobs for mankind including machine software developer, for writing and maintaining the AI software, and machine forward deployed engineer for controlling the intelligent machines in the field. Lorimar is a forward deployed machine engineer and at any given time he controls thousands of BOT robots through real time interfaces and intelligent automation software. These interfaces are directly connected to his own brain so at all times his mind and the robots are one. They are pre-trained to think on their own but on occasion the human will direct the robot to perform a task.

There is an issue with the ultrasonic sensor data feed from BOT785 currently connected to Lorimar through a real time interface. The data feed from sensor five should be a series of floats representing the relative distance of objects within BOT785's path. The sensor error log has been saved for triage and Lorimar needs to search through the data to determine the mean and standard deviation of the distance variables.

You will be given a list of tuples extracted from the sensor logs:

sensor_data = [('Distance:', 116.28, 'Meters', 'Sensor 5 malfunction =>lorimar'), ('Distance:', 117.1, 'Meters', 'Sensor 5 malfunction =>lorimar'), ('Distance:', 123.96, 'Meters', 'Sensor 5 malfunction =>lorimar'), ('Distance:', 117.17, 'Meters', 'Sensor 5 malfunction =>lorimar')]
Return a tuple with the mean and standard deviation of the distance variables rounded to four decimal places. The variance should be computed using the formula for samples (dividing by N-1).

|Mean| |Standard Deviation|

(118.6275, 3.5779)
*/
type SensorLog = ["Distance:", number, "Meters", string];
type SensorLogs = SensorLog[];
function sensorAnalysis(sensorData: SensorLogs): [number, number] {
    // your code
    return [0, 0];
}
/*
describe("solution", function() {
  it("Basic Tests", function() {
    let sensorData1: SensorLogs = [['Distance:', 116.28, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 117.1, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 123.96, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 117.17, 'Meters', 'Sensor 5 malfunction =>lorimar']];
    assert.deepEqual(sensorAnalysis(sensorData1),[118.6275, 3.5779]);
    let sensorData2: SensorLogs = [['Distance:', 295.68, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 294.78, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 298.21, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 294.84, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 296.54, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 133.84, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 294.41, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 294.82, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 134.61, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 294.86, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.88, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.87, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.47, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 135.5, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.9, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.08, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 171.36, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.08, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.92, 'Meters', 'Sensor 5 malfunction =>lorimar'], ['Distance:', 170.88, 'Meters', 'Sensor 5 malfunction =>lorimar']];
    assert.deepEqual(sensorAnalysis(sensorData2),[215.2265, 68.4014]);
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Wealth equality, finally!
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
The year is 2088 and the Radical Marxist Socialist People's Party (RMSPP) has just seized power in Brazil.

Their first act in power is absolute wealth equality through coercive redistribution.

Create a function that redistributes all wealth equally among all citizens.

Wealth is represented as an array/list where every index is the wealth of a single citizen.
The function should mutate the input such that every index has the same amount of wealth.
MUTATE the input array/list, don't return anything.

See example:

wealth = [5, 10, 6]  # This represents:
                     # citizen 1 has wealth 5
                     # citizen 2 has wealth 10
                     # citizen 3 has wealth 6
                     
redistribute_wealth(wealth) # mutates wealth list
wealth => [7, 7, 7] # wealth has now been equally redistributed
Info:

MUTATE the input array/list, don't return anything
Input is garantueed to hold at least 1 citizen
Wealth of citizen will an integer with minimum 0 (negative wealth not possible)
Handling of floating point error will not be tested

*/
function redistributeWealth(wealth: number[]): void {
    // Mutate wealth
}
/*
describe("Example test cases", function(){
    it ("Simple tests", function(){
    
      let wealthEqual = [5,5,5,5,5]; // already equal
      redistributeWealth(wealthEqual);
      assert.deepEqual(wealthEqual, [5,5,5,5,5])

      let wealthUnequal = [0, 10]; // unequal
      redistributeWealth(wealthUnequal);
      assert.deepEqual(wealthUnequal, [5, 5])

      let wealthSingle = [5]; // single citizen
      redistributeWealth(wealthSingle);
      assert.deepEqual(wealthSingle, [5])

      let wealthFloat = [3,2,2]; // floating point result
      redistributeWealth(wealthFloat);
      assert.deepEqual(wealthFloat, [2.3333333333333335,2.3333333333333335, 2.3333333333333335])
    });
});

*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Authenticate a list of usernames
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Given an array of strings representing a list of usernames, return true only if all usernames comply with your company's guidelines. Return false otherwise.

The guidelines say that the username is valid only if:

it is between 6-10 characters long;
contains at least 1 lowercase letter;
contains at least 1 number;
contains only numbers and lowercase letters.
Examples of arrays that will be tested:

const usernames1 = ['john123', 'alex222', 'sandra1']; // returns true

const usernames2 = ['john123', 'alex222', 'sandraW']; // returns false because sandraW has no number

const usernames3 = ['john_123', 'alex222', 'sandra1']; // returns false because john_123 contains an invalid character

Notes:

You will always be given an array with at least 1 string to check.

*/
function authList(arr: string[]): boolean {
    return false;
}
/*
describe("solution", function(){
  it("fixed tests", function() {
    const usernames1 = ['john123', 'alex222', 'sandra1'];
    const usernames2 = ['john123', 'alex222', 'sandraW'];
    const usernames3 = ['john_123', 'alex222', 'sandra1'];
    const usernames4 = [''];
    const usernames5 = ['123456'];
    const usernames6 = ['abcdef'];
  
    assert.equal(solution.authList(usernames1), true);
    assert.equal(solution.authList(usernames2), false);
    assert.equal(solution.authList(usernames3), false);
    assert.equal(solution.authList(usernames4), false);
    assert.equal(solution.authList(usernames5), false);
    assert.equal(solution.authList(usernames6), false);
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Boxlines
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Boxlines
Given a X*Y*Z box built by arranging 1*1*1 unit boxes, write a function f(X,Y,Z) that returns the number of edges (hence, boxlines) of length 1 (both inside and outside of the box)

Notes
Adjacent unit boxes share the same edges, so a 2*1*1 box will have 20 edges, not 24 edges
X,Y and Z are strictly positive, and can go as large as 2^16 - 1
This is my first kata, so I hope every one will enjoy it <3
*/
function f(x: number, y: number, z: number): number {
    return 1;
}
/*
describe("Boxlines", () => {
  it("Fixed tests", () => {
    assert.strictEqual(f(2,1,1), 20);
    assert.strictEqual(f(1,2,3), 46);
    assert.strictEqual(f(2,2,2), 54);
  });
});

*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: The Baum-Sweet sequence
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Wikipedia: The Baum–Sweet sequence is an infinite automatic sequence of 0s and 1s defined by the rule:

bn = 1 if the binary representation of n contains no block of consecutive 0s of odd length;
bn = 0 otherwise;

for n ≥ 0.

Define a generator function baumSweet that sequentially generates the values of this sequence.

It will be tested for up to 1 000 000 values.

Note that the binary representation of 0 used here is not 0 but the empty string ( which does not contain any blocks of consecutive 0s ).
*/
function* baumSweet(): Generator {
    // your code here
}
/*
describe("Baum-Sweet", function() {
  describe("sequence", () => {
    it("20 elements", () => assert.deepEqual(take(20)(baumSweet()), [1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1]));
    it("1 000 elements", () => assert.deepEqual(take(1e3)(baumSweet()), [1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1]));
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Upstream/Downstream
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Chingel is practicing for a rowing competition to be held on this saturday. He is trying his best to win this tournament for which he needs to figure out how much time it takes to cover a certain distance.

Input

You will be provided with the total distance of the journey, speed of the boat and whether he is going downstream or upstream. The speed of the stream and direction of rowing will be given as a string. Check example test cases!

Output

The output returned should be the time taken to cover the distance. If the result has decimal places, round them to 2 fixed positions.

Show some love ;) Rank and Upvote!


*/
function time(distance: number, boatSpeed: number, stream: String): number {
    return 0;
}
/*
describe("solution", function(){
  it("Basic Tests", function() {
    assert.equal(time(24,10,"Downstream 2"),2);
    assert.equal(time(24,14,"Upstream 2"),2);
    assert.equal(time(54,28,"Downstream 3"),1.74);
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Hëävÿ Mëtäl Ümläüts
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Your retro heavy metal band, VÄxën, originally started as kind of a joke, just because why would anyone want to use the crappy foosball table in your startup's game room when they could be rocking out at top volume in there instead? Yes, a joke, but now all the top tech companies are paying you top dollar to play at their conferences and big product-release events. And just as how in the early days of the Internet companies were naming everything "i"-this and "e"-that, now that VÄxënmänïä has conquered the tech world, any company that doesn't use Hëävÿ Mëtäl Ümläüts in ëvëry pössïblë pläcë is looking hopelessly behind the times.

Well, with great power chords there must also come great responsibility! You need to help these companies out by writing a function that will guarantee that their web sites and ads and everything else will RÖCK ÄS MÜCH ÄS PÖSSÏBLË! Just think about it -- with the licensing fees you'll be getting from Gööglë, Fäcëböök, Äpplë, and Ämäzön alone, you'll probably be able to end world hunger, make college and Marshall stacks free to all, and invent self-driving bumper cars. Sö lët's gët röckïng and röllïng! Pëdal tö thë MËTÄL!

Here's a little cheatsheet that will help you write your function to replace the so-last-year letters a-e-i-o-u-and-sometimes-y with the following totally rocking letters:

A = Ä = \u00c4     E = Ë = \u00cb     I = Ï = \u00cf
O = Ö = \u00d6     U = Ü = \u00dc     Y = Ÿ = \u0178
a = ä = \u00e4     e = ë = \u00eb     i = ï = \u00ef
o = ö = \u00f6     u = ü = \u00fc     y = ÿ = \u00ff
*/
function heavyMetalUmlauts(boringText: String): String {
    return "";
}
/*
describe("solution", function(){
  it("Example tests", function() {
    assert.equal(solution.heavyMetalUmlauts("Announcing the Macbook Air Guitar"), "Ännöüncïng thë Mäcböök Äïr Güïtär");
    assert.equal(solution.heavyMetalUmlauts("Facebook introduces new heavy metal reaction buttons"), "Fäcëböök ïntrödücës nëw hëävÿ mëtäl rëäctïön büttöns");
    assert.equal(solution.heavyMetalUmlauts("Strong sales of Google's VR Metalheadsets send tech stock prices soaring"), "Ströng sälës öf Gööglë's VR Mëtälhëädsëts sënd tëch stöck prïcës söärïng");
    assert.equal(solution.heavyMetalUmlauts("Vegan Black Metal Chef hits the big time on Amazon TV"), "Vëgän Bläck Mëtäl Chëf hïts thë bïg tïmë ön Ämäzön TV");
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Remove Empty Items of Array
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
In this Kata, you will learn how to remove all empty items in an Array.

In JavaScript, empty items in arrays can be declared by [1, 2,,,3, 4] (Multiple commas without a value in that index)

The values that are not given a value are empty items, and usually add up with others to form <# empty items>; In the example, <2 empty items>

[1, 2, <2 empty items>, 3, 4] should be cleared such that it should be [1, 2, 3, 4]

Example:

Before: [1, 2, 3, <5 empty items>, 4, <1 empty item>, null, undefined];

After: [1, 2, 3, 4, null, undefined];
*/
function clean(array: any[]): any[] {
    return [];
}
/*
describe("Basic Tests", (): void => {
  it("Good stuff", (): void => {
    assert.deepEqual(clean([]), [], "Empty Array");
    assert.deepEqual(clean(Array(500000)), [], "5000000 empty items");
    assert.deepEqual(clean([1, 2]), [1, 2], "No empty items here");
    assert.deepEqual(clean([1, 2, , , 3, 4,]), [1, 2, 3, 4], "Two Empty Items");
    assert.deepEqual(clean([1, 2, [],, 3]), [1, 2, [], 3], "Sub-Arrays");
  });
  
  it("Works Against Falsey Values", (): void => {
    assert.deepEqual(clean([undefined, null, NaN, false, '', 0]), [undefined, null, NaN, false, '', 0], "Falsey Values");
    assert.deepEqual(clean([undefined,,,, null,, NaN,, false, '', 4, 3, 2, 1, 0]), [undefined, null, NaN, false, '', 4, 3, 2, 1, 0], "Falsey, Empty, Truthy");
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Help Suzuki complete his chores!
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Suzuki has a long list of chores required to keep the monastery in good order. Each chore can be completed independent of the others and assigned to any student. He needs to assign two chores to each student in a way which minimizes the total duration of the day's work. There will always be an even number of chores and enough students to complete them.

You will be given an array containing the estimated duration of each chore such as:

10 ≤ chores length ≤ 30

chores = [1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9]

Return an array with each students work duration in ascending order such that the last element represents the total duration of the day's work. Each integer in the return array is the sum of each students two assigned chores.

chores = [1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9]

Chore 1 = 2hrs 
Chore 2 = 9hrs

2 + 9 = 11 hours duration

return [7, 8, 8, 10, 10, 11]

*/
function choreAssignment(chores: number[]): number[] {
    //code here
    return [];
}
/*
describe("Testing...", function(){
  it("Basic tests", function(){
    const TESTS:number[][][] =[
      [[5, 2, 1, 6, 4, 4],[7, 7, 8]],
      [[1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9],[7, 8, 8, 10, 10, 11]],
      [[5, 8, 3, 5, 3, 10, 5, 3, 10, 2, 4, 8, 7, 3, 9, 6],[10, 11, 11, 11, 11, 12, 12, 13]],
      [[9, 2, 10, 10, 5, 5, 8, 7, 4, 2, 8, 3, 6, 8, 7, 3, 6, 2],[11, 11, 11, 12, 12, 12, 12, 12, 12]],
      [[1, 6, 5, 5, 1, 10, 10, 9, 2, 10, 3, 9, 5, 4, 5, 6, 1, 9, 1, 8],[10, 10, 11, 11, 11, 11, 11, 11, 12, 12]],
    ]
    for(const [inp,exp] of TESTS){
      assert.deepEqual(choreAssignment(inp), exp);
    }
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Turn the Mars rover to take pictures
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Mars rover is on an important mission to take pictures of Mars.

In order to take pictures of all directions it needs an algorithm to help it turn to face the correct position.

Mars rover can face 4 different directions, that would be N, S, E, W. Every time it needs to turn it will call a command turn passing the current position it is facing and the position it wants to face.

For example:

if it asks turn N E the expected result would be right
if it asks turn N W the expected result would be left
Mars rover can only make one move at a time and it will only request positions that require a single move.

Can you write an algorithm that tells if it should move left or right?

mars rover
*/

type MoveDirection = "left" | "right";
type Direction = "N" | "S" | "E" | "W";

function turn(current: Direction, target: Direction): MoveDirection {
    return "right";
}

/*
describe('turn', () => {
  describe('facing N', () => {
    it('should turn right to face E', () => {
      const actual = turn('N', 'E');
      const expected = 'right';
      
      assert.equal(actual, expected);
    });
  });

  describe('facing S', () => {
    it('should turn left to face E', () => {
      const actual = turn('S', 'E');
      const expected = 'left';
      
      assert.equal(actual, expected);
    });
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Hex Word Sum
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Description
As hex values can include letters A through to F, certain English words can be spelled out, such as CAFE, BEEF, or FACADE. This vocabulary can be extended by using numbers to represent other letters, such as 5EAF00D, or DEC0DE5.

Given a string, your task is to return the decimal sum of all words in the string that can be interpreted as such hex values.

Example
Working with the string "BAG OF BEES":

"BAG"  =  0, as it is not a valid hex value  
"OF"   =  0F   =  15
"BEES" =  BEE5 =  48869
So the result is the sum of these: 48884 (0 + 15 + 48869)

Notes
Inputs are all uppercase and contain no punctuation
0 can be substituted for O
5 can be substituted for S

*/
function hexWordSum(string: string): number {
    return 1;
}
/*
describe('Basic', function() {
  it('Test', function() {
    assert.equal(hexWordSum('DEFACE'), 14613198, 'Should convert hex to decimal correctly')
    assert.equal(hexWordSum('SAFE'), 23294, 'Should be able to interpret "S" as "5"')
    assert.equal(hexWordSum('CODE'), 49374, 'Should be able to interpret "O" as "0"')
    assert.equal(hexWordSum('BUGS'), 0, 'A word that cannot be converted to hex has value of 0')
    assert.equal(hexWordSum(''), 0, 'Empty string returns 0')
    assert.equal(hexWordSum('DO YOU SEE THAT BEE DRINKING DECAF COFFEE'), 13565769, 'Should work with multiple words')
    assert.equal(hexWordSum('ASSESS ANY BAD CODE AND TRY AGAIN'), 10889952, 'Should work with multiple words')
  })
})
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Help Suzuki count his vegetables....
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Help Suzuki count his vegetables....

Suzuki is the master monk of his monastery so it is up to him to ensure the kitchen is operating at full capacity to feed his students and the villagers that come for lunch on a daily basis.

This week there was a problem with his deliveries and all the vegetables became mixed up. There are two important aspects of cooking in his kitchen, it must be done in harmony and nothing can be wasted. Since the monks are a record keeping people the first order of business is to sort the mixed up vegetables and then count them to ensure there is enough to feed all the students and villagers.

You will be given a string with the following vegetables:

"cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"
Return a list of tuples with the count of each vegetable in descending order. If there are any non vegetables mixed in discard them. If the count of two vegetables is the same sort in reverse alphabetical order (Z->A).

(119, "pepper"),
(114, "carrot"),
(113, "turnip"),
(102, "onion"),
(101, "tofu"),
(100, "cabbage"),
(93, "mushroom"),
(90, "cucumber"),
(88, "potato"),
(80, "celery")
*/
function countVegetables(s: string) {
    //your code here
}
/*
describe("solution", function(){
  it("Basic Tests", function() {
  let lst1 = [[2, 'tofu'], [2, 'potato'], [2, 'cucumber'], [2, 'cabbage'], [1, 'turnip'], [1, 'pepper'], [1, 'onion'], [1, 'mushroom'], [1, 'celery'], [1, 'carrot']];
  let s1 = "potato tofu cucumber cabbage turnip pepper onion carrot celery mushroom potato tofu cucumber cabbage";
  assert.equal(JSON.stringify(solution.countVegetables(s1)), JSON.stringify((lst1)));
  let lst2 = [[15, 'turnip'], [15, 'mushroom'], [13, 'cabbage'], [10, 'carrot'], [9, 'potato'], [7, 'onion'], [6, 'tofu'], [6, 'pepper'], [5, 'cucumber'], [4, 'celery']];
  let s2 = `mushroom chopsticks chopsticks turnip mushroom carrot mushroom cabbage mushroom carrot tofu pepper cabbage potato cucumber 
        mushroom mushroom mushroom potato turnip chopsticks cabbage celery celery turnip pepper chopsticks potato potato onion cabbage cucumber
        onion pepper onion cabbage potato tofu carrot cabbage cabbage turnip mushroom cabbage cabbage cucumber cabbage chopsticks turnip pepper
        onion pepper onion mushroom turnip carrot carrot tofu onion tofu chopsticks chopsticks chopsticks mushroom cucumber chopsticks carrot
        potato cabbage cabbage carrot mushroom chopsticks mushroom celery turnip onion carrot turnip cucumber carrot potato mushroom turnip 
        mushroom cabbage tofu turnip turnip turnip mushroom tofu potato pepper turnip potato turnip celery carrot turnip`;
  assert.equal(JSON.stringify(solution.countVegetables(s2)), JSON.stringify((lst2)));
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: New £5 notes collectors!
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
The new £5 notes have been recently released in the UK and they've certainly became a sensation! Even those of us who haven't been carrying any cash around for a while, having given in to the convenience of cards, suddenly like to have some of these in their purses and pockets. But how many of them could you get with what's left from your salary after paying all bills? The programme that you're about to write will count this for you!

Given a salary and the array of bills, calculate your disposable income for a month and return it as a number of new £5 notes you can get with that amount. If the money you've got (or do not!) doesn't allow you to get any £5 notes return 0.

£££ GOOD LUCK! £££
*/

function getNewNotes(salary: number, bills: number[]): number {
    return 0;
}
/*
describe("solution", function(){
  it("BasicTests", function(){
    assert.equal(solution.getNewNotes(2000, [500, 160, 400]),188);
    assert.equal(solution.getNewNotes(1260, [500, 50, 100]),122);
    assert.equal(solution.getNewNotes(3600, [1800, 350, 460, 500, 15]),95);
    assert.equal(solution.getNewNotes(1995, [1500, 19, 44]),86);
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Equalize the array!
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
No description!!!

Input :: [10,20,25,0]

Output :: ["+0", "+10", "+15", "-10"]

Show some love, rank and upvote!


*/
function equalize(array: number[]): string[] {
    return ["hello"];
}
/*
describe("solution", function(){
  it("basicTests", function(){
    assert.deepEqual(solution.equalize([20,30,35,10]),(["+0","+10","+15","-10"]));
    assert.deepEqual(solution.equalize([]),([]));
    assert.deepEqual(solution.equalize([10,12,24,50,0,15,20]),(["+0","+2","+14","+40","-10","+5","+10"]));
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Regexp Basics - is it a six bit unsigned number?
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
mplement String#six_bit_number?, which should return true if given object is a number representable by 6 bit unsigned integer (0-63), false otherwise.

It should only accept numbers in canonical representation, so no leading +, extra 0s, spaces etc.


*/
// String.prototype.sixBitNumber = function(): boolean {
//     // Your code here
//     return true;
//   }
/*
describe("Fixed tests", () => {
  it("Basic tests", () => {
    assert.equal("".sixBitNumber(), false);
    assert.equal("0".sixBitNumber(), true);
    assert.equal("00".sixBitNumber(), false);
    assert.equal("55".sixBitNumber(), true);
    assert.equal("63".sixBitNumber(), true);
    assert.equal("64".sixBitNumber(), false);
    assert.equal("-0".sixBitNumber(), false);
    assert.equal("-5".sixBitNumber(), false);
    assert.equal("05".sixBitNumber(), false);
    assert.equal("5".sixBitNumber(), true);
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: How many urinals are free?
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
How many urinals are free?
In men's public toilets with urinals, there is this unwritten rule that you leave at least one urinal free between you and the next person peeing. For example if there are 3 urinals and one person is already peeing in the left one, you will choose the urinal on the right and not the one in the middle. That means that a maximum of 3 people can pee at the same time on public toilets with 5 urinals when following this rule (Only 2 if the first person pees into urinal 2 or 4).

Imgur Urinals

Your task:
You need to write a function that returns the maximum of free urinals as an integer according to the unwritten rule.

Input
A String containing 1s and 0s (Example: 10001) (1 <= Length <= 20)
A one stands for a taken urinal and a zero for a free one.

Examples
10001 returns 1 (10101)
1001 returns 0 (1001)
00000 returns 3 (10101)
0000 returns 2 (1001)
01000 returns 1 (01010 or 01001)

Note
When there is already a mistake in the input string (for example 011), then return -1

Have fun and don't pee into the wrong urinal ;)
*/
function getFreeUrinals(urinals: string): number {
    return 1;
}
/*
describe("SampleTestsValid", function() {
  it("given 10001", function() { assert.deepEqual(getFreeUrinals("10001"), 1); });
  it("given 1001", function() { assert.deepEqual(getFreeUrinals("1001"), 0); });
  it("given 00000", function() { assert.deepEqual(getFreeUrinals("00000"), 3); });
  it("given 0000", function() { assert.deepEqual(getFreeUrinals("0000"), 2); });
  it("given 01000", function() { assert.deepEqual(getFreeUrinals("01000"), 1); });
  it("given 00010", function() { assert.deepEqual(getFreeUrinals("00010"), 1); });
  it("given 10000", function() { assert.deepEqual(getFreeUrinals("10000"), 2); });
  it("given 1", function() { assert.deepEqual(getFreeUrinals("1"), 0); });
  it("given 0", function() { assert.deepEqual(getFreeUrinals("0"), 1); });
  it("given 10", function() { assert.deepEqual(getFreeUrinals("10"), 0); });
});

describe("SampleTestsWrong", function() {
  it("given 110", function() { assert.deepEqual(getFreeUrinals("110"), -1); });
  it("given 101100001", function() { assert.deepEqual(getFreeUrinals("101100001"), -1); });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Closure Counter
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Closure Counter
Define the function counter that returns a function that returns an increasing value.
The first value should be 1.
You're going to have to use closures.
Example:
const newCounter = counter();
newCounter() // 1
newCounter() // 2
Closure:
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures


*/
// function counter(): Function {
//     return;
//   };
/*
describe("Testing counter", function() {
  it("should return a function", function() {
    assert.strictEqual(typeof(counter()), "function");
  });
  it("should return 1 when the returned function is invoked", function() {
    assert.strictEqual(counter()(), 1);
  });
  it("should increment and return the number each time the function is invoked", function() {
    const counterFunction = counter();
    assert.strictEqual(counterFunction(), 1);
    assert.strictEqual(counterFunction(), 2);
  });
  it("should have two different accumulators if two counters are created", function() {
    const counterOne = counter();
    const counterTwo = counter();
    assert.strictEqual(counterOne(), 1);
    assert.strictEqual(counterOne(), 2);
    assert.strictEqual(counterTwo(), 1);
    assert.strictEqual(counterTwo(), 2);
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Do you know how to make Query String?
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Query string is a way to serialize object, which is used in HTTP requests. You may see it in URL:

codewars.com/kata/search/?q=querystring
The part q=querystring represents that parameter q has value querystring. Also sometimes querystring used in HTTP POST body:

POST /api/users
Content-Type: application/x-www-form-urlencoded

username=warrior&kyu=1&age=28
The string username=warrior&kyu=1&age=28 represents an entity (user in this example) with username equals warrior, kyu equals 1 and age equals 28. The entity may be represented as object:

{
  "username": "warrior",
  "kyu": 1,
  "age": 28
}
Sometimes there are more than one value for property:

{
  "name": "shirt",
  "colors": [ "white", "black" ]
}
Then it represents as repeated param:

name=shirt&colors=white&colors=black
So, your task is to write a function that convert an object to query string:

to_query_string({ "bar": [ 2, 3 ], "foo": 1 }) # => "bar=2&bar=3&foo=1"
Next you may enjoy kata Objectify a URL Query String.
*/
const toQueryString = (obj: object): string => {
    return "";
};
/*
describe('toQueryString', () => {
  it('should stringify some objects', () => {
    assert.strictEqual(
      toQueryString({ foo: 1, bar: 2 }),
      'foo=1&bar=2'
    )
  })

  it('should stringify array values too', () => {
    assert.strictEqual(
      toQueryString({ foo: [1, 3], bar: [2, 4] }),
      'foo=1&foo=3&bar=2&bar=4'
    )
  })

  it('should stringify not only foo and bar', () => {
    assert.strictEqual(
      toQueryString({ a: 'Z', b: 'Y', c: 'X', d: 'W', e: 'V', f: 'U', g: 'T' }),
      'a=Z&b=Y&c=X&d=W&e=V&f=U&g=T'
    )
  })
})
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Ranking position
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
n some ranking people collects points. The challenge is sort by points and calulate position for every person. But remember if two or more persons have same number of points, they should have same position number and sorted by name (name is unique).

For example: Input structure:

[
  {
    name: "John",
    points: 100,
  },
  {
    name: "Bob",
    points: 130,
  },
  {
    name: "Mary",
    points: 120,
  },
  {
    name: "Kate",
    points: 120,
  },
]
Output should be:

[
  {
    name: "Bob",
    points: 130,
    position: 1,
  },
  {
    name: "Kate",
    points: 120,
    position: 2,
  },
  {
    name: "Mary",
    points: 120,
    position: 2,
  },
  {
    name: "John",
    points: 100,
    position: 4,
  },
]
*/

type inputMan = {
    name: string;
    points: number;
};

type outputMan = {
    name: string;
    points: number;
    position: number;
};

function ranking(people: inputMan[]): outputMan[] {
    return [];
}

/*
describe("ranking", function() {
  it("Basic test, no. 1", () =>  {
    const input: inputMan[] = [
      {
        name: "John",
        points: 100,
      },
      {
        name: "Bob",
        points: 130,
      },
      {
        name: "Mary",
        points: 120,
      },
      {
        name: "Kate",
        points: 120,
      },
    ];
    
    const output: outputMan[] = [
      {
        name: "Bob",
        points: 130,
        position: 1,
      },
      {
        name: "Kate",
        points: 120,
        position: 2,
      },
      {
        name: "Mary",
        points: 120,
        position: 2,
      },
      {
        name: "John",
        points: 100,
        position: 4,
      },
    ]
  
    assert.deepEqual(ranking(input), output);
  });
  
  it("Basic test, no. 2", () =>  {
    const input: inputMan[] = [
      {
        name: "Bob",
        points: 130,
      },
      {
        name: "Mary",
        points: 120,
      },
      {
        name: "John",
        points: 100,
      },
    ];
    
    const output: outputMan[] = [
      {
        name: "Bob",
        points: 130,
        position: 1,
      },
      {
        name: "Mary",
        points: 120,
        position: 2,
      },
      {
        name: "John",
        points: 100,
        position: 3,
      },
    ]
  
    assert.deepEqual(ranking(input), output);
  });
  
  it("Basic test, no. 3", () =>  {
    const input: inputMan[] = [
      {
        name: "Bob",
        points: 100,
      },
      {
        name: "Mary",
        points: 100,
      },
      {
        name: "John",
        points: 100,
      },
    ];
    
    const output: outputMan[] = [
      {
        name: "Bob",
        points: 100,
        position: 1,
      },
      {
        name: "John",
        points: 100,
        position: 1,
      },
      {
        name: "Mary",
        points: 100,
        position: 1,
      },
    ]
  
    assert.deepEqual(ranking(input), output);
  });
  
  it("Basic test, no. 4", () =>  {
    const input: inputMan[] = [
      {
        name: "John",
        points: 100,
      },
    ];
    
    const output: outputMan[] = [
      {
        name: "John",
        points: 100,
        position: 1,
      },
    ];
  
    assert.deepEqual(ranking(input), output);
  });
  
  it("Basic test, no. 5", () =>  {
    const input: inputMan[] = [];
    const output: outputMan[] = [];
  
    assert.deepEqual(ranking(input), output);
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: GRACEFUL TIPPING
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Adding tip to a restaurant bill in a graceful way can be tricky, thats why you need make a function for it.

The function will receive the restaurant bill (always a positive number) as an argument. You need to 1) add at least 15% in tip, 2) round that number up to an elegant value and 3) return it.

What is an elegant number? It depends on the magnitude of the number to be rounded. Numbers below 10 should simply be rounded to whole numbers. Numbers 10 and above should be rounded like this:

10 - 99.99... ---> Round to number divisible by 5

100 - 999.99... ---> Round to number divisible by 50

1000 - 9999.99... ---> Round to number divisible by 500

And so on...

Good luck!
*/
/*
describe("graceful tipping", function() {
  
  it("given 7", function() {
    assert.equal(gracefulTipping(7), 9);
  });
  
  it("given 12", function() {
    assert.equal(gracefulTipping(12), 15);
  });
  
  it("given 86", function() {
    assert.equal(gracefulTipping(86), 100);
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Regexp Basics - is it a eight bit unsigned number?
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Implement String#eight_bit_number?, which should return true if given object is a number representable by 8 bit unsigned integer (0-255), false otherwise.

It should only accept numbers in canonical representation, so no leading +, extra 0s, spaces etc.


*/
// String.prototype.eightBitNumber = function(): boolean {
//     // Your code here
//     return true;
//   }
/*
describe("Sample tests", () => {
  it("Basic tests", () => {
    assert.equal("".eightBitNumber(), false);
    assert.equal("0".eightBitNumber(), true);
    assert.equal("00".eightBitNumber(), false);
    assert.equal("55".eightBitNumber(), true);
    assert.equal("042".eightBitNumber(), false);
    assert.equal("123".eightBitNumber(), true);
    assert.equal("255".eightBitNumber(), true);
    assert.equal("256".eightBitNumber(), false);
    assert.equal("999".eightBitNumber(), false);
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Say "Hello World" JS Style
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Write the definition of the function "say" such that calling this:

say("Hello")("World")
returns "Hello World"
*/
const say = (
    string1: string // your code here
) =>
    /*
describe("solution", function(){
  it('should work for basic tests', () => {
    assert.equal(solution.say('Hello')('World'), 'Hello World');  
  });
});
*/

    // console.log();
    // console.log();
    // console.log();
    // console.log();

    //============= OTHER CODEWARS SOLUTIONS: =============

    // 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
    // TITLE: GEMATRIA FOR ALL
    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
    // KEYWORDS:
    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
    // SOURCE:
    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

    /*
Gematria is an Assyro-Babylonian-Greek system of code and numerology later adopted into Jewish culture. The system assigns numerical value to a word or a phrase in the belief that words or phrases with identical numerical values bear some relation to each other or bear some relation to the number itself. While more commonly used on Hebrew words, there is also an English version.

Each letter has a value and the gematrian value of a word or a phrase is the sum of those values. The code takes a word or an expression and returns the gematrian value of it.

The calculation is case insensitive and counts no spaces.

Example: The gematrian value of "love" is 20+50+700+5 = 775

‎These are the values of the different letters:

a=1, b=2, c=3, d=4, e=5, f=6, g=7, h=8, i=9, k=10, l=20, m=30, n=40, o=50, p=60, q=70, r=80, s=90, t=100, u=200, x=300, y=400, z=500, j=600, v=700, w=900
*/
    function gematria(str: string): number {
        return 0;
    };
/*
describe('Fixed tests', () => {
  it('Tests', () => {
    assert.equal(gematria("love"), 775);
    assert.equal(gematria("Devil"), 738);
    assert.equal(gematria("Coding is fun"), 458);
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: WAITING ROOM
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
There's a waiting room with N chairs set in single row. Chairs are consecutively numbered from 1 to N. First is closest to the entrance (which is exit as well).

For some reason people choose a chair in the following way

Find a place as far from other people as possible
Find a place as close to exit as possible
All chairs must be occupied before the first person will be served

So it looks like this for 10 chairs and 10 patients

Chairs	1	2	3	4	5	6	7	8	9	10
Patients	1	7	5	8	3	9	4	6	10	2
Your task is to find last patient's chair's number.

Input: number of chairs N, an integer greater than 2.
Output: a positive integer, the last patient's chair number.
Have fun :)
*/
function lastChair(n: number): number {
    return 1;
}
/*
describe('lastChair', () => {
  it('should return 10 for n = 9', () => {
    assert.equal(lastChair(10), 9);
  });
});

*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: STACKED BALLS - 2D
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Background
I have stacked some pool balls in a triangle.

Like this,

pool balls
Kata Task
Given the number of layers of my stack, what is the total height?

Return the height as multiple of the ball diameter.

Example
The image above shows a stack of 5 layers.

Notes
layers >= 0
approximate answers (within 0.001) are good enough

*/
function stackHeight2d(layers: number) {
    // your code here
}
/*
describe("Basic tests", function() {
  it("test0", () => assert.closeTo(stackHeight2d(0), 0.0, 0.001));
  it("test1", () => assert.closeTo(stackHeight2d(1), 1.0, 0.001));
  it("test2", () => assert.closeTo(stackHeight2d(2), 1.866, 0.001));
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: CALCULATE PARITY BIT
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
A parity bit, or check bit, is a bit added to a string of bits to ensure that the total number of 1-bits in the string is even or odd. Parity bits are used as the simplest form of error detecting code.

You have two parameters, one being the wanted parity (always 'even' or 'odd'), and the other being the binary representation of the number you want to check.

Your task is to return an integer (0 or 1), whose parity bit you need to add to the binary representation so that the parity of the resulting string is as expected.

Example:

  Parity: 'even'
  Bin: '0101010'
  Result: 1
Because there is an odd number of 1-bits (3) you need to put another 1 to it to get an even number of 1-bits.

For more information: https://en.wikipedia.org/wiki/Parity_bit
*/
function checkParity(parity: string, bin: string) {
    // have fun!
}
/*
describe("Sample tests", function() {
  it("Tests", function() {
    assert.equal(checkParity('even','101010'), 1)
    assert.equal(checkParity('odd','101010'), 0)
    assert.equal(checkParity('even','101011'), 0)
    assert.equal(checkParity('odd','101011'), 1)
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: HEX HASH SUM
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Complete the function that accepts a valid string and returns an integer.

Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).

Examples
"Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
"Hello, World!"  ==> 91
"Forty4Three"    ==> 113

*/
function hexHash(code: string): number {
    return 1;
}
/*
describe("Basic tests", function() {
  it("Yo", function() {
    assert.equal(solution.hexHash('Yo'), 20);
  });
   it("Hello, World!", function() {
    assert.equal(solution.hexHash('Hello, World!'), 91);
  });
   it("Forty4Three", function() {
    assert.equal(solution.hexHash('Forty4Three'), 113);
  });
});

*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: TAP CODE TRANSLATION
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Tap Code Translation
Tap code is a way to communicate using a series of taps and pauses for each letter. In this kata, we will use dots . for the taps and whitespaces for the pauses.

The number of taps needed for each letter matches its coordinates in the following polybius square (note the c/k position). Then you "tap" the row, a pause, then the column. Each letter is separated from others with a pause too.

   1  2  3  4  5
1  A  B C\K D  E
2  F  G  H  I  J
3  L  M  N  O  P
4  Q  R  S  T  U
5  V  W  X  Y  Z
Input:
A lowercase string of a single word (no whitespaces or punctuation, only letters).

Output:
The encoded string as taps and pauses.

Examples
text = "dot"
  "D" = (1, 4) = ". ...."
  "O" = (3, 4) = "... ...."
  "T" = (4, 4) = ".... ...."
  
output: ". .... ... .... .... ...."


"example" -> ". ..... ..... ... . . ... .. ... ..... ... . . ....."
"more"    -> "... .. ... .... .... .. . ....."
Happy coding!
*/
function tapCodeTranslation(text: string): string {
    return "...";
}
/*
describe("Tests", () => {
  it("Sample tests", () => {
    assert.equal(tapCodeTranslation("test"), ".... .... . ..... .... ... .... ....", `Text: "test"`);
    assert.equal(tapCodeTranslation("taps"), ".... .... . . ... ..... .... ...", `Text: "taps"`);
    assert.equal(tapCodeTranslation("knocks"), ". ... ... ... ... .... . ... . ... .... ...", `Text: "knocks"`);
  });
});

*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: Simple Fun #88: Sort By Height
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Task
Some people are standing in a row in a park. There are trees between them which cannot be moved.

Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

Example
For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be

[-1, 150, 160, 170, -1, -1, 180, 190].

Input/Output
[input] integer array a

If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position.

Constraints:

5 ≤ a.length ≤ 30,

-1 ≤ a[i] ≤ 200.

[output] an integer array

Sorted array a with all the trees untouched.
*/
function sortByHeight(list: number[]): number[] {
    return [1]; //your code here
}
/*
describe("Basic Tests", () => {
  it("should works for basic tests.", () => {
    expect(solution.sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])).to.deep.equal([-1, 150, 160, 170, -1, -1, 180, 190]);
    expect(solution.sortByHeight([-1, -1, -1, -1, -1])).to.deep.equal([-1, -1, -1, -1, -1]);
    expect(solution.sortByHeight([4, 2, 9, 11, 2, 16])).to.deep.equal([2, 2, 4, 9, 11, 16]);
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: SQUARE PI'S
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Everybody loves pi, but what if pi were a square? Given a number of digits digits, find the smallest integer whose square is greater or equal to the sum of the squares of the first digits digits of pi, including the 3 before the decimal point.

Note: Test cases will not extend beyond 100 digits; the first 100 digits of pi are pasted here for your convenience:

31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679
Examples
digits   = 1   #  [3]
expected = 3   #  sqrt(3^2) = 3


digits   = 3   #  [3, 1, 4]
expected = 6   #  sqrt(3^2 + 1^2 + 4^2) = 5.099 --> 6
*/
function squarePi(digits: number): number {
    //Code probably goes here
    return digits;
}
/*
describe("fixedTests", function() {
  it("5 digits", function() {
    assert.deepEqual(squarePi(5), 8);
  });
  it("10 digits", function() {
    assert.deepEqual(squarePi(10), 15);
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: NUMBER OF RECANGLES IN GRID
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Given a grid of size m x n, calculate the total number of rectangles contained in this rectangle. All integer sizes and positions are counted.

Examples:

numberOfRectangles(3, 2) == 18
numberOfRectangles(4, 4) == 100
Here is how the 3x2 grid works (Thanks to GiacomoSorbi for the idea):

1 rectangle of size 3x2:

[][][]
[][][]
2 rectangles of size 3x1:

[][][]
4 rectangles of size 2x1:

[][]
2 rectangles of size 2x2

[][]
[][]
3 rectangles of size 1x2:

[]
[]
6 rectangles of size 1x1:

[]
As you can see (1 + 2 + 4 + 2 + 3 + 6) = 18, and is the solution for the 3x2 grid.

There is a very simple solution to this!
*/
function numberOfRectangles(m: number, n: number): number {
    return 1;
}
/*
describe("Number of Rectangles in a Grid", () => {
  it("Fixed tests", () => {
    assert.strictEqual(numberOfRectangles(4, 4), 100);
    assert.strictEqual(numberOfRectangles(5, 5), 225);
  });
});

*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: SPINNING RINGS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Imagine two rings with numbers on them. The inner ring spins clockwise (decreasing by 1 each spin) and the outer ring spins counter clockwise (increasing by 1 each spin). We start with both rings aligned on 0 at the top, and on each move we spin each ring one increment. How many moves will it take before both rings show the same number at the top again?

The inner ring has integers from 0 to innerMax and the outer ring has integers from 0 to outerMax, where innerMax and outerMax are integers >= 1.

e.g. if innerMax is 2 and outerMax is 3 then after
1 move: inner = 2, outer = 1
2 moves: inner = 1, outer = 2
3 moves: inner = 0, outer = 3
4 moves: inner = 2, outer = 0
5 moves: inner = 1, outer = 1
Therefore it takes 5 moves for the two rings to reach the same number
Therefore spinningRings(2, 3) = 5
e.g. if innerMax is 3 and outerMax is 2 then after
1 move: inner = 3, outer = 1
2 moves: inner = 2, outer = 2
Therefore it takes 2 moves for the two rings to reach the same number
spinningRings(3, 2) = 2
for a bigger challenge, check out the Performance Version of this kata by @Voile


*/
function spinningRings(innerMax: number, outerMax: number): number {
    let numberOfSpinsTillRingsAreEqual = 0;
    // your code here
    return numberOfSpinsTillRingsAreEqual;
}
/*
describe("Spinning Rings", function() {
  it("should work for a few cases", function() {
    assert.strictEqual(spinningRings(2, 3), 5);
    assert.strictEqual(spinningRings(3, 2), 2);
    assert.strictEqual(spinningRings(1, 1), 1);
    assert.strictEqual(spinningRings(2, 2), 3);
    assert.strictEqual(spinningRings(3, 3), 2);
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: WHICH SECTION DID U SCROLL TO
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Your website is divided vertically in sections, and each can be of different size (height).
You need to establish the section index (starting at 0) you are at, given the scrollY and sizes of all sections.
Sections start with 0, so if first section is 200 high, it takes 0-199 "pixels" and second starts at 200.

Example:
getSectionIdFromScroll( 300, [300,200,400,600,100] )

will output number 1 as it's the second section.

getSectionIdFromScroll( 1600, [300,200,400,600,100] )

will output number -1 as it's past last section.

Given the scrollY integer (always non-negative) and an array of non-negative integers (with at least one element), calculate the index (starting at 0) or -1 if scrollY falls beyond last section (indication of an error).


*/
function getSectionId(scroll: number, sizes: number[]) {
    // your code here
}
/*
describe("Basic tests", function() {
  testing(1, [300, 200, 400, 600, 100], 0);
  testing(299, [300, 200, 400, 600, 100], 0);
  testing(300, [300, 200, 400, 600, 100], 1);
  testing(1599, [300, 200, 400, 600, 100], 4);
  testing(1600, [300, 200, 400, 600, 100], -1);
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: COLLISION DETECTION
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Create a function to determine whether or not two circles are colliding. You will be given the position of both circles in addition to their radii:

function collision(x1, y1, radius1, x2, y2, radius2) {
  // collision?
}
If a collision is detected, return true. If not, return false.

Here's a geometric diagram of what the circles passed in represent:

alt text
*/
function collision(
    x1: number,
    y1: number,
    r1: number,
    x2: number,
    y2: number,
    r2: number
): boolean {
    throw new Error("Not implemented");
}
/*
describe("Solution", function() {
  it("Collisions", function() {
    assert.strictEqual(collision(1, 1, 1, 1.1, 1.1, 0.1), true, "Expected true.");
    assert.strictEqual(collision(-1, 1, 10, -10.1, 1.1, 1), true, "Expected true.");
    assert.strictEqual(collision(-5, 5, 5.0001, 5, -5, 5*Math.sqrt(5)), true, "Expected true.");
  });
  it("Not Collisions", function() {
    assert.strictEqual(collision(1, 1, 0.01, 1, 1.1, 0.01), false, "Expected false.");
    assert.strictEqual(collision(-1, 1, 6, -10.1, 1.1, 1), false, "Expected false.");
    assert.strictEqual(collision(-5, 5, 5.0001, 5, -5, 4*Math.sqrt(5)), false, "Expected false.");
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: POLYDIVISEBLE NUMBERS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Most of this problem is by the original author of the harder kata, I just made it simpler.

I read a book recently, titled "Things to Make and Do in the Fourth Dimension" by comedian and mathematician Matt Parker ( Youtube ), and in the first chapter of the book Matt talks about problems he likes to solve in his head to take his mind off the fact that he is in his dentist's chair, we've all been there!

The problem he talks about relates to polydivisible numbers, and I thought a kata should be written on the subject as it's quite interesting. (Well it's interesting to me, so there!)

Polydivisib... huh what?
So what are they?

A polydivisible number is divisible in an unusual way. The first digit is cleanly divisible by 1, the first two digits are cleanly divisible by 2, the first three by 3, and so on.

Examples
Let's take the number 1232 as an example.

1     / 1 = 1     // Works
12    / 2 = 6     // Works
123   / 3 = 41    // Works
1232  / 4 = 308   // Works
1232 is a polydivisible number.

However, let's take the number 123220 and see what happens.

 1      /1 = 1    // Works
 12     /2 = 6    // Works
 123    /3 = 41   // Works
 1232   /4 = 308  // Works
 12322  /5 = 2464.4         // Doesn't work
 123220 /6 = 220536.333...  // Doesn't work
123220 is not polydivisible.

Your job: check if a number is polydivisible or not.
Return true if it is, and false if it isn't.

Note: All inputs will be valid numbers between 0 and 2^53-1 (9,007,199,254,740,991) (inclusive).
Note: All single digit numbers (including 0) are trivially polydivisible. Note: Except for 0, no numbers will start with 0.


*/
function polydivisible(x: number): boolean {
    throw new Error("Not implemented yet");
    // return false;
}

/*
describe("Example Cases", (): void => {
  it("sample test", (): void => {
    assert.strictEqual(polydivisible(1232), true);
    assert.strictEqual(polydivisible(123220), false);
  });
});

*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: DOUBLETON NUMBER
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
We will call a natural number a "doubleton number" if it contains exactly two distinct digits. For example, 23, 35, 100, 12121 are doubleton numbers, and 123 and 9980 are not.

For a given natural number n (from 1 to 1 000 000), you need to find the next doubleton number. If n itself is a doubleton, return the next bigger than n.

Examples:
doubleton(120) == 121
doubleton(1234) == 1311
doubleton(10) == 12
*/
function doubleton(num: number): number {
    return 1;
}
/*
describe("Fixed tests",()=>{
   it(`Testing for number 120: received ${doubleton(120)}`,()=>{
      assert.equal(doubleton(120), 121, "Wrong result. It should be 121" );
   });
   it(`Testing for number 1234: received ${doubleton(1234)}`,()=>{
      assert.equal(doubleton(1234), 1311, "Wrong result. It should be 1311" );
   });
   it(`Testing for number 1: received ${doubleton(1)}`,()=>{
      assert.equal(doubleton(1), 10, "Wrong result. It should be 10" );
   });
   it(`Testing for number 10: received ${doubleton(10)}`,()=>{
      assert.equal(doubleton(10), 12, "Wrong result. It should be 12" );
   });
});  
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: HERO'S ROOT
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
One of the first algorithm used for approximating the integer square root of a positive integer n is known as "Hero's method", named after the first-century Greek mathematician Hero of Alexandria who gave the first description of the method. Hero's method can be obtained from Newton's method which came 16 centuries after.

We approximate the square root of a number n by taking an initial guess x, an error e and repeatedly calculating a new approximate integer value x using: (x + n / x) / 2; we are finished when the previous x and the new x have an absolute difference less than e.

We supply to a function (int_rac) a number n (positive integer) and a parameter guess (positive integer) which will be our initial x. For this kata the parameter 'e' is set to 1.

Hero's algorithm is not always going to come to an exactly correct result! For instance: if n = 25 we get 5 but for n = 26 we also get 5. Nevertheless 5 is the integer square root of 26.

The kata is to return the count of the progression of integer approximations that the algorithm makes.

Reference:

https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method

Some examples:

int_rac(25,1): follows a progression of [1,13,7,5] so our function should return 4.

int_rac(125348,300): has a progression of [300,358,354] so our function should return 3.

int_rac(125348981764,356243): has a progression of [356243,354053,354046] so our function should return 3.

*/
class G964AA {
    public static intRac(n: number, guess: number): number {
        return 1;
    }
}
/*
describe("Fixed Tests intRac", function() {
    it("Basic tests", function() {
        testing(25, 1, 4);
        testing(125348, 300, 3);
        testing(236, 12, 2);
        testing(48981764, 8000, 3);
    });
});

*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: POINT IN A UNIT CIRCLE
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Task
Write a function that returns true if a given point (x,y) is inside of a unit circle (that is, a "normal" circle with a radius of one) centered at the origin (0,0) and returns false if the point is outside.

Input
x: The first coordinate of the given point.
y: The second coordinate of the given point.
Notes
The region bounded by the circle is considered to be an open disk, so points on the boundary of the circle should return false.
We are using the euclidean metric.
*/
function pointInCircle(x: number, y: number): boolean {
    return true;
}
/*
describe("Tests", () => {
  it("test", () => {
    assert.isTrue(pointInCircle(0,0), 'Origin is inside');
    assert.isFalse(pointInCircle(0, -1), '(0, -1) is outside');
    assert.isFalse(pointInCircle(2,0), '(2, 0) is outside');
    assert.isTrue(pointInCircle(0,0.9), '(0, 0.9) is inside');
    assert.isTrue(pointInCircle(0.5,0.5), '(0.5, 0.5) is inside');
  });
});

*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: ADDING VALUES OF ARRAYS IN A SHIFTED WAY
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
#Adding values of arrays in a shifted way

You have to write a method, that gets two parameter:

1. An array of arrays with int-numbers
2. The shifting value
#The method should add the values of the arrays to one new array.

The arrays in the array will all have the same size and this size will always be greater than 0.
The shifting value is always a value from 0 up to the size of the arrays.
There are always arrays in the array, so you do not need to check for null or empty.

#1. Example:

[[1,2,3,4,5,6], [7,7,7,7,7,-7]], 0

1,2,3,4,5,6
7,7,7,7,7,-7

--> [8,9,10,11,12,-1]
#2. Example

[[1,2,3,4,5,6], [7,7,7,7,7,7]], 3

1,2,3,4,5,6
      7,7,7,7,7,7

--> [1,2,3,11,12,13,7,7,7]
#3. Example

[[1,2,3,4,5,6], [7,7,7,-7,7,7], [1,1,1,1,1,1]], 3


1,2,3,4,5,6
      7,7,7,-7,7,7
            1,1,1,1,1,1

--> [1,2,3,11,12,13,-6,8,8,1,1,1]
*/
function addingShifted(arrayOfArrays: number[][], shift: number): number[] {
    return arrayOfArrays[0];
}
/*
describe("Kata Tests", function(){
  it("Basic Tests", function(){
    var arrayOfArrays = [[1, 2, 3, 4, 5, 6], [7, 7, 7, 7, 7, -7]];
    var expected = [8, 9, 10, 11, 12, -1 ];
    var result = addingShifted(arrayOfArrays, 0);
    assert.deepEqual(result, expected);
    
    arrayOfArrays = [[1, 2, 3, 4, 5, 6],[7, 7, 7, 7, 7, 7]];
    expected = [ 1, 2, 3, 11, 12, 13, 7, 7, 7];
    var result = addingShifted(arrayOfArrays, 3);
    assert.deepEqual(result, expected);
      
    arrayOfArrays = [[1, 2, 3, 4, 5, 6], [7, 7, 7, -7, 7, 7],[1, 1, 1, 1, 1, 1]];
    expected = [1, 2, 3, 11, 12, 13, -6, 8, 8, 1, 1, 1];
    var result = addingShifted(arrayOfArrays, 3);
    assert.deepEqual(result, expected);
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: UNFLATTEN A LIST (EASY)
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
#Unflatten a list (Easy)

There are several katas like "Flatten a list". These katas are done by so many warriors, that the count of available list to flattin goes down!

So you have to build a method, that creates new arrays, that can be flattened!

#Shorter: You have to unflatten a list/an array.

You get an array of integers and have to unflatten it by these rules:

- You start at the first number.
- If this number x is smaller than 3, take this number x direct 
  for the new array and continue with the next number.
- If this number x is greater than 2, take the next x numbers (inclusive this number) as a 
  sub-array in the new array. Continue with the next number AFTER this taken numbers.
- If there are too few numbers to take by number, take the last available numbers.
The given array will always contain numbers. There will only be numbers > 0.

Example:

 [1,4,5,2,1,2,4,5,2,6,2,3,3] -> [1,[4,5,2,1],2,[4,5,2,6],2,[3,3]]

Steps: 
1. The 1 is added directly to the new array.
2. The next number is 4. So the next 4 numbers (4,5,2,1) are added as sub-array in the new array.
3. The 2 is added directly to the new array.
4. The next number is 4. So the next 4 numbers (4,5,2,6) are added as sub-array in the new array.
5. The 2 is added directly to the new array.
6. The next number is 3. So the next 3 numbers would be taken. There are only 2, 
   so take these (3,3) as sub-array in the new array.
There is a harder version of this kata!
<a href="https://www.codewars.com/kata/57e5aa1d7fbcc988800001ae"taget=_blank>Unflatten a list (Harder than easy)

Have fun coding it and please don't forget to vote and rank this kata! :-)


*/
function unflatten(flatArray: any[]): any[] {
    return flatArray;
}
/*
describe("solution", function(){
  it("Basic Tests", function(){
    var input = [ 3, 5, 2, 1 ];
    var expected = [[ 3,5,2 ], 1 ];

    assert.deepEqual(unflatten(input), expected);
    
    input = [ 1, 4, 5, 2, 1, 2, 4, 5, 2, 6, 2, 3, 3 ];
    expected = [1, [4,5,2,1], 2, [4,5,2,6], 2, [3, 3] ];

    assert.deepEqual(unflatten(input), expected);
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: TEST YOUR KNOWLEDGE ON FUNCTION SCOPE
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Write a function that adds from two invocations.

All inputs will be integers.

add(3)(4)  // 7
add(12)(20) // 32
*/
/*
describe("Basic tests", function() {
  it("Testing : ", function() {
    assert.strictEqual(add(2)(5), 7, 'Should return the addition of these invocations!');
    assert.strictEqual(add(14)(25), 39, 'Should return the addition of these invocations!');
    assert.strictEqual(add(10)(10), 20, 'Should return the addition of these invocations!');
    assert.strictEqual(add(0)(0), 0, 'Should return the addition of these invocations!');
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: TARGET DATE
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
You have an amount of money a0 > 0 and you deposit it with an interest rate of p percent divided by 360 per day on the 1st of January 2016. You want to have an amount a >= a0.

Task:
The function date_nb_days (or dateNbDays...) with parameters a0, a, p will return, as a string, the date on which you have just reached a.

Example:
date_nb_days(100, 101, 0.98) --> "2017-01-01" (366 days)

date_nb_days(100, 150, 2.00) --> "2035-12-26" (7299 days)

Notes:
The return format of the date is "YYYY-MM-DD"
The deposit is always on the "2016-01-01"
Don't forget to take the rate for a day to be p divided by 36000 since banks consider that there are 360 days in a year.
You have: a0 > 0, p% > 0, a >= a0
*/
function dateNbDays(a0: number, a: number, p: number): string {
    return "hello";
}
/*
describe("Fixed Tests dateNbDays", function() {
  it("Basic tests", function() {
    assert.strictEqual(dateNbDays(4281, 5087, 2), "2024-07-03");
    assert.strictEqual(dateNbDays(4620, 5188, 2), "2021-09-19");
    assert.strictEqual(dateNbDays(9999, 11427, 6), "2018-03-13");
    assert.strictEqual(dateNbDays(3525, 4822, 3), "2026-04-18");
    assert.strictEqual(dateNbDays(5923, 6465, 6), "2017-06-10");
    assert.strictEqual(dateNbDays(4254, 4761, 8), "2017-05-22");
    assert.strictEqual(dateNbDays(1244, 2566, 4), "2033-11-04");
    assert.strictEqual(dateNbDays(6328, 7517, 5), "2019-05-25");
    assert.strictEqual(dateNbDays(2920, 3834, 2), "2029-06-03");
    assert.strictEqual(dateNbDays(7792, 8987, 4), "2019-07-09");
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: ALL STAR CHALLENGE #14 - FIND THE MEDIAN
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Your non-profit company has assigned you the task of calculating some simple statistics on donations. You have an array of integers, representing various amounts of donations your company has been given. In particular, you're interested in the median value for donations.

The median is the middle number of a sorted list of numbers. If the list is of even length, the 2 middle values are averaged.

Write a function that takes an array of integers as an argument and returns the median of those integers.

Notes:

The sorting step is vital.
Input arrays are non-empty.
Examples
Median of [33,99,100,30,29,50] is 41.5.
Median of [3,2,1] is 2.


*/

const median = (numArr: number[]): number => {
    const sortedArr: number[] = numArr.sort((a, b) => a - b);
    // console.log(sortedArr);

    const solution: number =
        sortedArr.length & 1
            ? sortedArr[(sortedArr.length - 1) / 2]
            : (sortedArr[sortedArr.length / 2] +
                  sortedArr[sortedArr.length / 2 - 1]) /
              2;

    return solution;
};

/*
describe("solution", function(){
  it("basic Tests", function(){
    assert.equal(median([1,2,3,4]),2.5)
    assert.equal(median([3,4,1,2,5]),3)
    assert.equal(median([10,29,23,94,76,96,5,85,4,33,47,41,87]),41)
  });
})
*/

// console.log(median([1, 2, 3, 4]));
// console.log(median([3, 4, 1, 2, 5]));
// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function median2(n: number[]): number {
    const sorted = n.sort((a, b) => a - b);
    const lHalf = (n.length - (n.length % 2)) / 2;

    if (sorted.length % 2 === 0) {
        return (sorted[lHalf - 1] + sorted[lHalf]) / 2;
    } else {
        return sorted[lHalf];
    }
}

function median3(array: number[]): number {
    let a = array.sort((x, y) => x - y);
    return a.length % 2
        ? a[Math.floor(a.length / 2)]
        : a
              .slice(a.length / 2 - 1, a.length / 2 + 1)
              .reduce((x, y) => x + y, 0) / 2;
}

function median4(n: number[]): number {
    const sorted = n.slice().sort((a, b) => a - b);
    if (sorted.length % 2) return sorted[sorted.length / 2 - 0.5];
    return (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
}

function median5(n: number[]): number {
    n.sort((a, b) => a - b);
    if (n.length % 2 === 0) {
        let m = n.length / 2;
        return (n[m - 1] + n[m]) / 2;
    }
    return n[(n.length - 1) / 2];
}

const median6 = (n: number[]): number => {
    n = n.sort((a, b) => a - b);
    const mid = Math.floor(n.length / 2);
    return n.length % 2 === 0 ? (n[mid - 1] + n[mid]) / 2 : n[mid];
};
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: Ch4113ng3
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ REGEXP, REPLACE MULTIPLE WITH OBJECT ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"


*/
const nerdify = (str: string): string => {
    interface KeyVal {
        [key: string]: string;
    }

    const nerdyObj: KeyVal = {
        a: "4",
        A: "4",
        e: "3",
        E: "3",
        l: "1",
        L: "1",
    };

    return str.replace(new RegExp(/[ael]/gi), (el) => nerdyObj[el]);
};
/*
describe("nerdify", function() {
  it("Sample Tests", function() {
    assert.strictEqual(nerdify("Fund4m3nt41s"),"Fund4m3nt41s");
    assert.strictEqual(nerdify("Seven"),"S3v3n");
    assert.strictEqual(nerdify("Los Angeles"),"Los 4ng313s");
    assert.strictEqual(nerdify("Seoijselawuue"),"S3oijs314wuu3");
  });
});
*/

// console.log(nerdify("Fund4m3nt41s"));
// console.log(nerdify("Fundamentals"));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============
function nerdify2(txt: string) {
    return txt.replace(/[aA]/g, "4").replace(/[eE]/g, "3").replace(/l/g, "1");
}

// function nerdify3(txt: string) {
//     var replacements = { 'a': 4, 'A': 4, 'e': 3, 'E': 3, 'l': 1 };
//     return txt.split('').map(c => replacements[c] || c).join('');
// }

function nerdify4(txt: string): string {
    return txt.replace(/A/gi, "4").replace(/E/gi, "3").replace(/l/g, "1");
}

// function nerdify5(txt: string): string {
//     let map: Object = { "a": 4, "e": 3, "l": 1 };
//     return txt.replace(/[AaEel]/g, (it: string) => map[it.toLowerCase()]);
// };

function nerdify6(txt: string): string {
    var answer: string = "";
    for (var i = 0; i < txt.length; i++) {
        if (txt[i] == "a" || txt[i] == "A") {
            answer += "4";
        } else if (txt[i] == "e" || txt[i] == "E") {
            answer += "3";
        } else if (txt[i] == "l") {
            answer += "1";
        } else {
            answer += txt[i];
        }
    }
    return answer;
}

function nerdify7(txt: string): string {
    return txt.replace(/a/gi, "4").replace(/e/gi, "3").replace(/l/g, "1");
}

function nerdify8(txt: string) {
    let txtList = txt.split("");
    let newWord = [];
    for (let letter of txtList) {
        if (letter === "a" || letter === "A") {
            letter = "4";
        }
        if (letter === "e" || letter === "E") {
            letter = "3";
        }
        if (letter === "l") {
            letter = "1";
        }
        newWord.push(letter);
    }
    return newWord.join("");
}

// function nerdify9(txt: string) {
//     txt = txt.split('');
//     for (let i = 0; i < txt.length; i++) {
//         if (txt[i] === 'a' || txt[i] === 'A') txt[i] = '4';
//         if (txt[i] === 'e' || txt[i] === 'E') txt[i] = '3';
//         if (txt[i] === 'l') txt[i] = '1';
//     }
//     return txt.join('');
// }

// function nerdify10(txt: string): string {
//     const nerdLetters = { "A": "4", "a": "4", "E": "3", "e": "3", "l": "1" };
//     return txt.replace(/[AaEel]/g, letter => nerdLetters[letter]);
// }

// function nerdify11(txt: string) {
//     return txt.replace(/[aelAE]/g, a => ({ 'a': 4, 'e': 3, 'l': 1 }[a.toLowerCase()]));
// }

// =============================================================
const replace = { a: 4, A: 4, e: 3, E: 3, l: 1 };
const regex = new RegExp(`[${Object.keys(replace).join("")}]`, "g");

// function nerdify12(txt: string) {
//     return txt.replace(regex, (char) => replace[char]);
// }
// =============================================================

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: COUNT SALUTES
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Description
There is a narrow hallway in which people can go right and left only. When two people meet in the hallway, by tradition they must salute each other. People move at the same speed left and right.

Your task is to write a function that, given a string representation of people moving in the hallway, will count the number of salutes that will occur.
Note: 2 salutes occur when people meet, one to the other and vice versa.

Input
People moving right will be represented by >; people moving left will be represented by <. An example input would be >--<--->->. The - character represents empty space, which you need not worry about.

Examples
Input: >----->-----<--<
Output: 8

Explanation: Both guys moving right will meet both guys moving left.
Hence a total of 4 meetings will occur and 8 salutes will occur.

Input: <---<--->----<
Output: 2

Explanation: Only one meeting occurs.


*/
const countSalutes = (hallway: String): number => {
    let solution: number = 0;
    // FILTER OUT SPACES
    const lineOfPeople: string[] = hallway
        .split("")
        .filter((el) => el === "<" || el === ">");
    console.log("line of people:", lineOfPeople);

    for (let i = 0; i < lineOfPeople.length; i += 1) {
        const current: string = lineOfPeople[i];

        // AS WE SCAN FROM LEFT, LOOK FOR PEOPLE THAT ARE GOING RIGHT
        // GET SUB ARRAY ON THE RIGHT OF CURRENT (ALL PEOPLE AHEAD)
        if (current === ">") {
            // GET SUB ARRAY ON THE RIGHT OF CURRENT (ALL PEOPLE AHEAD)
            const tailSubArr: string[] = lineOfPeople.slice(i + 1);
            console.log("people to right:", tailSubArr);
            // COUNT HOW MANY OF THOSE PEOPLE CURRENT IS GOING TO MEET (ONES THAT ARE GOING LEFT)
            const peopleToMeet: number = tailSubArr.filter(
                (el) => el === "<"
            ).length;
            console.log("people to meet:", peopleToMeet);

            // CALC NUMBER OF GREETINGS AND INCREMENT SOLUTION
            solution += peopleToMeet * 2;
        }
    }

    return solution;
};

/*

console.log(countSalutes("<---->---<---<-->"));

line of people: [ '<', '>', '<', '<', '>' ]

people to right: [ '<', '<', '>' ]
people to meet: 2

people to right: []
people to meet: 0

4


    act('<---->---<---<-->', 4);
    act('------', 0);
    act('>>>>>>>>>>>>>>>>>>>>>----<->', 42);
    act('<<----<>---<', 2);
 
*/

// console.log(countSalutes("<---->---<---<-->"));
// console.log(countSalutes(">>>>>>>>>>>>>>>>>>>>>----<->"));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function countSalutes1(hallway: String): number {
    let right = 0;
    let salutes = 0;
    for (let p of hallway) {
        if (p === ">") right += 1;
        else if (p === "<") salutes += 2 * right;
    }
    return salutes;
}

function countSalutes2(hallway: String): number {
    let r: number = 0;
    let l: number = 0;
    for (let x of hallway) {
        switch (x) {
            case ">":
                r++;
                break;
            case "<":
                l += r;
                break;
        }
    }
    return l * 2;
}

function countSalutes3(hallway: String): number {
    let cnt = 0;
    let numPeople = 0;
    for (const ch of hallway) {
        if (ch === ">") numPeople++;
        else if (ch === "<") cnt += 2 * numPeople;
    }
    return cnt;
}
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: COUNTING POWER SETS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ GENERICS ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
In this kata, you must create a function powers/Powers that takes an array, and returns the number of subsets possible to create from that list. In other words, counts the power sets.

For instance

powers([1,2,3]) => 8
...due to...

powers([1,2,3]) =>
[[],
 [1],
 [2],
 [3],
 [1,2],
 [2,3],
 [1,3],
 [1,2,3]]
Your function should be able to count sets up to the size of 500, so watch out; pretty big numbers occur there!

For comparison, my Haskell solution can compute the number of sets for an array of length 90 000 in less than a second, so be quick!

You should treat each array passed as a set of unique values for this kata.

###Examples:

powers([])        => 1
powers([1])       => 2
powers([1,2])     => 4
powers([1,2,3,4]) => 16

*/

// SOLUTION: NUMBER OF SETS ARE SIMPLY 2 RAISED TO THE POWER OF ARR.LENGTH
// [1,2,3] => 2**3, [1,2,3,4,] => 2**4

// ❗️❗️❗️ GENERICS ❗️❗️❗️
function powers<T>(list: T[]): number {
    return Math.pow(2, list.length);
}
/*
describe("solution", function() {
  it("Sample Tests", function() {
      assert.strictEqual(powers([]), 1, "An empty array should return 1!");
      assert.strictEqual(powers([1]), 2);
      assert.strictEqual(powers([1,2,3,4,5]), 32);
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function powers2<T>(list: T[]): number {
    return 2 ** list.length;
}

// ❗️❗️❗️ GENERICS ❗️❗️❗️
const powers3 = <T>(list: T[]): number => 2 ** list.length;

function powers4<T>(list: T[]): number {
    return list.length > 0 ? 2 ** list.length : 1;
}

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: POSSIBILITIES ARRAY
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
A non-empty array a of length n is called an array of all possibilities if it contains all numbers between [0,a.length-1].Write a method named isAllPossibilities that accepts an integer array and returns true if the array is an array of all possibilities, else false.

Example:

a=[1,2,0,3]
a.length-1=3 
a includes [0,3] ,hence the function should return true
*/
function isAllPossibilities(x: number[]): boolean {
    throw new Error("This method or operation is not implemented.");
}
/*
describe("Possiblities Array", function() {
  it("simple test", function() {
    assert.strictEqual(isAllPossibilities([0,2,19,4,4]),false)
    assert.strictEqual(isAllPossibilities([3,2,1,0]),true)
    assert.strictEqual(isAllPossibilities([0,1,2,3]),true)
    assert.strictEqual(isAllPossibilities([1,2,3,4]),false)
    assert.strictEqual(isAllPossibilities([0,2,3]),false)
    assert.strictEqual(isAllPossibilities([0]),true)
    assert.strictEqual(isAllPossibilities([]),false)
    assert.strictEqual(isAllPossibilities([0,1,2,3,4,5,6,7,8,9]),true)
    assert.strictEqual(isAllPossibilities([0,1,3,-2,5,4]),false)
    assert.strictEqual(isAllPossibilities([1,-1,2,-2,3,-3,6]),false)
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: GENETIC ALGORITHM SERIES  - #2 Mutation
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Mutation is a genetic operator used to maintain genetic diversity from one generation of a population of genetic algorithm chromosomes to the next.

Mutation

A mutation here may happen on zero or more positions in a chromosome. It is going to check every position and by a given probability it will decide if a mutation will occur.

A mutation is the change from 0 to 1 or from 1 to 0.

Note: Some tests are random. If you think your algorithm is correct but the result fails, trying again should work.
*/
const mutate = (chromosome: string, p: number): string => {
    return "hello";
};

/*
describe('mutate', () => {
  const zero = '0'.repeat(9);
  const one  = '1'.repeat(9);

  it('100% mutate', () => {
    assert.equal(mutate(zero, 1), one);
    assert.equal(mutate(one, 1), zero);
  });
  
  it('0% mutate', () => {
    assert.equal(mutate(zero, 0), zero);
    assert.equal(mutate(one, 0), one);
  });

  it('50% mutate', () => {
    assert(mutate(zero, 0.5).split('').some(x => x == '1'));
    assert(mutate(one, 0.5).split('').some(x => x == '1'));
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️ INCLUDE THIS IN CW EXAMPLES (OBJ OF FUNCTIONS) ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: SELECTIVE FEAR OF NUMBERS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ INTERFACE ❗️❗️❗️ OBJECT OF FUNCTIONS ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:

Monday --> 12

Tuesday --> numbers greater than 95

Wednesday --> 34

Thursday --> 0

Friday --> numbers divisible by 2

Saturday --> 56

Sunday --> 666 or -666

Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)
*/
const amIAfraid = (day: string, num: number): boolean => {
    let solution: boolean = false;

    if (day === "Monday" && num === 12) solution = true;
    if (day === "Tuesday" && num > 95) solution = true;
    if (day === "Wednesday" && num === 34) solution = true;
    if (day === "Thursday" && num === 0) solution = true;
    if (day === "Friday" && (num & 1) === 0) solution = true;
    if (day === "Saturday" && num === 56) solution = true;
    if (day === "Sunday" && Math.abs(num) === 666) solution = true;

    return solution;
};

const amIAfraid2 = (day: string, num: number): boolean => {
    return (
        (day === "Monday" && num === 12) ||
        (day === "Tuesday" && num > 95) ||
        (day === "Wednesday" && num === 34) ||
        (day === "Thursday" && num === 0) ||
        (day === "Friday" && (num & 1) === 0) ||
        (day === "Saturday" && num === 56) ||
        (day === "Sunday" && Math.abs(num) === 666)
    );
};
/*
describe("example", function() {
  it("test", function() {
    assert.equal(amIAfraid("Monday", 13), false, "Should return false");
    assert.equal(amIAfraid("Sunday", -666), true, "Should return true");
    assert.equal(amIAfraid("Tuesday", 2), false, "Should return false");
    assert.equal(amIAfraid("Tuesday", 965), true, "Should return true");
    assert.equal(amIAfraid("Friday", 2), true, "Should return true");
  });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function amIAfraid3(day: string, num: number): boolean {
    switch (day) {
        case "Monday":
            return num == 12;
        case "Tuesday":
            return num > 95;
        case "Wednesday":
            return num == 34;
        case "Thursday":
            return num == 0;
        case "Friday":
            return !(num % 2);
        case "Saturday":
            return num == 56;
        case "Sunday":
            return Math.abs(num) == 666;
        default:
            return false;
    }
}

function amIAfraid4(day: string, num: number): boolean {
    switch (day) {
        case "Monday": {
            return !!(num == 12);
        }
        case "Tuesday": {
            return !!(num > 95);
        }
        case "Wednesday": {
            return !!(num == 34);
        }
        case "Thursday": {
            return !!(num == 0);
        }
        case "Friday": {
            return !!(num % 2 == 0);
        }
        case "Saturday": {
            return !!(num == 56);
        }
        case "Sunday": {
            return !!(num == 666 || num == -666);
        }
        default: {
            return false;
        }
    }
}

function amIAfraid5(day: string, num: number): boolean {
    switch (day) {
        case "Monday":
            return num === 12;
        case "Tuesday":
            return num > 95;
        case "Wednesday":
            return num === 34;
        case "Thursday":
            return num === 0;
        case "Friday":
            return num % 2 === 0;
        case "Saturday":
            return num === 56;
        case "Sunday":
            return Math.abs(num) === 666;
        default:
            return false;
    }
}

function amIAfraid6(day: string, num: number): boolean {
    const fearfulValues: Record<string, number> = {
        Monday: 12,
        Wednesday: 34,
        Thursday: 0,
        Saturday: 56,
        Sunday: 666,
    };

    if (day === "Tuesday") {
        if (num > 95) return true;
        else return false;
    }

    if (day === "Friday") {
        if (num % 2 === 0) return true;
        else return false;
    }

    return Math.abs(num) === fearfulValues[day];
}

function amIAfraid7(day: string, num: number): boolean {
    //Help me..
    let res: boolean = false;
    switch (day) {
        case "Monday":
            res = num == 12 ? true : false;
            break;
        case "Tuesday":
            res = num > 95 ? true : false;
            break;
        case "Wednesday":
            res = num == 34 ? true : false;
            break;
        case "Thursday":
            res = num == 0 ? true : false;
            break;
        case "Friday":
            res = num % 2 == 0 ? true : false;
            break;
        case "Saturday":
            res = num == 56 ? true : false;
            break;
        case "Sunday":
            res = num == 666 || num == -666 ? true : false;
            break;
    }
    return res;
}

function amIAfraid8(day: string, num: number): boolean {
    //Help me..
    if (day === "Monday" && num === 12) {
        return true;
    } else if (day === "Tuesday" && num > 95) {
        return true;
    } else if (day === "Wednesday" && num == 34) {
        return true;
    } else if (day === "Thursday" && num === 0) {
        return true;
    } else if (day === "Friday" && num % 2 == 0) {
        return true;
    } else if (day === "Saturday" && num === 56) {
        return true;
    } else if (day === "Sunday" && (num == 666 || num == -666)) {
        return true;
    }
    return false;
}

// ❗️❗️❗️
function amIAfraid9(day: string, num: number): boolean {
    const afraidDict: { [key: string]: Function } = {
        Monday: (value: number) => value === 12,
        Tuesday: (value: number) => value > 95,
        Wednesday: (value: number) => value === 34,
        Thursday: (value: number) => value === 0,
        Friday: (value: number) => value % 2 === 0,
        Saturday: (value: number) => value === 56,
        Sunday: (value: number) => Math.abs(value) === 666,
    };

    const afraidCondition: Function = afraidDict[day];

    return afraidCondition(num);
}

// ============================================================

// ❗️❗️❗️
interface DayTests {
    [day: string]: (num: number) => boolean;
}

export function amIAfraid10(day: string, num: number): boolean {
    const dayTests: DayTests = {
        Monday: (i) => i === 12,
        Tuesday: (i) => i > 98,
        Wednesday: (i) => i === 34,
        Thursday: (i) => i === 0,
        Friday: (i) => !(i % 2),
        Saturday: (i) => i === 56,
        Sunday: (i) => Math.abs(i) === 666,
    };

    const dayTest = dayTests[day];

    if (dayTest) {
        return dayTest(num);
    }

    return false;
}

// ============================================================

function amIAfraid11(day: string, num: number): boolean {
    switch (day) {
        case "Monday":
            if (num === 12) {
                return true;
            }
            break;
        case "Tuesday":
            if (num > 95) {
                return true;
            }
            break;
        case "Wednesday":
            if (num === 34) {
                return true;
            }
            break;
        case "Thursday":
            if (num === 0) {
                return true;
            }
            break;
        case "Friday":
            if (num % 2 === 0) {
                return true;
            }
            break;
        case "Saturday":
            if (num === 56) {
                return true;
            }
            break;
        case "Sunday":
            if (num === 666 || num === -666) {
                return true;
            }
            break;
        default:
            return false;
    }
    return false;
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: TRANSPOSE TWO STRINGS IN AN ARRAY
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ REPLACE UNDEFINED WITH VALUE USING LOGICAL OR ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return

H W  
e o  
l r  
l l  
o d
A few things to note:

There should be one space in between the two characters
You don't have to modify the case (i.e. no need to change to upper or lower)
If one string is longer than the other, there should be a space where the character would be
*/
const transposeTwoStrings = (arr: string[]): string => {
    // DETERMINE LENGTH OF LONGERST WORD FOR NUMBER OF ITERATIONS
    const numIterations: number = Math.max(arr[0].length, arr[1].length);
    console.log(numIterations);

    let solutionArr: string[] = [];

    for (let i = 0; i < numIterations; i += 1) {
        // REPLACE UNDEFINED WITH A SPACE FOR THE SHORTEST WORD
        const char1: string = arr[0][i] === undefined ? " " : arr[0][i];

        const char2: string = arr[1][i] === undefined ? " " : arr[1][i];

        const currentRow: string = char1 + " " + char2;

        console.log(
            "char 1:",
            char1,
            "char 2:",
            char2,
            "current row: ",
            currentRow
        );

        // PUSH CURRENT PAIR TO SOLUTION ARRAY
        solutionArr.push(currentRow);
    }

    console.log(solutionArr);

    // FORMAT SOLUTION ARRAY (ADD LINE BREAK)
    const solution: string = solutionArr.join("\n");

    return solution;
};
/*
console.log(transposeTwoStrings(['Hello', 'World!']));

6

char 1: H char 2: W current row:  H W
char 1: e char 2: o current row:  e o
char 1: l char 2: r current row:  l r
char 1: l char 2: l current row:  l l
char 1: o char 2: d current row:  o d
char 1:   char 2: ! current row:    !

[ 'H W', 'e o', 'l r', 'l l', 'o d', '  !' ]

H W
e o
l r
l l
o d
  !

*/

// console.log(transposeTwoStrings(['Hello', 'World!']));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// ❗️❗️❗️ REPLACE UNDEFINED WITH VALUE USING LOGICAL OR ❗️❗️❗️
function transposeTwoStrings2([a, b]: [string, string]): string {
    const res: string[] = [];

    for (let i = 0; i < Math.max(a.length, b.length); i++) {
        res.push(`${a[i] || " "} ${b[i] || " "}`);
    }

    return res.join("\n");
}

function transposeTwoStrings3(array: string[]): string {
    let res = [];
    let m = Math.max(...array.map((s) => s.length));
    for (let i = 0; i < m; i++) {
        res.push(array.map((s) => (i < s.length ? s[i] : " ")).join(" "));
    }
    return res.join("\n");
}

function transposeTwoStrings4(arr: [string, string]): string {
    const [left, right] = arr;
    return Array.from(
        { length: Math.max(left.length, right.length) },
        (_, i) => (left[i] || " ") + " " + (right[i] || " ")
    ).join("\n");
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: GA-DE-RY-PO-LU-KI cypher
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ REGEXP, REPLACE MULTIPLE WITH OBJECT ❗️❗️❗️
// KEYWORDS: ❗️❗️❗️ REGEXP, REPLACE MULTIPLE WITH SPLIT / MAP / OBJECT ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Introduction
The GADERYPOLUKI is a simple substitution cypher used in scouting to encrypt messages. The encryption is based on short, easy to remember key. The key is written as paired letters, which are in the cipher simple replacement.

The most frequently used key is "GA-DE-RY-PO-LU-KI".

 G => A
 g => a
 a => g
 A => G
 D => E
  etc.
The letters, which are not on the list of substitutes, stays in the encrypted text without changes.

Task
Your task is to help scouts to encrypt and decrypt thier messages. Write the Encode and Decode functions.

Input/Output
The input string consists of lowercase and uperrcase characters and white . The substitution has to be case-sensitive.

Example
 Encode("ABCD")          // => GBCE 
 Encode("Ala has a cat") // => Gug hgs g cgt 
 Encode("gaderypoluki"); // => agedyropulik
 Decode("Gug hgs g cgt") // => Ala has a cat 
 Decode("agedyropulik")  // => gaderypoluki
 Decode("GBCE")          // => ABCD
*/
const encodeA = (str: string): string => {
    interface KeyVal {
        [key: string]: string;
    }

    const swapObj: KeyVal = {
        a: "g",
        A: "G",
        e: "d",
        E: "D",
        y: "r",
        Y: "R",
        o: "p",
        O: "P",
        u: "l",
        U: "L",
        i: "k",
        I: "K",

        g: "a",
        G: "A",
        d: "e",
        D: "E",
        r: "y",
        R: "Y",
        p: "o",
        P: "O",
        l: "u",
        L: "U",
        k: "i",
        K: "I",
    };

    // return str.replace(new RegExp(/[aAeEyYoOuUiI]/gi), (char) => swapObj[char]);
    return str.replace(
        new RegExp(/[gGaAdDeErRyYpPoOlLuUkKiI]/g),
        (char) => swapObj[char]
    );
};

const decodeA = (str: string): string => {
    return encodeA(str);
};
/*
describe("Scouts are waiting!", function(){
  it("Basic Tests", function(){
    assert.strictEqual( encode("Ala has a cat") , "Gug hgs g cgt" );
    assert.strictEqual( decode("Gug hgs g cgt") , "Ala has a cat" );
    assert.strictEqual( encode("ABCD") , "GBCE" );
    assert.strictEqual( encode("gaderypoluki") , "agedyropulik" );
    assert.strictEqual( decode("agedyropulik") , "gaderypoluki" );
    assert.strictEqual( decode("GBCE") , "ABCD" );
  });
});
*/

// "Gug hgs g cgt"
// console.log(encodeA("Ala has a cat"));
// console.log(encodeA("Gug hgs g cgt"));
// "agedyropulik"
// console.log(encodeA("gaderypoluki"));

// "gaderypoluki"
// console.log(encodeA("agedyropulik"));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// ❗️❗️❗️ REGEXP, REPLACE MULTIPLE WITH SPLIT / MAP / OBJECT ❗️❗️❗️
function encodeA1(s: String): String {
    return s
        .split("")
        .map(
            (c) =>
                ({
                    G: "A",
                    A: "G",
                    g: "a",
                    a: "g",
                    D: "E",
                    E: "D",
                    d: "e",
                    e: "d",
                    R: "Y",
                    Y: "R",
                    r: "y",
                    y: "r",
                    P: "O",
                    O: "P",
                    p: "o",
                    o: "p",
                    L: "U",
                    U: "L",
                    l: "u",
                    u: "l",
                    K: "I",
                    I: "K",
                    k: "i",
                    i: "k",
                }[c] || c)
        )
        .join("");
}
var decodeA2: Function = encodeA1;

// ============================================================

const crypt = ["GA", "DE", "RY", "PO", "LU", "KI"];

function encodeA3(str: String): String {
    return str
        .split("")
        .map((x) => {
            const isLower = x.match(/[a-z]/) ? true : false;

            for (let i = 0; i < crypt.length; i++) {
                if (crypt[i][0] === x.toUpperCase()) {
                    return isLower ? crypt[i][1].toLowerCase() : crypt[i][1];
                } else if (crypt[i][1] === x.toUpperCase()) {
                    return isLower ? crypt[i][0].toLowerCase() : crypt[i][0];
                }
            }
            return x;
        })
        .join("");
}

function decodeA3(str: String): String {
    return encodeA3(str);
}

// ============================================================

var keys: { [key: string]: string } = {
    G: "A",
    A: "G",
    g: "a",
    a: "g",
    D: "E",
    E: "D",
    d: "e",
    e: "d",
    R: "Y",
    Y: "R",
    r: "y",
    y: "r",
    P: "O",
    O: "P",
    p: "o",
    o: "p",
    L: "U",
    U: "L",
    l: "u",
    u: "l",
    K: "I",
    I: "K",
    k: "i",
    i: "k",
};

export function encodeA4(str: string) {
    return str
        .split("")
        .map((e) => (keys[e] ? keys[e] : e))
        .join("");
}

export function decodeA4(str: string) {
    return str
        .split("")
        .map((e) => (keys[e] ? keys[e] : e))
        .join("");
}

// ============================================================
const RE: RegExp = RegExp(/[GADERYPOLUKI]/, "gi"),
    KEY: { [key: string]: string } = {
        A: "G",
        G: "A",
        a: "g",
        g: "a",
        D: "E",
        E: "D",
        d: "e",
        e: "d",
        R: "Y",
        Y: "R",
        r: "y",
        y: "r",
        P: "O",
        O: "P",
        p: "o",
        o: "p",
        L: "U",
        U: "L",
        l: "u",
        u: "l",
        K: "I",
        I: "K",
        k: "i",
        i: "k",
    };

const encodeA5 = (str: String): String => str.replace(RE, ($) => KEY[$]),
    decodeA5 = encodeA5;
// ============================================================
const cypher = "GADERYPOLUKIgaderypoluki";

function encodeA6(str: String): String {
    let result = "";
    for (const ch of str) {
        const index = cypher.indexOf(ch);
        if (index === -1) {
            result += ch;
        } else {
            result += index % 2 === 0 ? cypher[index + 1] : cypher[index - 1];
        }
    }
    return result;
}

function decodeA6(str: String): String {
    return encodeA6(str);
}

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: FUNCTIONS OF INTEGERS ON CARTESIAN PLANE
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Consider integer coordinates x, y in the Cartesian plan and three functions f, g, h defined by:

f: 1 <= x <= n, 1 <= y <= n --> f(x, y) = min(x, y)
g: 1 <= x <= n, 1 <= y <= n --> g(x, y) = max(x, y)
h: 1 <= x <= n, 1 <= y <= n --> h(x, y) = x + y
where n is a given integer (n >= 1, guaranteed) and x, y are integers.

In the table below you can see the value of the function f with n = 6.

---	0	1	2	3	4	5	6
6	-	1	2	3	4	5	6
5	-	1	2	3	4	5	5
4	-	1	2	3	4	4	4
3	-	1	2	3	3	3	3
2	-	1	2	2	2	2	2
1	-	1	1	1	1	1	1
0	-	-	-	-	-	-	-
The task is to calculate the sum of f(x, y), g(x, y) and h(x, y) for all integers x and y such that (1 <= x <= n, 1 <= y <= n).

The function sumin (sum of f) will take n as a parameter and return the sum of min(x, y) in the domain 1 <= x <= n, 1 <= y <= n. The function sumax (sum of g) will take n as a parameter and return the sum of max(x, y) in the same domain. The function sumsum (sum of h) will take n as a parameter and return the sum of x + y in the same domain.

Examples:
sumin(6) --> 91
sumin(45) --> 31395
sumin(999) --> 332833500
sumin(5000) --> 41679167500

sumax(6) --> 161
sumax(45) --> 61755
sumax(999) --> 665167500
sumax(5000) --> 83345832500

sumsum(6) --> 252
sumsum(45) --> 93150
sumsum(999) --> 998001000
sumsum(5000) --> 125025000000

*/
function sumin(n: number): number {
    throw new Error("TODO");
}
function sumax(n: number): number {
    throw new Error("TODO");
}
function sumsum(n: number): number {
    throw new Error("TODO");
}
/*
describe("Fixed Tests sumin, sumax, sumsum", function() {
    it("Basic tests", function() {
        assert.equal(sumin(5), 55);
        assert.equal(sumax(8), 372);
        assert.equal(sumsum(8), 576);
    });
});
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: GENETIC ALGORITHM SERIES - #3 Crossover
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
In genetic algorithms, crossover is a genetic operator used to vary the programming of chromosomes from one generation to the next.

The one-point crossover consists in swapping one's cromosome part with another in a specific given point. The image bellow shows the crossover being applied on chromosomes 1011011001111 and 1011100100110 with the cut point (index) 4:



In this kata you have to implement a function crossover that receives two chromosomes chromosome1, chromosome2 and a zero-based index and it has to return an array with the crossover result on both chromosomes [chromosome1, chromosome2].

Example:
crossover('111000', '000110', 3) should return ['111110', 000000']
*/
const crossover = (chrom1: string, chrom2: string, idx: number) => {
    const tail1: string = chrom1.slice(idx);
    const tail2: string = chrom2.slice(idx);
    console.log(tail1, tail2);
    const newChrom1: string = chrom1.substring(0, idx).concat(tail2);
    const newChrom2: string = chrom2.substring(0, idx).concat(tail1);
    console.log(newChrom1, newChrom2);

    const solution: string[] = [newChrom1, newChrom2];

    return solution;
};

/*
describe('crossover', () => {
  it('Basic tests', () => {
    assert(crossover('110','001',2)[0] === '111' && crossover('110','001',2)[1] === '000');
    assert(crossover('111000','000110',3)[0] === '111110' && crossover('111000','000110',3)[1] === '000000');
  });
});
*/

// console.log(crossover("111000", "000110", 3));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

const crossover2 = (
    chromosome1: string,
    chromosome2: string,
    index: number
) => {
    const head = (s: string) => s.substr(0, index);
    const tail = (s: string) => s.substr(index);

    return [
        head(chromosome1) + tail(chromosome2),
        head(chromosome2) + tail(chromosome1),
    ];
};

const crossover3 = (
    chromosome1: string,
    chromosome2: string,
    index: number
) => {
    return [
        chromosome1.slice(0, index) + chromosome2.slice(index),
        chromosome2.slice(0, index) + chromosome1.slice(index),
    ];
};

// ============================================================

// ❗️❗️❗️
const crossover4 = (
    chromosome1: string,
    chromosome2: string,
    index: number
): Array<string> => {
    const firstChromosome = new Chromosome(chromosome1);
    const secondChromosome = new Chromosome(chromosome2);
    firstChromosome.crossover(secondChromosome, index);
    return [firstChromosome.toString(), secondChromosome.toString()];
};

class Chromosome {
    nucleobases: Array<string>;

    constructor(chromosome: string) {
        this.nucleobases = Array.from(chromosome);
    }

    crossover(chromosome: Chromosome, cutPoint: number): void {
        const geneToGive = this.gene(cutPoint);
        const geneToTake = chromosome.gene(cutPoint);
        this.apply(geneToTake, cutPoint);
        chromosome.apply(geneToGive, cutPoint);
    }

    gene(cutPoint: number): Array<string> {
        return this.nucleobases.slice(cutPoint);
    }

    apply(gene: Array<string>, cutPoint: number): void {
        this.nucleobases = this.nucleobases.slice(0, cutPoint).concat(gene);
    }

    toString(): string {
        return this.nucleobases.join("");
    }
}

// ============================================================

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: EASY LINE
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
In the drawing below we have a part of the Pascal's triangle, horizontal lines are numbered from zero (top).

We want to calculate the sum of the squares of the binomial coefficients on a given horizontal line with a function called easyline (or easyLine or easy-line).

Can you write a program which calculate easyline(n) where n is the horizontal line number?

The function will take n (with: n>= 0) as parameter and will return the sum of the squares of the binomial coefficients on line n.

Examples:
easyline(0) => 1
easyline(1) => 2
easyline(4) => 70
easyline(50) => 100891344545564193334812497256
Ref:
http://mathworld.wolfram.com/BinomialCoefficient.html

alternative text

Note:
In Javascript, Coffeescript, Typescript, C++, PHP, C, R, Nim, Fortran to get around the fact that we have no big integers the function easyLine(n) will in fact return

round(log(easyline(n)))

and not the easyline(n) of the other languages.

So, in Javascript, Coffeescript, Typescript, C++, PHP, R, Nim, C, Fortran:

easyLine(0) => 0
easyLine(1) => 1
easyLine(4) => 4
easyLine(50) => 67
*/
function easyLine(n: number): number {
    return 1;
}
/*
describe("Fixed Tests easyLine", function() {
  it("Basic tests", function() {
    assert.strictEqual(easyLine(7), 8);
    assert.strictEqual(easyLine(13), 16);
    assert.strictEqual(easyLine(17), 22);
    assert.strictEqual(easyLine(19), 24);
  });
});

*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: TETRIS SERIES#1 - SCORING SYSTEM
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: INTERFACE, OBJECT
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
A History Lesson
Tetris is a puzzle video game originally designed and programmed by Soviet Russian software engineer Alexey Pajitnov. The first playable version was completed on June 6, 1984. Pajitnov derived its name from combining the Greek numerical prefix tetra- (the falling pieces contain 4 segments) and tennis, Pajitnov's favorite sport.

About scoring system
The scoring formula is built on the idea that more difficult line clears should be awarded more points. For example, a single line clear is worth 40 points, clearing four lines at once (known as a Tetris) is worth 1200.

A level multiplier is also used. The game starts at level 0. The level increases every ten lines you clear. Note that after increasing the level, the total number of cleared lines is not reset.

For our task you can use this table:

Level	Points for 1 line
Points for 2 lines	Points for 3 lines	Points for 4 lines
0	40	100
300	1200
1	80	200	600	2400
2	120	300	900	3600
3	160	400	1200	4800
...
7	320	800	2400	9600
...	For level n you must determine the formula by yourself using given examples from the table.
Task
Calculate the final score of the game using original Nintendo scoring system

Input
Array with cleaned lines.
Example: [4, 2, 2, 3, 3, 4, 2]
Input will always be valid: array of random length (from 0 to 5000) with numbers from 0 to 4.

Ouput
Calculated final score.
def get_score(arr) -> int: return 0

Example
getScore([4, 2, 2, 3, 3, 4, 2]); // returns 4900
Step 1: +1200 points for 4 lines (current level 0). Score: 0+1200=1200;
Step 2: +100 for 2 lines. Score: 1200+100=1300;
Step 3: +100. Score: 1300+100=1400;
Step 4: +300 for 3 lines (current level still 0). Score: 1400+300=1700.
Total number of cleaned lines 11 (4 + 2 + 2 + 3), so level goes up to 1 (level ups each 10 lines);
Step 5: +600 for 3 lines (current level 1). Score: 1700+600=2300;
Step 6: +2400. Score: 2300+2400=4700;
Step 7: +200. Total score: 4700+200=4900 points.
*/

/*
// CODEPEN JAVASCRIPT SOLUTION:

const getScore2 = (arr) => {
    console.log(arr);

    let currLev = 0,
        clearedLines = 0,
        score = 0;
    // let levMultiplier = 1;

    const scoreObj = {
        0: 0,
        1: 40,
        2: 100,
        3: 300,
        4: 1200,
    };

    arr.forEach((lines, idx) => {
        console.log("iteration:", idx);

        let levMultiplier = currLev + 1;
        console.log("   level multiplier:", levMultiplier);

        console.log("   current score:", scoreObj[lines] * levMultiplier);

        score += scoreObj[lines] * levMultiplier;
        console.log("       total score:", score);
        clearedLines += lines;
        console.log("       cleared lines:", clearedLines);

        currLev = Math.floor(clearedLines / 10);
        console.log("       current level:", currLev);
    });

    return score;
};

*/

const getScore = (arr: number[]): number => {
    console.log(arr);

    let currLev: number = 0,
        clearedLines: number = 0,
        score: number = 0;

    interface NumKey {
        [key: number]: number;
    }

    const scoreObj: NumKey = {
        0: 0,
        1: 40,
        2: 100,
        3: 300,
        4: 1200,
    };

    arr.forEach((lines, idx) => {
        console.log("iteration:", idx);

        let levMultiplier: number = currLev + 1;
        console.log("   level multiplier:", levMultiplier);

        console.log("   current score:", scoreObj[lines] * levMultiplier);

        score += scoreObj[lines] * levMultiplier;
        console.log("       total score:", score);
        clearedLines += lines;
        console.log("       cleared lines:", clearedLines);

        currLev = Math.floor(clearedLines / 10);
        console.log("       current level:", currLev);
    });

    return score;
};

/*

console.log(getScore([4, 2, 2, 3, 3, 4, 2]));


[
  4, 2, 2, 3,
  3, 4, 2
]

iteration: 0
   level multiplier: 1
   current score: 1200
       total score: 1200
       cleared lines: 4
       current level: 0

iteration: 1
   level multiplier: 1
   current score: 100
       total score: 1300
       cleared lines: 6
       current level: 0

iteration: 2
   level multiplier: 1
   current score: 100
       total score: 1400
       cleared lines: 8
       current level: 0

iteration: 3
   level multiplier: 1
   current score: 300
       total score: 1700
       cleared lines: 11
       current level: 1

iteration: 4
   level multiplier: 2
   current score: 600
       total score: 2300
       cleared lines: 14
       current level: 1

iteration: 5
   level multiplier: 2
   current score: 2400
       total score: 4700
       cleared lines: 18
       current level: 1

iteration: 6
   level multiplier: 2
   current score: 200
       total score: 4900
       cleared lines: 20
       current level: 2

4900

*/

// 4900
// console.log(getScore([4, 2, 2, 3, 3, 4, 2]));

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function getScore3(arr: number[]) {
    let cleared = 0,
        score = 0;
    const level = () => Math.floor(cleared / 10) + 1;
    for (let a of arr) {
        score += [0, 40, 100, 300, 1200][a] * level();
        cleared += a;
    }
    return score;
}

function getScore4(arr: number[]) {
    const SCORES = [0, 40, 100, 300, 1200];
    let score: number = 0;
    let total_lines: number = 0;
    arr.forEach((nb_lines) => {
        score += SCORES[nb_lines] * (1 + Math.floor(total_lines / 10));
        total_lines += nb_lines;
    });
    return score;
}

const getScore5 = (arr: number[]): number =>
    arr.reduce(
        (o, c) => (
            (o.s += [0, 40, 100, 300, 1200][c] * ~~(o.t / 10)), (o.t += c), o
        ),
        { s: 0, t: 10 }
    ).s;

function getScore6(arr: number[]) {
    return arr.reduce(
        (a, e) => [
            a[0] + [0, 40, 100, 300, 1200][e] * Math.trunc(a[1] / 10 + 1),
            a[1] + e,
        ],
        [0, 0]
    )[0];
}

function getScore7(arr: number[]) {
    const calculatePoints = (lines: number, level: number): number => {
        switch (lines) {
            case 1:
                return 40 * (level + 1);
            case 2:
                return 100 * (level + 1);
            case 3:
                return 300 * (level + 1);
            case 4:
                return 1200 * (level + 1);
            default:
                return 0;
        }
    };
    let level = 0;
    let score = 0;
    let cleared = 0;
    for (let el of arr) {
        cleared += el;
        score += calculatePoints(el, level);
        if (cleared >= 10) {
            level++;
            cleared -= 10;
        }
    }
    return score;
}
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: STRING PREFIX AND SUFFIX
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
In this Kata, you will be given a string and your task will be to return the length of the longest prefix that is also a suffix. A prefix is the start of a string while the suffix is the end of a string. For instance, the prefixes of the string "abcd" are ["a","ab","abc"]. The suffixes are ["bcd", "cd", "d"]. You should not overlap the prefix and suffix.

for example:
solve("abcd") = 0, because no prefix == suffix. 
solve("abcda") = 1, because the longest prefix which == suffix is "a".
solve("abcdabc") = 3. Longest prefix which == suffix is "abc".
solve("aaaa") = 2. Longest prefix which == suffix is "aa". You should not overlap the prefix and suffix
solve("aa") = 1. You should not overlap the prefix and suffix.
solve("a") = 0. You should not overlap the prefix and suffix.
All strings will be lowercase and string lengths are 1 <= length <= 500

More examples in test cases. Good luck!
*/
const solveAA = (str: string) => {
    const numIterations: number = Math.floor(str.length / 2);
    let solution: number = 0;

    for (let i = 0; i < numIterations; i += 1) {
        // console.log(str[i], str[str.length - 1 - i]);
        const prefix: string = str.slice(0, i + 1);
        const suffix: string = str.slice(str.length - 1 - i);
        console.log("prefix: ", prefix, "suffix:", suffix);
        if (prefix === suffix) solution = i + 1;
    }

    return solution;
};
/*
describe("Basic tests", function() {
  it("Testing for abcd", () => assert.strictEqual(solve("abcd"), 0));
  it("Testing for abcda", () => assert.strictEqual(solve("abcda"), 1));
  it("Testing for abcdabc", () => assert.strictEqual(solve("abcdabc"), 3));
  it("Testing for abcabc", () => assert.strictEqual(solve("abcabc"), 3));
  it("Testing for abcabca", () => assert.strictEqual(solve("abcabca"), 1));
  it("Testing for abcdabcc", () => assert.strictEqual(solve("abcdabcc"), 0));
  it("Testing for aaaaa", () => assert.strictEqual(solve("aaaaa"), 2));
  it("Testing for aaaa", () => assert.strictEqual(solve("aaaa"), 2));
  it("Testing for aaa", () => assert.strictEqual(solve("aaa"), 1));
  it("Testing for aa", () => assert.strictEqual(solve("aa"), 1));
  it("Testing for a", () => assert.strictEqual(solve("a"), 0));
  it("Testing for acbacc", () => assert.strictEqual(solve("acbacc"), 0));
});
*/

// console.log(solveAA("abcdabc"));
// console.log(solveAA("aaaaaaa"));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function solveAA2(s: string) {
    let result = Math.floor(s.length / 2);
    while (!s.endsWith(s.slice(0, result))) {
        result--;
    }
    return result;
}

function solveAA3(s: string): number {
    return s.match(/^(.*).*\1$/)![1].length;
}

function solveAA4(s: string): number {
    let num = 0;
    let halfStr = s.length / 2;
    for (let i = 1; i <= halfStr; i++) {
        if (s.slice(0, i) == s.slice(-i)) num = i;
    }
    return num;
}

function solveAA5(s: string): number {
    for (let i = s.length / 2; i >= 1; i--) {
        let prefix = s.slice(0, i);
        if (prefix == s.slice(-i)) {
            return prefix.length;
        }
    }

    return 0;
}
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: COMPOSING SQUARED STRINGS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
A squared string is a string of n lines, each substring being n characters long. We are given two n-squared strings. For example:

s1 = "abcd\nefgh\nijkl\nmnop" s2 = "qrst\nuvwx\nyz12\n3456"

Let us build a new string strng of size (n + 1) x n in the following way:

The first line of strng has the first char of the first line of s1 plus the chars of the last line of s2.
The second line of strng has the first two chars of the second line of s1 plus the chars of the penultimate line of s2 except the last char
and so on until the nth line of strng has the n chars of the nth line of s1 plus the first char of the first line of s2.
Calling this function compose(s1, s2) we have:

compose(s1, s2) -> "a3456\nefyz1\nijkuv\nmnopq"
or printed:
abcd    qrst  -->  a3456
efgh    uvwx       efyz1
ijkl    yz12       ijkuv
mnop    3456       mnopq
*/
const compose = (str1: string, str2: string): string => {
    const strArr1: string[] = str1.split("\n");
    // !!! SECOND ARRAY IS REVERSED !!!
    const strArr2: string[] = str2.split("\n").reverse();

    // console.log(strArr1, strArr2);

    let solutionArr: string[] = [];

    for (let i = 0; i < strArr1.length; i += 1) {
        // console.log(strArr1[i], strArr2[i]);

        // GET FIRST OF 1 AND ALL OF 2, FIRST 2 OF 1 AND LENGTH-1 OF 2, ETC...
        const currentWordArr: string[] = strArr1[i]
            .split("")
            .slice(0, i + 1)
            .concat(strArr2[i].split("").slice(0, strArr2[i].length - i));
        // console.log("   currentWord:", currentWordArr);
        solutionArr.push(currentWordArr.join(""));
    }

    // console.log(solutionArr);

    // FORMAT STRING
    const solution: string = solutionArr.join("\n");

    return solution;
};
/*

console.log(compose("byGt\nhTts\nRTFF\nCnnI", "jIRl\nViBu\nrWOb\nNkTB"));


 [ 'byGt', 'hTts', 'RTFF', 'CnnI' ] [ 'NkTB', 'rWOb', 'ViBu', 'jIRl' ]

byGt NkTB
   currentWord: [ 'b', 'N', 'k', 'T', 'B' ]
hTts rWOb
   currentWord: [ 'h', 'T', 'r', 'W', 'O' ]
RTFF ViBu
   currentWord: [ 'R', 'T', 'F', 'V', 'i' ]
CnnI jIRl
   currentWord: [ 'C', 'n', 'n', 'I', 'j' ]

[ 'bNkTB', 'hTrWO', 'RTFVi', 'CnnIj' ]

bNkTB
hTrWO
RTFVi
CnnIj

*/

// "bNkTB\nhTrWO\nRTFVi\nCnnIj"
// console.log(compose("byGt\nhTts\nRTFF\nCnnI", "jIRl\nViBu\nrWOb\nNkTB"));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function compose2(s1: string, s2: string): string {
    let res: string[] = [];
    let arr1 = s1.split("\n"),
        arr2 = s2.split("\n");
    for (let i = 0; i < arr1.length; i++) {
        res[i] =
            arr1[i].slice(0, i + 1) +
            arr2[arr2.length - 1 - i].slice(0, arr2.length - i);
    }
    return res.join("\n");
}

function compose3(s1: string, s2: string): string {
    const arr1 = s1.split("\n");
    const arr2 = s2.split("\n");
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        let j = arr2.length - i - 1;
        const left = arr1[i].substring(0, i + 1);
        const right = arr2[j].substring(0, arr2[j].length - i);
        result.push(left + right);
    }
    return result.join("\n");
}

function compose4(s1: string, s2: string): string {
    const s1s = s1.split("\n");
    const s2s = s2.split("\n");
    const n = s1s.length;
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(
            s1s[i].substring(0, i + 1) + s2s[n - i - 1].substring(0, n - i)
        );
    }
    return result.join("\n");
}

// G964
function compose5(s1: string, s2: string): string {
    var a2 = s2.split("\n").reverse();
    var l = a2.length,
        a1 = s1.split("\n"),
        res = "";
    for (var i = 0; i < l; i++) {
        res += a1[i].slice(0, i + 1) + a2[i].slice(0, l - i);
        if (i < l - 1) res += "\n";
    }
    return res;
}

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️ LOOK INTO CLASS/PUBLIC, PRIVATE PROPERTIES, ARRAY.FINDINDEX() ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: Simple Fun #87: Shuffled Array
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ DELETE ITEMS FROM ARRAY WITH SPLICE ❗️❗️❗️
// KEYWORDS: ❗️❗️❗️ GET ARRAY MINUS CURRENT ELEMENT IN LOOP ❗️❗️❗️
// KEYWORDS: ❗️❗️❗️ ARRAY.FINDINDEX() ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
A noob programmer was given two simple tasks: sum and sort the elements of the given array arr = [a1, a2, ..., an].

He started with summing and did it easily, but decided to store the sum he found in some random position of the original array which was a bad idea. Now he needs to cope with the second task, sorting the original array arr, and it's giving him trouble since he modified it.

Given the array shuffled, consisting of elements a1, a2, ..., an, and their sumvalue in random order, return the sorted array of original elements a1, a2, ..., an.

Example
For shuffled = [1, 12, 3, 6, 2], the output should be [1, 2, 3, 6].

1 + 3 + 6 + 2 = 12, which means that 1, 3, 6 and 2 are original elements of the array.

For shuffled = [1, -3, -5, 7, 2], the output should be [-5, -3, 2, 7].

Input/Output
[input] integer array shuffled

Array of at least two integers. It is guaranteed that there is an index i such that shuffled[i] = shuffled[0] + ... + shuffled[i - 1] + shuffled[i + 1] + ... + shuffled[n].

Constraints:

2 ≤ shuffled.length ≤ 30,

-300 ≤ shuffled[i] ≤ 300.

[output] an integer array

A sorted array of shuffled.length - 1 elements.
*/

const shuffledArray = (shuffled: number[]): number[] => {
    let solution: number[] = [];
    // COPY OF INPUT ARRAY
    const shuffledArr: number[] = shuffled;
    console.log("shuffed array:", shuffledArr);

    let sumOfArr: number = 0;

    // ❗️❗️❗️ GET ARRAY MINUS CURRENT ELEMENT IN LOOP ❗️❗️❗️
    shuffled.forEach((number) => {
        // RESET SHUFFLED TO ORIGINAL INPUT ARRAY [1, -3, -5, 7, 2]
        shuffled = [...shuffledArr];
        // console.log("number:", number);
        // DELETE CURRENT ELEMENT FROM SHUFFLED
        shuffled.splice(shuffled.indexOf(number), 1);
        // console.log("   shuffled:", shuffled);

        // CALCULATE SUM OF ARRAY MINUS CURRENT
        const sum: number = shuffled.reduce((acc, curr) => acc + curr);
        // console.log("   sum:", sum);

        // IF SUM OF ARRAY === CURRENT ELEMENT
        if (sum === number) {
            // SAVE SUM OF ORIGINAL ARRAY TO VARIABLE (NOT NEEDED IN THIS KATA)
            sumOfArr = number;
            // SORT ARRAY ASCENDING AND SAVE AS SOLUTION
            solution = shuffled.sort((a, b) => a - b);
        }
        sum === number && console.log("     Match found:", number);
    });

    // console.log(sumOfArr);

    // console.log(solution);

    return solution;
};
/*

console.log(shuffledArray([1, -3, -5, 7, 2])); 

shuffed array: [ 1, -3, -5, 7, 2 ]
number: 1
   shuffled: [ -3, -5, 7, 2 ]
   sum: 1
     Match found: 1
number: -3
   shuffled: [ 1, -5, 7, 2 ]
   sum: 5
number: -5
   shuffled: [ 1, -3, 7, 2 ]
   sum: 7
number: 7
   shuffled: [ 1, -3, -5, 2 ]
   sum: -5
number: 2
   shuffled: [ 1, -3, -5, 7 ]
   sum: 0
[ -5, -3, 2, 7 ]

*/

//  [1, 2, 3, 6]
// console.log(shuffledArray([1, 12, 3, 6, 2]));

// [-5, -3, 2, 7]
// console.log(shuffledArray([1, -3, -5, 7, 2]));

// console.log(shuffledArray([1, 2, 3, 4]));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function shuffledArray2(shuffled: number[]): number[] {
    let result: number[] = [];
    shuffled.forEach((num, index) => {
        let sum: number = shuffled
            .filter((x, i) => i !== index)
            .reduce((p, c) => p + c, 0);
        if (sum === num)
            result = shuffled
                .filter((x, i) => i !== index)
                .sort((a, b) => a - b);
    });
    return result;
}

function shuffledArray3(shuffled: number[]): number[] {
    let sum = shuffled.reduce((acc, cur) => acc + cur, 0) / 2;
    shuffled.splice(shuffled.indexOf(sum), 1);
    return shuffled.sort((a, b) => a - b);
}

// ❗️❗️❗️ ARRAY.FINDINDEX() ❗️❗️❗️
function shuffledArray4(shuffled: number[]): number[] {
    const sum = shuffled.reduce((a, b) => a + b);
    const idx = shuffled.findIndex((num) => sum - num === num);
    shuffled.splice(idx, 1);
    return shuffled.sort((a, b) => a - b);
}

function shuffledArray5(shuffled: number[]): number[] {
    for (let i = 0; i < shuffled.length; i++) {
        const removed = [...shuffled];
        removed.splice(i, 1);
        const sum = removed.reduce((acc, cur) => acc + cur, 0);
        if (shuffled[i] === sum) {
            shuffled.splice(i, 1);
            break;
        }
    }
    return shuffled.sort((a, b) => a - b);
}

function shuffledArray6(shuffled: number[]): number[] {
    for (let i = 0; i < shuffled.length; ++i) {
        if (
            shuffled[i] ===
            shuffled.reduce((sum, val, j) => (i !== j ? sum + val : sum), 0)
        ) {
            return shuffled
                .slice(0, i)
                .concat(shuffled.slice(i + 1))
                .sort((a, b) => a - b);
        }
    }
    return [1, 2];
}
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: Strings: SWAP VOWELS CASE
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ REGEXP, REPLACE MULTIPLE WITH OBJECT ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Special thanks to SteffenVogel_79 for the idea.

Challenge:

Given a string, return a copy of the string with the vowels' case swapped.

For this kata, assume that vowels are in the set "aeouiAEOUI".

Example: Given a string "C is alive!", your function should return "C Is AlIvE!"

Addendum: Your solution is only required to work for the ASCII character set.

Please make sure you only swap cases for the vowels.


*/
const swapVowelCase = (str: string): string => {
    const lettersArr: string[] = str.split("");

    const vowelsReg = /[aeiou]/i;

    lettersArr.forEach((letter, idx) => {
        if (vowelsReg.test(letter)) {
            console.log("vowel found: ", letter);
            // if (letter === letter.toLowerCase()) {
            //     lettersArr[idx] = letter.toUpperCase();
            // } else {
            //     lettersArr[idx] = letter.toLowerCase();
            // }

            lettersArr[idx] =
                letter === letter.toLowerCase()
                    ? letter.toUpperCase()
                    : letter.toLowerCase();
        }
    });

    const solution: string = lettersArr.join("");

    return solution;
};

// const swapVowelCase2 = (str: string): string => {
//     const vowelsReg = /[aeiou]/i;

//     return str
//         .split("")
//         .forEach((letter, idx) => {
//             if (vowelsReg.test(letter)) {
//                 console.log("vowel found: ", letter);
//                 if (letter === letter.toLowerCase()) {
//                     str.split("")[idx] = letter.toUpperCase();
//                 } else {
//                     str.split("")[idx] = letter.toLowerCase();
//                 }
//             }
//         })
//         .join("");
// };
/*
 assert.equal(swapVowelCase(' '), ' ');
    assert.equal(swapVowelCase('Is RubY dEad?'), 'is RUbY deAd?');
    assert.equal(swapVowelCase('yo!'), 'yO!');
    assert.equal(swapVowelCase('The'), 'ThE');
    assert.equal(swapVowelCase('Lorem ipsum dolor sit amet'), 'LOrEm IpsUm dOlOr sIt AmEt');
*/

// is RUbY deAd?'
// console.log(swapVowelCase("Is RubY dEad?"));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

const swapVowelCase2 = ($: string): string =>
    $.replace(/[aeiou]/gi, (x) =>
        x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()
    );

function swapVowelCase3(str: string): string {
    return str.replace(/[aeiou]/gi, (x) =>
        /[AEIOU]/.test(x) ? x.toLowerCase() : x.toUpperCase()
    );
}

function swapVowelCase4(str: string): string {
    // check if string includes vowels
    // check the casing or ascii values of each vowel
    let result = "";
    let charCode = 0;
    for (let i = 0; i < str.length; i++) {
        charCode = str.charCodeAt(i);
        switch (charCode) {
            case 97:
                result += String.fromCharCode(65);
                break;
            case 101:
                result += String.fromCharCode(69);
                break;
            case 105:
                result += String.fromCharCode(73);
                break;
            case 111:
                result += String.fromCharCode(79);
                break;
            case 117:
                result += String.fromCharCode(85);
                break;
            case 65:
                result += String.fromCharCode(97);
                break;
            case 69:
                result += String.fromCharCode(101);
                break;
            case 73:
                result += String.fromCharCode(105);
                break;
            case 79:
                result += String.fromCharCode(111);
                break;
            case 85:
                result += String.fromCharCode(117);
                break;
            default:
                result += String.fromCharCode(charCode);
        }
    }
    return result;
}

// ❗️❗️❗️ REGEXP, REPLACE MULTIPLE WITH OBJECT ❗️❗️❗️
function swapVowelCase5(str: string): string {
    let mapping: { [key: string]: string } = {
        a: "A",
        e: "E",
        i: "I",
        o: "O",
        u: "U",
        A: "a",
        E: "e",
        I: "i",
        O: "o",
        U: "u",
    };
    return str.replace(new RegExp(/[aeoui]/gi), (c) => mapping[c]);
}

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️ LOOK INTO CLASS/PUBLIC, PRIVATE PROPERTIES ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: Ninja vs Samurai: Strike
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ INTERFACE, IMPLEMENTS, ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Something is wrong with our Warrior class. The strike method does not work correctly. The following shows an example of this code being used:

var ninja = new Warrior('Ninja');
var samurai = new Warrior('Samurai');

samurai.strike(ninja, 3);
// ninja.health should == 70
Can you figure out what is wrong?


*/

/*
ORIGINAL CODE:

class Warrior{
    private name:string;
      public health:number;
    constructor(name:string){
      this.name=name;
      this.health=100;
    }

  }

  Warrior.prototype.strike= function(enemy:Warrior, swings:number){
      enemy.health = Math.max(0, enemy.health - (swings * 10));
  }
*/

// ❗️❗️❗️ MOVE strike FUNCTION INTO CLASS AS A PROPERTY ❗️❗️❗️
class Warrior {
    private name: string;
    public health: number;

    constructor(name: string) {
        this.name = name;
        this.health = 100;
    }

    public strike = function (enemy: Warrior, swings: number) {
        enemy.health = Math.max(0, enemy.health - swings * 10);
    };
}

/*
var ninja = new solution.Warrior('Ninja')
    var samurai = new solution.Warrior('Samurai')
    
    samurai.strike(ninja, 4);
    assert.equal(ninja.health, 60, "Ninja's health is not correct");
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: ====================

// ❗️❗️❗️ INTERFACE, IMPLEMENTS, ❗️❗️❗️
interface IStrike {
    strike(enemy: Warrior, swings: number): void;
}

class Warrior2 implements IStrike {
    private name: string;
    public health: number;

    constructor(name: string) {
        this.name = name;
        this.health = 100;
    }

    strike(enemy: Warrior, swings: number): void {}
}

Warrior2.prototype.strike = function (enemy: Warrior, swings: number) {
    enemy.health = Math.max(0, enemy.health - swings * 10);
};

// ============================================================
// ❗️❗️❗️ DONT GET DESCRIPTION ❗️❗️❗️
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: INTEGER DIFFERENCE
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Write a function that accepts two arguments: an array/list of integers and another integer (n).

Determine the number of times where two integers in the array have a difference of n.

For example:

[1, 1, 5, 6, 9, 16, 27], n=4  -->  3  # (1,5), (1,5), (5,9)
[1, 1, 3, 3], n=2             -->  4  # (1,3), (1,3), (1,3), (1,3)

*/
// ❗️❗️❗️ THIS WILL GET ALL POSSIBLE COMBINATIONS ❗️❗️❗️
const intDiff = (intArr: number[], num: number): number => {
    let counter: number = 0;

    for (let i = 0; i < intArr.length; i += 1) {
        console.log("outer loop:    ", intArr[i]);
        for (let j = 0; j < intArr.length; j += 1) {
            if (i === j) continue;
            console.log("   inner loop:   ", intArr[j]);
            if (j - i === num || i - j === num) {
                counter += 1;
            }
        }
    }

    return counter;
};

/*
intDiff([1, 1, 5, 6, 9, 16, 27], 4)

outer loop:     1
   inner loop:    1
   inner loop:    5
   inner loop:    6
   inner loop:    9
   inner loop:    16
   inner loop:    27
outer loop:     1
   inner loop:    1
   inner loop:    5
   inner loop:    6
   inner loop:    9
   inner loop:    16
   inner loop:    27
outer loop:     5
   inner loop:    1
   inner loop:    1
   inner loop:    6
   inner loop:    9
   inner loop:    16
   inner loop:    27
outer loop:     6
   inner loop:    1
   inner loop:    1
   inner loop:    5
   inner loop:    9
   inner loop:    16
   inner loop:    27
outer loop:     9
   inner loop:    1
   inner loop:    1
   inner loop:    5
   inner loop:    6
   inner loop:    16
   inner loop:    27
outer loop:     16
   inner loop:    1
   inner loop:    1
   inner loop:    5
   inner loop:    6
   inner loop:    9
   inner loop:    27
outer loop:     27
   inner loop:    1
   inner loop:    1
   inner loop:    5
   inner loop:    6
   inner loop:    9
   inner loop:    16
❗️❗️❗️ expected 6 to equal 3 ❗️❗️❗️
*/

/*
console.log(intDiff([1, 1, 3, 3], 2));

outer loop:     1
   inner loop:    1
   inner loop:    3
   inner loop:    3
outer loop:     1
   inner loop:    1
   inner loop:    3
   inner loop:    3
outer loop:     3
   inner loop:    1
   inner loop:    1
   inner loop:    3
outer loop:     3
   inner loop:    1
   inner loop:    1
   inner loop:    3
4
*/
const intDiff2 = (intArr: number[], num: number): number => {
    let counter: number = 0;

    for (let i = 0; i < intArr.length; i += 1) {
        console.log("outer loop:    ", intArr[i]);
        for (let j = 0; j < intArr.length; j += 1) {
            if (i === j) continue;
            console.log("   inner loop:   ", intArr[j]);
            if (j - i === num || i - j === num) {
                counter += 1;
            }
        }
    }

    return counter;
};
/*
assert.equal(intDiff([1, 1, 5, 6, 9, 16, 27], 4), 3);
    assert.equal(intDiff([1, 1, 3, 3], 2), 4);
*/

// console.log(intDiff([1, 1, 3, 3], 2));

// console.log(intDiff([1, 2, 3, 4], 2));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: SORT ARRAY BY VALUE AND INDEX
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Sort an array by value and index
Your task is to sort an array of integer numbers by the product of the value and the index of the positions.

For sorting the index starts at 1, NOT at 0!
The sorting has to be ascending.
The array will never be null and will always contain numbers.

Example:

Input: 23, 2, 3, 4, 5
Product of value and index:
23 => 23 * 1 = 23  -> Output-Pos 4
 2 =>  2 * 2 = 4   -> Output-Pos 1
 3 =>  3 * 3 = 9   -> Output-Pos 2
 4 =>  4 * 4 = 16  -> Output-Pos 3
 5 =>  5 * 5 = 25  -> Output-Pos 5

Output: 2, 3, 4, 23, 5

*/
const sortByValueAndIndex = (numArr: number[]): number[] => {
    // interface StrKey {
    //     [key: number]: number;
    // }
    // const counterObj: StrKey = {};

    let numValuesArr: number[][] = [];

    numArr.forEach((num, idx) => {
        // counterObj[num] = num * (idx + 1);

        numValuesArr.push([num, num * (idx + 1)]);
    });

    // console.log(counterObj);

    // console.log(numValuesArr.sort((a, b) => a[1] - b[1]).map((arr) => arr[0]));

    const solution: number[] = numValuesArr
        .sort((a, b) => a[1] - b[1])
        .map((arr) => arr[0]);

    return solution;
};
/*
var actual = solution.sortByValueAndIndex([ 1, 2, 3, 4, 5 ]);
    var expected = [ 1, 2, 3, 4, 5 ];    
    assert.deepEqual(actual, expected);
      
    actual = solution.sortByValueAndIndex([ 23, 2, 3, 4, 5 ]);
    expected = [ 2, 3, 4, 23, 5 ];    
    assert.deepEqual(actual, expected);
      
    actual = solution.sortByValueAndIndex([ 26, 2, 3, 4, 5 ]);
    expected = [ 2, 3, 4, 5, 26 ];    
    assert.deepEqual(actual, expected);
      
    actual = solution.sortByValueAndIndex([ 9, 5, 1, 4, 3 ]);
    expected = [ 1, 9, 5, 3, 4 ];    
    assert.deepEqual(actual, expected);    
*/

// expected = [ 2, 3, 4, 23, 5 ];
// console.log(sortByValueAndIndex([23, 2, 3, 4, 5]));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function sortByValueAndIndex2(array: number[]): number[] {
    return array
        .map((elem, index, _array) => [elem, elem * (1 + index)])
        .sort((a, b) => a[1] - b[1])
        .map((elem, index, _array) => elem[0]);
}

function sortByValueAndIndex3(array: number[]): number[] {
    return array
        .map((x, i) => [x, x * (i + 1)])
        .sort(([a, b], [c, d]) => b - d)
        .map(([y, z]) => y);
}

function sortByValueAndIndex4(array: number[]): number[] {
    return array
        .map((n, i) => [n, n * i + n])
        .sort((a, b) => a[1] - b[1])
        .map((n) => n[0]);
}

function sortByValueAndIndex5(array: number[]): number[] {
    let indexCalculationList = array.map((v, i) => [v, (i + 1) * v]);
    let sortedList = indexCalculationList.sort((a, b) => a[1] - b[1]);

    return sortedList.map((v) => v[0]);
}

function sortByValueAndIndex6(array: number[]): number[] {
    const indexed = array.map((el, i) => {
        return { n: el, i: i + 1 };
    });
    indexed.sort((a, b) => a.n * a.i - b.n * b.i);
    return indexed.map((el) => el.n);
}
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️ LOOK INTO MATH.LOG AND EULER NUMBER MATHEMATICAL CONSTANT ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: Number of Divisions
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Calculate how many times a number can be divided by a given number.

Example
For example the number 6 can be divided by 2 two times:

1. 6 / 2 = 3
2. 3 / 2 = 1 remainder = 1
100 can be divided by 2 six times:

1. 100 / 2 = 50
2. 50 / 2 = 25
3. 25 / 2 = 12 remainder 1
4. 12 / 2 = 6
5. 6 / 2 = 3
6. 3 / 2 = 1 remainder 1
*/
const divisions = (num: number, div: number): number => {
    let counter: number = 0;

    while (num >= div) {
        num = Math.floor(num / div);
        counter += 1;
    }

    return counter;
};
/*j
 assert.strictEqual(divisions(6, 2), 2);
    assert.strictEqual(divisions(100, 2), 6);
    assert.strictEqual(divisions(2450, 5), 4);
    assert.strictEqual(divisions(9999, 3), 8);
    assert.strictEqual(divisions(2, 3), 0);
    assert.strictEqual(divisions(5, 5), 1);
*/

// 6
// console.log(divisions(100, 2));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// ❗️❗️❗️ LOOK INTO MATH.LOG ❗️❗️❗️
function divisions2(n: number, divisor: number): number {
    return Math.floor(Math.log(n) / Math.log(divisor));
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: Single digit
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: RECURSION, CONVERT TO BINARY
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
The goal of this Kata is to reduce the passed integer to a single digit (if not already) by converting the number to binary, taking the sum of the binary digits, and if that sum is not a single digit then repeat the process.

If the passed integer is already a single digit there is no need to reduce
For example given 5665 the function should return 5:

5665 --> (binary) 1011000100001
1011000100001 --> (sum of binary digits) 5
Given 123456789 the function should return 1:

123456789 --> (binary) 111010110111100110100010101
111010110111100110100010101 --> (sum of binary digits) 16
16 --> (binary) 10000
10000 --> (sum of binary digits) 1
*/
const singleDigit = (num: number): number => {
    if (num < 10) return num;

    const binary: string = num.toString(2);
    // console.log(binary);
    const bitArr: number[] = binary.split("").map((bit) => Number(bit));
    // console.log(bitArr);
    const sum: number = bitArr.reduce((acc, curr) => acc + curr);
    // console.log(sum);

    return sum < 10 ? sum : singleDigit(sum);
};

/*
console.log(singleDigit(123456789));

CYCLE COUNT: 1
111010110111100110100010101
[
  1, 1, 1, 0, 1, 0, 1, 1,
  0, 1, 1, 1, 1, 0, 0, 1,
  1, 0, 1, 0, 0, 0, 1, 0,
  1, 0, 1
]
16

CYCLE COUNT: 2
10000
[ 1, 0, 0, 0, 0 ]
1

1 RETURN VALUE
*/

/*
assert.strictEqual(singleDigit(5), 5)
    assert.strictEqual(singleDigit(999), 8)
    assert.strictEqual(singleDigit(1234444123), 1)
    assert.strictEqual(singleDigit(443566), 2)
    assert.strictEqual(singleDigit(565656565), 3)
    assert.strictEqual(singleDigit(4868872), 8)
    assert.strictEqual(singleDigit(234234235), 2)
    assert.strictEqual(singleDigit(567448), 7)
    assert.strictEqual(singleDigit(1000000000), 3)
*/

// console.log(singleDigit(123456789));
// console.log(singleDigit(5));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function singleDigit2(n: number): number {
    function bitCount(m: number): number {
        return (m.toString(2).match(/1/g) || []).length;
    }
    return n > 9 ? singleDigit(bitCount(n)) : n;
}

function singleDigit3(n: number): number {
    while (n > 9) {
        n = n.toString(2).replace(/0/g, "").length;
    }
    return n;
}

const singleDigit4 = (n: number, s = n.toString(2)): number => {
    if (n <= 9) return n;

    const addOnes = (s: string): number =>
        s.split("").reduce((sum, curr) => (curr === "1" ? ++sum : sum), 0);

    let digit = addOnes(s);

    while (digit > 9) {
        s = digit.toString(2);
        digit = addOnes(s);
    }

    return digit;
};

const singleDigit5 = (n: number): number =>
    n < 10 ? n : singleDigit([...n.toString(2)].reduce((a, b) => a + +b, 0));

let singleDigit6 = (n: number): number =>
    n < 10 ? n : singleDigit((n.toString(2).match(/1/g) || []).length);

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: Easy wallpaper
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
John wants to decorate the walls of a room with wallpaper. He wants a fool-proof method for getting it right.

John knows that the rectangular room has a length of l meters, a width of w meters, a height of h meters. The standard width of the rolls he wants to buy is 52 centimeters. The length of a roll is 10 meters. He bears in mind however, that it’s best to have an extra length of wallpaper handy in case of mistakes or miscalculations so he wants to buy a length 15% greater than the one he needs.

Last time he did these calculations he got a headache, so could you help John?

Task
Your function wallpaper(l, w, h) should return as a plain English word in lower case the number of rolls he must buy.

Example:
wallpaper(4.0, 3.5, 3.0) should return "ten"

wallpaper(0.0, 3.5, 3.0) should return "zero"

Notes:
all rolls (even with incomplete width) are put edge to edge

0 <= l, w, h (floating numbers); it can happens that w * h * l is zero

the integer r (number of rolls) will always be less or equal to 20

FORTH: the number of rolls will be a positive or null integer (not a plain English word; this number can be greater than 20)

In Javascript English numbers are preloaded and can be accessed as:

numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
For other languages it is not preloaded but you can use the above one if you need it.


*/

const wallpaper = (l: number, w: number, h: number): string => {
    const numbers: string[] = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
    ];

    if (w * l * h === 0) return numbers[0];

    const ROLL: number = 5.2;
    const sideWalls: number = 2 * (w + l) * h * 1.15;
    // console.log(sideWalls);
    const numRolls: number = sideWalls / ROLL;
    // console.log(numRolls);
    // console.log(Math.ceil(numRolls));
    const solution: string = numbers[Math.ceil(numRolls)];

    return solution;
};

/*
 assert.strictEqual(wallpaper(6.3, 4.5, 3.29), "sixteen");
    assert.strictEqual(wallpaper(6.3, 5.8, 3.13), "seventeen");
    assert.strictEqual(wallpaper(6.1, 6.7, 2.81), "sixteen");
    assert.strictEqual(wallpaper(6.1, 2.0, 3.15), "twelve");
*/

// console.log(wallpaper(0, 4.5, 3.29));
// 15.716076923076923
// 16

// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function wallpaper2(l: number, w: number, h: number): string {
    const numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
    ];
    return l === 0 || w === 0 || h === 0
        ? "zero"
        : numbers[Math.ceil(((l * h + w * h) * 2 * 1.15) / (10 * 0.52))];
}

const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
];

export function wallpaper3(l: number, w: number, h: number): string {
    const roomArea = (l * h + w * h) * 2;
    const rollArea = 0.52 * 10;

    const rolls = Math.ceil(roomArea / rollArea + (roomArea / rollArea) * 0.15);

    return numbers[rolls];
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: Cryptanalysis Word Patterns
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: INTERFACE, OBJECT
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
In cryptanalysis, words patterns can be a useful tool in cracking simple ciphers.

A word pattern is a description of the patterns of letters occurring in a word, where each letter is given an integer code in order of appearance. So the first letter is given the code 0, and second is then assigned 1 if it is different to the first letter or 0 otherwise, and so on.

As an example, the word "hello" would become "0.1.2.2.3". For this task case-sensitivity is ignored, so "hello", "helLo" and "heLlo" will all return the same word pattern.

Your task is to return the word pattern for a given word. All words provided will be non-empty strings of alphabetic characters only, i.e. matching the regex "[a-zA-Z]+".
*/

const wordPattern = (word: string): string => {
    interface StrKey {
        [key: string]: number;
    }
    // KEEP TRACK OF UNIQUE LETTERS
    const counterObj: StrKey = {};

    let solutionArr: number[] = [];
    let counter: number = 0;

    word.toLowerCase()
        .split("")
        .forEach((char, i) => {
            // console.log("-----ITERATION:", i, "char:", char, "-----");

            // IF PROPERTY DOES NOT EXIST, CREATE IT, ASSIGN VALUE OF COUNTER
            // PUSH ITS COUNTER VALUE TO SOLUTION
            // AND INCREMENT COUNTER
            if (!counterObj.hasOwnProperty(char)) {
                counterObj[char] = counter;
                solutionArr.push(counterObj[char]);
                counter += 1;
                // IF IT EXISTS, JUST PUSH ITS VALUE TO SOLUTION
            } else if (counterObj.hasOwnProperty(char)) {
                // console.log("duplicate:", char);
                solutionArr.push(counterObj[char]);
            }

            // console.log("       object:", counterObj);
        });

    // console.log(counterObj);

    // console.log(solutionArr);

    // FORMAT SOLUTION
    const solution: string = solutionArr.join(".");

    return solution;
};

/*
console.log(wordPattern("heLlo"));


-----ITERATION: 0 char: h -----
       object: { h: 0 }
-----ITERATION: 1 char: e -----
       object: { h: 0, e: 1 }
-----ITERATION: 2 char: l -----
       object: { h: 0, e: 1, l: 2 }
-----ITERATION: 3 char: l -----
duplicate: l
       object: { h: 0, e: 1, l: 2 }
-----ITERATION: 4 char: o -----
       object: { h: 0, e: 1, l: 2, o: 3 }
{ h: 0, e: 1, l: 2, o: 3 }
[ 0, 1, 2, 2, 3 ]
0.1.2.2.3
*/

/*
 assert.deepEqual(wordPattern("hello"), "0.1.2.2.3");
    assert.deepEqual(wordPattern("heLlo"), "0.1.2.2.3");
    assert.deepEqual(wordPattern("helLo"), "0.1.2.2.3");
    assert.deepEqual(wordPattern("Hippopotomonstrosesquippedaliophobia"), "0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.0.3.15.1.13");
*/

// console.log(wordPattern("hello"));
// console.log(wordPattern("helLo"));
// console.log(wordPattern("heLlo"));
// console.log(wordPattern("Hippopotomonstrosesquippedaliophobia"));
// console.log(wordPattern("AaAaa"));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

const wordPattern2 = (word: string): string => {
    const splitted: string[] = word.toLowerCase().split("");
    const alphabet: { [key: string]: number } = {};
    let counter: number = 0;

    splitted.forEach((symbol: string) => {
        if (!alphabet[symbol] && alphabet[symbol] !== 0) {
            alphabet[symbol] = counter;

            counter += 1;
        }
    });

    return splitted.map((symbol: string) => alphabet[symbol]).join(".");
};

function wordPattern3(word: string): string {
    const usedLetters: { [letter: string]: number } = {};
    let counter: number = 0;
    const pattern: number[] = [];
    word.split("").forEach((c: string) => {
        const char = c.toLowerCase();
        if (usedLetters[char] === undefined) {
            usedLetters[char] = counter++;
        }
        pattern.push(usedLetters[char]);
    });
    return pattern.join(".");
}

const wordPattern4 = (word: string, chars = [...new Set(word.toLowerCase())]) =>
    [...word.toLowerCase()].map((c) => chars.indexOf(c)).join(".");

function wordPattern5(word: string): string {
    const letters: string[] = [...new Set(word.toLowerCase())];
    return word
        .toLowerCase()
        .split("")
        .map((l) => letters.indexOf(l))
        .join(".");
}

function wordPattern6(word: string): string {
    return word
        .toLowerCase()
        .split("")
        .reduce(
            ({ chars, res }, c) => {
                if (!chars.includes(c)) chars.push(c);
                res.push(chars.indexOf(c));
                return { chars, res };
            },
            { chars: [], res: [] } as { chars: string[]; res: number[] }
        )
        .res.join(".");
}

function wordPattern7(word: string): string {
    let n: string[] = [];
    return word
        .toLowerCase()
        .split("")
        .map((c) => {
            if (n.indexOf(c) < 0) {
                n.push(c);
            }
            return n.indexOf(c);
        })
        .join(".");
}

function wordPattern8(word: string): string {
    let arr = word.toLowerCase().split("");
    let unique = [...new Set(arr)];
    return arr.map((v) => unique.indexOf(v)).join(".");
}
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: WHATS MY GOLF SCORE
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
I have the par value for each hole on a golf course and my stroke score on each hole. I have them stored as strings, because I wrote them down on a sheet of paper. Right now, I'm using those strings to calculate my golf score by hand: take the difference between my actual score and the par of the hole, and add up the results for all 18 holes.
 
For example:
 
If I took 7 shots on a hole where the par was 5, my score would be: 7 - 5 = 2
If I got a hole-in-one where the par was 4, my score would be: 1 - 4 = -3.
Doing all this math by hand is really hard! Can you help make my life easier?
 
Task Overview
Complete the function which accepts two strings and calculates the golf score of a game. Both strings will be of length 18, and each character in the string will be a number between 1 and 9 inclusive.
*/
const golfScoreCalculator = (parList: string, scoreList: string): number => {
    // [-1,  1, 0,  0, -1,  1, -1,-1,  0, 2, -1,  0, -1,  0, 1, -1, 0,  1]
    const scoreMinPar: number[] = scoreList.split("").map((score, idx) => {
        return Number(score) - Number(parList[idx]);
    });

    // -1 (SUM OF scoreMinPar)
    const solution: number = scoreMinPar.reduce((acc, curr) => acc + curr);

    return solution;
};
/*
 
*/

// -1
// console.log(golfScoreCalculator("443454444344544443", "353445334534445344"));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============
function golfScoreCalculator2(parList: string, scoreList: string): number {
    return scoreList.split("").reduce((sum, x, i) => sum + +x - +parList[i], 0);
}

function golfScoreCalculator3(parList: string, scoreList: string): number {
    let score: number[] = scoreList.split("").map((x) => Number(x));
    let par: number[] = parList.split("").map((x) => Number(x));
    let difference: number[] = score.map((num, idx) => num - par[idx]);

    return difference.reduce((sum, x) => sum + x);
}

function golfScoreCalculator4(parList: string, scoreList: string): number {
    let sum = 0;
    for (let i = 0; i < parList.length; i++) {
        sum += scoreList.charCodeAt(i) - parList.charCodeAt(i);
    }
    return sum;
}

function golfScoreCalculator5(parList: string, scoreList: string): number {
    let golfScore = 0;
    for (let i = 0; i < 18; i++) {
        golfScore += +scoreList[i] - +parList[i];
    }
    return golfScore;
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: HELP SUZUKI RAKE HIS GARDEN
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ REPLACE WORD IN STRING ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Help Suzuki rake his garden!
 
The monastery has a magnificent Zen garden made of white gravel and rocks and it is raked diligently everyday by the monks. Suzuki having a keen eye is always on the lookout for anything creeping into the garden that must be removed during the daily raking such as insects or moss.
 
You will be given a string representing the garden such as:
 
garden = 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel ant gravel gravel gravel gravel rock slug gravel gravel gravel gravel gravel snail gravel gravel rock gravel snail slug gravel gravel spider gravel gravel gravel gravel gravel gravel gravel gravel moss gravel gravel gravel snail gravel gravel gravel ant gravel gravel moss gravel gravel gravel gravel snail gravel gravel gravel gravel slug gravel rock gravel gravel rock gravel gravel gravel gravel snail gravel gravel rock gravel gravel gravel gravel gravel spider gravel rock gravel gravel'
Rake out any items that are not a rock or gravel and replace them with gravel such that:
 
garden = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel'
Returns a string with all items except a rock or gravel replaced with gravel:
 
garden = 'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel'
*/

// 1️⃣
const rakeGarden = (garden: string): string => {
    let gardenArr: string[] = garden.split(" ");

    gardenArr = gardenArr.map((item) => {
        return item !== "rock" && item !== "gravel" ? "gravel" : item;
    });

    return gardenArr.join(" ");
};

// 2️⃣
const rakeGarden2 = (garden: string): string => {
    return garden
        .split(" ")
        .map((item) => {
            return item !== "rock" && item !== "gravel" ? "gravel" : item;
        })
        .join(" ");
};

// 3️⃣
const rakeGarden3 = (garden: string): string =>
    garden
        .split(" ")
        .map((item) => (item !== "rock" && item !== "gravel" ? "gravel" : item))
        .join(" ");

/*
it("should work for sample (fixed) tests", function() {
    assert.equal(true,true);
    var garden1:string = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel';
    assert.equal(solution.rakeGarden(garden1),'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel');
    var garden2:string = 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel ant gravel gravel gravel gravel rock slug gravel gravel gravel gravel gravel snail gravel gravel rock gravel snail slug gravel gravel spider gravel gravel gravel gravel gravel gravel gravel gravel moss gravel gravel gravel snail gravel gravel gravel ant gravel gravel moss gravel gravel gravel gravel snail gravel gravel gravel gravel slug gravel rock gravel gravel rock gravel gravel gravel gravel snail gravel gravel rock gravel gravel gravel gravel gravel spider gravel rock gravel gravel';
    assert.equal(solution.rakeGarden(garden2), 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel rock gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel rock gravel gravel');
  });
*/
var garden1: string =
    "slug spider rock gravel gravel gravel gravel gravel gravel gravel";
// 'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel');
// console.log(rakeGarden(garden1));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function rakeGarden4(garden: string): string {
    return garden
        .split(" ")
        .map((a) => {
            if (a != "gravel" && a != "rock") return "gravel";
            return a;
        })
        .join(" ");
}

//   ❗️❗️❗️ REPLACE WORD IN STRING ❗️❗️❗️
function rakeGarden5(garden: string): string {
    return garden.replace(/((?!\brock\b|\bgravel\b)\b\w+\b)/g, "gravel");
}

function rakeGarden6(garden: string): string {
    return garden
        .split(" ")
        .map((it) =>
            /^gravel$|^rock$/.test(it) ? it : it.replace(it, "gravel")
        )
        .join(" ");
}
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️ FAILING RANDOM TESTS: Time: 4928ms Passed: 2Failed: 2Exit Code: 2 ❗️❗️❗️
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: GENETIC ALGORITHM SERIES  - #1 Generate
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
A genetic algorithm is based in groups of chromosomes, called populations. To start our population of chromosomes we need to generate random binary strings with a specified length.
 
In this kata you have to implement a function generate that receives a length and has to return a random binary strign with length characters.
 
 
 
Example:
Generate a chromosome with length of 4 generate(4) could return the chromosome 0010, 1110, 1111... or any of 2^4 possibilities.
 
Note: Some tests are random. If you think your algorithm is correct but the result fails, trying again should work.
*/
const generate = (length: number): string => {
    let solution: string = "";

    // const bins: string[] = ["0", "1"];
    for (let i = 0; i < length; i += 1) {
        const test: number = Math.floor(Math.random() * 2) + 1;
        solution += test.toString();
    }
    return solution;
};

/*
❗️❗️❗️ RANDOM TESTS: Time: 4928ms Passed: 2Failed: 2Exit Code: 2 ❗️❗️❗️
In a chromosome of length 50
It should (probably) have at least one '1'
It should (probably) have at least one '0'
In a chromosome of length 10, running enough times it should be able to return all 2^10 possibilities (1024)
len: 10
Unspecified AssertionError
*/

// assert.equal(generate(16).length, 16);
// assert.equal(generate(32).length, 32);
// assert.equal(generate(64).length, 64);

// console.log(generate(16));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

//🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

// TITLE: LARGEST SQUARE INSIDE A CIRCLE
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Determine the area of the largest square that can fit inside a circle with radius r.
*/
const areaLargestSquare = (rad: number): number => {
    const side: number = Math.sqrt(2 * Math.pow(rad, 2));
    console.log(side);

    const solution: number = Math.round(Math.pow(side, 2));

    return solution;
};

// assert.strictEqual(areaLargestSquare(5), 50);
// assert.strictEqual(areaLargestSquare(7), 98);
// assert.strictEqual(areaLargestSquare(15), 450);

// console.log(areaLargestSquare(5));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function areaLargestSquare2(r: number): number {
    return r ** 2 * 2;
}

// ❓❓❓
// const areaLargestSquare = ت => ت * ت + ت * ت;
const areaLargestSquare3 = (ت: number) => ت * ت + ت * ت;

function areaLargestSquare4(r: number): number {
    return Math.floor((r * 2 ** 0.5) ** 2);
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: DIGITAL CYPHER - VOL 2
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ FROMCHARCODE() ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Introduction
Digital Cypher assigns to each letter of the alphabet unique number. For example:
 
 a  b  c  d  e  f  g  h  i  j  k  l  m
 1  2  3  4  5  6  7  8  9 10 11 12 13
 n  o  p  q  r  s  t  u  v  w  x  y  z
14 15 16 17 18 19 20 21 22 23 24 25 26
Instead of letters in encrypted word we write the corresponding number, eg. The word scout:
 
 s  c  o  u  t
19  3 15 21 20
Then we add to each obtained digit consecutive digits from the key. For example. In case of key equal to 1939 :
 
   s  c  o  u  t
  19  3 15 21 20
 + 1  9  3  9  1
 ---------------
  20 12 18 30 21
  
   m  a  s  t  e  r  p  i  e  c  e
  13  1 19 20  5 18 16  9  5  3  5
+  1  9  3  9  1  9  3  9  1  9  3
  --------------------------------
  14 10 22 29  6 27 19 18  6  12 8
Task
Write a function that accepts an array of integers code and a key number. As the result, it should return string containg a decoded message from the code.
 
Input / Output
The code is a array of positive integers.
The key input is a positive integer.
 
Example
decode([ 20, 12, 18, 30, 21],1939);  ==> "scout"
decode([ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8],1939);  ==>  "masterpiece"
*/
const decode = (code: number[], key: number): String => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    // [ 1, 9, 3, 9 ]
    const keyArr: number[] = key
        .toString()
        .split("")
        .map((digit) => Number(digit));
    // console.log(keyArr);

    const solutionArr: string[] = code.map((num, idx) => {
        // 1939 => 1, 9, 3, 9, 1...IN SEQUENCES OF 4 (KEYARR.LENGTH)
        // console.log(keyArr[idx % keyArr.length]);
        // [ 19, 3, 15, 21, 20 ]
        // return num - keyArr[idx % keyArr.length];
        return alphabet[num - keyArr[idx % keyArr.length] - 1];
    });

    // [ 's', 'c', 'o', 'u', 't' ]
    // console.log(solutionArr);

    // "scout"
    const solution: string = solutionArr.join("");

    return solution;
};

//    assert.equal( solution.decode([ 20, 12, 18, 30, 21], 1939) , "scout");
//    assert.equal( solution.decode([ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939) , "masterpiece");

// console.log(decode([20, 12, 18, 30, 21], 1939));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function decode2(code: number[], n: number): String {
    let digits: number[] = n
        .toString()
        .split("")
        .map((d) => +d);
    let alphabet = " abcdefghijklmnopqrstuvwxyz";
    return code
        .map((c, i) => alphabet.charAt(c - digits[i % digits.length]))
        .join("");
}

// ❗️❗️❗️ FROMCHARCODE() ❗️❗️❗️
function decode3(code: number[], n: number): string {
    const k: number[] = [...("" + n)].map(Number);
    return String.fromCharCode(...code.map((v, i) => v + 96 - k[i % k.length]));
}

// ❗️❗️❗️ FROMCHARCODE() ❗️❗️❗️
function decode4(code: number[], n: number): String {
    return String.fromCharCode(
        ...code.map(
            (chr, idx) => chr - Number(String(n)[idx % String(n).length]) + 96
        )
    );
}

function decode5(code: number[], n: number): String {
    const alphabetNumber: { [name: number]: string } = {
        1: "a",
        2: "b",
        3: "c",
        4: "d",
        5: "e",
        6: "f",
        7: "g",
        8: "h",
        9: "i",
        10: "j",
        11: "k",
        12: "l",
        13: "m",
        14: "n",
        15: "o",
        16: "p",
        17: "q",
        18: "r",
        19: "s",
        20: "t",
        21: "u",
        22: "v",
        23: "w",
        24: "x",
        25: "y",
        26: "z",
    };
    let nStringList = String(n).split("");

    return code
        .map((v, i) => v - Number(nStringList[i % nStringList.length]))
        .map((v) => alphabetNumber[v])
        .join("");
}
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️ INCLUDE THIS IN EXAMPLES: ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: CARTESIAN NEIGHBORS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: NESTED ARRAY
//  ❗️❗️❗️Array<Array<number>> / number[][] ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
A Cartesian coordinate system is a coordinate system that specifies each point uniquely in a plane by a pair of numerical coordinates, which are the signed distances to the point from two fixed perpendicular directed lines, measured in the same unit of length.
 
The сoordinates of a point in the grid are written as (x,y). Each point in a coordinate system has eight neighboring points. Provided that the grid step = 1.
 
It is necessary to write a function that takes a coordinate on the x-axis and y-axis and returns a list of all the neighboring points. Points inside your returned list need not be sorted (any order is valid).
 
For Example:
 
cartesianNeighbor(2,2) -> [[1,1],[1,2],[1,3],[2,1],[2,3],[3,1],[3,2],[3,3]]
cartesianNeighbor(5,7) -> [[6,7],[6,6],[6,8],[4,7],[4,6],[4,8],[5,6],[5,8]]
 
*/
const cartesianNeighbor = (x: number, y: number): number[][] => {
    let solution: number[][] = [];

    solution.push(
        [x - 1, y - 1],
        [x - 1, y],
        [x - 1, y + 1],
        [x, y - 1],
        [x, y + 1],
        [x + 1, y - 1],
        [x + 1, y],
        [x + 1, y + 1]
    );

    return solution;
};

// sortedList(cartesianNeighbor(2, 2)),[[1,1],[1,2],[1,3],[2,1],[2,3],[3,1],[3,2],[3,3]]
// console.log(cartesianNeighbor(2, 2));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function cartesianNeighbor2(x: number, y: number): Array<Array<number>> {
    let DIRS: Array<Array<number>> = [
        [1, 1],
        [1, -1],
        [1, 0],
        [0, 1],
        [-1, 1],
        [-1, -1],
        [-1, 0],
        [0, -1],
    ];

    return DIRS.map((direction: number[]): number[] => {
        return [x + direction[0], y + direction[1]];
    });
}

function cartesianNeighbor3(x: number, y: number): Array<Array<number>> {
    return [
        [x - 1, y + 1],
        [x, y + 1],
        [x + 1, y + 1],
        [x - 1, y],
        [x + 1, y],
        [x - 1, y - 1],
        [x, y - 1],
        [x + 1, y - 1],
    ];
}

function cartesianNeighbor4(x: number, y: number): number[][] {
    let result: number[][] = [];
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i || j) result.push([x + i, y + j]);
        }
    }
    return result;
}

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️ INCLUDE THIS IN EXAMPLES: ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: SORT THE VOWELS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ OPTIONAL ARGUMENT CHECK ❗️❗️❗️
// KEYWORDS: ❗️❗️❗️ SYMBOL ITERATOR ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Sort the Vowels!
In this kata, we want to sort the vowels in a special format.
 
Task
Write a function which takes a input string s and return a string in the following way:
 
   
                  C|                          R|
                  |O                          n|
                  D|                          d|
   "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
                  W|                          T|
                  |A                          |e
                  R|                          5|
                  S|                          T|
 
Notes:
 
List all the Vowels on the right side of |
List every character except Vowels on the left side of |
for the purpose of this kata, the vowels are : a e i o u
Return every character in its original case
Each line is seperated with \n
Invalid input ( undefined / null / integer ) should return an empty string
*/

// TS2488: Type 'string | null' must have a '[Symbol.iterator]()' method that returns an iterator
const sortVowels = (str?: number | string | null): string => {
    // RETURN EARLY IF INVALID INPUT
    if (!str || typeof str === "number") return "";

    let solutionArr: string[] = [];

    for (let char of str) {
        // IF/ELSE BLOCK:

        // if (/[aeiou]/.test(char.toLowerCase())) {
        //     solutionArr.push(`|${char}`);
        // } else {
        //     solutionArr.push(`${char}|`);
        // }

        // TERNARY:
        const currentChar: string = /[aeiou]/.test(char.toLowerCase())
            ? `|${char}`
            : `${char}|`;

        solutionArr.push(currentChar);
    }

    // ['C|', '|o', 'd|','|e', 'w|', '|a','r|', 's|'] =>
    // C|
    // |o
    // d|
    // |e
    // w|
    // |a
    // r|
    // s|
    const solution: string = solutionArr.join("\n");

    return solution;
};

/*
assert.equal(sortVowels('Codewars'), 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|');
    assert.equal(sortVowels('Is RubY dEad?'), '|I\ns|\n |\nR|\n|u\nb|\nY|\n |\nd|\n|E\n|a\nd|\n?|');
    assert.equal(sortVowels('yo!'), 'y|\n|o\n!|');
    assert.equal(sortVowels('LOrEm IpsUm dOlOr sIt AmEt'), 'L|\n|O\nr|\n|E\nm|\n |\n|I\np|\ns|\n|U\nm|\n |\nd|\n|O\nl|\n|O\nr|\n |\ns|\n|I\nt|\n |\n|A\nm|\n|E\nt|');
  });
*/

// console.log(sortVowels("Codewars"));
// console.log(sortVowels());
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function sortVowels2(str?: number | string | null): string {
    return typeof str != "string"
        ? ""
        : [...str]
              .map((x) => (/[aeiou]/i.test(x) ? "|" + x : x + "|"))
              .join("\n");
}

function sortVowels3(str?: number | string | null): string {
    return typeof str != "string"
        ? ""
        : Array.from(str)
              .map((c) => (/[aeiou]/i.test(c) ? "|" + c : c + "|"))
              .join("\n");
}

function sortVowels4(str?: string | number | null): string {
    if (typeof str !== "string" || !str) return "";
    return [...str]
        .map((ch) => ("aeiouAEIOU".includes(ch) ? `|${ch}` : `${ch}|`))
        .join("\n");
}

function sortVowels5(str?: number | string | null): string {
    if (!str || typeof str === "number") {
        return "";
    }
    const constantants = str.replace(
        /[^aeiou]/gi,
        (match) => match + "|" + "\n"
    );
    const result = constantants.replace(
        /[aeiou]/gi,
        (match) => "|" + match + "\n"
    );
    return result.slice(0, result.length - 1);
}

function sortVowels6(s?: number | string | null): string {
    if (s === undefined || typeof s != "string") {
        return "";
    }
    return [...s]
        .map((c) => ("aeoiu".includes(c.toLowerCase()) ? "|" + c : c + "|"))
        .join("\n");
}
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: FIND THE SQUARES
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Problem
Complete the function that takes an odd integer (0 < n < 1000000) which is the difference between two consecutive perfect squares, and return these squares as a string in the format "bigger-smaller"
 
Examples
9  -->  "25-16"
5  -->  "9-4"
7  -->  "16-9"
*/
const findSquares = (num: number): string => {
    return `${Math.pow((num - 1) / 2 + 1, 2)}-${Math.pow((num - 1) / 2, 2)}`;
};

/*
 
1   2   3   4   5     INTEGERS
1   4   9   16  25    SQUARES
  3   5   7   9       DIFFERENCES
  
  (3) => 1-2 SQUARED
  (5) => 2-3 SQUARED
  ...
  (n) => (n-1) / 2 - ((n-1) / 2) + 1 BOTH SQUARED
 
*/

// assert.strictEqual(findSquares(9), '25-16');
// assert.strictEqual(findSquares(5), '9-4');

// console.log(findSquares(9));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

const findSquares2 = ($: number): string =>
    `${Math.round($ / 2) ** 2}-${Math.floor($ / 2) ** 2}`;

const findSquares3 = (num: number): string => {
    for (let i = 1; i < 100000; i++) {
        let m = (i + 1) ** 2;
        let l = i ** 2;
        if (m - l === num) return `${m}-${l}`;
    }
    return "";
};
// LOOK INTO INTERFACE
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️ INCLUDE THIS IN EXAMPLES: ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: ODD ONES OUT
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:❗️❗️❗️ COUNT OCCORRENCES, INTERFACE KEYVALUE ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
The town sheriff dislikes odd numbers and wants all odd numbered families out of town! In town crowds can form and individuals are often mixed with other people and families. However you can distinguish the family they belong to by the number on the shirts they wear. As the sheriff's assistant it's your job to find all the odd numbered families and remove them from the town!
 
Challenge: You are given a list of numbers. The numbers each repeat a certain number of times. Remove all numbers that repeat an odd number of times while keeping everything else the same.
 
oddOnesOut([1, 2, 3, 1, 3, 3]) = [1, 1]
In the above example:
 
the number 1 appears twice
the number 2 appears once
the number 3 appears three times
2 and 3 both appear an odd number of times, so they are removed from the list. The final result is: [1,1]
 
Here are more examples:
 
oddOnesOut([1, 1, 2, 2, 3, 3, 3]) = [1, 1, 2, 2]
oddOnesOut([26, 23, 24, 17, 23, 24, 23, 26]) = [26, 24, 24, 26]
oddOnesOut([1, 2, 3]) = []
oddOnesOut([1]) = []
Are you up to the challenge?
*/

const oddOnesOut = (numsArr: number[]): number[] => {
    let solution: number[] = [];

    interface StrKey {
        [key: string]: number;
    }

    const counter: StrKey = {};
    numsArr.forEach((number) => (counter[number] = (counter[number] || 0) + 1));

    // { '1': 2, '2': 1, '3': 3 }
    console.log(counter);

    // numsArr.forEach((num, idx) => {
    //     const occurrence: number = counter[num.toString()];
    //     const isOdd: boolean = (occurrence & 1) === 1;
    //     console.log("num:", num, "occurrence:", occurrence, "isOdd:", isOdd);

    //     if (!isOdd) {
    //         // numsArr.splice(numsArr[idx], 1);
    //         solution.push(num);
    //     }
    // });

    solution = numsArr.filter((num) => {
        const occurrence: number = counter[num.toString()];
        const isOdd: boolean = (occurrence & 1) === 1;

        console.log("num:", num, "occurrence:", occurrence, "isOdd:", isOdd);

        return !isOdd;
    });

    return solution;
};

/*
{ '1': 2, '2': 1, '3': 3 }
num: 1 occurrence: 2 isOdd: false
num: 2 occurrence: 1 isOdd: true
num: 3 occurrence: 3 isOdd: true
num: 1 occurrence: 2 isOdd: false
num: 3 occurrence: 3 isOdd: true
num: 3 occurrence: 3 isOdd: true
[ 1, 1 ]
*/

/*
it("Testing for [1, 2, 3, 1, 3, 3]", function() {
    assert.deepEqual(oddOnesOut([1, 2, 3, 1, 3, 3]), [1, 1]);
  });
  it("Testing for [75, 68, 75, 47, 68]", function() {
    assert.deepEqual(oddOnesOut([75, 68, 75, 47, 68]), [75, 68, 75, 68]);
  });
  it("Testing for [42, 72, 32, 4, 94, 82, 67, 67]", function() {
    assert.deepEqual(oddOnesOut([42, 72, 32, 4, 94, 82, 67, 67]), [67, 67]);
  });
  it("Testing for [100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100]", function() {
    assert.deepEqual(oddOnesOut([100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100]), [100, 100, 100, 100]);
  });
  it("Testing for [82, 86, 71, 58, 44, 79, 50, 44, 79, 67, 82, 82, 55, 50]", function() {
    assert.deepEqual(oddOnesOut([82, 86, 71, 58, 44, 79, 50, 44, 79, 67, 82, 82, 55, 50]), [44, 79, 50, 44, 79, 50]);
  });
*/

// console.log(oddOnesOut([1, 2, 3, 1, 3, 3]));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

const oddOnesOut2 = (nums: number[]) =>
    nums.filter((x) => nums.filter((n) => n == x).length % 2 == 0);

function oddOnesOut3(nums: number[]) {
    let count = nums.reduce((a: any, c: number) => {
        a[c] = (a[c] | 0) + 1;
        return a;
    }, {});
    return nums.filter((v) => count[v] % 2 === 0);
}

// ===========================================================

function oddOnesOut4(nums: number[]): number[] {
    let interfaceArray: KeyValue[] = [];

    for (let singleValue of nums) {
        let foundObject: KeyValue | undefined = interfaceArray.find(
            (data) => data.key == singleValue
        );
        if (foundObject) {
            foundObject.value++;
        } else {
            interfaceArray.push({ key: singleValue, value: 1 });
        }
    }

    return nums.filter((num) => {
        let foundObject: KeyValue | undefined = interfaceArray.find(
            (element) => element.key === num
        );
        return foundObject && foundObject.value % 2 == 0;
    });
}

// ❗️❗️❗️ COUNT OCCORRENCES, INTERFACE KEYVALUE ❗️❗️❗️
interface KeyValue {
    key: number;
    value: number;
}

// ===========================================================

// ❗️❗️❗️ WITHOUT INTERFACE ❗️❗️❗️

function oddOnesOut5(nums: number[]) {
    const obj: { [key: string]: number } = {};

    nums.forEach((num) => (obj[num] ? obj[num]++ : (obj[num] = 1)));

    return nums.filter((num) => obj[num] % 2 === 0);
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: THE OFFICE VI - SABBATICAL
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:  ❗️❗️❗️ JS REGEX OBJECT ❗️❗️❗️ COUNT OCCURENCES IN STRING WITH MATCH().LENTGTH
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Learning to code around your full time job is taking over your life. You realise that in order to make significant steps quickly, it would help to go to a coding bootcamp in London.
 
Problem is, many of them cost a fortune, and those that don't still involve a significant amount of time off work - who will pay your mortgage?!
 
To offset this risk, you decide that rather than leaving work totally, you will request a sabbatical so that you can go back to work post bootcamp and be paid while you look for your next role.
 
You need to approach your boss. Her decision will be based on three parameters:
 
val = your value to the organisation
happiness = her happiness level at the time of asking and finally
The numbers of letters from 'sabbatical' that are present in string s.
 
Note that if s contains three instances of the letter 'l', that still scores three points, even though there is only one in the word sabbatical.
 
If the sum of the three parameters (as described above) is > 22, return 'Sabbatical! Boom!', else return 'Back to your desk, boy.'.
*/
const sabb = (str: string, val: number, happy: number): string => {
    // GET UNUQUE LETTERS FROM TEST WORD "SABBATICAL"
    const testWord: string = "sabbatical";
    const uniqueChars = new Set(testWord.split(""));

    // FIND HOW MANY TIMES char APPEARS IN str
    let counter: number = 0;
    uniqueChars.forEach((char) => {
        // MATCH CURRENT CHAR GLOBALLY
        //  ❗️❗️❗️ JS REGEX OBJECT ❗️❗️❗️
        let re = new RegExp(char, "g");
        let occurence: number | undefined = str.match(re)?.length;
        // ONLY INCREMENT COUNTER IF MATCH ARRAY HAS LENGTH
        counter += occurence ? occurence : 0;
    });

    // GET TOTAL
    const totalScore: number = val + happy + counter;
    // CALC SOLUTION
    return totalScore > 22 ? "Sabbatical! Boom!" : "Back to your desk, boy.";
};

/*
assert.strictEqual(sabb('Can I have a sabbatical?', 5, 5), 'Sabbatical! Boom!');
    assert.strictEqual(sabb('Why are you shouting?', 7, 2), 'Back to your desk, boy.'); 
    assert.strictEqual(sabb('What do you mean I cant learn to code??', 8, 9), 'Sabbatical! Boom!'); 
    assert.strictEqual(sabb('Please calm down', 9, 1), 'Back to your desk, boy.'); 
    assert.strictEqual(sabb('I can?! Nice. FaC..Im coming :D', 9, 9), 'Sabbatical! Boom!'); 
*/

// 'Sabbatical! Boom!'
// console.log(sabb("Can I have a sabbatical?", 5, 5));

// 'Back to your desk, boy.
// console.log(sabb("Why are you shouting?", 7, 2));
// console.log();
// console.log();
// console.log();

// Test.assertEquals(sabb('Can I have a sabbatical?', 5, 5), 'Back to your desk, boy.');
//                          ^     ^   ^ ^^^^^^^^^^           ... => 13+5+5 == 23 !
// Test.assertEquals(sabb('Why are you shouting?', 7, 2), 'Sabbatical! Boom!');
//                             ^       ^   ^^                ... 4+7+2 == 13 !

//============= OTHER CODEWARS SOLUTIONS: =============

const sabb2 = (s: string, val: number, happiness: number): string =>
    (s.match(/[sabticl]/gi) || []).length + val + happiness > 23 - 1
        ? "Sabbatical! Boom!"
        : "Back to your desk, boy.";

function sabb3(s: string, v: number, h: number): string {
    return v + h + [...s].filter((e) => "sabticl".includes(e)).length < 23
        ? "Back to your desk, boy."
        : "Sabbatical! Boom!";
}

function sabb4(s: string, v: number, h: number): string | any {
    const c: number = (s.match(/[sabticl]/gi) || []).length;
    return c + v + h > 22 ? "Sabbatical! Boom!" : "Back to your desk, boy.";
}

function sabb5(s: string, val: number, happiness: number): string {
    const t = [...s.toLowerCase()].reduce(
        (a, c) => ("sabticl".includes(c) ? a + 1 : a),
        0
    );
    const score = t + val + happiness;
    return score > 22 ? "Sabbatical! Boom!" : "Back to your desk, boy.";
}

function sabb6(s: string, val: number, happiness: number): string {
    let char_arr: string[] = ["s", "a", "b", "t", "i", "c", "l"];
    return s.split("").filter((char: string) => char_arr.includes(char))
        .length +
        val +
        happiness >
        22
        ? "Sabbatical! Boom!"
        : "Back to your desk, boy.";
}
// INCLUDE THIS IN EXAMPLES: ❗️❗️❗️ ~~ ❗️❗️❗️
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️ REFACTOR WITH MATH.FLOOR AND DIVISION ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: MOD 256 WITHOUT THE MOD OPERATOR,
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ ~~ ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
MOD 256 without the MOD operator
The MOD-operator % (aka mod/modulus/remainder):
 
Returns the remainder of a division operation.
The sign of the result is the same as the sign of the first operand.
(Different behavior in Python!)
The short unbelievable mad story for this kata:
I wrote a program and needed the remainder of the division by 256. And then it happened: The "5"/"%"-Key did not react. It must be broken! So I needed a way to:
 
Calculate the remainder of the division by 256 without the %-operator.
Also here some examples:
 
Input 254  -> Result 254
Input 256  -> Result 0
Input 258  -> Result 2 
Input -258 -> Result -2 (in Python: Result: 254!)
It is always expected the behavior of the MOD-Operator of the language!
 
The input number will always between -10000 and 10000.
 
For some languages the %-operator will be blocked. If it is not blocked and you know how to block it, tell me and I will include it.
 
For all, who say, this would be a duplicate: No, this is no duplicate! There are two katas, in that you have to write a general method for MOD without %. But this kata is only for MOD 256. And so you can create also other specialized solutions. ;-)
 
Of course you can use the digit "5" in your solution. :-)
 
I'm very curious for your solutions and the way you solve it. I found several interesting "funny" ways.
*/
const mod256WithoutMod = (num: number): number => {
    const divisor: number = 256;
    const isPositive: boolean = num > 0;

    if (Math.abs(num) < divisor) return num;

    while (Math.abs(num) >= divisor) {
        num = Math.abs(num) - divisor;
    }

    if (num === 0) return 0;
    return isPositive ? num : -num;
};

/*
assert.equal(solution.mod256WithoutMod(254), 254);
    assert.equal(solution.mod256WithoutMod(256), 0);
    assert.equal(solution.mod256WithoutMod(258), 2);
    
    assert.equal(solution.mod256WithoutMod(-254), -254);
    assert.equal(solution.mod256WithoutMod(-256), 0);
    assert.equal(solution.mod256WithoutMod(-258), -2);
*/

// console.log(mod256WithoutMod(-254));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function mod256WithoutMod2(n: number): number {
    return n % 256;
}

function mod256WithoutMod3(n: number): number {
    if (n < 0) {
        return -mod256WithoutMod(-n);
    }
    return n & 255;
}

function mod256WithoutMod4(n: number): number {
    return n < 0 ? -mod256WithoutMod(-n) : n & 0xff;
}

function mod256WithoutMod5(n: number): number {
    return n < 0 ? -(-n & 255) : n & 255;
}

function mod256WithoutMod6(n: number): number {
    return n >= 0
        ? (n / 256 - Math.floor(n / 256)) * 256
        : (n / 256 - Math.ceil(n / 256)) * 256;
}

// ❗️❗️❗️ ~~ ❗️❗️❗️
function mod256WithoutMod7(n: number): number {
    return n - ~~(n / 256) * 256;
}
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️ INCLUDE THIS IN EXAMPLES  ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: ABSENT VOWEL
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️  FINDINDEX() ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Your job is to figure out the index of which vowel is missing from a given string:
 
A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.
 
Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
 
*/
const absentVowel = (text: string): number => {
    let solution: number = 0;

    const vowels: string = "aeiou";

    // ['i', 'e', 'u', 'i','e', 'a', 'a', 'a','e', 'a', 'e', 'i','e']
    const allVowels: string[] = text.match(/[aeiou]/g)!;
    // console.log(allVowels);
    // Set(4) { 'o', 'e', 'u', 'i' }
    const uniqueVowels = new Set(allVowels);
    // console.log(uniqueVowels);

    for (let i = 0; i < vowels.length; i += 1) {
        if (!uniqueVowels.has(vowels[i])) {
            solution = i;
            break;
        }
    }
    // console.log(solution);
    return solution;
};

// assert.equal(absentVowel("John Doe hs seven red pples under his bsket"), 0)
// assert.equal(absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3)

// console.log(absentVowel("John Doe hs seven red pples under his bsket"));
// console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// ❗️❗️❗️  FINDINDEX() ❗️❗️❗️
const absentVowel2 = (str: string): number =>
    [..."aeiou"].findIndex((v) => !str.includes(v));

// ❗️❗️❗️  FINDINDEX() ❗️❗️❗️
function absentVowel3(x: string): number {
    return [..."aeiou"].findIndex((c) => !x.toLowerCase().includes(c));
}

function absentVowel4(x: string) {
    let vowels: Array<string> = ["a", "e", "i", "o", "u"];
    let result: number = 0;
    vowels.forEach((v) => {
        if (!x.includes(v)) {
            result = vowels.indexOf(v);
            return;
        }
    });
    return result;
}

function absentVowel5(x: string): number | undefined {
    var vowels: string = "aeiou";
    for (let i in [...vowels]) {
        if (x.toLowerCase().indexOf(vowels[i]) === -1) {
            return Number(i);
        }
    }
}

function absentVowel6(x: string) {
    if (/a/i.test(x) === false) return 0;
    if (/e/i.test(x) === false) return 1;
    if (/i/i.test(x) === false) return 2;
    if (/o/i.test(x) === false) return 3;
    if (/u/i.test(x) === false) return 4;
}

function absentVowel7(x: string): number {
    switch (true) {
        case !x.includes("a"):
            return 0;
            break;
        case !x.includes("e"):
            return 1;
            break;
        case !x.includes("i"):
            return 2;
            break;
        case !x.includes("o"):
            return 3;
            break;
        case !x.includes("u"):
            return 4;
            break;
        default:
            return NaN;
    }
}
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️ LOOK INTO THIS  ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: PERIMETER SEQUENCE
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Perimeter sequence
The first three stages of a sequence are shown.
blocks
The blocksize is a by a and a ≥ 1.
What is the perimeter of the nth shape in the sequence (n ≥ 1) ?
*/
function perimeterSequence(a: number, n: number): number {
    return n * 4 * a;
}

// 12
// console.log(perimeterSequence(1,3));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// ❗️❗️❗️ LOOK INTO THIS  << ❗️❗️❗️
const perimeterSequence2 = (a: number, n: number): number => (a * n) << 2;

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️ LOOK INTO THIS  ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: DRIVING LICENCE
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: EXTRACT BITS FROM DATA STRING, ❗️❗️❗️ DATE.GETFULLYEAR() ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Introduction
In the United Kingdom, the driving licence is the official document which authorises its holder to operate various types of motor vehicle on highways and some other roads to which the public have access. In England, Scotland and Wales they are administered by the Driver and Vehicle Licensing Agency (DVLA) and in Northern Ireland by the Driver & Vehicle Agency (DVA). A driving licence is required in the UK by any person driving a vehicle on any highway or other road defined in s.192 Road Traffic Act 1988[1] irrespective of ownership of the land over which the road passes, thus including many which allow the public to pass over private land; similar requirements apply in Northern Ireland under the Road Traffic (Northern Ireland) Order 1981. (Source Wikipedia)
Driving
Task
The UK driving number is made up from the personal details of the driver. The individual letters and digits can be code using the below information
Rules
1–5: The first five characters of the surname (padded with 9s if less than 5 characters)
6: The decade digit from the year of birth (e.g. for 1987 it would be 8)
7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)
9–10: The date within the month of birth
11: The year digit from the year of birth (e.g. for 1987 it would be 7)
12–13: The first two initials of the first name and middle name, padded with a 9 if no middle name
14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9
15–16: Two computer check digits. We will always use "AA"
Your task is to code a UK driving license number using an Array of data. The Array will look like
data = ["John","James","Smith","01-Jan-2000","M"]
Where the elements are as follows
0 = Forename
1 = Middle Name (if any)
2 = Surname
3 = Date of Birth (In the format Day Month Year, this could include the full Month name or just shorthand ie September or Sep)
4 = M-Male or F-Female
You will need to output the full 16 digit driving license number.
Good luck and enjoy!
*/
const driver = (data: Array<string>): string => {
    console.log(data);

    // 1-5 SURNAME
    const inputSurname: string = data[2];
    console.log(inputSurname);
    let surname: string = "";
    if (inputSurname.length >= 5) {
        surname = inputSurname.substring(0, 5);
    }
    if (inputSurname.length < 5) {
        // MIGHT NOT WORK IN CODEWARS
        // validSurname = surname.padEnd(5, "9");
        surname = `${inputSurname}${"x".repeat(5 - inputSurname.length)}`;
    }
    console.log("surname", surname);

    // 6 DECADE DIGIT FROM DOB
    const dob: string = data[3].match(/\d{4}/)![0];
    // const year: string = dob.match;
    console.log(dob);
    const decadeDigit: string = dob.toString()[2];
    console.log(decadeDigit);

    // 7-8 MONTH OF BIRTH
    let monthStr: any = data[3]
        .match(/[a-z]{3,}/gi)![0]
        .toLowerCase()
        .slice(0, 3);
    console.log(monthStr);

    enum months {
        jan = 1,
        feb,
        mar,
        apr,
        may,
        jun,
        jul,
        aug,
        sep,
        oct,
        nov,
        dec,
    }

    // HAVE TO MAKE MONTHSTRING ANY, OTHERWISE WE GET THIS ERROR:
    // error TS7015: Element implicitly has an 'any' type because index expression is not of type 'number'.
    let monthDigit: any = Number(months[monthStr]); // NUMBER
    console.log(typeof monthDigit);
    // CONVERT TO STRING AND ADD LEADING "0" IF LENGTH IS 1
    if (monthDigit < 10) {
        // TYR PADSTART
        monthDigit = `0${monthDigit}`; // STRING
    } else {
        monthDigit = monthDigit.toString();
    }

    // INCREMENT FIRST DIGIT BY 5 IF DRIVER IS FEMALE
    if (data[4].toLowerCase() === "f") {
        // CONVERT TO NUMBER, ADD 50 AND CONVERT BACK TO STRING
        monthDigit = (Number(monthDigit) + 50).toString();
    }
    console.log(monthDigit);

    // 9-10 DATE WITHIN MONTH OF BIRTH
    const date: string = data[3].match(/\d{2}/)![0];
    console.log(date);

    // 11 YEAR DIGIT FROM DOB
    const yearDigit: string = dob.toString()[3];
    console.log(yearDigit);

    // 12-13 FIRST TWO INITIALS, PADDED WITH "9" IF NO MIDDLE NAME
    let initials: string = data[0][0];
    initials += data[1] ? data[1][0] : "9";
    console.log(initials);

    console.log(surname);
    const solution: string = `${surname.toUpperCase()}${decadeDigit}${monthDigit}${date}${yearDigit}${initials}9AA`;
    // const solution: string = surname;

    return solution;
};

/*
data = ["John","James","Smith","01-Jan-2000","M"]
    assert.equal(driver(data), "SMITH001010JJ9AA", "Should return 'SMITH001010JJ9AA'")
    
    data = ["Johanna","","Gibbs","13-Dec-1981","F"]
    assert.equal(driver(data), "GIBBS862131J99AA", "Should return 'GIBBS862131J99AA'")
    
    data = ["Andrew","Robert","Lee","02-September-1981","M"]
    assert.equal(driver(data), "LEE99809021AR9AA", "Should return 'LEE99809021AR9AA'")
*/

const data = ["John", "James", "Smith", "01-Jan-2000", "M"];
// const data = ["John", "James", "Carpenter", "01-Jan-2000", "M"];
// const data = ["John", "James", "J", "01-Jan-2010", "M"];

// 'SMITH 0 01 01 0 JJ 9 AA'
// console.log(driver(data));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// ❗️❗️❗️ DATE.GETFULLYEAR() ❗️❗️❗️
function driver2(data: Array<string>): string {
    var r = data[2].toUpperCase().substring(0, 5);
    var i;
    console.log(data[2]);
    for (i = data[2].length; i < 5; i++) {
        r += "9";
    }
    var date = new Date(data[3]);
    r += date.getFullYear().toString().charAt(2); // 6
    r += ("0" + (date.getMonth() + 1 + (data[4] === "M" ? 0 : 50))).slice(-2); // 7-8
    r += ("0" + date.getDate()).slice(-2); //9 - 10
    r += date.getFullYear().toString().charAt(3); // 11
    r +=
        (data[0].length ? data[0].charAt(0) : "9") +
        (data[1].length ? data[1].charAt(0) : "9");
    r += "9AA";

    return r;
}

function driver3(data: Array<string>): string {
    let output: string = "";

    data[2] = data[2].toUpperCase();

    // 5 letters of surname + ending 9s
    output += data[2].substr(0, 5);
    while (output.length < 5) {
        output += "9";
    }

    // Decade digit
    output += data[3].substr(-2, 1);

    // Month
    let date = new Date(data[3]);
    let month = (date.getMonth() + 1).toString();
    if (month.length < 2) {
        month = 0 + month;
    }
    if (data[4] == "F") {
        output += parseInt(month[0]) + 5 + month[1];
    } else {
        output += month;
    }

    // Date
    let dateDay = date.getDate().toString();
    if (dateDay.length < 2) {
        dateDay = "0" + dateDay;
    }
    output += dateDay;

    // Year digit
    output += date.getFullYear().toString().substr(-1);

    // Initials
    output += data[0].substr(0, 1);

    if (data[1] == "") {
        output += "9";
    } else {
        output += data[1].substr(0, 1);
    }

    // Arbitrary + Check
    output += "9AA";

    return output;
}

function driver4(data: Array<string>): string {
    let date = new Date(data[3]);
    let apellido = data[2].toUpperCase().substring(0, 5);

    if (apellido.length < 5) {
        for (
            let i = 0;
            i < 5 - data[2].toUpperCase().substring(0, 4).length;
            i++
        ) {
            apellido = apellido.concat("9");
        }
    }

    return (
        apellido +
        data[3].split("-")[2].substring(2, 3) +
        (data[4] === "F"
            ? String(date.getMonth() + 51)
            : date.getMonth() + 1 < 10
            ? "0" + String(date.getMonth() + 1)
            : String(date.getMonth() + 1)) +
        (date.getDate() < 10
            ? "0" + String(date.getDate())
            : String(date.getDate())) +
        data[3].split("-")[2].substring(3, 4) +
        data[0].substring(0, 1) +
        (data[1] !== "" ? data[1].substring(0, 1) : "9") +
        "9AA"
    );
}

function driver5(data: Array<string>): string {
    const [name, middleName, surname, birthDate, sex] = data;
    const [day, month, year] = birthDate.split("-");
    let result = "";
    const monthsAlphabet = {
        January: "01",
        Jan: "01",
        February: "02",
        Feb: "02",
        March: "03",
        Mar: "03",
        April: "04",
        Apr: "04",
        May: "05",
        June: "06",
        Jun: "06",
        Jule: "07",
        Jul: "07",
        August: "08",
        Aug: "08",
        September: "09",
        Sep: "09",
        October: "10",
        Oct: "10",
        November: "11",
        Nov: "11",
        December: "12",
        Dec: "12",
    };
    // 1-5
    result += surname.slice(0, 5).padEnd(5, "9");
    // 6
    result += birthDate.substr(-2, 1);
    // 7-8
    const monthNumber = monthsAlphabet[month as keyof typeof monthsAlphabet];
    if (sex === "M") {
        result += monthNumber;
    } else {
        const femaleNumber = "" + (Number(monthNumber[0]) + 5) + monthNumber[1];
        result += femaleNumber;
    }
    // 9-10
    result += day;
    // 11
    result += year.substr(-1);
    // 12-13
    const initials = (name[0] || "9") + (middleName[0] || "9");
    result += initials;
    // 14
    result += "9";
    // 15-16
    result += "AA";

    return result.toUpperCase();
}

function driver6(data: Array<string>): string {
    const [first_name, middle_name, last_name, birth, sex] = data;
    return [
        last_name.slice(0, 5).toUpperCase().padEnd(5, "9"),
        birth.charAt(birth.length - 2),
        String(
            new Date(birth).getMonth() + 1 + (sex === "F" ? 50 : 0)
        ).padStart(2, "0"),
        String(new Date(birth).getDate()).padStart(2, "0"),
        birth.charAt(birth.length - 1),
        first_name.charAt(0) +
            (middle_name.charAt(0) ? middle_name.charAt(0) : 9),
        "9AA",
    ].join("");
}

// =============================================================

interface month {
    [key: string]: string;
}

const months: month = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
};

export function driver7(data: Array<string>): string {
    return ""
        .concat(
            data[2].toUpperCase().slice(0, 5),
            data[2].length < 5 ? "9".repeat(5 - data[2].length) : ""
        )
        .concat(data[3].slice(-2, -1))
        .concat(
            data[4] === "F"
                ? (50 + Number(months[data[3].split("-")[1]])).toString()
                : months[data[3].split("-")[1].slice(0, 3)]
        )
        .concat(data[3].split("-")[0])
        .concat(data[3].slice(-1))
        .concat(data[0].slice(0, 1), data[1].length ? data[1].slice(0, 1) : "9")
        .concat("9", "AA");
}

// =============================================================

function driver8(data: Array<string>): string {
    const getMonth = (dateStr: string, shouldIncrement: boolean) => {
        const date = new Date(dateStr);
        const month = date.getMonth() + 1;
        const monthString = month < 10 ? "0" + month : "" + month;
        if (!shouldIncrement) return monthString;

        return `${Number(monthString[0]) + 5}${monthString[1]}`;
    };
    // Good luck

    const oneToFive = Array(5)
        .fill(null)
        .map((e, i) => (data[2][i] ? data[2][i] : "9"))
        .join("");
    const six = data[3].split("-")[2][2];
    const sevenEight = getMonth(data[3], data[4] === "F");
    const nineTen = data[3].split("-")[0];
    const eleven = data[3].split("-")[2][3];
    const twelveThirteen = [data[0][0], data[1][0]]
        .map((elem) => elem || "9")
        .join("");

    return (
        oneToFive +
        six +
        sevenEight +
        nineTen +
        eleven +
        twelveThirteen +
        "9AA"
    ).toUpperCase();
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: BILLIARDS TRIANGLE
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Remember the triangle of balls in billiards? To build a classic triangle (5 levels) you need 15 balls. With 3 balls you can build a 2-level triangle, etc.

For more examples,

pyramid(1) == 1

pyramid(3) == 2

pyramid(6) == 3

pyramid(10) == 4

pyramid(15) == 5
Write a function that takes number of balls (≥ 1) and calculates how many levels you can build a triangle.


*/ const pyramid = (numBalls: number): number => {
    // SOLUTION:
    let levCount: number = 0;
    // NUMBER OF BALLS IN EACH ROW (1-2-3-4-5...)
    let currentRow: number = 0;

    while (true) {
        currentRow += 1;
        // console.log("row:", currentRow);
        numBalls -= currentRow;
        // console.log("numBalls:", numBalls);
        if (numBalls < 0) break;
        levCount += 1;
    }

    // console.log(levCount);

    return levCount;
};

/*
row: 1
numBalls: 19
row: 2
numBalls: 17
row: 3
numBalls: 14
row: 4
numBalls: 10
row: 5
numBalls: 5
row: 6
numBalls: -1
5
*/

/*
 assert.strictEqual(pyramid(1) , 1); 
    assert.strictEqual(pyramid(4) , 2); 
    assert.strictEqual(pyramid(20) , 5); 
    assert.strictEqual(pyramid(100) , 13);
    assert.strictEqual(pyramid(2211) ,66); 
    assert.strictEqual(pyramid(9999) , 140);
*/

// console.log(pyramid(20));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function pyramid2(balls: number): number {
    let level: number = 0;
    while (balls > level) {
        level += 1;
        balls -= level;
    }
    return level;
}

function pyramid3(balls: number): number {
    return Math.floor((-1 + (1 + 4 * balls * 2) ** 0.5) / 2);
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: THE POET AND THE PENDULUM
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Scenario
the rhythm of beautiful musical notes is drawing a Pendulum
 
Beautiful musical notes are the Numbers!alt!alt
Task
Given an array/list [] of n integers , Arrange them in a way similar to the to-and-fro movement of a Pendulum
 
The Smallest element of the list of integers , must come in center position of array/list.
 
The Higher than smallest , goes to the right .
The Next higher number goes to the left of minimum number and So on , in a to-and-fro manner similar to that of a Pendulum.
 
!alt
Notes
Array/list size is at least 3 .
 
In Even array size , The minimum element should be moved to (n-1)/2 index (considering that indexes start from 0)
 
Repetition of numbers in the array/list could occur , So (duplications are included when Arranging).
 
Input >> Output Examples:
pendulum ([6, 6, 8 ,5 ,10]) ==> [10, 6, 5, 6, 8]
Explanation:
Since , 5 is the The Smallest element of the list of integers , came in The center position of array/list
 
The Higher than smallest is 6 goes to the right of 5 .
 
The Next higher number goes to the left of minimum number and So on .
 
Remember , Duplications are included when Arranging , Don't Delete Them .
 
pendulum ([-9, -2, -10, -6]) ==> [-6, -10, -9, -2]
Explanation:
Since , -10 is the The Smallest element of the list of integers , came in The center position of array/list
 
The Higher than smallest is -9 goes to the right of it .
 
The Next higher number goes to the left of -10 , and So on .
 
Remeber , In Even array size , The minimum element moved to (n-1)/2 index (considering that indexes start from 0) .
 
pendulum ([11, -16, -18, 13, -11, -12, 3, 18 ]) ==> [13, 3, -12, -18, -16, -11, 11, 18]
Explanation:
Since , -18 is the The Smallest element of the list of integers , came in The center position of array/list
 
The Higher than smallest is -16 goes to the right of it .
 
The Next higher number goes to the left of -18 , and So on .
 
Remember , In Even array size , The minimum element moved to (n-1)/2 index (considering that indexes start from 0) .
 
Tune Your Code , There are 200 Assertions , 60.000 element For Each .
 
*/
const pendulum = (values: number[]) => {
    // SORT ASCENDING
    const ascArr: number[] = values.sort((a, b) => a - b);
    // console.log(ascArr);

    // INI9TIALIZE SOLUTION WITH SMALLEST ELEMENT
    let solution: number[] = [ascArr[0]];
    // console.log(solution);

    // ALTERNATE BETWEEN PUSH/UNSHIFT
    ascArr.slice(1).forEach((el, idx) => {
        // console.log(el, idx);
        if (!(idx & 1)) {
            solution.push(el);
        } else {
            solution.unshift(el);
        }
    });

    // console.log(solution);

    return solution;
};

/*
it("Check Short length Positives", function() {
    doTest([4, 10, 9], [10, 4, 9]);
    doTest([8, 7, 10, 3], [8, 3, 7, 10]);
    doTest([6, 6, 8, 5, 10], [10, 6, 5, 6, 8]);
    doTest([9, 4, 6, 4, 10, 5], [9, 5, 4, 4, 6, 10]);
    doTest([4, 6, 8, 7, 5], [8, 6, 4, 5, 7]);
    doTest([10, 5, 6, 10], [10, 5, 6, 10]);
    doTest([11, 12, 12], [12, 11, 12]);
  });
  it("Check Medium length Positives", function() {
    doTest([27, 27, 19, 21, 22, 28, 24], [28, 27, 22, 19, 21, 24, 27]);
    doTest([20, 19, 25, 16, 19, 30, 18, 24], [25, 20, 19, 16, 18, 19, 24, 30]);
    doTest([22, 26, 21, 27, 24, 21, 15, 26, 25], [27, 26, 24, 21, 15, 21, 22, 25, 26]);
    doTest([19, 30, 16, 19, 28, 26, 28, 17, 21, 17], [28, 26, 19, 17, 16, 17, 19, 21, 28, 30]);
    doTest([27, 28, 26, 28, 24, 22, 18, 16, 15, 24], [28, 26, 24, 18, 15, 16, 22, 24, 27, 28]);
    doTest([17, 26, 15, 26, 26, 20, 16, 18, 15], [26, 26, 18, 16, 15, 15, 17, 20, 26]);
    doTest([22, 21, 19, 27, 18, 15, 24, 24], [24, 22, 19, 15, 18, 21, 24, 27]);
  });
  it("Check lengthy Positives", function() {
    doTest([33, 38, 38, 36, 43, 48, 32, 40, 47, 50, 33], [50, 47, 40, 38, 33, 32, 33, 36, 38, 43, 48]);
    doTest([49, 40, 41, 41, 39, 43, 40, 46, 30, 47, 46, 40], [47, 46, 41, 40, 40, 30, 39, 40, 41, 43, 46, 49]);
    doTest([48, 41, 38, 35, 50, 46, 38, 42, 37, 49, 44, 32, 37], [50, 48, 44, 41, 38, 37, 32, 35, 37, 38, 42, 46, 49]);
    doTest([49, 30, 39, 30, 40, 44, 43, 48, 47, 50, 42, 48, 33], [50, 48, 47, 43, 40, 33, 30, 30, 39, 42, 44, 48, 49]);
    doTest([48, 43, 35, 47, 39, 38, 38, 46, 49, 32, 42], [49, 47, 43, 39, 38, 32, 35, 38, 42, 46, 48]);
  });
  it("Check Short length Negatives", function() {
    doTest([-9, -2, -10, -6], [-6, -10, -9, -2]);
    doTest([-3, -6, -7], [-3, -7, -6]);
    doTest([-7, -8, -2, -3, -4], [-2, -4, -8, -7, -3]);
    doTest([-8, -8, -9, -10, -10, -3], [-8, -9, -10, -10, -8, -3]);
    doTest([-7, -10, -1, -10, -8], [-1, -8, -10, -10, -7]);
    doTest([-6, -2, -5], [-2, -6, -5]);
  });
  it("Check Medium length Negatives", function() {
    doTest([-2, -11, -6, -11, -4, -3, -5], [-2, -4, -6, -11, -11, -5, -3]);
    doTest([-19, -9, -5, -6, -15, -16, -5, -12], [-5, -9, -15, -19, -16, -12, -6, -5]);
    doTest([-18, -2, -11, -10, -6, -7, -7, -12, -16], [-2, -7, -10, -12, -18, -16, -11, -7, -6]);
    doTest([-10, -10, -12, -13, -5, -10, -4, -17, -5, -12], [-5, -10, -10, -12, -17, -13, -12, -10, -5, -4]);
  });
  it("Check lengthy Negatives", function() {
    doTest([-33, -21, -6, -29, -24, -5, -50, -42, -43, -17, -17], [-5, -17, -21, -29, -42, -50, -43, -33, -24, -17, -6]);
    doTest(
      [-4, -50, -32, -23, -47, -44, -43, -24, -29, -44, -20, -35],
      [-20, -24, -32, -43, -44, -50, -47, -44, -35, -29, -23, -4]
    );
    doTest(
      [-36, -38, -44, -47, -41, -27, -10, -30, -22, -11, -23, -50, -23],
      [-10, -22, -23, -30, -38, -44, -50, -47, -41, -36, -27, -23, -11]
    );
  });
  it("Check Mixture Of Positives And Negatives", function() {
    doTest([-15, 8, 11], [11, -15, 8]);
    doTest([8, -1, -1, -10], [-1, -10, -1, 8]);
    doTest([-8, 15, 8, -3, -11], [15, -3, -11, -8, 8]);
    doTest([15, 17, 3, -20, -1, 3], [15, 3, -20, -1, 3, 17]);
    doTest([-8, -13, -19, -8, 7, 15, -10], [15, -8, -10, -19, -13, -8, 7]);
    doTest([11, -16, -18, 13, -11, -12, 3, 18], [13, 3, -12, -18, -16, -11, 11, 18]);
    doTest([7, -5, -20, 15, 2, 10, 18, 4, -10], [18, 10, 4, -5, -20, -10, 2, 7, 15]);
    doTest([-6, 1, 2, 12, 19, 12, 19, -10, 13, 1], [19, 12, 2, 1, -10, -6, 1, 12, 13, 19]);
  });
  */

// console.log(pendulum([6, 6, 8, 5, 10]));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function pendulum2(values: number[]) {
    const solution: number[] = [];
    values
        .sort((x: number, y: number) => (x > y ? 1 : x === y ? 0 : -1))
        .forEach((x, i) => {
            const fun = i % 2 ? "push" : "unshift";
            solution[fun](x);
        });
    return solution;
}

function pendulum3(values: number[]) {
    return values
        .sort((a, b) => a - b)
        .reduce((previousValue, currentValue, index) => {
            if (index % 2 == 0) {
                previousValue.unshift(currentValue);
            } else {
                previousValue.push(currentValue);
            }

            return previousValue;
        }, [] as Array<number>);
}

function pendulum4(values: number[]) {
    return values
        .sort((a, b) => a - b)
        .reduce<number[]>((result, v, i) => {
            if (i % 2 === 0) result.unshift(v);
            else result.push(v);
            return result;
        }, []);
}

function pendulum5(values: number[]): number[] {
    let fin: any[] = [];
    values
        .sort((a, b) => a - b)
        .forEach((n, i) => (!(i % 2) ? fin.unshift(n) : fin.push(n)));
    return fin;
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: COLLATZ CONJECTURE LENGTH
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
The Collatz Conjecture states that for any natural number n, if n is even, divide it by 2. If n is odd, multiply it by 3 and add 1. If you repeat the process continuously for n, n will eventually reach 1.
 
For example, if n = 20, the resulting sequence will be:
 
[20, 10, 5, 16, 8, 4, 2, 1]
 
Write a program that will output the length of the Collatz Conjecture for any given n. In the example above, the output would be 8.
*/

const collatz = (num: number): number => {
    let counter: number = 1;

    while (num > 1) {
        counter += 1;
        if (num & 1) {
            num = num * 3 + 1;
            // console.log(num);
        } else {
            num /= 2;
            // console.log(num);
        }
    }

    return counter;
};

// assert.strictEqual(collatz(20), 8);
// assert.strictEqual(collatz(15), 18);

// console.log(collatz(20));
// console.log(collatz(15));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function collatz2(n: number): number {
    let numSteps: number = 1;
    while (n !== 1) {
        n = n % 2 ? n * 3 + 1 : n / 2;
        ++numSteps;
    }
    return numSteps;
}

const collatz3 = (n: number): number =>
    n === 1 ? 1 : 1 + collatz(n & 1 ? n * 3 + 1 : n / 2);

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️ INCLUDE THIS IN EXAMPLES : OBJECT.IS(),  MATH.SIGN() ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: IS IT NEGATIVE ZERO
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
There exist two zeroes: +0 (or just 0) and -0.
 
Write a function that returns true if the input number is -0 and false otherwise (True and False for Python).
 
In JavaScript / TypeScript / Coffeescript the input will be a number.
 
In Python / Java / C / NASM / Haskell / the input will be a float.
*/
// const isNegativeZero = (num: number): boolean => {
const isNegativeZero = (num: number) => {
    // NOT STRICT ENOUGH:
    // console.log(Math.sign(num));

    // console.log(Object.is(-0, num));

    return Object.is(-0, num);
};

// describe("Basic Tests", function() {
//     it("should return true for -0", function() {
//       assert.equal(userSolution.isNegativeZero(-0), true);
//     });

//     it("should return false for non-negative-zero numbers", function() {
//       assert.equal(userSolution.isNegativeZero(-Infinity), false);
//       assert.equal(userSolution.isNegativeZero(-5), false);
//       assert.equal(userSolution.isNegativeZero(-4), false);
//       assert.equal(userSolution.isNegativeZero(-3), false);
//       assert.equal(userSolution.isNegativeZero(-2), false);
//       assert.equal(userSolution.isNegativeZero(-1), false);
//       assert.equal(userSolution.isNegativeZero(-Number.MIN_VALUE), false);
//       assert.equal(userSolution.isNegativeZero(0), false);
//       assert.equal(userSolution.isNegativeZero(Number.MIN_VALUE), false);
//       assert.equal(userSolution.isNegativeZero(1), false);
//       assert.equal(userSolution.isNegativeZero(2), false);
//       assert.equal(userSolution.isNegativeZero(3), false);
//       assert.equal(userSolution.isNegativeZero(4), false);
//       assert.equal(userSolution.isNegativeZero(5), false);
//       assert.equal(userSolution.isNegativeZero(Infinity), false);
//     });
//   });

// console.log(isNegativeZero(-0));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function isNegativeZero2(n: number): boolean {
    return Object.is(n, -0);
}

function isNegativeZero3(n: number): boolean {
    return n != 0 ? false : 1 / n == -Infinity;
}

function isNegativeZero4(n: number): boolean {
    return n === 0 && 1 / n === -Infinity;
}

function isNegativeZero5(n: number): boolean {
    const isZero = n === 0;
    const isNegative = 1 / n === -Infinity;
    return isNegative && isZero;
}

function isNegativeZero6(n: number): boolean {
    return n === -0 && 1 / n === -Infinity;
}

const isNegativeZero7 = (n: number): boolean => 1 / n === -Infinity && n === -0;

function isNegativeZero8(n: number): boolean {
    if (n === 0) {
        return 1 / n === -Infinity;
    } else {
        return false;
    }
}
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: HUNGARIAN VOWEL HARMONY
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Vowel harmony is a phenomenon in some languages. It means that "A vowel or vowels in a word are changed to sound the same (thus "in harmony.")" (wikipedia). This kata is based on vowel harmony in Hungarian.
 
Task:
Your goal is to create a function dative() (Dative() in C#) which returns the valid form of a valid Hungarian word w in dative case i. e. append the correct suffix nek or nak to the word w based on vowel harmony rules.
 
Vowel Harmony Rules (simplified)
When the last vowel in the word is
 
a front vowel (e, é, i, í, ö, ő, ü, ű) the suffix is -nek
a back vowel (a, á, o, ó, u, ú) the suffix is -nak
Examples:
dative("ablak") == "ablaknak"
dative("szék") == "széknek"
dative("otthon") == "otthonnak"
Preconditions:
To keep it simple: All words end with a consonant :)
All strings are unicode strings.
There are no grammatical exceptions in the tests.
 
*/
const dative = (word: string): string | undefined => {
    let solution: string = word;
    // GET LAST VOWEL
    const lettersArr: string[] = word.split("");
    // console.log(lettersArr);

    for (let i = lettersArr.length - 1; i >= 0; i -= 1) {
        console.log(lettersArr[i]);
        if (/[eéiíöőüű]/.test(lettersArr[i])) {
            solution += "nek";
            break;
        }
        if (/[aáoóuú]/.test(lettersArr[i])) {
            solution += "nak";
            break;
        }
    }

    return solution;
};

//   const tests: string[][] = [
//     // [input, expected]
//     ['ablak', 'ablaknak'],
//     ['tükör', 'tükörnek'],
//     ['keret', 'keretnek'],
//     ['otthon', 'otthonnak'],
//     ['virág', 'virágnak'],
//     ['tett', 'tettnek'],
//     ['rokkant', 'rokkantnak'],
//     ['rossz', 'rossznak'],
//     ['gonosz', 'gonosznak']
//   ]

// console.log(dative("ablak"));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function dative2(word: string): string | undefined {
    return word + (/[aáoóuú]+/.test(word) ? "nak" : "nek");
}

function dative3(word: string): string | undefined {
    let front = ["e", "é", "i", "í", "ö", "ő", "ü", "ű"];
    let back = ["a", "á", "o", "ó", "u", "ú"];
    for (let i = word.length - 1; i >= 0; i--) {
        if (front.includes(word[i])) return word + "nek";
        else if (back.includes(word[i])) return word + "nak";
    }
}

// ❓❓❓
const dative4 = (word: string) =>
    word +
    (/[aáoóuú]/.test(word.replace(/[b-dghj-np-tv-z]/g, "").slice(-1))
        ? "nak"
        : "nek");

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: FIND THE CALCULATION TYPE
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
You have to create a function calcType, which receives 3 arguments: 2 numbers, and the result of an unknown operation performed on them (also a number).
 
Based on those 3 values you have to return a string, that describes which operation was used to get the given result.
 
The possible return strings are: "addition", "subtraction", "multiplication", "division".
 
Example:
calcType(1, 2, 3) -->   1 ? 2 = 3   --> "addition"
Notes
In case of division you should expect that the result of the operation is obtained by using / operator on the input values - no manual data type conversion or rounding should be performed.
Cases with just one possible answers are generated.
Only valid arguments will be passed to the function.
Only valid arguments will be passed to the function!
*/
const calcType2 = (a: number, b: number, res: number): string => {
    let solution: string = "";

    if (res === a + b) solution = "addition";
    if (res === a * b) solution = "multiplication";
    if (res === a - b) solution = "substraction";
    if (res === a / b) solution = "division";

    return solution;
};

const calcType = (a: number, b: number, res: number): string => {
    let solution: string = "";

    switch (true) {
        case res === a + b:
            solution = "addition";
            break;
        case res === a * b:
            solution = "multiplication";
            break;
        case res === a - b:
            solution = "substraction";
            break;
        case res === a / b:
            solution = "division";
    }

    return solution;
};

//   it('Fixed test for addition', () => {
//     assert.strictEqual(calcType(1, 2, 3), 'addition');
//   });
//   it('Fixed test for multiplication', () => {
//     assert.strictEqual(calcType(10, 4, 40), 'multiplication');
//   });
//   it('Fixed test for subtraction', () => {
//     assert.strictEqual(calcType(10, 5, 5), 'subtraction');
//   });
//   it('Fixed test for division', () => {
//     assert.strictEqual(calcType(9, 5, 1.8), 'division');

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function calcType3(a: number, b: number, c: number): string {
    return "addition|multiplication|subtraction|division".split("|")[
        a + b == c ? 0 : a * b == c ? 1 : a - b == c ? 2 : 3
    ];
}

// ===========================================================

type Operation =
    | "addition"
    | "subtraction"
    | "multiplication"
    | "division"
    | "operation";

export const calcType4 = (a: number, b: number, res: number): Operation => {
    if (a + b === res) return "addition";
    if (a - b === res) return "subtraction";
    if (a / b === res) return "division";
    if (a * b === res) return "multiplication";
    return "operation";
};

// ===========================================================

function calcType5(a: number, b: number, res: number): string {
    return a + b === res
        ? "addition"
        : a - b === res
        ? "subtraction"
        : a * b === res
        ? "multiplication"
        : "division";
}

function calcType6(a: number, b: number, res: number): string {
    if (res >= a + b) {
        return a + b === res ? "addition" : "multiplication";
    }
    return a - b === res ? "subtraction" : "division";
}

function calcType7(a: number, b: number, res: number): string {
    const add = a + b;
    const sub = a - b;
    const mult = a * b;

    if (add === res) {
        return "addition";
    } else if (mult === res) {
        return "multiplication";
    } else if (sub === res) {
        return "subtraction";
    }
    return "division";
}

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️ INCLUDE THIS IN EXAMPLES : SWITCH(TRUE), RECURSION ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: THE FUSC FUNCTION -- Part 1
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: RECURSION, SWITCH(TRUE)
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
The fusc function is defined recursively as follows:
 
1. fusc(0) = 0
2. fusc(1) = 1
3. fusc(2 * n) = fusc(n)
4. fusc(2 * n + 1) = fusc(n) + fusc(n + 1)
The 4 rules above are sufficient to determine the value of fusc for any non-negative input n. For example, let's say you want to compute fusc(10).
 
fusc(10) = fusc(5), by rule 3.
fusc(5) = fusc(2) + fusc(3), by rule 4.
fusc(2) = fusc(1), by rule 3.
fusc(1) = 1, by rule 2.
fusc(3) = fusc(1) + fusc(2) by rule 4.
fusc(1) and fusc(2) have already been computed are both equal to 1.
Putting these results together fusc(10) = fusc(5) = fusc(2) + fusc(3) = 1 + 2 = 3
 
Your job is to produce the code for the fusc function. In this kata, your function will be tested with small values of n, so you should not need to be concerned about stack overflow or timeouts.
 
Hint: Use recursion.
 
There isn't much to explain.
How would you calculate fusc(5)?
Well, 5 = 2 x 2 + 1, and fusc(2 x 2 + 1) = fusc(2) + fusc(3). fusc(3) = fusc(2 x 1 + 1) = fusc(1) + fusc(2). fusc(2) = fusc(2 x 1) = fusc(1) = 1.
Put these results together and you get fusc(5) = 3. Your job is to implement the function fusc.
 
*/
// 1️⃣
const fusc2 = (num: number): any => {
    if (num === 0) return 0;
    if (num === 1) return 1;
    if (num % 2 === 0) return fusc(num / 2);
    if (num % 2 === 1) return fusc((num - 1) / 2) + fusc((num - 1) / 2 + 1);
};

// 2️⃣
const fusc = (num: number): number => {
    if (num < 2) return num;

    return num & 1
        ? fusc((num - 1) / 2) + fusc((num - 1) / 2 + 1)
        : fusc(num / 2);
};

// assert.equal(fusc(0), 0, 'fusc(0)')
// assert.equal(fusc(1), 1, 'fusc(1)')
// assert.equal(fusc(85), 21, 'fusc(85)')

// console.log(fusc(0));
// console.log(fusc(1));
// console.log(fusc(85));

//============= OTHER CODEWARS SOLUTIONS: =============

// ❗️❗️❗️ SWITCH(TRUE), RECURSION ❗️❗️❗️

function fusc7(n: number): number {
    switch (true) {
        case n === 0:
            return 0;
        case n === 1:
            return 1;
        case n % 2 === 0:
            return fusc(n / 2);
        case n % 2 === 1:
            return fusc((n - 1) / 2) + fusc((n - 1) / 2 + 1);
        default:
            throw new Error("Invalid input");
    }
}

const fusc3 = ($: number): number =>
    $ < 2
        ? $
        : $ % 2 === 0
        ? fusc($ / 2)
        : fusc(($ + 1) / 2) + fusc(($ - 1) / 2);

function fusc4(n: number): number {
    if (n === 0 || n === 1) {
        return n;
    }
    if (n % 2 === 0) {
        return fusc(n / 2);
    }
    return fusc((n - 1) / 2) + fusc((n + 1) / 2);
}

function fusc5(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n % 2 === 0) return fusc(n / 2);
    let x = (n - 1) / 2;
    return fusc(x) + fusc(x + 1);
}

function fusc6(
    n: number,
    map = new Map<number, number>([
        [0, 0],
        [1, 1],
    ])
): number {
    if (map.has(n)) {
        return map.get(n)!;
    }
    const half = n >> 1;
    if (n % 2 === 0) {
        const result = fusc(half);
        map.set(n, result);
        return result;
    } else {
        const result = fusc(half) + fusc(half + 1);
        map.set(n, result);
        return result;
    }
}
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: DRYING POTATOES
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
All we eat is water and dry matter.
 
Let us begin with an example:
 
John bought potatoes: their weight is 100 kilograms. Potatoes contain water and dry matter. The water content is 99 percent of the total weight. He thinks they are too wet and puts them in an oven - at low temperature - for them to lose some water.
 
At the output the water content is only 98%.
 
What is the total weight in kilograms (water content plus dry matter) coming out of the oven?
 
He finds 50 kilograms and he thinks he made a mistake: "So much weight lost for such a small change in water content!"
 
Can you help him?
 
Task
Write function potatoes with
 
int parameter p0 - initial percent of water-
int parameter w0 - initial weight -
int parameter p1 - final percent of water -
potatoesshould return the final weight coming out of the oven w1 truncated as an int.
 
Example:
potatoes(99, 100, 98) --> 50
*/
const potatoes = (
    inputCont: number,
    inputWeight: number,
    outputCont: number
): number => {
    // 104.14
    let waterContent: number = (inputWeight * inputCont) / 100;
    console.log(waterContent);

    // 22.86
    const dryWeight: number = inputWeight - (inputWeight * inputCont) / 100;
    console.log(dryWeight);

    const solution: number = inputWeight / (100 - outputCont);
    console.log(solution);

    return 1;
};

// assert.strictEqual(potatoes(82, 127, 80), 114);
//     assert.strictEqual(potatoes(93, 129, 91), 100);

// 114
// console.log(potatoes(82, 127, 80));
// console.log(potatoes(99, 100, 98));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

/*
❗️❗️❗️ FAILING RANDOM TESTS, OUTPUT ARRAY LENGTH EXPECTED TO BE SHORTER THAN INPUT ??? ❗️❗️❗️
Random Tests
makeValley
Log
input------ [ 63, -53, 70, 74, 49, 45, 79, 91, 47, -68, 100, 52, 19, 81, 36, 35, 14, 94, 32 ] ------end
expected [ Array(19) ] to deeply equal [ 94, 74, 49, 35, -53, 19, 45, 63, 81 ]
*/
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: HOW GREEN IS MY VALLEY
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Input : an array of integers.
 
Output : this array, but sorted in such a way that there are two wings:
 
the left wing with numbers decreasing,
 
the right wing with numbers increasing.
 
the two wings have the same length. If the length of the array is odd the wings are around the bottom, if the length is even the bottom is considered to be part of the right wing.
 
each integer l of the left wing must be greater or equal to its counterpart r in the right wing, the difference l - r being as small as possible. In other words the right wing must be nearly as steep as the left wing.
 
The function is make_valley or makeValley or make-valley.
 
a = [79, 35, 54, 19, 35, 25]
make_valley(a) --> [79, 35, 25, *19*, 35, 54]
The bottom is 19, left wing is [79, 35, 25], right wing is [*19*, 35, 54].
79..................54
    35..........35
        25. 
          ..19
 
a = [67, 93, 100, -16, 65, 97, 92]
make_valley(a) --> [100, 93, 67, *-16*, 65, 92, 97]
The bottom is -16, left wing [100, 93, 67] and right wing [65, 92, 97] have same length.
100.........................97
    93..........
               .........92
        67......
               .....65
            -16     
 
a = [66, 55, 100, 68, 46, -82, 12, 72, 12, 38]
make_valley(a) --> [100, 68, 55, 38, 12, *-82*, 12, 46, 66, 72]
The bottom is -82, left wing is [100, 68, 55, 38, 12]], right wing is [*-82*, 12, 46, 66, 72].
 
a = [14,14,14,14,7,14]
make_valley(a) => [14, 14, 14, *7*, 14, 14]
 
a = [14,14,14,14,14]
make_valley(a) => [14, 14, *14*, 14, 14]
A counter-example:
a = [17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]
A solution could be [17, 17, 15, 14, 8, 1, 4, 4, 5, 7, 7]
but the right wing [4, 4, 5, 7, 7] is much flatter than the left one 
[17, 17, 15, 14, 8].
 
Summing the differences between left and right wing:
(17-7)+(17-7)+(15-5)+(14-4)+(8-4) = 44
 
Consider the following solution:
[17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]
Summing the differences between left and right wing:
(17-17)+(15-14)+(8-7)+(7-5)+(4-4) = 4
The right wing is nearly as steep as the right one.
*/
class G9645 {
    public static makeValley(arr: number[]): number[] {
        const descArr: number[] = arr.sort((a, b) => b - a);
        console.log(descArr);

        let leftWing: number[] = [];
        let rightWing: number[] = [];

        for (let i = 0; i < descArr.length; i += 2) {
            console.log(descArr[i]);
            leftWing.push(descArr[i]);
            descArr.splice(i, 1);
            i -= 1;
        }
        console.log("left;", leftWing);
        console.log(descArr);
        rightWing = descArr.reverse();
        console.log("right;", rightWing);

        const solution: number[] = leftWing.concat(rightWing);
        console.log("solution:", solution);

        return solution;
    }
}

// testing(solution.G964.makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]), [17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]);
// testing(solution.G964.makeValley([20, 7, 6, 2]), [20, 6, 2, 7]);
// testing(solution.G964.makeValley([14, 10, 8]), [14, 8, 10]);
// testing(solution.G964.makeValley([20, 18, 17, 13, 12, 12, 10, 9, 4, 2, 2, 1, 1]), [20, 17, 12, 10, 4, 2, 1, 1, 2, 9, 12, 13, 18]);

// [17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]);
// console.log(G9645.makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]));
// [20, 6, 2, 7]
// console.log(G9645.makeValley([20, 7, 6, 2]));
// ❗️❗️❗️
// to deeply equal [ 55, 16 ]
// console.log(G9645.makeValley([-50, 16, 55, 48, 68]));
// ❗️❗️❗️
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: CALCULATE MEAN AND CONCAT STRINGS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
You will be given an array which will include both integers and characters.
 
Return an array of length 2 with a[0] representing the mean of the ten integers as a floating point number. There will always be 10 integers and 10 characters. Create a single string with the characters and return it as a[1] while maintaining the original order.
 
lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']
Here is an example of your return
 
[3.6, "udiwstagwo"]
In C# and Java the mean return is a double.
*/
const mean = (list: string[]): [number, string] => {
    // list
    // => ['6', '1', '6', '4','6', '1', '2', '8','2', '0']
    // => 36
    // 3.6
    const ave =
        list
            .filter((el) => /\d/.test(el))
            .map((numStr) => Number(numStr))
            .reduce((acc, curr) => acc + curr) /
        list.filter((el) => /\d/.test(el)).length;
    console.log(ave);

    // list
    // => ['u', 'd', 'i', 'w','s', 't', 'a', 'g','w', 'o']
    // =>
    const charStr: string = list.filter((el) => /[^0-9]/.test(el)).join("");
    console.log(charStr);

    const solution: [number, string] = [ave, charStr];

    return solution;
};

let list = [
    "u",
    "6",
    "d",
    "1",
    "i",
    "w",
    "6",
    "s",
    "t",
    "4",
    "a",
    "6",
    "g",
    "1",
    "2",
    "w",
    "8",
    "o",
    "2",
    "0",
];
//   console.log(`Testing  ${lst}`);
//   assert.equal(JSON.stringify(solution.mean(lst)),JSON.stringify([3.6, "udiwstagwo"]));
//   lst = ["0", "c", "7", "x", "6", "2", "3", "5", "w", "7", "0", "y", "v", "u", "h", "i", "n", "u", "0", "0"];
//   console.log(`Testing  ${lst}`);
//   assert.equal(JSON.stringify(solution.mean(lst)),JSON.stringify([3.0, "cxwyvuhinu"]));
//   lst = ["0", "u", "a", "y", "0", "a", "9", "q", "3", "v", "g", "7", "6", "4", "y", "d", "8", "6", "0", "d"];
//   console.log(`Testing  ${lst}`);
//   assert.equal(JSON.stringify(solution.mean(lst)),JSON.stringify([4.3, "uayaqvgydd"]));
//   lst = ["s", "n", "9", "l", "0", "m", "i", "z", "9", "7", "y", "4", "z", "3", "3", "k", "4", "1", "0", "k"];
//   console.log(`Testing  ${lst}`);
//   assert.equal(JSON.stringify(solution.mean(lst)),JSON.stringify([4.0, "snlmizyzkk"]));
//   lst = ["5", "v", "u", "k", "8", "4", "9", "b", "9", "g", "5", "z", "3", "f", "6", "u", "i", "6", "6", "t"];
//   console.log(`Testing  ${lst}`);
//   assert.equal(JSON.stringify(solution.mean(lst)),JSON.stringify([6.1, "vukbgzfuit"]));
//   lst = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "a", "a", "d", "d", "g", "q", "u", "v", "y", "y"];
//   console.log(`Testing  ${lst}`);
//   assert.equal(JSON.stringify(solution.mean(lst)),JSON.stringify([0.9, "aaddgquvyy"]));
//   lst = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "a", "a", "d", "d", "g", "q", "u", "v", "y", "y"];
//   console.log(`Testing  ${lst}`);
//   assert.equal(JSON.stringify(solution.mean(lst)),JSON.stringify([1.0, "aaddgquvyy"]));

// console.log(mean(list));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function mean2(lst: string[]): any[] {
    let sum: number = 0;
    let count: number = 0;
    let str: string = "";

    for (let ch of lst) {
        if (ch >= "0" && ch <= "9") {
            sum += +ch;
            count += 1;
        } else {
            str += ch; // In JS/TS, '+=' operator may be fastest concat.
        }
    }

    return [sum / count, str];
}

function mean3(lst: string[]): [number, string] {
    const a: number =
        lst.reduce((sum, x) => sum + (/\d+/.test(x) ? +x : 0), 0) / 10;
    const b: string = lst.join("").replace(/\d/g, "");
    return [a, b];
}

const mean4 = (arr: string[]): [number, string] => {
    const [numbers, letters] = [/\d/, /[a-zA-Z]/].map((regex) =>
        arr.filter((value) => regex.test(value))
    );
    return [
        numbers.reduce((acc, n) => acc + parseInt(n), 0) / numbers.length,
        letters.reduce((acc, s) => acc + s, ""),
    ];
};

function mean5(lst: string[]): [number, string] {
    let numbers: any[] = [];
    let strings: any[] = [];
    lst.forEach((it: any) => {
        Number.isFinite(+it) ? numbers.push(+it) : strings.push(it);
    });
    return [
        numbers.reduce((n1, n2) => n1 + n2) / numbers.length,
        strings.join(""),
    ];
}

function mean6(lst: string[]): [number, string] {
    let arrNum = lst.filter((x) => x.match(/[0-9]/g)).map(Number);

    let len = arrNum.length;
    let valmis = arrNum.reduce((a, b) => a + b, 0);

    let arrStr = lst
        .filter((x) => x.match(/[a-z]/g))
        .map(String)
        .join("");

    return [valmis / len, arrStr];
}

//   function mean7(lst: string[]): [number, string] {
//     let sum = 0, chars = "";
//     for (let i = 0; i < lst.length; i++) {
//       if (!isNaN(lst[i])) sum += parseInt(lst[i]);
//       else chars += lst[i];
//     }
//     return [sum / 10, chars];
//   }

function mean8(lst: string[]) {
    var total: number = 0,
        str: string = "";
    for (let val of lst) {
        val.charCodeAt(0) > 64 ? (str += val) : (total += parseInt(val));
    }
    return [total / 10, str];
}

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️ INCLUDE THIS IN EXAMPLES ❗️❗️❗️
// ❗️❗️❗️ LOOK INTO OBJECT.ENTRIES/VALUES/KEYS ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: SPLIT THE BILL
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: OBJECT.ENTRIES/VALUES/KEYS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
It's tricky keeping track of who is owed what when spending money in a group. Write a function to balance the books.
 
The function should take one parameter: an object/dict with two or more name-value pairs which represent the members of the group and the amount spent by each.
The function should return an object/dict with the same names, showing how much money the members should pay or receive.
Further points:
 
The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
If value is a decimal, round to two decimal places.
Translations and comments (and upvotes!) welcome.
 
Example
3 friends go out together: A spends £20, B spends £15, and C spends £10. The function should return an object/dict showing that A should receive £5, B should receive £0, and C should pay £5.
 
var group = {
    A: 20, 
    B: 15, 
    C: 10
}
 
 
splitTheBill(group) // returns {A: 5, B: 0, C: -5}
*/
const splitTheBill = (obj: {
    [k: string]: number;
}): { [k: string]: number } => {
    // [ [ 'A', 20 ], [ 'B', 15 ], [ 'C', 10 ] ]
    console.log(Object.values(obj));

    // [ 20, 15, 10 ] => 45 / 3 => 15
    const aveCost: number =
        Object.values(obj).reduce((acc, curr) => {
            return acc + curr;
        }) / Object.values(obj).length;

    // LOOP OVER VALUES AND SUBSTRACT AVECOST TO GET AMOUNT TO RECEIVE
    for (let key in obj) {
        obj[key] = Number((obj[key] - aveCost).toFixed(2));
    }

    // { A: 5, B: 0, C: -5 }
    return obj;
};

// {A: 5, B: 0, C: -5}
// console.log(splitTheBill({ A: 20, B: 15, C: 10 }));
// {A: 15, B: 0, X: -15}
// console.log(splitTheBill({A: 40, B: 25, X: 10}));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// function splitTheBill2(x: Object): Object {
//     let j = Object.keys(x).reduce((sum, key) => sum + x[key], 0);
//     let average = j / Object.keys(x).length;
//     const result = {};
//     for (let key in x)
//         result[key] = Number((x[key] - average).toFixed(2));
//     return result;
// }

type NameValObj = { [k: string]: number };
type MyTuple = [string, number];

export function splitTheBill3(x: NameValObj): NameValObj {
    const entries: MyTuple[] = Object.entries(x);
    const sum = entries.reduce((s, [_, v]) => s + v, 0);
    const average = sum / entries.length;

    return entries.reduce((result: NameValObj, [k, v]) => {
        result[k] = Number((v - average).toFixed(2));
        return result;
    }, {});
}

// function splitTheBill4(group: Record<string, number>): Record<string, number> {
//     const names = Object.keys(group);

//     const count = names.length;
//     const total = names.map(name => group[name]).reduce((total, x) => total + x, 0);
//     const average = total / count;

//     const groupBalance = {};
//     for (const name of names) {
//         const value = group[name] - average;
//         const roundedValue = Math.round(value * 100) / 100;
//         groupBalance[name] = roundedValue;
//     }

//     return groupBalance;
// }

function splitTheBill5(x: { [k: string]: number }): { [k: string]: number } {
    const output: { [k: string]: number } = {};
    let total = 0;
    let cnt = 0;
    for (const v of Object.values(x)) {
        total += v;
        cnt++;
    }
    let avg = total / cnt;

    for (const [k, v] of Object.entries(x)) {
        output[k] = Math.round((v - avg) * 100) / 100;
    }
    return output;
}

interface Bills {
    [P: string]: number;
}

const isFloat = (num: number): boolean => {
    return num % 1 !== 0;
};

export function splitTheBill6(x: Bills): Bills {
    //code away...

    const bills: [string, number][] = [];
    for (const key in x) {
        bills.push([key, x[key]]);
    }

    const totalAmount: number = bills.reduce(
        (acc: number, bill: [string, number]) => acc + bill[1],
        0
    );
    const amountPerPerson: number = totalAmount / bills.length;

    bills.forEach((bill: [string, number]) => {
        let diff: number = bill[1] - amountPerPerson;
        if (isFloat(diff)) {
            diff = parseFloat(diff.toFixed(2));
        }
        bill[1] = diff;
        x[bill[0]] = bill[1];
    });

    return x;
}

function splitTheBill9(x: { [k: string]: number }): {
    [k: string]: number;
} {
    const avg =
        Object.keys(x).reduce((accumulator, key) => accumulator + x[key], 0) /
        Object.keys(x).length;

    return Object.keys(x).reduce((accumulator, key) => {
        return {
            ...accumulator,
            [key]: +(x[key] - avg).toFixed(2),
        };
    }, {});
}

function splitTheBill7(x: { [k: string]: number }): { [k: string]: number } {
    const avg =
        Object.values(x).reduce((sum: number, num: number) => sum + num) /
        Object.values(x).length;
    for (const key in x) {
        x[key] = +(x[key] - avg).toFixed(2);
    }
    return x;
}
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: VERY EVEN NUMBERS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: RECURSION, WHILE()
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Task
Write a function that returns true if the number is a "Very Even" number.
 
If a number is a single digit, then it is simply "Very Even" if it itself is even.
 
If it has 2 or more digits, it is "Very Even" if the sum of its digits is "Very Even".
 
Examples
number = 88 => returns false -> 8 + 8 = 16 -> 1 + 6 = 7 => 7 is odd 
 
number = 222 => returns true -> 2 + 2 + 2 = 6 => 6 is even
 
number = 5 => returns false
 
number = 841 => returns true -> 8 + 4 + 1 = 13 -> 1 + 3 => 4 is even
Note: The numbers will always be 0 or positive integers!
*/

// 1️⃣ WHILE LOOP
const isVeryEvenNumber = (num: number): boolean => {
    // SINGLE DIGIT:
    if (num < 10 && !(num & 1)) {
        return true;
    } else {
        // LARGER THAN 9: KEEP ADDING DIGITS UNTIL SINGLE DIGIT NUMBER IS PRODUCED
        while (num > 9) {
            const numArr: number[] = String(num)
                .split("")
                .map((el) => Number(el));
            const sum: number = numArr.reduce((acc, curr) => acc + curr);
            num = sum;
        }
    }

    // NOW, CHECK IF SINGLE DIGIT NUMBER IS EVEN:
    const solution: boolean = !(num & 1);

    return solution;
};

// 2️⃣ RECURSION
const isVeryEvenNumber2 = (num: number): boolean => {
    const numArr: number[] = String(num)
        .split("")
        .map((el) => Number(el));
    const sum: number = numArr.reduce((acc, curr) => acc + curr);
    num = sum;

    const solution: boolean = !(num & 1);

    return num < 10 ? solution : isVeryEvenNumber(num);
};

// true
// console.log(isVeryEvenNumber(3));
// console.log(isVeryEvenNumber(222));
// false
// console.log(isVeryEvenNumber(88));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function isVeryEvenNumber3(n: number): boolean {
    if (n < 10) {
        return n % 2 === 0;
    }
    n = [...String(n)].reduce((acc, el) => acc + Number(el), 0);
    return isVeryEvenNumber(n);
}

function isVeryEvenNumber4(n: number): boolean {
    return !n-- || (n % 9) % 2 === 1;
}

var isVeryEvenNumber5 = (n: number): boolean => !!((--n % 9) % 2);

const isVeryEvenNumber6 = (n: number): boolean => !n-- || (n % 9) % 2 === 1;

function isVeryEvenNumber7(n: number): boolean {
    while (n > 9) {
        let sumDigits = 0;
        while (n) {
            const d = n % 10;
            sumDigits += d;
            n = (n - d) / 10;
        }
        n = sumDigits;
    }
    return n % 2 === 0;
}

function isVeryEvenNumber8(n: number): boolean {
    if (n < 10) {
        return n % 2 === 0;
    }
    return isVeryEvenNumber(
        n
            .toString()
            .split("")
            .reduce((p, c) => (p += parseInt(c)), 0)
    );
}
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️ INCLUDE THIS IN EXAMPLES ❗️❗️❗️ FILTER()
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: FREQUENCY SEQUENCE
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ COUNT OCCURENCES OF CHAR IN STRING ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: https://www.techiedelight.com/count-occurrences-character-string-javascript/
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Return an output string that translates an input string s/$s by replacing each character in s/$s with a number representing the number of times that character occurs in s/$s and separating each number with the character(s) sep/$sep.
 
freqSeq("hello world", "-"); // => "1-1-3-3-2-1-1-2-1-3-1"
freqSeq("19999999", ":"); // => "1:7:7:7:7:7:7:7"
freqSeq("^^^**$", "x"); // => "3x3x3x2x2x1"
*/

// 1️⃣ ERROR: SyntaxError: Invalid regular expression: /*/: Nothing to repeat
// NOT WORKING WITH SPECIAL CHARACTERS !
const freqSeq = (str: string, sep: string): string => {
    const numArr: number[] = [];

    for (let char of str) {
        let regex = new RegExp(char, "g"); //  ❗️❗️❗️ JS REGEX OBJECT ❗️❗️❗️
        // [ 'h' ], [ 'e' ], [ 'l', 'l', 'l' ].... ==> 1, 1, 3...
        let occurence: number = str.match(regex)!.length;
        // h 1, e 1, l 3, l 3, o 2,...
        console.log(char, occurence);
        numArr.push(occurence);
    }

    // [1, 1, 3, 3, 2,1, 1, 2, 1, 3, 1]
    console.log(numArr);

    // "1-1-3-3-2-1-1-2-1-3-1"
    const solution: string = numArr.join(sep);

    return solution;
};

// 2️⃣ ✅  ❗️❗️❗️ COUNT OCCURENCES OF CHAR IN STRING WITH FILTER() ❗️❗️❗️
const freqSeq2 = (str: string, sep: string): string => {
    const numArr: number[] = [];

    for (let char of str) {
        const counter = [...str].filter((el) => el === char).length;
        numArr.push(counter);
    }

    const solution: string = numArr.join(sep);

    return solution;
};

/*
 
❗️❗️❗️ COUNT OCCURENCES OF CHAR IN STRING ❗️❗️❗️
 
1. Using Regex
Regular expressions are often used in JavaScript for matching a text with a pattern. The following code example demonstrates its usage to get the count of the characters in the string. It uses the match() method of the string instance.
 
var str = "A,B,C,D,E";
 
var count = (str.match(/\,/g) || []).length;
console.log(count);
 
    Output: 4
 
 
The match() method returns null if there were no matches. To avoid calling the length property on the null value, we have used the logical OR operator [].
 
2. Using String.prototype.split() function
Here, the idea is to split the string using the given character as a delimiter and determine the count using the resulting array’s length. This can be easily done using the split() method:
 
var str = "A,B,C,D,E";
var ch = ',';
 
var count = str.split(ch).length - 1;
console.log(count);
 
    Output: 4
 
3. Using Array.prototype.filter() function
Another alternative is to filter the array to allow only those values matching the given character. This would translate to a simple code below:
 
var str = "A,B,C,D,E";
var ch = ',';
 
var count = [...str].filter(x => x === ch).length;
console.log(count);
 
 
    Output: 4
 
*/

// assert.equal(solution.freqSeq("hello world", "-"), "1-1-3-3-2-1-1-2-1-3-1");
//     assert.equal(solution.freqSeq("19999999", ":"), "1:7:7:7:7:7:7:7");
//     assert.equal(solution.freqSeq("^^^**$", "x"), "3x3x3x2x2x1");

// console.log(freqSeq("hello world", "-"));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️ INCLUDE THIS IN EXAMPLES ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: SEARCH FOR LETTERS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ ARRAY.FILL, NEW REGEXP() ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Create a function which accepts one arbitrary string as an argument, and return a string of length 26.
 
The objective is to set each of the 26 characters of the output string to either '1' or '0' based on the fact whether the Nth letter of the alphabet is present in the input (independent of its case).
 
So if an 'a' or an 'A' appears anywhere in the input string (any number of times), set the first character of the output string to '1', otherwise to '0'. if 'b' or 'B' appears in the string, set the second character to '1', and so on for the rest of the alphabet.
 
For instance:
 
"a   **&  cZ"  =>  "10100000000000000000000001"
*/
const change = (string: string): string => {
    const alphabet: string = "abcdefghijklmnopqrstuvwxyz";

    let solution: string = "";

    for (let char of alphabet) {
        // console.log(char);
        solution += string.toLowerCase().indexOf(char) > -1 ? "1" : "0";
    }

    // console.log(solution);

    return solution;
};

// "11000000000000000000000001"
// console.log(change("a **&  bZ"));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// ❗️❗️❗️ NEW REGEXP() ❗️❗️❗️
function change2(string: string): string {
    // ❓❓❓  new RegExp(`${x}`, "i") ❓❓❓
    return "abcdefghijklmnopqrstuvwxyz"
        .split("")
        .map((x) => (new RegExp(`${x}`, "i").test(string) ? "1" : "0"))
        .join("");
}

// ARRAY.FILL()
function change3(str: string): string {
    const result = Array(26).fill(0);
    for (const ch of str.toUpperCase()) {
        if (ch >= "A" && ch <= "Z") {
            result[ch.charCodeAt(0) - 65] = 1;
        }
    }
    return result.join("");
}

function change5(s: string): string {
    let returnStr = "";
    for (let i = 65; i < 91; i++) {
        if (s.toUpperCase().includes(String.fromCharCode(i))) {
            returnStr = returnStr.concat("1");
        } else {
            returnStr = returnStr.concat("0");
        }
    }
    return returnStr;
}
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: DRONE FLY-BY
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: SUBSTRING(), REPEAT()
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.
 
In this kata we will recreate that stunt... sort of.
 
You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.
 
The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.
 
Return the resulting lamps string. See example tests for more clarity.
*/
// 1️⃣ THIS ONLY COUNTS "=" IN '====T'
const flyBy = (lampsArr: string, droneArr: string): string => {
    if (!/=/g.test(droneArr)) return lampsArr;

    const dist: number = droneArr.match(/=/g)!.length;

    const solution: string = `${"o".repeat(dist)}${lampsArr.substring(dist)}`;

    return solution;
};

// 2️⃣ ✅ JUST GET DRONEARR.LENGTH !!!
const flyBy2 = (lampsArr: string, droneArr: string): string => {
    const dist: number =
        lampsArr.length > droneArr.length ? droneArr.length : lampsArr.length;

    const solution: string = `${"o".repeat(dist)}${lampsArr.substring(dist)}`;

    return solution;
};

// assert.strictEqual(flyBy('xxxxxx', '====T'), 'ooooox');
//     assert.strictEqual(flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx');
//     assert.strictEqual(flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx');

// console.log(flyBy("xxxxxxxxx", "==T"));
// console.log(flyBy2("xxxxxx", "12345"));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============
const flyBy3 = (lamps: string, drone: string): string =>
    drone.length >= lamps.length
        ? "o".repeat(lamps.length)
        : "o".repeat(drone.length) + "x".repeat(lamps.length - drone.length);

function flyBy4(lamps: string, drone: string): string {
    const droneIndex = drone.length - 1;
    const lampsArray = lamps.split("");
    lampsArray.forEach((lamp, index) => {
        if (index <= droneIndex) {
            lampsArray[index] = "o";
        }
    });
    return lampsArray.join("");
}

function flyBy5(lamps: string, drone: string): string {
    return [...lamps].fill("o", 0, drone.length).join("");
}

function flyBy6(lamps: string, drone: string): string {
    return (
        "o".repeat(Math.min(drone.length, lamps.length)) +
        "x".repeat(Math.max(0, lamps.length - drone.length))
    );
}

function flyBy7(lamps: string, drone: string): string {
    let l = drone.length;
    while (l--) lamps = lamps.replace("x", "o");
    return lamps;
}

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️ INCLUDE THIS IN EXAMPLES ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: CORRECT THE TIME-STRING
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: PADSTART, NEW DATE, TOLOCALETIMESTRING
// ❗️❗️❗️ REGEX MATCH EXACT TIME FORMAT ❗️❗️❗️
// ❗️❗️❗️ DECLARE ARRAY ELEMENTS TO VARIABLES ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
A new task for you!
 
You have to create a method, that corrects a given time string.
There was a problem in addition, so many of the time strings are broken.
Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
Examples
"09:10:01" -> "09:10:01"  
"11:70:10" -> "12:10:10"  
"19:99:99" -> "20:40:39"  
"24:01:01" -> "00:01:01"  
If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)
*/
const timeCorrect = (timeStr: string | null): string | null => {
    // NOT NECESSARY
    // if (timeStr === null) return null;
    if (!timeStr) return timeStr;

    // MATCH dd:dd:dd FORMAT
    const re = /\d{2}:\d{2}:\d{2}/;
    // ALSO, CHECK LENGTH IS 8
    const isValidFormat: boolean = re.test(timeStr) && timeStr.length === 8;

    if (!isValidFormat) return null;

    // [ 9, 10, 1 ]
    const hmsArr: number[] = timeStr.split(":").map((str) => Number(str));

    // [ 9, 10, 1 ] => 33001
    const getSeconds = (numArr: number[]) => {
        return numArr[0] * 3600 + numArr[1] * 60 + numArr[2];
    };

    let totalSeconds: number = getSeconds(hmsArr);

    // COUNT HOURS, MINS AND SECS:   33001 =>  9 10 1
    let hour: number = 0,
        min: number = 0,
        sec: number = 0;

    if (totalSeconds > 3599) {
        hour += Math.floor(totalSeconds / 3600) % 24;
        totalSeconds = totalSeconds % 3600;
    }
    if (totalSeconds > 59) {
        min += Math.floor(totalSeconds / 60);
        totalSeconds = totalSeconds % 60;
    }
    sec = totalSeconds;

    // 9 10 1 - NEED TO PAD TO TWO AND FORMAT
    let solutionArr: number[] = [hour, min, sec];

    // 1 => "01"
    const padToTwo = (num: number): string => {
        return num < 10 ? `0${num}` : num.toString();
    };

    // [ '09', '10', '01' ]
    const padSolArr: string[] = solutionArr.map((num) => padToTwo(num));

    // 09:10:01
    const solution: string = padSolArr.join(":");

    return solution;
};

// it("Basic Tests", function() {
//     // Null or Empty
//     assert.equal(solution.timeCorrect(null), null);
//     assert.equal(solution.timeCorrect(""), "");

// // Invalid Format
//     assert.equal(solution.timeCorrect("001122"), null);
//     assert.equal(solution.timeCorrect("00;11;22"), null);
//     assert.equal(solution.timeCorrect("0a:1c:22"), null);

// // Correction Tests
//     assert.equal(solution.timeCorrect("09:10:01"), "09:10:01");
//     assert.equal(solution.timeCorrect("11:70:10"), "12:10:10");
//     assert.equal(solution.timeCorrect("19:99:09"), "20:39:09");
//     assert.equal(solution.timeCorrect("19:99:99"), "20:40:39");
//     assert.equal(solution.timeCorrect("24:01:01"), "00:01:01");
//     assert.equal(solution.timeCorrect("52:01:01"), "04:01:01");

// console.log(timeCorrect("52:01:01"));
// console.log(timeCorrect("001122"));
// console.log(timeCorrect(""));
// console.log(timeCorrect(null));
// console.log(timeCorrect("09:10:01"));
// console.log(timeCorrect("19:99:09"));
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============
// ❗️❗️❗️ REGEX MATCH EXACT TIME FORMAT ❗️❗️❗️
function timeCorrect2(ts: String): string | null {
    if (ts === "") return "";
    if (ts === null || !ts.match(/^[0-9][0-9]\:[0-9][0-9]\:[0-9][0-9]$/))
        return null;
    // ❗️❗️❗️ DECLARE ARRAY ELEMENTS TO VARIABLES ❗️❗️❗️
    let [h, m, s] = ts.split(":").map((v) => parseInt(v));
    let temp: number = 0;
    [s, temp] = convToUp(s);
    [m, temp] = convToUp(m + temp);
    h = (h + temp) % 24;
    return [h, m, s]
        .map((v) => `0${v}`.substr(v.toString().length - 1))
        .join(":");
}

function convToUp(num: number): number[] {
    let s: number = num % 60;
    let temp: number = (num - s) / 60;
    return [s, temp];
}
//   ==========================================================

// ❗️❗️❗️ MATCH EXACT TIME FORMAT ❗️❗️❗️
function timeCorrect3(timestring: string | null): string | null {
    if (!timestring || timestring === "") return timestring;
    else if (!/^\d\d:\d\d:\d\d$/.test(timestring)) return null;
    let [h, m, s]: number[] = timestring.split(":").map((x) => +x);
    m += Math.floor(s / 60);
    h += Math.floor(m / 60);
    return [h % 24, m % 60, s % 60]
        .map((x) => ("" + x).padStart(2, "0"))
        .join(":");
}

function timeCorrect4(timestring: string): string | null {
    if (timestring === null || timestring === "") return timestring;
    if (!timestring.match(/^[0-9][0-9]:[0-9][0-9]:[0-9][0-9]/)) return null;
    let [h, m, s] = timestring.split(":").map((s) => parseInt(s));
    if (s >= 60) {
        s -= 60;
        m++;
    }
    if (m >= 60) {
        m -= 60;
        h++;
    }
    h = h % 24;
    return `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${
        s < 10 ? "0" + s : s
    }`;
}

const timeCorrect5 = (timestring: string | null): string | null => {
    if (timestring == "") return "";
    else if (!timestring) return null;

    const [house, minutes, seconds] = timestring.split(":").map(Number);
    if (!(house && minutes && seconds)) return null;

    return new Date(0, 0, 0, house, minutes, seconds).toLocaleTimeString(
        "en-GB",
        { hour12: false }
    );
};

function timeCorrect6(timestring: string | null): string | null {
    if (timestring === "") return "";
    if (timestring === null || !/\d{2}:\d{2}:\d{2}/.test(timestring))
        return null;

    let timeArr = timestring.split(":");
    let totalSeconds =
        (+timeArr[0] * 60 * 60 + +timeArr[1] * 60 + +timeArr[2]) % 86400;

    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds - hours * 3600) / 60);
    let seconds = totalSeconds - hours * 3600 - minutes * 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: EXTRA PERFECT NUMBERS (Special Numbers Series #7)
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ODD NUMBERS UP TO N INCLUSIVE, STARTSWITH, ENDSWITHD
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Definition
Extra perfect number is the number that first and last bits are set bits.
 
Task
Given a positive integer N , Return the extra perfect numbers in range from 1 to N .
*/
const extraPerfect = (num: number): number[] => {
    let solution: number[] = [];
    for (let i = 0; i <= num; i += 1) {
        if (i & 1) {
            solution.push(i);
        }
    }
    return solution;
};

// it("Testing for 3", () => assert.deepEqual(extraPerfect(3), [1, 3]));
//   it("Testing for 5", () => assert.deepEqual(extraPerfect(5), [1, 3, 5]));
//   it("Testing for 7", () => assert.deepEqual(extraPerfect(7), [1, 3, 5, 7]));
//   it("Testing for 28", () => assert.deepEqual(extraPerfect(28), [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27]));
//   it("Testing for 39", () =>

// console.log(extraPerfect(15));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function extraPerfect2(n: number) {
    let r = [];
    for (let i = 1; i <= n; i++) {
        let b = i.toString(2);
        if (b[0] === "1" && b[b.length - 1] === "1") r.push(i);
    }
    return r;
}

function extraPerfect3(n: number) {
    let output = [];
    for (let i = 1; i <= n; i++) {
        if (
            i.toString(2).charAt(0) == "1" &&
            i.toString(2).charAt(i.toString(2).length - 1) == "1"
        ) {
            output.push(i);
        }
    }
    return output;
}

function extraPerfect4(n: number) {
    let res: number[] = [];
    for (let i = 1; i <= n; i++) {
        let bin = i.toString(2);
        if (bin.startsWith("1") && bin.endsWith("1")) res.push(i);
    }
    return res;
}

const extraPerfect5 = (n: number): number[] =>
    [...Array(n)].map((_, i) => i + 1).filter((n) => n % 2);

function extraPerfect6(n: number): number[] {
    let numbers = new Array<number>(Math.ceil(n / 2));
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = 2 * i + 1;
    }
    return numbers;
}
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: REPLACE EVERY NTH
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Task
Write a method, that replaces every nth char oldValue with char newValue.
 
Method:
 
replaceNth(text:string, n:number, oldValue:string, newValue:string):string
Example:
n:         2
oldValue: 'a'
newValue: 'o'
"Vader said: No, I am your father!" -> "Vader soid: No, I am your fother!"
  1     2          3        4       -> 2nd and 4th occurence are replaced
Your method has to be case sensitive!
 
As you can see in the example: The first changed is the 2nd 'a'. So the start is always at the nth suitable char and not at the first!
 
If n is 0 or negative or if it is larger than the count of the oldValue, return the original text without a change.
 
The text and the chars will never be null.
*/
const replaceNth = (
    str: string,
    nth: number,
    oldVal: string,
    newVal: string
): string => {
    const lettersArr: string[] = str.split("");
    // console.log(lettersArr);

    let counter: number = 0;

    for (let i = 0; i < lettersArr.length; i += 1) {
        const current = lettersArr[i];
        // console.log(current);
        if (current === oldVal) {
            counter += 1;
            console.log(current);
            if (counter % nth === 0) {
                lettersArr[i] = newVal;
            }
        }
    }
    console.log(counter);
    console.log(lettersArr);
    const solution: string = lettersArr.join("");
    return solution;
};

// "Vader soid: No, I am your fother!"
// console.log(replaceNth("Vader said: No, I am your father!", 2, "a", "o"));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function replaceNth2(
    s: string,
    n: number,
    a: string,
    b: string,
    c = 0
): string {
    return s
        .split("")
        .map((e) => (e === a ? (++c === n ? ((c = 0) ? b : b) : e) : e))
        .join("");
}

function replaceNth3(
    text: string,
    n: number,
    oldValue: string,
    newValue: string
): string {
    let count = 0;
    return text.split("").reduce((acc, elm, index) => {
        if (elm === oldValue && n > 0) {
            count++;
            if (!(count % n)) return acc.concat(newValue);
        }
        return acc.concat(elm);
    }, "");
}

function replaceNth4(
    text: string,
    n: number,
    oldValue: string,
    newValue: string
): string {
    if (n < 1) return text;
    let matches = 0;
    return text.replace(
        new RegExp(oldValue, "g"),
        (match) => (matches++, matches % n ? match : newValue)
    );
}
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: SPOONERIZE ME
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: SWAP CHARACTERS IN WORDS, SLICE()
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, often with amusing results.
 
In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:
 
"not picking" --> "pot nicking"
 
Your task is to create a function that takes a string of two words, separated by a space: words and returns a spoonerism of those words in a string, as in the above example. A "word" in the context of this kata can contain any of the letters A through Z in upper or lower case, and the numbers 0 to 9. Though spoonerisms are about letters in words in the domain of written and spoken language, numbers are included in the inputs for the random test cases and they require no special treatment.
 
NOTE: All input strings will contain only two words. Spoonerisms can be more complex. For example, three-word phrases in which the first letters of the first and last words are swapped: "pack of lies" --> "lack of pies" or more than one letter from a word is swapped: "flat battery --> "bat flattery" You are NOT expected to account for these, or any other nuances involved in spoonerisms.
*/
const spoonerize = (wordStr: string): string => {
    // [ 'n', 'o', 't' ],['p', 'i', 'c','k', 'i', 'n','g']
    const lettersArr: string[][] = wordStr
        .split(" ")
        .map((word) => word.split(""));

    // n p
    const first: string = lettersArr[0][0];
    const second: string = lettersArr[1][0];

    // // [ 'p', 'o', 't' ],['n', 'i', 'c','k', 'i', 'n','g']
    lettersArr[0][0] = second;
    lettersArr[1][0] = first;

    // pot nicking
    let solution: string = lettersArr
        .map((arr) => {
            return arr.join("");
        })
        .join(" ");

    return solution;
};

// "pot nicking"
// console.log(spoonerize("not picking"));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function spoonerize2(words: string): string {
    const [word1, word2] = words.split(" ");
    const sword1 = `${word2[0]}` + word1.slice(1);
    const sword2 = `${word1[0]}` + word2.slice(1);

    return `${sword1} ${sword2}`;
}

function spoonerize3(words: string): string {
    let arr: string[] = words.split(" ");
    let a = arr[0][0];
    let b = arr[1][0];
    return b + arr[0].slice(1) + " " + a + arr[1].slice(1);
}

const spoonerize4 = (words: string): string => {
    const [a, b] = words.split(" ");
    return `${b.charAt(0)}${a.substr(1)} ${a.charAt(0)}${b.substr(1)}`;
};

// =====================================================
function spoonerize5(words: string): string {
    let [word1, word2]: string[] = words.split(" ");
    let spoonerizedWord1: string = spoonerizeWord(word1, word2);
    let spoonerizedWord2: string = spoonerizeWord(word2, word1);
    return `${spoonerizedWord1} ${spoonerizedWord2}`;
}

function spoonerizeWord(word1: string, word2: string): string {
    return `${word2[0]}${word1.slice(1)}`;
}
// =====================================================

function spoonerize7(words: string): string {
    let list: string[] = words.split(" ");
    let a: string = list[0][0];
    let b: string = list[1][0];
    return `${b + list[0].slice(1)} ${a + list[1].slice(1)}`;
}

function spoonerize8(words: string): string {
    const arr = words.split(" ");
    return [arr[1][0] + arr[0].slice(1), arr[0][0] + arr[1].slice(1)].join(" ");
}
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️ INCLUDE THIS IN EXAMPLES ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: HEAD, TAIL, INIT AND LAST
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ ARRAY METHODS, CLASS PROPERTIES(PRIVATE, PUBLIC, STATIC) ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Haskell has some useful functions for dealing with lists:
 
$ ghci
GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
λ head [1,2,3,4,5]
1
λ tail [1,2,3,4,5]
[2,3,4,5]
λ init [1,2,3,4,5]
[1,2,3,4]
λ last [1,2,3,4,5]
5
Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:
 
| HEAD | <----------- TAIL ------------> |
[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
| <----------- INIT ------------> | LAST |
 
head [x] = x
tail [x] = []
init [x] = []
last [x] = x
Here's how I expect the functions to be called in your language:
 
head([1,2,3,4,5]); => 1
tail([1,2,3,4,5]); => [2,3,4,5]
Most tests consist of 100 randomly generated arrays, each with four tests, one for each operation. There are 400 tests overall. No empty arrays will be given. Haskell has QuickCheck tests
*/

// ❗️❗️❗️ SLICE RETURNS ARRAY ❗️❗️❗️
class Kata6 {
    // HEAD: 1
    public static head = (arr: number[]): number => {
        return arr[0];
    };
    // TAIL: [ 2, 3, 4, 5 ]
    public static tail = (arr: number[]): number[] => {
        return arr.slice(1);
    };

    // INIT: [ 1, 2, 3, 4 ]
    public static init = (arr: number[]): number[] => {
        return arr.slice(0, -1);
    };

    // LAST: 5
    public static last = (arr: number[]): number => {
        return arr[arr.length - 1];
    };
}

// console.log(Kata6.head([1, 2, 3, 4, 5]));
// console.log(Kata6.tail([1, 2, 3, 4, 5]));
// console.log(Kata6.init([1, 2, 3, 4, 5]));
// console.log(Kata6.last([1, 2, 3, 4, 5]));

//============= OTHER CODEWARS SOLUTIONS: =============

// class Kata61 {
//     public static head = (a) => a[0];
//     public static tail = (a) => a.slice(1);
//     public static init = (a) => a.slice(0, -1);
//     public static last = (a) => a[a.length - 1];
// }

const Kata62 = {
    head: <A>(arr: A[]): A => arr[0],
    tail: <A>(arr: A[]): A[] => arr.slice(1),
    init: <A>(arr: A[]): A[] => arr.slice(0, arr.length - 1),
    last: <A>(arr: A[]): A => arr[arr.length - 1],
};

class Kata63 {
    static head<T>([head, ..._]: T[]): T {
        return head;
    }
    static tail<T>([_, ...tail]: T[]): T[] {
        return tail;
    }
    static init<T>(arr: T[]): T[] {
        return arr.slice(0, -1);
    }
    static last<T>(arr: T[]): T {
        return arr.slice(-1)[0];
    }
}

class Kata64 {
    static tail = (arr: number[]): number[] => {
        return arr.slice(1, arr.length);
    };

    static init = (arr: number[]): number[] => {
        return arr.slice(0, -1);
    };

    static last = (arr: number[]): number => {
        return arr[arr.length - 1];
    };

    static head = (arr: number[]): number => {
        return arr[0];
    };
}

class Kata65 {
    static head(list: Array<Number> = []): Number {
        const a = list[0];
        return a;
    }

    static tail(list: Array<Number> = []): Array<Number> {
        const c: Array<Number> = [];
        for (let i = 1; i < list.length; i++) {
            c.push(list[i]);
        }
        return c;
    }

    static init(list: Array<Number> = []): Array<Number> {
        const c: Array<Number> = [];
        for (let i = 0; i < list.length - 1; i++) {
            c.push(list[i]);
        }
        return c;
    }

    static last(list: Array<Number> = []): Number {
        const a = list[list.length - 1];
        return a;
    }
}

class Kata66 {
    static head(array: Array<any>) {
        return array[0];
    }
    static tail(array: Array<any>) {
        let temp = [...array];
        temp.shift();
        return temp;
    }
    static init(array: Array<any>) {
        let temp = [...array];
        temp.pop();
        return temp;
    }
    static last(array: Array<any>) {
        let temp = [...array];
        return temp.pop();
    }
}

class Kata67 {
    static head<T>([head, ..._]: T[]): T {
        return head;
    }
    static tail<T>([_, ...tail]: T[]): T[] {
        return tail;
    }
    static init<T>(arr: T[]): T[] {
        return arr.slice(0, -1);
    }
    static last<T>(arr: T[]): T {
        return arr.slice(-1)[0];
    }
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: NUMBERS WITH THIS DIGIT INSIDE
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ VARRAY.FROM() TO REPLACE LOOP, NEW REGEXP() ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
The value of d will always be 0 - 9.
The value of x will always be greater than 0.
 
You have to return as an array
 
the count of these numbers,
their sum
and their product.
 
For example:
x = 11
d = 1
->
Numbers: 1, 10, 11
Return: [3, 22, 110]
 
If there are no numbers, which include the digit, return [0,0,0].
*/
const numbersWithDigitInside = (range: number, digit: number): number[] => {
    let matches: number[] = [];

    for (let i = 1; i <= range; i += 1) {
        if (i.toString().indexOf(digit.toString()) > -1) {
            matches.push(i);
        }
    }
    console.log(matches);

    if (matches.length === 0) return [0, 0, 0];

    const count: number = matches.length;
    const sum: number = matches.reduce((acc, curr) => acc + curr);
    const prod: number = matches.reduce((acc, curr) => acc * curr);

    const solution: number[] = [count, sum, prod];

    return solution;
};

// [ 0, 0, 0]
// console.log(numbersWithDigitInside(5, 6));
// [ 1, 6, 6]
// console.log(numbersWithDigitInside(7, 6));
// [ 2, 30, 200]
// console.log(numbersWithDigitInside(20, 0));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function numbersWithDigitInside2(x: number, d: number): number[] {
    let numbers: number[] = [];
    for (let i: number = 1; i <= x; i++) {
        if (~i.toString().indexOf(d.toString())) {
            numbers.push(i);
        }
    }
    return [
        numbers.length,
        numbers.reduce((a, b) => a + b, 0),
        numbers.length === 0 ? 0 : numbers.reduce((a, b) => a * b),
    ];
}

// ❗️❗️❗️ VARRAY.FROM() TO REPLACE LOOP, NEW REGEXP() ❗️❗️❗️
// function numbersWithDigitInside3(x, d) {
//     return Array
//         .from(Array(x), (x, i) => i + 1)
//         .reduce((r, e) => new RegExp(d).test(String(e)) ? [r[0] + 1, r[1] + e, r[2] ? r[2] * e : e] : r, [0, 0, 0]);
// }

function numbersWithDigitInside4(x: number, d: number): number[] {
    let numbers: number[] = [];
    for (let i = 1; i <= x; i++) {
        if (String(i).indexOf(String(d)) !== -1) {
            numbers.push(i);
        }
    }
    return [
        numbers.length,
        numbers.reduce((a: number, b: number) => a + b, 0),
        numbers.length === 0
            ? 0
            : numbers.reduce((a: number, b: number) => a * b),
    ];
}

function numbersWithDigitInside5(x: number, d: number): number[] {
    let count = 0,
        sum = 0,
        product = 0;

    for (let i = 1; i <= x; i++) {
        if (("" + i).indexOf("" + d) != -1) {
            count++;
            sum += i;
            product = (product == 0 ? 1 : product) * i;
        }
    }
    return [count, sum, product];
}

function numbersWithDigitInside6(x: number, d: number): number[] {
    const set: number[] = [];
    for (let i = 1; i <= x; i++) set.push(i);
    const match: number[] = set.filter(
        (test) => test.toString().indexOf(d.toString()) >= 0
    );
    return match.length
        ? [
              match.length,
              match.reduce((a, b) => a + b),
              match.reduce((a, b) => a * b),
          ]
        : [0, 0, 0];
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: HELP BOB COUNT LETTERS AND DIGITS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: COUNT LETTERS AND DIGITS, REPLACE()
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Bob is a lazy man.
 
He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.
 
Example:
 
"hel2!lo" --> 6
 
"wicked .. !" --> 6
 
"!?..A" --> 1
*/

const countLettersAndDigits = (str: string): number => {
    if (!/[a-z0-9]/gi.test(str)) return 0;

    const matches: string[] = str.match(/[a-z0-9]/gi)!;

    return matches.length;
};

// 6
// console.log(countLettersAndDigits("hel2!lo"));
// console.log(countLettersAndDigits("5>>a,!b!"));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function countLettersAndDigits2(input: string): number {
    return [...input].map((it) => it.replace(/[^a-z0-9]/gi, "")).join("")
        .length;
}

function countLettersAndDigits3(input: string): number {
    return input.replace(/[^A-Za-z0-9]/g, "").length;
}

function countLettersAndDigits4(input: string): number {
    let temp: number = 0;
    input.split("").forEach((i) => (i.match(/^[a-z0-9]+$/i) ? temp++ : temp));
    return temp;
}

function countLettersAndDigits5(input: string): number {
    let countArr: Array<any> = input.match(/[0-9A-Za-z]/g) || [];
    return countArr.length;
}

function countLettersAndDigits6(input: string): number {
    const array = input.match(/[a-z0-9]/gi);

    return array ? array.length : 0;
}

function countLettersAndDigits7(input: string): number {
    return input.split("").filter(function (v) {
        if (48 <= v.charCodeAt(0) && v.charCodeAt(0) <= 57) return true; //1~9
        if (65 <= v.charCodeAt(0) && v.charCodeAt(0) <= 90) return true; //A~Z
        if (97 <= v.charCodeAt(0) && v.charCodeAt(0) <= 122) return true; //a~z

        return false;
    }).length;
}
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️ INCLUDE THIS IN EXAMPLES ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: SCALING SQUARED STRINGS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: STRING.REPEAT ALTERNATIVE, REPLACE(FUNCTON), LINEBREAK - \n NEWLINE
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:  https://stackoverflow.com/questions/1877475/repeat-a-string-in-javascript-a-number-of-times
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
You are given a string of n lines, each substring being n characters long. For example:
 
s = "abcd\nefgh\nijkl\nmnop"
 
We will study the "horizontal" and the "vertical" scaling of this square of strings.
 
A k-horizontal scaling of a string consists of replicating k times each character of the string (except '\n').
 
Example: 2-horizontal scaling of s: => "aabbccdd\neeffgghh\niijjkkll\nmmnnoopp"
A v-vertical scaling of a string consists of replicating v times each part of the squared string.
 
Example: 2-vertical scaling of s: => "abcd\nabcd\nefgh\nefgh\nijkl\nijkl\nmnop\nmnop"
Function scale(strng, k, v) will perform a k-horizontal scaling and a v-vertical scaling.
 
Example: a = "abcd\nefgh\nijkl\nmnop"
scale(a, 2, 3) --> "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"
Printed:
 
abcd   ----->   aabbccdd
efgh            aabbccdd
ijkl            aabbccdd
mnop            eeffgghh
                eeffgghh
                eeffgghh
                iijjkkll
                iijjkkll
                iijjkkll
                mmnnoopp
                mmnnoopp
                mmnnoopp
Task:
Write function scale(strng, k, v) k and v will be positive integers. If strng == "" return "".
*/
class G9643 {
    public static scale = (
        str: string,
        repeatChar: number,
        repeatSub: number
    ): string => {
        if (str.length === 0) return "";

        // DOUBLE EVERY CHAR [ 'abcd', 'efgh', 'ijkl', 'mnop' ]
        const subStrArr: string[] = str.split("\n");

        // [ 'aabbccdd\n', 'eeffgghh\n', 'iijjkkll\n', 'mmnnoopp\n' ]
        const horizontal: string[] = subStrArr
            // ❗️❗️❗️ REPLACE(FUNCTON) ❗️❗️❗️
            .map((sub) => {
                return sub
                    .replace(/./g, function (match) {
                        // return match.repeat(repeatChar);
                        // ❗️❗️❗️ STRING.REPEAT ALTERNATIVE ❗️❗️❗️
                        return Array(repeatChar + 1).join(match);
                    })
                    .concat("\n");
            });
        // DOUBLE EVERY SUBSTRING ['aabbccdd\naabbccdd\n','eeffgghh\neeffgghh\n',
        // 'iijjkkll\niijjkkll\n','mmnnoopp\nmmnnoopp\n']
        const vertical: string[] = horizontal.map((sub) => {
            // return sub.repeat(repeatSub);
            return Array(repeatSub + 1).join(sub);
        });
        const solution: string = vertical.join("").slice(0, -1);

        return solution;
    };
}

/*
❗️❗️❗️ STRING.REPEAT ALTERNATIVE❗️❗️❗️ CODEWARS GIVES ERROR: Property 'repeat' does not exist on type 'string'. (2339)
These days, the repeat string method is implemented almost everywhere. (It is not in Internet Explorer.) So unless you need to support older browsers, you can simply write:
 
❗️❗️❗️ 1️⃣   "a".repeat(10)
 
Before repeat, we used this hack:
 
❗️❗️❗️ 2️⃣    Array(11).join("a") // create string with 10 a's: "aaaaaaaaaa"
 
(Note that an array of length 11 gets you only 10 "a"s, since Array.join puts the argument between the array elements.)
*/

// "Kj\nKj\nSH\nSH"
// console.log(G9643.scale("Kj\nSH", 1, 2));
// "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"
// console.log(G9643.scale("abcd\nefgh\nijkl\nmnop", 2, 2));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

const scale2 = (strng: string, k: number, n: number) =>
    strng
        .replace(/[^\n]/g, (x) => Array(k + 1).join(x))
        .replace(/[^\n]+/g, (x) =>
            Array(n + 1)
                .join("\n" + x)
                .trim()
        );

const scale3 = (strng: string, k: number, n: number) => {
    if (strng.length === 0) return "";
    var a = strng
        .split("\n")
        .map(function (x) {
            var y = x
                .split("")
                .map(function (z) {
                    return Array(k + 1).join(z);
                })
                .join("");
            return Array(n + 1).join(y + "\n");
        })
        .join("");
    return a.substring(0, a.length - 1);
};
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: NICE ARRAY
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: SPLICE, MINUS ARRAY, ARR.SOME
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.
 
examples:
 
[2, 10, 9, 3] is a nice array because
 
 2 =  3 - 1
10 =  9 + 1
 3 =  2 + 1
 9 = 10 - 1
 
[4, 2, 3] is a nice array because
 
4 = 3 + 1
2 = 3 - 1
3 = 2 + 1 (or 3 = 4 - 1)
 
[4, 2, 1] is a not a nice array because
 
for n = 4, there is neither n - 1 = 3 nor n + 1 = 5
Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. An empty array is not considered nice.
*/
class Kata1 {
    static isNice(arr: number[]): boolean {
        // INIT SOLUTION AS FALSE
        let solution: boolean = false;

        for (let i = 0; i < arr.length; i += 1) {
            // RESET NUM ARR TO ORIGINAL: [ 2, 10, 9, 3 ]
            const numArr: number[] = arr.slice();
            // REMOVE CURRENT NUM: [ 10, 9, 3 ] 2 IS REMOVED
            numArr.splice(i, 1);
            // CHECK IF SOME ELEMENT MEETS CONDITION: BOOLEAN
            solution = numArr.some(
                (el) => el + 1 === arr[i] || el - 1 === arr[i]
            );
            // AS SOON AS CURRENT NUM IS FALSE, STOP LOOP AND RETURN DEFAULT FALSE
            if (!solution) break;
        }

        // RETURN SOLUTION (true) IF ALL ITERATIONS HAVE RETURNED TRUE FOR SOLUION
        return solution;
    }
}

// true
// console.log(Kata1.isNice([2, 10, 9, 3]));
// false
// console.log(Kata1.isNice([8, 4, 5, 3]));

/*
iteration: 0 num: 2
   numArr: [ 2, 10, 9, 3 ]
       minus Array: [ 10, 9, 3 ]
iteration: 1 num: 10
   numArr: [ 2, 10, 9, 3 ]
       minus Array: [ 2, 9, 3 ]
iteration: 2 num: 9
   numArr: [ 2, 10, 9, 3 ]
       minus Array: [ 2, 10, 3 ]
iteration: 3 num: 3
   numArr: [ 2, 10, 9, 3 ]
       minus Array: [ 2, 10, 9 ]
true
iteration: 0 num: 8
   numArr: [ 8, 4, 5, 3 ]
       minus Array: [ 4, 5, 3 ]
false
*/

//============= OTHER CODEWARS SOLUTIONS: =============
function isNice2(arr: number[]) {
    let set = new Set(arr);

    return (
        arr.length !== 0 && arr.every((v) => set.has(v - 1) || set.has(v + 1))
    );
}

// const isNice3 = $ => $.length ? $.every(el => $.includes(el-1) || $.includes(el+1)) : false;

function isNice4(arr: number[]) {
    return (
        arr.length > 0 &&
        arr.every((n) => arr.includes(n - 1) || arr.includes(n + 1))
    );
}
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️ TRY WITH WHILE LOOP ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: SEE U NEXT HAPPY YEAR - YEAR WITH DISTINCT DIGITS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: RECURSION, ❓❓❓ WHAT IS CYCLE ❓❓❓
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Scenario
You're saying good-bye your best friend , See you next happy year .
 
Happy Year is the year with only distinct digits , (e.g) 2018
 
Task
Given a year, Find The next happy year or The closest year You'll see your best friend!alt!alt
 
Notes
Year Of Course always Positive .
Have no fear , It is guaranteed that the answer exists .
It's not necessary that the year passed to the function is Happy one .
Input Year with in range (1000  ≤  y  ≤  9000)
Input >> Output Examples:
nextHappyYear (7712) ==> return (7801)
Explanation:
As the Next closest year with only distinct digits is 7801 .
 
nextHappyYear (8989) ==> return (9012)
Explanation:
As the Next closest year with only distinct digits is 9012 .
 
nextHappyYear (1001) ==> return (1023)
Explanation:
As the Next closest year with only distinct digits is 1023 .
*/
const nextHappyYear = (year: number): number => {
    year += 1;

    let digitsArr = year.toString().split("");
    let uniqueDigits = new Set<string>(digitsArr);

    // console.log(year, digitsArr, uniqueDigits);

    return digitsArr.length > uniqueDigits.size ? nextHappyYear(year) : year;
};

/*
console.log(nextHappyYear(1001));
 
1002 [ '1', '0', '0', '2' ] Set(3) { '1', '0', '2' }
1003 [ '1', '0', '0', '3' ] Set(3) { '1', '0', '3' }
1004 [ '1', '0', '0', '4' ] Set(3) { '1', '0', '4' }
1005 [ '1', '0', '0', '5' ] Set(3) { '1', '0', '5' }
1006 [ '1', '0', '0', '6' ] Set(3) { '1', '0', '6' }
1007 [ '1', '0', '0', '7' ] Set(3) { '1', '0', '7' }
1008 [ '1', '0', '0', '8' ] Set(3) { '1', '0', '8' }
1009 [ '1', '0', '0', '9' ] Set(3) { '1', '0', '9' }
1010 [ '1', '0', '1', '0' ] Set(2) { '1', '0' }
1011 [ '1', '0', '1', '1' ] Set(2) { '1', '0' }
1012 [ '1', '0', '1', '2' ] Set(3) { '1', '0', '2' }
1013 [ '1', '0', '1', '3' ] Set(3) { '1', '0', '3' }
1014 [ '1', '0', '1', '4' ] Set(3) { '1', '0', '4' }
1015 [ '1', '0', '1', '5' ] Set(3) { '1', '0', '5' }
1016 [ '1', '0', '1', '6' ] Set(3) { '1', '0', '6' }
1017 [ '1', '0', '1', '7' ] Set(3) { '1', '0', '7' }
1018 [ '1', '0', '1', '8' ] Set(3) { '1', '0', '8' }
1019 [ '1', '0', '1', '9' ] Set(3) { '1', '0', '9' }
1020 [ '1', '0', '2', '0' ] Set(3) { '1', '0', '2' }
1021 [ '1', '0', '2', '1' ] Set(3) { '1', '0', '2' }
1022 [ '1', '0', '2', '2' ] Set(3) { '1', '0', '2' }
1023 [ '1', '0', '2', '3' ] Set(4) { '1', '0', '2', '3' }
1023
*/

// 1023
// console.log(nextHappyYear(1001));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function nextHappyYear2(year: number): number {
    year += 1;
    while (new Set("" + year).size != 4) {
        year++;
    }
    return year;
}

function nextHappyYear3(year: number) {
    let res = year;
    do {
        res++;
    } while (
        +res
            .toString()
            .split("")
            .filter((el, i, arr) => arr.indexOf(el) === i)
            .join("") != res
    );
    return res;
}

function nextHappyYear4(year: number): number {
    while (3 > 2) {
        let shake = new Set(String(++year).split(""));
        if (shake.size === 4) break;
    }
    return year;
}

function nextHappyYear5(year: number): number {
    let digits_of_the_year = year.toString().split("").map(Number);

    do {
        year++;
        digits_of_the_year = year.toString().split("").map(Number);
    } while (
        digits_of_the_year[3] == digits_of_the_year[2] ||
        digits_of_the_year[3] == digits_of_the_year[1] ||
        digits_of_the_year[3] == digits_of_the_year[0] ||
        digits_of_the_year[2] == digits_of_the_year[1] ||
        digits_of_the_year[2] == digits_of_the_year[0] ||
        digits_of_the_year[1] == digits_of_the_year[0]
    );
    return year;
}

// ❓❓❓ WHAT IS CYCLE ❓❓❓
function nextHappyYear6(year: number) {
    cicle: for (let i = year + 1; i <= 9999; i++) {
        if (new Set(i.toString().split("")).size == 4) {
            return i;
            break cicle;
        }
    }
}

function nextHappyYear7(year: number): number {
    year++;
    const arr = Array.from(year.toString());
    if (new Set(arr).size !== arr.length) {
        return nextHappyYear(year);
    } else {
        return year;
    }
}

function nextHappyYear8(year: number) {
    while ([...new Set(("" + ++year).split(""))].length < 4) {}
    return year;
}
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: FILL THE HARD DISK DRIVE - Computer problem series #1
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:❗️❗️❗️  REDUCE WITH COUNTER OBJECT ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.
 
Input:
Array of file sizes (0 <= s <= 100)
Capacity of the HD (0 <= c <= 500)
Output:
Number of files that can be fully saved in the HD.
Examples:
save([4,4,4,3,3], 12) -> 3
# 4+4+4 <= 12, but 4+4+4+3 > 12
save([4,4,4,3,3], 11) -> 2
# 4+4 <= 11, but 4+4+4 > 11
Do not expect any negative or invalid inputs.
*/

const save = (sizesArr: number[], storage: number): number => {
    let freeSpace: number = storage,
        solution: number = 0;

    for (let i = 0; i < sizesArr.length; i += 1) {
        freeSpace -= sizesArr[i];
        if (freeSpace < 0) {
            break;
        }
        solution += 1;
    }

    return solution;
};

// 3
// console.log(save([4, 4, 4, 3, 3], 11));
// 0
// console.log(save([11, 13, 15, 17, 19], 8));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function save2(sizes: number[], hd: number) {
    return sizes.reduce((a, v) => {
        if ((hd -= v) >= 0) a++;
        return a;
    }, 0);
}

function save3(sizes: number[], hd: number) {
    let currentCapacity: number = 0;
    let totalSavedFiles: number = 0;
    for (let index = 0; index < sizes.length; index++) {
        if (currentCapacity + sizes[index] <= hd) {
            currentCapacity += sizes[index];
            totalSavedFiles += 1;
        } else {
            break;
        }
    }
    return totalSavedFiles;
}

// ❗️❗️❗️  REDUCE WITH COUNTER OBJECT ❗️❗️❗️
const save4 = (sizes: number[], hd: number): number =>
    sizes.reduce(
        ({ total, files }, n) => ({
            total: total + n,
            files: total + n <= hd ? files + 1 : files,
        }),
        { total: 0, files: 0 }
    ).files;

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: Simple Fun #2 - CIRCLE OF NUMBERS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ MATH.TRUNC ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighbouring numbers is equal (note that 0 and n - 1 are neighbouring, too).
 
Given n and firstNumber/first_number/first-number, find the number which is written in the radially opposite position to firstNumber.
 
Example
For n = 10 and firstNumber = 2, the output should be 7
 
 
 
Input/Output
[input] integer n
 
A positive even integer.
 
Constraints: 4 ≤ n ≤ 1000.
 
[input] integer firstNumber/first_number/first-number
 
Constraints: 0 ≤ firstNumber ≤ n - 1
 
[output] an integer
*/
const circleOfNumbers = (num: number, firstNum: number): number => {
    return firstNum < num / 2 ? num / 2 + firstNum : firstNum - num / 2;
};
// 7
// console.log(circleOfNumbers(10, 2));
// console.log(circleOfNumbers(6, 3));
// console.log();
// console.log();
// console.log();

/*
❗️❗️❗️ MATH.TRUNC ❗️❗️❗️
Math.trunc(8.76) => 8
The Math.trunc() method returns the integer part of a number.
 
Note: This method will NOT round the number up/down to the nearest integer, but simply remove the decimals.
*/
//============= OTHER CODEWARS SOLUTIONS: =============

function circleOfNumbers2(n: number, firstNumber: number): number {
    return (firstNumber + n / 2) % n;
}

function circleOfNumbers3(n: number, firstNumber: number) {
    const result = firstNumber - n / 2;
    return result == 0 ? 0 : result > 0 ? 0 + result : n + result;
}

function circleOfNumbers4(n: number, firstNumber: number) {
    let midPoint = n / 2;
    let result = 0;
    if (firstNumber === midPoint) {
        return 0;
    }
    if (firstNumber > midPoint) {
        return firstNumber - midPoint;
    }
    return firstNumber + midPoint;
}

// ❗️❗️❗️ MATH.TRUNC ❗️❗️❗️
function circleOfNumbers5(n: number, firstNumber: number) {
    const stepSize = 360 / n;
    const stepCount = 180 / stepSize;
    return Math.trunc((firstNumber + stepCount) % n);
}
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: LOOKING FOR A BANEFACTOR
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
The accounts of the "Fat to Fit Club (FFC)" association are supervised by John as a volunteered accountant. The association is funded through financial donations from generous benefactors. John has a list of the first n donations: [14, 30, 5, 7, 9, 11, 15] He wants to know how much the next benefactor should give to the association so that the average of the first n + 1 donations should reach an average of 30. After doing the math he found 149. He thinks that he could have made a mistake.
 
if dons = [14, 30, 5, 7, 9, 11, 15] then new_avg(dons, 30) --> 149
 
Could you help him?
 
Task
The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) that will permit to reach the average navg.
 
Should the last donation be a non positive number (<= 0) John wants us:
 
to return:
 
Nothing in Haskell, Elm
None in F#, Ocaml, Rust, Scala
-1 in C, D, Fortran, Nim, PowerShell, Go, Pascal, Prolog, Lua, Perl
or to throw an error (some examples for such a case):
 
IllegalArgumentException() in Clojure, Java
ArgumentException() in C#
echo ERROR in Shell
argument-error in Racket
std::invalid_argument in C++
ValueError in Python
So, he will clearly see that his expectations are not great enough. In "Sample Tests" you can see what to return.
 
Notes:
all donations and navg are numbers (integers or floats), arr can be empty.
See examples below and "Sample Tests" to see which return is to be done.
new_avg([14, 30, 5, 7, 9, 11, 15], 92) should return 645
new_avg([14, 30, 5, 7, 9, 11, 15], 2) 
should raise an error (ValueError or invalid_argument or argument-error or DomainError or ... ) 
or return `-1` or ERROR or Nothing or None depending on the language.
*/

// 1️⃣
const newAvg = (donations: number[], targetAvg: number): number => {
    // IF EMPTY ARRAY, RETURN TARGETAVG
    if (!donations.length) return targetAvg;
    // CALC EXPECTED SUM OF DONATIONS AFTER RECEIVING NEXT DONATION (+1)
    // 720 = 90 * (7 + 1)
    const targetSum: number = targetAvg * (donations.length + 1);
    // GET CURRENT SUM
    const currentSum: number = donations.reduce((acc, curr) => acc + curr);
    // SOLUTION = 720 - 92 ROUNDED UP TO NEAREST INT = 628
    const solution: number = Math.ceil(targetSum - currentSum);
    // IF AVE IS TOO LOW
    if (solution <= 0) throw new Error("Expected New Average is too low");

    return solution;
};
// 2️⃣
const newAvg2 = (dons: number[], targetAvg: number): number => {
    if (!dons.length) return targetAvg;

    const solution: number = Math.ceil(
        targetAvg * (dons.length + 1) - dons.reduce((acc, curr) => acc + curr)
    );

    if (solution <= 0) throw new Error("Expected New Average is too low");

    return solution;
};

// 628
// console.log(newAvg2([14, 30, 5, 7, 9, 11, 16], 90));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function newAvg3(arr: number[], newavg: number): number | string {
    const out = Math.ceil(
        newavg * (arr.length + 1) - arr.reduce((a, b) => a + b, 0)
    );
    if (out <= 0) {
        throw "Expected New Average is too low";
    }
    return out;
}

function newAvg4(arr: number[], newavg: number): any {
    const sum: number = arr.reduce((tot: number, val: number) => tot + val, 0);
    const don: number = (arr.length + 1) * newavg - sum;
    if (don < 0) {
        throw new Error("Expected New Average is too low");
    }
    return Math.ceil(don);
}

function newAvg5(arr: number[], newavg: number): any {
    let donate = Math.ceil(
        newavg * (arr.length + 1) - arr.reduce((a, b) => a + b, 0)
    );
    if (donate <= 0) throw "Expected New Average is too low";
    return donate;
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: PRODUCT OF ARRAY  (Array Series #5)
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ REDUCE WITH INITIAL VALUE ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Task
Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].
 
Notes
Array/list size is at least 2 .
 
Array/list's numbers Will be only Positives
 
Repetition of numbers in the array/list could occur.
 
Input >> Output Examples
productArray ({12,20}) ==>  return {20,12}
Explanation:
The first element in prod [] array 12 is the product of all array's elements except the first element
 
The second element 20 is the product of all array's elements except the second element .
 
productArray ({1,5,2}) ==> return {10,2,5}
Explanation:
The first element 10 is the product of all array's elements except the first element 1
 
The second element 2 is the product of all array's elements except the second element 5
 
The Third element 5 is the product of all array's elements except the Third element 2.
 
productArray ({10,3,5,6,2}) return ==> {180,600,360,300,900}
Explanation:
The first element 180 is the product of all array's elements except the first element 10
 
The second element 600 is the product of all array's elements except the second element 3
 
The Third element 360 is the product of all array's elements except the third element 5
 
The Fourth element 300 is the product of all array's elements except the fourth element 6
 
Finally ,The Fifth element 900 is the product of all array's elements except the fifth element 2
*/

// 1️⃣
const productArray = (nums: number[]): number[] => {
    const totalProd: number = nums.reduce((acc, curr) => acc * curr);

    const solution: number[] = nums.map((num) => totalProd / num);

    return solution;
};

// 2️⃣  SHORTER:
const productArray2 = (nums: number[]): number[] => {
    return nums.map((num) => nums.reduce((acc, curr) => acc * curr) / num);
};

// [20, 12]
// console.log(productArray([12, 20]));
// [216, 24, 162, 324]
// console.log(productArray2([3, 27, 4, 2]));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// ❗️❗️❗️ REDUCE WITH INITIAL VALUE ❗️❗️❗️
function productArray3(nums: number[]): number[] {
    let n: number = nums.reduce((a, b) => a * b, 1);
    return nums.map((x) => n / x);
}

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️ INCLUDE THIS IN EXAMPLES ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: CREDIT CARD ISSUER CHECKING (RANDOM TESTS NOT 100%)
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: TEST, BEGINS, STARTSWITH
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: https://stackoverflow.com/questions/72768/how-do-you-detect-credit-card-type-based-on-number
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.
 
Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.
 
Where Issuer is defined with the following enum type.
 
enum Issuer {
  VISA = 'VISA',
  AMEX = 'AMEX',
  Mastercard = 'Mastercard',
  Discover = 'Discover',
  Unknown = 'Unknown',
}
Examples
getIssuer(4111111111111111) == "VISA"
getIssuer(4111111111111) == "VISA"
getIssuer(4012888888881881) == "VISA"
getIssuer(378282246310005) == "AMEX"
getIssuer(6011111111111117) == "Discover"
getIssuer(5105105105105100) == "Mastercard"
getIssuer(5105105105105106) == "Mastercard"
getIssuer(9111111111111111) == "Unknown"
*/

enum Issuer {
    VISA = "VISA",
    AMEX = "AMEX",
    Mastercard = "Mastercard",
    Discover = "Discover",
    Unknown = "Unknown",
}

const getIssuer = (cardNum: number): string => {
    const cardNumStr: string = cardNum.toString();

    let solution: string = "";

    interface StrKeyVal {
        [key: string]: any;
    }

    const re: StrKeyVal = {
        // electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
        // maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
        // dankort: /^(5019)\d+$/,
        // interpayment: /^(636)\d+$/,
        // unionpay: /^(62|88)\d+$/,
        VISA: /^4[0-9]{12}(?:[0-9]{3})?$/,
        Mastercard: /^5[1-5][0-9]{14}$/,
        AMEX: /^3[47][0-9]{13}$/,
        // diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        // jcb: /^(?:2131|1800|35\d{3})\d{11}$/
    };

    for (let key in re) {
        if (re[key].test(cardNumStr)) {
            // solution = Issuer[key]; // ❗️❗️❗️ ERROR
            solution = key;
            break;
        } else {
            // solution = Issuer.Unknown; // ❗️❗️❗️ ARROR
            solution = "Unknown";
        }
    }

    return solution;
};

// Issuer.VISA
// console.log(getIssuer(4111111111111111));
// Issuer.AMEX
// console.log(getIssuer(378282246310005));
// Issuer.Unknown
// console.log(getIssuer(9111111111111111));
// console.log();

function detectCardType(number: string) {
    var re = {
        electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
        maestro:
            /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
        dankort: /^(5019)\d+$/,
        interpayment: /^(636)\d+$/,
        unionpay: /^(62|88)\d+$/,
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        amex: /^3[47][0-9]{13}$/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
    };

    // for (var key in re) {
    //     if (re[key].test(number)) {
    //         return key
    //     }
    // }
}

/*
The credit/debit card number is referred to as a PAN, or Primary Account Number. The first six digits of the PAN are taken from the IIN, or Issuer Identification Number, belonging to the issuing bank (IINs were previously known as BIN — Bank Identification Numbers — so you may see references to that terminology in some documents). These six digits are subject to an international standard, ISO/IEC 7812, and can be used to determine the type of card from the number.
 
Unfortunately the actual ISO/IEC 7812 database is not publicly available, however, there are unofficial lists, both commercial and free, including on Wikipedia.
 
Anyway, to detect the type from the number, you can use a regular expression like the ones below: Credit for original expressions
 
Visa: ^4[0-9]{6,}$ Visa card numbers start with a 4.
 
MasterCard: ^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$ Before 2016, MasterCard numbers start with the numbers 51 through 55, but this will only detect MasterCard credit cards; there are other cards issued using the MasterCard system that do not fall into this IIN range. In 2016, they will add numbers in the range (222100-272099).
 
American Express: ^3[47][0-9]{5,}$ American Express card numbers start with 34 or 37.
 
Diners Club: ^3(?:0[0-5]|[68][0-9])[0-9]{4,}$ Diners Club card numbers begin with 300 through 305, 36 or 38. There are Diners Club cards that begin with 5 and have 16 digits. These are a joint venture between Diners Club and MasterCard and should be processed like a MasterCard.
 
Discover: ^6(?:011|5[0-9]{2})[0-9]{3,}$ Discover card numbers begin with 6011 or 65.
 
JCB: ^(?:2131|1800|35[0-9]{3})[0-9]{3,}$ JCB cards begin with 2131, 1800 or 35.
 
Unfortunately, there are a number of card types processed with the MasterCard system that do not live in MasterCard’s IIN range (numbers starting 51...55); the most important case is that of Maestro cards, many of which have been issued from other banks’ IIN ranges and so are located all over the number space. As a result, it may be best to assume that any card that is not of some other type you accept must be a MasterCard.
 
Important: card numbers do vary in length; for instance, Visa has in the past issued cards with 13 digit PANs and cards with 16 digit PANs. Visa’s documentation currently indicates that it may issue or may have issued numbers with between 12 and 19 digits. Therefore, you should not check the length of the card number, other than to verify that it has at least 7 digits (for a complete IIN plus one check digit, which should match the value predicted by the Luhn algorithm).
 
One further hint: before processing a cardholder PAN, strip any whitespace and punctuation characters from the input. Why? Because it’s typically much easier to enter the digits in groups, similar to how they’re displayed on the front of an actual credit card, i.e.
 
4444 4444 4444 4444
is much easier to enter correctly than
 
4444444444444444
There’s really no benefit in chastising the user because they’ve entered characters you don't expect here.
 
This also implies making sure that your entry fields have room for at least 24 characters, otherwise users who enter spaces will run out of room. I’d recommend that you make the field wide enough to display 32 characters and allow up to 64; that gives plenty of headroom for expansion.
 
*/

//============= OTHER CODEWARS SOLUTIONS: =============

const getIssuer2 = (x: number, $: string = x.toString()) =>
    (Number($.slice(0, 2)) === 34 || Number($.slice(0, 2)) === 37) &&
    $.length === 15
        ? "AMEX"
        : Number($.slice(0, 4)) === 6011 && $.length === 16
        ? "Discover"
        : Number($.slice(0, 2)) > 50 &&
          Number($.slice(0, 2)) < 56 &&
          $.length === 16
        ? "Mastercard"
        : Number($.slice(0, 1)) === 4 && ($.length === 13 || $.length === 16)
        ? "VISA"
        : "Unknown";

const getIssuer3 = (x: number): Issuer => {
    let cn: string = x.toString();
    switch (true) {
        case /^3[4,7]/.test(cn) && cn.length == 15:
            return Issuer.AMEX;
        case /^6011/.test(cn) && cn.length == 16:
            return Issuer.Discover;
        case /^5[1-5]/.test(cn) && cn.length == 16:
            return Issuer.Mastercard;
        case /^4/.test(cn) && (cn.length == 13 || cn.length == 16):
            return Issuer.VISA;
        default:
            return Issuer.Unknown;
    }
};

const getIssuer4 = (x: number) => {
    let str = x.toString();
    let len = str.length;
    let begin = { a: str.slice(0, 2), b: str.slice(0, 4), c: str.slice(0, 1) };
    if ((len === 16 || len === 13) && begin.c === "4") {
        return "VISA";
    } else if (
        len === 16 &&
        (begin.a === "51" ||
            begin.a === "52" ||
            begin.a === "53" ||
            begin.a === "54" ||
            begin.a === "55")
    ) {
        return "Mastercard";
    } else if (len === 16 && begin.b === "6011") {
        return "Discover";
    } else if (len === 15 && (begin.a === "34" || begin.a === "37")) {
        return "AMEX";
    }
    return "Unknown";
};

function getIssuer5(x: number): string {
    const test = (reg: RegExp): boolean => reg.test(`${x}`);
    if (test(/^(34|37)\d{13}$/)) return "AMEX";
    else if (test(/^6011\d{12}$/)) return "Discover";
    else if (test(/^(51|52|53|54|55)\d{14}$/)) return "Mastercard";
    else if (test(/^4((\d{12})|(\d{15}))$/)) return "VISA";
    return "Unknown";
}

const getIssuer6 = (x: number): string => {
    let creditCardNumber = x.toString();
    let ccFirstFour = creditCardNumber.substr(0, 4);
    let ccFirstTwo = creditCardNumber.substr(0, 2);
    let ccLength = creditCardNumber.length;

    enum Issuer {
        VISA = "VISA",
        AMEX = "AMEX",
        Mastercard = "Mastercard",
        Discover = "Discover",
        Unknown = "Unknown",
    }

    if (ccFirstFour == "6011" && ccLength == 16) {
        return Issuer.Discover;
    }
    if ((ccFirstTwo == "34" || ccFirstTwo == "37") && ccLength == 15) {
        return Issuer.AMEX;
    }
    if (
        creditCardNumber.substr(0, 1) == "4" &&
        (ccLength == 13 || ccLength == 16)
    ) {
        return Issuer.VISA;
    }
    if (
        (ccFirstTwo == "51" ||
            ccFirstTwo == "52" ||
            ccFirstTwo == "53" ||
            ccFirstTwo == "54" ||
            ccFirstTwo == "55") &&
        ccLength == 16
    ) {
        return Issuer.Mastercard;
    } else {
        return Issuer.Unknown;
    }
};

const getIssuer7 = (x: number): Issuer => {
    const s: string = x.toString();
    if (/^4(\d{12}|\d{15})$/.test(s)) return Issuer.VISA;
    if (/^3[4|7]\d{13}$/.test(s)) return Issuer.AMEX;
    if (/^6011\d{12}$/.test(s)) return Issuer.Discover;
    if (/^5[1-5]\d{14}$/.test(s)) return Issuer.Mastercard;
    return Issuer.Unknown;
};

const getIssuer9 = (x: number): Issuer => {
    if (String(x).length === 15 && /^34|37/.test(String(x))) return Issuer.AMEX;
    if (String(x).length === 16 && /^6011/.test(String(x)))
        return Issuer.Discover;
    if (String(x).length === 16 && /^51|^52|^53|^54|^55/.test(String(x)))
        return Issuer.Mastercard;
    if (String(x).length === 13 && /^4/.test(String(x))) return Issuer.VISA;
    if (String(x).length === 16 && /^4/.test(String(x))) return Issuer.VISA;

    return Issuer.Unknown;
};

const getIssuer10 = (x: number): Issuer => {
    const card_number = String(x);
    const data = [
        { type: Issuer.AMEX, begins: ["34", "37"], len: [15] },
        { type: Issuer.Discover, begins: ["6011"], len: [16] },
        {
            type: Issuer.Mastercard,
            begins: ["51", "52", "53", "54", "55"],
            len: [16],
        },
        { type: Issuer.VISA, begins: ["4"], len: [13, 16] },
    ];
    const res = data.find(
        (d) =>
            d.begins.some((b) => card_number.startsWith(b)) &&
            d.len.some((l) => card_number.length === l)
    );
    return res ? res.type : Issuer.Unknown;
};

const getIssuer8 = (x: number) =>
    Object.values(Issuer)[
        [
            /^4\d{12}(\d{3})?$/,
            /^3[47]\d{13}$/,
            /^5[1-5]\d{14}$/,
            /^6011\d{12}$/,
            /.*/,
        ].findIndex((p) => p.test(`${x}`))
    ];

const getIssuer11 = (x: number): Issuer => {
    const s = x.toString();
    if (s.length === 15 && (s.startsWith("34") || s.startsWith("37"))) {
        return Issuer.AMEX;
    } else if (s.length === 16 && s.startsWith("6011")) {
        return Issuer.Discover;
    } else if (
        s.length === 16 &&
        ["51", "52", "53", "54", "55"].includes(s.slice(0, 2))
    ) {
        return Issuer.Mastercard;
    } else if ((s.length === 13 || s.length === 16) && s.startsWith("4")) {
        return Issuer.VISA;
    } else {
        return Issuer.Unknown;
    }
};
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️ INCLUDE THIS IN EXAMPLES ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: LAST SURVIVOR - REMOVE CHARS FROM STRING IN ORDER OF APPEARANCE OF INXEX IN ARRAY
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ SLICE() ❗️❗️❗️ REMOVE CHARS AT GIVEN INDEX FROM STRING ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left.
 
Example:
 
let str = "zbk", arr = [0, 1]
    str = "bk", arr = [1]
    str = "b", arr = []
    return 'b'
Notes
The given string will never be empty.
The length of the array is always one less than the length of the string.
All numbers are valid.
There can be duplicate letters and numbers.
*/

// 1️⃣  WITH ARRAY SPLICE ❗️❗️❗️
const lastSurvivor = (letters: string, coords: number[]): string => {
    const lettersArr: string[] = letters.split("");

    coords.forEach((index) => {
        // DELETE CORRESPONDIN CHAR AT FOR EACH INDEX
        lettersArr.splice(index, 1);
    });

    // console.log("   lettersArr final:", lettersArr);

    return lettersArr[0];
};

// "b"
// console.log(lastSurvivor('kbc', [0, 1]));
// "a"
// console.log(lastSurvivor('abc', [1, 1]));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function lastSurvivor2(letters: string, coords: number[]): string {
    return coords.reduce((s, p) => s.slice(0, p) + s.slice(p + 1), letters);
}

// 2️⃣ ❗️❗️❗️ WITH STRING SLICE() ❗️❗️❗️
function lastSurvivor3(letters: string, coords: number[]): string {
    coords.forEach((n) => {
        letters = letters.slice(0, n) + letters.slice(n + 1);
    });
    return letters;
}

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️ INCLUDE THIS IN EXAMPLES ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: RICE AND CHESSBOARD PROBLEM
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ TOSTRING(2).LENGTH, MATH.LOG2() ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
I assume most of you are familiar with the ancient legend of the rice (but I see wikipedia suggests wheat, for some reason) problem, but a quick recap for you: a young man asks as a compensation only 1 grain of rice for the first square, 2 grains for the second, 4 for the third, 8 for the fourth and so on, always doubling the previous.
 
Your task is pretty straightforward (but not necessarily easy): given an amount of grains, you need to return up to which square of the chessboard one should count in order to get at least as many.
 
As usual, a few examples might be way better than thousands of words from me:
 
squaresNeeded(0) === 0
squaresNeeded(1) === 1
squaresNeeded(2) === 2
squaresNeeded(3) === 2
squaresNeeded(4) === 3
Input is always going to be valid/reasonable: ie: a non negative number; extra cookie for not using a loop to compute square-by-square (at least not directly) and instead trying a smarter approach [hint: some peculiar operator]; a trick converting the number might also work: impress me!
 
*/

const squaresNeeded = (numGrains: number): number => {
    if (!numGrains) return 0;

    let curr: number = 1,
        acc: number = 1,
        sqCounter: number = 1;

    while (acc < numGrains) {
        curr *= 2;
        // console.log("curr:", curr);
        acc += curr;
        // console.log("acc:", acc);
        sqCounter += 1;
        // console.log("sqCounter:", sqCounter);
    }

    // console.log("   solution:", sqCounter);

    return sqCounter;
};

// 3
// console.log(squaresNeeded(0));
// console.log(squaresNeeded(1));
// console.log(squaresNeeded(2));
// console.log(squaresNeeded(3));
// console.log(squaresNeeded(4));
// console.log(squaresNeeded(8));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// ❗️❗️❗️ TOSTRING(2).LENGTH ❗️❗️❗️
// GRAINS = 4
// GRAINS.TOSTRING(2).LENGTH = 3 (4 IN BINARY IS "100")
// 4 && 3 => 3, 8 && 4 => 4
// RETURNS HOW MANY SQUARES NEEDED TO REACH NUMBER OF GRAINS
function squaresNeeded2(grains: number) {
    return grains && grains.toString(2).length;
}

// ❗️❗️❗️ LOG2(X) ❗️❗️❗️
// Example: What is log2(4000)?
// The answer completes the sentence:
// "4,000 is the result of 2 being raised to the power of..." The value of this expression is 11.965.
function squaresNeeded3(grains: number) {
    return grains ? Math.floor(Math.log2(grains) + 1) : 0;
}

function squaresNeeded4(grains: number) {
    // Search for 'sum of geometric series' and work backwards.
    // Eventually you get (sum + 1) equals (2 ** n)
    // log2 of (2 ** n) equals n.
    return Math.ceil(Math.log2(grains + 1));
}

function squaresNeeded5(grains: number) {
    let squares = 0;
    let squareSize = 1;
    let totalGrains = grains;
    while (totalGrains > 0) {
        totalGrains -= squareSize;
        squares++;
        squareSize *= 2;
    }

    return squares;
}

const squaresNeeded6 = (grains: number) => grains && ~~Math.log2(grains) + 1;

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: EVENS AND ODDS, EVENS TO BINARY ODDS TO HEX
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ CONVERT INTEGER TO BINARY/HEX ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
This kata is about converting numbers to their binary or hexadecimal representation:
 
If a number is even, convert it to binary.
If a number is odd, convert it to hex.
Numbers will be positive. The hexadecimal string should be lowercased.
*/

const evensAndOdds = (num: number): string => {
    // const binary: string = (num >>> 0).toString(2);
    const binary: string = num.toString(2);

    const hex: string = num.toString(16);

    return num & 1 ? hex : binary;
};

/*
 
❗️❗️❗️ CONVERT INTEGER TO BINARY ❗️❗️❗️ 
You can use Number.toString(2) function, but it has some problems when representing negative numbers. For example, (-1).toString(2) output is "-1".
 
To fix this issue, you can use the unsigned right shift bitwise operator (>>>) to coerce your number to an unsigned integer.
 
If you run (-1 >>> 0).toString(2) you will shift your number 0 bits to the right, which doesn't change the number itself but it will be represented as an unsigned integer. The code above will output "11111111111111111111111111111111" correctly.
 
This question has further explanation.
 
-3 >>> 0 (right logical shift) coerces its arguments to unsigned integers, which is why you get the 32-bit two's complement representation of -3.
*/

//   "10"
// console.log(evensAndOdds(2));
// "d"
// console.log(evensAndOdds(13));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

const evensAndOdds2 = (n: number): string =>
    n % 2 === 0 ? n.toString(2) : n.toString(16);

function evensAndOdds3(n: number): string {
    return Number(n).toString(n % 2 == 0 ? 2 : 16);
}

// Shifting the n: number 0 bits to the right turns into unsigned int, thus converting negative numbers to positive
export const evensAndOdds4 = (n: number): string => {
    return n % 2 === 0 ? (n >>> 0).toString(2) : n.toString(16);
};

function evensAndOdds5(n: number): string {
    if (n & 1) {
        return n.toString(16);
    }
    return n.toString(2);
}
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: ODD-EVEN STRING SORT, (FIRST CHAR/ODDS/EVENS)
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)
 
Note: 
0 is considered to be an even index. 
All input strings are valid with no spaces
input: 'CodeWars'
output 'CdWr oeas'
 
S[0] = 'C'
S[1] = 'o'
S[2] = 'd'
S[3] = 'e'
S[4] = 'W'
S[5] = 'a'
S[6] = 'r'
S[7] = 's'
Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
odd ones are 1, 3, 5, 7, so the second group is 'oeas'
And the final string to return is 'Cdwr oeas'
 
*/

const sortMyString = (str: string): string => {
    let solution: string = "";
    let oddStr: string = "";
    let evenStr: string = "";

    for (let i = 0; i < str.length; i += 1) {
        let current: string = str[i];
        if ((i & 1) === 1) {
            oddStr += current;
        } else if ((i & 1) === 0) {
            evenStr += current;
        }
    }

    // console.log("odds:", oddStr, "evens:", evenStr);

    solution += evenStr + " " + oddStr;

    return solution;
};

// "CdWr oeas"
// console.log(sortMyString("CodeWars"));
// "YOU'RE CLEVER"
// console.log(sortMyString("YCOLUE'VREER"));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function sortMyString2(S: string): string {
    var getEveryOtherLetter = (n: number) =>
        S.split("")
            .filter((_, i) => i % 2 === n)
            .join("");
    return `${getEveryOtherLetter(0)} ${getEveryOtherLetter(1)}`;
}

function sortMyString3(S: string): string {
    let even: string = "",
        odd: string = "";
    for (let i: number = 0; i < S.length; i++) {
        if (i === 0 || i % 2 === 0) even += S.charAt(i);
        else odd += S.charAt(i);
    }
    return even + " " + odd;
}

function sortMyString4(s: string): string {
    return (
        s
            .split("")
            .filter((_, i) => !(i % 2))
            .join("") +
        " " +
        s
            .split("")
            .filter((_, i) => i % 2)
            .join("")
    );
}

const sortMyString5 = (str: string): string =>
    [0, 1]
        .map((n) =>
            str
                .split("")
                .filter((_, index) => index % 2 === n)
                .join("")
        )
        .join(" ");

function sortMyString6(str: string): string {
    var a = str.split(""),
        sodd = [],
        seven = [];
    for (let i = 0; i < a.length; i++)
        if (i % 2 === 0) seven.push(a[i]);
        else sodd.push(a[i]);
    return seven.join("") + " " + sodd.join("");
}

function sortMyString7(S: string): string {
    let first = "",
        second = "",
        i;
    for (i = 0; i < S.length; i++) i & 1 ? (second += S[i]) : (first += S[i]);
    return `${first} ${second}`;
}

function sortMyString8(S: string): string {
    return (
        S.split("")
            .filter((e, i) => i % 2 === 0)
            .join("") +
        " " +
        S.split("")
            .filter((e, i) => i % 2 !== 0)
            .join("")
    );
}
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: MAXIMUM GAP (Array Series #4)
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ MAP(EL, IDX, ARRAY) ❗️❗️❗️ CAN USE ACTUAL ARRAY
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Task
Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.
 
Notes
Array/list size is at least 3 .
 
Array/list's numbers Will be mixture of positives and negatives also zeros_
 
Repetition of numbers in the array/list could occur.
 
The Maximum Gap is computed Regardless the sign.
 
Input >> Output Examples
maxGap ({13,10,5,2,9}) ==> return (4)
Explanation:
The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .
maxGap ({-3,-27,-4,-2}) ==> return (23)
Explanation:
The Maximum Gap after sorting the array is 23 , The difference between |-4- (-27) | = 23 .
 
Note : Regardless the sign of negativity .
 
maxGap ({-7,-42,-809,-14,-12}) ==> return (767)  
Explanation:
The Maximum Gap after sorting the array is 767 , The difference between | -809- (-42) | = 767 .
 
Note : Regardless the sign of negativity .
 
maxGap ({-54,37,0,64,640,0,-15}) //return (576)
Explanation:
The Maximum Gap after sorting the array is 576 , The difference between | 64 - 640 | = 576 .
 
Note : Regardless the sign of negativity .
 
 
*/

// 1️⃣
const maxGap = (numArr: number[]): number => {
    const sortedArr: number[] = numArr.sort((a, b) => a - b);
    let diffsArr: number[] = sortedArr
        .map((num, idx) => sortedArr[idx + 1] - num)
        .slice(0, -1);
    const solution: number = Math.max(...diffsArr);
    return solution;
};

// 2️⃣  COMPARE THIS WITH NUMBER 3 BELOW !!!
const maxGap2 = (numArr: number[]): number => {
    return Math.max(
        ...numArr
            .sort((a, b) => a - b)
            .map((num, idx) => numArr[idx + 1] - num)
            .slice(0, -1) // SLICE() TO REMOVE LAST ITEM NaN
    );
};

// 3️⃣ ❗️❗️❗️ MAP(EL, IDX, ARRAY) ❗️❗️❗️
const maxGap7 = (numArr: number[]): number => {
    return Math.max(
        ...numArr
            .sort((a, b) => a - b)
            .map((num, idx, arr) => arr[idx + 1] - num)
            .slice(0, -1)
    );
};

// 4
// console.log(maxGap([13, 10, 2, 9, 5]));
// console.log(maxGap2([13, 10, 2, 9, 5]));
// console.log(maxGap7([13, 10, 2, 9, 5]));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// ❗️❗️❗️ MAP(EL, IDX, ARRAY) ❗️❗️❗️
function maxGap6(nums: number[]) {
    return Math.max(
        ...nums
            .sort((a, b) => {
                return b - a;
            })
            .map((value, index, array) => {
                return index == array.length - 1 ? 0 : value - array[index + 1];
            })
    );
}

function maxGap3(nums: number[]): number {
    let arr: number[] = nums.slice().sort((x, y) => x - y);
    return Math.max(...arr.map((x, i, a) => a[i + 1] - x).slice(0, -1));
}

function maxGap4(nums: number[]) {
    const sorted = nums.sort((a, b) => b - a);
    let answer = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < sorted.length - 1; i++) {
        const temp = sorted[i] - sorted[i + 1];

        if (temp > answer) answer = temp;
    }
    return answer;
}

function maxGap5(nums: number[]): number {
    nums.sort((a, b) => b - a);
    let diff = 0;
    for (let i = 1; i < nums.length; i++) {
        if (Math.abs(nums[i] - nums[i - 1]) > diff) {
            diff = Math.abs(nums[i] - nums[i - 1]);
        }
    }
    return diff;
}
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: AVERAGE SCORES
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ EVAL ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).
*/

const average = (scoresArr: number[]): number => {
    return Math.round(
        scoresArr.reduce((acc, curr) => acc + curr) / scoresArr.length
    );
};

// var scores = [49, 3, 5, 300, 7];
// 73
// console.log(average(scores));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function average2(scores: number[]): number {
    // 1- Sum the values from the array
    const reducer = (total: number, currentValue: number) =>
        total + currentValue;
    const sumOfNumbers = scores.reduce(reducer);

    // 2- Get the length of the array
    const scoreLength = scores.length;
    // 3- Divide the array sum by the length
    return Math.round(sumOfNumbers / scoreLength);
}

function average3(scores: number[]): number {
    // ❗️❗️❗️ EVAL ❗️❗️❗️
    let sum = eval(scores.join("+"));
    let avg = sum / scores.length;
    return Math.round(avg);
}
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: MINIMUM STEPS  (Array Series #6)
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ SORT() - MUTATES ORIGINAL, DON'T NEED TO SAVE TO VAR ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Task
Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.
 
Notes:
List size is at least 3.
 
All numbers will be positive.
 
Numbers could occur more than once , (Duplications may exist).
 
Threshold K will always be reachable.
 
Input >> Output Examples
minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
Explanation:
We add two smallest elements (1 + 2), their sum is 3 .
 
Then we add the next smallest number to it (3 + 3) , so the sum becomes 6 .
 
Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) operations are required to do this .
 
minimumSteps({8 , 9, 4, 2}, 23)  ==> return (3)
Explanation:
We add two smallest elements (4 + 2), their sum is 6 .
 
Then we add the next smallest number to it (6 + 8) , so the sum becomes 14 .
 
Now we add the next smallest number (14 + 9) , so the sum becomes 23 .
 
Now the result is greater or equal to 23 , Hence the output is (3) i.e (3) operations are required to do this .
 
minimumSteps({19,98,69,28,75,45,17,98,67}, 464)  ==>  return (8)
Explanation:
We add two smallest elements (19 + 17), their sum is 36 .
 
Then we add the next smallest number to it (36 + 28) , so the sum becomes 64 .
 
We need to keep doing this until the sum becomes greater or equal to K (464 in this case), which will require 8 Steps .
 
Expected Time Complexity O(n Log n)
*/

const minimumSteps = (numsArr: number[], tHold: number): number => {
    const ascArr: number[] = numsArr.sort((a, b) => a - b);

    let sum: number = 0,
        counter: number = 0;

    for (counter; counter < ascArr.length; counter += 1) {
        sum += ascArr[counter];
        if (sum >= tHold) break;
    }

    return counter;
};

// 1
// console.log(minimumSteps([4, 6, 3], 7));
// 3
// console.log(minimumSteps([8, 9, 10, 4, 2], 23));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function minimumSteps2(nums: number[], value: number) {
    var s = 0;
    var total = 0;
    // ❗️❗️❗️ SORT() - MUTATES ORIGINAL, DON'T NEED TO SAVE TO VAR ❗️❗️❗️
    nums.sort((n1, n2) => n1 - n2);

    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
        s++;
        console.log(total);

        if (nums[0] >= value) {
            return 0;
        }

        if (total >= value) {
            return s - 1;
        }
    }
}

const minimumSteps3 = (nums: number[], value: number) =>
    nums
        .sort((a, b) => a - b)
        .reduce(
            (acc, item) => (acc[0] < value ? [acc[0] + item, acc[1] + 1] : acc),
            [0, -1]
        )[1];
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️  INCLUDE THIS IN EXAMPLES (MODULO/REMAINDER )❗️❗️❗️
// 4 % 10 => 4 !!! DIVIDEND < DIVISOR => DIVIDEND
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: INCREMENT EVERY ELEMENT BY ITS POSITION, IF GREATER THAN 10, REPLACE WITH SECOND DIGIT
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).
 
Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.
 
Notes:
return an empty array if your array is empty
arrays will only contain numbers so don't worry about checking that
Examples:
[1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]
 
[4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
                                       #  9+3 = 12  -->  2
*/

const incrementer = (numArr: number[]): number[] => {
    const solution: number[] = numArr.map((el, idx) => {
        const sum: number = el + (numArr.indexOf(el) + 1);
        return sum > 9 ? sum - 10 : sum;
    });

    return solution;
};

// [2, 4, 6]
// console.log(incrementer([1, 2, 3]));
// [5, 8, 0, 5, 8
// console.log(incrementer([4, 6, 7, 1, 3]));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// ❗️❗️❗️ 4 % 10 => 4 !!! DIVIDEND < DIVISOR => DIVIDEND ❗️❗️❗️
const incrementer2 = (nums: number[]): number[] =>
    nums.map((num, index) => (num + index + 1) % 10);

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️  INCLUDE THIS IN EXAMPLES (REGEX)❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: COMPARE STRINGS BY SUM OF CHARACTERS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ REGEX MATCH NEGATED SET ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Compare two strings by comparing the sum of their values (ASCII character code).
 
For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would be empty
Your method should return true, if the strings are equal and false if they are not equal.
 
Examples:
"AD", "BC"  -> equal
"AD", "DD"  -> not equal
"gf", "FG"  -> equal
"zz1", ""   -> equal (both are considered empty)
"ZzZz", "ffPFF" -> equal
"kl", "lz"  -> not equal
null, ""    -> equal
 
*/
const compare = (str1: string | null, str2: string | null): boolean => {
    //  !!! REPLACE LETTERS WITH SPACE AND CHECK LENGTH !!!
    const getStrVal = (str: string | null): number => {
        // const validStr: string = str?.replace(/[^A-Z]/ig, "");

        // ❗️❗️❗️ THESE TWO ARE REPLACED WITH !str BELOW ❗️❗️❗️
        // if (str === null) return 0;
        // if (str === "") return 0;
        // FILTER OUT INVALID INPUT (NON LETTER CHARACTERS / EMPTY STR / null)
        if (!str || /[^A-Z]/gi.test(str)) return 0;
        const upperCased: string = str.toUpperCase();
        let value: number = 0;

        for (let i = 0; i < upperCased.length; i++) {
            value += upperCased.charCodeAt(i);
        }

        return value;
    };

    console.table({
        value1: getStrVal(str1),
        value2: getStrVal(str2),
        isEqual: getStrVal(str1) === getStrVal(str2),
    });

    return getStrVal(str1) === getStrVal(str2);
};

/*
❗️❗️❗️ REGEX MATCH NEGATED SET "^" ❗️❗️❗️ MATCH ANY CHAR THAT IS NOT IN THE SET
Match letters only /[A-Z]/ig
Match anything not letters /[^A-Z]/ig
Match number only /[0-9]/g or /\d+/g
Match anything not number /[^0-9]/g or /\D+/g
Match anything not number or letter /[^A-Z0-9]/ig
 
*/

// true
// console.log(compare("aD", "Bc"));
// false
// console.log(compare("AD", "DD"));
// true
// console.log(compare("cx1", ""));
// console.log(compare(null, ""));
// console.log(compare("!!", "235"));
// console.log();
// console.log();

/*
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ value1  │  133   │
│ value2  │  133   │
│ isEqual │  true  │
└─────────┴────────┘
true
*/

//============= OTHER CODEWARS SOLUTIONS: =============
function compare2(s1: string | null, s2: string | null): boolean {
    function fun(s: string | null): string {
        if (typeof s === "string" && s.replace(/[a-z]/gi, "") === "")
            return s.toUpperCase();
        return "";
    }

    const red = (s: string | null): number =>
        fun(s)
            .split("")
            .reduce((acc, el) => acc + el.charCodeAt(0), 0);

    return red(s1) === red(s2);
}

function compare3(s1: string | null, s2: string | null): boolean {
    function sum(str: string | null): number {
        if (!str || !str.length) {
            return 0;
        }
        let arr = str
            .toUpperCase()
            .split("")
            .map((c) => c.charCodeAt(0));
        if (
            !arr.every(
                (el) => el >= "A".charCodeAt(0) && el <= "Z".charCodeAt(0)
            )
        ) {
            return 0;
        }
        return arr.reduce((acc, el) => acc + el);
    }

    return sum(s1) === sum(s2);
}

//   function compare4(x, y):boolean {
//     return (x = [x, y]
//       .map(a => (/[^A-Za-z]/g.test(a) ? '' : a || '')
//       .toUpperCase()
//       .split('')
//       .reduce((s, e) => s + e.charCodeAt(), 0)))[0] === x[1];
//   }

function compare5(s1: string | null, s2: string | null): boolean {
    function count(x: string | null): number {
        let count = 0;
        if (x)
            for (let c of x.toUpperCase()) {
                const cc = c.charCodeAt(0);
                if (cc >= 65 && cc <= 90) count += cc;
                else return 0;
            }
        return count;
    }
    return count(s1) == count(s2);
}
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: RETURN THE CLOSEST NUMBER MULTIPLE OF 10
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ MATH.ROUND() ❗️❗️❗️ SET UP TYPE ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Given a number return the closest number to it that is divisible by 10.
 
Example input:
 
22
25
37
Expected output:
 
20
30
40
*/
const closestMultiple10 = (num: number) => {
    return Math.round(num / 10) * 10;
};

// ❗️❗️❗️ Math.round ROUNDS TO NEAREST INTEGER ❗️❗️❗️
//  1. DIVIDE BY 10 TO MAKE NUM DECIMAL 54 => 5.4
//  2. RUN Math.round()                 5.4 => 5
//  3. MULTIPLY BY 10                   5 => 50

// 50
// console.log(closestMultiple10(54));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function closestMultiple102(num: number) {
    let last: number = num % 10;
    if (last < 5) {
        num -= last;
    } else {
        num += 10 - last;
    }
    return num;
}

// Parameter 'n' implicitly has an 'any' type.ts(7006)
// const closestMultiple103 = n => {
//     let s = n < 0 ? -1 : 1;
//     n = n < 0 ? -n : n;
//     let a = (n / 10 | 0) * 10;
//     let b = a + 10;
//     return s * ((n - a >= b - n) ? b : a);
// };
// ----------------------------------------------------
// ❗️❗️❗️ SET UP TYPE ❗️❗️❗️ SEE OBJECTS IN TYPESCRIPT ❗️❗️❗️
type F10 = (num: number) => number;

const part10: F10 = (num) => {
    if (num < 5) return num * -1;
    return 10 - num;
};

export const closestMultiple104: F10 = (num) => {
    return num + part10(num % 10);
};

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: RECURSION #1 - FACTORIAL
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: FACTORIAL, RECURSION
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
This is a kata series that you can only solve using recursion.
##1 - Factorial
 
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,
 
5! = 5 * 4 * 3 * 2 * 1 = 120.
 
The value of 0! is 1.
 
#Your task
 
You have to create the function factorial that receives n and returns n!. You have to use recursion.
*/

// 1️⃣
const factorialA = (n: number): number => {
    if (n < 2) {
        return 1;
    } else {
        return n * factorialA(n - 1);
    }
};

// 2️⃣
const factorialA2 = (n: number): number => {
    return n < 2 ? 1 : n * factorialA(n - 1);
};

// 120
// console.log(factorialA(5));
// 720
// console.log(factorialA2(6));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============
// const factorialA3 = (n: number, total: number = 1): number => {
//     if (n === 0) {
//         return 1;
//     }

//     if (n === 1) {
//         return total;
//     }

//     return factorial(n - 1, total * n)
// };

// const factorialA4 = (n: number): number => {
//     return (n > 0) ? n * this.factorial(n - 1) : 1;
// };

const factorialA5 = (n: number): number => {
    var fact = 1;

    function factorial(num: number): number {
        if (num > 0) {
            fact = fact * num;
            factorial(num - 1);
        }
        return fact;
    }
    return factorial(n);
};

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: DIGITAL CYPHER
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: MAP(IDX)
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Introduction
Digital Cypher assigns to each letter of the alphabet unique number. For example:
 
 a  b  c  d  e  f  g  h  i  j  k  l  m
 1  2  3  4  5  6  7  8  9 10 11 12 13
 n  o  p  q  r  s  t  u  v  w  x  y  z
14 15 16 17 18 19 20 21 22 23 24 25 26
Instead of letters in encrypted word we write the corresponding number, eg. The word scout:
 
 s  c  o  u  t
19  3 15 21 20
Then we add to each obtained digit consecutive digits from the key. For example. In case of key equal to 1939 :
 
   s  c  o  u  t
  19  3 15 21 20
 + 1  9  3  9  1
 ---------------
  20 12 18 30 21
  
   m  a  s  t  e  r  p  i  e  c  e
  13  1 19 20  5 18 16  9  5  3  5
+  1  9  3  9  1  9  3  9  1  9  3
  --------------------------------
  14 10 22 29  6 27 19 18  6  12 8
Task
Write a function that accepts str string and key number and returns an array of integers representing encoded str.
 
Input / Output
The str input string consists of lowercase characters only.
The key input number is a positive integer.
 
Example
Encode("scout",1939);  ==>  [ 20, 12, 18, 30, 21]
Encode("masterpiece",1939);  ==>  [ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]
*/
const encode = (str: String, key: number): number[] => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    // SPLIT KEY INTO ARRAY OF DIGITS: [ 1, 9, 3, 9 ]
    const keyArr: number[] = key
        .toString()
        .split("")
        .map((el) => Number(el));
    // GET KEY LENGTH FOR SEQUENCING KEY: 4
    const seqLength: number = keyArr.length;
    // MAKE ARRAY OF CHARACTERS: [ 's', 'c', 'o', 'u', 't' ]
    const strArr: string[] = str.split("");
    // REPLACE EVERY ELEMENT WITH ITS POSITION IN THE ALPHABET: [ 19, 3, 15, 21, 20 ]
    const charPositionArr: number[] = strArr.map(
        (char) => alphabet.indexOf(char) + 1
    );

    // ADD CONSECUTIVE KEY DIGITS TO EACH DIGIT IN SEQUENCE (1,9,3,9,1,9,3,9,1...) [ 20, 12, 18, 30, 21 ]
    const encodedArr: number[] = charPositionArr.map(
        (el: number, idx) =>
            (el += idx < seqLength ? keyArr[idx] : keyArr[idx % seqLength])
    );

    return encodedArr;
};
// [ 20, 12, 18, 30, 21]
// console.log(encode("scout", 1939));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function encode2(str: String, n: number): number[] {
    const keys: number[] = n.toString().split("").map(Number);
    return str.split("").map((code, index) => {
        return (
            code.toLowerCase().charCodeAt(0) - 96 + keys[index % keys.length]
        );
    });
}

function encode3(str: string, n: number): number[] {
    return str
        .split("")
        .map((c) => c.charCodeAt(0) - 96)
        .map((c, idx) => c + parseInt(n.toString()[idx % n.toString().length]));
}

/*
function encode4(str: String, n: number): number[] {
    const decodedArray: number[] = [];
    const stringArray = str.split("");
    const codeArray = stringArray.map(letter => letter.charCodeAt(0) - 96);
    const numberArray = n.toString().split("").map(Number)
    let tempArray = [...numberArray];
 
    const result = codeArray.map(code => {
        if (!tempArray.length) tempArray = [...numberArray];
 
        // ❗️❗️❗️ Object is possibly 'undefined'.ts(2532) ❗️❗️❗️
        return code += tempArray.shift()
    })
 
    return result;
}
*/

/*
function encode5(str: String, n: number): number[] {
    const decodedArray: number[] = [];
    const code = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8,
        i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15,
        p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22,
        w: 23, x: 24, y: 25, z: 26,
    }
    const stringArray = str.split("");
    // ❗️❗️❗️ error TS7053: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ a: number; b: number; c: number; d: number; e: number; f: number; g: number; h: number; i: number; j: number; k: number; l: number; m: number; n: number; o: number; p: number; q: number; r: number; s: number; t: number; u: number; ... 4 more ...; z: number; }'.
    const codeArray = stringArray.map(letter => code[letter]);
    const numberArray = n.toString().split("").map(str => parseInt(str))
    let tempArray = [...numberArray];
 
    const result = codeArray.map(code => {
        if (!tempArray.length) tempArray = [...numberArray];
 
        return code += tempArray.shift()
    })
 
    return result;
}
*/
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: SIMPLE FUN - HOUSE NUMBERS SUM
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: FOR OF, BREAK
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Task
A boy is walking a long way from school to his home. To make the walk more fun he decides to add up all the numbers of the houses that he passes by during his walk. Unfortunately, not all of the houses have numbers written on them, and on top of that the boy is regularly taking turns to change streets, so the numbers don't appear to him in any particular order.
 
At some point during the walk the boy encounters a house with number 0 written on it, which surprises him so much that he stops adding numbers to his total right after seeing that house.
 
For the given sequence of houses determine the sum that the boy will get. It is guaranteed that there will always be at least one 0 house on the path.
 
Example
For inputArray = [5, 1, 2, 3, 0, 1, 5, 0, 2], the output should be 11.
 
The answer was obtained as 5 + 1 + 2 + 3 = 11.
 
Input/Output
[input] integer array inputArray
 
Constraints: 5 ≤ inputArray.length ≤ 50, 0 ≤ inputArray[i] ≤ 10.
 
[output] an integer
*/
const houseNumbersSum = (arr: number[]): number => {
    let solution: number = 0;
    for (let i = 0; i < arr.length; i++) {
        solution += arr[i];
        // if (arr[i] === 0) break;
        // OR:
        if (!arr[i]) break;
    }
    return solution;
};

// 11
// console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));
// 13
// console.log(houseNumbersSum([4, 2, 1, 6, 0]));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

const houseNumbersSum2 = (arr: number[]): number =>
    arr.splice(0, arr.indexOf(0)).reduce((a, v) => a + v, 0);

function houseNumbersSum3(inputArray: number[]): number {
    let counter: number = 0;

    for (let i: number = 0; i < inputArray.length; i++) {
        if (inputArray[i] !== 0) {
            counter += inputArray[i];
        } else {
            break;
        }
    }
    return counter;
}

// ❗️❗️❗️ FOR OF ❗️❗️❗️
function houseNumbersSum4(inputArray: number[]): number {
    let sum: number = 0;
    4;
    for (let i of inputArray) {
        if (i === 0) break;
        sum += i;
    }
    return sum;
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: NUMBERS IN STRINGS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: TEST(), MATCH(), ❓❓❓ SYMBOL ITERATOR ❓❓❓
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
n this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.
 
For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.
 
Good luck!
*/

// 1️⃣
const solveC = (str: string): number => {
    // CHECK FOR NUMERIC DIGITS
    if (!/\d/g.test(str)) return 0;
    // FIND ALL DIGIT SUBSTRINGS AND CONVERT TO NUMBER
    const digitSubs: number[] = str.match(/\d+/g)!.map((el) => Number(el));
    // GET THE LARGEST ELEMENT
    // ❓❓❓ Type 'number[] | undefined' must have a '[Symbol.iterator]()' method that returns an iterator.ts(2488) ❓❓❓
    // console.log(Math.max(...digitSubs));
    const solution: number = Math.max(...digitSubs);
    return solution;
};

// 2️⃣ REFACTORED:
const solveC2 = (str: string): number => {
    return /\d/g.test(str)
        ? Math.max(...str.match(/\d+/g)!.map((el) => Number(el)))
        : 0;
};

// 695
// console.log(solveC2("gh12cdy695m1"));
// 9
// console.log(solveC2("2ti9iei7qhr5"));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============
const solveC3 = (s: string): number =>
    Math.max(...s.split(/[a-z]/g).map((el) => +el));

function solveC4(s: string) {
    return Math.max(...s.split(/\D+/).map((e) => Number(e)));
}

function solveC5(s: string): number {
    const numArray = s.replace(/\D+/g, " ").trim().split(" ").map(Number);
    return Math.max(...numArray);
}

function solveC6(s: string): number {
    const matches = s.match(/\d+/g)!;
    return Math.max(...matches.map((el) => Number(el)));
}
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: SPECIAL NUMBER (Special Numbers Series #5)
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: TEST()
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Definition
A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5
 
Given a number determine if it special number or not .
 
Notes
The number passed will be positive (N > 0) .
 
All single-digit numbers within the interval [1:5] are considered as special number.
 
Input >> Output Examples
specialNumber(2) ==> return "Special!!"
Explanation:
It's a single-digit number within the interval [1:5] .
 
specialNumber(9) ==> return "NOT!!"
Explanation:
Although, it's a single-digit number but Outside the interval [1:5] .
 
specialNumber(23) ==> return "Special!!"
Explanation:
All the number's digits formed from the interval [0:5] digits .
 
specialNumber(39) ==> return "NOT!!"
Explanation:
Although, there is a digit (3) Within the interval But the second digit is not (Must be ALL The Number's Digits ) .
 
specialNumber(59) ==> return "NOT!!"
Explanation:
Although, there is a digit (5) Within the interval But the second digit is not (Must be ALL The Number's Digits ) .
 
specialNumber(513) ==> return "Special!!"
specialNumber(709) ==> return "NOT!!"
*/
const specialNumber = (num: number) => {
    const numStr: string = num.toString();
    // console.log(numStr);
    // console.log(/[6-9]/g.test(numStr));
    return /[6-9]/g.test(numStr) ? "NOT!!" : "Special!!";
};

// "Special!!"
// console.log(specialNumber(234055));
// "NOT!!"
// console.log(specialNumber(6789));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============
const specialNumbers = [0, 1, 2, 3, 4, 5].map((n) => n.toString());

export const specialNumber2 = (n: number): string =>
    n
        .toString()
        .split("")
        .every((n) => specialNumbers.includes(n))
        ? "Special!!"
        : "NOT!!";

function specialNumber3(n: number) {
    return /[^0-5]/.test(n.toString()) ? "NOT!!" : "Special!!";
}

function specialNumber4(n: number) {
    return n.toString().match(/[^0-5]/) ? "NOT!!" : "Special!!";
}
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE: UNLUCKY DAYS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
 
Find the number of Friday 13th in the given year.
 
Input: Year in Gregorian calendar as integer.
 
Output: Number of Black Fridays in the year as an integer.
 
Examples:
 
unluckyDays(2015) == 3
unluckyDays(1986) == 1
 
*/
function unluckyDays(year: number): number {
    return 1;
}

// 3
// console.log(unluckyDays(2015));
// 1
// console.log(unluckyDays(1986));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: PRODUCT OF MAXIMUMS IN ARRAY (Array Series #2)
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ REDUCE WITH INITIAL VALUE ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Task
Given an array/list [] of integers , Find the product of the k maximal numbers.
 
Notes
Array/list size is at least 3 .
 
Array/list's numbers Will be mixture of positives , negatives and zeros
 
Repetition of numbers in the array/list could occur.
 
Input >> Output Examples
maxProduct ({4, 3, 5}, 2) ==>  return (20)
Explanation:
Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .
maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
Explanation:
Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is 8 * 9 * 10 = 720 .
maxProduct ({10, 8, 3, 2, 1, 4, 10}, 5) ==> return (9600)
Explanation:
Since the size (k) equal 5 , then the subsequence of size 5 whose gives product of maxima is 10 * 10 * 8 * 4 * 3 = 9600 .
maxProduct ({-4, -27, -15, -6, -1}, 2) ==> return (4)
Explanation:
Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is -4 * -1 = 4 .
maxProduct ({10, 3, -1, -27} , 3)  return (-30)
Explanation:
Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is 10 * 3 * -1 = -30 .
*/

// 1️⃣
const maxProduct = (numbers: number[], size: number): number => {
    // SORT DESCENDING
    const descArr: number[] = numbers.sort((a, b) => b - a);
    // GRAB SUB-ARRAY STARTING AT INDEX 0, WITH size NUMBER OF ELEMENTS
    const factorsArr: number[] = descArr.slice(0, size);
    // MULTIPLY ELEMENTS
    let solution: number = factorsArr.reduce((acc, curr) => acc * curr);

    return solution;
};

// 2️⃣
const maxProduct2 = (numbers: number[], size: number): number => {
    return numbers
        .sort((a, b) => b - a)
        .slice(0, size)
        .reduce((acc, curr) => acc * curr);
};

// 20
// console.log(maxProduct([4, 3, 5], 2));
// 720
// console.log(maxProduct([10, 8, 7, 9], 3));
// 9600
// console.log(maxProduct([10, 2, 3, 8, 1, 10, 4], 5));
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// ❗️❗️❗️ REDUCE WITH INITIAL VALUE ❗️❗️❗️
function maxProduct3(numbers: number[], size: number) {
    return numbers
        .sort((a, b) => a - b)
        .slice(-size)
        .reduce((ret, val) => ret * val, 1);
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: LONGEST VOWEL CHAIN
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: MATCH(AEIOU), SORT ARRAY BY LENGTH OF ELEMENTS, REGEX, TEST()
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.
 
Good luck!
*/
const solveB = (str: string): number => {
    // ❗️❗️❗️ CHECK IF STRING HAS ANY VOWELS ❗️❗️❗️
    if (!/[aeiou]/g.test(str)) return 0;
    // !!! THIS IS NOW NOT NEEDED !!!
    // if (str.length < 1) return 0;
    const substrings: string[] = str.match(/[aeiou]+/g)!;
    const solution: number = substrings.sort((a, b) => b.length - a.length)[0]
        .length;
    return solution;
};

// 2
// console.log(solveB("codewarriors"));
// 3
// console.log(solveB("suoidea"));
// FIXED:❗️❗️❗️ TypeError: Cannot read property 'sort' of null ❗️❗️❗️
// console.log(solveB("fgfgfg"));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============
function solveB2(s: string): number {
    return Math.max(...(s.match(/[aeiou]+/gi) || []).map((x) => x.length));
}

const solveB3 = (str: string): number =>
    Math.max(...str.split(/[^aeiou]/i).map((x) => x.length));

function solveB4(str: string) {
    return str
        .split(/[^aeiou]+/)
        .reduce((acc, vowelChain) => Math.max(acc, vowelChain.length), 0);
}
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:   CHAR CODE CALCULATION
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ REDUCE OF EMPTY ARRAY, STR.CHARCODEAT()
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:
 
'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':
 
total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the❗️❗️❗️  sum of the digits ❗️❗️❗️ in total1 and total2:
 
  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
*/

export const calc = (str: string): number => {
    // ❗️❗️❗️ TypeError: Reduce of empty array with no initial value ❗️❗️❗️ CHECK FOR EMPTY ARRAY ❗️❗️❗️
    if (str.length < 1) return 0;
    const strArr: string[] = str.split("");
    let numStrConcat: string = "";
    //  CONCAT CHAR CODE FOR EACH CHAR TO numStrConcat
    strArr.forEach((char: string, idx) => {
        numStrConcat += str.charCodeAt(idx);
    });
    //  REPLACE ALL INSTANCES OF "7" WITH "1"
    const numStrMinusSeven: string = numStrConcat.replace(/7/g, "1");
    //  GET SUM OF DIGITS FOR BOTH STRINGS
    const total1: number = numStrConcat
        .split("")
        .map((el) => Number(el))
        .reduce((a, b) => a + b);
    const total2: number = numStrMinusSeven
        .split("")
        .map((el) => Number(el))
        .reduce((a, b) => a + b);
    //  SUBSTRACT
    const result: number = total1 - total2;

    return result;
};

// 6
// console.log(calc("ABC"));

// console.log(calc("abcdef"));
// console.log(calc("hkodededyvcmntdzdyqrbqhxipcynkjezcsxcbyjktjaugiwllioggxvwijjpqmoxngklpqvsphtsklcbugkpdlnwuinbfeqphpctbaqfmrorkxyrhvbnlfuyktrdnyavxjvublyqfgdopehfjgcvwmilrghgvnwkjeklaihsalcfdqtdsmzbtqocslkbrxycrdnxgoliezbiwobdvxcijtjkcwijjrygfucmpufpmxigjrnuhsckyqhehxvnmadkbrwqrbcjqlstamfmpmqgcurpdemyuqqearbnzpywaycwpntcwrndwxkadbdwgjqairzoplqiinrxgdzebebxlilekpqokdrhwhyrjlfpedqywfiaqjseorwpjhimazefhsypzvyxtjggytrawymqvkrrggpdezrdtotwqhizigvuvvkepskmajinldotdwnzwwplfyezkzxbmfclaisbpybnewwlnttgeezuhbnedugpjxtahmrlcoccfmwygbiosggjqrzxtibfthvucdfjxivfeijcjkgcfwusehzxtlqrphwizngcaefaktbzjuppdtloulpbqorxckntgumqwhqqotzltulsyzoxpqsjccewvxlrizjppnmeeihnwusjuhdpnwjjkucaizjxaspjxuypsybxywdwriwkynpgbzrbvszpntjkappmzhoywferhpyuaqcsbxozfyjmksvk"));
// console.log(calc(""));

//============= OTHER CODEWARS SOLUTIONS: =============

function calc2(str: string): number {
    return (
        [...str]
            .map((x) => x.charCodeAt(0))
            .join("")
            .split("")
            .filter((x) => x === "7").length * 6
    );
}

const calc3 = (x: string): number => {
    return (
        (x.replace(/./g, (x) => x.charCodeAt(0).toString()).match(/7/g) || [])
            .length * 6
    );
};

function calc4(str: string): number {
    return (
        Array.from(str, (c) => c.charCodeAt(0))
            .toString()
            .replace(/[^7]/g, "").length * 6
    );
}

const calc5 = (str: string): number => {
    const codes = str.split("").map((c: string) => c.charCodeAt(0));
    const total1 = codes.reduce((a, b) => a + b, 0);
    const total2 = codes
        .map((x) => +x.toString().replace(/7/g, "1"))
        .reduce((a, b) => a + b, 0);
    return total1 - total2;
};

// ===

function calc6(str: string): number {
    const charCodes = str.split("").map((char) => char.charCodeAt(0));
    return sum2(charCodes) - sum(charCodes.map(replace7with1));
}

function sum2(arr: number[]): number {
    return arr.reduce((total, x) => total + x, 0);
}

function replace7with1(num: number): number {
    return parseInt(num.toString().replace(/7/g, "1"));
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: WORD VALUES MULTIPLIED BY ITS POSITION
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ....z = 26.
 
You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with 1.
 
nameValue ["abc","abc abc"] should return [6,24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.
 
"abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.
 
Input will only contain lowercase characters and spaces.
*/

const wordValue = (arr: string[]) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let solution: number[] = [];
    arr.forEach((word, idx) => {
        console.log(word);
        let letterArr: string[] = word.split("");
        console.log(letterArr);
        let wordVal: number = 0;
        letterArr.forEach((letter) => {
            // let wordVal: number = 0;
            let letterVal: number = alphabet.indexOf(letter) + 1;
            wordVal += letterVal;
            // console.table({
            //     word: word,
            //     letter: letter,
            //     value: letterVal,
            //     wordVal: wordVal,
            //     solution: solution,
            // });
        });
        solution.push(wordVal * (idx + 1));
    });
    // return solution.map((val, idx) => val * (idx + 1));
    return solution;
};

// [88, 12, 225]
// console.log(wordValue(["codewars", "abc", "xyz"]));
// console.log(wordValue(["lencsi", "mama", "papa"]));
// [6,24]
// console.log(wordValue(["abc", "abc abc"]));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function wordValue2(arr: string[]): number[] {
    const w: string = " abcdefghijklmnopqrstuvwxyz";
    return arr.map(
        (x, i) =>
            x.split("").reduce((sum, y) => sum + w.indexOf(y), 0) * (i + 1)
    );
}

const wordValue3 = (arr: string[]) =>
    arr
        .map((a) =>
            a
                .split("")
                .map((c) => (c === " " ? 0 : c.charCodeAt(0) - 96))
                .reduce((z, x) => z + x, 0)
        )
        .map((e, i) => e * +[i + 1]);

function wordValue4(arr: string[]): number[] {
    let res: number[] = [];

    arr.forEach((str, ind) => {
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            str.charCodeAt(i) !== 32
                ? (sum += (str.charCodeAt(i) - 96) * (ind + 1))
                : 0;
        }
        res.push(sum);
    });

    return res;
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: JUMPING NUMBER (Special Numbers Series #4)
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ EVERY()
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Definition
Jumping number is the number that All adjacent digits in it differ by 1.
 
Task
Given a number, Find if it is Jumping or not .
 
Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .
 
Return the result as String .
 
The difference between ‘9’ and ‘0’ is not considered as 1 .
 
All single digit numbers are considered as Jumping numbers.
 
Input >> Output Examples
jumpingNumber(9) ==> return "Jumping!!"
Explanation:
It's single-digit number
jumpingNumber(79) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1
jumpingNumber(23) ==> return "Jumping!!"
Explanation:
Adjacent digits differ by 1
jumpingNumber(556847) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1
jumpingNumber(4343456) ==> return "Jumping!!"
Explanation:
Adjacent digits differ by 1
jumpingNumber(89098) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1
jumpingNumber(32) ==> return "Jumping!!"
Explanation:
Adjacent digits differ by 1
*/

const jumpingNumber = (num: number): string => {
    if (num < 10) return "Jumping!!";
    let isJumping: boolean = true;
    const digitArr: number[] = num
        .toString()
        .split("")
        .map((el) => Number(el));
    for (let i = 0; i < digitArr.length - 1; i++) {
        if (
            digitArr[i] + 1 !== digitArr[i + 1] &&
            digitArr[i] - 1 !== digitArr[i + 1]
        ) {
            isJumping = false;
            break;
        }
        console.table({
            current: digitArr[i],
            next: digitArr[i + 1],
            isJumping: isJumping,
        });
    }

    return isJumping ? "Jumping!!" : "Not!!";
};

// JUMPING
// console.log(jumpingNumber(12321));
// NOT
// console.log(jumpingNumber(79));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function jumpingNumber2(n: number) {
    let arr: number[] = String(n)
        .split("")
        .map((num) => Number(num));

    if (arr.length === 1) {
        return "Jumping!!";
    }
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] - arr[i + 1] !== 1 && arr[i + 1] - arr[i] !== 1) {
            return "Not!!";
        }
    }
    return "Jumping!!";
}

// ❗️❗️❗️ EVERY() ❗️❗️❗️
function jumpingNumber3(n: number): string {
    let arr: string[] = [...String(n)];
    return arr.slice(1).every((x, i) => Math.abs(+x - +arr[i]) == 1)
        ? "Jumping!!"
        : "Not!!";
}

function jumpingNumber4(n: number) {
    // your code here
    if (n < 10) {
        return "Jumping!!";
    }
    let arr = n.toString().split("").map(Number);

    for (let i = 0; i < arr.length - 1; i++) {
        if (Math.pow(arr[i] - arr[i + 1], 2) != 1) {
            return "Not!!";
        }
    }
    return "Jumping!!";
}

function jumpingNumber5(n: number) {
    return n
        .toString()
        .split("")
        .map((n) => parseInt(n))
        .every((digit, index, arr) =>
            index === 0 ? true : Math.abs(arr[index - 1] - arr[index]) === 1
        )
        ? "Jumping!!"
        : "Not!!";
}

// ❗️❗️❗️ REFACTOR ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: ARRAY LEADERS (Array Series #3)
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: FILTER() ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Definition
An element is leader if it is greater than The Sum all the elements to its right side.
 
Task
Given an array/list [] of integers , Find all the LEADERS in the array.
 
Notes
Array/list size is at least 3 .
 
Array/list's numbers Will be mixture of positives , negatives and zeros
 
Repetition of numbers in the array/list could occur.
 
Returned Array/list should store the leading numbers in the same order in the original array/list .
 
Input >> Output Examples
arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
Explanation:
4 is greater than the sum all the elements to its right side
 
Note : The last element 0 is equal to right sum of its elements (abstract zero).
 
arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}
Explanation:
17 is greater than the sum all the elements to its right side
 
5 is greater than the sum all the elements to its right side
 
Note : The last element 2 is greater than the sum of its right elements (abstract zero).
 
arrayLeaders ({5, 2, -1}) ==> return {5, 2}
Explanation:
5 is greater than the sum all the elements to its right side
 
2 is greater than the sum all the elements to its right side
 
Note : The last element -1 is less than the sum of its right elements (abstract zero).
 
arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}
Explanation:
0 is greater than the sum all the elements to its right side
 
-1 is greater than the sum all the elements to its right side
 
3 is greater than the sum all the elements to its right side
 
Note : The last element 2 is greater than the sum of its right elements (abstract zero).
*/

const arrayLeaders = (numbers: number[]): number[] => {
    let leadersArr: number[] = [];
    const lastEl: number = numbers.length - 1;

    for (let i = 0; i < lastEl; i++) {
        let current: number = numbers[i];
        // console.table({
        //     idx: i,
        //     current: numbers[i],
        //     rest: numbers.slice(i + 1).reduce((a, b) => a + b),
        // });
        if (current > numbers.slice(i + 1).reduce((a, b) => a + b)) {
            // console.log(current);
            leadersArr.push(current);
        }
    }

    if (numbers[lastEl] > 0) {
        leadersArr.push(numbers[lastEl]);
    }

    return leadersArr;
};

// [17, 5, 2]
// console.log(arrayLeaders([16, 17, 4, 3, 5, 2]));
// console.log();
// console.log();
// console.log();

/*
 
arrayLeaders([16, 17, 4, 3, 5, 2])
 
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│   idx   │   0    │
│ current │   16   │
│  rest   │   31   │
└─────────┴────────┘
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│   idx   │   1    │
│ current │   17   │
│  rest   │   14   │
└─────────┴────────┘
17
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│   idx   │   2    │
│ current │   4    │
│  rest   │   10   │
└─────────┴────────┘
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│   idx   │   3    │
│ current │   3    │
│  rest   │   7    │
└─────────┴────────┘
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│   idx   │   4    │
│ current │   5    │
│  rest   │   2    │
└─────────┴────────┘
5
 
[ 17, 5, 2 ]
*/

//============= OTHER CODEWARS SOLUTIONS: =============

// ❗️❗️❗️ FILTER() ❗️❗️❗️
const arrayLeaders2 = (numbers: number[]) =>
    numbers.filter(
        (item, i) => item > numbers.slice(i + 1).reduce((a, b) => a + b, 0)
    );

function arrayLeaders3(numbers: number[]): number[] {
    return numbers.filter(
        (x, i) => x > numbers.slice(i + 1).reduce((a, b) => a + b, 0)
    );
}

function arrayLeaders4(numbers: number[]) {
    let sum = 0;
    const results = [];
    for (let i = numbers.length - 1; i >= 0; i--) {
        const current = numbers[i];
        if (current > sum) {
            results.push(current);
        }
        sum += current;
    }
    return results.reverse();
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: MAXIMUM TRIPLET SUM (Array Series #7)
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Task
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
 
Notes :
Array/list size is at least 3 .
 
Array/list numbers could be a mixture of positives , negatives and zeros .
 
Repetition of numbers in the array/list could occur , So (duplications are not included when summing).
 
Input >> Output Examples
1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
Explanation:
As the triplet that maximize the sum {6,8,3} in order , their sum is (17)
 
Note : duplications are not included when summing , (i.e) the numbers added only once .
 
2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
Explanation:
As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,
 
Note : duplications are not included when summing , (i.e) the numbers added only once .
 
3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)
Explanation:
As the triplet that maximize the sum {12 , 29 , 0} in order , their sum is (41) ,
 
Note : duplications are not included when summing , (i.e) the numbers added only once .
*/

const maxTriSum = (nums: number[]): number => {
    const unuqueNums = new Set<number>(nums);
    console.log(unuqueNums);
    const ascArr: number[] = Array.from(unuqueNums).sort((a, b) => b - a);
    console.log(ascArr);
    console.log(ascArr[0] + ascArr[1] + ascArr[2]);

    return ascArr[0] + ascArr[1] + ascArr[2];
};

// 17
// console.log(maxTriSum([3, 2, 6, 8, 2, 3]));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function maxTriSum2(nums: number[]): number {
    return [...new Set(nums)]
        .sort((a, b) => b - a)
        .slice(0, 3)
        .reduce((c, d) => c + d, 0);
}

const maxTriSum3 = (nums: number[]) =>
    nums
        .filter((item, i) => nums.indexOf(item) == i)
        .sort((a, b) => (a < b ? 1 : -1))
        .slice(0, 3)
        .reduce((a, b) => a + b, 0);

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: NTH SMALLEST ELEMENT (Array Series #4) DON'T REMOVE DUPLICATES
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Task
Given an array/list [] of integers , Find the Nth smallest element in this array of integers
 
Notes
Array/list size is at least 3 .
 
Array/list's numbers could be a mixture of positives , negatives and zeros .
 
Repetition in array/list's numbers could occur , so don't Remove Duplications .
 
Input >> Output Examples
nthSmallest({3,1,2} ,2) ==> return (2) 
Explanation:
Since the passed number is 2 , Then * the second smallest element in this array/list is 2*
 
nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
Explanation:
Since the passed number is 3 , Then * the third smallest element in this array/list is 7*
 
nthSmallest({2,169,13,-5,0,-1} ,4) ==> return (2) 
Explanation:
Since the passed number is 4 , Then * the fourth smallest element in this array/list is 2*
 
nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92) 
Explanation:
Since the passed number is 5 , Then * the fifth smallest element in this array/list is 92*
 
 
*/

const nthSmallest = (arr: number[], pos: number): number => {
    // SORT ASCENDING
    const ascArr: number[] = arr.sort((a, b) => a - b);
    // RETURN ELEMENT AT POSITION pos
    return ascArr[pos - 1];
};

// 7
// console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function nthSmallest2(arr: number[], pos: number) {
    return arr.sort((a, b) => a - b)[--pos];
}

function nthSmallest3(arr: number[], pos: number) {
    return [...arr].sort((a, b) => a - b)[pos - 1];
}

function nthSmallest4(arr: number[], pos: number) {
    for (let i = 1; i < pos; i++) {
        arr.splice(arr.indexOf(Math.min(...arr)), 1);
    }
    return arr[arr.indexOf(Math.min(...arr))];
}

function nthSmallest5(arr: number[], pos: number) {
    var sortArray: Array<number> = arr.sort((a, b) => a - b);
    return sortArray[pos - 1];
}

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// ❗️❗️❗️ NOT SUBMITTED ON CODEWARS YET ❗️❗️❗️ REFACTOR ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: 16+18=214
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
For this kata you will have to forget how to add two numbers.
 
It can be best explained using the following meme:
 
Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016
 
In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)
 
You may assume both integers are positive integers.
 
Examples
16+1821426+39515122+811103\large \begin{array}{lll} & 1 & 6 \\ + & 1 & 8 \\ \hline & 2 & 1 4 \\ \end{array} \qquad \large \begin{array}{lll} & 2 & 6 \\ + & 3 & 9 \\ \hline & 5 & 15 \\ \end{array} \qquad \large \begin{array}{lll} & 1 & 2 & 2 \\ + & & 8 & 1 \\ \hline & 1 & 10 & 3 \\ \end{array} 
+
​
*/

// const nyuszi: string = "🐰";
// console.log("maci ❤️ : ", nyuszi);

const add = (num1: number, num2: number): number => {
    const greater = Math.max(num1, num2).toString();
    // console.log(greater.length);

    const numStr1: string = num1.toString();
    const numStr2: string = num2.toString();
    let solutionArr: number[] = [];

    for (let i = 0; i < greater.length; i++) {
        console.log(
            "numbers: ",
            numStr1[numStr1.length - 1 - i],
            numStr2[numStr2.length - 1 - i]
        );
        let sum: number = 0;
        if (numStr1[numStr1.length - 1 - i] === undefined) {
            console.log("undefined");
            sum = Number(numStr2[numStr2.length - 1 - i]);
            // continue;
        } else if (numStr2[numStr2.length - 1 - i] === undefined) {
            console.log("undefined");
            sum = Number(numStr1[numStr1.length - 1 - i]);
            // continue;
        } else {
            sum =
                Number(numStr1[numStr1.length - 1 - i]) +
                Number(numStr2[numStr2.length - 1 - i]);
            // console.log("sum: ", sum);
        }
        console.log("sum: ", sum);
        solutionArr.unshift(sum);
    }
    console.log(solutionArr);

    return Number(solutionArr.join(""));
};

// 1 10 3 (1103)
// console.log(add(122, 81));
// 31499
// console.log(add(1222, 30277));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: TIDY NUMBER (Special Numbers Series #9)
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Definition
A Tidy number is a number whose digits are in non-decreasing order.
 
Task
Given a number, Find if it is Tidy or not .
*/

const tidyNumber = (num: number): boolean => {
    // ARRANGE DIGITS IN INCREASING ORDER(STRING)
    const increasingNum = num
        .toString()
        .split("")
        .map((el) => Number(el))
        .sort((a, b) => a - b)
        .join("");

    // CONVERT TO NUMBER AND COMPARE TO INPUT NUMBER
    return parseInt(increasingNum) === num;
};

// TRUE
// console.log(tidyNumber(2789));
// FALSE
// console.log(tidyNumber(9672));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function tidyNumber2(num: number) {
    let s = "" + num;
    for (let i = 1; i < s.length; i++) {
        if (s[i] < s[i - 1]) {
            return false;
        }
    }
    return true;
}

const tidyNumber3 = (num: number) =>
    num == +[...String(num)].sort((a, b) => +a - +b).join("");

const tidyNumber4 = (n: number) => +[...String(n)].sort().join("") === n;
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: ALL INCLUSIVE?
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ROTATE STRING,
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Input:
 
a string strng
an array of strings arr
Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):
 
a boolean true if all rotations of strng are included in arr (C returns 1)
false otherwise (C returns 0)
Examples:
contain_all_rots(
  "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true
 
contain_all_rots(
  "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
Note:
Though not correct in a mathematical sense
 
we will consider that there are no rotations of strng == ""
and for any array arr: contain_all_rots("", arr) --> true
Ref: https://en.wikipedia.org/wiki/String_(computer_science)#Rotations
 
*/

const containAllRots = (str: string, arr: string[]): boolean => {
    const strArr: string[] = str.split("");
    // GET ALL ROTATIONS AND COMPARE
    for (let i = 0; i < strArr.length; i++) {
        // ROTATE
        let currChar = strArr[0];
        strArr.splice(0, 1);
        strArr.push(currChar);
        // CONVERT TO STRING
        let currtRotationStr: string = strArr.join("");
        // COMPARE
        if (arr.indexOf(currtRotationStr) < 0) return false;
    }

    return true;
};

// true
// console.log(
// containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"])
// );
// false
// console.log(
//     containAllRots("XjYABhR", [
//         "TzYxlgfnhf",
//         "yqVAuoLjMLy",
//         "BhRXjYA",
//         "YABhRXj",
//         "hRXjYAB",
//         "jYABhRX",
//         "XjYABhR",
//         "ABhRXjY",
//     ])
// );
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function containAllRots2($: string, arr: string[]): boolean {
    arr = arr.map((e) => e.toLowerCase());
    const arr$ = Array.from({ length: $.length }, (x) => $.toLowerCase()).map(
        (el, i) => el.slice(i) + el.slice(0, i)
    );
    return arr$.every((e) => arr.includes(e));
}

function containAllRots3(str: string, arr: string[]): boolean {
    const inputStrings = new Set(arr);
    return getRots(str).every((rotation) => inputStrings.has(rotation));
}

function getRots(str: string, res: string[] = []): string[] {
    if (res.length === str.length) return res;
    res.push(str);
    return getRots(str.slice(1) + str[0], res);
}

function containAllRots4(str: string, arr: string[]): boolean {
    for (let idx = 0; idx < str.length; idx += 1) {
        const rot = str.slice(idx) + str.slice(0, idx);
        if (!arr.includes(rot)) return false;
    }
    return true;
}
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: DISARIUM NUMBER - (Special Numbers Series #3)
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Definition
Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
 
Task
Given a number, Find if it is Disarium or not .
 
Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .
Return the result as String
Input >> Output Examples
disariumNumber(89) ==> return "Disarium !!"
Explanation:
Since , 81 + 92 = 89 , thus output is "Disarium !!"
disariumNumber(564) ==> return "Not !!"
Explanation:
Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"
*/

const disariumNumber = (num: number): string => {
    // CONVERT NUM TO ARRAY OF ITS NUMERIC DIGITS
    const digitsArr: number[] = num
        .toString()
        .split("")
        .map((el) => Number(el));

    // console.log(digitsArr);

    // RAISE EACH EL TO ITS POSITION'S POWER AND GET SUM OF ARRAY
    const pwrPosSum: number = digitsArr
        // POSITION 1 = 0 SO HAVE TO ADJUST BY ADDING 1
        .map((el, idx) => Math.pow(el, idx + 1))
        .reduce((a, b) => a + b);

    // console.log(pwrPosSum);

    return pwrPosSum === num ? "Disarium !!" : "Not !!";
};

// "Disarium !!"
// console.log(disariumNumber(89));
// "Not !!"
// console.log(disariumNumber(564));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function disariumNumber2(n: number): string {
    return String(n)
        .split("")
        .reduce((sum, x, i) => sum + parseInt(x) ** (i + 1), 0) === n
        ? "Disarium !!"
        : "Not !!";
}

const disariumNumber3 = (n: number): string =>
    n
        .toString()
        .split("")
        .map((value, index) => parseInt(value) ** (index + 1))
        .reduce((acc, n) => acc + n, 0) === n
        ? "Disarium !!"
        : "Not !!";

function disariumNumber4(n: number) {
    return String(n)
        .split("")
        .reduce(
            (prev, curr, index) => prev + Math.pow(Number(curr), index + 1),
            0
        ) === n
        ? "Disarium !!"
        : "Not !!";
}
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: BOILED EGGS - COOKING TIME
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
You are the greatest chef on earth. No one boils eggs like you! Your restaurant is always full of guests, who love your boiled eggs. But when there is a greater order of boiled eggs, you need some time, because you have only one pot for your job. How much time do you need?
 
Your Task
Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.
 
Rules
you can put at most 8 eggs into the pot at once
it takes 5 minutes to boil an egg
we assume, that the water is boiling all the time (no time to heat up)
for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it
Example (Input --> Output)
0 --> 0
5 --> 5
10 --> 10
*/

// 1️⃣ ✅
const cookingTime = (eggs: number): number => {
    if (eggs === 0) return 0;
    // CALC HOW MANY ROUNDS NEEDED(EGGS/8 ROUNDED UP TO NEAREST INT)
    const rounds: number = Math.ceil(eggs / 8);
    const time: number = rounds * 5;
    return time;
};

// 2️⃣ ✅ REFACTOR WITH TERNARY
const cookingTime2 = (eggs: number): number => {
    return eggs < 1 ? 0 : Math.ceil(eggs / 8) * 5;
};

// console.log(cookingTime(7));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: STRONG NUMBER
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: FACTORIAL()
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Definition
Strong number is the number that the sum of the factorial of its digits is equal to number itself.
 
For example: 145, since
1! + 4! + 5! = 1 + 24 + 120 = 145
So, 145 is a Strong number.
 
Task
Given a number, Find if it is Strong or not.
 
Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive.
Return the result as String
Input >> Output Examples
strong_num(1) ==> return "STRONG!!!!"
Explanation:
Since , the sum of its digits' factorial of (1) is equal to number itself (1) , Then its a Strong .
 
strong_num(123) ==> return "Not Strong !!"
Explanation:
Since the sum of its digits' factorial of 1! + 2! + 3! = 9 is not equal to number itself (123) , Then it's Not Strong .
 
strong_num(2)  ==>  return "STRONG!!!!"
Explanation:
Since the sum of its digits' factorial of 2! = 2 is equal to number itself (2) , Then its a Strong .
 
strong_num(150) ==> return "Not Strong !!"
Explanation:
Since the sum of its digits' factorial of 1! + 5! + 0! = 122 is not equal to number itself (150), Then it's Not Strong .
 
 
*/

const strongNumber = (num: number): string => {
    const factorial = (n: number): number => {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    };
    // console.log(factorial(4));
    const numArr: number[] = num
        .toString()
        .split("")
        .map((el) => Number(el));
    console.log(numArr);

    const factSum: number = numArr
        .map((digit) => {
            return factorial(digit);
        })
        .reduce((a, b) => a + b);
    console.log(factSum);

    return num === factSum ? "STRONG!!!!" : "Not Strong !!";
};

//   NOT STRONG
// console.log(strongNumber(7));
// console.log(strongNumber(145));

// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

/*
const strongNumber2 = (num: number): string => {
    var arr: number[] = [];
  
    function factorial(n: number) { 
        return n <= 1 ? 1 : n * factorial(n - 1)
    }
  
    return num === String(num).split('')
        .map((e) => Number(e))
        .map((e) => factorial(e))
        .reduce((a, b) => a + b) ? "STRONG!!!!" : "Not Strong !!";
  };
 
 
 
 
  function fac(n: number){
    return n < 2 ? 1 : n * fac(n - 1)
  }
  
  export const strongNumber3 = (num: number): string => {
    return String(num).split("").reduce((a, b) => a + fac(+b), 0) === num ? "STRONG!!!!" : "Not Strong !!";
}; 
  */

const factorial3 = (n: number): number => (n === 0 ? 1 : n * factorial(n - 1));

export const strongNumber4 = (num: number): string =>
    num ===
    num
        .toString()
        .split("")
        .reduce((acc, value) => acc + factorial(parseInt(value)), 0)
        ? "STRONG!!!!"
        : "Not Strong !!";
// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:   GOING TO THE CINEMA
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ACCUMULATOR WHILE()
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
My friend John likes to go to the cinema. He can choose between system A and system B.
 
System A : he buys a ticket (15 dollars) every time
System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price, 
then for each additional ticket he pays 0.90 times the price paid for the previous ticket.
Example:
If John goes to the cinema 3 times:
 
System A : 15 * 3 = 45
System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849999999999, no rounding for each ticket)
John wants to know how many times he must go to the cinema so that the final result of System B, when rounded up to the next dollar, will be cheaper than System A.
 
The function movie has 3 parameters: card (price of the card), ticket (normal price of a ticket), perc (fraction of what he paid for the previous ticket) and returns the first n such that
 
ceil(price of System B) < price of System A.
More examples:
movie(500, 15, 0.9) should return 43 
    (with card the total price is 634, with tickets 645)
movie(100, 10, 0.95) should return 24 
    (with card the total price is 235, with tickets 240)
*/

class G964c {
    public static movie(prePaid: number, ticket: number, perc: number): number {
        let counter: number = 0, // SOLUTION
            sysA: number = 0, // A
            sysB: number = prePaid, // B
            currDiscPrice: number = ticket; // TRACK CURRENT PRICE FOR sysB
        // ROUND UP sysB WHEN CHECKING CONDITION
        while (Math.ceil(sysB) >= sysA) {
            // console.table({ sysA: sysA, sysB: sysB, counter: counter });
            sysA += ticket; // UPDATE sysA
            currDiscPrice *= perc; // CALC CURRENT DISC PRICE
            sysB += currDiscPrice; // UPDATE sysB
            counter++; // INCREMENT COUNTER
            // console.table({
            //     sysA: sysA,
            //     sysB: sysB,
            //     "sysB rounded up: ": Math.ceil(sysB),
            //     counter: counter,
            // });
        }

        return counter;
    }
}

/*
G964c.movie(0, 10, 0.95)
┌───────────────────┬────────┐
│      (index)      │ Values │
├───────────────────┼────────┤
│       sysA        │   10   │
│       sysB        │  9.5   │
│ sysB rounded up:  │   10   │
│      counter      │   1    │
└───────────────────┴────────┘
┌───────────────────┬────────┐
│      (index)      │ Values │
├───────────────────┼────────┤
│       sysA        │   20   │
│       sysB        │ 18.525 │
│ sysB rounded up:  │   19   │
│      counter      │   2    │
└───────────────────┴────────┘
2
*/

// 43
// console.log(G964c.movie(500, 15, 0.9));
// 2
// console.log(G964c.movie(0, 10, 0.95));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

class G964c1 {
    public static movie(card: number, ticket: number, perc: number): number {
        let i: number = 0;
        while (Math.ceil(card) >= ticket * i) {
            card += ticket * perc ** i;
            i++;
        }
        return i - 1;
    }
}

class G964c2 {
    public static movie(card: number, ticket: number, perc: number): number {
        let k = 1,
            i = 1;
        while (Math.ceil(card + ticket * perc * k) >= ticket * i) {
            k += Math.pow(perc, i);
            i++;
        }
        return i;
    }
}

class G964c3 {
    public static movie(card: number, ticket: number, perc: number): number {
        var cardPrice: number = card + ticket;
        var ticketPrice: number = ticket;
        var previousTicket: number = ticket;
        var i: number = 1;
        while (Math.ceil(cardPrice) >= ticketPrice) {
            ticketPrice += ticket;
            previousTicket *= perc;
            cardPrice += previousTicket;
            i += 1;
        }
        return i - 1;
    }
}

/*
class G964c4 {
    
    public static movie(card: number, ticket: number, perc: number): number {
        let lastN = 0;
        let n = 0;
        let count = 0;
        while(true) {
          lastN = n;
          let costA = G964.systemA(ticket, n);
          let costB = G964.systemB(card, ticket, perc, n);
          if(roundup(costB) >= roundup(costA)) {
            if(Math.abs(costB - costA) < ticket) {
              n++;
            } else {
            n += Math.ceil((costB - costA)/ticket);
            }
          } else {
              break;
          }
          if(count++ > 20) break;
        }
        return n;
    };
    
    public static systemA(ticket, n) {
        return ticket*n;
    }    
    
    public static systemB(card, ticket, perc, n) {
        return card + ticket*perc*(1-Math.pow(perc,n))/(1-perc);
    }
    
    public static costDifference(card: number, ticket: number, perc: number, n: number) {
        return (G964.systemB(card, ticket, perc, n)) - (G964.systemA(ticket, n));
    }
}
 
function roundup(x): number {
    return Math.ceil(x);
}
*/

class G964c5 {
    public static movie(card: number, ticket: number, perc: number): number {
        let counter = 1;
        let ticketTotal = ticket;

        let currentTicketPrice = ticket * perc;

        let cardTotal = card + currentTicketPrice;

        while (ticketTotal <= Math.ceil(cardTotal)) {
            counter++;

            ticketTotal += ticket;

            currentTicketPrice *= perc;
            cardTotal += currentTicketPrice;
        }

        return counter;
    }
}

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️  INCLUDE THIS IN EXAMPLES ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:   ORDERED COUNT OF CHARACTERS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: COUNT OCCURENCES IN ARRAY, OBJECT.ENTRIES(), SET(), LOOP OVER SET
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.
 
Example:
 
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

// 1️⃣  !!! THIS IS NOT IN ORDER OF APPEARANCE FOR NUMBER STRING !!!
// WORKS WITH ALPABETIC STRINGS
const orderedCount = (text: string): [string, number][] => {
    let solution: [string, number][] = [];

    interface StingKey {
        [key: string]: number;
    }

    const counterObj: StingKey = {};

    text.split("").forEach(
        (num) => (counterObj[num] = (counterObj[num] || 0) + 1)
    );

    console.log(counterObj);

    Object.entries(counterObj).forEach(([key, value]) => {
        console.log([key, value]);
        solution.push([key, value]);
    });

    return solution;
};

// 2️⃣
const orderedCount2 = (text: string): [string, number][] => {
    const strArr: string[] = text.split("");
    let solution: [string, number][] = [];

    interface StringNumber {
        [key: string]: number;
    }

    const counterObj: StringNumber = {};

    strArr.forEach((num) => (counterObj[num] = (counterObj[num] || 0) + 1));

    console.log(counterObj);

    // Object.entries(counterObj).forEach(([key, value]) => {
    //     console.log([key, value]);
    //     solution.push([key, value]);
    // });

    // LOOP OVER strArr TO PRESERVE ORIGINAL ORDER ???
    // REMOVE DUPLICATES [2, 3, 3, 3, 1, 2] => [2, 3, 1]
    // AND LOOP OVER SET:
    const uniqueElements = new Set<string>(strArr);
    console.log(uniqueElements);

    uniqueElements.forEach((el) => {
        console.log(el, counterObj[el]);
        solution.push([el, counterObj[el]]);
    });

    return solution;
};

// [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
// console.log(orderedCount("abracadabra"));
// [ [ '2', 2 ], [ '3', 3 ], [ '1', 1 ] ]
// console.log(orderedCount2("233312"));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function orderedCount3(text: string): [string, number][] {
    return [...new Set(text)].map((x: string) => [x, text.split(x).length - 1]);
}

function orderedCount4(t: string): [string, number][] {
    return [...new Set(t.split(""))].map((e) => [
        e,
        t.split("").filter((v) => v == e).length,
    ]);
}

function orderedCount5(text: string): [string, number][] {
    const arr = text.split("").filter((el, i, arr) => arr.indexOf(el) === i);
    return arr.map((value, index) => {
        return [value, text.split("").filter((val) => val === value).length];
    });
}

function orderedCount6(text: string): [string, number][] {
    return text
        .split("")
        .filter((el, i) => text.indexOf(el) === i)
        .map((item) => [item, text.split(item).length - 1]);
}

function orderedCount7(text: string): [string, number][] {
    let m: any = {};
    let output: any = [];

    for (let i of text) {
        if (!(i in m)) {
            m[i] = 1;
        } else {
            m[i] += 1;
        }
    }

    for (let i of text) {
        if (i in m) {
            output.push([i, m[i]]);
            delete m[i];
        }
    }

    return output;
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: GROWING PLANT - Simple Fun #74
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: BREAK OUT OF WHILE LOOP
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Task
Each day a plant is growing by upSpeed meters. Each night that plant's height decreases by downSpeed meters due to the lack of sun heat. Initially, plant is 0 meters tall. We plant the seed at the beginning of a day. We want to know when the height of the plant will reach a certain level.
 
Example
For upSpeed = 100, downSpeed = 10 and desiredHeight = 910, the output should be 10.
 
After day 1 --> 100
After night 1 --> 90
After day 2 --> 190
After night 2 --> 180
After day 3 --> 280
After night 3 --> 270
After day 4 --> 370
After night 4 --> 360
After day 5 --> 460
After night 5 --> 450
After day 6 --> 550
After night 6 --> 540
After day 7 --> 640
After night 7 --> 630
After day 8 --> 730
After night 8 --> 720
After day 9 --> 820
After night 9 --> 810
After day 10 --> 910 
For upSpeed = 10, downSpeed = 9 and desiredHeight = 4, the output should be 1.
 
Because the plant reach to the desired height at day 1(10 meters).
 
After day 1 --> 10
Input/Output
[input] integer upSpeed
 
A positive integer representing the daily growth.
 
Constraints: 5 ≤ upSpeed ≤ 100.
 
[input] integer downSpeed
 
A positive integer representing the nightly decline.
 
Constraints: 2 ≤ downSpeed < upSpeed.
 
[input] integer desiredHeight
 
A positive integer representing the threshold.
 
Constraints: 4 ≤ desiredHeight ≤ 1000.
 
[output] an integer
 
The number of days that it will take for the plant to reach/pass desiredHeight (including the last day in the total count).
*/

const growingPlant = (up: number, down: number, target: number): number => {
    if (
        up < 5 ||
        up > 100 ||
        down < 2 ||
        down >= up ||
        target < 4 ||
        target > 1000
    ) {
        return 0;
    }

    let actualHeigth = 0,
        counter = 0;

    while (actualHeigth <= target) {
        actualHeigth += up;
        counter++;
        if (actualHeigth >= target) {
            // ❗️ REFACTOR: END RETURN STATEMENT NEVER RUNS ❗️
            // return counter;

            // VS:

            // ❗️ STOP LOOP AND RETURN AT END OF FUNCTION ❗️
            break;
        }
        actualHeigth -= down;

        // console.table({
        //     up: up,
        //     down: down,
        //     actualHeigth: actualHeigth,
        //     counter: counter,
        // });
    }

    return counter;
};

// 10
// console.log(growingPlant(100, 10, 410));
// console.log(growingPlant(10, 10, 410));
// 1
// console.log(growingPlant(10, 9, 4));
// console.log();
// console.log();

/*
growingPlant(100, 10, 410)
┌──────────────┬────────┐
│   (index)    │ Values │
├──────────────┼────────┤
│      up      │  100   │
│     down     │   10   │
│ actualHeigth │   90   │
│   counter    │   1    │
└──────────────┴────────┘
┌──────────────┬────────┐
│   (index)    │ Values │
├──────────────┼────────┤
│      up      │  100   │
│     down     │   10   │
│ actualHeigth │  180   │
│   counter    │   2    │
└──────────────┴────────┘
┌──────────────┬────────┐
│   (index)    │ Values │
├──────────────┼────────┤
│      up      │  100   │
│     down     │   10   │
│ actualHeigth │  270   │
│   counter    │   3    │
└──────────────┴────────┘
┌──────────────┬────────┐
│   (index)    │ Values │
├──────────────┼────────┤
│      up      │  100   │
│     down     │   10   │
│ actualHeigth │  360   │
│   counter    │   4    │
└──────────────┴────────┘
5
*/

//============= OTHER CODEWARS SOLUTIONS: =============

function growingPlant2(up: number, down: number, h: number): number {
    let count: number = 1;
    let a: number = up;
    while (a < h) {
        count++;
        a = a - down + up;
    }
    return count;
}

function growingPlant3(up: number, down: number, target: number): number {
    let height = up;
    let days = 1;
    while (height < target) {
        height += up - down;
        days++;
    }
    return days;
}

function growingPlant4(up: number, down: number, h: number): number {
    return Math.max(Math.ceil((h - down) / (up - down)), 1);
}

function growingPlant5(up: number, down: number, h: number): number {
    let meters = 0;
    let day = 0;
    while (meters < h) {
        day++;
        meters += up;
        if (meters >= h) return day;
        meters -= down;
    }
    return day;
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: ROTATE FOR A MAX
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Let us begin with an example:
 
Take a number: 56789. Rotate left, you get 67895.
 
Keep the first digit in place and rotate left the other digits: 68957.
 
Keep the first two digits in place and rotate the other ones: 68579.
 
Keep the first three digits and rotate left the rest: 68597. Now it is over since keeping the first four it remains only one digit which rotated is itself.
 
You have the following sequence of numbers:
 
56789 -> 67895 -> 68957 -> 68579 -> 68597
 
and you must return the greatest: 68957.
 
Task
Write function max_rot(n) which given a positive integer n returns the maximum number you got doing rotations similar to the above example.
 
So max_rot (or maxRot or ... depending on the language) is such as:
 
max_rot(56789) should return 68957
 
max_rot(38458215) should return 85821534
*/

class G964B {
    public static maxRot = (num: number): number => {
        console.log(num);
        // GET HOW MANY TIMES NUM WILL BE ROTATED
        const numRotations: number = num.toString().length - 1;
        const numArr = num.toString().split("");
        // NOT NECESSARY AS ORIGINAL NUM IS NOW ADDED TO VERSIONSARR TO COMPARE
        // if (numArr[1] === "0" || num < 10) return num;

        // ARRAY FOR ALL VARIATIONS
        let versionsArr = [];

        for (let i = 0; i < numRotations; i++) {
            // CURRENT DIGIT TO SHIFT
            let rotateDigit = numArr[i];
            // REMOVE iTH DIGIT
            numArr.splice(i, 1);
            // ADD IT TO END OF ARRAY
            numArr.push(rotateDigit);
            //  console.log("CURRENT DIGITS: ", numArr);
            // CONVERT TO NUMBER
            let number: number = parseInt(numArr.join(""));
            // PUSH INTO versionsArr
            versionsArr.push(number);

            // console.table({
            //     rotateDigit: rotateDigit,
            //     number: number
            // })
        }

        // ADD ORIGINAL INPUT NUM TO versionsArr AND GET LARGEST NUMBER
        return Math.max(...versionsArr.concat(num));
    };
}

/*
553188569
┌─────────────┬───────────┐
│   (index)   │  Values   │
├─────────────┼───────────┤
│ rotateDigit │    '5'    │
│   number    │ 531885695 │
└─────────────┴───────────┘
┌─────────────┬───────────┐
│   (index)   │  Values   │
├─────────────┼───────────┤
│ rotateDigit │    '3'    │
│   number    │ 518856953 │
└─────────────┴───────────┘
┌─────────────┬───────────┐
│   (index)   │  Values   │
├─────────────┼───────────┤
│ rotateDigit │    '8'    │
│   number    │ 518569538 │
└─────────────┴───────────┘
┌─────────────┬───────────┐
│   (index)   │  Values   │
├─────────────┼───────────┤
│ rotateDigit │    '5'    │
│   number    │ 518695385 │
└─────────────┴───────────┘
┌─────────────┬───────────┐
│   (index)   │  Values   │
├─────────────┼───────────┤
│ rotateDigit │    '9'    │
│   number    │ 518653859 │
└─────────────┴───────────┘
┌─────────────┬───────────┐
│   (index)   │  Values   │
├─────────────┼───────────┤
│ rotateDigit │    '3'    │
│   number    │ 518658593 │
└─────────────┴───────────┘
┌─────────────┬───────────┐
│   (index)   │  Values   │
├─────────────┼───────────┤
│ rotateDigit │    '5'    │
│   number    │ 518658935 │
└─────────────┴───────────┘
┌─────────────┬───────────┐
│   (index)   │  Values   │
├─────────────┼───────────┤
│ rotateDigit │    '3'    │
│   number    │ 518658953 │
└─────────────┴───────────┘
553188569
*/

// 553188569
// console.log(G964B.maxRot(553188569));
// 988103115
// console.log(G964B.maxRot(1));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

/*
class G964B1 {
    public static maxRot(n) {
 
        let arrResult = [];
        arrResult.push(n);
 
        let arrNum = n.toString().split('');
        let i = 0;
        while (arrNum.length >= i) {
            arrNum.push(...arrNum.splice(i, 1));
 
            arrResult.push(arrNum.join(''));
            i++;
        }
 
        return arrResult.sort().pop();
    }
}
 
 
 
 
class G964B2 {
    public static maxRot = ($) => Math.max(...($ = `${$}`.split(``)).reduce((a, b, i) =>
        a.concat([a[i].slice(0, i).concat(a[i].slice(i + 1))
            .concat(a[i].slice(i, i + 1))]), [$]).map(el => el.join('')));
}
 
 
 
 
class G964B3 {
    public static maxRot(n: number) {
        var s: string = String(n)
        var max = Number(s)
 
        for (var i = 0; i < s.length; i++) {
            s = s.substr(0, i) + rot(s.substr(i))
            var num = Number(s)
            if (num > max) max = num
        }
 
        return max
 
        /////////////////////////
 
        function rot(s: string) {
            return s.substr(1) + s.substr(0, 1)
        }
    }
}
 
 
 
class G964B4 {
    public static maxRot = n =>
        Math.max(...(n = String(n).split(''))
            .reduce((r, _, i) =>
                r.concat([r[i].slice(0, i)
                    .concat(r[i].slice(i + 1))
                    .concat(r[i].slice(i, i + 1))]), [n])
            .map(e => e.join('')));
}
 
 
 
class G964B5 {
    public static maxRot(n) {
        let arr = n.toString().split('');
        const length = arr.length;
        let results = [];
        for (let i = 0; i < length; i++) {
            // the results are pushed here to include the initial number
            results.push(Number(arr.join('')));
            // cut and paste the rotating number
            let cache = arr.splice(i, 1);
            arr.push(cache[0])
            cache = [];
        }
        return Math.max.apply(null, results);
    }
}
 
 
 
class G964B6 {
    public static maxRot(n) {
        let digits = `${n}`, max = n;
 
        for (let i = 0; i < digits.length; i++) {
 
            //  rotate the next digit
            digits = digits.substr(0, i) //  before the rotated digit
                + digits.substr(i + 1)     //  after rotated digit
                + digits.substr(i, 1);     //  the rotated digit
 
            max = Math.max(max, parseInt(digits));
        }
 
        return max;
    }
}
 
 
class G964B7 {
    public static maxRot(n) {
        let str = n.toString()
        let max = n;
        for (let i = 0; i < str.length; i++) {
            str = str.slice(0, i) + str.slice(i + 1) + str.charAt(i)
            max = Math.max(max, parseInt(str));
        };
        return max;
    }
}
 
 
 
class G964B8 {
    public static maxRot(n) {
        const arrNum = n.toString().split('');
        const resArr = [];
        for (let i = 0; i < arrNum.length - 1; i++) {
            arrNum.push(arrNum.splice(i, 1)[0]);
            resArr.push(Number(arrNum.join('')));
        }
        return Math.max(n, ...resArr);
    }
}
*/

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: SORT OUT MEN FROM BOYS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ CREATE SET TYPE, ❗️❗️❗️ SET(),
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Scenario
Now that the competition gets tough it will Sort out the men from the boys .
 
Men are the Even numbers and Boys are the odd!alt!alt
Task
Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys!alt!alt
Notes
Return an array/list where Even numbers come first then odds
 
Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .
 
Array/list size is at least 4 .
 
Array/list numbers could be a mixture of positives , negatives .
 
Have no fear , It is guaranteed that no Zeroes will exists .!alt
Repetition of numbers in the array/list could occur , So (duplications are not included when separating).
 
Input >> Output Examples:
menFromBoys ({7, 3 , 14 , 17}) ==> return ({14, 17, 7, 3}) 
Explanation:
Since , { 14 } is the even number here , So it came first , then the odds in descending order {17 , 7 , 3} .
 
menFromBoys ({-94, -99 , -100 , -99 , -96 , -99 }) ==> return ({-100 , -96 , -94 , -99})
Explanation:
Since , { -100, -96 , -94 } is the even numbers here , So it came first in *ascending order *, then the odds in descending order { -99 }
 
Since , (Duplications are not included when separating) , then you can see only one (-99) was appeared in the final array/list .
 
menFromBoys ({49 , 818 , -282 , 900 , 928 , 281 , -282 , -1 }) ==> return ({-282 , 818 , 900 , 928 , 281 , 49 , -1})
Explanation:
Since , {-282 , 818 , 900 , 928 } is the even numbers here , So it came first in ascending order , then the odds in descending order { 281 , 49 , -1 }
 
Since , (Duplications are not included when separating) , then you can see only one (-282) was appeared in the final array/list .
*/

// ! [...EVENS ASCENDING, ...ODDS DESCENDING] REMOVE DUPLICATES !
const menFromBoys = (arr: number[]): number[] => {
    // ❗️❗️❗️ CREATE SET TYPE ❗️❗️❗️ Type 'unknown' is not assignable to type 'number'.ts(2322)
    let uniqueOdds = new Set<number>(),
        uniqueEvens = new Set<number>();
    arr.forEach((int) => {
        (int & 1) === 1 ? uniqueOdds.add(int) : uniqueEvens.add(int);
    });
    const oddsArr = [...uniqueOdds].sort((a, b) => b - a);
    const evensArr = [...uniqueEvens].sort((a, b) => a - b);

    // console.table({
    //     input: arr,
    //     uniqueOdds: [uniqueOdds],
    //     uniqueEvens: [uniqueEvens],
    //     oddsArr: [oddsArr],
    //     evensArr: [evensArr],
    // });

    const solution: number[] = [...evensArr, ...oddsArr];
    return solution;
};

// [14, 17, 7, 3]
// console.log((menFromBoys([7, 3, 14, 17]));
// [2, 90, 95, 43, 37]
// console.log(menFromBoys([37, 2, 43, 95, 90, 37]));

/*
 
FILTER OUT DUPLICATES WITH SET 
CREATE ASC/DESC SORTED SUB-ARRAYS
MERGE SUB-ARRAYS FOR SOLUTION
 
INPUT: [37, 2, 43, 95, 90, 37]
┌─────────────┬───────────────────────┬───┬────┬────┬────┬────┐
│   (index)   │           0           │ 1 │ 2  │ 3  │ 4  │ 5  │
├─────────────┼───────────────────────┼───┼────┼────┼────┼────┤
│    input    │          37           │ 2 │ 43 │ 95 │ 90 │ 37 │
│ uniqueOdds  │ Set(3) { 37, 43, 95 } │   │    │    │    │    │
│ uniqueEvens │   Set(2) { 2, 90 }    │   │    │    │    │    │
│   oddsArr   │    [ 95, 43, 37 ]     │   │    │    │    │    │
│  evensArr   │       [ 2, 90 ]       │   │    │    │    │    │
└─────────────┴───────────────────────┴───┴────┴────┴────┴────┘
SOLUTION: [ 2, 90, 95, 43, 37 ]
*/

//============= OTHER CODEWARS SOLUTIONS: =============

function menFromBoys2(arr: number[]) {
    let urr = [...new Set(arr)];
    return [
        ...urr.filter((x) => Math.abs(x % 2) == 0).sort((a, b) => a - b),
        ...urr.filter((x) => Math.abs(x % 2) == 1).sort((a, b) => b - a),
    ];
}

function menFromBoys3(arr: number[]): number[] {
    let ar: number[] = [...new Set(arr)];
    return ar
        .filter((x) => x % 2 === 0)
        .sort((a, b) => a - b)
        .concat(...ar.filter((x) => x % 2).sort((a, b) => b - a));
}

function menFromBoys4(arr: number[]): number[] {
    const [even, odd] = [new Set<number>(), new Set<number>()];

    for (const x of arr) {
        x % 2 ? odd.add(x) : even.add(x);
    }

    return [...even]
        .sort((a, b) => a - b)
        .concat([...odd].sort((a, b) => b - a));
}

function menFromBoys5(arr: number[]): number[] {
    return arr
        .reduce(
            ([even, odd], x) => {
                x % 2 ? odd.add(x) : even.add(x);
                return [even, odd];
            },
            [new Set<number>(), new Set<number>()]
        )
        .map((set, i) =>
            [...set].sort(i % 2 ? (a, b) => b - a : (a, b) => a - b)
        )
        .flat();
}

const menFromBoys6 = (arr: number[]): number[] => [
    ...new Set(
        arr
            .filter((e) => e % 2 === 0)
            .sort((a, b) => a - b)
            .concat(arr.filter((a) => a % 2).sort((a, b) => b - a))
    ),
];
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: BALANCED NUMBER (Special Numbers Series #1 )
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ GENERICS ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Definition
Balanced number is the number that * The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.
 
Task
Given a number, Find if it is Balanced or not .
 
Warm-up (Highly recommended)
Playing With Numbers Series
Notes
If the number has an odd number of digits then there is only one middle digit, e.g. 92645 has middle digit 6; otherwise, there are two middle digits , e.g. 1301 has middle digits 3 and 0
 
The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g 413023 is a balanced number because the left sum and right sum are both 5.
 
Number passed is always Positive .
 
Return the result as String
 
Input >> Output Examples
(balanced-num 7) ==> return "Balanced"
Explanation:
Since , The sum of all digits to the left of the middle digit (0)
 
and the sum of all digits to the right of the middle digit (0) are equal , then It's Balanced
 
(balanced-num 295591) ==> return "Not Balanced"
Explanation:
Since , The sum of all digits to the left of the middle digits (11)
 
and the sum of all digits to the right of the middle digits (10) are Not equal , then It's Not Balanced
 
Note : The middle digit(s) are 55 .
 
(balanced-num 959) ==> return "Balanced"
Explanation:
Since , The sum of all digits to the left of the middle digits (9)
 
and the sum of all digits to the right of the middle digits (9) are equal , then It's Balanced
 
Note : The middle digit is 5 .
 
(balanced-num 27102983) ==> return "Not Balanced"
Explanation:
Since , The sum of all digits to the left of the middle digits (10)
 
and the sum of all digits to the right of the middle digits (20) are Not equal , then It's Not Balanced
 
Note : The middle digit(s) are 02 .
 
 
*/

const balancedNum = (num: number) => {
    if (num < 100) return "Balanced";

    // CONVERT TO STRING
    const numStr: string = String(num);
    // GET LENGTH
    const length: number = numStr.length;

    // GET BOTH SIDES AS STRING
    const getLeftNumStr = (numStr: string): string => {
        let leftStr =
            (length & 1) === 1
                ? numStr.slice(0, (length - 1) / 2)
                : numStr.slice(0, length / 2 - 1);

        return leftStr;
    };

    const getRightNumStr = (numStr: string): string => {
        let rightStr =
            (length & 1) === 1
                ? numStr.slice((length - 1) / 2 + 1)
                : numStr.slice(length / 2 + 1);

        return rightStr;
    };

    // GET VALUE OF SUM OF NUMERIC DIGITS
    const leftSum: number = getLeftNumStr(numStr)
        .split("")
        .map((strDigit) => Number(strDigit))
        .reduce((a, b) => a + b);

    const rightSum: number = getRightNumStr(numStr)
        .split("")
        .map((strDigit) => Number(strDigit))
        .reduce((a, b) => a + b);

    /*
      console.table({
          input: num,
          numStr: numStr,
          length: length,
          middleDigitIdxOdd: (length - 1) / 2,
          middleDigitOdd: numStr[(length - 1) / 2],
          middleDigitsIdxEven: [length / 2 - 1, length / 2],
          middleDigitsEven: [numStr[length / 2 - 1], numStr[length / 2]],
          leftNumStr: getLeftNumStr(numStr),
          rightNumStr: getRightNumStr(numStr),
          leftSum: leftSum,
          rightSum: rightSum,
          isBalanced: leftSum === rightSum
      })
      */

    // COMPARE SIDES AND RETURN SOLUTION STRING
    return leftSum === rightSum ? "Balanced" : "Not Balanced";
};

// balanced
// console.log(balancedNum(56239814));
// not balanced
// console.log(balancedNum(1230987));
// console.log();
// console.log();

/*
 
56239814 EVEN LENGTH
┌─────────────────────┬─────┬─────┬────────────┐
│       (index)       │  0  │  1  │   Values   │
├─────────────────────┼─────┼─────┼────────────┤
│        input        │     │     │  56239814  │
│       numStr        │     │     │ '56239814' │
│       length        │     │     │     8      │
│  middleDigitIdxOdd  │     │     │    3.5     │
│   middleDigitOdd    │     │     │ undefined  │
│ middleDigitsIdxEven │  3  │  4  │            │
│  middleDigitsEven   │ '3' │ '9' │            │
│     leftNumStr      │     │     │   '562'    │
│     rightNumStr     │     │     │   '814'    │
│       leftSum       │     │     │     13     │
│      rightSum       │     │     │     13     │
│     isBalanced      │     │     │    true    │
└─────────────────────┴─────┴─────┴────────────┘
Balanced
 
1230987 ODD LENGTH
┌─────────────────────┬───────────┬───────────┬───────────┐
│       (index)       │     0     │     1     │  Values   │
├─────────────────────┼───────────┼───────────┼───────────┤
│        input        │           │           │  1230987  │
│       numStr        │           │           │ '1230987' │
│       length        │           │           │     7     │
│  middleDigitIdxOdd  │           │           │     3     │
│   middleDigitOdd    │           │           │    '0'    │
│ middleDigitsIdxEven │    2.5    │    3.5    │           │
│  middleDigitsEven   │ undefined │ undefined │           │
│     leftNumStr      │           │           │   '123'   │
│     rightNumStr     │           │           │   '987'   │
│       leftSum       │           │           │     6     │
│      rightSum       │           │           │    24     │
│     isBalanced      │           │           │   false   │
└─────────────────────┴───────────┴───────────┴───────────┘
Not Balanced
 
*/

//============= OTHER CODEWARS SOLUTIONS: =============

function balancedNum2(number: number): "Balanced" | "Not Balanced" {
    const numbers = (number + "").split("").map((digit) => parseInt(digit));
    const length = numbers.length;
    if (length <= 2) return "Balanced";

    const left = numbers.slice(0, Math.floor(length / 2 - 0.5));
    const right = numbers.slice(Math.ceil(length / 2 + 0.5), length);

    return left.reduce((a, b) => a + b) == right.reduce((a, b) => a + b)
        ? "Balanced"
        : "Not Balanced";
}

function balancedNum3(number: number): string {
    let s: string = number.toString();
    let n: number = Math.floor((s.length - 1) / 2);
    return !n ||
        [...s.slice(0, n)].reduce((a, b) => a + +b, 0) ==
            [...s.slice(-n)].reduce((a, b) => a + +b, 0)
        ? "Balanced"
        : "Not Balanced";
}

function balancedNum4(number: number) {
    const numArray = number.toString().split("");
    let forwardSum = 0;
    let backwardSum = 0;
    for (let i = 0; i < numArray.length / 2 - 1; i++) {
        forwardSum += parseInt(numArray[i]);
        backwardSum += parseInt(numArray[numArray.length - 1 - i]);
    }

    return forwardSum === backwardSum ? "Balanced" : "Not Balanced";
}

// =====================================================
function balancedNum5(num: number): string {
    const [leftSum, rightSum] = splitMiddle(numToArray(num)).map(sum);

    return leftSum === rightSum ? "Balanced" : "Not Balanced";
}

function numToArray(num: number, res: number[] = []): number[] {
    if (num === 0) return res;
    res.push(num % 10);
    return numToArray(Math.trunc(num / 10), res);
}

// ❗️❗️❗️ GENERICS ❗️❗️❗️
function splitMiddle<T>(arr: T[]): [T[], T[]] {
    const middle = Math.floor(arr.length / 2);
    return [
        arr.slice(0, middle - (arr.length % 2 ? 0 : 1)),
        arr.slice(middle + 1),
    ];
}

function sum(arr: number[]): number {
    return arr.reduce((total, x) => total + x, 0);
}
// =====================================================

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️  INCLUDE THIS IN EXAMPLES ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: RULE OF DIVISIBILITY BY 7
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: RECURSION, SUBSTRING()
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
A number m of the form 10x + y is divisible by 7 if and only if x − 2y is divisible by 7. In other words, subtract twice the last digit from the number formed by the remaining digits. Continue to do this until a number known to be divisible by 7 is obtained; you can stop when this number has at most 2 digits because you are supposed to know if a number of at most 2 digits is divisible by 7 or not.
 
The original number is divisible by 7 if and only if the last number obtained using this procedure is divisible by 7.
 
Examples:
1 - m = 371 -> 37 − (2×1) -> 37 − 2 = 35 ; thus, since 35 is divisible by 7, 371 is divisible by 7.
 
The number of steps to get the result is 1.
 
2 - m = 1603 -> 160 - (2 x 3) -> 154 -> 15 - 8 = 7 and 7 is divisible by 7.
 
3 - m = 372 -> 37 − (2×2) -> 37 − 4 = 33 ; thus, since 33 is not divisible by 7, 372 is not divisible by 7.
 
4 - m = 477557101->47755708->4775554->477547->47740->4774->469->28 and 28 is divisible by 7, so is 477557101. The number of steps is 7.
 
Task:
Your task is to return to the function seven(m) (m integer >= 0) an array (or a pair, depending on the language) of numbers, the first being the last number m with at most 2 digits obtained by your function (this last m will be divisible or not by 7), the second one being the number of steps to get the result.
 
Forth Note:
Return on the stack number-of-steps, last-number-m-with-at-most-2-digits
 
Examples:
seven(371) should return [35, 1]
seven(1603) should return [7, 2]
seven(477557101) should return [28, 7]
*/

// 1️⃣

// GLOBAL COUNTER VARIABLE TO COUNT HOW MANY TIMES FUNCTION RUNS
let cycleCount: number = 0;

// ❗️❗️❗️ RETURNS number WHEN CALLED AGAIN, AND number[] WHEN SOLUTION IS FOUND ❗️❗️❗️
const seven = (num: number): number | number[] => {
    if (num === 0) return [0, 0];

    // CONVERT TO STRING IN ORDER TO BE ABLE TO EXTRACT DIGITS
    const numStr: string = num.toString();
    // GRAB LAST DIGIT AND REMAINING DIGITS
    let lastDigit: number = Number(numStr.slice(-1));
    let remainingDigits: number = Number(
        // ❗️❗️❗️ SUBSTRING() ❗️❗️❗️
        numStr.substring(0, numStr.length - 1)
    );

    // GET REMAINDER AFTER SUBSTRACTING LASTDIGIT TWICE
    let remainder: number = remainingDigits - lastDigit * 2;
    // INCREMENT CYCLECOUNT
    cycleCount++;
    // INITIALIZE SOLUTION ARRAY
    let solution: number[] = [remainder, cycleCount];

    console.table({
        numStr: numStr,
        lastDigit: lastDigit,
        remainingDigits: remainingDigits,
        remainder: remainder,
        cycleCount: cycleCount,
        solution: [solution],
    });

    // IF REMAINDER IS REDUCED TO MAX 2 DIGITS
    if (remainder < 100) {
        // RESET COUNTER
        cycleCount = 0;
        // RETURN
        return solution;
    }

    // ❗️❗️❗️ RECURSION ❗️❗️❗️
    // OTHERWISE, IF REMAINDER IS NOT REDUCED TO 2 DIGITS
    // RETURN FUNCION WITH REMAINDER
    return seven(remainder);

    // !!! THIS TERNARY IS NOT NECESSARY !!
    // return remainder > 99 ? seven(remainder) : remainder;
};

// 35, 1
// console.log(seven(371));
// [10, 2]
// console.log(seven(1021));
// [28, 7]
// console.log(seven(477557101));

/*
 
seven(477557101)
┌─────────────────┬─────────────────┬─────────────┐
│     (index)     │        0        │   Values    │
├─────────────────┼─────────────────┼─────────────┤
│     numStr      │                 │ '477557101' │
│    lastDigit    │                 │      1      │
│ remainingDigits │                 │  47755710   │
│    remainder    │                 │  47755708   │
│   cycleCount    │                 │      1      │
│    solution     │ [ 47755708, 1 ] │             │
└─────────────────┴─────────────────┴─────────────┘
┌─────────────────┬────────────────┬────────────┐
│     (index)     │       0        │   Values   │
├─────────────────┼────────────────┼────────────┤
│     numStr      │                │ '47755708' │
│    lastDigit    │                │     8      │
│ remainingDigits │                │  4775570   │
│    remainder    │                │  4775554   │
│   cycleCount    │                │     2      │
│    solution     │ [ 4775554, 2 ] │            │
└─────────────────┴────────────────┴────────────┘
┌─────────────────┬───────────────┬───────────┐
│     (index)     │       0       │  Values   │
├─────────────────┼───────────────┼───────────┤
│     numStr      │               │ '4775554' │
│    lastDigit    │               │     4     │
│ remainingDigits │               │  477555   │
│    remainder    │               │  477547   │
│   cycleCount    │               │     3     │
│    solution     │ [ 477547, 3 ] │           │
└─────────────────┴───────────────┴───────────┘
┌─────────────────┬──────────────┬──────────┐
│     (index)     │      0       │  Values  │
├─────────────────┼──────────────┼──────────┤
│     numStr      │              │ '477547' │
│    lastDigit    │              │    7     │
│ remainingDigits │              │  47754   │
│    remainder    │              │  47740   │
│   cycleCount    │              │    4     │
│    solution     │ [ 47740, 4 ] │          │
└─────────────────┴──────────────┴──────────┘
┌─────────────────┬─────────────┬─────────┐
│     (index)     │      0      │ Values  │
├─────────────────┼─────────────┼─────────┤
│     numStr      │             │ '47740' │
│    lastDigit    │             │    0    │
│ remainingDigits │             │  4774   │
│    remainder    │             │  4774   │
│   cycleCount    │             │    5    │
│    solution     │ [ 4774, 5 ] │         │
└─────────────────┴─────────────┴─────────┘
┌─────────────────┬────────────┬────────┐
│     (index)     │     0      │ Values │
├─────────────────┼────────────┼────────┤
│     numStr      │            │ '4774' │
│    lastDigit    │            │   4    │
│ remainingDigits │            │  477   │
│    remainder    │            │  469   │
│   cycleCount    │            │   6    │
│    solution     │ [ 469, 6 ] │        │
└─────────────────┴────────────┴────────┘
┌─────────────────┬───────────┬────────┐
│     (index)     │     0     │ Values │
├─────────────────┼───────────┼────────┤
│     numStr      │           │ '469'  │
│    lastDigit    │           │   9    │
│ remainingDigits │           │   46   │
│    remainder    │           │   28   │
│   cycleCount    │           │   7    │
│    solution     │ [ 28, 7 ] │        │
└─────────────────┴───────────┴────────┘
[ 28, 7 ]
*/

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️  INCLUDE THIS IN EXAMPLES ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:   BUILD A SQUARE
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ LINEBREAK "\n" (ADD NEW LINE TO CONSOLE OUTPUT) ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
 
Example
n = 3, so I expect a 3x3 square back just like below as a string:
 
+++
+++
+++
*/

const generateShape = (int: number): string => {
    if (int === 1) return "+";

    let solution: string = "";

    for (let i = 0; i < int; i++) {
        // ❗️❗️❗️ LINE BREAK ❗️❗️❗️
        let row: string = i >= 1 ? "\n" + "+".repeat(int) : "+".repeat(int);
        solution += row;
    }

    return solution;
};

//   ADD LINE BREAK TO EVERY ROW BUT FIRST

// console.log(generateShape(3));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// ❗️❗️❗️ LINE BREAK ❗️❗️❗️
function generateShape2(int: number): string {
    return `${"+".repeat(int)}\n`.repeat(int).slice(0, -1);
}

function generateShape3(int: number): string {
    return Array(int)
        .fill(Array(int + 1).join("+"))
        .join("\n");
}

function generateShape4(int: number): string {
    var array = [];
    for (let i = 0; i < int; i++) {
        array.push("+".repeat(int));
    }

    return array.join("\n");
}

function generateShape5(int: number): string {
    let result: string = "";
    for (let i: number = 0; i < int; i++) result += "+".repeat(int) + "\n";
    return result.slice(0, result.length - 1);
}

function generateShape6(size: number): string {
    return new Array(size).fill(new Array(size).fill("+").join("")).join("\n");
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: AUTOMORPHIC NUMBER (Special Numbers Series #6)
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ ENDSWITH ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Definition
A number is called Automorphic number if and only if its square ends in the same digits as the number itself.
 
Task
Given a number determine if it Automorphic or not .
 
Warm-up (Highly recommended)
Playing With Numbers Series
Notes
The number passed to the function is positive
Input >> Output Examples
autoMorphic (25) -->> return "Automorphic" 
Explanation:
25 squared is 625 , Ends with the same number's digits which are 25 .
 
autoMorphic (13) -->> return "Not!!"
Explanation:
13 squared is 169 , Not ending with the same number's digits which are 69 .
 
autoMorphic (76) -->> return "Automorphic"
Explanation:
76 squared is 5776 , Ends with the same number's digits which are 76 .
 
autoMorphic (225) -->> return "Not!!"
Explanation:
225 squared is 50625 , Not ending with the same number's digits which are 225.
 
*/

const automorphic = (num: number): string => {
    const numStr: string = num.toString();
    const numStrLength: number = numStr.length;

    const sqStr: string = Math.pow(num, 2).toString();

    // console.table({
    //     numStr: numStr,
    //     numStrLength: numStrLength,
    //     sqStr: sqStr,
    //     isAutoMorphic: numStr == sqStr.slice(-numStrLength),
    // });

    return numStr === sqStr.slice(-numStrLength) ? "Automorphic" : "Not!!";
};

//  CONVERT BOTH TO STRING
//  GET LENGTH OF num (THIS WILL BE THE NUMBER OF LAST DIGITS OF sqStr TO COMPARE  num WITH)
//  COMPARE AND RETURN RESULT STRING

/*
┌───────────────┬─────────┐
│    (index)    │ Values  │
├───────────────┼─────────┤
│    numStr     │  '225'  │
│ numStrLength  │    3    │
│     sqStr     │ '50625' │
│ isAutoMorphic │  false  │
└───────────────┴─────────┘
Not!!
┌───────────────┬──────────┐
│    (index)    │  Values  │
├───────────────┼──────────┤
│    numStr     │  '625'   │
│ numStrLength  │    3     │
│     sqStr     │ '390625' │
│ isAutoMorphic │   true   │
└───────────────┴──────────┘
Automorphic
*/

// console.log(automorphic(3));
// console.log(automorphic(225));
// console.log(automorphic(625));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// ❗️❗️❗️ ENDSWITH ❗️❗️❗️
function automorphic2(n: number): string {
    return String(n ** 2).endsWith(String(n)) ? "Automorphic" : "Not!!";
}

// // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

// TITLE: SIMPLE BEADS COUNT
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.
 
@ @@ @ @@ @ @@ @ @@ @ @@ @
 
Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
If there are less than 2 blue beads return 0.
*/

const countRedBeads = (num: number): number => {
    return num <= 1 ? 0 : (num - 1) * 2;
};

// console.log(countRedBeads(1));
// console.log(countRedBeads(3));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function countRedBeads2(n: number): number {
    return Math.max(0, (n - 1) * 2);
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: INVITE MORE WOMEN - Simple Fun 152
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: EVAL,
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Task
King Arthur and his knights are having a New Years party. Last year Lancelot was jealous of Arthur, because Arthur had a date and Lancelot did not, and they started a duel.
 
To prevent this from happening again, Arthur wants to make sure that there are at least as many women as men at this year's party. He gave you a list of integers of all the party goers.
 
Arthur needs you to return true if he needs to invite more women or false if he is all set.
 
Input/Output
[input] integer array L ($a in PHP)
An array (guaranteed non-associative in PHP) representing the genders of the attendees, where -1 represents women and 1 represents men.
 
2 <= L.length <= 50
 
[output] a boolean value
 
true if Arthur need to invite more women, false otherwise.
*/

const inviteMoreWomen = (guestsArr: number[]): boolean => {
    return guestsArr.reduce((acc, curr) => acc + curr) > 0;
};

// console.log(inviteMoreWomen([1, -1, 1]));
// console.log(inviteMoreWomen([1, -1]));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// ❗️❗️❗️ EVAL ❗️❗️❗️
function inviteMoreWomen2(L: number[]): boolean {
    return eval(L.join("+")) > 0;
}

function inviteMoreWomen3(L: number[]): boolean {
    return (
        L.filter((num) => num > 0).length > L.filter((num) => num < 0).length
    );
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: SUM OF CUBES
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: RECURSION ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.
 
Assume that the input n will always be a positive integer.
 
Examples: (Input --> output)
 
2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
*/

const sumCubes = (num: number): number => {
    let result: number = 0;

    for (let i = 1; i <= num; i++) {
        result += Math.pow(i, 3);
    }

    return result;
};

// console.log(sumCubes(2));
// console.log(sumCubes(3));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function sumCubes2(n: number): number {
    let res = 0;
    for (let i = 0; i <= n; i += 1) {
        res += i ** 3;
    }
    return res;
}

// ❗️❗️❗️ RECURSION ❗️❗️❗️
function sumCubes3(n: number): number {
    if (n == 1) {
        return 1;
    } else {
        return Math.pow(n, 3) + sumCubes(n - 1);
    }
}
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: ALPHABET SYMMETRY
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: CHARCODEAT
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.
 
Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,
 
solve(["abode","ABc","xyzD"]) = [4, 3, 1]
See test cases for more examples.
 
Input will consist of alphabet characters, both uppercase and lowercase. No spaces.
 
Good luck!
*/

const solveA = (arr: string[]): number[] => {
    let solution: number[] = [];

    arr.map((el) => el.toLowerCase()).forEach((word) => {
        let counter: number = 0;

        for (let i = 0; i < word.length; i++) {
            let position: number = i;
            let charCode: number = word.charCodeAt(i) - 97;
            // console.table({
            //     char: word[i],
            //     position: position,
            //     charCode: charCode,
            //     match: position === charCode,
            // });
            if (position === charCode) counter++;
        }
        solution.push(counter);
    });

    return solution;
};

//  CASE INSENSITIVE (LOWERCASE)
//  LOOP OVER ARRAY
//      INNER LOOP WILL ITERATE OVER EACH WORD
//          COMPARE CHAR POSITION TO ITS CHARCODE(-97)
//          IF THEY MATCH:
//              INCREMENT COUNTER FOR WORD
//  PUSH COUNTER INTO SOLUTION IN FOREACH
//  RETURN SOLUTION

//

/*
["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"]
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'i'   │
│ position │   0    │
│ charCode │   8    │
│  match   │ false  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'a'   │
│ position │   1    │
│ charCode │   0    │
│  match   │ false  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'm'   │
│ position │   2    │
│ charCode │   12   │
│  match   │ false  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'd'   │
│ position │   3    │
│ charCode │   3    │
│  match   │  true  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'e'   │
│ position │   4    │
│ charCode │   4    │
│  match   │  true  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'f'   │
│ position │   5    │
│ charCode │   5    │
│  match   │  true  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'a'   │
│ position │   6    │
│ charCode │   0    │
│  match   │ false  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'n'   │
│ position │   7    │
│ charCode │   13   │
│  match   │ false  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'd'   │
│ position │   8    │
│ charCode │   3    │
│  match   │ false  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'j'   │
│ position │   9    │
│ charCode │   9    │
│  match   │  true  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'k'   │
│ position │   10   │
│ charCode │   10   │
│  match   │  true  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'l'   │
│ position │   11   │
│ charCode │   11   │
│  match   │  true  │
└──────────┴────────┘
thedefgh
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  't'   │
│ position │   0    │
│ charCode │   19   │
│  match   │ false  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'h'   │
│ position │   1    │
│ charCode │   7    │
│  match   │ false  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'e'   │
│ position │   2    │
│ charCode │   4    │
│  match   │ false  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'd'   │
│ position │   3    │
│ charCode │   3    │
│  match   │  true  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'e'   │
│ position │   4    │
│ charCode │   4    │
│  match   │  true  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'f'   │
│ position │   5    │
│ charCode │   5    │
│  match   │  true  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'g'   │
│ position │   6    │
│ charCode │   6    │
│  match   │  true  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'h'   │
│ position │   7    │
│ charCode │   7    │
│  match   │  true  │
└──────────┴────────┘
xyzdefghijabc
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'x'   │
│ position │   0    │
│ charCode │   23   │
│  match   │ false  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'y'   │
│ position │   1    │
│ charCode │   24   │
│  match   │ false  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'z'   │
│ position │   2    │
│ charCode │   25   │
│  match   │ false  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'd'   │
│ position │   3    │
│ charCode │   3    │
│  match   │  true  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'e'   │
│ position │   4    │
│ charCode │   4    │
│  match   │  true  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'f'   │
│ position │   5    │
│ charCode │   5    │
│  match   │  true  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'g'   │
│ position │   6    │
│ charCode │   6    │
│  match   │  true  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'h'   │
│ position │   7    │
│ charCode │   7    │
│  match   │  true  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'i'   │
│ position │   8    │
│ charCode │   8    │
│  match   │  true  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'j'   │
│ position │   9    │
│ charCode │   9    │
│  match   │  true  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'a'   │
│ position │   10   │
│ charCode │   0    │
│  match   │ false  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'b'   │
│ position │   11   │
│ charCode │   1    │
│  match   │ false  │
└──────────┴────────┘
┌──────────┬────────┐
│ (index)  │ Values │
├──────────┼────────┤
│   char   │  'c'   │
│ position │   12   │
│ charCode │   2    │
│  match   │ false  │
└──────────┴────────┘
[ 6, 5, 7 ]
*/

// [4, 3, 1]
// console.log(solveA(["abode", "ABc", "xyzD"]));
// console.log(solveA(["ABCABC"]));

// [ 6, 5, 7 ]
// console.log(solveA(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"]));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function solveA2(arr: string[]) {
    const alphabet: string = "abcdefghijklmnopqrstuvwxyz";
    return arr.map((s) =>
        s
            .split("")
            .reduce(
                (t, c, i) => (c.toLowerCase() === alphabet[i] ? t + 1 : t),
                0
            )
    );
}

function solveA3(arr: string[]): number[] {
    return arr.map((str) => {
        var count = 0;
        var i = str.length;

        while (i > 0) {
            i--;
            if ((str.charCodeAt(i) & 31) == i + 1) count++;
        }

        return count;
    });
}

const solveA4 = (arr: string[]) =>
    arr.map((x) =>
        x
            .split("")
            .reduce(
                (acc, item, i) =>
                    acc + (item.toLowerCase().charCodeAt(0) - 97 == i ? 1 : 0),
                0
            )
    );

function solveA5(arr: string[]) {
    const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("");

    return arr.map((word) => {
        return word
            .toLowerCase()
            .split("")
            .reduce((acc, char, i) => {
                const isPositionMatch = alphabet[i] === char;
                return acc + (isPositionMatch ? 1 : 0);
            }, 0);
    });
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: MINIMIZE SUM OF ARRAY - Array Series #1
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: SORT, SPLICE, REDUCE
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
 
Notes
Array/list will contain positives only .
Array/list will always has even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product , 26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product , 9*0 + 8*2 +7*4 +6*5 = 74
*/

const minSum = (arr: number[]): number | string => {
    if ((arr.length & 1) === 1) return "odd number of array elements!";

    let sum: number = 0;
    const ascArr = arr.sort((a, b) => a - b);
    console.log(ascArr);
    for (let i = 0; i < ascArr.length / 2; i++) {
        // console.table({ first: ascArr[i], last: ascArr[ascArr.length - 1 - i] });
        sum += ascArr[i] * ascArr[ascArr.length - 1 - i];
    }

    return sum;
};

//  ! MULTIPLY LARGEST BY SMALLEST !

//  SORT ARRAY NUMERICALLY ASCENDING (OR DESCENDING)
//  LOOP OVER FIRST HALF OF ARRAY
//      MULTIPLY FIRST EL BY LAST, THEN SECOND BY LAST-1 ETC...AND ADD PRODUCT TO SUM

// 22
// console.log(minSum([5, 4, 2, 3]));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function minSum2(arr: number[]) {
    let sum = 0;
    const nums = [...arr];
    while (nums.length !== 0) {
        const max = Math.max(...nums);
        const min = Math.min(...nums);
        sum += max * min;
        nums.splice(nums.indexOf(max), 1);
        nums.splice(nums.indexOf(min), 1);
    }
    return sum;
}

function minSum3(arr: number[]) {
    return [...arr]
        .sort((a, b) => a - b)
        .reduce((sum, x, _, sorted) => sum + x * sorted.pop()!, 0);
}

function minSum4(arr: number[]): number {
    return arr
        .sort((a: number, b: number) => a - b)
        .reduce(
            (acc: number, currVal: number, index: number, a: number[]) =>
                acc + (currVal * a[a.length - 1 - index]) / 2,
            0
        );
}

function minSum5(arr: number[]): number {
    return arr
        .sort((a: number, b: number) => a - b)
        .reduce(
            (acc: number, currVal: number, index: number, a: number[]) =>
                acc + (currVal * a[a.length - 1 - index]) / 2,
            0
        );
}

// ❗️❗️❗️ LOOK INTO REDUCE AND MAP ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: AVARAGES OF NUMBERS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ MAP(), REDUCE(), ISARRAY(), SLICE(0, -1) ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
#Get the averages of these numbers
 
Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.
 
Example:
 
Input:  [ 1, 3, 5, 1, -10]
Output:  [ 2, 4, 3, -4.5]
If the array has 0 or 1 values or is null, your method should return an empty array.
 
Have fun coding it and please don't forget to vote and rank this kata! :-)
*/

// ❗️❗️❗️ (numArr![i] ❗️❗️❗️
// const averages = (numArr: number[] | null): number[] => {
//     for (let i = 0; i < numArr!.length - 1; i++) {
//         let pairAve: number = (numArr![i] + numArr![i + 1]) / 2;
//         console.log(pairAve);
//     }

//     return [1];
// };

const averages = (numArr: number[] | null): number[] => {
    if (!numArr || numArr.length < 2) return [];

    let solution: number[] = [];

    for (let i = 0; i < numArr.length - 1; i++) {
        let pairAve: number = (numArr[i] + numArr[i + 1]) / 2;
        solution.push(pairAve);
    }

    return solution;
};

// console.log(averages([1, 3, 5, 1, -10]));
// console.log(averages([1, 3]));
// console.log(averages([]));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// REDUCE()
function averages2(numbers: number[]): number[] {
    let avrgs: number[] = [];
    if (!numbers || numbers.length <= 1) {
        return avrgs;
    }

    numbers.reduce((a, b) => {
        avrgs.push((a + b) / 2);
        return b;
    });

    return avrgs;
}

// ISARRAY(), MAP
// ❗️❗️❗️ slice(0, -1) WILL GET RID OF LAST ELEMENT NAN [2,4,3,-4.5,NaN] ❗️❗️❗️
// ❗️❗️❗️ slice(0, numbers.length -1) === slice(0, -1) ❗️❗️❗️
function averages3(numbers: number[]): number[] {
    return Array.isArray(numbers)
        ? numbers
              .map((item, index) => (item + numbers[index + 1]) / 2)
              .slice(0, -1)
        : [];
}

function averages4(numbers: number[] | null): number[] {
    if (numbers === null) return [];
    return numbers.slice(1).map((x, i) => (numbers[i] + x) / 2);
}

// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️  INCLUDE THIS IN EXAMPLES ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: ALPHABETICAL ADDITION
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: ❗️❗️❗️ CHARCODEAT(), STRING.FROMCHARCODE(), REDUCE(INITIAL VALUE), SPREAD ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Your task is to add up letters to one letter.
 
The function will be given a variable amount of arguments, each one being a letter to add.
 
Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'
Examples:
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'
*/

/*
a	097	01100001	A	065	01000001
b	098	01100010	B	066	01000010
c	099	01100011	C	067	01000011
d	100	01100100	D	068	01000100
e	101	01100101	E	069	01000101
f	102	01100110	F	070	01000110
g	103	01100111	G	071	01000111
h	104	01101000	H	072	01001000
i	105	01101001	I	073	01001001
j	106	01101010	J	074	01001010
k	107	01101011	K	075	01001011
l	108	01101100	L	076	01001100
m	109	01101101	M	077	01001101
n	110	01101110	N	078	01001110
o	111	01101111	O	079	01001111
p	112	01110000	P	080	01010000
q	113	01110001	Q	081	01010001
r	114	01110010	R	082	01010010
s	115	01110011	S	083	01010011
t	116	01110100	T	084	01010100
u	117	01110101	U	085	01010101
v	118	01110110	V	086	01010110
w	119	01110111	W	087	01010111
x	120	01111000	X	088	01011000
y	121	01111001	Y	089	01011001
z	122	01111010	Z	090	01011010
 
*/

const addLetters = (...letters: string[]): string => {
    if (letters.length === 0) return "z";

    const charCodeSum = letters
        .map((char) => char.charCodeAt(0) - 96)
        .reduce((acc, curr) => acc + curr, 0); // 26 FOR "z"

    if (charCodeSum % 26 === 0) return "z";

    return charCodeSum > 26
        ? String.fromCharCode((charCodeSum % 26) + 96)
        : String.fromCharCode(charCodeSum + 96);
};

//  SOLUTION WITH COMMENTS:

const addLetters2 = (...letters: string[]): string => {
    // ❗️❗️❗️ SPREAD ARGUMENTS ❗️❗️❗️
    console.log(...letters); // a b c
    console.log(letters); // [ 'a', 'b', 'c' ]

    // RETURN Z FOR EMPTY ARRAY
    if (letters.length === 0) return "z";

    // ❗️❗️❗️ CHARCODEAT()
    const charCodeSum = letters
        .map((char) => char.charCodeAt(0) - 96) // [1(97-96), 2(98-96)...3]
        .reduce((acc, curr) => acc + curr, 0); // [6(1+2+3)]
    console.log(charCodeSum);
    console.log(charCodeSum % 26);

    // IF SUM IS MULTIPLIES OF 26 RETURN Z AS SUM % 26 WILL RESULT IN CHARCODE(0)
    if (charCodeSum % 26 === 0) return "z";

    // STRING.FROMCHARCODE()
    return charCodeSum > 26
        ? String.fromCharCode((charCodeSum % 26) + 96) // OVERLAP (MORE THAN 26)
        : String.fromCharCode(charCodeSum + 96);
};

// z
// console.log(addLetters(addLetters("f", "g", "a", "r", "t")));
// d
// console.log(addLetters(['y', 'c', 'b']));

// z FOR EMPTY ARRAY OR NO ARGUMENTS
// console.log(addLetters());

// f
// console.log(console.log(addLetters("s", "k", "g", "u", "z")));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function addLetters3(...letters: string[]): string {
    const aCode: number = "a".charCodeAt(0);
    const zCode: number = "z".charCodeAt(0);
    const mod: number = zCode - aCode + 1;

    const normalizeCharCode = (letter: string): number =>
        letter.charCodeAt(0) - aCode + 1;
    const normalizeCharCodes: number[] = letters.map(normalizeCharCode);

    const add = (a: number, b: number): number => a + b;
    const value: number = normalizeCharCodes.reduce(add, 0);

    const finalCharCode: number = ((value - 1 + mod) % mod) + aCode;
    return String.fromCharCode(finalCharCode);
}

const addLetters4 = (...letters: string[]) =>
    String.fromCharCode(
        (letters.reduce((acc, val) => acc + val.charCodeAt(0) - 96, 0) % 26 ||
            26) + 96
    );

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const addLetters5 = (...letters: string[]): string =>
    letters.length === 0
        ? "z"
        : alphabet[
              (letters.reduce((acc, c) => acc + (alphabet.indexOf(c) + 1), 0) -
                  1) %
                  alphabet.length
          ];

function addLetters6(...letters: string[]) {
    // your code here
    if (letters.length === 0) return "z"; // account for empty input array
    const letterArray = "abcdefghijklmnopqrstuvwxyz".split(""); // create array for index reference
    let sum = 0;
    for (const letter of letters) {
        sum += letterArray.indexOf(letter) + 1; // add +1 to compensate for index 0 start logic
    }
    let remainder = sum % 26;
    if (remainder === 0) return "z";
    else return letterArray[remainder - 1];
}

function addLetters7(...letters: string[]) {
    const sum =
        letters.map((c) => c.charCodeAt(0) - 96).reduce((a, b) => a + b, 0) %
        26;

    return sum === 0 ? "z" : String.fromCharCode(96 + sum);
}

function addLetters8(...letters: string[]) {
    const s = "zabcdefghijklmnopqrstuvwxy";
    let sum = 0;
    for (let l of letters) {
        sum += s.indexOf(l);
    }
    return s[sum % 26];
}

function addLetters9(...letters: string[]) {
    if (!letters || letters.length < 1) return "z";
    if (letters.length === 1) return letters[0];

    const num: number =
        letters
            .map((ch) => ch.charCodeAt(0) - 96)
            .reduce((sum, curr) => sum + curr, 0) % 26;

    if (num === 0) return "z";
    else return String.fromCharCode(num + 96);
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE: POWER OF TWO
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:❗️❗️❗️  MATH.LOG() ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:
 
a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.
 
You may assume the input is always valid.
 
Examples
power_of_two?(1024) # true
power_of_two?(4096) # true
power_of_two?(333)  # false
Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.
*/

const isPowerOfTwo = (num: number): boolean => {
    if (num === 1) return true;
    if ((num & 1) === 1) return false;
    // KEEP DIVIDING NUM BY 2
    while (num > 1) {
        num = num / 2;
    }

    // console.log(num);

    // IF NUM / 2 EQUALS 1 RETURN true, OTHERWISE false
    return num === 1;

    // OR:

    // return num === 1
    //     ? true
    //     : false;
};

// console.log(isPowerOfTwo(23));
// console.log(isPowerOfTwo(18));
// console.log(isPowerOfTwo(4096));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function isPowerOfTwo2(n: number): boolean {
    return Number.isInteger(Math.log2(n));
}

const isPowerOfTwo3 = (n: number): boolean => Math.log2(n) % 1 === 0;

function isPowerOfTwo4(n: number): boolean {
    return n === 2 || n === 1 ? true : n < 2 ? false : isPowerOfTwo(n / 2);
}

function isPowerOfTwo5(n: number): boolean {
    for (let i = 0; true; i++) {
        const pow = Math.pow(2, i);
        if (pow === n) {
            return true;
        } else if (pow > n) {
            return false;
        }
    }
}

function isPowerOfTwo6(n: number): boolean {
    while (n > 2 && n % 2 == 0) n = n / 2;

    return n == 2 || n == 1;
}

// TITLE:  OVER THE ROAD
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Task
You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street. The street looks something like this:
 
Street
1|   |6
3|   |4
5|   |2
Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.
 
Example (address, n --> output)
Given your house number address and length of street n, give the house number on the opposite side of the street.
 
1, 3 --> 6
3, 3 --> 4
2, 3 --> 5
3, 5 --> 8
Note about errors
If you are timing out, running out of memory, or get any kind of "error", read on. Both n and address could get upto 500 billion with over 200 random tests. If you try to store the addresses of 500 billion houses in a list then you will run out of memory and the tests will crash. This is not a kata problem so please don't post an issue. Similarly if the tests don't complete within 12 seconds then you also fail.
 
To solve this, you need to think of a way to do the kata without making massive lists or huge for loops. Read the discourse for some inspiration :)
*/

const overTheRoad = (address: number, n: number): number => {
    return n * 2 + 1 - address;
};

//  OPPOSITE NUMBERS ADD UP TO TWICE THE LENGTH OF STREET PLUS 1
//  SUBSTRACT YOUR address FROM THAT SUM TO GET RESULT

// console.log(overTheRoad(1, 3));
// console.log(overTheRoad(3, 3));
// console.log(overTheRoad(7, 11));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function overTheRoad2(address: number, n: number): number {
    // Good luck!
    if (address % 2 === 0) {
        return 1 + 2 * (n - address / 2);
    } else {
        return 2 * n - (address - 1);
    }
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  EVEN NUMBERS IN AN ARRAY
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: BITWISE AND, FILTER()
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Given an array of digitals numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
 
For example:
 
([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
*/

const evenNumbers = (array: number[], n: number): number[] => {
    return array.filter((el) => (el & 1) === 0).slice(-n);
};

//  FILTER OUT ODD NUMBERS
//  RETURN SUB ARRAY OF LAST n ELEMENTS (SLICE WITH NEGATIVE IDX)

// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function isEven2(n: number): boolean {
    return n % 2 === 0;
}

function evenNumbers2(array: number[], n: number): number[] {
    return array.filter(isEven2).slice(-n);
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  SPEED CONTROL
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:  BITWISE OR TO ROUND DOWN, MATH.MAX() WITH SPREAD
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit). For example, below is part of a record with s = 15:
 
x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]
The sections are:
 
0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25
We can calculate John's average hourly speed on every section and we get:
 
[45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]
Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.
 
Example:
with the above data your function gps(s, x)should return 74
 
Note
With floats it can happen that results depends on the operations order. To calculate hourly speed you can use:
 
(3600 * delta_distance) / s.
*/

class G965a1 {
    public static gps = (secInt: number, distArr: number[]): number => {
        // secInterval: SECONDS
        // distArr: KMS
        let speedsArr = [];

        for (let i = 1; i < distArr.length; i++) {
            let curr = distArr[i],
                prev = distArr[i - 1];
            let sectionDist = curr - prev;
            let sectAveSpeed = (3600 / secInt) * sectionDist;
            // console.table(
            //     { time: secInt, dist: sectionDist, speed: sectAveSpeed }
            // );
            speedsArr.push(sectAveSpeed);
        }

        console.log(speedsArr);

        return Math.max(...speedsArr) | 0;
    };
}

//  CALCULATE AVERAGE SPEED FOR EACH SECTION WITH LOOP
//  PUSH IT INTO speedsArray AS sectAveSpeed
//  FIND LARGEST NUMBER(SPEED) IN speedsArray AND ROUND IT DOWN TO NEAREST INT
//  BITWISE OR "|" WILL ROUND DOWN DECIMALS: 3.345 | 0  =>  3

// s = 15;
// u = 74;
// console.log(G965a1.gps(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]));

// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

class G965a2 {
    public static gps = (seconds: number, sections: number[]): number => {
        if (sections.length <= 1) return 0;

        const sectionSpeeds = sections
            .map((start, index) => start - (sections[index - 1] || 0))
            .map((distance) => (3600 * distance) / seconds);

        return Math.floor(Math.max(...sectionSpeeds));
    };
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  NO ODDITIES HERE
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: BITWISE AND "&" (EVEN OR ODD)
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Write a small function that returns the values of an array that are not odd.
 
All values in the array will be integers. Return the good values in the order they are given.
*/

const noOdds = (values: number[]): number[] => {
    return values.filter((el) => {
        return (el & 1) === 0;
    });
};

//  BITWISE AND "&" OPERATOR
//  n & 1
//  RETURNS 1 IF n IS ODD
//  RETURNS 0 IF n IS EVEN

// console.log(noOdds( [0,1] ));
// console.log(noOdds([0, 1, 2, 3]));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function noOdds2(values: number[]): number[] {
    return values.filter((i) => !(i % 2));
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  PARTS OF A LIST
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS: SLICE(), GET 2 SUB ARRAYS OF ARR AS STRING
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.
 
Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
Each part will be in a string
Elements of a pair must be in the same order as in the original array.
Examples of returns in different languages:
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 
or
 a = {"az", "toto", "picaro", "zone", "kiwi"} -->
{{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}
or
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
or 
a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->
[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
or
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
"(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)"
 
*/

class G964a {
    public static partlist = (arr: string[]): string[][] => {
        let solution: string[][] = [];

        for (let i = 0; i < arr.length - 1; i++) {
            // console.log(arr.slice(0, i + 1).join(" "));
            // console.log(arr.slice(i + 1).join(" "));

            let subArr: string[] = [];
            subArr.push(
                arr.slice(0, i + 1).join(" "),
                arr.slice(i + 1).join(" ")
            );

            // subArr.push(arr.slice(0, i + 1).join(" "));
            // subArr.push(arr.slice(i + 1).join(" "));

            solution.push(subArr);
        }

        return solution;
    };
}

//  INITIALIZE SOLUTION ARR
//  LOOP OVER arr
//      CREATE subArr FOR EACH ITARATION
//      PUSH FIRST SUB ARRAY OF arr INTO subArr ENDING WITH arr[i]
//      PUSH SECOND SUB ARRAY OF arr INTO subArr STARTING WITH arr[i + 1]
//      PUSH subArr INTO solution
//  RETURN solution

// console.log(G964a.partlist(["a", "b", "c", "d", "e"]));
// console.log(G964a.partlist(["I", "wish", "I", "hadn't", "come"]));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

class G964a2 {
    public static partlist(arr: string[]): string[][] {
        return arr
            .map((s, i, a) => [
                a.slice(0, i + 1).join(" "),
                a.slice(i + 1, a.length).join(" "),
            ])
            .slice(0, arr.length - 1);
    }
}

class G964a3 {
    public static partlist(arr: string[]): string[][] {
        return arr
            .slice(1)
            .map((x, i) => [
                arr.slice(0, i + 1).join(" "),
                arr.slice(i + 1).join(" "),
            ]);
    }
}

class G964a4 {
    public static partlist(arr: string[]): string[][] {
        const x = arr.map((word, idx) => {
            return [
                arr.slice(0, idx + 1).join(" "),
                arr.slice(idx + 1, arr.length).join(" "),
            ];
        });
        return x.slice(0, -1);
    }
}

// INCLUDE THIS IN EXAMPLES FOR MATCH() WITH POSSIBLE EMPTY ARR
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// ❗️❗️❗️ REFACTOR THIS, MAKE IT WORK WITH STR.MATCH() ❗️❗️❗️
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  BUMPS IN THE ROAD
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.
 
Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".
*/

const bump = (road: string): string => {
    // const bumps: number[] = road.match(/n/g);
    // console.log(bumps);

    // return bumps.length > 15
    //     ? "Car Dead"
    //     : "Woohoo!";

    let counter: number = 0;

    for (let i = 0; i < road.length; i++) {
        if (road[i] === "n") {
            counter++;
            if (counter > 15) return "Car Dead";
        }
    }

    return "Woohoo!";
};

// console.log(bump("n"));
// console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"));
// console.log(bump("_"));

// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function bump2(x: string): string {
    return x.split("").filter((a) => a === "n").length <= 15
        ? "Woohoo!"
        : "Car Dead";
}

function bump3(x: string): string {
    return x.replace(/_/g, "").length > 15 ? `Car Dead` : `Woohoo!`;
}

function bump4(x: string): string {
    return x
        .split("")
        .reduce((total, n) => (n === "n" ? total + 1 : total), 0) > 15
        ? "Car Dead"
        : "Woohoo!";
}

// ❗️❗️❗️ MATCH() ❗️❗️❗️
function bump5(x: string): string {
    const arr: string[] = x.match(/[n+]/g) || [];
    return arr.length <= 15 ? "Woohoo!" : "Car Dead";
}

function bump6(x: string): string {
    return (x.match(/n/g) || []).length > 15 ? "Car Dead" : "Woohoo!";
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  MAXIMUM PRODUCT
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:  ❗️❗️❗️ SPREAD ARRAY FOR MATH.MAX() ❗️❗️❗️
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
 
Notes
Array/list size is at least 2.
 
Array/list numbers could be a mixture of positives, negatives also zeroes .
 
Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6
Explanation:
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
Explanation:
Max product obtained from multiplying 5 * 10 = 50 .
 
adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
Explanation:
The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.
*/

const adjacentElementsProduct = (arr: number[]): number => {
    let productsArr: number[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let adjacentProd: number = arr[i] * arr[i + 1];
        productsArr.push(adjacentProd);
    }

    // ❗️❗️❗️ SPREAD ARRAY FOR MATH.MAX() TO AVOID ERROR: ❗️❗️❗️
    // Argument of type 'number[]' is not assignable to parameter of type 'number'.ts(2345)
    return Math.max(...productsArr);
};

// console.log(adjacentElementsProduct([1, 5, 10, 9]));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

const adjacentElementsProduct2 = (arr: number[]): number =>
    Math.max(
        ...arr.map((value, index) =>
            index === arr.length - 1
                ? value * arr[index - 1]
                : value * arr[index + 1]
        )
    );

function adjacentElementsProduct3(arr: number[]): number {
    return Math.max(...arr.slice(1).map((x, i) => x * arr[i]));
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  JS ARRAY FILTER
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
The solution would work like the following:
 
getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/

const getEvenNumbers = (numbersArray: number[]): number[] => {
    return numbersArray.filter((num) => {
        return (num & 1) === 0;
    });
};

// console.log(getEvenNumbers([1, 2, 3, 6, 8, 10]));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

const getEvenNumbers2 = (numbersArray: number[]): number[] => {
    return numbersArray.filter((x) => x % 2 === 0);
};

const isEven = (num: number): boolean => num % 2 == 0;
const getEvenNumbers3 = (nums: number[]): number[] => nums.filter(isEven);

const getEvenNumbers4 = (numbersArray: number[]): number[] => {
    return numbersArray.filter((cond) => 0 === cond % 2);
};
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  SUM OF TRIANGULAR NUMBERS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.
 
Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."
 
[01]
02 [03]
04 05 [06]
07 08 09 [10]
11 12 13 14 [15]
16 17 18 19 20 [21]
e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.
 
Triangular Numbers cannot be negative so return 0 if a negative number is given.
*/

const sumTriangularNumbers = (n: number): number => {
    let sum: number = 0,
        triNum: number = 0;

    for (let i = 1; i <= n; i++) {
        triNum = triNum + i;
        sum += triNum;
    }

    return sum;
};

//  START LOOP AT 1, IN EVERY ITERATION:
//     INCREMENT triNum BY triNum + 1 (1, 3, 6, 10...)
//     INCREMENT sum BY trinum (1, 4, 10, 20...)
//  RETURN sum

//   56
// console.log(sumTriangularNumbers(1));
// console.log(sumTriangularNumbers(2));
// console.log(sumTriangularNumbers(3));
// console.log(sumTriangularNumbers(4));
// 7140
// console.log(sumTriangularNumbers(34));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function sumTriangularNumbers2(n: number): number {
    return n <= 0 ? 0 : (n * (n + 1) * (n + 2)) / 6;
}

//   Function lacks ending return statement and return type does not include 'undefined'.ts(2366)

//   function sumTriangularNumbers3(n:number):number {

//     if (n < 1) return 0;

//     if (n == 1)
//       return 1;
//     while (n > 0) {
//       return (n * (n +1) / 2) + sumTriangularNumbers(n-1);
//     }
//   }

function sumTriangularNumbers4(n: number): number {
    return Array.from({ length: n })
        .map((value, index) => ((1 + index + 1) * (index + 1)) / 2)
        .reduce((pre, current) => pre + current, 0);
}

function sumTriangularNumbers5(n: number): number {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result += (i * (i + 1)) / 2;
    }
    return result;
}

function sumTriangularNumbers6(n: number): number {
    let sum = 0;
    for (let i = 1, j = 1; i <= n; i++, j += i) {
        sum += j;
    }
    return sum;
}

// 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
// TITLE:  MOVES IN SQUARED STRINGS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
You are given a string of n lines, each substring being n characters long: For example:
 
s = "abcd\nefgh\nijkl\nmnop"
 
We will study some transformations of this square of strings.
 
Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
 hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"
or printed:
 
vertical mirror   |horizontal mirror   
abcd --> dcba     |abcd --> mnop 
efgh     hgfe     |efgh     ijkl 
ijkl     lkji     |ijkl     efgh 
mnop     ponm     |mnop     abcd 
Task:
Write these two functions
and
 
high-order function oper(fct, s) where
 
fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)
 
Examples:
s = "abcd\nefgh\nijkl\nmnop"
oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"
Note:
The form of the parameter fct in oper changes according to the language. You can see each form according to the language in "Sample Tests".
 
Bash Note:
The input strings are separated by , instead of \n. The output strings should be separated by \r instead of \n. See "Sample Tests".
*/

// console.log();
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  PREDICT YOUR AGE
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:  ❗️❗️❗️ ARGUMENTS / SPREAD ❗️❗️❗️, MATH.TRUNC()
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!
 
In honor of my grandfather's memory we will write a function using his formula!
 
Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
Note: the result should be rounded down to the nearest integer.
 
Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.
*/

// const predictAge = (
//     age1:number,
//     age2:number,
//     age3:number,
//     age4:number,
//     age5:number,
//     age6:number,
//     age7:number,
//     age8:number
// ): number => {

//   return 0;
// };

const predictAge = (...args: number[]): number => {
    // ❗️❗️❗️
    // console.log(args);

    return Math.floor(
        Math.sqrt(
            args
                .map((num) => Math.pow(num, 2))
                .reduce((acc, curr) => acc + curr)
        ) / 2
    );
};

//  GET arguments ARRAY
//  SQUARE ALL ELEMENTS WITH map
//  GET SUM WITH reduce
//  DIVIDE BY 2

//  GET SQUARE ROOT OF SUM
//  ROUND DOWN TO NEAREST INTEGER

// 86
// console.log(predictAge(65,60,75,55,60,63,64,45));
// 79
// console.log(predictAge(32,54,76,65,34,63,64,45));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// Rest parameter 'a' implicitly has an 'any[]' type.ts(7019)

// const predictAge2=(...a)=>Math.sqrt(a.reduce((b,c)=>b+c*c,0))>>1

function predictAge3(...ages: number[]): number {
    return Math.trunc(
        Math.sqrt(ages.map((x) => x * x).reduce((a, b) => a + b, 0)) / 2
    );
}

//   Cannot find name 'arguments'.ts(2304)
// Block-scoped variable 'number' used before its declaration.ts(2448)

//   predictAge4(age1:number, age2:number, age3:number,age4:number,age5:number,age6:number,age7:number,age8:number): number{
//     let args = Array.prototype.slice.call(arguments)
//     const sum = args.map(arg => {
//     return arg * arg
//     }).reduce((a,b) => a + b, 0)
//     const square = Math.sqrt(sum)
//     const total = Math.floor(square / 2)
//     return total;
//   };

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  FIND MOST DIGITS IN NUMBER
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:  SORT(), REDUCE()
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Find the number with the most digits.
 
If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

class Kata {
    static findLongest(arr: number[]): number {
        // 1️⃣
        return arr.sort((a, b) => String(b).length - String(a).length)[0];

        // 2️⃣  ❗️❗️❗️    REFACTOR THIS WITH ARRAY.FIND() ❗️❗️❗️
        let solution: number = -1;
        const sortedArr = [...arr].sort((a, b) => b - a);
        // console.log(arr);
        console.log(sortedArr);
        const maxLength: number = String(sortedArr[0]).length;
        console.log(maxLength);
        // const findLength = (num: number): number => {
        //     console.table({ maxLength: maxLength, number: num });
        //     // return String(num).length === maxLength;
        //     console.log(String(num).length === maxLength);
        //     // if (String(num).length === length) return num;
        //     return String(num).length === maxLength
        //         ? num
        //         : -1;
        // }
        console.log(arr);
        // return arr.find(function (num: number): number {
        //     return String(num).length === maxLength
        //         ? num
        //         : -1;
        // })!;

        for (let i = 0; i < arr.length; i++) {
            if (String(arr[i]).length === maxLength) {
                solution = arr[i];
                break;
            }
        }
        return solution;
    }
}

//  SORT arr BY THE LENGTH OF ELEMENTS(CONVERTED TO STRING)
//  RETURN FIRST ELEMENT OF SORTED-BY-LENGTH ARRAY

// console.log(Kata.findLongest([1, 10, 100, 400, 56, 800]));
// console.log();
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// REDUCE()
class Kata5 {
    static findLongest(array: number[]): number {
        return array.reduce((a, b) =>
            a.toString().length < b.toString().length ? b : a
        );
    }
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  SORTED? YES, NO, HOW? ASCENDING/DESCENDING
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:  SORT(),
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Complete the method which accepts an array of integers, and returns one of the following:
 
"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

const isSortedAndHow = (arr: number[]): string => {
    let isAscending: boolean = false;
    let isDescending: boolean = false;
    let solution: string = "no";

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= arr[i - 1]) {
            isAscending = true;
        } else {
            break;
        }
        if (i === arr.length - 1 && isAscending) {
            solution = "yes, ascending";
        }
    }

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            isDescending = true;
        } else {
            break;
        }
        if (i === arr.length - 1 && isDescending) {
            solution = "yes, descending";
        }
    }

    return solution;
};

// console.log(isSortedAndHow([1, 2]));
// console.log(isSortedAndHow([15, 7, 3, -8]));
// console.log(isSortedAndHow([4, 2, 30]));
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function isSortedAndHow2(array: number[]): string {
    let ascending = true,
        descending = true;
    for (var i = 1; i < array.length; i++) {
        if (array[i - 1] < array[i]) descending = false;
        if (array[i - 1] > array[i]) ascending = false;
        if (!ascending && !descending) return "no";
    }
    if (ascending) return "yes, ascending";
    return "yes, descending";
}

function isSortedAndHow3(array: number[]): string {
    if (array.every((x, i, a) => i === 0 || a[i - 1] <= x))
        return "yes, ascending";
    if (array.every((x, i, a) => i === 0 || a[i - 1] >= x))
        return "yes, descending";
    return "no";
}

function isSortedAndHow4(array: number[]): string {
    return [...array].sort((a, b) => a - b).join("") === array.join("")
        ? "yes, ascending"
        : [...array]
              .sort((a, b) => a - b)
              .reverse()
              .join("") === array.join("")
        ? "yes, descending"
        : "no";
}

function isSortedAndHow5(array: number[]): string {
    let isAsc: boolean = true;
    let isDesc: boolean = true;
    let i: number = 0;

    while (i + 1 < array.length) {
        if (array[i] > array[i + 1]) isAsc = false;
        if (array[i] < array[i + 1]) isDesc = false;

        i++;
    }

    if (isAsc) return "yes, ascending";
    else if (isDesc) return "yes, descending";
    else return "no";
}

function isSortedAndHow6(array: number[]): string {
    const asc: number[] = [...array].sort((a, b) => a - b);
    const dsc: number[] = [...array].sort((a, b) => b - a);
    switch (array.toString()) {
        case asc.toString():
            return "yes, ascending";
        case dsc.toString():
            return "yes, descending";
        default:
            return "no";
    }
}

function isSortedAndHow7(array: number[]): string {
    if ([...array].sort((a, b) => a - b).join("") === array.join("")) {
        return "yes, ascending";
    } else if ([...array].sort((a, b) => b - a).join("") === array.join("")) {
        return "yes, descending";
    } else {
        return "no";
    }
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  SUM OF ANGLES
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
 
If a convex polygon has n sides, then its interior angle sum is given by the following equation: S = ( n −2) × 180°.
*/

const angle = (n: number): number => {
    return (n - 2) * 180;
};

// console.log(angle(3));
// console.log(angle(4));
// console.log();
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  FACTORIAL
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
 
*/

const factorial = (num: number) => {
    let nthFact = 1;

    for (let i = 1; i <= num; i++) {
        nthFact *= i;
    }

    return nthFact;
};

// console.log(factorial(4));
// console.log(factorial(0));
// console.log(factorial(7));
// console.log();

//============= OTHER CODEWARS SOLUTIONS: =============

function factorial2(n: number): number {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  EVAPORATION
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:  DO WHILE()
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
This program tests the life of an evaporator containing a gas.
 
We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.
 
The program reports the nth day (as an integer) on which the evaporator will be out of use.
 
Example:
evaporator(10, 10, 5) -> 29
Note:
Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.
*/

const evaporator = (cont: number, dayEvap: number, thresH: number): number => {
    let contentLeft = cont;
    const minQuantity = cont * (thresH / 100);
    let daysLeft: number = 0;

    while (contentLeft >= minQuantity) {
        contentLeft -= contentLeft * (dayEvap / 100);
        daysLeft++;
    }

    return daysLeft;
};

//  INITIALIZE VARIABLES
//  KEEP DECREMENTING contentLeft WHILE IT IS GREATER OR EQUAL TO minQuantity
//  RETURN daysLeft

// 22
// console.log(evaporator(10, 10, 10));
// 29
// console.log(evaporator(10, 10, 5));

//============= OTHER CODEWARS SOLUTIONS: =============

function evaporator2(
    content: number,
    evap_per_day: number,
    threshold: number
): number {
    return Math.ceil(
        Math.log(threshold / 100) / Math.log(1 - evap_per_day / 100)
    );
}

function evaporator3(
    content: number,
    evapPerDay: number,
    threshold: number
): number {
    const reverseFactor = 1 / (1 - evapPerDay / 100);
    return Math.ceil(-Math.log(threshold / 100) / Math.log(reverseFactor));
}

function evaporator4(
    content: number,
    evapPerDay: number,
    threshold: number
): number {
    const full = content;
    let days = 0;

    do {
        content -= (content / 100) * evapPerDay;
        days++;
    } while (content > (full / 100) * threshold);

    return days;
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  FLATTEN AND SORT AN NESTED ARRAY
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:  TWO DIMENSIONAL ARRAY
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

//  ❗️❗️❗️ HAD TO CHANGE TARGET PROPERTY IN COMPILER OPTIONS TO "es2019" OR LATER  FOR flat() ❗️❗️❗️
/*
Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
 
Example:
 
Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
*/

const flattenAndSort = (inputArray: number[][]): number[] => {
    // 1️⃣  ❗️❗️❗️ THIS IS NOT WORKING IN CODEWARS ❗️❗️❗️
    // return inputArray
    //     .flat()
    //     .sort((a, b) => a - b);

    // 2️⃣
    return inputArray
        .reduce((acc, curr) => acc.concat(curr), [])
        .sort((a, b) => a - b);
};

// console.log(flattenAndSort([]));
// console.log(flattenAndSort([[], []]));
// console.log(flattenAndSort([[], [1]]));
// console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]));
// console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]));

//============= OTHER CODEWARS SOLUTIONS: =============

function flattenAndSort2(inputArray: number[][]): number[] {
    return inputArray.flat().sort((a, b) => a - b);
}

// const flattenAndSort3 = (a: number[][]): number[] => [].concat(...a).sort((a, b) => a - b);

function flattenAndSort4($: number[][]): number[] {
    return $.toString()
        .split(",")
        .filter((e) => e)
        .map(Number)
        .sort((a, b) => a - b);
}

function flattenAndSort5(inputArray: number[][]): number[] {
    let numbers: number[] = [];
    for (const tuple of inputArray) {
        numbers = [...tuple, ...numbers];
    }

    return numbers.sort((a, b) => a - b);
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  CHECK COUPON - STRING DATE
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:  ENUM, DATE.PARSE(), NEW DATE()
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Story
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
 
Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
 
A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
 
Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
*/

const checkCoupon = (
    usrCode: string,
    validCode: string,
    currDate: string,
    expDate: string
): boolean => {
    const isValidCode: boolean = usrCode === validCode;
    let isValidDate: boolean = true;

    enum months {
        January = 1,
        February,
        March,
        April,
        May,
        June,
        July,
        August,
        September,
        October,
        November,
        December,
    }

    const extractDate = (date: string): string[] => {
        return date.replace(/,/g, "").split(" ");
    };

    const currYear: number = Number(extractDate(currDate)[2]);
    const expYear: number = Number(extractDate(expDate)[2]);

    // ❗️❗️❗️ HAVE TO USE ANY, string WILL THROW AN ERROR WHEN ACCESSING VALUE BY KEY (months[currMonth]) ❗️❗️❗️
    const currMonth: any = extractDate(currDate)[0];
    const currMonthIdx: any = months[currMonth];
    const expMonth: any = extractDate(expDate)[0];
    const expMonthIdx: any = months[expMonth];

    const currDay: number = Number(extractDate(currDate)[1]);
    const expDay: number = Number(extractDate(expDate)[1]);

    console.table({
        currYear: currYear,
        expYear: expYear,
        currMonth: currMonth,
        currMonthIdx: currMonthIdx,
        expMonth: expMonth,
        expMonthIdx: expMonthIdx,
        currDay: currDay,
        expDay: expDay,
    });

    //  YEAR PLUS
    if (expYear > currYear) {
        isValidDate = true;
        //  YEAR SAME
    } else if (expYear === currYear) {
        if (expMonthIdx > currMonthIdx) {
            isValidDate = true;
        } else if (expMonthIdx === currMonthIdx) {
            if (expDay >= currDay) {
                isValidDate = true;
            } else {
                isValidDate = false;
            }
        } else {
            isValidDate = false;
        }
        //  YEAR INVALID
    } else {
        isValidDate = false;
    }

    return isValidCode && isValidDate;
};

/*
 
isvalidCode WILL CHECK IF CODES MATCH
INITIALIZE isValidDate
ASSIGN NUMERIC VALUES TO MONTHS FOR COMPARISON
extractDate WILL CONVERT STRING TO ARRAY ["September", "5", "2015"]
STORE YEAR, MONTH INDEX AND DAY IN VARIABLES (CONVERTED TO NUMBER)
┌──────────────┬───────────┐
│   (index)    │  Values   │
├──────────────┼───────────┤
│   currYear   │   2014    │
│   expYear    │   2014    │
│  currMonth   │ 'January' │
│ currMonthIdx │     1     │
│   expMonth   │ 'January' │
│ expMonthIdx  │     1     │
│   currDay    │     5     │
│    expDay    │     1     │
└──────────────┴───────────┘
if BLOCK DETERMINES IF DATE IS VALID
RETURN TRUE IF BOTH CODE AND DATE ARE VALID, OTHERWISE FALSE
 
*/

// console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'));
// console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'));
// console.log(checkCoupon('12abcd3', '12abcd3', 'January 5, 2014', 'January 1, 2014'));

//============= OTHER CODEWARS SOLUTIONS: =============

function checkCoupon2(
    enteredCode: string,
    correctCode: string,
    currentDate: string,
    expirationDate: string
): boolean {
    return (
        enteredCode === correctCode &&
        Date.parse(currentDate) <= Date.parse(expirationDate)
    );
}

function checkCoupon3(
    enteredCode: string,
    correctCode: string,
    currentDate: string,
    expirationDate: string
): boolean {
    let cDate = new Date(currentDate);
    let expDate = new Date(expirationDate);
    return enteredCode === correctCode && cDate <= expDate ? true : false;
}

function checkCoupon4(
    enteredCode: string,
    correctCode: string,
    currentDate: string,
    expirationDate: string
): boolean {
    const isValidCode = enteredCode === correctCode;
    const isValidDate = new Date(currentDate) <= new Date(expirationDate);
    return isValidCode && isValidDate;
}
// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  ROW WEIGHTS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:  REDUCE()
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
 
Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
 
Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.
 
rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.
 
rowWeights([80])  ==>  return (80, 0)
Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.
*/

const rowWeights = (arr: number[]): number[] => {
    let arr1: number[] = [],
        arr2: number[] = [];

    arr.forEach((num, idx) => {
        idx & 1 ? arr1.push(num) : arr2.push(num);
    });

    return [arr2.reduce((a, b) => a + b), arr1.reduce((a, b) => a + b)];
};

//  INITIALIZE ARRAYS WITH 0 IN CASE arr HAS ONLY ONE ELEMENT
//  LOOP THROUGH INPUT arr
//      CHECK IF idx IS ODD (!!! idx & 1 RETURNS 1 IF idx IS ODD !!!)
//          IF SO, PUSH num TO arr1
//          OTHERWISE, PUSH num TO arr2
//  RETURN [SUM OF BOTH arr1 AND arr2]

// console.log(rowWeights([50, 60, 70, 80]));

//============= OTHER CODEWARS SOLUTIONS: =============

function rowWeights2(arr: number[]) {
    return arr.reduce((r, e, i) => ((r[i % 2] += e), r), [0, 0]);
}

function rowWeights3(arr: number[]): [number, number] {
    let even: number = arr.reduce((sum, x, i) => sum + (!(i % 2) ? x : 0), 0);
    let odd: number = arr.reduce((sum, x, i) => sum + (i % 2 ? x : 0), 0);
    return [even, odd];
}

function rowWeights4(arr: number[]) {
    return arr.reduce(
        (a: number[], c: number, i: number) =>
            i % 2 ? [a[0], a[1] + c] : [a[0] + c, a[1]],
        [0, 0]
    );
}

function rowWeights5(arr: number[]): number[] {
    return arr.reduce(
        (sumOfWeights, weight, i) => {
            sumOfWeights[i % 2] += weight;
            return sumOfWeights;
        },
        [0, 0]
    );
}

function rowWeights6(arr: number[]) {
    const res = [0, 0];

    arr.forEach((x, i) => {
        if (i % 2 === 0) {
            res[0] += x;
        } else {
            res[1] += x;
        }
    });

    return res;
}

function rowWeights7(arr: number[]) {
    let arr1 = 0;
    let arr2 = 0;
    arr.forEach((value, index) =>
        index % 2 ? (arr2 += value) : (arr1 += value)
    );
    return [arr1, arr2];
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  SORT ARRAY NUMERICALLY
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:  SORT()
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
 
For example:
 
solution([1, 2, 10, 50, 5]); // should return [1, 2, 5, 10, 50]
solution([]); // should return []
*/

const sortNumbers = (numsArr: number[]): number[] => {
    return numsArr.sort((a, b) => a - b);
};

// console.log(sortNumbers([1, 2, 10, 50, 5]));

//============= OTHER CODEWARS SOLUTIONS: =============

function sortNumbers2(nums: number[]): number[] {
    return nums ? nums.sort((a, b) => a - b) : [];
}

function sortNumbers3(nums: number[]): number[] {
    return nums === null ? [] : nums.sort((left, right) => left - right);
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  	REMOVE DUPLICATES FROM STRING
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:  REDUCE(), FILTER(), SET(), ARRAY.FROM()
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
 
Example:
 
Input:
 
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
 
Output:
 
'alpha beta gamma delta'
*/

// ❗️❗️❗️ .reduce((acc: string[], curr) SPECIFY TYPE FOR acc ❗️❗️❗️
const removeDuplicateWords = (str: string): string => {
    return str
        .split(" ")
        .reduce(
            (acc: string[], curr) =>
                acc.includes(curr) ? acc : [...acc, curr],
            []
        )
        .join(" ");
};

// console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))

//============= OTHER CODEWARS SOLUTIONS: =============

function removeDuplicateWords2(s: string): string {
    return Array.from(new Set(s.split(" "))).join(" ");
}

function removeDuplicateWords3(s: string): string {
    return s
        .split(" ")
        .filter((v, i, a) => a.indexOf(v) === i)
        .join(" ");
}

function removeDuplicateWords4(s: string): string {
    return [...new Set(s.match(/[a-z]+/gi) || [])].join(" ");
}

function removeDuplicateWords5(s: string): string {
    const wordArray = s.split(" ");
    const wordSet = new Set(wordArray);
    const result = Array.from(wordSet).join(" ");
    return result;
}

function removeDuplicateWords6(s: string): string {
    let result: string[] = [];
    s.split(" ").forEach((string, index) => {
        if (result.indexOf(string) === -1) {
            result.push(string);
        }
    });
    return result.join(" ");
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  ALTERNATE CAPITALIZATION
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
 
For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
 
The input will be a lowercase string with no spaces.
*/

const capitalize = (str: string): string[] => {
    let odds: string = "",
        evens: string = "";

    for (let i = 0; i < str.length; i++) {
        evens += i % 2 === 0 ? str[i].toUpperCase() : str[i];
        odds += i % 2 > 0 ? str[i].toUpperCase() : str[i];
    }

    return [evens, odds];
};

//  INITIALIZE EMPTY STRINGS FOR BOTH WORDS
//  LOOP OVER str
//      BUILD evens
//      BUILD odds
// RETURN SOLUTION AS ARRAY OF STRINGS

// console.log(capitalize("abcdef"));

//============= OTHER CODEWARS SOLUTIONS: =============

const capitalize2 = (s: string) => [
    [...s].map((l, i) => (i % 2 ? l : l.toUpperCase())).join(""),
    [...s].map((l, i) => (i % 2 ? l.toUpperCase() : l)).join(""),
];

function capitalize3(s: string) {
    const output = ["", ""];
    s.split("").forEach((letter, index) => {
        output[0] += index % 2 ? letter : letter.toUpperCase();
        output[1] += !(index % 2) ? letter : letter.toUpperCase();
    });
    return output;
}

function capitalize4(s: string) {
    return [...s].reduce(
        (acc, curr, indx) => {
            const isEven = indx % 2 == 0;
            acc[0] += curr[isEven ? "toUpperCase" : "toLowerCase"]();
            acc[1] += curr[!isEven ? "toUpperCase" : "toLowerCase"]();
            return acc;
        },
        ["", ""]
    );
}

function capitalize5(s: string): Array<string> {
    return [
        s
            .split("")
            .map((letter, i) =>
                i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
            )
            .join(""),
        s
            .split("")
            .map((letter, i) =>
                i % 2 !== 0 ? letter.toUpperCase() : letter.toLowerCase()
            )
            .join(""),
    ];
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  MAXIMUM LENGTH DIFFERENCE
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.
 
Find max(abs(length(x) − length(y)))
 
If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
 
Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string
*/

// 1️⃣
class G964 {
    // 1️⃣
    public static mxdiflg = (a1: string[], a2: string[]): number => {
        if (!a1.length || !a2.length) return -1;

        const shortest1: number = Math.min(...a1.map((word) => word.length));
        const longest1: number = Math.max(...a1.map((word) => word.length));
        const shortest2: number = Math.min(...a2.map((word) => word.length));
        const longest2: number = Math.max(...a2.map((word) => word.length));

        return Math.max(
            Math.abs(shortest1 - longest2),
            Math.abs(longest1 - shortest2)
        );
    };

    // 2️⃣
    public static mxdiflg2 = (a1: string[], a2: string[]): number => {
        if (!a1.length || !a2.length) return -1;

        const getShortest = (arr: string[]) =>
            Math.min(...arr.map((word): number => word.length));
        const getLongest = (arr: string[]) =>
            Math.max(...arr.map((word): number => word.length));

        const shortest1 = getShortest(a1);
        const longest1 = getLongest(a1);
        const shortest2 = getShortest(a2);
        const longest2 = getLongest(a2);

        return Math.max(
            Math.abs(shortest1 - longest2),
            Math.abs(longest1 - shortest2)
        );
    };

    // 3️⃣
    public static mxdiflg3 = (a1: string[], a2: string[]): number => {
        if (!a1.length || !a2.length) return -1;

        // REFACTOR getShortest / getShortest
        const getMinMax = (arr: string[], output: string): number => {
            // ❗️❗️❗️ HAVE TO USE ENDING RETURN STATEMENT WITH TERNARY ❗️❗️❗️
            // if (output === "min") return Math.min(...arr.map((word): number => word.length));
            // if (output === "max") return Math.max(...arr.map((word): number => word.length));

            return output === "min"
                ? Math.min(...arr.map((word): number => word.length))
                : Math.max(...arr.map((word): number => word.length));
        };

        const shortest1 = getMinMax(a1, "min");
        const longest1 = getMinMax(a1, "max");
        const shortest2 = getMinMax(a2, "min");
        const longest2 = getMinMax(a2, "max");

        return Math.max(
            Math.abs(shortest1 - longest2),
            Math.abs(longest1 - shortest2)
        );
    };

    // 4️⃣  FINAL:
    public static mxdiflg4 = (a1: string[], a2: string[]): number => {
        const getMinMax = (arr: string[], output: string): number => {
            return output === "min"
                ? Math.min(...arr.map((word): number => word.length))
                : Math.max(...arr.map((word): number => word.length));
        };

        const shortest1 = getMinMax(a1, "min");
        const longest1 = getMinMax(a1, "max");
        const shortest2 = getMinMax(a2, "min");
        const longest2 = getMinMax(a2, "max");

        return a1.length && a2.length // (!a1.length || !a2.length)
            ? Math.max(
                  Math.abs(shortest1 - longest2),
                  Math.abs(longest1 - shortest2)
              )
            : -1;
    };
}

//  getMinMax WILL CALCULATE THE LENGTH OF THE LONGEST OR SHORTEST ELEMENT OF ARRAY PASSED IN
//  CALCULATE LONGEST AND SHORTEST ELEMENTS FOR BOTH ARRAYS
//  CHECK ARRAY LENGTHS
//      IF BOTH VALID, RETURN MAX DIFFERENCE
//      OTHERWISE, -1

// var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
// var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

// const s1 = ['ejjjjmmtthh',
//     'zxxuueeg',
//     'aanlljrrrxx',
//     'dqqqaaabbb',
//     'oocccffuucccjjjkkkjyyyeehh']

// const s2 = ['bbbaaayddqbbrrrv']

// console.log(G964.mxdiflg(s1, s2));

//============= OTHER CODEWARS SOLUTIONS: =============

/*
 
export class G964 {
  
    public static mxdiflg = (a1, a2) => {
        let max = -1;
        for (let x of a1) {
          for (let y of a2) {
            max = Math.max(Math.abs(x.length - y.length), max);
          }
        }
        
        return max;
    }
}
 
 
export class G964 {
    public static mxdiflg = (a1, a2) => {
      if (!a1.length || !a2.length) return -1;
      const x = Math.max(...a1.map(v => v.length)) - Math.min(...a2.map(v => v.length));
      const y = Math.max(...a2.map(v => v.length)) - Math.min(...a1.map(v => v.length));
      return x > y ? x : y;
    }
  }
 
 
 
  export class G964 {
    public static mxdiflg = (a1, a2) => !a1.length || !a2.length ? -1 : Math.max(...a1.map(s1 => Math.max(...a2.map(s2 => Math.abs(s1.length - s2.length)))));
}
 
*/

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  FIX STRING CASE
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
 
make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:
 
solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
More examples in test cases. Good luck!
*/

// 1️⃣  ❗️❗️❗️ THIS WORKS IN IDE BUT THROWS ERROR IN CODEWARS ❗️❗️❗️
// (OBJECT IS POSSIBLY NULL)

// const solve = (str: string) => {

//     const capitals: number | undefined = str.match(/[A-Z]/g)?.length;

//     if (capitals) {
//         return capitals > str.length / 2 ? str.toUpperCase() : str.toLowerCase();
//     } else {
//         return str.toLowerCase();
//     }

// }

// 2️⃣ ✅ SOLVED WITH DIFFERENT LOGIC:
const solve = (str: string) => {
    let upperC: number = 0;

    for (const letter of str) {
        if (/[A-Z]/.test(letter)) upperC++;
    }

    return upperC > str.length / 2 ? str.toUpperCase() : str.toLowerCase();
};

// console.log(solve("code"));
// console.log(solve("CODe"));
// console.log(solve("COde"));
// console.log(solve("Code"));

//============= OTHER CODEWARS SOLUTIONS: =============

function solve2(s: string) {
    let uppercaseCount = s
        .split("")
        .filter((letter) => letter === letter.toUpperCase()).length;
    return uppercaseCount > s.length / 2 ? s.toUpperCase() : s.toLowerCase();
}

// ❗️❗️❗️ MATCH(REGEX || []) ❗️❗️❗️
function solve3(s: string): string {
    return (s.match(/[a-z]/g) || []).length >= s.length / 2
        ? s.toLowerCase()
        : s.toUpperCase();
}

const solve4 = (s: string) => {
    const upperCs = s.split("").filter((x) => x == x.toUpperCase());
    return upperCs.length > s.length / 2 ? s.toUpperCase() : s.toLowerCase();
};

function solve5(s: string) {
    return s.replace(/[a-z]/g, "").length > s.length / 2
        ? s.toUpperCase()
        : s.toLowerCase();
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  FORM THE MINIMUM (SMALLEST NUMBER WITHOUT DUPLICATION)
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:  SET(), ARRAY.FROM()
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
 
Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
Input >> Output Examples
minValue ({1, 3, 1})  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications
 
minValue({5, 7, 5, 9, 7})  ==> return (579)
Explanation:
(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications
 
minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
Explanation:
(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications
*/

const minValue = (values: number[]): number => {
    //1️⃣
    // const uniques = new Set(values);
    // const incrOrder = Array.from(uniques).sort();
    // let numStr = "";
    // incrOrder.forEach((digit) => {
    //     numStr += digit;
    // })
    // return Number(numStr);

    // 2️⃣
    // const uniques = new Set(values);
    // return Number(Array.from(uniques).sort().join(""));

    // 3️⃣
    return Number(Array.from(new Set(values)).sort().join(""));
};

//  REMOVE DUPLICATES USING Set
//  MAKE ARRAY FROM UNUQUE VALUES
//  SORT ARRAY IN ASCENDING ORDER
//  JOIN INTO STRING
//  CONVERT TO NUMBER

// console.log(minValue([4, 7, 5, 7]));
// console.log(minValue([6, 7, 8, 7, 6, 6]));

//============= OTHER CODEWARS SOLUTIONS: =============

const minValue2 = (values: Array<number>): number => {
    return +[...new Set(values)].sort().join("");
};

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  SMALL ENOUGH?
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:  EVERY()
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
 
You can assume all values in the array are numbers.
*/

const smallEnough = (arr: number[], limit: number): boolean => {
    // const checkLimit = (num: number) => num <= limit;

    // return arr.every(checkLimit);

    return arr.every((num: number) => num <= limit);
};

// console.log(smallEnough([101, 45, 75, 105, 99, 107], 107));
// console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  CHECK THE EXAM
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:  SWITCH(), NESTED TERNARY, CONTINUE, MATH.MAX()
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
 
The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
 
If the score < 0, return 0.
 
For example:
 
checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
*/

const checkExam = (array1: string[], array2: string[]): number => {
    let score: number = 0;

    for (let i = 0; i < array2.length; i++) {
        switch (array2[i]) {
            case "":
                score += 0;
                break;
            case array1[i]:
                score += 4;
                break;
            default:
                score += -1;
        }
    }

    return score < 0 ? 0 : score;
};

// console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
// console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]));
// console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]));
// console.log(checkExam(["b", "c", "b", "(a"], ["", "a", "a", "c"]));

//============= OTHER CODEWARS SOLUTIONS: =============

function checkExam2(array1: string[], array2: string[]): number {
    let result = 0;

    array2.forEach((item, index) => {
        item === array1[index]
            ? (result += 4)
            : item === ""
            ? (result += 0)
            : (result -= 1);
    });

    return Math.max(result, 0);
}

function checkExam3(array1: string[], array2: string[]): number {
    let score = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array2[i] === "") continue;
        else if (array1[i] === array2[i]) score += 4;
        else score--;
    }
    return score > 0 ? score : 0;
}

function checkExam4(array1: string[], array2: string[]): number {
    return Math.max(
        0,
        array2.reduce(
            (a, b, i) => a + (b == "" ? 0 : b === array1[i] ? 4 : -1),
            0
        )
    );
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  SUM DIGITS OF NUMBER
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
 
For example: (Input --> Output)
 
10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/

const sumDigits = (num: number): number => {
    return Math.abs(num)
        .toString()
        .split("")
        .map((digit) => Number(digit))
        .reduce((a, b) => a + b);
};

//  GET ABSOLUTE VALUE
//  CONVERT TO STRING
//  SPLIT INTO ARRAY OF STRINGS
//  CONVERT TO ARRAY OF NUMBERS
//  GET SUM

// console.log(sumDigits(453));
// console.log(sumDigits(-32));

//============= OTHER CODEWARS SOLUTIONS: =============

function sumDigits2(number: number): number {
    return Math.abs(number)
        .toString()
        .split("")
        .reduce((acc, digit) => parseInt(digit) + acc, 0);
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  GIVEN A DIVISOR AND BOUND FOUND LARGEST INT
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Given a Divisor and a Bound , Find the largest integer N , Such That ,
 
Conditions :
N is divisible by divisor
 
N is less than or equal to bound
 
N is greater than 0.
 
Notes
The parameters (divisor, bound) passed to the function are only positive values .
It's guaranteed that a divisor is Found .
Input >> Output Examples
maxMultiple (2,7) ==> return (6)
Explanation:
(6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0
*/

const maxMultiple = (divisor: number, bound: number): number => {
    let solution: number = 0;

    for (let num = bound; num > 0; num--) {
        if (num % divisor === 0) {
            solution = num;
            break;
        }
    }

    return solution;
};

//  START LOOP AT bound, DECREMENT BY 1
//  RETURN FIRST num THAT IS DIVISIBLE BY divisor

// console.log(maxMultiple(37, 200));

//============= OTHER CODEWARS SOLUTIONS: =============

// ❗️❗️❗️
function maxMultiple2(divisor: number, bound: number) {
    return bound - (bound % divisor);
}

function maxMultiple3(divisor: number, bound: number) {
    return Math.floor(bound / divisor) * divisor;
}

function maxMultiple4(divisor: number, bound: number) {
    for (let n = bound; n > 0; n -= 1) if (n % divisor === 0) return n;
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  GET TWO LARGEST NUMBERS OF ARRAY
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:  FILTER() TO REMOVE DUPLICATES, SORT() NUMERICALLY
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].
 
The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.
 
For example:
 
two_oldest_ages( 4, {1, 2, 10, 8}, result) // should fill result array with {8, 10}
*/

const twoOldestAges = (ages: number[]): number[] => {
    return (
        ages
            // .filter((curr, index) => ages.indexOf(curr) === index)
            .sort((a, b) => b - a)
            .slice(0, 2)
            .reverse()
    );
};

//  FILTER WILL REMOVE DUPLICATES IF NEEDED
// SORT ARRAY DESCENDING NUMERICALLY
// GET FIRST TWO ELEMENTS
// REVERSE

// console.log(twoOldestAges([1, 5, 87, 45, 8, 8, 87]));
// console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));

//============= OTHER CODEWARS SOLUTIONS: =============

const twoOldestAges2 = (ages: any) =>
    ages.sort((a: any, b: any) => a - b).slice(ages.length - 2);

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  COUNT NUMBER OF DIVISORS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Count the number of divisors of a positive integer n.
 
Random tests go up to n = 500000.
 
Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
*/

const divisors = (num: number): number => {
    if (num === 1) return 1;

    const divisors: number[] = [];

    for (let i = 1; i <= num / 2; i++) {
        let divisor1: number = i,
            divisor2: number = num / i;

        if (Number.isInteger(num / divisor1)) {
            // console.table({ divisor1: i, divisor2: num / i });

            if (!divisors.includes(divisor1)) {
                if (divisor1 === divisor2) {
                    divisors.push(divisor1);
                } else {
                    divisors.push(divisor1, divisor2);
                }
            }
        }
    }

    // console.log(divisors, divisors.length);
    return divisors.length;
};

//  LOOP OVER INTEGERS UP TO num / 2
//     IF num CAN BE DIVIDED BY divisor1
//        IF divisors ARRAY DOES NOT INCLUDE divisor1
//            IF divisor1 EQUALS divisor2
//                ONLY PUSH divisor1 TO AVOID DUPLICATES (8*8=64)
//            OTHERWISE
//                PUSH BOTH DIVISORS

//  RETURN LENGTH OF ARRAY AS RESULT

// console.log(divisors(1));
// console.log(divisors(64));
// console.log(divisors(4));

//============= OTHER CODEWARS SOLUTIONS: =============

function divisors2(n: number) {
    let steps = 0;

    for (let i = 0; i <= n; i++) {
        if (n % i === 0) steps++;
    }

    return steps;
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  COUNT DIGIT APPEARING IN SQUARES
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:  REGEXP OBJECT, MATCH()
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
 
Square all numbers k (0 <= k <= n) between 0 and n.
 
Count the numbers of digits d used in the writing of all the k**2.
 
Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.
 
Examples:
n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.
 
nb_dig(25, 1) returns 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25
*/

const nbDig = (num: number, digit: number): number => {
    let counter: number = 0;
    const regex = new RegExp(String(digit), "g");

    for (let i = 0; i <= num; i++) {
        let squareStr = String(Math.pow(i, 2));
        const matches = squareStr.match(regex);
        // console.table({
        //     square: squareStr,
        //     digit: String(digit),
        //     matches: matches?.length
        // });
        if (matches) counter += matches.length;
    }

    return counter;
};

//  CREATE JS REGEXP OBJECT FOR digit
//  LOOP OVER INTEGERS UP TO AND ICLUDING num
//      CALC SQUARE, CONVERT TO STRING AN SAVE TO VAR squareStr
//      GET ARRAY OF MATCHES (matches)
//      IF matches ARRAY IS NOT EMPTY
//          INCREMENT counter BY matches.length
//  RETURN counter AS RESULT

// 6
// console.log(nbDig(11, 1));

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  BREAKING CHOCOLEATE
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.
 
For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.
 
If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.
*/

const breakChocolate = (n: number, m: number): number => {
    return n * m > 1 ? n * m - 1 : 0;
};

// console.log(breakChocolate(5, 5));

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  DONT GIVE ME FIVE
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:  REGEX.TEST()
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
 
Examples:
 
1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!
*/

const dontGiveMeFive = (start: number, end: number): number => {
    let counter = 0;

    for (let i = start; i <= end; i++) {
        if (!/5/g.test(String(i))) {
            counter++;
        }
    }

    return counter;
};

//  TEST FOR A MATCH IN STRING(NUM) FOR "5"
//      IF NO MATCH, INCREMENT COUNTER
//  RETURN COUNTER AS RESULT

// return /^(\d{4}|\d{6})$/.test(pin);

// console.log(dontGiveMeFive(1, 9));
// console.log(dontGiveMeFive(4, 17));

//============= OTHER CODEWARS SOLUTIONS: =============

function dontGiveMeFive2(start: number, end: number): number {
    return Array.from(
        { length: end - start + 1 },
        (ix, it) => it + start
    ).filter((it) => !/5/.test(it + "")).length;
}

function dontGiveMeFive3(start: number, end: number): number {
    return Array.from({ length: end - start + 1 }, (_, i) => i + start).filter(
        (x) => !/5/.test(`${x}`)
    ).length;
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  REVERSE WORDS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
 
Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
 
*/

const reverseWords = (str: string): string => {
    return str
        .split(" ")
        .map((word) => word.split("").reverse().join(""))
        .join(" ");
};

// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  SUM OF THE FIRST NTH TERM OF SERIES ROUNDED TO 2 DIGITS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:  TOFIXED(2), TRACKING MULTIPLE VARIABLES IN FOR LOOP
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Your task is to write a function which returns the sum of following series upto nth term(parameter).
 
Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.
 
If the given value is 0 then it should return 0.00
 
You will only be given Natural Numbers as arguments.
 
Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/

const SeriesSum = (num: number): string => {
    let sum: number = 0;

    for (let i = 0, denominator = 1; i < num; i++, denominator += 3) {
        sum += 1 / denominator;
    }

    return String(sum.toFixed(2));
};

// TRACK/INCREMENT NUM AND DENOMINATOR IN LOOP
// INCREMENT SUM WITH 1 / DENOMINATOR NUM TIMES
// ROUND DOWN TO TWO DIGITS AND CONVERT NO STRING

// console.log(SeriesSum(1));
// console.log(SeriesSum(2));
// console.log(SeriesSum(3));

//============= OTHER CODEWARS SOLUTIONS: =============

function SeriesSum2(n: number): string {
    return [...Array(n).keys()]
        .map((k) => 1 / (k * 3 + 1))
        .reduce((acc, n) => acc + n, 0)
        .toFixed(2);
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  STRING END WITH?
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:  ENDSWITH()
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
 
Examples:
 
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

const solution = (str: string, ending: string): boolean => {
    return str.endsWith(ending);
};

// console.log(solution('abcde', 'cde'));
// console.log(solution('abcde', 'rde'));

//============= OTHER CODEWARS SOLUTIONS: =============

function solution2(str: string, ending: string): boolean {
    return !ending.length || str.slice(-ending.length) === ending;
}

function solution3(str: string, ending: string): boolean {
    const strSubstring = str.slice(str.length - ending.length);
    return strSubstring === ending; // TODO: complete
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  ODD OR EVEN (SUM OF ARRAY)
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:  REDUCE(), BITWISE AND (ODD OR EVEN), DOUBLE NESTED TERNARY
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Given a list of integers, determine whether the sum of its elements is odd or even.
 
Give your answer as a string matching "odd" or "even".
 
If the input array is empty consider it as: [0] (array with a zero).
*/

// num(1) & 1 => 1   RETURNS  1 IF N IS ODD
// num(2) & 1 => 0   RETURNS 0 IF N IS EVEN

const oddOrEven = (array: number[]): string => {
    // if (array.length === 0) return "even";
    // return array.reduce((a, b) => a + b) & 1
    //     ? "odd"
    //     : "even";

    return array.length > 0
        ? array.reduce((a, b) => a + b) & 1
            ? "odd"
            : "even"
        : "even";
};

// console.log(oddOrEven([0, -1, -3]));
// console.log(oddOrEven([0, -1, -4]));
// console.log(oddOrEven([]));

//============= OTHER CODEWARS SOLUTIONS: =============

function oddOrEven2(array: number[]) {
    return array.reduce((acc, it) => acc + it, 0) % 2 ? "odd" : "even";
}

const oddOrEven3 = (array: number[]) =>
    array.reduce((acc, curr) => (acc += curr), 0) % 2 === 0 ? "even" : "odd";

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  NUMBER OF PEOPLE ON THE BUS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:  REDUCE()
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
There is a bus moving in the city, and it takes and drop some people in each bus stop.
 
You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
 
Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
 
Take a look on the test cases.
 
Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
 
The second value in the first integer array is 0, since the bus is empty in the first bus stop.
*/

const number = (busStops: [number, number][]): number => {
    let counter: number = 0;

    busStops.forEach((stop) => {
        counter += stop[0];
        counter -= stop[1];
    });

    return counter;
};

// console.log(number([[10, 0], [3, 5], [5, 8]]));
// console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]));

//============= OTHER CODEWARS SOLUTIONS: =============

function number2(busStops: number[][]): number {
    return busStops.reduce((rem, [on, off]) => rem + (on - off), 0);
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  SUM OF ODD NUMBERS IN TRIANGLE OF CONS. ODD NUMS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Given the triangle of consecutive odd numbers:
 
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
 
1 -->  1
2 --> 3 + 5 = 8
*/

function rowSumOddNumbers(n: number): number {
    return Math.pow(n, 3);
    //     return n ** 3;
}

// FIRST SOLUTION IN JS:

// const rowSumOddNumbers2 = (n) => {
//     const firstOfRow = n + Math.pow(n - 1, 2);
//     const subTotal = firstOfRow * n;
//     let increments = 0;
//     for (let j = 0; j <= n * 2 - 2; j += 2) {
//         increments = increments + j;
//     }
//     total = subTotal + increments;
//     return total;
// };

//============= OTHER CODEWARS SOLUTIONS: =============

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  IS THIS A TRIANGLE?
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

/*
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
 
(In this case, all triangles must have surface greater than 0 to be accepted).
*/

const isTriangle = (a: number, b: number, c: number): boolean => {
    return a + b > c && a + c > b && b + c > a;
};

//   SUM OF ANY TWO SIDES MUST BE GREATER THAN THIRD SIDE

// console.log(isTriangle(1, 2, 2));
// console.log(isTriangle(7, 2, 2));

//============= OTHER CODEWARS SOLUTIONS: =============

const isTriangle2 = (a: number, b: number, c: number): boolean =>
    a + b <= c || a + c <= b || b + c <= a ? false : true;

function isTriangle3(a: number, b: number, c: number): boolean {
    return a + b <= c ? false : a + c <= b ? false : b + c <= a ? false : true;
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  REGEX VALIDATE PIN CODE (4 OR 6 DIGITS)
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// KEYWORDS:  REGEX
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const validatePin = (pin: string): boolean => {
    // if (pin.length === 4 && pin.match(/\d/g)!.length === 4) return true;
    // if (pin.length === 6 && pin.match(/\d/g)!.length === 6) return true;
    // return false;

    return (
        (pin.length === 4 && pin.match(/\d/g)!.length === 4) ||
        (pin.length === 6 && pin.match(/\d/g)!.length === 6)
    );
};

// console.log(validatePin("12345654yw"));
// console.log(validatePin("123456"));
// console.log(validatePin("12345a"));
// console.log(validatePin("1234"));
// console.log(validatePin("-1234"));

//============= OTHER CODEWARS SOLUTIONS: =============

export class Kata2 {
    static pinFormat: RegExp = new RegExp(/^\d{4}(\d{2})?$/);

    static validatePin(pin: string): boolean {
        return Kata2.pinFormat.test(pin);
    }
}

export class Kata3 {
    static validatePin(pin: string) {
        return /^(\d{4}|\d{6})$/.test(pin);
    }
}

export class Kata4 {
    static validatePin(pin: string): boolean {
        const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        if (pin.length !== 4 && pin.length !== 6) {
            return false;
        }

        for (let index = 0; index < pin.length; index++) {
            if (!digits.includes(pin[index])) {
                return false;
            }
        }
        return true;
    }
}

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

    arr.map((el, i) => {
        switch (el) {
            case "A":
                arr[i] = "T";
                break;
            case "T":
                arr[i] = "A";
                break;
            case "C":
                arr[i] = "G";
                break;
            case "G":
                arr[i] = "C";
        }
    });

    console.log(arr.join(""));
    return arr.join("");
};

// dnaStrand("ATCG");

//============= OTHER CODEWARS SOLUTIONS: =============

// ❗️❗️❗️
// export class Kata {
//     static dnaStrand(dna: string) {
//       return dna.replace(/./g, (c)=>({A:'T',T:'A',G:'C',C:'G'})[c]);
//     }
// }

// ❗️❗️❗️ if you want a replaced with x, b with y and c with z, you can do something like this:

// var chars = {'a':'x','b':'y','c':'z'};
// var s = '234abc567bbbbac';
// s = s.replace(/[abc]/g, m => chars[m]);
// console.log(s);
// Output: 234xyz567yyyyxz

// ❗️❗️❗️
// let dummyString = 'Javascript^ is$ the most popular _language';
// newString = dummyString.replace(/[_^$]/g, charactersToReplace => ({'^': '', '_': ':', '$' : '+' })[charactersToReplace]);

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  JADEN CASE
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// 🟩
// String.prototype.toJadenCase = function (str: string ): string {

//     //  ❗️❗️❗️ TypeError: Cannot read property 'split' of undefined ❗️❗️❗️
//     //  return str.split(" ").map((word) => word.replace(word[0], word[0].toUpperCase())).join(" ");

//     // ❗️❗️❗️ USE this KEYWORD: ❗️❗️❗️
//     return this.split(" ").map((word) => word.replace(word[0], word[0].toUpperCase())).join(" ");

// };
// 🟩

// STRING -> ARR(WORDS) -> CAPITALIZE EACH WORD IN ARRAY -> JOIN INTO STRING WITH " "
const toJadenCase = (str: string): string => {
    console.log(
        str
            .split(" ")
            .map((word) => word.replace(word[0], word[0].toUpperCase()))
            .join(" ")
    );

    // ❗️❗️❗️ HAVE TO USE this IN CODEWARS SOLUTION ❗️❗️❗️
    return str
        .split(" ")
        .map((word) => word.replace(word[0], word[0].toUpperCase()))
        .join(" ");
};

// toJadenCase("How can mirrors be real if our eyes aren't real");
// toJadenCase("a b A B");

//============= OTHER CODEWARS SOLUTIONS: =============

// String.prototype.toJadenCase = function () {
//     return this.replace(/(?:^|\s)\S/g, firstLetter => firstLetter.toUpperCase());
// };

// const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
// String.prototype.toJadenCase = function() {
//   return this.split(' ').map(capitalize).join(' ')
// }

// String.prototype.toJadenCase = function () {
//     return this.replace(/^.|\s./gi, $ => $.toUpperCase())
// };

// String.prototype.toJadenCase = function () {
//     let temp = this;

//     if (temp === null || temp.length === 0) {
//       return null;
//     }

//     let result = '';

//     for (let i = 0; i < temp.length; i++) {
//       let x = temp[i];
//       if (i === 0) {
//         x = x.toUpperCase();
//       } else if (temp[i - 1] === ' ') {
//         x = x.toUpperCase();
//       }
//       result += x;
//     }

//     return result;
//   };

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// TITLE:  SHORTEST WORD'S LENGTH
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE:
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// STR -> ARR(STR) -> SORT ARR BY LENGTH OF WORDS -> GRAB LENGTH OF FIRST ELEMENT
const findShort = (str: string): number => {
    return str.split(" ").sort((a, b) => {
        return a.length - b.length;
    })[0].length;
};

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
    const xS = str.toLowerCase().match(/x/g); // GET x's
    const oS = str.toLowerCase().match(/o/g); // GET o's
    if (xS && oS) {
        // IF BOTH FOUND:
        return xS.length === oS.length; // CHECK IF THEIR LENGTHS EQUAL (bool)
    } else if (xS || oS) {
        // IF ONLY ONE FOUND:
        return false; // false
    } else {
        // IF NEITHER FOUND
        return true; // true
    }
};

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
};

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
}

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
        : str.charAt((str.length - 1) / 2);
};

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
    //         .join("") * 1		// ❗️❗️❗️ *1 NOT WORKING IN TS ❗️❗️❗️
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
};

// accum("ZpglnRxqenU");

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
};

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
        .join("");

    console.log(Number(solution));
    return Number(solution);
};

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
};

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
