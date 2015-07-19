/// <reference path="../../Scripts/typings/hubs.d.ts" />

module IoCastsAlt {
	"use strict";

	export interface IAltService {
		addAction<T>(fn: (value: T) => void): Rx.ReplaySubject<T>;
		addObservable<T>(): Rx.ReplaySubject<T>;
	}

	class AltService {
		private actions: Array<any>;
		private observables: Array<any>;

		constructor() {
			this.actions = [];
			this.observables = [];
		}

		addAction<T>(fn: (value: T) => void): Rx.ReplaySubject<T> {
			var sub = new Rx.ReplaySubject<T>(1);
			sub.subscribe(fn);
			this.actions.push(sub);
			return sub;
		}

		addObservable<T>(): Rx.ReplaySubject<T> {
			var sub = new Rx.ReplaySubject<T>(1);
			this.actions.push(sub);
			return sub;
		}
	}

	angular.module("iocasts.alt")
		.service("$alt", AltService);
}