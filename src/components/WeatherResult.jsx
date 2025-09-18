export default function WeatherResult({ data, status }) {
  if (status === "loading") {
    return <p>Loading...</p>;
  } else if (status === "idle") {
    return <p>Type a city name to see the weather data</p>;
  } else {
    console.log(data.weather[0]);
    return (
      <div>
        <h2>{data.name}</h2>
        <p>
          Temperature: <b>{Math.round(data.main.temp)}°C</b>
        </p>
        <p>
          Feels like: <b>{Math.round(data.main.feels_like)}°C</b>
        </p>
        <p>
          Condition: <b>{data.weather[0].description}</b>
        </p>

        <p>
          Wind: <b>{data.wind.speed}</b>
        </p>
      </div>
    );
  }
}
