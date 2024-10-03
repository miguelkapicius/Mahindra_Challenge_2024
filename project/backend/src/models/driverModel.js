import mongoose from "mongoose";

export const driverSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    nationality: String,
    image: String,
    wins: Number,
    podiums: Number,
    points: Number,
    price: Number,
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
    },
});

export const Driver = mongoose.model("Driver", driverSchema);
