import { Router } from "express";
import {
    createDriver,
    deleteDriver,
    getDrivers,
    updateDriver,
} from "../controllers/driverController.js";

export const driverRouter = Router();
const URL = "/drivers";

driverRouter.get(URL, getDrivers);
driverRouter.post(URL, createDriver);
driverRouter.put(URL, updateDriver);
driverRouter.delete(URL, deleteDriver);
