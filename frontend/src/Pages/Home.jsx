import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center">
      <div className="row container">
        <div
          className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
          style={{ height: "91.5vh" }}
        >
          <h2 style={{ fontSize: "70px" }}>BOOK STORE FOR YOU</h2>
          <button className="viewBook mt-4">View Books</button>{" "}
        </div>
        <div
          className="col-lg-6 d-flex justify-content-center align-items-end flex-column"
          style={{ height: "91.5vh" }}
        >
          <img src="/images/picture.jpg" alt="A bookshop" className="homeImg" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
