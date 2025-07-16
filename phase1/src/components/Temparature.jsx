import React, { useState, useEffect } from 'react';

const Temparature = () => {
  const [cityData, setCityData] = useState(null);
  const [search, setSearch] = useState("London");

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f1059086a88665edfe91fe0bbd4c4b46&units=metric`;
        const response = await fetch(url);
        const resJson = await response.json();
        if (resJson.cod === 200) {
          setCityData(resJson); // Store full response
        } else {
          setCityData(null);
        }
      } catch (error) {
        console.error("API fetch failed", error);
        setCityData(null);
      }
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <h1 className='heading'>Weather</h1>

      <div className="container">
        {/* Left Panel: Degree */}
        <div className="degree">
          {cityData && cityData.main ? (
            <>
              <p className='temp' style={{ color: 'black' }}>{cityData.main.temp} °C</p>
              <p className='city' style={{ color: 'black' }}>{cityData.name}</p>
            </>
          ) : (
            <p className='temp' style={{ fontSize: '2rem', paddingTop: '45%', paddingLeft: '10%' }}>No data</p>
          )}
        </div>

        {/* Right Panel: Search + Details */}
        <div className="search">
          <input
            className='search1'
            type="search"
            placeholder='Search another city'
            onChange={(event) => setSearch(event.target.value)}
          />
          <div className="example">
            <p onClick={() => setSearch("Delhi")}>Delhi</p>
            <p onClick={() => setSearch("Mumbai")}>Mumbai</p>
            <p onClick={() => setSearch("Karachi")}>Karachi</p>
            <p onClick={() => setSearch("Oslo")}>Oslo</p>
          </div>
          <hr />
          {cityData && cityData.main ? (
            <div className="climate">
              <p>Weather Details</p>
              <p>Pressure: {cityData.main.pressure} hPa</p>
              <p>Humidity: {cityData.main.humidity}%</p>
              <p>Max Temp: {cityData.main.temp_max} °C</p>
              <p>Min Temp: {cityData.main.temp_min} °C</p>
            </div>
          ) : (
            <p style={{ color: "white", marginTop: "2rem" }}>No data found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Temparature;
