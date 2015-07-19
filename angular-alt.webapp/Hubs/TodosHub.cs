using System.Collections.Generic;
using System.Linq;
using AngularAltTodo.Todo;
using Microsoft.AspNet.SignalR;

namespace AngularAltTodoWebapp.Hubs
{
	public class TodosHub : Hub<ITodosHubClient>
	{
		private readonly TodoManager _todoManager;

		public TodosHub(TodoManager todoManager)
		{
			_todoManager = todoManager;
		}

		public List<TodoDto> GetTodos()
		{
			return _todoManager.GetTodos()
				.Select(Todo.ToTodoDto)
				.ToList();
		}

		public void AddTodo(TodoDto todo)
		{
			Clients.Others.TodoAdded(todo);
		}

		public void MarkComplete(string todoId)
		{
			_todoManager.MarkComplete(todoId);
			Clients.Others.ItemMarkedComplete(todoId);
		}
	}

	public interface ITodosHubClient
	{
		void ItemMarkedComplete(string todoId);
		void TodoAdded(TodoDto todo);
	}
}