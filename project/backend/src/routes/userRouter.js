import { Router } from "express";
import {
    createUser,
    deleteUser,
    getUsers,
    updateUser,
} from "../controllers/userController.js";

export const userRouter = Router();
const URL = "/users";

userRouter.get(URL, getUsers);
userRouter.post(URL, createUser);
userRouter.put(URL, updateUser);
userRouter.delete(URL, deleteUser);
