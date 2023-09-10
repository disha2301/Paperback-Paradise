import React from "react";

const AddBooks = () => {
  return (
    <div className="bg-dark" style={{ minHeight: "91vh" }}>
      <div className="container">
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
      </div>
    </div>
  );
};

export default AddBooks;
