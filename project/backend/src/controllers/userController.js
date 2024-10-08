import sign from "jsonwebtoken/sign.js";
import { User } from "../models/userModel.js";
import { compare, hash } from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export const getUsers = async (req, res) => {
    const users = await User.find();
    return res.json(users);
};

export const createUser = async (req, res) => {
    const { name, username, email, imageUrl, password } = req.body;

    const hashPassword = await hash(password, 10);
    const userExists = await User.findOne({ username: username });
    const emailExists = await User.findOne({ email: email });
    if (userExists || emailExists)
        return res.status(400).json({ error: "User already exist" });

    const user = new User({
        name,
        username,
        email,
        imageUrl,
        password: hashPassword,
        banner: "https://i.imgur.com/Z5dzbZ0.png",
        drivers: [],
        friends: [],
        coins: 300,
        points: 200,
    });

    await user
        .save()
        .then(() => res.status(201).json({ message: "User Created" }));
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(404).json({ error: "User is not found" });
    const isValuePassword = await compare(password, user.password);
    if (!isValuePassword)
        return res.status(404).json({ error: "Password is not found" });
    const token = sign({ id: user._id }, process.env.SECRET, {
        expiresIn: "1d",
    });
    return res.json({ user, token });
};

export const logoutUser = async (req, res) => {};

export const updateUser = async (req, res) => {
    const {
        name,
        username,
        email,
        imageUrl,
        banner,
        drivers,
        friends,
        coins,
        points,
    } = req.body;
    await User.findByIdAndUpdate(
        req.params.id,
        {
            name,
            username,
            email,
            imageUrl,
            drivers,
            friends,
            banner,
            coins,
            points,
        },
        { new: true }
    );
    return res.json({ message: "User Updated!" });
};

export const deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ message: "User Deleted!" });
};
