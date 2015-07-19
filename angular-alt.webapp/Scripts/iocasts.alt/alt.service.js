/// <reference path="../../Scripts/typings/hubs.d.ts" />
var IoCastsAlt;
(function (IoCastsAlt) {
    "use strict";
    var AltService = (function () {
        function AltService() {
            this.actions = [];
            this.observables = [];
        }
        AltService.prototype.addAction = function (fn) {
            var sub = new Rx.ReplaySubject(1);
            sub.subscribe(fn);
            this.actions.push(sub);
            return sub;
        };
        AltService.prototype.addObservable = function () {
            var sub = new Rx.ReplaySubject(1);
            this.actions.push(sub);
            return sub;
        };
        return AltService;
    })();
    angular.module("iocasts.alt").service("$alt", AltService);
})(IoCastsAlt || (IoCastsAlt = {}));
//# sourceMappingURL=alt.service.js.map