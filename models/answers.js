// const mongoose = require("mongoose");
import mongoose from "mongoose";
const AnswerSchema = new mongoose.Schema({
  answer: String,
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "question",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  user: Object,
});

export default mongoose.model("answers", AnswerSchema);