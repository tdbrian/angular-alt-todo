 module Todo {
	"use strict";

	export class TodoController {
		static $inject = ["TodosService"];

		todos: TodoDto[];

		constructor(private todosService: TodosService) {
			todosService.todoAdded.subscribe(this.setTodos);
			todosService.completedMarked.subscribe(this.setTodos);
		}

		setTodos = (todos: TodoDto[]) => {
			this.todos = todos;
		}

		addTodo(todo: TodoDto) {
		}

		markComplete(todo: TodoDto) {
			
		}
	}

	angular.module("todo-app")
		.controller("TodoController", TodoController);
}