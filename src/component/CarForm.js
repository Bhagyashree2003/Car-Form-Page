import React from "react";

function CarForm() {
  return (
    <div className="card" style={{ marginTop: "7vw" }}>
      <div className="card-body">
        <h5
          className="card-title"
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "2vw" }}
        >
          Rent A Car Online
        </h5>
        <form>
          <div className="mb-2" style={{ fontSize: "17px" }}>
            <label htmlFor="exampleInputEmail1" className="form-label">
              Full Name*
            </label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              aria-describedby="name"
              placeholder="Enter Your Full Name"
            />
            <label htmlFor="exampleInputEmail1" className="form-label">
              Contact Number*
            </label>
            <input
              type="text"
              className="form-control"
              id="contactno"
              aria-describedby="name"
              placeholder="Enter Your Contact number"
            />
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email Address*
            </label>
            <input
              type="email"
              className="form-control"
              id="emailaddres"
              aria-describedby="name"
              placeholder="Enter Your Email Address"
            />
            <label htmlFor="exampleInputEmail1" className="form-label">
              Select Car
            </label>
            <select
              type="text"
              className="form-control"
              id="selfdrive"
              aria-describedby="name"
            >
              <option> Chose your Option </option>
              <option> Hatchback</option>
              <option> Sedan</option>
              <option> SUV/MUV</option>
              <option> Premium</option>
              <option> Luxury</option>
            </select>

            <label htmlFor="exampleInputEmail1" className="form-label">
              Self Drive
            </label>
            <select
              type="text"
              className="form-control"
              id="selfdrive"
              aria-describedby="name"
            >
              <option> Chose your Option </option>
              <option> Yes</option>
              <option> No</option>
            </select>
            <label htmlFor="exampleInputEmail1" className="form-label">
              Choose Date
            </label>
            <input
              type="date"
              className="form-control"
              id="datepicker"
              aria-describedby="name"
            />
          </div>

          <button
            type="submit"
            className="btn btn-dark"
            style={{ width: "100%", fontSize: "17px" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CarForm;
