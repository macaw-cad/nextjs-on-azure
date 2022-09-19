using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Configuration;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddReverseProxy().LoadFromConfig(builder.Configuration.GetSection("ReverseProxy"));
var app = builder.Build();
var nextMount = builder.Configuration.GetValue<string>("NextMount");

app.UseStaticFiles(new StaticFileOptions {
    
    FileProvider = new PhysicalFileProvider(nextMount),    
    RequestPath = "/_next"
});

app.UseRouting();

app.MapReverseProxy();

app.Run();