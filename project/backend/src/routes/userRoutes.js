import { Router } from "express";
import {
    createUser,
    updateUser,
    readUsers,
    readUser,
    deleteUser,
} from "../controllers/userController.js";

// cria o roteador de usuários
const userRouter = Router();

// rotas dos usuários
userRouter.post("/users", createUser);
userRouter.get("/users", readUsers);
userRouter.get("/users/:id", readUser);
userRouter.put("/users/:id", updateUser);
userRouter.delete("/users/:id", deleteUser);

export default userRouter;
