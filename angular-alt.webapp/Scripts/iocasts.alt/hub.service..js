/// <reference path="../../Scripts/typings/hubs.d.ts" />
var IoCastsAlt;
(function (IoCastsAlt) {
    "use strict";
    var HubService = (function () {
        function HubService($hub) {
            this.hubs = $hub.conn;
        }
        HubService.$inject = ["$hub"];
        return HubService;
    })();
    angular.module("iocasts.alt").service("$hub", HubService);
})(IoCastsAlt || (IoCastsAlt = {}));
//# sourceMappingURL=hub.service..js.map