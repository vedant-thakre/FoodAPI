import mongoose from "mongoose";
import colors from 'colors';

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "FoodItemAPI",
    })
    .then((c) => console.log(`Database Connected with ${c.connection.host}`.cyan.bold))
    .catch((e) => console.log(e));
};