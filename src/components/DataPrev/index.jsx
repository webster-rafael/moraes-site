"use client";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

export function DataPrevisão() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);
  const [isDay, setIsDay] = useState(false);
  const apiKey = "be9d251615ea0c87acfb716257ea4804";
  const [isActive, setIsActive] = useState(false);


  let getWeather = async (lat, long) => {
    try {
      let res = await axios.get(
        "http://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            lat: lat,
            lon: long,
            appid: apiKey,
            lang: "pt",
            units: "metric",
          },
        }
      );
      setWeather(res.data);
    } catch (error) {
      console.error("Erro ao obter dados meteorológicos:", error);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });

    // Verifica se é dia ou noite a cada minuto
    const interval = setInterval(() => {
      const now = new Date();
      const sunrise = new Date(weather.sys.sunrise * 1000);
      const sunset = new Date(weather.sys.sunset * 1000);
      setIsDay(now > sunrise && now < sunset);
    }, 60000); // Verifica a cada minuto

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [weather]);

  const getWeatherIcon = (weatherCode) => {
    if (isDay) {
      switch (weatherCode) {
        case "Clear":
          return "☀️";
        case "Clouds":
          return "☁️";
        case "Rain":
          return "🌧️";
        default:
          return "☀️";
      }
    } else {
      return "🌙";
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  if (location === false) {
    return <>Habilite sua localização</>;
  } else if (weather === false) {
    return <>Carregando o clima...</>;
  } else {
    const weatherIcon = getWeatherIcon(weather.weather[0].main);
    const weatherDescription = capitalizeFirstLetter(
      weather.weather[0].description
    );

    const modalWeather = () => {
        setIsActive(!isActive);
    };

    return (
      <div onClick={modalWeather} className={`absolute top-32 ${isActive ? '-left-[14rem] md:-left-[19rem] transition-transform' : 'left-2 transition-transform'} transition duration-4000 flex flex-col bg-slate-950 dark:bg-slate-100 text-white dark:text-slate-950 h-[6.5rem] w-[15rem] md:w-[20rem] md:h-[11rem] font-jakarta py-1 md:py-4 px-4 rounded-lg shadow-lg`}>
        <div className='flex w-full justify-between'>
          <div className='text-xl md:text-6xl'>{weatherIcon}</div>
          <div className='flex justify-center gap-1 md:gap-0 md:flex-col text-center md:w-32'>
            <span className='md:text-5xl font-semibold'>
              {Math.round(weather.main.temp)}°
            </span>
            <h3 className='flex text-center w-full mx-auto justify-center text-sm text-ouro'>
              ({weatherDescription})
            </h3>
          </div>
        </div>
        <ul className='mt-4'>
          <li className='opacity-85 text-xs md:text-sm'>
            Temperatura Mínima: {weather.main.temp_min}°
          </li>
          <li className='opacity-85 text-xs md:text-sm'>
            Temperatura Máxima: {weather.main.temp_max}°
          </li>
          <li className='opacity-85 text-xs md:text-sm'>
            Humidade: {weather.main.humidity}°
          </li>
        </ul>
      </div>
    );
  }
}
