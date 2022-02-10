import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "STRING CONNECTION");
    console.log("Base de datos conectada");
  }
  catch (error) {
    console.error(error);
    throw new Error("Error al conectar base de datos");
  }
};

export default dbConnection;