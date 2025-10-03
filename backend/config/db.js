import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected 🟢");
  } catch (error) {
    console.error(`MongoDB Connection Failed 🔴 : ${error.message}`);
    process.exit(1);
  }
};
