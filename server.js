import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// config env
dotenv.config();

// database config
connectDB();

// REST object
const app = express();

// REST API
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Volunteers Registration</h1>");
});

// PORT
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is Listening on ${PORT}`);
});
