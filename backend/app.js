const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URL).
then(()=>{
    console.log("connected to database")
}) 
app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(1000, () => {
  console.log("Server started");
});