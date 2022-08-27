;
;
var oldCivic = {
    name: "civiv",
    year: 2000,
    broken: true,
    summary: function () {
        return "\n            Name: ".concat(oldCivic.name, ",\n            Year: ").concat(oldCivic.year, ",\n            isBroken? ").concat(oldCivic.broken, "\n        ");
    }
};
var drinks = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary: function () {
        return "My drink has ".concat(this.sugar, " grams of sugar.");
    }
};
var printVehicle = function (vehicle) {
    var name = vehicle.name, year = vehicle.year, broken = vehicle.broken, summary = vehicle.summary;
    // console.log(`
    //     Name: ${name},
    //     Year: ${year},
    //     isBroken?: ${broken}
    // `);
    console.log(summary());
};
// Generic Interface is Reportable
var printSummary = function (item) {
    var summary = item.summary;
    console.log(summary());
};
printVehicle(oldCivic);
// Generic Function
printSummary(oldCivic);
printSummary(drinks);
