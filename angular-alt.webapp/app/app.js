/// <reference path="../Scripts/typings/angular-ui-router/angular-ui-router.d.ts"/>
/// <reference path="../Scripts/typings/hubs.d.ts"/>
(function () {
    "use strict";
    var appName = "todo-app";
    angular.module(appName, [
        "ui.router",
        "iocasts.alt"
    ]);
    $.connection.hub.logging = true;
    $.connection.hub.start().done(function () {
        console.log($.connection.todosHub);
        angular.bootstrap(document, [appName]);
    }).fail(function () {
        console.error("Unable to connecto so signalR");
    });
    angular.module(appName).config(function ($stateProvider, $urlRouterProvider) {
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/todos");
        $stateProvider.state("todos", {
            url: "/todos",
            templateUrl: "/app/states/todos/todos.html"
        });
    });
})();
//# sourceMappingURL=app.js.map