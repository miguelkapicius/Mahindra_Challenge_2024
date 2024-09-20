import { User } from "../models/userModel.js";

export const getUsers = async (req, res) => {
    const users = await User.find();
    return res.send(users);
};

export const createUser = async (req, res) => {
    const user = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        image_url: req.body.image_url,
        password: req.body.password,
    });
    user.save().then(() => res.send("User Created"));
};

export const updateUser = async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        image_url: req.body.image_url,
        password: req.body.password,
    });
    return res.send("User Updated!");
};

export const deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.send("User Deleted!");
};
