import { Router } from "express";
import {
    createPost,
    deletePost,
    getPosts,
    updateLikes,
} from "../controllers/postController.js";

export const postRouter = Router();
const URL = "/posts";

postRouter.get(URL, getPosts);
postRouter.post(URL, createPost);
postRouter.put("/posts/:id/like", updateLikes);
postRouter.delete(URL, deletePost);
