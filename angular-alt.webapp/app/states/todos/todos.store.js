/// <reference path="../../../scripts/typings/lodash/lodash.d.ts" />
var Todo;
(function (Todo) {
    "use strict";
    var TodosService = (function () {
        // Constructor
        function TodosService($alt, $hub) {
            this.$alt = $alt;
            this.$hub = $hub;
            // Gets signalR hubs
            this.todoHub = $hub.hubs.todosHub.server;
            this.todoPushes = $hub.hubs.todosHub.client;
            // Catches actions
            this.todoAdded = $alt.addAction(this.addTodo);
            this.completedMarked = $alt.addAction(this.markCompleted);
            // Catches push events
            this.todoPushes.todoAdded = this.addTodo;
            this.todoPushes.itemMarkedComplete = this.markCompleted;
        }
        // React to store actions
        // -------------------------
        TodosService.prototype.addTodo = function (todo) {
            this.todos.push(todo);
            this.todoAdded.onNext(this.todos);
        };
        TodosService.prototype.markCompleted = function (todoId) {
            var matchingTodo = _.find(this.todos, "id", todoId);
            this.todoHub.markComplete(matchingTodo.Id);
            this.completedMarked.onNext(this.todos);
        };
        return TodosService;
    })();
    Todo.TodosService = TodosService;
})(Todo || (Todo = {}));
angular.module("todo-app").service("todosService", Todo.TodosService);
//# sourceMappingURL=todos.store.js.map