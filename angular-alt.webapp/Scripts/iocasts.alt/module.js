/// <reference path="../../Scripts/typings/hubs.d.ts" />
angular.module("iocasts.alt", []).run(function () {
    var todoHub = $.connection.todosHub;
    $.connection.hub.logging = true;
    $.connection.hub.start().done(function () {
        todoHub.server.getTodos().then(function (val) {
            console.log(val);
            debugger;
        });
    });
});
//# sourceMappingURL=module.js.map