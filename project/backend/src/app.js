const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
require("dotenv").config();

const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());

const User = mongoose.model("User", {
    name: String,
    username: String,
    email: String,
    image_url: String,
    password: String,
});

app.get("/", (req, res) => {
    return res.send("Hello World!");
});

app.get("/users", async (req, res) => {
    const users = await User.find();
    return res.send(users);
});

app.post("/users", (req, res) => {
    const user = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        image_url: req.body.image_url,
        password: req.body.password,
    });
    user.save().then(() => res.send("User Created"));
});

app.put("/users/:id", async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        image_url: req.body.image_url,
        password: req.body.password,
    });
    return res.send("User Updated!");
});

app.delete("/users/:id", async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.send("User Deleted!");
});

app.listen(port, () => {
    mongoose.connect(`mongodb://localhost:27017/E-Pit`);
    console.log("Server is running on port ", port);
});
