/// <reference path="../../Scripts/typings/hubs.d.ts" />

module IoCastsAlt {
	"use strict";

	export interface IHubService {
		hubs: SignalR;
	}

	export class HubService implements IHubService {
		static $inject = [];
		hubs: SignalR;

		constructor() {
			this.hubs = $.connection;
		}
	}
}

angular.module("iocasts.alt")
	.service("$hub", IoCastsAlt.HubService);