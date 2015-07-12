using System;

namespace AngularAltTodo.Todo
{
	public class TodoDto
	{
		public string Id { get; set; }
		public string Title { get; set; }
		public bool Completed { get; set; }

		public static Todo ToTodo(TodoDto todoDto)
		{
			return new Todo()
			{
				Id = Guid.Parse(todoDto.Id),
				Title = todoDto.Title,
				Completed = todoDto.Completed
			};
		}
	}
}
