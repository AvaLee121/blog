import mongoose from "mongoose";

const connect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
    return connection; // Return the connection instance for reuse
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Connection failed!");
  };
}


export default connect;