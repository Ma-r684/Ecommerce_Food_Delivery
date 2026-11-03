import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://markpeterdoyoo:Markpetro123@cluster0.s1mzuub.mongodb.net/food_delivery");
    console.log("DB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
