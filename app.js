import express from 'express';
import dotenv from 'dotenv';
import itemRouter from './Routes/FoodItemRoutes.js';
import { connectDB } from "./db/database.js";
import { fileURLToPath } from "url"; 
import path from "path";  

dotenv.config();
connectDB();
export const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Using middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "Views")));

// Using routes
app.use("/api/fooditem", itemRouter);

app.get("/", (req, res) => {
   res.sendFile(path.join(__dirname, "View", "index.html"));
})

