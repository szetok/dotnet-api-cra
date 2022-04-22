using Xunit;
using DotnetApiCra.Services;

namespace DotnetApiCra.Tests.Services;

public class GetWeatherForecastTests
{
    [Fact]
    public void Get_ReturnsFiveElements()
    {
        var getWeatherForecast = new GetWeatherForecast();
        Assert.Equal(5, getWeatherForecast.Get().Count());
    }
}