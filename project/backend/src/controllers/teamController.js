import { Team } from "../models/teamModel.js";

export const getTeams = async (req, res) => {
    const teams = await Team.find();
    return res.send(teams);
};

export const createTeam = async (req, res) => {
    const team = new Team({
        teamRef: req.body.teamRef,
        name: req.body.name,
        nationality: req.body.nationality,
    });
    await team.save().then(() => res.send("Team Created"));
};

export const updateTeam = async (req, res) => {
    await Team.findByIdAndUpdate(req.params.id, {
        teamRef: req.body.teamRef,
        name: req.body.name,
        nationality: req.body.nationality,
    });
    return res.send("Team Updated!");
};

export const deleteTeam = async (req, res) => {
    await Team.findByIdAndDelete(req.params.id);
    return res.send("Driver Deleted!");
};
