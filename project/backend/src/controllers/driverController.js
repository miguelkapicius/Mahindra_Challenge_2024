import { Driver } from "../models/driverModel.js";

export const getDrivers = async (req, res) => {
    const drivers = await Driver.find();
    return res.send(drivers);
};

export const createDriver = async (req, res) => {
    const driver = new Driver({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        nationality: req.body.nationality,
        image: req.body.image,
        wins: req.body.wins,
        podiums: req.body.podiums,
        points: req.body.points,
        team: req.body.team,
    });
    await driver.save().then(() => res.send("Driver Created"));
};

export const updateDriver = async (req, res) => {
    await Driver.findByIdAndUpdate(req.params.id, {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        nationality: req.body.nationality,
        image: req.body.image,
        wins: req.body.wins,
        podiums: req.body.podiums,
        points: req.body.points,
        team: req.body.team,
    });
    return res.send("Driver Updated!");
};

export const deleteDriver = async (req, res) => {
    await Driver.findByIdAndDelete(req.params.id);
    return res.send("Driver Deleted!");
};
