const app = require("express").Router();
const booksModel = require("../models/booksModel");
const bookModel = require("../models/booksModel");

//POST REQUEST

router.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const newBook = new booksModel(data);
    await newBook.save().then((res) => {
      res.status(200).json({ message: "Book Added Successfully" });
    });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
