/// <reference path="../../Scripts/typings/hubs.d.ts" />
var IoCastsAlt;
(function (IoCastsAlt) {
    "use strict";
    var HubProvider = (function () {
        function HubProvider() {
        }
        HubProvider.prototype.hub = function (name, hub) {
            return this;
        };
        HubProvider.prototype.autoMap = function (conn) {
            if (conn === void 0) { conn = $.connection; }
            _.forOwn(conn, function (hub) {
            });
        };
        HubProvider.prototype.$get = function () {
            return this.hubs;
        };
        return HubProvider;
    })();
    angular.module("iocasts.alt").provider("$hub", HubProvider);
})(IoCastsAlt || (IoCastsAlt = {}));
//# sourceMappingURL=hubProvider.js.map