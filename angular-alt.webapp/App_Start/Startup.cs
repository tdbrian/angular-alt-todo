
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(AngularAltTodoWebapp.Startup))]
namespace AngularAltTodoWebapp
{
	public class Startup
	{

		public void Configuration(IAppBuilder app)
		{
			app.MapSignalR();
		}

	}
}