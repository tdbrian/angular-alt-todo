using System.Web.Http;
using AngularAltTodo.Todo;
using Ninject;

namespace AngularAltTodoWebapp
{
	public class WebApiApplication : System.Web.HttpApplication
	{
		protected void Application_Start()
		{
			GlobalConfiguration.Configure(WebApiConfig.Register);
	
			var kernal = new StandardKernel();

			kernal.Bind<TodoStore>().ToSelf().InSingletonScope();
		}
	}
}
