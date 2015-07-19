 module Todo {
	"use strict";

	export class TodoController {
		static $inject = ["TodosService"];

		todos: TodoDto[];

		constructor(private todosService: TodosService) {

			// Listen for updates
			todosService.todoAdded.subscribe(this.setTodos);
			todosService.completedMarked.subscribe(this.setTodos);
			todosService.todosReady.subscribe(this.setTodos);

			// Request initial data
			todosService.getTodos();
		}

		// On view data updates
		// -------------------------

		setTodos = (todos: TodoDto[]) => {
			this.todos = todos;
		}

		// On view actions
		// -------------------------

		addTodo(todo: TodoDto) {
			this.todosService.addTodo(todo);
		}

		markComplete(todo: TodoDto) {
			this.todosService.markCompleted(todo.Id);
		}
	}

	angular.module("todo-app")
		.controller("TodoController", TodoController);
}