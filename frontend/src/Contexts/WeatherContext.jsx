import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = function ({ children }) {
  const [location, setLocation] = useState([]);

  const success = pos => setLocation([pos.coords.latitude, pos.coords.longitude])

  const error = err => console.log(err)

  async function getLocation() {
    try {
      await navigator.geolocation.getCurrentPosition(success, error);
    } catch (error) {
      console.log(error)
    }
  }

  async function getWeatherInformation() {
    const coords = [18.456982883492042, 73.86761794281978];
    try {
      const res = await fetch(`api.openweathermap.org/data/2.5/forecast/daily?lat=${coords[0]}&lon=${coords[1]}&cnt=4&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}&mode=json`)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(function () {
  //   // getLocation();
  //   getWeatherInformation()
  //   return () => { }
  // }, []);

  return (<WeatherContext.Provider value={{ location }}>
    {children}
  </WeatherContext.Provider>)
};