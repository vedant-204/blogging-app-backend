import mongoose from "mongoose";
import config from "./serverConfig";

export const connect = async () => {
  try {
    await mongoose.connect(config.DB_URL);
  } catch (error) {
    console.log("Error while connecting to database : " + error.message);
  }
}
