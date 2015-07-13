/// <reference path="../../Scripts/typings/hubs.d.ts" />

module IoCastsAlt {
	"use strict";

	export interface IHubService {
		hubs: SignalR;
	}

	class HubService {
		hubs: SignalR;

		constructor() {
			this.hubs = $.connection.hub;
			debugger;
		}

	}

	angular.module("iocasts.alt")
		.service("$hub", HubService);
}