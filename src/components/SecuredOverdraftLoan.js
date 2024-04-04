import React,{useState} from 'react'
import { Formik } from "formik";

function SecuredOverdraftLoan({handleSubmit}) {
    const [initialValues, setinitialValues] = React.useState({
        se_draft_name : "",
        se_draft_email: "",
        se_draft_phone: "",
        se_draft_agriculture: "",
        se_draft_itr: "",
        se_draft_address: "",
        created_date_time: new Date(),
        type: "securedOverdraftLimit",
      });
    
      const validate = (values) => {
        const errors = {};
        if (!values.se_draft_name) {
          errors.se_draft_name = "Name is required";
        }
        if (!values.se_draft_email) {
          errors.se_draft_email = "Email is required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.se_draft_email)
        ) {
          errors.se_draft_email = "Invalid email address";
        }
        if (!values.se_draft_phone) {
          errors.se_draft_phone = "Phone number is required";
        }
        if (!values.se_draft_agriculture) {
            errors.se_draft_agriculture = "agriculture is required";
        }
        if (!values.se_draft_itr) {
            errors.se_draft_itr = "ITR is required";
        }
        if (!values.se_draft_address) {
          errors.se_draft_address = "Address is required";
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
            <form className="row" onChange={handleChange} onSubmit={handleSubmit}>
              <div className="col-lg-12">
                <input
                  type="text"
                  name="se_draft_name"
                  className="bg-light form-control mb-4"
                  placeholder="Your Name"
                />
              </div>
              {errors.se_draft_name && (
                <label for="amount">
                  <span style={{ color: "red", marginLeft: 20 }}>
                    {errors.se_draft_name &&
                      touched.se_draft_name &&
                      errors.se_draft_name}
                  </span>
                </label>
              )}

              <div className="col-lg-12">
                <input
                  type="number"
                  name="se_draft_phone"
                  className="bg-light form-control mb-4"
                  placeholder="Your Phone"
                />
              </div>
              {errors.se_draft_phone && (
                <label for="amount">
                  <span style={{ color: "red", marginLeft: 20 }}>
                    {errors.se_draft_phone &&
                      touched.se_draft_phone &&
                      errors.se_draft_phone}
                  </span>
                </label>
              )}

              <div className="col-lg-12">
                <input
                  type="text"
                  name="se_draft_email"
                  className="bg-light form-control mb-4"
                  placeholder="Your Email"
                />
              </div>
              {errors.se_draft_email && (
                <label for="amount">
                  <span style={{ color: "red", marginLeft: 20 }}>
                    {errors.se_draft_email &&
                      touched.se_draft_email &&
                      errors.se_draft_email}
                  </span>
                </label>
              )}

              <div className="col-lg-12 ml-3 mb-3">
                <p style={{ fontSize: "1rem" }}>Agriculture Land 2 Bigha</p>
                <input
                  type="radio"
                  id="yes"
                  name="se_draft_agriculture"
                  value="Yes"
                />
                  <label for="Yes">Yes</label>
                 {" "}
                <input
                  type="radio"
                  id="no"
                  name="se_draft_agriculture"
                  value="No"
                />
                  <label for="No">No</label>
                <br />
              </div>
              {errors.se_draft_agriculture && (
                <label for="amount">
                  <span style={{ color: "red", marginLeft: 20 }}>
                    {errors.se_draft_agriculture &&
                      touched.se_draft_agriculture &&
                      errors.se_draft_agriculture}
                  </span>
                </label>
              )}
              <div className="col-lg-12 ml-3 mb-3">
                <p style={{ fontSize: "1rem" }}>2 Year ITR</p>
                <input
                  type="radio"
                  id="yes"
                  name="se_draft_itr"
                  value="Yes"
                />  <label for="Yes">Yes</label>
                  <input
                  type="radio"
                  id="no"
                  name="se_draft_itr"
                  value="No"
                />  <label for="No">No</label>
                <br />
              </div>
              {errors.se_draft_itr && (
                <label for="amount">
                  <span style={{ color: "red", marginLeft: 20 }}>
                    {errors.se_draft_itr &&
                      touched.se_draft_itr &&
                      errors.se_draft_itr}
                  </span>
                </label>
              )}
              <div className="col-lg-12">
                <textarea
                  name="se_draft_address"
                  className="bg-light form-control mb-4"
                  placeholder="Address"
                ></textarea>
              </div>
              {errors.se_draft_address && (
                <label for="amount">
                  <span style={{ color: "red", marginLeft: 20 }}>
                    {errors.se_draft_address &&
                      touched.se_draft_address &&
                      errors.se_draft_address}
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
  )
}

export default SecuredOverdraftLoan