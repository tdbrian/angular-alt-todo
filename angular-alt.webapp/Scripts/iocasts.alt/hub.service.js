/// <reference path="../../Scripts/typings/hubs.d.ts" />
var IoCastsAlt;
(function (IoCastsAlt) {
    "use strict";
    var HubService = (function () {
        function HubService() {
            this.hubs = $.connection.hub;
            debugger;
        }
        return HubService;
    })();
    angular.module("iocasts.alt").service("$hub", HubService);
})(IoCastsAlt || (IoCastsAlt = {}));
//# sourceMappingURL=hub.service.js.map