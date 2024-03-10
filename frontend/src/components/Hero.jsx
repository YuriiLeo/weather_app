import PropTypes from "prop-types";
import { useState } from "react";
import Form from "./Form";
import WeatherDisplay from "./WeatherDisplay";
import ErrorMessage from "./ErrorMessage";

const Hero = () => {
  const [search, setSearch] = useState([]);
  const [status, setStatus] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchApi = async (city) => {
    setSearch([])
    setError("")
    setLoading(true)
    try {
      const url = "https://weather-app-backend-azure.vercel.app/api/weather";
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ data: city.split(",") }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // const url = `http://localhost:5000/api/weather/${city}`;
      // const response = await fetch(url);
      const resJson = await response.json();

      const cities = Object.keys(resJson.weather);

      const data = cities.map((city) => resJson.weather[city]);

      setStatus(true);
      setSearch(data);
      setLoading(false)
    } catch (error) {
      console.error(error);
      setLoading(false)
      setError("Enter the city name in English, use a comma to select multiple cities");
    }
  };

  return (
    <div className="py-20 h-screen bg-black px-2">
      <div>
        <h1 className="text-center text-white text-2xl font-extrabold">
          Weather App
        </h1>
      </div>
      <Form onSubmit={fetchApi} />
      {error && <ErrorMessage message={error} />}
      {loading && <div className="text-center">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>}
      {status ? <WeatherDisplay data={search} /> : null}
    </div>
  );
};

Hero.propTypes = {
  search: PropTypes.array,
  status: PropTypes.bool,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

export default Hero;

