using DotnetApiCra.Services;

namespace DotnetApiCra.DependencyInjection;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddTransientServices(this IServiceCollection services)
    {
        services.AddTransient<IGetWeatherForecast, GetWeatherForecast>();
        return services;
    }
}
