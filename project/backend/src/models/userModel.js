import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    imageUrl: String,
    password: String,
    drivers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Driver",
        },
    ],
});

export const User = mongoose.model("User", userSchema);
