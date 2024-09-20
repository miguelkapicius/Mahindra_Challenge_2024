import mongoose from "mongoose";

export const driverSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    nationality: String,
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
        required: true,
    },
});

export const Driver = mongoose.model("Driver", driverSchema);
