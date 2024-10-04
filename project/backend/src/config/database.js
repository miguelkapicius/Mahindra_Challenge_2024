import mongoose from "mongoose";
import "dotenv/config";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            enableUtf8Validation: true,
        });
        console.log("Database is running ✅");
    } catch (error) {
        console.log("Database error ⛔", error);
    }
};
