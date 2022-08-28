class VehicleClass {
  // drive(): void {
  //   console.log("Drive Slow and Safe");
  // };

  // color: string = "red";          // Initialize a variable inside of a class

  // constructor(color: string) {
  //   this.color = color;
  // };

  // To shorten up the line number 6 to line number 10, we can do
  constructor(public color: string) { }

  public honk(): void {
    console.log("Not a good habit");
  };

  protected breaking(): void {
    console.log("Applying brakes");
  };
};

class Car extends VehicleClass {      // Basic Inheritance

  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {             // use private when we need to restrict the action of a function
    console.log("Car driving is awesome");
  };

  startDriveProcess(): void {
    this.drive();
    this.breaking();                  // protected functions can be used in child classes
  }
};

// const vehicle = new VehicleClass();
const vehicle = new VehicleClass("orange");       // Giving values to constructor function
console.log(vehicle.color.toUpperCase());
// vehicle.drive();
vehicle.honk();

// const carInstance = new Car();
const carInstance = new Car(4, "red");
// carInstance.drive();
carInstance.startDriveProcess();
console.log(carInstance.wheels);
console.log(carInstance.color);


