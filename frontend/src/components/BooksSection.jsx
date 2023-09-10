import React from "react";

const BooksSection = ({ data }) => {
  console.log(data);
  return (
    <div
      className="d-flex justify-content-around align-items-center flex-wrap
    my-3"
    >
      {data &&
        data.map((item, index) => (
          <div
            className=""
            style={{
              width: "200px",
              height: "350px",
              backgroundColor: "gray",
            }}
          >
            <div>
              <img
                style={{ width: "200px", height: "210px" }}
                className="img-fluid"
                src={item.image}
                alt="image"
              />
            </div>
            <h6 style={{ fontSize: "15px" }} className="px-2 m-0">
              {item.bookname.slice(0, 20)}...
            </h6>
            <p style={{ fontSize: "30px" }} className="m-0 px-2">
              Rs.{item.price}{" "}
            </p>
          </div>
        ))}
    </div>
  );
};

export default BooksSection;
