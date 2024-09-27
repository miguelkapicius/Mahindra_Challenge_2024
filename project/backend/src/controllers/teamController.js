import { Team } from "../models/teamModel.js";

export const getTeams = async (req, res) => {
    const teams = await Team.find().populate("");
    return res.send(teams);
};

export const createTeam = async (req, res) => {
    const team = new Team({
        teamRef: req.body.teamRef,
        name: req.body.name,
        nationality: req.body.nationality,
        logo: req.body.logo,
        carImage: req.body.carImage,
        carModel: req.body.carModel,
        color: req.body.color,
        wins: req.body.wins,
        podiums: req.body.podiums,
        races: req.body.races,
        winsChart: req.body.winsChart,
        podiumsChart: req.body.podiumsChart,
    });
    await team.save().then(() => res.send("Team Created"));
};

export const updateTeam = async (req, res) => {
    await Team.findByIdAndUpdate(req.params.id, {
        teamRef: req.body.teamRef,
        name: req.body.name,
        nationality: req.body.nationality,
        logo: req.body.logo,
        carImage: req.body.carImage,
        carModel: req.body.carModel,
        color: req.body.color,
        wins: req.body.wins,
        podiums: req.body.podiums,
        races: req.body.races,
        winsChart: req.body.winsChart,
        podiumsChart: req.body.podiumsChart,
    });
    return res.send("Team Updated!");
};

export const deleteTeam = async (req, res) => {
    await Team.findByIdAndDelete(req.params.id);
    return res.send("Driver Deleted!");
};
