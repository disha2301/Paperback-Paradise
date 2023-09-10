import React, { useState } from "react";
import axios from "axios";

const AddBooks = () => {
  const [Data, setDate] = useState({
    bookname: "",
    author: "",
    description: "",
    price: "",
    image: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setDate({ ...Data, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:1000/api/books/add", Data)
      .then((res) => alert(res.data.message));
    setDate({
      bookname: "",
      author: "",
      description: "",
      price: "",
      image: "",
    });
  };
  console.log(Data);
  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-centers"
      style={{ minHeight: "91vh" }}
    >
      <div className="container p-4">
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Book Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Book Name"
            name="bookname"
            value={Data.bookname}
            onChange={change}
          />
        </div>

        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Author's Name"
            name="author"
            value={Data.author}
            onChange={change}
          />
        </div>

        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Book Description"
            name="description"
            value={Data.description}
            onChange={change}
          />
        </div>

        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label text-white">
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter URL Of The Book Image"
            name="image"
            value={Data.image}
            onChange={change}
          />
        </div>

        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Book's Price"
            name="price"
            value={Data.price}
            onChange={change}
          />
        </div>
        <button className="btn btn-success" onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddBooks;
