import mongoose from "mongoose";

export const teamSchema = new mongoose.Schema({
    teamRef: String,
    name: String,
    nationality: String,
    logo: String,
    carImage: String,
    carModel: String,
    color: String,
    wins: Number,
    podiums: Number,
    races: Number,
    winsChart: [
        {
            win: Number,
            month: String,
        },
    ],
    podiumsChart: [
        {
            podium: Number,
            month: String,
        },
    ],
    pilots: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Driver",
        },
    ],
});

export const Team = mongoose.model("Team", teamSchema);
