const express = require("express");
const path = require("path");
const { initializeDatabase } = require("./src/config/database");
const userRoutes = require("./src/routes/userRoutes");
// Import other routes as needed

const app = express();
const port = 3000;

// Add middleware to parse JSON request bodies
app.use(express.json());

// Initialize database
initializeDatabase();

// Use routes
app.use("/api/users", userRoutes);
// Use other routes as needed

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
