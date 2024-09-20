import { app } from "./app.js";
import { connectDB } from "./config/database.js";
const PORT = 3000;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});
