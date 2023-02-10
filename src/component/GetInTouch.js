import React from "react";

function GetInTouch() {
  return (
    <div
      className="container"
      style={{ color: "white", margin: "12% 5% 0 5vw" }}
    >
      <p style={{ fontSize: "5vw", fontWeight: "bold" }}>
        Book A Cab Online Starts From 8/ Per KM
      </p>
      <p style={{ fontSize: "24px" }}>
        Book a cab from wide range of cars available. Book for one way, round
        trip, self drive. Rent a car @ lowest prices. Best & well maintained
        cars.
      </p>
      <button
        className="btn btn-danger btn-outline-primary"
        style={{ color: "white", border: "black", fontSize: "17px" }}
      >
        Get in Touch
      </button>
    </div>
  );
}

export default GetInTouch;
