import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherApp = () => {
  const [weather, setWeather] = useState(null); // Ob-havo ma'lumotlari
  const [loading, setLoading] = useState(true); // Yuklash holati
  const [error, setError] = useState(null); // Xatolik

  useEffect(() => {
    const fetchWeatherData = async () => {
      const API_URL =
        "https://api.weatherapi.com/v1/forecast.json?key=c3a6dc4386cc49e7ba0155411242212&q=tashkent&days=14&aqi=yes&alerts=yes";

      try {
        const response = await axios.get(API_URL);
        setWeather(response.data); // API dan kelgan ma'lumotlarni holatga yozamiz
      } catch (err) {
        setError("Ma'lumot olishda xatolik yuz berdi!");
      } finally {
        setLoading(false); // Yuklash holatini o'chiramiz
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1 className="text-center text-[40px]">14 Kunlik Ob-Havo Prognozi</h1>
      {weather && (
        <div>
          <h2>{weather.location.name}, {weather.location.country}</h2>

          <h3>Kundalik Prognoz:</h3>
          <div className="flex gap-[30px] justify-center">
            {weather.forecast.forecastday.map((day) => (
              <div
                key={day.date}
                
                className="border rounded-[8px] p-[20px] "
              >
                <h4 className="text-[25px] text-center">{day.date}</h4>
                <img className="mx-auto" src={day.day.condition.icon} alt={day.day.condition.text} />
                <p className="text-center text-[20px] mb-[20px]">{day.day.condition.text}</p>
                <p>O'rtacha harorat: {day.day.avgtemp_c}°C</p>
                <p>Maks: {day.day.maxtemp_c}°C, Min: {day.day.mintemp_c}°C</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
