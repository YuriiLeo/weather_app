const axios = require("axios");
require('dotenv').config();

const API_KEY = process.env.API_KEY;

const fetchWeatherData = async (cities) => {

    const weatherData = [];

    const promises = cities.map(async (city) => {
        try {
            const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`);
            weatherData.push(response.data);
        } catch (error) {
            console.error(`Error fetching data for city ${city}: ${error.message}`);
            weatherData(null);
        }
    });

    await Promise.all(promises);
    return weatherData;
};

module.exports = { fetchWeatherData };
