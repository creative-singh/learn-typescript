const drink = {
    color: "brown",
    carbonates: true,
    sugar: 40
};

// This forms an array
// const pepsi = ["brown", true, 40];

// Making tuple for specific data 
// const pepsi: [string, boolean, number] = ["brown", true, 40];


// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];


