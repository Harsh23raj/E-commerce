import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://2303harshraj:Harsh2303%40@cluster0.wzlicwh.mongodb.net/ecommerce",
      {
        useNewUrlParser: true,
      }
    );
    console.log(
      `connected to Mongodb database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`error in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
