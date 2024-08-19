const Pilot = require("../models/Pilot");

//Manipulação dos dados dos pilotos / CRUD

// CREATE
exports.createPilot = async (req, res) => {
    try {
        const pilot = new Pilot(req.body);

        await pilot.save();
        res.status(201).send(pilot);
    } catch (error) {
        res.status(400).send(error);
    }
};

// READ
exports.getAllPilots = async (req, res) => {
    try {
        const pilots = await Pilot.find();
        res.send(pilots);
    } catch (error) {
        res.status(500).send(error);
    }
};

//UPDATE
exports.updatePilot = async (req, res) => {
    try {
        const pilot = await Pilot.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!pilot) {
            res.status(404).send({ message: "Pilot not found" });
        }
        res.send(pilot);
    } catch (error) {
        res.status(400).send(error);
    }
};

//DELETE
exports.deletePilot = async (req, res) => {
    try {
        const pilot = await Pilot.findByIdAndDelete(req.params.id);
        if (!pilot) {
            res.status(404).send({ message: "Pilot not found" });
        }
        res.send({ message: "Pilot deleted successfully" });
    } catch (error) {
        res.status(500).send(error);
    }
};
