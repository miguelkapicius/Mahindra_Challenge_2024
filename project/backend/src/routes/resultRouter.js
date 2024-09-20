import { Router } from "express";
import {
    createResult,
    deleteResult,
    getResults,
    updateResult,
} from "../controllers/resultController.js";

export const resultRouter = Router();
const URL = "/results";

resultRouter.get(URL, getResults);
resultRouter.post(URL, createResult);
resultRouter.put(URL, updateResult);
resultRouter.delete(URL, deleteResult);
