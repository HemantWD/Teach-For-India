import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

// config env
dotenv.config();

// database config
connectDB();

// REST object
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api", authRoutes);

// REST API
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Volunteers Registration</h1>");
});

// PORT
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is Listening on ${PORT}`);
});
