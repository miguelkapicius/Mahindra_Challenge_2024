import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./routes/userRouter.js";
import { driverRouter } from "./routes/driverRouter.js";
import { teamRouter } from "./routes/teamRouter.js";
import { seasonRouter } from "./routes/seasonRouter.js";
import { resultRouter } from "./routes/resultRouter.js";

dotenv.config();

export const app = express();
app.use(express.json());
app.use(cors());

// import routes
app.use(userRouter);
app.use(driverRouter);
app.use(teamRouter);
app.use(seasonRouter);
app.use(resultRouter);
