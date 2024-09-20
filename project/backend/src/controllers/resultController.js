import { Result } from "../models/resultModel.js";

export const getResults = async (req, res) => {
    const results = await Result.find();
    return res.send(results);
};

export const createResult = async (req, res) => {
    const result = new Result({
        seasonId: req.body.seasonId,
        raceId: req.body.raceId,
        teamId: req.body.teamId,
        driverId: req.body.driverId,
        laps: req.body.laps,
        pos: req.body.pos,
        time: req.body.time,
        km: req.body.km,
        best: req.body.best,
        lap: req.body.lap,
    });
    await result.save().then(() => res.send("Result Created"));
};

export const updateResult = async (req, res) => {
    await Result.findByIdAndUpdate(req.params.id, {
        seasonId: req.body.seasonId,
        raceId: req.body.raceId,
        teamId: req.body.teamId,
        driverId: req.body.driverId,
        laps: req.body.laps,
        pos: req.body.pos,
        time: req.body.time,
        km: req.body.km,
        best: req.body.best,
        lap: req.body.lap,
    });
    return res.send("Result Updated!");
};

export const deleteResult = async (req, res) => {
    await Result.findByIdAndDelete(req.params.id);
    return res.send("Result Deleted!");
};
