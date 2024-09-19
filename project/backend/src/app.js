import express from "express";
import cors from "cors";

import { userRouter } from "./routes/userRoutes.js";
import { driverRouter } from "./routes/driverRoutes.js";
import { teamRouter } from "./routes/teamsRoutes.js";

import { createUserTable } from "./controllers/userController.js";
import { createDriverTable } from "./controllers/driverController.js";
import { createTeamTable } from "./controllers/teamController.js";

const app = express();

app.options(
    "*",
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Métodos permitidos
        allowedHeaders: ["Content-Type", "Authorization"], // Cabeçalhos permitidos
    })
);

app.use(express.json()); // permite receber dados no formato json

async function InitApp() {
    try {
        await createUserTable();
        await createDriverTable();
        await createTeamTable();

        app.use(userRouter);
        app.use(driverRouter);
        app.use(teamRouter);

        const PORT = process.env.PORT || 3000;

        app.listen(3000, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

InitApp();
