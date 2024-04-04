import React, { useState } from "react";
import Header from "../../../layouts/Header";
import Footer from "../../../layouts/Footer";
import HomeBanner from "../HomeBanner";
import BankSlider from "../BankSlider";
import About from "../about/About";
import DownloadSection from "../DownloadSection";
import Contact from "../contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { Formik } from "formik";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import "react-tabs/style/react-tabs.css";
import Tabs from "../../../components/Tab";

export default function Home() {
  const [form1, setForm1] = useState({});
  const [form2, setForm2] = useState({});
  const [form3, setForm3] = useState({});
  const [form4, setForm4] = useState({});
  const [form5, setForm5] = useState({});
  const [form6, setForm6] = useState({});
  const [form7, setForm7] = useState({});

  const [feedbackValues, setFeedbackValues] = React.useState({
    f_email: "",
    f_msg: "",
  });

  React.useEffect(() => {
    AOS.init();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const fvalidate = (values) => {
    const errors = {};
    if (!values.f_email) {
      errors.f_email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.f_email)
    ) {
      errors.f_email = "Invalid email address";
    }
    if (!values.f_msg) {
      errors.f_msg = "Message is required";
    } else {
      return true;
    }

    return errors;
  };

  const feedbackhandleSubmit = (values, setSubmitting) => {
    createPost(values, "feedback");
  };

  const createPost = (values, type) => {
    const postData = type === "feedback" ? values : form1;
    // axios
    //   .post("https://finedict.com:3003/addFeedback", postData)
    //   .then((response) => {
    //     if (response.status === 200) {
    //       Swal.fire({
    //         title: "Success",
    //         text: type === "feedback" ? "Thank you for your valuable feedback." : "Thank you for contacting us. We will reach out soon.",
    //         icon: "success",
    //         confirmButtonText: "OK",
    //       });
    //       setTimeout(() => window.location.reload(), 3000);
    //     } else {
    //       Swal.fire({
    //         title: "Error",
    //         text: "Could not process your request now. Try again later.",
    //         icon: "error",
    //         confirmButtonText: "OK",
    //       });
    //       setTimeout(() => window.location.reload(), 3000);
    //     }
    //   });
  };

  const submitDate = (type) => {
    let finalDataObj = form1;
    switch (type) {
      case "2":
        finalDataObj = form2;
        break;
      case "3":
        finalDataObj = form3;
        break;
      case "4":
        finalDataObj = form4;
        break;
      case "5":
        finalDataObj = form5;
        break;
      case "6":
        finalDataObj = form6;
        break;
      case "7":
        finalDataObj = form7;
        break;
      default:
        break;
    }

    axios
      .post("https://finedict.com:3003/addEnquiry", finalDataObj)
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({
            title: "Success",
            text: "Thank you for contacting us. We will reach out soon.",
            icon: "success",
            confirmButtonText: "OK",
          });
          setTimeout(() => window.location.reload(), 3000);
        } else {
          Swal.fire({
            title: "Error",
            text: "Could not process your request now. Try again later.",
            icon: "error",
            confirmButtonText: "OK",
          });
          setTimeout(() => window.location.reload(), 3000);
        }
      });
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <section style={{ background: '#040404' }}>
        <HomeBanner />
      </section>
      <section style={{ background: '#040404' }}>
        <BankSlider />
      </section>

      <section style={{ background: '#040404' }}>
        <About />
      </section>
      <section style={{ background: '#040404' }}>
        <DownloadSection />
      </section>

      <section style={{ background: '#040404' }}>
        <div style={{ paddingTop: 40, marginTop: 40 }}>
          <Tabs submitDate={submitDate} />
        </div>
      </section>

      <section style={{ background: '#040404' }}>
        <div style={{ paddingTop: 40, marginTop: 40 }}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2
                  className="section-title pb-5"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  style={{ color: "#ffffff" }}
                >
                  Feedback
                </h2>
              </div>

              <div className="col-md-12 text-center">
                <Formik
                  initialValues={feedbackValues}
                  validate={(values) => fvalidate(values)}
                  onSubmit={(values, { setSubmitting }) => {
                    feedbackhandleSubmit(values, setSubmitting);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          name="f_email"
                          className="form-control mb-4"
                          placeholder="Your Email"
                          value={values.f_email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.f_email && touched.f_email && (
                          <span style={{ color: "red", marginLeft: 20 }}>{errors.f_email}</span>
                        )}
                      </div>

                      <div className="col-lg-12">
                        <textarea
                          name="f_msg"
                          className="form-control mb-4"
                          placeholder="Message"
                          value={values.f_msg}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        ></textarea>
                        {errors.f_msg && touched.f_msg && (
                          <span style={{ color: "red", marginLeft: 20 }}>{errors.f_msg}</span>
                        )}
                      </div>

                      <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                          Submit Now
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
}
