import React from "react";
import { Formik } from "formik";

function ProfessionalLoan({handleSubmit}) {

    const [initialValues, setinitialValues] = React.useState({
        prof_loan_name: "",
        prof_loan_phone: "",
        prof_loan_email: "",
        prof_loan_profession: "",
        prof_loan_address: "",
        created_date_time: new Date(),
        type: "Professionalloan",
      });
  
      const validate = (values) => {
          const errors = {};
          if (!values.prof_loan_name) {
            errors.prof_loan_name = "Name is required";
          }
          if (!values.prof_loan_email) {
            errors.prof_loan_email = "Email is required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.prof_loan_email)
          ) {
            errors.prof_loan_email = "Invalid email address";
          }
          if (!values.prof_loan_phone) {
            errors.prof_loan_phone = "Phone number is required";
          }
          if (!values.prof_loan_profession) {
            errors.prof_loan_profession = "Profession is required";
          }
          if (!values.prof_loan_address) {
            errors.prof_loan_address = "Address is required";
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
                name="prof_loan_name"
                className="bg-light form-control mb-4"
                placeholder="Your Name"
              />
            </div>
            {errors.prof_loan_name && (
              <label for="amount">
                <span style={{ color: "red", marginLeft: 20 }}>
                  {errors.prof_loan_name &&
                    touched.prof_loan_name &&
                    errors.prof_loan_name}
                </span>
              </label>
            )}

            <div className="col-lg-12">
              <input
                type="number"
                name="prof_loan_phone"
                className="bg-light form-control mb-4"
                placeholder="Your Phone"
              />
            </div>
            {errors.prof_loan_phone && (
              <label for="amount">
                <span style={{ color: "red", marginLeft: 20 }}>
                  {errors.prof_loan_phone &&
                    touched.prof_loan_phone &&
                    errors.prof_loan_phone}
                </span>
              </label>
            )}

            <div className="col-lg-12">
              <input
                type="text"
                name="prof_loan_email"
                className="bg-light form-control mb-4"
                placeholder="Your Email"
              />
            </div>
            {errors.prof_loan_email && (
              <label for="amount">
                <span style={{ color: "red", marginLeft: 20 }}>
                  {errors.prof_loan_email &&
                    touched.prof_loan_email &&
                    errors.prof_loan_email}
                </span>
              </label>
            )}

            <div className="col-lg-12">
              <input
                type="text"
                name="prof_loan_profession"
                className="bg-light form-control mb-4"
                placeholder="Profession"
              />
            </div>
            {errors.prof_loan_profession && (
              <label for="amount">
                <span style={{ color: "red", marginLeft: 20 }}>
                  {errors.prof_loan_profession &&
                    touched.prof_loan_profession &&
                    errors.prof_loan_profession}
                </span>
              </label>
            )}

            <div className="col-lg-12">
              <textarea
                name="prof_loan_address"
                className="bg-light form-control mb-4"
                placeholder="Address"
              ></textarea>
            </div>
            {errors.prof_loan_address && (
              <label for="amount">
                <span style={{ color: "red", marginLeft: 20 }}>
                  {errors.prof_loan_address &&
                    touched.prof_loan_address &&
                    errors.prof_loan_address}
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

export default ProfessionalLoan;
