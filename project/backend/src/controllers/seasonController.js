import { Season } from "../models/seasonModel.js";

export const getSeasons = async (req, res) => {
    const seasons = await Season.find();
    return res.send(seasons);
};

export const createSeason = async (req, res) => {
    const season = new Season({
        season: req.body.season,
        yearstart: req.body.yearstart,
        yearend: req.body.yearend,
        url: req.body.url,
    });
    await season.save().then(() => res.send("Season Created"));
};

export const updateSeason = async (req, res) => {
    await Season.findByIdAndUpdate(req.params.id, {
        season: req.body.season,
        yearstart: req.body.yearstart,
        yearend: req.body.yearend,
        url: req.body.url,
    });
    return res.send("Season Updated!");
};

export const deleteSeason = async (req, res) => {
    await Season.findByIdAndDelete(req.params.id);
    return res.send("Season Deleted!");
};
