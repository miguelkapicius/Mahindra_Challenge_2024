import { Router } from "express";
import { createUser, deleteUser, getUsers, loginUser, logoutUser, updateUser } from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/auth.js";
export const userRouter = Router();

// users
userRouter.get("/users", getUsers);
userRouter.post("/users", createUser);
userRouter.put("/users/:id", authMiddleware, updateUser);
userRouter.delete("/users/:id", authMiddleware, deleteUser);

// login
userRouter.post("/login", loginUser);
userRouter.post("/logout", authMiddleware, logoutUser);