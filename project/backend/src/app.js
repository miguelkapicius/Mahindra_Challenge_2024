import express from "express";
import { createUserTable } from "./controllers/userController.js";
import userRouter from "./routes/userRoutes.js";
import cors from "cors";

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

app.use(userRouter); // rotas dos usuários

const PORT = process.env.PORT || 3000;

createUserTable();

app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
});
