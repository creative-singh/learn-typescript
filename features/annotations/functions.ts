const add = (a: number, b: number): number => {
    return a + b;
};

const subtract = (a: number, b: number): number => {
    return a - b;
};

// Type Annotations with Names Functions
function divide(a: number, b: number): number {
    return a / b;
};

// Type Annotations with Annonymous Functions
const multiply = function (a: number, b: number): number {
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);
};

const throwError = (message: string): never => {
    throw new Error(message);
};


const todaysWeather = {
    date: new Date(),
    weather: "sunny",
};

// const logWeather = (todaysWeather: { date: Date, weather: string }): void => {
//     console.log(todaysWeather.date);
//     console.log(todaysWeather.weather);
// };

// ES2015 JS
// const logWeather = ({ date, weather }) => {
//     console.log(date);
//     console.log(weather);
// };

// ES2015 TS
const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);
};

logWeather(todaysWeather);