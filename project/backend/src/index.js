const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
const PORT = 3000;

const Pilot = mongoose.model("Pilot", {
    firstName: String,
    lastName: String,
    team: String,
    countryFlag: String,
    countryName: String,
    image_url: String,
    price: Number,
    position: Number,
    points: Number,
    wins: Number,
});

app.get("/", async(req, res) => {
    const pilots = await Pilot.find()
    return res.send(pilots);
});

app.post("/", async (req, res) => {
    const pilot = new Pilot({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        team: req.body.team,
        countryFlag: req.body.countryFlag,
        countryName: req.body.countryName,
        image_url: req.body.image_url,
        price: req.body.price,
        position: req.body.position,
        points: req.body.points,
        wins: req.body.wins,
    });

    await pilot.save();

    console.log("Pilot created")
    return res.send(pilot);
});

app.put("/:id", async(req, res) => {
    const pilot = await Pilot.findByIdAndUpdate(req.params.id, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        team: req.body.team,
        countryFlag: req.body.countryFlag,
        countryName: req.body.countryName,
        image_url: req.body.image_url,
        price: req.body.price,
        position: req.body.position,
        points: req.body.points,
        wins: req.body.wins,
    }, {
        new: true
    })
    console.log("Pilot updated")
    return res.send(pilot)
})

app.delete("/:id", async(req, res) => {
    const pilot = await Pilot.findByIdAndDelete(req.params.id)
    console.log("Pilot deleted")
    return res.send(pilot)
})

app.listen(PORT, () => {
    mongoose.connect("mongodb://localhost:27017/");

    console.log(`Server is running on port ${PORT}`);
});
