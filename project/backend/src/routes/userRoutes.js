import { Router } from "express";
import {
    createUser,
    updateUser,
    readUsers,
    readUser,
    deleteUser,
} from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/users", createUser);
userRouter.get("/users", readUsers);
userRouter.get("/users/:id", readUser);
userRouter.put("/users/:id", updateUser);
userRouter.delete("/users/:id", deleteUser);

export default userRouter;
