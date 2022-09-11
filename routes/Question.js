import express from "express";
// const express = require("express");
import question from "../models/question.js";
//const question = require("../models/question");
const router = express.Router();

// router.get("/",(req,res)=>{
    
//     res.send("this api ercived for QMS"):
// })
// export const createques = async (req,res,next) => {
//   const newQues = new question(req.body)

router.post("/", async (req, res) => {
    // console.log(req.body);
    // console.log("enters into router.post");

    // const newQuestion= new question(req.body)

    // try{
    //   console.log("entring into try block");
    //   const savedQuestion = await newQuestion.save();
    //   res.status(200).json(savedQuestion);
    // }catch(err){
    //   res.status(500).send({
    //     status: false,
    //     message: "Error while adding question",
    //   });
    // }
  
    try {
      console.log("enters into try");
      await question
        .create({
          questionName: req.body.questionName,
          questionUrl: req.body.questionUrl,
          user: req.body.user,
        })
        .then(() => {
          res.status(200).send({
            status: true,
            message: "Question added successfully",
          });
        })
        .catch((err) => {
          res.status(400).send({
            staus: false,
            message: "Bad format",
          });
        });
    } catch (e) {
      res.status(500).send({
        status: false,
        message: "Error while adding question",
      });
    }
  });
  
  router.get("/", async (req, res) => {
    try {
      await question
        .aggregate([
          {
            $lookup: {
              from: "answers", //collection to join
              localField: "_id", //field from input document
              foreignField: "questionId",
              as: "allanswers", //output array field
            },
          },
        ])
        .exec()
        .then((doc) => {
          res.status(200).send(doc);
        })
        .catch((error) => {
          res.status(500).send({
            status: false,
            message: "Unable to get the question details",
          });
        });
    } catch (e) {
      res.status(500).send({
        status: false,
        message: "Unexpected error",
      });
    }
  });
// router.use('/questions',questionRouter)
// router.use('/answers',answerRouter)
//  module.exports=router
 export default router