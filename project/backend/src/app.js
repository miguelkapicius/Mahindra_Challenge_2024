import express from "express";
import { createUserTable } from "./controllers/userController.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
app.use(express.json()); // permite receber dados no formato json

app.use(userRouter); // rotas dos usuários

const PORT = process.env.PORT || 3000;

createUserTable();

app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
});
