import express from "express";
// const express = require("express");
import answers from "../models/answers.js";
//const question = require("../models/question");
const router = express.Router();

// const answerDB = require("../models/answers");

router.post("/", async (req, res) => {
  try {
    await answers
      .create({
        answer: req.body.answer,
        questionId: req.body.questionId,
        user: req.body.user,
      })
      .then(() => {
        res.status(201).send({
          status: true,
          message: "Answer added successfully",
        });
      })
      .catch((e) => {
        res.status(400).send({
          status: false,
          message: "Bad request",
        });
      });
  } catch (e) {
    res.status(500).send({
      status: false,
      message: "Error while adding answer",
    });
  }
});

export default router