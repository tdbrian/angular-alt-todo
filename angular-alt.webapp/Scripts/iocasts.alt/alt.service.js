/// <reference path="../../Scripts/typings/hubs.d.ts" />
var IoCastsAlt;
(function (IoCastsAlt) {
    "use strict";
    var AltService = (function () {
        function AltService() {
        }
        AltService.prototype.addAction = function (fn) {
            var sub = new Rx.ReplaySubject(1);
            sub.subscribe(fn);
            return sub;
        };
        return AltService;
    })();
    angular.module("iocasts.alt").service("$alt", AltService);
})(IoCastsAlt || (IoCastsAlt = {}));
//# sourceMappingURL=alt.service.js.map