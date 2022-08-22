var apples = 5;
var speed = "fast";
var hasName = true;
var nothingMuch = null;
var nothing = undefined;
// built in objects
var now = new Date();
// type annotations for arrays
var colors = ["red", "green", "blue"];
var myNumbers = [3, 4, 5];
var truths = [true, true, false];
// type annotations for class
var Car = /** @class */ (function () {
    function Car() {
        this.bodyType = "fast";
    }
    return Car;
}());
var car = new Car();
// type annotations for Object literals
var point = {
    x: 10,
    y: 20
};
// type annoations for Functions
var logNumber = function (i) {
    console.log(i);
};
// When to use type annotations
// 1) Function that returns the 'any' type
var json = '{"x": 10, "y": 20}';
var coordinates = JSON.parse(json);
console.log(coordinates);
// 2) When we declare a variable on one line
// and initialize it later
var words = ["red", "green", "blue"];
var foundWord;
for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
    var i = words_1[_i];
    if (i === "green") {
        foundWord = true;
    }
    ;
}
;
var myNumber;
myNumber = 2;
console.log(myNumber);
