import mongoose from "mongoose";

export const teamSchema = new mongoose.Schema({
    teamRef: String,
    name: String,
    nationality: String,
});

export const Team = mongoose.model("Team", teamSchema);
