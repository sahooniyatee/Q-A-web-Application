import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authIndex from "./index.js";
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
app.use("/routes/index",authIndex)

app.listen(80, () => {
    connect()
    console.log("connected to backend!!")
});