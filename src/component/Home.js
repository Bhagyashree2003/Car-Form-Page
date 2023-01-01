import React from "react";
import GetInTouch from "./GetInTouch";
import CarForm from "./CarForm";
function Home() {
  return (
    <div
      className="container "
      style={{
        // backgroundColor: "black",
        backgroundImage: "/src/images/car.jpg",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <div className="row ">
        <div className="col-12 col-lg-8 col-sm-6" style={{ marginTop: "7vw" }}>
          <GetInTouch />
        </div>
        <div className="col-12 col-lg-4 col-sm-6">
          <CarForm />
        </div>
      </div>
    </div>
  );
}

export default Home;
