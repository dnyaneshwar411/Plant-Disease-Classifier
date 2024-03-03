import { WeatherProvider } from "../Contexts/WeatherContext";
import Table from "../Components/Table";

// const KEY = "da3d480ead445b26365691da0c5ecda3";

const headings = ["Day", "Temprature", "Weather", "Wind", "Humidity", "Chance of Rain"]

export default function Weather() {
  return <WeatherProvider>
    <Table headings={headings} rows={[headings, ["india", "india", "india", "india", "india", "india"]]} />
  </WeatherProvider>
}

/*
 1.soil data
 2.current weather
 3.weather forecasting
 4.imagery
 5.data about crops
*/
