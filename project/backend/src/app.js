import express from "express";
import { createUserTable } from "./controllers/userController.js";

import userRouter from "./routes/userRoutes.js";

const app = express();

app.use(express.json()); // permite receber dados no formato json
app.use(userRouter);

const PORT = process.env.PORT || 3000;

createUserTable();

// app.get("/", (req, res) => {
//     res.send("Hello World");
// });

// app.get("/users", async (req, res) => {
//     const users = await readUsers();
//     res.json({
//         statusCode: 200,
//         users,
//     });
// });

// app.get("/users/:id", async (req, res) => {
//     const users = await readUser(req.params.id);
//     res.json({
//         statusCode: 200,
//         users,
//     });
// });

// app.post("/users", (req, res) => {
//     createUser(req.body);
//     res.json({
//         statusCode: 201,
//         message: "User created successfully",
//         data: req.body,
//     });
// });

// app.put("/users", (req, res) => {
//     if (!req.body.id) {
//         res.status(400).json({
//             statusCode: 400,
//             message: "User id is required",
//         });
//     }
//     updateUser(req.body);
//     res.json({
//         statusCode: 200,
//         message: "User updated successfully",
//         data: req.body,
//     });
// });

// app.delete("/users/:id", async (req, res) => {
//     const users = await deleteUser(req.params.id);
//     res.json({
//         statusCode: 204,
//         res: "User deleted successfully",
//     });
// });

app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
});
