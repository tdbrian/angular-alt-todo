using System;

namespace AngularAltTodo.Todo
{
	public class Todo
	{
		public Guid Id { get; set; }
		public string Title { get; set; }
		public bool Completed { get; set; }

		public static TodoDto ToTodoDto(Todo todo)
		{
			return new TodoDto()
			{
				Id = todo.Id.ToString(),
				Title = todo.Title,
				Completed = todo.Completed
			};
		}
	}
}
