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
      return { name: "Aquarius", video: require("./../assets/video/aquarius.mp4") };
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      return { name: "Pisces", video: require("./../assets/video/pisces.mp4") };
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      return { name: "Aries", video: require("./../assets/video/aries.mp4") };
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      return { name: "Taurus", video: require("./../assets/video/tauras.mp4") };
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      return { name: "Gemini", video: require("./../assets/video/gemini.mp4") };
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      return { name: "Cancer", video: require("./../assets/video/cancer.mp4") };
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      return { name: "Leo", video: require("./../assets/video/leo.mp4") };
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      return { name: "Virgo", video: require("./../assets/video/virgo.mp4") };
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      return { name: "Libra", video: require("./../assets/video/libra.mp4") };
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      return { name: "Scorpio", video: require("./../assets/video/scorpio.mp4") };
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      return { name: "Sagittarius", video: require("./../assets/video/sagittarius.mp4") };
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      return { name: "Capricorn", video: require("./../assets/video/capricorn.mp4") };
    } else {
      return { name: "Unknown", video: require("./../assets/img/bank/z1.jpg") };
    }
  }

  // if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
  //   return { name: "Aquarius", image: require("./../assets/zodiac/aquarius.PNG") };
  // } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
  //   return { name: "Pisces", image: require("./../assets/zodiac/pisces.PNG") };
  // } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
  //   return { name: "Aries", image: require("./../assets/zodiac/aries.PNG") };
  // } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
  //   return { name: "Taurus", image: require("./../assets/zodiac/tauras.PNG") };
  // } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
  //   return { name: "Gemini", image: require("./../assets/zodiac/gemini.PNG") };
  // } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
  //   return { name: "Cancer", image: require("./../assets/zodiac/cancer.PNG") };
  // } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
  //   return { name: "Leo", image: require("./../assets/zodiac/leo.PNG") };
  // } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
  //   return { name: "Virgo", image: require("./../assets/zodiac/virgo.PNG") };
  // } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
  //   return { name: "Libra", image: require("./../assets/zodiac/libra.PNG") };
  // } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
  //   return { name: "Scorpio", image: require("./../assets/zodiac/scorpio.PNG") };
  // } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
  //   return { name: "Sagittarius", image: require("./../assets/zodiac/sagittarius.PNG") };
  // } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
  //   return { name: "Capricorn", image: require("./../assets/zodiac/capricorn.PNG") };
  // } else {
  //   return { name: "Unknown", image: require("./../assets/img/bank/z1.jpg") };
  // }


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
  console.log(zodiacSign)

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
              <button type="submit" className="btn btn-primary mr-2" style={{ margin: '5px' }} disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              <button type="button" className="btn btn-secondary" style={{ margin: '5px' }} onClick={handleReset}>
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
            {/* <img src={zodiacSign.image} alt={zodiacSign.name} className="zodiac-image" /> */}
            <video
              autoPlay
              loop
              muted
              playsInline
              src={zodiacSign.video}
              className="img-fluid rounded-lg zodiac-sign-video"
              data-aos="fade-left"
              data-aos-delay="1000"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ZodiacSign;
