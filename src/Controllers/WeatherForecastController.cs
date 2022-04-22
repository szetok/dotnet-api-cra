using Microsoft.AspNetCore.Mvc;
using DotnetApiCra.Models;
using DotnetApiCra.Services;

namespace DotnetApiCra.Controllers;

[ApiController]
[Route("api/[controller]")]
public class WeatherForecastController : ControllerBase
{
    private readonly IGetWeatherForecast _getWeatherForecast;

    public WeatherForecastController(IGetWeatherForecast getWeatherForecast)
        => _getWeatherForecast = getWeatherForecast;

    [HttpGet]
    public IEnumerable<WeatherForecast> Get() => _getWeatherForecast.Get();
}
