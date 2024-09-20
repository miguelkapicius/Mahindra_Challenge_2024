import mongoose from "mongoose";

export const seasonSchema = new mongoose.Schema({
    season: Number,
    yearstart: Date,
    yearend: Date,
    url: String,
});

export const Season = mongoose.model("Season", seasonSchema);
