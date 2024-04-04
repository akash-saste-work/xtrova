import React from "react";
import { Formik } from "formik";

function PersonalLoan({handleSubmit}) {

    const [initialPersonalValues, setinitialPersonalValues] = React.useState({ 
        personal_loan_name: "",
        personal_loan_email: "",
        personal_loan_phone: "",
        personal_loan_income: "",
        personal_loan_department: "",
        personal_loan_address: "",
        created_date_time: new Date(),
        type: "personalLoan",
      });
      const validatePersonal = (values) => {
        const errors = {};
        if (!values.personal_loan_name) {
          errors.personal_loan_name = "Name is required";
        }
        if (!values.personal_loan_email) {
          errors.personal_loan_email = "Email is required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.personal_loan_email)
        ) {
          errors.personal_loan_email = "Invalid email address";
        }
        if (!values.personal_loan_phone) {
          errors.personal_loan_phone = "Phone number is required";
        }
        if (!values.personal_loan_income) {
          errors.personal_loan_income = "Income is required";
        }
        if (!values.personal_loan_department) {
          errors.personal_loan_department = "Department is required";
        }
        if (!values.personal_loan_address) {
          errors.personal_loan_address = "Address is required";
        }
        if (!errors) {
          return true;
        }
    
        return errors;
      };

  return (
    <>
      {/* <Formik
        initialValues={initialPersonalValues}
        validate={(values) => validatePersonal(values)}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, setSubmitting);
        }}
      >
        {({ errors, touched, handleChange, handleSubmit }) => (
          <form className="row" onChange={handleChange} onSubmit={handleSubmit}>
            <div className="col-lg-12">
              <input
                type="text"
                name="personal_loan_name"
                className="bg-light form-control mb-4"
                placeholder="Your Name"
              />
            </div>
            {errors.personal_loan_name && (
              <label for="amount">
                <span style={{ color: "red", marginLeft: 20 }}>
                  {errors.personal_loan_name &&
                    touched.personal_loan_name &&
                    errors.personal_loan_name}
                </span>
              </label>
            )}
            <div className="col-lg-12">
              <input
                type="number"
                name="personal_loan_phone"
                className="bg-light form-control mb-4"
                placeholder="Your Phone"
              />
            </div>
            {errors.personal_loan_phone && (
              <label for="amount">
                <span style={{ color: "red", marginLeft: 20 }}>
                  {errors.personal_loan_phone &&
                    touched.personal_loan_phone &&
                    errors.personal_loan_phone}
                </span>
              </label>
            )}
            <div className="col-lg-12">
              <input
                type="text"
                name="personal_loan_email"
                className="bg-light form-control mb-4"
                placeholder="Your Email"
              />
            </div>
            {errors.personal_loan_email && (
              <label for="amount">
                <span style={{ color: "red", marginLeft: 20 }}>
                  {errors.personal_loan_email &&
                    touched.personal_loan_email &&
                    errors.personal_loan_email}
                </span>
              </label>
            )}
            <div className="col-lg-12">
              <input
                type="number"
                name="personal_loan_income"
                className="bg-light form-control mb-4"
                placeholder="Salary"
              />
            </div>
            {errors.personal_loan_income && (
              <label for="amount">
                <span style={{ color: "red", marginLeft: 20 }}>
                  {errors.personal_loan_income &&
                    touched.personal_loan_income &&
                    errors.personal_loan_income}
                </span>
              </label>
            )}
            <div className="col-lg-12 ml-3 mb-3">
              <p style={{ fontSize: "1rem" }}>Department</p>
              <input
                type="radio"
                id="html"
                name="personal_loan_department"
                value="Government"
              />
                <label for="html">Government</label> {" "}
              <input
                type="radio"
                id="css"
                name="personal_loan_department"
                value="Private"
              />
                <label for="css">Private</label>
              <br />
            </div>
            {errors.personal_loan_department && (
              <label for="amount">
                <span style={{ color: "red", marginLeft: 20 }}>
                  {errors.personal_loan_department &&
                    touched.personal_loan_department &&
                    errors.personal_loan_department}
                </span>
              </label>
            )}
            <div className="col-lg-12">
              <textarea
                name="personal_loan_address"
                className="bg-light form-control mb-4"
                placeholder="Address"
              ></textarea>
            </div>
            {errors.personal_loan_address && (
              <label for="amount">
                <span style={{ color: "red", marginLeft: 20 }}>
                  {errors.personal_loan_address &&
                    touched.personal_loan_address &&
                    errors.personal_loan_address}
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
      </Formik> */}
      We can provide more services like kundli, horoscope etc...
    </>
  );
}

export default PersonalLoan;
