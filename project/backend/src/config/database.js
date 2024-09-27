import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://miguelkapicius:zhtX2qf19TQQQ9Lo@e-pit.iunc2.mongodb.net/?retryWrites=true&w=majority&appName=E-Pit/E-Pit`,
            {
                enableUtf8Validation: true,
            }
        );
        console.log("Database is running ✅");
    } catch (error) {
        console.log("Database error ⛔", error);
    }
};
