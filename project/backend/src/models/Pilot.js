const mongoose = require("mongoose");

// Esquema de dados dos pilotos para o banco de dados

const pilotSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    team: {
        type: String,
        required: true,
        ref: "Team",
    },
    countryFlag: { type: String, required: true },
    countryName: { type: String, required: true },
    image_url: { type: String, required: true },
    price: { type: Number, required: true },
    position: { type: Number, required: true },
    points: { type: Number, required: true },
    wins: { type: Number, required: true },
});

module.exports = mongoose.model("Pilot", pilotSchema);
