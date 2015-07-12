/// <reference path="../Scripts/typings/angular-ui-router/angular-ui-router.d.ts"/>
(function () {
    "use strict";
    angular.module("todo-app", [
        "ui.router"
    ]).config(function ($stateProvider, $urlRouterProvider) {
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/todos");
        $stateProvider.state("todos", {
            url: "/todos",
            templateUrl: "/app/states/todos/todos.html"
        });
    });
})();
//# sourceMappingURL=app.js.map