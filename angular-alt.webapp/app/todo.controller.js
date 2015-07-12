var Todo;
(function (Todo) {
    "use strict";
    var TodoController = (function () {
        function TodoController(todoStore) {
            this.activate();
        }
        TodoController.prototype.activate = function () {
        };
        return TodoController;
    })();
    Todo.TodoController = TodoController;
})(Todo || (Todo = {}));
angular.module("todo-app").controller("TodoController", Todo.TodoController);
//# sourceMappingURL=todo.controller.js.map