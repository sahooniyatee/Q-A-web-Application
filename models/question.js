// const mongoose = require("mongoose");

import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  questionName:{
    type: String,
    required:true,
  },
  questionUrl:{
    type: String,
    required:true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  answers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "answers",
  },
});

export default mongoose.model("question", questionSchema);