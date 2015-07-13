/// <reference path="../../../scripts/typings/lodash/lodash.d.ts" />

module Todo {
	"use strict";

	export class TodosService {
		static $inject = ["$alt", "$hub"];

		// Hub references
		private todoHub: TodosHubServer;
		private todoPushes: ITodosHubClient;

		// Cache
		private todos: TodoDto[];

		// Observables
		todoAdded: Rx.ReplaySubject<TodoDto[]>;
		completedMarked: Rx.ReplaySubject<TodoDto[]>;

		// Constructor
		constructor(private $alt: any, private $hub: IoCastsAlt.IHubService) {

			debugger;

			// Gets signalR hubs
			this.todoHub = $hub.hubs.todosHub.server;
			this.todoPushes = $hub.hubs.todosHub.client;

			// Catches actions
			this.todoAdded = $alt.addAction(this.addTodo);
			this.completedMarked = $alt.addAction(this.markCompleted);

			// Catches push events
			this.todoPushes.todoAdded = this.addTodo;
			this.todoPushes.itemMarkedComplete = this.markCompleted;
		}

		// React to store actions
		// -------------------------

		private addTodo(todo: TodoDto) {
			this.todos.push(todo);
			this.todoAdded.onNext(this.todos);
		}

		private markCompleted(todoId: string) {
			var matchingTodo = _.find(this.todos, "id", todoId);
			this.todoHub.markComplete(matchingTodo.Id);
			this.completedMarked.onNext(this.todos);
		}

	}

	angular.module("todo-app")
		.service("TodosService", TodosService);
}