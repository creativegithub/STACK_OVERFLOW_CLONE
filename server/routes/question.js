import express from "express";
import {
  askquestion,
  deletequestion,
  getallquestion,
  votequestion,
} from "../controller/question.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/ask", auth, askquestion);
router.get("/get", getallquestion);
router.delete("/delete/:id", auth, deletequestion);
router.patch("/vote/:id", auth, votequestion);

export default router;
