import { Router } from "express";
import { importTeamsCSV } from "../controllers/teamController.js";

export const teamRouter = Router();

importTeamsCSV();
