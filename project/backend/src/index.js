const express = require("express");
const mongoose = require("mongoose");
const pilotRoutes = require("./routes/pilotRoutes")

const PORT = 3000;
const app = express();

// Consegue ler JSON
app.use(express.json());

// Rota dos pilotos
app.use("/pilots", pilotRoutes)


app.listen(PORT, () => {
    mongoose.connect("mongodb://localhost:27017/");

    console.log(`Server is running on port ${PORT}`);
});
