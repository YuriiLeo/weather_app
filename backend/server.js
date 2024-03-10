const express = require("express");
const cors = require("cors");
require('dotenv').config();

const weatherRoutes = require("./src/routes/weatherRoutes");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.use(express.json());

app.get("/api", (req, res) => {
    res.status(200).json({
        status: "Online",
    });
});

app.use("/api", weatherRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
