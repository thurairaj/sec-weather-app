import { useState } from "react";

export default function WeatherSearch({ onSearch }) {
  const [city, setCity] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={city}
        placeholder={"Enter city name"}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
