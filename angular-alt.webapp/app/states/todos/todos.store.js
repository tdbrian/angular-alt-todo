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
angular.module("todo-app").service("todoStore", Todo.TodoStore);
//# sourceMappingURL=todos.store.js.map