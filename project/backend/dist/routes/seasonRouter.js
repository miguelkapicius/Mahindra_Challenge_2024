import { Router } from "express";
import { createSeason, deleteSeason, getSeasons, updateSeason } from "../controllers/seasonController.js";
export const seasonRouter = Router();
const URL = "/seasons";
seasonRouter.get(URL, getSeasons);
seasonRouter.post(URL, createSeason);
seasonRouter.put(URL, updateSeason);
seasonRouter.delete(URL, deleteSeason);