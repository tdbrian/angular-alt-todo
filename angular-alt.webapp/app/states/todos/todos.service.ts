/// <reference path="../../../scripts/typings/lodash/lodash.d.ts" />

module Todo {
	"use strict";

	export class TodosService {
		static $inject = ["$alt", "$hub"];

		// Hub references
		private todoHub: TodosHub;

		// Cache
		private todos: TodoDto[];

		// Actions
		addTodo: Rx.ReplaySubject<TodoDto>;
		markCompleted: Rx.ReplaySubject<string>;

		// Observables
		todoAdded: Rx.ReplaySubject<TodoDto[]>;
		completedMarked: Rx.ReplaySubject<TodoDto[]>;

		// Constructor
		constructor(private $alt: IoCastsAlt.IAltService, private $hub: IoCastsAlt.IHubService) {
			this.todoHub = $hub.hubs.todosHub;

			// Create Observables
			this.todoAdded = $alt.addObservable<TodoDto[]>();
			this.completedMarked = $alt.addObservable<TodoDto[]>();

			// Create actions
			this.addTodo = this.$alt.addAction<TodoDto>(this.addingTodo);
			this.markCompleted = this.$alt.addAction(this.markingCompleted);

			// Catch push events
			this.todoHub.client.todoAdded = this.addingTodo;
			this.todoHub.client.itemMarkedComplete = this.markingCompleted;
		}

		// Update on actions
		// -------------------------

		private addingTodo(todo: TodoDto): void {
			this.todos.push(todo);
			this.todoHub.server.addTodo(todo);
			this.todoAdded.onNext(this.todos);
		}

		private markingCompleted(todoId: string): void {
			var matchingTodo = _.find(this.todos, "id", todoId);
			this.todoHub.server.markComplete(matchingTodo.Id);
			this.completedMarked.onNext(this.todos);
		}
	}
}

angular.module("todo-app")
	.service("TodosService", Todo.TodosService);