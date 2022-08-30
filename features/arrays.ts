const carMakers = ["ford", "toyota", "chevy"];
const date = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);    // This is the proper error

// help with "map"

carMakers.map((car: string): string => {
    return car.toUpperCase();
});

// Flexible Types
const importantDate: (Date | string)[] = [new Date(), "2020-08-24"];

