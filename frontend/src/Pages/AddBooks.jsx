import React from "react";

const AddBooks = () => {
  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-centers"
      style={{ minHeight: "91vh" }}
    >
      <div className="container p-4">
        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label text-white">
            Book Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Book Name"
          />
        </div>

        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label text-white">
            Author
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Author's Name"
          />
        </div>

        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label text-white">
            Description
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Book Description"
          />
        </div>

        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label text-white">
            Image
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter URL Of The Book Image"
          />
        </div>

        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label text-white">
            Price
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Book's Price"
          />
        </div>
        <button className="btn btn-success">Submit</button>
      </div>
    </div>
  );
};

export default AddBooks;
