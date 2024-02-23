const express = require("express");
const router = express.Router();
const weatherController = require("../services/weatherController");

router.post("/weather", async (req, res) => {
    try {
        const cities = req.body.data;
        const weatherData = await weatherController.fetchWeatherData(cities);
        res.status(200).json({ weather: weatherData });
    } catch (err) {
        console.error("Error processing request:", err);
        res.status(500).json({ error: true, message: "Something Went Wrong" });
    }
});

module.exports = router;
