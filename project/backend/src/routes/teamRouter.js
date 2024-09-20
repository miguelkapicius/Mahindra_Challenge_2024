import { Router } from "express";
import {
    createTeam,
    deleteTeam,
    getTeams,
    updateTeam,
} from "../controllers/teamController.js";

export const teamRouter = Router();
const URL = "/teams";

teamRouter.get(URL, getTeams);
teamRouter.post(URL, createTeam);
teamRouter.put(URL, updateTeam);
teamRouter.delete(URL, deleteTeam);
