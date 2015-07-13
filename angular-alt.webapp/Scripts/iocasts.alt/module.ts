/// <reference path="../../Scripts/typings/hubs.d.ts" />

angular.module("iocasts.alt", [])
	.run(() => {
		
		var todoHub = $.connection.todosHub;

		$.connection.hub.logging = true;
		$.connection.hub.start().done(() => {

			todoHub.server.getTodos().then((val) => {
				console.log(val);
				debugger;
			});

		});

	})
