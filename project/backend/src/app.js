import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./routes/userRouter.js";

dotenv.config();

export const app = express();
app.use(express.json());
app.use(cors());

// import routes
app.use(userRouter);
