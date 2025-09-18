import WeatherSearch from "./components/WeatherSearch.jsx";
import WeatherResult from "./components/WeatherResult.jsx";
import { useState } from "react";
import { getWeatherData } from "./lib/weatherAPI.js";

function App() {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState({});

  async function handleSearch(city) {
    setStatus("loading");
    setData({});

    const result = await getWeatherData(city);
    setData(result);
    setStatus("success");
  }

  return (
    <div>
      <h1>Axios Weather</h1>
      <WeatherSearch onSearch={handleSearch}></WeatherSearch>
      <WeatherResult data={data} status={status}></WeatherResult>
    </div>
  );
}

export default App;
