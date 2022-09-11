import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authQuestion from "./routes/Question.js";
import authAnswer from "./routes/Answer.js";
const PORT=80;
const app = express();
dotenv.config();

const connect = async () => {

    try {
        await mongoose.connect(process.env.url);
        console.log("Connected to mongoDB")
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!!!")
})
mongoose.connection.on("connected", ()=>{
    console.log("mongoDB connected!!!")
})


//middle layers
app.use(express.json());
app.use("/routes/Question",authQuestion)
app.use("/routes/Answer",authAnswer)

app.listen(PORT, () => {
    connect()
    console.log(`connected to backend!! ${PORT}`)
});

// app.listen(80, () => {
//     console.log("dotenv works");
//     console.log("listening to 80");
//   });