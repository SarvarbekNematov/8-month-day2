import React, { useEffect, useState } from "react";
import axios from "axios";

const London = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const API_URL =
        "https://api.weatherapi.com/v1/forecast.json?key=e6907b7426bc4da585063158250201&q=New York&days=9&aqi=no&alerts=no";

      try {
        const response = await axios.get(API_URL);
        setWeather(response.data);
      } catch (err) {
        setError("Ma'lumot olishda xatolik yuz berdi!");
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {weather && (
        <div>
          <h2 className="text-center text-[40px] mb-[50px] mt-[50px]">{weather.location.name}, {weather.location.country}</h2>
          <div className="grid grid-cols-3 gap-5 p-[50px]">
            {weather.forecast.forecastday.map((day) => (
              <div key={day.date} className="border rounded-[8px] p-[20px] bg-blue-500 text-white"
              >
                <h4 className="text-[25px] text-center">{day.date}</h4>
                <img className="mx-auto" src={day.day.condition.icon} alt={day.day.condition.text} />
                <p className="text-center text-[20px] mb-[20px]">{day.day.condition.text}</p>
                <p className="mb-[10px] text-center">O'rtacha harorat: {day.day.avgtemp_c}°C</p>
                <p className="text-center">Maks: {day.day.maxtemp_c}°C, Min: {day.day.mintemp_c}°C</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default London;
