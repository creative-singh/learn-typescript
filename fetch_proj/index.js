"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
;
axios_1["default"].get(url).then(function (res) {
    var todo = res.data;
    var id = todo.id, title = todo.title, completed = todo.completed;
    logTodo(id, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log("\n        The Todo with Id: ".concat(id, "\n        has a title of: ").concat(title, "\n        Is it finished? ").concat(completed, "\n    "));
};
