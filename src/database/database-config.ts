import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const connectionString = process.env.NODE_ENV === "test" || process.env.NODE_ENV === "development" ? process.env.MONGODB_URI_TEST : process.env.MONGODB_URI;
    const connection = await mongoose.connect(connectionString || "YOUR CONNECTION STRING");
    console.log("base de datos conectada");
    return connection;
  }
  catch (error) {
    console.error(error);
  }
};

export default dbConnection;