/// <reference path="../../Scripts/typings/hubs.d.ts" />

module IoCastsAlt {
	"use strict";


	class AltService {

		addAction<T>(fn: (value: T) => void): Rx.ReplaySubject<T> {
			var sub = new Rx.ReplaySubject<T>(1);
			sub.subscribe(fn);
			return sub;
		}

	}

	angular.module("iocasts.alt")
		.service("$alt", AltService);
}