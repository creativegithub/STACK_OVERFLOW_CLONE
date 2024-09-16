import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userroutes from "./routes/user.js";
import questionroutes from "./routes/question.js";
import answerroutes from "./routes/answer.js";

const app = express();

dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user", userroutes);
app.use("/questions", questionroutes);
app.use("/answer", answerroutes);

app.get("/", (req, res) => {
  res.send("Stack Overflow is running perfect");
});

const PORT = process.env.PORT || 5000;

const DB_URL = process.env.MGDB_URL;

mongoose
  .connect(DB_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    })
  )
  .catch((err) => console.log("MongoDB connection error:", err.message));
