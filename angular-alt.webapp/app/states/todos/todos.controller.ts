 module Todo {
	"use strict";

	export class TodoController {

		constructor(todoStore: TodoStore) {
			this.activate();
		}

		activate(): void {
		}

	}

}

 angular.module("todo-app")
	 .controller("TodoController", Todo.TodoController);