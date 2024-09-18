import { Router } from "express";
import { importDriversCSV } from "../controllers/driverController.js";

export const driverRouter = Router();

importDriversCSV();
