import React, { useState, useEffect } from 'react';

const Usefetchapi = () => {
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const lat = 28.6139; // Example: New Delhi
    const lon = 77.2090;
    const apiKey = 'f1059086a88665edfe91fe0bbd4c4b46'; // use your API key

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      setWeather(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <>
      <h1>Weather Cast</h1>
      {weather ? (
        <div>
          <p>Location: {weather.name}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </>
  );
};

export default Usefetchapi;
