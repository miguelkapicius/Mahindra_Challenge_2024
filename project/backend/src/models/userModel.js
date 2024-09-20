import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    image_url: String,
    password: String,
});

export const User = mongoose.model("User", userSchema);
