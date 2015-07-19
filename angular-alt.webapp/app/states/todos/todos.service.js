/// <reference path="../../../scripts/typings/lodash/lodash.d.ts" />
var Todo;
(function (Todo) {
    "use strict";
    var TodosService = (function () {
        // Constructor
        function TodosService($alt, $hub) {
            this.$alt = $alt;
            this.$hub = $hub;
            this.todoHub = $hub.hubs.todosHub;
            // Create observables
            this.todoAdded = $alt.addObservable();
            this.completedMarked = $alt.addObservable();
            this.todosReady = $alt.addObservable();
            // Catch push observables 
            this.todoHub.client.todoAdded = this.addTodo;
            this.todoHub.client.itemMarkedComplete = this.markCompleted;
        }
        // Data Requests
        // -------------------------
        TodosService.prototype.getTodos = function (refresh) {
            var _this = this;
            if (refresh === void 0) { refresh = false; }
            if (_.isEmpty(this.todos) || refresh) {
                this.todoHub.server.getTodos().then(function (todos) {
                    _this.todos = todos;
                    console.log("got new todos");
                    console.log(todos);
                });
                this.todosReady.onNext(this.todos);
            }
            else {
                this.todosReady.onNext(this.todos);
                console.log("got existing todos");
            }
        };
        // Update on actions
        // -------------------------
        TodosService.prototype.addTodo = function (todo) {
            this.todos.push(todo);
            this.todoHub.server.addTodo(todo);
            this.todoAdded.onNext(this.todos);
        };
        TodosService.prototype.markCompleted = function (todoId) {
            var matchingTodo = _.find(this.todos, "Id", todoId);
            this.todoHub.server.markComplete(matchingTodo.Id);
            this.completedMarked.onNext(this.todos);
        };
        TodosService.$inject = ["$alt", "$hub"];
        return TodosService;
    })();
    Todo.TodosService = TodosService;
})(Todo || (Todo = {}));
angular.module("todo-app").service("TodosService", Todo.TodosService);
//# sourceMappingURL=todos.service.js.map