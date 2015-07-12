var Todo;
(function (Todo) {
    "use strict";
    var TodoStore = (function () {
        function TodoStore() {
            this.message = "asdf";
        }
        return TodoStore;
    })();
    Todo.TodoStore = TodoStore;
})(Todo || (Todo = {}));
angular.module("todo-app").service("TodoStore", Todo.TodoController);
//# sourceMappingURL=todo.store.js.map