import mongoose from "mongoose";

export const postSchema = new mongoose.Schema(
    {
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        likes: {
            type: Number,
            default: 0,
        },
        likedBy: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
        },
        comments: {
            type: mongoose.Schema.ObjectId,
            ref: "Comment",
        },
    },
    {
        timestamps: true,
    }
);

export const Post = mongoose.model("Post", postSchema);
