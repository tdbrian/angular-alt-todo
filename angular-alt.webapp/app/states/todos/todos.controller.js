var Todo;
(function (Todo) {
    "use strict";
    var TodoController = (function () {
        function TodoController(todosService) {
            var _this = this;
            this.todosService = todosService;
            this.setTodos = function (todos) {
                _this.todos = todos;
            };
            todosService.todoAdded.subscribe(this.setTodos);
            todosService.completedMarked.subscribe(this.setTodos);
        }
        TodoController.prototype.addTodo = function (todo) {
        };
        TodoController.prototype.markComplete = function (todo) {
        };
        TodoController.$inject = ["TodosService"];
        return TodoController;
    })();
    Todo.TodoController = TodoController;
    angular.module("todo-app").controller("TodoController", TodoController);
})(Todo || (Todo = {}));
//# sourceMappingURL=todos.controller.js.map