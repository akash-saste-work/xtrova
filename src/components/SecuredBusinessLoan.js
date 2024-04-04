import React, { useState } from "react";
import { Formik } from "formik";

function SecuredBusinessLoan({ handleSubmit }) {
  const [securedBusinessform, setSecuredBusinessForm] = useState("null");
  const [initialValues, setinitialValues] =
    React.useState({
      sec_bus_loan_name: "",
      sec_bus_loan_phone: "",
      sec_bus_loan_email: "",
      sec_bus_loan_Income: "",
      sec_bus_loan_address: "",
      created_date_time: new Date(),
      type: "securedBusinessLoan",
    });

    const validate = (values) => {
        const errors = {};
        if (!values.sec_bus_loan_name) {
          errors.sec_bus_loan_name = "Name is required";
        }
        if (!values.sec_bus_loan_email) {
          errors.sec_bus_loan_email = "Email is required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.sec_bus_loan_email)
        ) {
          errors.sec_bus_loan_email = "Invalid email address";
        }
        if (!values.sec_bus_loan_phone) {
          errors.sec_bus_loan_phone = "Phone number is required";
        }
        if (securedBusinessform == "0" || securedBusinessform == "null") {
          if (!values.sec_bus_loan_Income) {
            errors.sec_bus_loan_Income = "Income is required";
          }
        }
        if (securedBusinessform == "1") {
          if (!values.sec_bus_loan_business_name) {
            errors.sec_bus_loan_business_name = "Business name is required";
          }
        }
        if (!values.sec_bus_loan_address) {
          errors.sec_bus_loan_address = "Address is required";
        }
        if (!errors) {
          return true;
        }
    
        return errors;
      };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={(values) => validate(values)}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, setSubmitting);
        }}
      >
        {({ errors, touched, handleChange, handleSubmit }) => (
          <form className="row" onChange={handleChange} onSubmit={handleSubmit} >
            <div className="col-lg-12">
              <input
                type="text"
                name="sec_bus_loan_name"
                className="bg-light form-control mb-4"
                placeholder="Your Name"
              />
            </div>
            {errors.sec_bus_loan_name && (
              <label for="amount">
                <span style={{ color: "red", marginLeft: 20 }}>
                  {errors.sec_bus_loan_name &&
                    touched.sec_bus_loan_name &&
                    errors.sec_bus_loan_name}
                </span>
              </label>
            )}
            <div className="col-lg-12">
              <input
                type="number"
                name="sec_bus_loan_phone"
                className="bg-light form-control mb-4"
                placeholder="Your Phone"
              />
            </div>
            {errors.sec_bus_loan_phone && (
              <label for="amount">
                <span style={{ color: "red", marginLeft: 20 }}>
                  {errors.sec_bus_loan_phone &&
                    touched.sec_bus_loan_phone &&
                    errors.sec_bus_loan_phone}
                </span>
              </label>
            )}
            <div className="col-lg-12">
              <input
                type="text"
                name="sec_bus_loan_email"
                className="bg-light form-control mb-4"
                placeholder="Your Email"
              />
            </div>
            {errors.sec_bus_loan_email && (
              <label for="amount">
                <span style={{ color: "red", marginLeft: 20 }}>
                  {errors.sec_bus_loan_email &&
                    touched.sec_bus_loan_email &&
                    errors.sec_bus_loan_email}
                </span>
              </label>
            )}
            <div className="col-lg-12 ml-3 mb-3">
              <p style={{ fontSize: "1rem" }}>Income</p>
              <input
                type="radio"
                id="html"
                name="income"
                checked={securedBusinessform === "0"}
                value="0"
                onChange={(e) => {
                  setSecuredBusinessForm(e.target.value);
                }}
              />
                <label for="html">Salary</label> {" "}
              <input
                type="radio"
                id="css"
                name="income"
                checked={securedBusinessform === "1"}
                value="1"
                onChange={(e) => {
                  setSecuredBusinessForm(e.target.value);
                }}
              />
                <label for="css">Business</label>
              <br />
            </div>

            {securedBusinessform == "null" ? (
              <div className="col-lg-12"> </div>
            ) : securedBusinessform == "0" ? (
              <div className="col-lg-12">
                <input
                  type="number"
                  name="sec_bus_loan_Income"
                  className="bg-light form-control mb-4"
                  placeholder="Enter Salary"
                />
              </div>
            ) : (
              <div className="col-lg-12">
                <input
                  type="text"
                  name="sec_bus_loan_business_name"
                  className="bg-light form-control mb-4"
                  placeholder="Enter Business Name"
                />
              </div>
            )}

            <div className="col-lg-12">
              <textarea
                name="sec_bus_loan_address"
                className="bg-light form-control mb-4"
                placeholder="Address"
              ></textarea>
            </div>
            {errors.sec_bus_loan_address && (
              <label for="amount">
                <span style={{ color: "red", marginLeft: 20 }}>
                  {errors.sec_bus_loan_address &&
                    touched.sec_bus_loan_address &&
                    errors.sec_bus_loan_address}
                </span>
              </label>
            )}
            <div className="col-12">
              <button value="Submit" type="submit" className="btn btn-primary">
                Submit Now
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}

export default SecuredBusinessLoan;