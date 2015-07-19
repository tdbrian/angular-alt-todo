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
            // Create Observables
            this.todoAdded = $alt.addObservable();
            this.completedMarked = $alt.addObservable();
            // Create actions
            this.addTodo = this.$alt.addAction(this.addingTodo);
            this.markCompleted = this.$alt.addAction(this.markingCompleted);
            // Catch push events
            this.todoHub.client.todoAdded = this.addingTodo;
            this.todoHub.client.itemMarkedComplete = this.markingCompleted;
        }
        // Update on actions
        // -------------------------
        TodosService.prototype.addingTodo = function (todo) {
            this.todos.push(todo);
            this.todoHub.server.addTodo(todo);
            this.todoAdded.onNext(this.todos);
        };
        TodosService.prototype.markingCompleted = function (todoId) {
            var matchingTodo = _.find(this.todos, "id", todoId);
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