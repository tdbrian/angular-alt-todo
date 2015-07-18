using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Driver;

namespace AngularAltTodo.Todo
{
	public class TodoStore
	{
		private readonly IMongoCollection<Todo> _collection;

		public TodoStore()
		{
			var client = new MongoClient("mongodb://localhost:27017");
			_collection = client.GetDatabase("AngularAltTodo").GetCollection<Todo>("Todo");
		}

		public async Task<List<Todo>> GetTodos()
		{
			return await _collection.Find(_ => true).ToListAsync();
		}

		public async void AddNewTodo(Todo todo)
		{
			await _collection.InsertOneAsync(todo);
		}

		public async void MarkCompleted(Guid todoId)
		{
			await _collection.FindOneAndUpdateAsync<Todo>(
				(x) => x.Id == todoId,
				Builders<Todo>.Update.Set(x => x.Completed, true)
			);
		}
	}

}
