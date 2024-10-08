import { Router } from "express";
import {
    createDriver,
    deleteDriver,
    getDrivers,
    updateDriver,
} from "../controllers/driverController.js";

export const driverRouter = Router();
const URL = "/drivers";

driverRouter.get("/drivers", getDrivers);
driverRouter.post("/drivers", createDriver);
driverRouter.put("/drivers/:id", updateDriver);
driverRouter.delete("/drivers/:id", deleteDriver);
