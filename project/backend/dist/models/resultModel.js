import mongoose from "mongoose";
export const resultSchema = new mongoose.Schema({
  seasonId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Season",
    required: true
  },
  raceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Race",
    required: true
  },
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    required: true
  },
  driverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Driver",
    required: true
  },
  laps: Number,
  pos: String,
  time: String,
  km: String,
  best: String,
  lap: Number
});
export const Result = mongoose.model("Result", resultSchema);