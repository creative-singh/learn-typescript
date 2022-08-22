const apples: number = 5;

const speed: string = "fast";

const hasName: boolean = true;

const nothingMuch: null = null;

const nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// type annotations for arrays
const colors: string[] = ["red", "green", "blue"];
const myNumbers: number[] = [3, 4, 5];
const truths: boolean[] = [true, true, false];

// type annotations for class
class Car {
    bodyType = "fast";
}

const car: Car = new Car();

// type annotations for Object literals
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

// type annoations for Functions
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// When to use type annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line
// and initialize it later
let words: string[] = ["red", "green", "blue"];
let foundWord: boolean;

for (let i of words) {
    if (i === "green") {
        foundWord = true;
    };
};

// 3) Variable whose type cannot be inferred correctly
let numbers: number[] = [-10, -1, 2];
let numberAboveZero: boolean | number = false;

for (let i of numbers) {
    if (i > 0) {
        numberAboveZero = i;
    };
};



