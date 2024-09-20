import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://localhost:27017/E-Pit`, {
            enableUtf8Validation: true,
        });
        console.log("Database is running ✅");
    } catch (error) {
        console.log("Database error ⛔", error);
    }
};
