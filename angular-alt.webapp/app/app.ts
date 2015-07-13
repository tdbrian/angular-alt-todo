/// <reference path="../Scripts/typings/angular-ui-router/angular-ui-router.d.ts"/>
/// <reference path="../Scripts/typings/hubs.d.ts"/>

((): void => {
	"use strict";

	angular.module("todo-app", [
		"ui.router",
		"iocasts.alt"
	]).config((
			$stateProvider: angular.ui.IStateProvider,
			$urlRouterProvider: angular.ui.IUrlRouterProvider
		) => {

		// For any unmatched url, redirect to /state1
		$urlRouterProvider.otherwise("/todos");

		$stateProvider
			.state("todos", {
				url: "/todos",
				templateUrl: "/app/states/todos/todos.html"
			});

	});

})();
