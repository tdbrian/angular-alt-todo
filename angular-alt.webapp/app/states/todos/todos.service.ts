/// <reference path="../../../scripts/typings/lodash/lodash.d.ts" />

module Todo {
	"use strict";

	export class TodosService {
		static $inject = ["$alt", "$hub"];

		// Hub references
		private todoHub: TodosHub;

		// Cache
		private todos: TodoDto[];

		// Observables
		todoAdded: Rx.ReplaySubject<TodoDto[]>;
		completedMarked: Rx.ReplaySubject<TodoDto[]>;
		todosReady: Rx.ReplaySubject<TodoDto[]>;

		// Constructor
		constructor(private $alt: IoCastsAlt.IAltService, private $hub: IoCastsAlt.IHubService) {
			this.todoHub = $hub.hubs.todosHub;

			// Create observables
			this.todoAdded = $alt.addObservable<TodoDto[]>();
			this.completedMarked = $alt.addObservable<TodoDto[]>();
			this.todosReady = $alt.addObservable<TodoDto[]>();

			// Catch push observables 
			this.todoHub.client.todoAdded = this.addTodo;
			this.todoHub.client.itemMarkedComplete = this.markCompleted;
		}

		// Data Requests
		// -------------------------

		getTodos(refresh: boolean = false): void {
			if (_.isEmpty(this.todos) || refresh) {
				this.todoHub.server.getTodos().then((todos) => {
					this.todos = todos;
					console.log("got new todos");
					console.log(todos);
				});
				this.todosReady.onNext(this.todos);
			} else {
				this.todosReady.onNext(this.todos);
				console.log("got existing todos");
			}
		}

		// Update on actions
		// -------------------------

		addTodo(todo: TodoDto): void {
			this.todos.push(todo);
			this.todoHub.server.addTodo(todo);
			this.todoAdded.onNext(this.todos);
		}

		markCompleted(todoId: string): void {
			var matchingTodo = _.find(this.todos, "Id", todoId);
			this.todoHub.server.markComplete(matchingTodo.Id);
			this.completedMarked.onNext(this.todos);
		}
	}
}

angular.module("todo-app")
	.service("TodosService", Todo.TodosService);