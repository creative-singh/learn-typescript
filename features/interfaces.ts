interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
    summary(): string;   // summary as function which will return string
};

interface Reportable {
    summary(): string;   // summary as function which will return string
};

const oldCivic = {
    name: "civiv",
    year: 2000,
    broken: true,
    summary(): string {
        return `
            Name: ${oldCivic.name},
            Year: ${oldCivic.year},
            isBroken? ${oldCivic.broken}
        `;
    }
};

const drinks = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${drinks.sugar} grams of sugar.`;
    }
};

const printVehicle = (vehicle: Vehicle): void => {
    const { name, year, broken, summary } = vehicle;

    // console.log(`
    //     Name: ${name},
    //     Year: ${year},
    //     isBroken?: ${broken}
    // `);

    console.log(summary())
};

// Generic Interface is Reportable
const printSummary = (item: Reportable): void => {
    const { summary } = item;

    console.log(summary())
};

printVehicle(oldCivic);
// Generic Function
printSummary(oldCivic);
printSummary(drinks);