import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    imageUrl: String,
    password: String,
    banner: String,
    coins: Number,
    points: Number,
    drivers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Driver",
        },
    ],
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
});

export const User = mongoose.model("User", userSchema);
