var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var VehicleClass = /** @class */ (function () {
    // drive(): void {
    //   console.log("Drive Slow and Safe");
    // };
    // color: string = "red";          // Initialize a variable inside of a class
    // constructor(color: string) {
    //   this.color = color;
    // };
    // To shorten up the line number 6 to line number 10, we can do
    function VehicleClass(color) {
        this.color = color;
    }
    VehicleClass.prototype.honk = function () {
        console.log("Not a good habit");
    };
    ;
    VehicleClass.prototype.breaking = function () {
        console.log("Applying brakes");
    };
    ;
    return VehicleClass;
}());
;
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(wheels, color) {
        var _this = _super.call(this, color) || this;
        _this.wheels = wheels;
        return _this;
    }
    Car.prototype.drive = function () {
        console.log("Car driving is awesome");
    };
    ;
    Car.prototype.startDriveProcess = function () {
        this.drive();
        this.breaking(); // protected functions can be used in child classes
    };
    return Car;
}(VehicleClass));
;
// const vehicle = new VehicleClass();
var vehicle = new VehicleClass("orange"); // Giving values to constructor function
console.log(vehicle.color.toUpperCase());
// vehicle.drive();
vehicle.honk();
// const carInstance = new Car();
var carInstance = new Car(4, "red");
// carInstance.drive();
carInstance.startDriveProcess();
console.log(carInstance.wheels);
console.log(carInstance.color);
