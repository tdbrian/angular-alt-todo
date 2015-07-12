module Todo {
	"use strict";

	export class TodoStore {
		message = "asdf";

		constructor() {
		}
	}

}

angular.module("todo-app")
	.service("todoStore", Todo.TodoStore);