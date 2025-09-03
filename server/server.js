import express from "express";
import dotenv from "dotenv";
import cors from "cors"; 
import connectDB from "./config/db.js";
import corsOptions from "./config/corsOptions.js";
import cookieParser from "cookie-parser";


dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json()); 
app.use(cors(corsOptions));
app.use(cookieParser())

// Test route
app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "🚀 API is running successfully!",
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
