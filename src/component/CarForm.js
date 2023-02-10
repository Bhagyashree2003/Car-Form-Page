import React, { useState } from "react";

function CarForm() {
  const [userRegistration, setUserRegistration] = useState({
    fullname: "",
    contactno: "",
    emailaddres: "",
    selfdrive: "",
    selectcar: "",
    datepicker: "",
  });

  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserRegistration({
      fullname: "",
      contactno: "",
      emailaddres: "",
      selfdrive: "",
      selectcar: "",
      datepicker: "",
    });
  };
  return (
    <div className="card" style={{ margin: "7vw 4vw 7vw" }}>
      <div className="card-body">
        <h5
          className="card-title"
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "2vw",
            color: "black",
          }}
        >
          Rent A Car Online
        </h5>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-2" style={{ fontSize: "17px", color: "black" }}>
            <label htmlFor="exampleInputEmail1" className="form-label">
              Full Name*
            </label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              name="fullname"
              value={userRegistration.fullname}
              onChange={handleinput}
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
              name="contactno"
              value={userRegistration.contactno}
              onChange={handleinput}
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
              name="emailaddres"
              value={userRegistration.emailaddres}
              onChange={handleinput}
              aria-describedby="name"
              placeholder="Enter Your Email Address"
            />
            <label htmlFor="exampleInputEmail1" className="form-label">
              Select Car
            </label>
            <select
              type="text"
              className="form-control"
              id="selectcar"
              name="selectcar"
              value={userRegistration.selectcar}
              onChange={handleinput}
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
              name="selfdrive"
              value={userRegistration.selfdrive}
              onChange={handleinput}
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
              name="datepicker"
              value={userRegistration.datepicker}
              onChange={handleinput}
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
