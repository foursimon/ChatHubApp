
namespace server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddAuthorization();

            builder.Services.AddOpenApi();
            builder.Services.AddSignalR();
            builder.Services.AddCors(policy =>
            {
                policy.AddDefaultPolicy(opt =>
                {
                    opt.WithOrigins("http://localhost:5173");
					opt.AllowAnyHeader();
                    opt.AllowCredentials();
                    opt.AllowAnyMethod();
                });
            });


            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.MapOpenApi();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();
            app.UseCors();
            app.MapHub<ChatHub>("/chat");
            app.Run();
        }
    }
}
