
using System;
using System.Collections.Generic;

namespace AngularAltTodo.Todo
{
	public class TodoManager
	{
		private readonly TodoStore _todoStore;

		public TodoManager(TodoStore todoStore)
		{
			_todoStore = todoStore;
		}

		public List<Todo> GetTodos()
		{
			return _todoStore.GetTodos().Result;
		}

		public void AddTodo(TodoDto todo)
		{
			_todoStore.AddNewTodo(TodoDto.ToTodo(todo));
		}

		public void MarkComplete(string todoId)
		{
			var todoGuid = Guid.Parse(todoId);
			_todoStore.MarkCompleted(todoGuid);
		}

	}

}
