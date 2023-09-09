const router = require("express").Router();
const booksModel = require("../models/booksModel");

//POST REQUEST
router.post("/add", async (req, res) => {
  try {
    const newBook = new booksModel(req.body);
    await newBook.save().then(() => {
      res.status(200).json({ message: "Book Added Successfully" });
    });
  } catch (error) {
    console.log(error);
  }
});
//GET REQUEST
router.get("/get", async (req, res) => {
  let books;
  try {
    books = await booksModel.find();
    res.status(200).json({ books });
  } catch (error) {
    console.log("error");
  }
});

//GET REQUEST BY ID
router.get("/get/:id", async (req, res) => {
  let book;
  const id = req.params.id;
  try {
    book = await booksModel.findById(id);
    res.status(200).json({ book });
  } catch (error) {
    console.log("error");
  }
});

//UPDATE BOOKS BY ID
router.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const { bookname, description, author, image, price } = req.body;
  let book;
  try {
    book = await booksModel.findByIdAndUpdate(id, {
      bookname,
      description,
      author,
      image,
      price,
    });
    await book
      .save()
      .then(() => res.send(200).json({ message: "Data Updated successfully" }));
  } catch (error) {
    console.log("error");
  }
});

//DELETE BOOK BY ID
router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await booksModel
      .findByIdAndDelete(id)
      .then(() => res.status(201).json({ message: "DELETE SUCCESSFULLY" }));
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
