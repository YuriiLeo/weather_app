const express = require("express");
const cors = require("cors");
const weatherRoutes = require("./src/routes/weatherRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/", weatherRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
