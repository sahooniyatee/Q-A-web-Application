import express from "express";
import cors from "cors";
// const path = require("path");
import path from "path";
const app = express();
// const bodyParser = require("body-parser");
// import bodyParser from "body-parser";
// const PORT = 80;
// const db = require("./db");
// const router = require("./routes");
import router from "./routes";
// import dotenv from "dotenv";
//database connection

index.connect();

//middle ware
// app.use(bodyParser.json({ limit: "50mb" }));
// app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

//cors
app.use((req, res, next) => {
  req.header("Access-Control-Allow-Origin", "*");
  req.header("Access-Control-Allow-Headers", "*");
  next();
});

//routes

app.use("/api", router);

app.use("/uploads", express.static(path.join(__dirname, "/../querysystem/uploads")));
app.use(express.static(path.join(__dirname, "/../querysystem/frontend/build")));

app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(`${__dirname}/../querysystem/frontend/build/index.html`));
  } catch (e) {
    res.send("Oops! unexpected error");
  }
});

app.use(cors());

//server listening
