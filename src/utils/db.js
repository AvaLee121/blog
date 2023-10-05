import mongoose from "mongoose";

mongoose.set('strictQuery', true);

/* const connect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
    return connection; // Return the connection instance for reuse
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Connection failed!");
  };
} */

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;