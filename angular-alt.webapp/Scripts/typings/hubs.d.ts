 /// <reference path="../typings/signalr/signalr.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />

////////////////////
// available hubs //
////////////////////
//#region available hubs

interface SignalR {

	/**
	  * The hub implemented by AngularAltTodoWebapp.Hubs.TodosHub
	  */
	todosHub : TodosHub;
}
//#endregion available hubs

///////////////////////
// Service Contracts //
///////////////////////
//#region service contracts

//#region TodosHub hub

interface TodosHub {
	
	/**
	  * This property lets you send messages to the TodosHub hub.
	  */
	server : TodosHubServer;

	/**
	  * The functions on this property should be replaced if you want to receive messages from the TodosHub hub.
	  */
	client : ITodosHubClient;
}

interface TodosHubServer {

	/** 
	  * Sends a "getTodos" message to the TodosHub hub.
	  * Contract Documentation: ---
	  * @return {JQueryPromise of TodoDto[]}
	  */
	getTodos() : JQueryPromise<TodoDto[]>

	/** 
	  * Sends a "addTodo" message to the TodosHub hub.
	  * Contract Documentation: ---
	  * @param todo {TodoDto} 
	  * @return {JQueryPromise of void}
	  */
	addTodo(todo : TodoDto) : JQueryPromise<void>

	/** 
	  * Sends a "markComplete" message to the TodosHub hub.
	  * Contract Documentation: ---
	  * @param todoId {string} 
	  * @return {JQueryPromise of void}
	  */
	markComplete(todoId : string) : JQueryPromise<void>
}

interface ITodosHubClient
{

	/**
	  * Set this function with a "function(todoId : string){}" to receive the "itemMarkedComplete" message from the TodosHub hub.
	  * Contract Documentation: ---
	  * @param todoId {string} 
	  * @return {void}
	  */
	itemMarkedComplete : (todoId : string) => void;

	/**
	  * Set this function with a "function(todo : TodoDto){}" to receive the "todoAdded" message from the TodosHub hub.
	  * Contract Documentation: ---
	  * @param todo {TodoDto} 
	  * @return {void}
	  */
	todoAdded : (todo : TodoDto) => void;
}

//#endregion TodosHub hub

//#endregion service contracts



////////////////////
// Data Contracts //
////////////////////
//#region data contracts


/**
  * Data contract for AngularAltTodo.Todo.TodoDto
  */
interface TodoDto {
	Id : string;
	Title : string;
	Completed : boolean;
}

//#endregion data contracts

