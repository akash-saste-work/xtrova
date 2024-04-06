import React, { useState } from "react";
import { Formik } from "formik";
import "./ZodiacSign.css";

function ZodiacSign() {
  const [initialValues, setInitialValues] = useState({
    birth_date: "",
  });

  const [zodiacSign, setZodiacSign] = useState(null);

  const getZodiacSign = (birthdate) => {
    const date = new Date(birthdate);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      return { name: "Aquarius", image: require("./../assets/img/bank/z9.jpg") };
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      return { name: "Pisces", image: require("./../assets/img/bank/z10.jpg") };
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      return { name: "Aries", image: require("./../assets/img/bank/z1.jpg") };
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      return { name: "Taurus", image: require("./../assets/img/bank/z2.jpg") };
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      return { name: "Gemini", image: require("./../assets/img/bank/z3.jpg") };
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      return { name: "Cancer", image: require("./../assets/img/bank/z4.jpg") };
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      return { name: "Leo", image: require("./../assets/img/bank/z11.jpg") };
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      return { name: "Virgo", image: require("./../assets/img/bank/z5.jpg") };
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      return { name: "Libra", image: require("./../assets/img/bank/z6.jpg") };
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      return { name: "Scorpio", image: require("./../assets/img/bank/z12.jpg") };
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      return { name: "Sagittarius", image: require("./../assets/img/bank/z8.jpg") };
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      return { name: "Capricorn", image: require("./../assets/img/bank/z7.jpg") };
    } else {
      return { name: "Unknown", image: require("./../assets/img/bank/z1.jpg") };
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.birth_date) {
      errors.birth_date = "Birth date is required";
    }
    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    const sign = getZodiacSign(values.birth_date);
    setZodiacSign(sign);
    setSubmitting(false);
  };

  const handleReset = () => {
    setInitialValues({
      birth_date: "",
    })
    setZodiacSign(null); 
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={(values) => validate(values)}
        onSubmit={(values, formikActions) => handleSubmit(values, formikActions)}
      >
        {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
          <form
            className="row"
            onChange={handleChange}
            onSubmit={handleSubmit}
            style={{ padding: "20px" }}
          >
            <div className="col-lg-12">
              <input
                type="date"
                name="birth_date"
                className="bg-light form-control mb-4"
                placeholder="Your Birth Date"
                value={values.birth_date}
              />
              {errors.birth_date && touched.birth_date && (
                <span style={{ color: "red", marginLeft: 20 }}>
                  {errors.birth_date}
                </span>
              )}
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary mr-2" style={{margin:'5px'}} disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              <button type="button" className="btn btn-secondary" style={{margin:'5px'}} onClick={handleReset}>
                Reset
              </button>
            </div>
          </form>
        )}
      </Formik>
      {zodiacSign && (
        <div className="row zodiac-container">
        <div className="col-12 mt-3">
          <h3 className="zodiac-title">Zodiac Sign: {zodiacSign.name}</h3>
          <img src={zodiacSign.image} alt={zodiacSign.name} className="zodiac-image" />
        </div>
      </div>
      )}
    </>
  );
}

export default ZodiacSign;
