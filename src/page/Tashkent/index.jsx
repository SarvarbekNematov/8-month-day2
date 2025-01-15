import React, { useEffect, useState } from "react";
import axios from "axios";

const Tashkent = () => {
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
      {weather && (
        <div>
          <h2 className="text-center text-[40px] mb-[50px] mt-[50px]">{weather.location.name}, {weather.location.country}</h2>
          <div className="flex gap-[30px] justify-center">
            {weather.forecast.forecastday.map((day) => (
              <div key={day.date} className="border rounded-[8px] p-[20px] bg-blue-500 text-white"
              >
                <h4 className="text-[25px] text-center">{day.date}</h4>
                <img className="mx-auto" src={day.day.condition.icon} alt={day.day.condition.text} />
                <p className="text-center text-[20px] mb-[20px]">{day.day.condition.text}</p>
                <p className="mb-[10px]">O'rtacha harorat: {day.day.avgtemp_c}°C</p>
                <p>Maks: {day.day.maxtemp_c}°C, Min: {day.day.mintemp_c}°C</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tashkent;
