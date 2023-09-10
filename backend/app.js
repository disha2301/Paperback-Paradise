const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const booksRoute = require("./routes/booksRoute");
dotenv.config();
const app = express();
//middlewares
app.use(cors());
app.use(express.json());
app.use("/api/books", booksRoute);

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("connected to database");
});
app.listen(1000, () => {
  console.log("Server started");
});
