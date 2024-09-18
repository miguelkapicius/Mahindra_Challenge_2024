import { Router } from "express";
import {
    createUser,
    updateUser,
    readUsers,
    readUser,
    deleteUser,
    loginUser,
} from "../controllers/userController.js";

// cria o roteador de usuários
export const userRouter = Router();

// rotas dos usuários
userRouter.post("/users", createUser);
userRouter.post("/login", loginUser);
userRouter.get("/users", readUsers);
userRouter.get("/users/:id", readUser);
userRouter.put("/users/:id", updateUser);
userRouter.delete("/users/:id", deleteUser);
