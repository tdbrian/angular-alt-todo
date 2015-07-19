var Todo;
(function (Todo) {
    "use strict";
    var TodoController = (function () {
        function TodoController(todosService) {
            var _this = this;
            this.todosService = todosService;
            // On view data updates
            // -------------------------
            this.setTodos = function (todos) {
                _this.todos = todos;
            };
            // Listen for updates
            todosService.todoAdded.subscribe(this.setTodos);
            todosService.completedMarked.subscribe(this.setTodos);
            todosService.todosReady.subscribe(this.setTodos);
            // Request initial data
            todosService.getTodos();
        }
        // On view actions
        // -------------------------
        TodoController.prototype.addTodo = function (todo) {
            this.todosService.addTodo(todo);
        };
        TodoController.prototype.markComplete = function (todo) {
            this.todosService.markCompleted(todo.Id);
        };
        TodoController.$inject = ["TodosService"];
        return TodoController;
    })();
    Todo.TodoController = TodoController;
    angular.module("todo-app").controller("TodoController", TodoController);
})(Todo || (Todo = {}));
//# sourceMappingURL=todos.controller.js.map