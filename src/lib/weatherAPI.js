import axios from "axios";

const client = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  timeout: 10000,
});

// A ---- send query letter ( postal network ) TCP/IP ----> B
// B --send information letter -> A

// A = FrontEnd, B = openweathermap

export async function getWeatherData(city) {
  console.log(city);
  const apiKey = import.meta.env.VITE_OWN_WEATHER_API;
  if (!apiKey) throw new Error("No API key provided");
  console.log(apiKey);

  const res = await client.get("/weather", {
    params: { q: city, appid: apiKey, units: "metric" },
  });

  console.log(res);

  return res.data;
}
