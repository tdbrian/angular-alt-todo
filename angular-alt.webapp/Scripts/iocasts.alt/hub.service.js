/// <reference path="../../Scripts/typings/hubs.d.ts" />
var IoCastsAlt;
(function (IoCastsAlt) {
    "use strict";
    var HubService = (function () {
        function HubService() {
            this.hubs = $.connection;
        }
        HubService.$inject = [];
        return HubService;
    })();
    IoCastsAlt.HubService = HubService;
})(IoCastsAlt || (IoCastsAlt = {}));
angular.module("iocasts.alt").service("$hub", IoCastsAlt.HubService);
//# sourceMappingURL=hub.service.js.map