/// <reference path="../../Scripts/typings/hubs.d.ts" />
var IoCastsAlt;
(function (IoCastsAlt) {
    "use strict";
    var Hub = (function () {
        function Hub() {
        }
        return Hub;
    })();
    IoCastsAlt.Hub = Hub;
    angular.module("iocasts.alt").service("$hub", Hub);
})(IoCastsAlt || (IoCastsAlt = {}));
//# sourceMappingURL=hub.js.map