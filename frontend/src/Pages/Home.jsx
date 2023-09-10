import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center">
      <div className="row container">
        <div
          className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
          style={{ height: "91.5vh" }}
        >
          <h2 style={{ fontSize: "90px" }}>BOOK STORE </h2>
          <h3 style={{ fontSize: "50px" }}>FOR YOU..</h3>
          <p className="mb-0" style={{ color: "silver" }}>
            Checkout the Books From here..
          </p>
          <Link to="/books" className="viewBook mt-4">
            View Books
          </Link>
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
